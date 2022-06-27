HTMLDocument = function HTMLDocument(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(HTMLDocument);
globalMy.rename(HTMLDocument.prototype,"HTMLDocument")
HTMLDocument.__proto__ = Document;
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype);

document = {};
Object.setPrototypeOf(document,HTMLDocument.prototype);

document.nodeName = "#document";
document.nodeType = 9;


globalMy.mydefineProperty(document,"location",{

},true,true,true)
Object.setPrototypeOf(document,HTMLDocument.prototype)
Location = function Location(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(Location);
globalMy.rename(Location.prototype,"Location")
Object.setPrototypeOf(document.location,Location.prototype)
window.location = document.location;


globalMy.mydefineProperty(location,'ancestorOrigins',{},false,undefined,undefined,function ancestorOrigins(){debugger;return globalMy.value.location_ancestorOrigins;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).ancestorOrigins.get,'get');
globalMy.value.location_ancestorOrigins={};
globalMy.mydefineProperty(location,'href','http://qikan.cqvip.com/Qikan/Search/Advance?from=index',false,undefined,undefined,function href(){debugger;return globalMy.value.location_href;},function href(val){debugger;globalMy.value.location_href=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).href.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).href.set,'set');
globalMy.value.location_href='http://qikan.cqvip.com/Qikan/Search/Advance?from=index';
globalMy.mydefineProperty(location,'origin','http://qikan.cqvip.com',false,undefined,undefined,function origin(){debugger;return globalMy.value.location_origin;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).origin.get,'get');
globalMy.value.location_origin='http://qikan.cqvip.com';
globalMy.mydefineProperty(location,'protocol','http:',false,undefined,undefined,function protocol(){debugger;return globalMy.value.location_protocol;},function protocol(val){debugger;globalMy.value.location_protocol=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).protocol.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).protocol.set,'set');
globalMy.value.location_protocol='http:';
globalMy.mydefineProperty(location,'host','qikan.cqvip.com',false,undefined,undefined,function host(){debugger;return globalMy.value.location_host;},function host(val){debugger;globalMy.value.location_host=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).host.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).host.set,'set');
globalMy.value.location_host='qikan.cqvip.com';
globalMy.mydefineProperty(location,'hostname','qikan.cqvip.com',false,undefined,undefined,function hostname(){debugger;return globalMy.value.location_hostname;},function hostname(val){debugger;globalMy.value.location_hostname=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hostname.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hostname.set,'set');
globalMy.value.location_hostname='qikan.cqvip.com';
globalMy.mydefineProperty(location,'port','',false,undefined,undefined,function port(){debugger;return globalMy.value.location_port;},function port(val){debugger;globalMy.value.location_port=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).port.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).port.set,'set');
globalMy.value.location_port='';
globalMy.mydefineProperty(location,'pathname','/Qikan/Search/Advance',false,undefined,undefined,function pathname(){debugger;return globalMy.value.location_pathname;},function pathname(val){debugger;globalMy.value.location_pathname=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).pathname.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).pathname.set,'set');
globalMy.value.location_pathname='/Qikan/Search/Advance';
globalMy.mydefineProperty(location,'search','?from=index',false,undefined,undefined,function search(){debugger;return globalMy.value.location_search;},function search(val){debugger;globalMy.value.location_search=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).search.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).search.set,'set');
globalMy.value.location_search='?from=index';
globalMy.mydefineProperty(location,'hash','',false,undefined,undefined,function hash(){debugger;return globalMy.value.location_hash;},function hash(val){debugger;globalMy.value.location_hash=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hash.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hash.set,'set');
globalMy.value.location_hash='';
globalMy.mydefineProperty(location,'assign',function assign(){debugger;},false,undefined,false);globalMy.functionprotect(location.assign);
globalMy.mydefineProperty(location,'reload',function reload(){debugger;},false,undefined,false);globalMy.functionprotect(location.reload);
globalMy.mydefineProperty(location,'replace',function replace(){debugger;},false,undefined,false);globalMy.functionprotect(location.replace);

