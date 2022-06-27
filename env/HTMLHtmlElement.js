HTMLHtmlElement = function HTMLHtmlElement(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLHtmlElement)
globalMy.rename(HTMLHtmlElement.prototype,"HTMLHtmlElement")

HTMLHtmlElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLHtmlElement.prototype,HTMLElement.prototype)

globalMy.mydefineProperty(HTMLHtmlElement.prototype,'version','',true,undefined,undefined,function version(){debugger;return globalMy.value.HTMLHtmlElement_version;},function version(val){debugger;globalMy.value.HTMLHtmlElement_version=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLHtmlElement.prototype).version.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLHtmlElement.prototype).version.set,'set');
globalMy.value.HTMLHtmlElement_version='';
