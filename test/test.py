# encoding=utf-8
import json
import uuid

import execjs
import re
import requests
import time

# with open("rs5_rul_2.js", "r", encoding='utf-8')as f:
# jsCode = execjs.compile(f.read())

# print(jsCode.call("getEnv"))

with open("env.js", 'r', encoding='utf-8')as f:
    envCode = f.read()

with open("async.js", 'r', encoding='utf-8')as f:
    asyncCode = f.read()

# test = execjs.compile(envCode+'\n'+asyncCode)
# test.call("getCK")

# with open("firstHtml.js", 'r', encoding='utf-8')as f:
#     code = f.read()
#
# test = execjs.compile(code)
# print(test.call("getCK"))
#
# print(asdsad)

sess = requests.session()

headers = {
    'Host': 'qikan.cqvip.com',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9'
}
headers_js = {
    'Host': 'qikan.cqvip.com',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
    'Accept': '*/*',
    'Referer': 'http://qikan.cqvip.com/Qikan/Search/Advance?from=index',
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9'
}
sess.headers = headers

html = sess.get("http://qikan.cqvip.com/Qikan/Search/Advance?from=index").text
ck = dict(sess.cookies)

ts_js = re.findall(r"charset=\"utf-8\" src=\"(.*?)\"", html)[0]
print("第一个页面 ts_js name", ts_js)

GW1gelwM5YZuS = ck['GW1gelwM5YZuS']

ck_ts = "GW1gelwM5YZuS={}; ".format(GW1gelwM5YZuS)

headers_js['Cookie'] = ck_ts

ts_jscode = sess.get("http://qikan.cqvip.com" + ts_js, headers=headers_js).text
print("ts_jscode =>", ts_jscode)

html = html.replace("\n", "")
print("第一个页面html =>", html)

content = re.findall(r'<meta content=\"(.*?)\">', html)[0]
print("第一个页面meta content =>", content)

content_code = "metaDom.content='" + content + "';\n"

func_code = re.findall(" r='m'>(.*?)</script>", html)

# print(func_code)

code_1 = func_code[2]
code_2 = func_code[3]
code_3 = func_code[4]
print("第一个页面 code_1 =>", code_1)
print("第一个页面 code_2 =>", code_2)
print("第一个页面 code_3 =>", code_3)

begin = time.time()

CODE = envCode + '\n' + content_code + '\n' + ts_jscode + '\n\n' + code_1 + '\n' + '\n' + code_2 + '\n' + code_3 + '\n' + asyncCode + '\n'

with open("firstHtml.js", 'w', encoding='utf-8')as f:
    f.write(CODE)

jsCode = execjs.compile(CODE)

GW1gelwM5YZuT = jsCode.call("getCK").split("GW1gelwM5YZuT=")[1].split(";")[0]
print("第一个页面 GW1gelwM5YZuT =>", GW1gelwM5YZuT)

end = time.time()

env_code = jsCode.call("getEnv")

header_ck = "GW1gelwM5YZuS={}; GW1gelwM5YZuT={}".format(GW1gelwM5YZuS, GW1gelwM5YZuT)
print("耗时{} 秒".format(end - begin))

headers['Cookie'] = header_ck
# print(jsCode.call("getUrlParam"))

print("------------------------------------------进入首页----------------------------------------------------------")

html = sess.get("http://qikan.cqvip.com/Qikan/Search/Advance?from=index", headers=headers).text

ht_code_list = re.findall(r'hm.src = "(.*?)";', html)

ht_code_url_1 = ht_code_list[0]
ht_code_url_2 = ht_code_list[1]
ht_code_url_3 = ht_code_list[2]

ck = dict(sess.cookies)
# print("首页html =>", html)

print("进入首页的第一次 ck =>", ck)

# e0dbb87dcf = ck['e0dbb87dcf']
ck_param = ck['7078512fe8']
ts_js = re.findall(r"charset=\"utf-8\" src=\"(.*?)\"", html)[0]

print("首页 ts_js name", ts_js)

ck_ts = "GW1gelwM5YZuS={}; ".format(GW1gelwM5YZuS)

headers_js['Cookie'] = ck_ts

ts_jscode = requests.get("http://qikan.cqvip.com" + ts_js, headers=headers_js).text

print("首页 ts_jscode =>", ts_jscode)

ck_code = "globalMy.value.Document_cookie='7078512fe8={}; GW1gelwM5YZuT={}'".format(ck_param, GW1gelwM5YZuT)

func_code = re.findall("\"text/javascript\" r='m'>(.*?)</script>", html)[0]
print("首页 func_code =>", func_code)

content = re.findall(r'<meta content=\"(.*?)\">', html)[0]

print("首页 meta content =>", content)

content_code = "metaDom.content='" + content + "';\n"

GW1gelwM5YZuS = ck['GW1gelwM5YZuS']

CODE = envCode + '\n' + content_code + '\n' + ck_code + '\n\n' + env_code + '\n' + ts_jscode + '\n' + func_code + '\n' + asyncCode + '\n'

with open("doubleHtml.js", 'w', encoding='utf-8')as f:
    f.write(CODE)

jsCode = execjs.compile(CODE)
new_env_code = jsCode.call("getEnv")
CODE.replace(env_code, new_env_code)

headers = {
    "Accept": "text/html, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Content-Length": "878",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Host": "qikan.cqvip.com",
    "Origin": "http://qikan.cqvip.com",
    "Referer": "http://qikan.cqvip.com/Qikan/Search/Advance?from=index",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest"
}

for i in range(1, 4):
    GW1gelwM5YZuT = jsCode.call("getCK").split("GW1gelwM5YZuT=")[1].split(";")[0]
    ck['GW1gelwM5YZuT'] = GW1gelwM5YZuT
    header_ck = ''
    for x in ck:
        header_ck += "{}={}; ".format(x, ck[x])
    print(header_ck)
    header_ck = header_ck[0:-2]
    headers['Cookie'] = header_ck
    url = jsCode.call("getUrlParam", "/Search/SearchList").replace(":80", "")

    print("----------------------------------------第{}次搜索 url---------------------------------".format(i), url)

    uid = str(uuid.uuid1())
    data = {
        "searchParamModel": "{\"ObjectType\":1,\"SearchKeyList\":[{\"FieldIdentifier\":\"M\",\"SearchKey\":\"人工智能\",\"PreLogicalOperator\":\"\",\"IsExact\":\"0\"}],\"SearchExpression\":\"\",\"BeginYear\":\"\",\"EndYear\":\"\",\"JournalRange\":\"\",\"DomainRange\":\"\",\"PageSize\":\"" + str(
            i) + "\",\"PageNum\":\"1\",\"Sort\":\"0\",\"ClusterFilter\":\"\",\"SType\":\"\",\"StrIds\":\"\",\"UpdateTimeType\":\"\",\"ClusterUseType\":\"Article\",\"IsNoteHistory\":1,\"AdvShowTitle\":\"题名或关键词=人工智能\",\"ObjectId\":\"\",\"ObjectSearchType\":\"0\",\"ChineseEnglishExtend\":\"0\",\"SynonymExtend\":\"0\",\"ShowTotalCount\":\"0\",\"AdvTabGuid\":\"" + uid + "\"}"
    }

    response = sess.post(url, headers=headers, data=data, verify=False)

    print(
        "------------------------------------------第{}次搜索 status_code------------------------".format(
            i),
        response.status_code)



    ck = dict(sess.cookies)

    # print(
    #     "----------------------------第{}次搜索 ck--------------------".format(
    #         i), ck)

# 3个 hm  sensorsdata  dfxaf  共5个,补齐cookie以及localStorage的一些参数
