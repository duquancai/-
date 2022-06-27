# 浏览器沙箱
1.这个是作者自己写的很简单的一个浏览器沙箱，有很多东西木有补充。
2.这个沙箱主要针对某普期刊的瑞数5第一部分js进行补充环境。
3.沙箱主要用途是为了做调试用的，来检测瑞数5运行JS过程用到的环境。
4.沙箱默认关闭代理，代理window等属性时，会导致window instanceof Window，location === document.location
这样的判断为false，关闭代理则不会。
5.目前只简单的完成了document.createElement的部分,基本可以使用
document.getElementByTagName以及document.getElementById来
找到符合条件的节点。通过节点可以得到父节点、可以得到当前节点的前后节点或当前节点的前后元素(element)。
6.创建元素时的属性赋值问题，没有完善，只对几个重要属性进行了赋值。
7.重要的方法都在Memory.js当中了，没有啥注释...实现的思路太过于简单，也没啥好写的。