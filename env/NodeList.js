
NodeList = function NodeList(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(NodeList)
globalMy.rename(NodeList.prototype,"NodeList")
globalMy.mydefineProperty(NodeList.prototype,'entries',function entries(){debugger;},true,undefined,true);globalMy.functionprotect(NodeList.prototype.entries);
globalMy.mydefineProperty(NodeList.prototype,'keys',function keys(){debugger;},true,undefined,true);globalMy.functionprotect(NodeList.prototype.keys);
globalMy.mydefineProperty(NodeList.prototype,'values',function values(){debugger;},true,undefined,true);globalMy.functionprotect(NodeList.prototype.values);
globalMy.mydefineProperty(NodeList.prototype,'forEach',function forEach(){debugger;},true,undefined,true);globalMy.functionprotect(NodeList.prototype.forEach);
globalMy.mydefineProperty(NodeList.prototype,'length',2,true,undefined,undefined,function length(){debugger;return globalMy.value.NodeList_length;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(NodeList.prototype).length.get,'get');
globalMy.value.NodeList_length = 2;
globalMy.mydefineProperty(NodeList.prototype,'item',function item(){debugger;},true,undefined,true);globalMy.functionprotect(NodeList.prototype.item);