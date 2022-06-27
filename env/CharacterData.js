CharacterData = function CharacterData() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(CharacterData);
globalMy.rename(CharacterData.prototype,"CharacterData");
Object.setPrototypeOf(CharacterData.prototype,Node.prototype);


globalMy.mydefineProperty(CharacterData.prototype,'data','',true,undefined,undefined,function data(){debugger;return globalMy.value.CharacterData_data;},function data(val){debugger;globalMy.value.CharacterData_data=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).data.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).data.set,'set');
globalMy.value.CharacterData_data='';
globalMy.mydefineProperty(CharacterData.prototype,'length',1,true,undefined,undefined,function length(){debugger;return globalMy.value.CharacterData_length;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).length.get,'get');
globalMy.value.CharacterData_length=1;
//好像只找element，不是text
globalMy.mydefineProperty(CharacterData.prototype,'previousElementSibling',{},true,undefined,undefined,
    function previousElementSibling(){debugger;
    return globalMy.getPreviousElementSibling(this);
        },undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).previousElementSibling.get,'get');

globalMy.mydefineProperty(CharacterData.prototype,'nextElementSibling',{},true,undefined,undefined,
    function nextElementSibling(){debugger;

        return globalMy.getNextElementSibling(this);
    },undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).nextElementSibling.get,'get');

globalMy.mydefineProperty(CharacterData.prototype,'after',function after(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.after);
globalMy.mydefineProperty(CharacterData.prototype,'appendData',function appendData(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.appendData);
globalMy.mydefineProperty(CharacterData.prototype,'before',function before(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.before);
globalMy.mydefineProperty(CharacterData.prototype,'deleteData',function deleteData(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.deleteData);
globalMy.mydefineProperty(CharacterData.prototype,'insertData',function insertData(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.insertData);
globalMy.mydefineProperty(CharacterData.prototype,'remove',function remove(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.remove);
globalMy.mydefineProperty(CharacterData.prototype,'replaceData',function replaceData(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.replaceData);
globalMy.mydefineProperty(CharacterData.prototype,'replaceWith',function replaceWith(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.replaceWith);
globalMy.mydefineProperty(CharacterData.prototype,'substringData',function substringData(){debugger;},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.substringData);
