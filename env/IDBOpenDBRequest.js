IDBOpenDBRequest = function IDBOpenDBRequest () {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(IDBOpenDBRequest)
globalMy.rename(IDBOpenDBRequest.prototype,"IDBOpenDBRequest")
Object.setPrototypeOf(IDBOpenDBRequest.prototype,IDBRequest.prototype)

globalMy.mydefineProperty(IDBOpenDBRequest.prototype,'onblocked',{},true,undefined,undefined,function onblocked(){debugger;return globalMy.value.IDBOpenDBRequest_onblocked;},function onblocked(val){debugger;globalMy.value.IDBOpenDBRequest_onblocked=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onblocked.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onblocked.set,'set');
globalMy.value.IDBOpenDBRequest_onblocked={};
globalMy.mydefineProperty(IDBOpenDBRequest.prototype,'onupgradeneeded',{},true,undefined,undefined,function onupgradeneeded(){debugger;return globalMy.value.IDBOpenDBRequest_onupgradeneeded;},function onupgradeneeded(val){debugger;globalMy.value.IDBOpenDBRequest_onupgradeneeded=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onupgradeneeded.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onupgradeneeded.set,'set');
globalMy.value.IDBOpenDBRequest_onupgradeneeded={};