sessionStorage = {
}
Object.setPrototypeOf(sessionStorage,Storage.prototype)

globalMy.mydefineProperty(sessionStorage,'$_YWTU',undefined,true,undefined,true,undefined,undefined);
globalMy.mydefineProperty(sessionStorage,'$_cDro',undefined,true,undefined,true,undefined,undefined);

globalMy.mydefineProperty(sessionStorage,'clear',function clear(){debugger;},true,undefined,true);globalMy.functionprotect(sessionStorage.clear);
globalMy.mydefineProperty(sessionStorage,'getItem',function getItem(tagName){
    debugger;
    return sessionStorage[tagName + ''];
},true,undefined,true);globalMy.functionprotect(sessionStorage.getItem);
globalMy.mydefineProperty(sessionStorage,'key',function key(){debugger;},true,undefined,true);globalMy.functionprotect(sessionStorage.key);
globalMy.mydefineProperty(sessionStorage,'removeItem',function removeItem(tagName){
    debugger;
    return delete sessionStorage[tagName];
},true,undefined,true);globalMy.functionprotect(sessionStorage.removeItem);
globalMy.mydefineProperty(sessionStorage,'setItem',function setItem(tagName,val){
    debugger;
    sessionStorage[tagName+''] = val;
    return undefined;
},true,undefined,true);globalMy.functionprotect(sessionStorage.setItem);
