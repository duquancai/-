HTMLMetaElement = function HTMLMetaElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLMetaElement)
globalMy.rename(HTMLMetaElement.prototype, "HTMLMetaElement")
HTMLMetaElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype)



globalMy.mydefineProperty(HTMLMetaElement.prototype,'name','',true,undefined,undefined,function name(){
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['name'];
    },
    function name(val){
    debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['name'] = val;
});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).name.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).name.set,'set');

globalMy.mydefineProperty(HTMLMetaElement.prototype,'httpEquiv','Content-Type',true,undefined,undefined,function httpEquiv(){debugger;return globalMy.value.HTMLMetaElement_httpEquiv;},function httpEquiv(val){debugger;globalMy.value.HTMLMetaElement_httpEquiv=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).httpEquiv.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).httpEquiv.set,'set');
globalMy.value.HTMLMetaElement_httpEquiv='Content-Type';

globalMy.mydefineProperty(HTMLMetaElement.prototype,'content','',true,undefined,undefined,function content(){
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['content'];}
,
    function content(val){
    debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['content'] = val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).content.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).content.set,'set');


globalMy.mydefineProperty(HTMLMetaElement.prototype,'scheme','',true,undefined,undefined,function scheme(){
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['scheme'];
    },function scheme(val){
    debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['scheme']=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).scheme.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).scheme.set,'set');


globalMy.mydefineProperty(HTMLMetaElement.prototype,'media','',true,undefined,undefined,function media(){
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['media'];
    }
    ,function media(val){debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['media'] = val;
});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).media.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).media.set,'set');
