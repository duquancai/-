HTMLAllCollection = function HTMLAllCollection() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLAllCollection);
globalMy.rename(HTMLAllCollection.prototype,"HTMLAllCollection")
globalMy.mydefineProperty(HTMLAllCollection.prototype,'length',0,true,undefined,undefined,
    function length(){
    console.log("HTMLCollection => get length")
    debugger;
    return 0},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAllCollection.prototype).length.get,'get');

globalMy.mydefineProperty(HTMLAllCollection.prototype,'item',function item(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLAllCollection.prototype.item);
globalMy.mydefineProperty(HTMLAllCollection.prototype,'namedItem',function namedItem(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLAllCollection.prototype.namedItem);
