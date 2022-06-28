# 浏览器沙箱

1.这个是作者自己写的很简单的一个浏览器沙箱，有很多东西木有补充。

2.这个沙箱主要针对某普期刊的rs5第一部分js进行补充环境。

3.沙箱主要用途是为了做调试用的，来检测rs5运行JS过程用到的环境。

4.沙箱默认关闭代理，代理window等属性时，会导致window instanceof Window，location === document.location
这样的判断为false，关闭代理则不会。

5.目前只简单的完成了document.createElement的部分,基本可以使用
document.getElementByTagName以及document.getElementById来
找到符合条件的节点。通过节点可以得到父节点、可以得到当前节点的前后节点或当前节点的前后元素(element)。

6.创建元素时的属性赋值问题，还没有完善，只对几个重要属性进行了赋值。

7.重要的方法都在Memory.js当中了，没有啥注释...实现的思路太过于简单，也没啥好写的。

8.dump_env.js是脱环境用的，写的没有很规范，有点乱，还没重构。dump_proto是用来dump dom原型链的属性.
例子 dump_proto(HTMLAnchorElement,document.createElement("a"))
然后HTMLAnchorElement又继承自HTMLElement,
那么再调用dump_proto(HTMLElement,document.createElement("a"))，用来获取a继承HTMLElement的属性。
以此类推，直到继承EventTarget就结束了.其实到Node的时候就结束了
由于其他dom元素也会继承HTMLElement、Element、Node的，这时候就需要区分是关于哪个元素来获取属性。

dump_obj是用来取localStorage,location等属性的值,例子 dump_obj(localStorage,"localStorage")

9.addEventListener以及dispatchEvent方法在EventTarget.js中，是在w3c官网上抄的，程序员嘛，无非就是C+V。

10.大佬们如果有更好的建议可以加我好友 1491025307（q/v同号）。作者代码写的烂，不喜勿喷~~

写了一篇博客关于rs5的几个检测环境的地方

https://blog.csdn.net/weixin_44862184/article/details/125302589?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165632472316782425163631%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165632472316782425163631&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-4-125302589-null-null.142^v24^control,157^v15^new_3&utm_term=%E6%9F%90%E7%BB%B4%E6%99%AE%E6%9C%9F%E5%88%8A&spm=1018.2226.3001.4187


陈不不大佬发了一个视频，关于浏览器沙箱的，可以看看。
https://www.bilibili.com/video/BV1LZ4y1e7Cf?spm_id_from=333.999.0.0


## 代码仅供逆向学习交流使用，请勿用于非法用途，否则后果自负！！！
