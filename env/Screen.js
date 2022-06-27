Screen = function Screen() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(Screen);
globalMy.rename(Screen.prototype, "Screen")
Screen.__proto__ = EventTarget;
Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);

screen = {}
Object.setPrototypeOf(screen,Screen.prototype)

globalMy.mydefineProperty(Screen.prototype, 'availWidth', 1920, true, undefined, undefined, function availWidth() {
    debugger;
    return globalMy.value.Screen_availWidth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availWidth.get, 'get');
globalMy.value.Screen_availWidth = 1920;
globalMy.mydefineProperty(Screen.prototype, 'availHeight', 1040, true, undefined, undefined, function availHeight() {
    debugger;
    return globalMy.value.Screen_availHeight;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availHeight.get, 'get');
globalMy.value.Screen_availHeight = 1040;
globalMy.mydefineProperty(Screen.prototype, 'width', 1920, true, undefined, undefined, function width() {
    debugger;
    return globalMy.value.Screen_width;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).width.get, 'get');
globalMy.value.Screen_width = 1920;
globalMy.mydefineProperty(Screen.prototype, 'height', 1080, true, undefined, undefined, function height() {
    debugger;
    return globalMy.value.Screen_height;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).height.get, 'get');
globalMy.value.Screen_height = 1080;
globalMy.mydefineProperty(Screen.prototype, 'colorDepth', 24, true, undefined, undefined, function colorDepth() {
    debugger;
    return globalMy.value.Screen_colorDepth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).colorDepth.get, 'get');
globalMy.value.Screen_colorDepth = 24;
globalMy.mydefineProperty(Screen.prototype, 'pixelDepth', 24, true, undefined, undefined, function pixelDepth() {
    debugger;
    return globalMy.value.Screen_pixelDepth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).pixelDepth.get, 'get');
globalMy.value.Screen_pixelDepth = 24;
globalMy.mydefineProperty(Screen.prototype, 'availLeft', 0, true, undefined, undefined, function availLeft() {
    debugger;
    return globalMy.value.Screen_availLeft;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availLeft.get, 'get');
globalMy.value.Screen_availLeft = 0;
globalMy.mydefineProperty(Screen.prototype, 'availTop', 0, true, undefined, undefined, function availTop() {
    debugger;
    return globalMy.value.Screen_availTop;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availTop.get, 'get');
globalMy.value.Screen_availTop = 0;
globalMy.mydefineProperty(Screen.prototype, 'orientation', {}, true, undefined, undefined, function orientation() {
    debugger;
    return globalMy.value.Screen_orientation;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).orientation.get, 'get');
globalMy.value.Screen_orientation = {};
Object.setPrototypeOf(globalMy.value.Screen_orientation,ScreenOrientation.prototype)



