DocumentType = function DocumentType(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.rename(DocumentType.prototype, "DocumentType")
globalMy.functionprotect(DocumentType);
Object.setPrototypeOf(DocumentType.prototype,Node.prototype)

globalMy.mydefineProperty(DocumentType.prototype,'name','html',true,undefined,undefined,function name(){debugger;return globalMy.value.DocumentType_name;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(DocumentType.prototype).name.get,'get');
globalMy.value.DocumentType_name='html';
globalMy.mydefineProperty(DocumentType.prototype,'publicId','-//W3C//DTD XHTML 1.0 Transitional//EN',true,undefined,undefined,function publicId(){debugger;return globalMy.value.DocumentType_publicId;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(DocumentType.prototype).publicId.get,'get');
globalMy.value.DocumentType_publicId='-//W3C//DTD XHTML 1.0 Transitional//EN';
globalMy.mydefineProperty(DocumentType.prototype,'systemId','http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd',true,undefined,undefined,function systemId(){debugger;return globalMy.value.DocumentType_systemId;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(DocumentType.prototype).systemId.get,'get');
globalMy.value.DocumentType_systemId='http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd';
globalMy.mydefineProperty(DocumentType.prototype,'after',function after(){debugger;},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.after);
globalMy.mydefineProperty(DocumentType.prototype,'before',function before(){debugger;},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.before);
globalMy.mydefineProperty(DocumentType.prototype,'remove',function remove(){debugger;},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.remove);
globalMy.mydefineProperty(DocumentType.prototype,'replaceWith',function replaceWith(){debugger;},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.replaceWith);