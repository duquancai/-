HTMLCanvasElement = function HTMLCanvasElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLCanvasElement)
globalMy.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement")
HTMLCanvasElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype)

globalMy.mydefineProperty(HTMLCanvasElement.prototype,'width',300,true,undefined,undefined,function width(){
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['width'];
    },function width(val){debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['width'] = val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).width.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).width.set,'set');


globalMy.mydefineProperty(HTMLCanvasElement.prototype,'height',150,true,undefined,undefined,function height(){
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['height'];
},function height(val){debugger;
var foundName = globalMy.foundName(this);
globalMy.value[foundName]['height']=val;
});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).height.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).height.set,'set');


globalMy.mydefineProperty(HTMLCanvasElement.prototype,'captureStream',function captureStream(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.captureStream);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'getContext',function getContext(tagName){
    debugger;
    return globalMy.getContext(this,tagName)

},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.getContext);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'toBlob',function toBlob(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.toBlob);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'toDataURL',function toDataURL(){
    debugger;
    var foundName = globalMy.foundName(this)
//    直接return 一个base64得了
    return globalMy.value[foundName]['toDataURL'];
},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.toDataURL);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'transferControlToOffscreen',function transferControlToOffscreen(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.transferControlToOffscreen);


