Event = function Event() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.mydefineProperty(Event.prototype,'type', undefined, true ,true, undefined,function type(){debugger;return globalMy.value.Event_type;},undefined);
globalMy.value.Event_type = "load";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).type.get,'get type')
globalMy.mydefineProperty(Event.prototype,'target', undefined, true ,true, undefined,function target(){
    debugger;
    return document;
    // if (this.constructor.toString() === IDBVersionChangeEvent.toString()){
    //     for (let i in globalMy.value._Event_target){
    //         if (globalMy.value._Event_target[i][0].cbb_id && globalMy.value._Event_target[i][0].cbb_id === this.cbb_id){
    //             return globalMy.value._Event_target[i][1];
    //         }
    //     }
    //     return null
    // }else if (this.constructor.toString() === Event.toString()){
    //
    //     let s = globalMy.unmyValueFun(this, globalMy.value._Event_onsuccess)
    //     return globalMy.valueFun(s, globalMy.value._IDBRequest_result)
    //
    // }
    // 查找不到对应的target会debugger
    debugger;

    },undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).target.get,'get target')
globalMy.mydefineProperty(Event.prototype,'currentTarget', undefined, true ,true, undefined,function currentTarget(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).currentTarget.get,'get currentTarget')
globalMy.mydefineProperty(Event.prototype,'eventPhase', undefined, true ,true, undefined,function eventPhase(){debugger;return globalMy.value.Event_eventPhase;},undefined);
globalMy.value.Event_eventPhase = 2;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).eventPhase.get,'get eventPhase')
globalMy.mydefineProperty(Event.prototype,'bubbles', undefined, true ,true, undefined,function bubbles(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).bubbles.get,'get bubbles')
globalMy.mydefineProperty(Event.prototype,'cancelable', undefined, true ,true, undefined,function cancelable(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).cancelable.get,'get cancelable')
globalMy.mydefineProperty(Event.prototype,'defaultPrevented', undefined, true ,true, undefined,function defaultPrevented(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).defaultPrevented.get,'get defaultPrevented')
globalMy.mydefineProperty(Event.prototype,'composed', undefined, true ,true, undefined,function composed(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).composed.get,'get composed')
globalMy.mydefineProperty(Event.prototype,'timeStamp', undefined, true ,true, undefined,function timeStamp(){debugger;return globalMy.value.Event_timeStamp;},undefined);
globalMy.value.Event_timeStamp = 23484164.100000024;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).timeStamp.get,'get timeStamp')
globalMy.mydefineProperty(Event.prototype,'srcElement', undefined, true ,true, undefined,function srcElement(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).srcElement.get,'get srcElement')
globalMy.mydefineProperty(Event.prototype,'returnValue', undefined, true ,true, undefined,function returnValue(){debugger;},function returnValue(){debugger;});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).returnValue.get,'get returnValue')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).returnValue.set,'set returnValue')
globalMy.mydefineProperty(Event.prototype,'cancelBubble', undefined, true ,true, undefined,function cancelBubble(){debugger;},function cancelBubble(){debugger;});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).cancelBubble.get,'get cancelBubble')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).cancelBubble.set,'set cancelBubble')
globalMy.mydefineProperty(Event.prototype,'NONE', 0, false ,true, false,undefined,undefined);
globalMy.value.Event_NONE = 0;
globalMy.mydefineProperty(Event.prototype,'CAPTURING_PHASE', 1, false ,true, false,undefined,undefined);
globalMy.value.Event_CAPTURING_PHASE = 1;
globalMy.mydefineProperty(Event.prototype,'AT_TARGET', 2, false ,true, false,undefined,undefined);
globalMy.value.Event_AT_TARGET = 2;
globalMy.mydefineProperty(Event.prototype,'BUBBLING_PHASE', 3, false ,true, false,undefined,undefined);
globalMy.value.Event_BUBBLING_PHASE = 3;
globalMy.mydefineProperty(Event.prototype,'composedPath', function composedPath() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).composedPath.value,'composedPath')
globalMy.mydefineProperty(Event.prototype,'initEvent', function initEvent() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).initEvent.value,'initEvent')
globalMy.mydefineProperty(Event.prototype,'preventDefault', function preventDefault() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).preventDefault.value,'preventDefault')
globalMy.mydefineProperty(Event.prototype,'stopImmediatePropagation', function stopImmediatePropagation() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).stopImmediatePropagation.value,'stopImmediatePropagation')
globalMy.mydefineProperty(Event.prototype,'stopPropagation', function stopPropagation() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).stopPropagation.value,'stopPropagation')
globalMy.mydefineProperty(Event.prototype,'path', undefined, true ,true, undefined,function path(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).path.get,'get path')
Event.prototype.__proto__ = Object.prototype;
globalMy.functionprotect(Event)
globalMy.rename(Event.prototype,"Event")
