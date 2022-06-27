
XMLHttpRequest = function XMLHttpRequest(){
}

globalMy.mydefineProperty(XMLHttpRequest.prototype,'onreadystatechange', undefined, true ,true, undefined,function onreadystatechange(){
    debugger;
    for (let i = 0; i<globalMy.value._onreadystatechange.length; i++){
        if (globalMy.value._onreadystatechange[i][0] === this){
            return globalMy.value._onreadystatechange[i][1]
        }
    }
    return null
    },function onreadystatechange(x){
    console.log(`XMLHttpRequest[onreadystatechange] => [${x}]`)
    debugger;
    globalMy.value._onreadystatechange.push([this, x])

});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).onreadystatechange.get,'get onreadystatechange')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).onreadystatechange.set,'set onreadystatechange')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'readyState', undefined, true ,true, undefined,function readyState(){debugger;return globalMy.value.XMLHttpRequest_readyState;},undefined);
globalMy.value.XMLHttpRequest_readyState = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).readyState.get,'get readyState')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'timeout', undefined, true ,true, undefined,function timeout(){debugger;return globalMy.value.XMLHttpRequest_timeout;},function timeout(x){debugger; globalMy.value.XMLHttpRequest_timeout = x;});
globalMy.value.XMLHttpRequest_timeout = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).timeout.get,'get timeout')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).timeout.set,'set timeout')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'withCredentials', undefined, true ,true, undefined,function withCredentials(){debugger;},function withCredentials(x){
    console.log(`XMLHttpRequest[withCredentials] => [${x}]`)
    debugger;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).withCredentials.get,'get withCredentials')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).withCredentials.set,'set withCredentials')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'upload', undefined, true ,true, undefined,function upload(){
    debugger;
    // let s = {}
    // s.__proto__ = XMLHttpRequestUpload.prototype
    // return s
    },undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).upload.get,'get upload')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseURL', undefined, true ,true, undefined,function responseURL(){debugger;return globalMy.value.XMLHttpRequest_responseURL;},undefined);
globalMy.value.XMLHttpRequest_responseURL = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseURL.get,'get responseURL')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'status', undefined, true ,true, undefined,function status(){debugger;return globalMy.value.XMLHttpRequest_status;},undefined);
globalMy.value.XMLHttpRequest_status = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).status.get,'get status')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'statusText', undefined, true ,true, undefined,function statusText(){debugger;return globalMy.value.XMLHttpRequest_statusText;},undefined);
globalMy.value.XMLHttpRequest_statusText = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).statusText.get,'get statusText')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseType', undefined, true ,true, undefined,function responseType(){debugger;return globalMy.value.XMLHttpRequest_responseType;},function responseType(x){debugger; globalMy.value.XMLHttpRequest_responseType = x;});
globalMy.value.XMLHttpRequest_responseType = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseType.get,'get responseType')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseType.set,'set responseType')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'response', undefined, true ,true, undefined,function response(){debugger;return globalMy.value.XMLHttpRequest_response;},undefined);
globalMy.value.XMLHttpRequest_response = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).response.get,'get response')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseText', undefined, true ,true, undefined,function responseText(){debugger;return globalMy.value.XMLHttpRequest_responseText;},undefined);
globalMy.value.XMLHttpRequest_responseText = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseText.get,'get responseText')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseXML', undefined, true ,true, undefined,function responseXML(){debugger;},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseXML.get,'get responseXML')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'UNSENT', 0, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_UNSENT = 0;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'OPENED', 1, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_OPENED = 1;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'HEADERS_RECEIVED', 2, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_HEADERS_RECEIVED = 2;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'LOADING', 3, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_LOADING = 3;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'DONE', 4, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_DONE = 4;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'abort', function abort() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).abort.value,'abort')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'getAllResponseHeaders', function getAllResponseHeaders() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).getAllResponseHeaders.value,'getAllResponseHeaders')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'getResponseHeader', function getResponseHeader() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).getResponseHeader.value,'getResponseHeader')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'open', function open() {
    console.log(`XMLHttpRequest[open] => [${JSON.stringify(arguments)}]`)
    window.url = arguments[1];
    console.log(window.url);
    debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).open.value,'open')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'overrideMimeType', function overrideMimeType() {debugger;}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).overrideMimeType.value,'overrideMimeType')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'send', function send() {
    console.log(`XMLHttpRequest[send] => [${JSON.stringify(arguments)}]`)
    debugger;

    }, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).send.value,'send')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'setRequestHeader', function setRequestHeader(x,y) {
    console.log(`XMLHttpRequest[setRequestHeader] => key[${x}] value[${y}]`)
    debugger;
    }, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).setRequestHeader.value,'setRequestHeader')
Object.setPrototypeOf(XMLHttpRequest.prototype,XMLHttpRequestEventTarget.prototype)
XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget;
globalMy.functionprotect(XMLHttpRequest)
globalMy.rename(XMLHttpRequest.prototype,"XMLHttpRequest")
