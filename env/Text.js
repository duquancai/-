Text = function Text() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(Text);
globalMy.rename(Text.prototype,"Text");
Object.setPrototypeOf(Text.prototype,CharacterData.prototype);

globalMy.mydefineProperty(Text.prototype,'wholeText','',true,undefined,undefined,function wholeText(){debugger;return globalMy.value.Text_wholeText;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Text.prototype).wholeText.get,'get');
globalMy.value.Text_wholeText='';
globalMy.mydefineProperty(Text.prototype,'assignedSlot',{},true,undefined,undefined,function assignedSlot(){debugger;return globalMy.value.Text_assignedSlot;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Text.prototype).assignedSlot.get,'get');
globalMy.value.Text_assignedSlot={};
globalMy.mydefineProperty(Text.prototype,'splitText',function splitText(){debugger;},true,undefined,true);globalMy.functionprotect(Text.prototype.splitText);