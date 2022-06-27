Storage = function Storage(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(Storage);
globalMy.rename(Storage.prototype,"Storage");
localStorage = {};
Object.setPrototypeOf(localStorage,Storage.prototype)


globalMy.mydefineProperty(Storage.prototype,'length',30,true,true,true)
globalMy.mydefineProperty(Storage.prototype,'clear',function clear(){debugger;},true,true,true);globalMy.functionprotect(Storage.prototype.clear);
globalMy.mydefineProperty(Storage.prototype,'getItem',function getItem(tagName){
    debugger;
    return localStorage[tagName+''];
},true,true,true);globalMy.functionprotect(Storage.prototype.getItem);
globalMy.mydefineProperty(Storage.prototype,'key',function key(){debugger;},true,true,true);globalMy.functionprotect(Storage.prototype.key);
globalMy.mydefineProperty(Storage.prototype,'removeItem',function removeItem(tagName){
    debugger;
    var result = delete localStorage[tagName+ ''];
    return result;
    },true,true,true);globalMy.functionprotect(Storage.prototype.removeItem);
globalMy.mydefineProperty(Storage.prototype,'setItem',function setItem(tagName,value){
    debugger;
    localStorage[tagName+ ''] = value;
    return undefined;
},true,true,true);globalMy.functionprotect(Storage.prototype.setItem);



//瑞数5
globalMy.mydefineProperty(localStorage,'$_nd',undefined,true, undefined, undefined,function $_nd(){
    return globalMy.value["$_nd"];
},function $_nd(val){
    globalMy.value["$_nd"] = val + ''
});globalMy.mydefineProperty(localStorage,'__#classType','localStorage',true,undefined,true,undefined,undefined);
globalMy.mydefineProperty(localStorage,'$_cDro',undefined,true,undefined,true,undefined,undefined);
globalMy.mydefineProperty(localStorage,'$_YWTU',undefined,true,undefined,true,undefined,undefined);

