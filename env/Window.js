Window = function Window() {
    //容易被检测到堆栈
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
};


globalMy.functionprotect(Window);
globalMy.rename(Window.prototype, 'Window');
Window.__proto__ = EventTarget;

delete global;
delete GLOBAL;
delete VMError;
delete Buffer;
delete KNBCore;

window = this;
self = window;
window.window = window;
window.top = window;
window.name = ''
window.__proto__ = Window.prototype;

window.__proto__.__proto__ = WindowProperties.prototype;

// Object.setPrototypeOf(Window.prototype, EventTarget.prototype)
// Object.setPrototypeOf(window,Window.prototype)
globalMy.mydefineProperty(Window.prototype, 'TEMPORARY', 0, false, true, false, undefined, undefined);
globalMy.mydefineProperty(Window.prototype, 'PERSISTENT', 1, false, true, false, undefined, undefined);




window.chrome = {
    app: {},
    csi: function () {
        debugger
    },
    loadTimes: function () {
        debugger
    },
    runtime: {}
}

setTimeout = function setTimeout(func, delay,args) {

    console.log("setTimeout func=>",func+'')
    console.log("setTimeout args=>",args+'')
    if(globalMy.Id[globalMy.Id.length-1]){
        var IntervalId = globalMy.Id[globalMy.Id.length-1] + 1
    }
    else{
        var IntervalId = 50
    }
    globalMy.Id.push(IntervalId);
    globalMy.func.push([func,args]);
    //返回一个id
    return IntervalId;

}



setInterval = function setInterval(func, delay, args) {
    debugger;
    console.log(func)
    if(globalMy.Id[globalMy.Id.length-1]){
       var IntervalId = globalMy.Id[globalMy.Id.length-1] + 1
    }
    else{
       var IntervalId = 50
    }
    globalMy.Id.push(IntervalId);
    // globalMy.func.push([func,args]);
    globalMy.func_interval.push([func,args]);
    // console.log("设置循环事件====>",func)
    //返回一个id
    return IntervalId;

}
clearInterval = function clearInterval() {
    debugger;
    return undefined;
}

clearTimeout = function clearTimeout() {
    debugger;
}

globalMy.functionprotect(setTimeout);
globalMy.functionprotect(clearTimeout);
globalMy.functionprotect(setInterval);
globalMy.functionprotect(clearInterval);

globalMy.mydefineProperty(window, 'screenX', undefined, true, true, undefined, function screenX() {
    debugger;
    return globalMy.value.Window_screenX;
}, function screenX(x) {
    debugger;
    globalMy.value.Window_screenX = x;
});
globalMy.value.Window_screenX = 16;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenX.get, 'get screenX')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenX.set, 'set screenX')
globalMy.mydefineProperty(window, 'screenY', undefined, true, true, undefined, function screenY() {
    debugger;
    return globalMy.value.Window_screenY;
}, function screenY(x) {
    debugger;
    globalMy.value.Window_screenY = x;
});
globalMy.value.Window_screenY = 91;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenY.get, 'get screenY')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenY.set, 'set screenY')
globalMy.mydefineProperty(window, 'pageYOffset', undefined, true, true, undefined, function pageYOffset() {
    debugger;
    return globalMy.value.Window_pageYOffset;
}, function pageYOffset(x) {
    debugger;
    globalMy.value.Window_pageYOffset = x;
});
globalMy.value.Window_pageYOffset = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageYOffset.get, 'get pageYOffset')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageYOffset.set, 'set pageYOffset')
globalMy.mydefineProperty(window, 'pageXOffset', undefined, true, true, undefined, function pageXOffset() {
    debugger;
    return globalMy.value.Window_pageXOffset;
}, function pageXOffset(x) {
    debugger;
    globalMy.value.Window_pageXOffset = x;
});
globalMy.value.Window_pageXOffset = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageXOffset.get, 'get pageXOffset')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageXOffset.set, 'set pageXOffset')
globalMy.mydefineProperty(window, 'outerWidth', undefined, true, true, undefined, function outerWidth() {
    debugger;
    return globalMy.value.Window_outerWidth;
}, function outerWidth(x) {
    debugger;
    globalMy.value.Window_outerWidth = x;
});
globalMy.value.Window_outerWidth = 1510;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).outerWidth.get, 'get outerWidth')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).outerWidth.set, 'set outerWidth')
globalMy.mydefineProperty(window, 'innerHeight', undefined, true, true, undefined, function innerHeight() {
    debugger;
    return globalMy.value.Window_innerHeight;
}, function innerHeight(x) {
    debugger;
    globalMy.value.Window_innerHeight = x;
});
globalMy.value.Window_innerHeight = 859;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerHeight.get, 'get innerHeight')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerHeight.set, 'set innerHeight')
globalMy.mydefineProperty(window, 'innerWidth', undefined, true, true, undefined, function innerWidth() {
    debugger;
    return globalMy.value.Window_innerWidth;
}, function innerWidth(x) {
    debugger;
    globalMy.value.Window_innerWidth = x;
});
globalMy.value.Window_innerWidth = 150;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerWidth.get, 'get innerWidth')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerWidth.set, 'set innerWidth')

globalMy.mydefineProperty(window, 'parent', undefined, true, true, undefined, function parent() {
    return window
}, function parent() {
    debugger;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).parent.get, 'get parent')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).parent.set, 'set parent')
globalMy.mydefineProperty(window, 'frameElement', undefined, true, true, undefined, function frameElement() {
    return null
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).frameElement.get, 'get frameElement')
globalMy.mydefineProperty(window, 'postMessage', function postMessage() {
    debugger;
}, true, true, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).postMessage.value, 'postMessage')
globalMy.mydefineProperty(window, 'openDatabase', function openDatabase(db_name, version, table_name, size) {
    debugger;
    globalMy.element.db = {};
    globalMy.element.db.version = version;
    globalMy.element.db = globalMy.proxy(globalMy.element.db)
    globalMy.rename(globalMy.element.db, "zcjdb")
    Object.setPrototypeOf(globalMy.element.db, Database.prototype)
    return globalMy.element.db;

}, true, true, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).openDatabase.value, 'openDatabase')


globalMy.mydefineProperty(window, 'Image', function Image() {
    let image = {}
    Object.setPrototypeOf(image, HTMLImageElement.prototype)
    return image
}, true, false, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).Image.value, 'Image')

globalMy.mydefineProperty(window, 'webkitRequestAnimationFrame', function webkitRequestAnimationFrame() {
    debugger;
}, true, true, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).webkitRequestAnimationFrame.value, 'webkitRequestAnimationFrame')
globalMy.mydefineProperty(window, 'isSecureContext', undefined, true, true, undefined, function isSecureContext() {
    debugger;
    return true
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).isSecureContext.get, 'get isSecureContext')
globalMy.mydefineProperty(window, 'devicePixelRatio', undefined, true, true, undefined, function devicePixelRatio() {
    debugger;
    return globalMy.value.Window_devicePixelRatio;
}, function devicePixelRatio(x) {
    debugger;
    globalMy.value.Window_devicePixelRatio = x;
});
globalMy.value.Window_devicePixelRatio = 1;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).devicePixelRatio.get, 'get devicePixelRatio')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).devicePixelRatio.set, 'set devicePixelRatio')


// globalMy.mydefineProperty(window,'webkitRTCPeerConnection', RTCPeerConnection, true ,false, true,undefined,undefined);
// globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).webkitRTCPeerConnection.value,'RTCPeerConnection')
