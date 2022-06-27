HTMLDivElement = function HTMLDivElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLDivElement);
globalMy.rename(HTMLDivElement.prototype, "HTMLDivElement")
Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype)
HTMLDivElement.__proto__ = HTMLElement;

globalMy.mydefineProperty(HTMLDivElement.prototype, 'align', '', true, undefined, undefined, function align() {
    debugger;
    for(var foundName in globalMy.element){
        if(globalMy.element[foundName] === this){
            try{var val = globalMy.value[foundName]['align'];}
            catch (e) {
                console.log("bug  => get div align")
                globalMy.value[foundName]['align'] = '';
                val = '';
            }

            break
        }
    }
    return val;
}, function align(val) {
    debugger;

    var foundName = globalMy.foundName(this)
    globalMy.value[foundName]['align'] = val;

    return undefined;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLDivElement.prototype).align.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLDivElement.prototype).align.set, 'set');

