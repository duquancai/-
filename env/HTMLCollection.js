HTMLCollection = function HTMLCollection () {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(HTMLCollection);
globalMy.rename(HTMLCollection.prototype,"HTMLCollection")
globalMy.mydefineProperty(HTMLCollection.prototype,'length',0,true,undefined,undefined,
    function length(){
    console.log("HTMLCollection => get length")
    debugger;
    return 0},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCollection.prototype).length.get,'get');

globalMy.mydefineProperty(HTMLCollection.prototype,'item',function item(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLCollection.prototype.item);
globalMy.mydefineProperty(HTMLCollection.prototype,'namedItem',function namedItem(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLCollection.prototype.namedItem);
HTMLCollection.prototype.__proto__ = Object.prototype;
