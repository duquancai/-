ScreenOrientation = function ScreenOrientation() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(ScreenOrientation);
globalMy.rename(ScreenOrientation.prototype, "ScreenOrientation")
ScreenOrientation.__proto__ = EventTarget;
Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);

globalMy.mydefineProperty(ScreenOrientation.prototype, 'angle', 0, true, undefined, undefined, function angle() {
    debugger;
    return globalMy.value.ScreenOrientation_angle;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).angle.get, 'get');
globalMy.value.ScreenOrientation_angle = 0;
globalMy.mydefineProperty(ScreenOrientation.prototype, 'type', 'landscape-primary', true, undefined, undefined, function type() {
    debugger;
    return globalMy.value.ScreenOrientation_type;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).type.get, 'get');
globalMy.value.ScreenOrientation_type = 'landscape-primary';
globalMy.mydefineProperty(ScreenOrientation.prototype, 'onchange', {}, true, undefined, undefined, function onchange() {
    debugger;
    return globalMy.value.ScreenOrientation_onchange;
}, function onchange(val) {
    debugger;
    globalMy.value.ScreenOrientation_onchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).onchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).onchange.set, 'set');
globalMy.value.ScreenOrientation_onchange = {};
globalMy.mydefineProperty(ScreenOrientation.prototype, 'lock', function lock() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(ScreenOrientation.prototype.lock);
globalMy.mydefineProperty(ScreenOrientation.prototype, 'unlock', function unlock() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(ScreenOrientation.prototype.unlock);
