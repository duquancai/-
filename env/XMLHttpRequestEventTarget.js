XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(XMLHttpRequestEventTarget);
globalMy.rename(XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget");

Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype,EventTarget.prototype);
