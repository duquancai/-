
WebSocket = function WebSocket(x){
    if (x === 'Create\x20WebSocket' || x=== "itsgonnafail"){
        globalMy.error("Failed to construct 'WebSocket': The URL '" + x + "' is invalid." , `Error: Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid.\\n    at <anonymous>:2:13`)
    }

}

globalMy.mydefineProperty(WebSocket.prototype,'url', undefined, true ,true, undefined,function url(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).url.get,'get url')
globalMy.mydefineProperty(WebSocket.prototype,'readyState', undefined, true ,true, undefined,function readyState(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).readyState.get,'get readyState')
globalMy.mydefineProperty(WebSocket.prototype,'bufferedAmount', undefined, true ,true, undefined,function bufferedAmount(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).bufferedAmount.get,'get bufferedAmount')
globalMy.mydefineProperty(WebSocket.prototype,'onopen', undefined, true ,true, undefined,function onopen(){debugger;},function onopen(){debugger;});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onopen.get,'get onopen')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onopen.set,'set onopen')
globalMy.mydefineProperty(WebSocket.prototype,'onerror', undefined, true ,true, undefined,function onerror(){debugger;},function onerror(){debugger;});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onerror.get,'get onerror')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onerror.set,'set onerror')
globalMy.mydefineProperty(WebSocket.prototype,'onclose', undefined, true ,true, undefined,function onclose(){debugger;},function onclose(){debugger;});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onclose.get,'get onclose')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onclose.set,'set onclose')
globalMy.mydefineProperty(WebSocket.prototype,'extensions', undefined, true ,true, undefined,function extensions(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).extensions.get,'get extensions')
globalMy.mydefineProperty(WebSocket.prototype,'protocol', undefined, true ,true, undefined,function protocol(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).protocol.get,'get protocol')
globalMy.mydefineProperty(WebSocket.prototype,'onmessage', undefined, true ,true, undefined,function onmessage(){debugger;},function onmessage(){debugger;});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onmessage.get,'get onmessage')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onmessage.set,'set onmessage')
globalMy.mydefineProperty(WebSocket.prototype,'binaryType', undefined, true ,true, undefined,function binaryType(){debugger;},function binaryType(){debugger;});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).binaryType.get,'get binaryType')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).binaryType.set,'set binaryType')
globalMy.mydefineProperty(WebSocket.prototype,'CONNECTING', 0, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_CONNECTING = 0;
globalMy.mydefineProperty(WebSocket.prototype,'OPEN', 1, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_OPEN = 1;
globalMy.mydefineProperty(WebSocket.prototype,'CLOSING', 2, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_CLOSING = 2;
globalMy.mydefineProperty(WebSocket.prototype,'CLOSED', 3, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_CLOSED = 3;
globalMy.mydefineProperty(WebSocket.prototype,'close', function close() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).close.value,'close')
globalMy.mydefineProperty(WebSocket.prototype,'send', function send() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).send.value,'send')
Object.setPrototypeOf(WebSocket.prototype,EventTarget.prototype)
WebSocket.__proto__ = EventTarget;

globalMy.functionprotect(WebSocket)
globalMy.rename(WebSocket.prototype,"WebSocket")
