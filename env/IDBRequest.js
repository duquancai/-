IDBRequest = function IDBRequest() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(IDBRequest)
globalMy.rename(IDBRequest.prototype,"IDBRequest")
Object.setPrototypeOf(IDBRequest.prototype,EventTarget.prototype)

globalMy.mydefineProperty(IDBRequest.prototype,'source',{},true,undefined,undefined,function source(){debugger;return globalMy.value.IDBRequest_source;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).source.get,'get');
globalMy.value.IDBRequest_source={};
globalMy.mydefineProperty(IDBRequest.prototype,'transaction',{},true,undefined,undefined,function transaction(){debugger;return globalMy.value.IDBRequest_transaction;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).transaction.get,'get');
globalMy.value.IDBRequest_transaction={};
globalMy.mydefineProperty(IDBRequest.prototype,'readyState','pending',true,undefined,undefined,function readyState(){debugger;return globalMy.value.IDBRequest_readyState;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).readyState.get,'get');
globalMy.value.IDBRequest_readyState='pending';
globalMy.mydefineProperty(IDBRequest.prototype,'onsuccess',{},true,undefined,undefined,function onsuccess(){debugger;return globalMy.value.IDBRequest_onsuccess;},function onsuccess(val){debugger;globalMy.value.IDBRequest_onsuccess=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onsuccess.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onsuccess.set,'set');
globalMy.value.IDBRequest_onsuccess={};
globalMy.mydefineProperty(IDBRequest.prototype,'onerror',{},true,undefined,undefined,function onerror(){debugger;return globalMy.value.IDBRequest_onerror;},function onerror(val){debugger;globalMy.value.IDBRequest_onerror=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onerror.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onerror.set,'set');
globalMy.value.IDBRequest_onerror={};