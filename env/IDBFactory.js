IDBFactory = function IDBFactory () {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.rename(IDBFactory.prototype,"IDBFactory")
globalMy.functionprotect(IDBFactory)
indexedDB = {};
Object.setPrototypeOf(indexedDB,IDBFactory.prototype);

globalMy.mydefineProperty(IDBFactory.prototype,'cmp',function cmp(){debugger;},true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.cmp);
globalMy.mydefineProperty(IDBFactory.prototype,'databases',function databases(){debugger;},true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.databases);
globalMy.mydefineProperty(IDBFactory.prototype,'deleteDatabase',function deleteDatabase(){debugger;},true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.deleteDatabase);
globalMy.mydefineProperty(IDBFactory.prototype,'open',function open(name, version){
    debugger;
    console.log(`IDBFactory 打开数据库[open] => name:[${name}] banben:[${version}]`)

    if(version === undefined)
    {
        version = 1;
    }
    globalMy.element.indexedDB = {};
    globalMy.element.indexedDB = globalMy.proxy(globalMy.element.indexedDB);
    globalMy.rename(globalMy.element.indexedDB,"indexedDB");
    Object.setPrototypeOf(globalMy.element.indexedDB,IDBOpenDBRequest.prototype);
    return globalMy.element.indexedDB;
    },true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.open);