WindowProperties = function WindowProperties(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(WindowProperties);
globalMy.rename(WindowProperties.prototype,"WindowProperties")
WindowProperties.__proto__ = EventTarget;
Object.setPrototypeOf(WindowProperties.prototype,EventTarget.prototype)
