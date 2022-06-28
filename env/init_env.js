

//node下的allNodes存放的是所有节点的一个数组,NodeList
globalMy.node.document = {
    childNodes:[],
}
Object.setPrototypeOf(globalMy.node.document.childNodes,NodeList.prototype)

globalMy.node.allNodes = []
Object.setPrototypeOf(globalMy.node.allNodes,NodeList.prototype)

globalMy.element.document = document;
globalMy.value.document ={}
globalMy.node.document ={}
globalMy.node.document.childNodes = []
Object.setPrototypeOf(globalMy.node.document.childNodes,NodeList.prototype)

//设置document的第一个node节点
globalMy.element.documentType = {}
globalMy.value.documentType ={}
globalMy.node.documentType ={}
globalMy.node.documentType.childNodes = []
globalMy.value.documentType.nodeType = 10
globalMy.value.documentType.nodeName = 'html'
Object.setPrototypeOf(globalMy.element.documentType,DocumentType.prototype)
Object.setPrototypeOf(globalMy.node.documentType.childNodes,NodeList.prototype)
Object.setPrototypeOf(globalMy.element.documentType,DocumentType.prototype)


globalMy.element.html = document.createElement("html")

document.appendChild(globalMy.element.documentType)
document.appendChild(globalMy.element.html)

globalMy.element.head = document.createElement("head")
globalMy.element.body = document.createElement("body")


globalMy.element.html.appendChild(globalMy.element.head)
globalMy.element.html.appendChild(globalMy.element.body)

//这是head里的值
var metaDom = document.createElement("meta")

metaDom.content = "{qqqqqr0r7lcT39D988744qqqqhbeIjAQYgYSEr0c64.xypHgmH2o8y1epk6UdYLuYUr1XZKTfH13iydy2FMoyEqqqqYxNZbOyb6FIPCAPF8pTXQGr0c64r1qqqqhGg_lPow4u0Kr4qr0qqqqha53Pj_guJXPqAU0GyiOq93PWShuL0qqqqql4608.YC5sySKKhJ1V97DABk9sJ66GGdDGb3chWt3qvYtvTgZq~RV27rWpLTJkGbib9yipNOhrqLrTGvVPEzisW9hD9BRS0sUu7_R2QhtrLg3rgprD93lugalP3PEVgUlKEOJASjcb9BosafmuWUc0VIosUSH7E90CvX3i9FgsIP34a6XcUFFz9F4Kvh3MTb6ksGtzEISqoKDjQb.aU8cHpjCfkJWZ7ajGjNF7yNCGKBJIL5TS5VcdGvbruXmzQDSA.EF7VfZKv_mzgv6POmE5ahaO1hEgQ6SOuyWdgoTf.5IEyjGDKJRLSZ01DoHzGUPfMVD_lfPp5GIHNjdDUSRBrZ.1our.gefp1vRhG3bbjJFF7wvPPurjEPbpPdRigfBbBOr_gV7Kj8ixQqq| E09IEl0_YOZkimLepvWrx0L0pupJQqW_pC9rcvaysszWiVQDIoGkJVESpbqro0RXwnp.qlVt3YYHJlA13fwBhKaXFkyGJVS3s2SNUoLel1Sbr0Tmssp0Ampom1SrxUL4smRhmCgnpOZplprmY027JftuMeRfSK4X8.TlzpofQZLKSlht3MZF0Yk0mXRhTl65wXRrepUS8ZzlNKomRwfTXKBsVeSVuokrlizF40vAAwfZg9dBmJrZTvc1mQpC49ogsxTPPaHQA7wKnp_HRZRs4YvY3BTXarkrM5rJaKuRFXTHCADoqt1083179040VEo0p1SYElVLR7Scum.7RIkDGOiKVcMAAOiD9JIGy9AV0h8fmPlb9|okKrKDneUITpwrUg7MfrNm09mEaJ_VDf8HaRZsOQC3Szfqnl88rTfUbWD3pGfD6GF3YzOkKlYEppgmClfEYehHDW2HHYr4VOaEexbBluCpixU_0.Hh4JKyoOv3FrO5DoPE8mgdDDe35wfdno_8H2fXbHP3IpAz1dn8J2V4Os.JJrHjDB71W2OuTdx8BRWfuIe3exfScoo8WRffCHR3QlfaoOk3RSOSDo8EwTgCDoLQxNOaboVVhWqq!x7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipaqk674r0HsFYd9UnU8NJgbU9QVG22iK3u3kTvHD3gFOSPHKWf3cmO"



var scriptDom = document.createElement("script")
// scriptDom.setAttribute("r","m")

document['head'].appendChild(metaDom)
document['head'].appendChild(scriptDom)
document['head'].appendChild(scriptDom)

// document.cookie = 'GW1gelwM5YZuT=53.lR7KtSDM9qqqDrGZSQbal2JrFmMIX5umybWcdNM9C9ghtAbUgcYDsM40uwocRofZtuFb.v59YW7TjKd6z79nuF_SA1r4HBZM_83w_xHc_ocCoxhz0C_nt01G1Au1pwSyMwSs8_IQOae_l2OU0pib_VYoiw7z_FUHtSvPId7X3Qy5ugZqGl0syW_jsRq7uKZdRag3GeBzTzYDxEkyiKpmr.uo7Hn_C.I3Sc9cPSpHY32TkPTn_PCqzBSFZj8tLoSEwnpjnBvNQwMZ0zOgzgYV;'
// document.cookie = "e0dbb87dcf=a8689784c908323177b0bd80577db832; "

//项目环境
//加入meta、script到body节点中
