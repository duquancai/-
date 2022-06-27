HTMLElement = function HTMLElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLElement);
globalMy.rename(HTMLElement.prototype, "HTMLElement")
Object.setPrototypeOf(HTMLElement.prototype, Element.prototype)
HTMLElement.__proto__ = Element;

globalMy.mydefineProperty(HTMLElement.prototype, 'title', '', true, undefined, undefined, function title() {
    debugger;
    return globalMy.value.HTMLElement_title;
}, function title(val) {
    debugger;
    globalMy.value.HTMLElement_title = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).title.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).title.set, 'set');
globalMy.value.HTMLElement_title = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'lang', '', true, undefined, undefined, function lang() {
    debugger;
    return globalMy.value.HTMLElement_lang;
}, function lang(val) {
    debugger;
    globalMy.value.HTMLElement_lang = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).lang.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).lang.set, 'set');
globalMy.value.HTMLElement_lang = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'translate', true, true, undefined, undefined, function translate() {
    debugger;
    return globalMy.value.HTMLElement_translate;
}, function translate(val) {
    debugger;
    globalMy.value.HTMLElement_translate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).translate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).translate.set, 'set');
globalMy.value.HTMLElement_translate = true;
globalMy.mydefineProperty(HTMLElement.prototype, 'dir', '', true, undefined, undefined, function dir() {
    debugger;
    return globalMy.value.HTMLElement_dir;
}, function dir(val) {
    debugger;
    globalMy.value.HTMLElement_dir = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).dir.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).dir.set, 'set');
globalMy.value.HTMLElement_dir = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'hidden', false, true, undefined, undefined, function hidden() {
        debugger;
        var foundName = globalMy.foundName(this);
        return globalMy.value[foundName]["hidden"];
    },
    function hidden(val) {
        debugger;
        var foundName = globalMy.foundName(this);
        globalMy.value[foundName]["hidden"] = val;
    });
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).hidden.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).hidden.set, 'set');


globalMy.mydefineProperty(HTMLElement.prototype, 'accessKey', '', true, undefined, undefined, function accessKey() {
    debugger;
    return globalMy.value.HTMLElement_accessKey;
}, function accessKey(val) {
    debugger;
    globalMy.value.HTMLElement_accessKey = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).accessKey.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).accessKey.set, 'set');
globalMy.value.HTMLElement_accessKey = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'draggable', false, true, undefined, undefined, function draggable() {
    debugger;
    return globalMy.value.HTMLElement_draggable;
}, function draggable(val) {
    debugger;
    globalMy.value.HTMLElement_draggable = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).draggable.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).draggable.set, 'set');
globalMy.value.HTMLElement_draggable = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'spellcheck', true, true, undefined, undefined, function spellcheck() {
    debugger;
    return globalMy.value.HTMLElement_spellcheck;
}, function spellcheck(val) {
    debugger;
    globalMy.value.HTMLElement_spellcheck = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).spellcheck.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).spellcheck.set, 'set');
globalMy.value.HTMLElement_spellcheck = true;
globalMy.mydefineProperty(HTMLElement.prototype, 'autocapitalize', '', true, undefined, undefined, function autocapitalize() {
    debugger;
    return globalMy.value.HTMLElement_autocapitalize;
}, function autocapitalize(val) {
    debugger;
    globalMy.value.HTMLElement_autocapitalize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autocapitalize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autocapitalize.set, 'set');
globalMy.value.HTMLElement_autocapitalize = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'contentEditable', 'inherit', true, undefined, undefined, function contentEditable() {
    debugger;
    return globalMy.value.HTMLElement_contentEditable;
}, function contentEditable(val) {
    debugger;
    globalMy.value.HTMLElement_contentEditable = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).contentEditable.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).contentEditable.set, 'set');
globalMy.value.HTMLElement_contentEditable = 'inherit';
globalMy.mydefineProperty(HTMLElement.prototype, 'isContentEditable', false, true, undefined, undefined, function isContentEditable() {
    debugger;
    return globalMy.value.HTMLElement_isContentEditable;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).isContentEditable.get, 'get');
globalMy.value.HTMLElement_isContentEditable = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'inputMode', '', true, undefined, undefined, function inputMode() {
    debugger;
    return globalMy.value.HTMLElement_inputMode;
}, function inputMode(val) {
    debugger;
    globalMy.value.HTMLElement_inputMode = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inputMode.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inputMode.set, 'set');
globalMy.value.HTMLElement_inputMode = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'offsetParent', {}, true, undefined, undefined, function offsetParent() {
    debugger;
    return globalMy.value.HTMLElement_offsetParent;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetParent.get, 'get');
globalMy.value.HTMLElement_offsetParent = {};

globalMy.mydefineProperty(HTMLElement.prototype, 'offsetTop', 0, true, undefined, undefined, function offsetTop() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetTop'];
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetTop.get, 'get');

globalMy.mydefineProperty(HTMLElement.prototype, 'offsetLeft', 0, true, undefined, undefined, function offsetLeft() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetLeft'];
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetLeft.get, 'get');


globalMy.mydefineProperty(HTMLElement.prototype, 'offsetWidth', 0, true, undefined, undefined, function offsetWidth() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetWidth']
    // return globalMy.getOffsetWidth(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetWidth.get, 'get');

globalMy.mydefineProperty(HTMLElement.prototype, 'offsetHeight', 0, true, undefined, undefined, function offsetHeight() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetHeight']
    // return globalMy.getOffsetHeight(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetHeight.get, 'get');


globalMy.mydefineProperty(HTMLElement.prototype, 'innerText', '', true, undefined, undefined, function innerText() {
    debugger;
    return globalMy.value.HTMLElement_innerText;
}, function innerText(val) {
    debugger;
    globalMy.value.HTMLElement_innerText = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).innerText.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).innerText.set, 'set');
globalMy.value.HTMLElement_innerText = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'outerText', '', true, undefined, undefined, function outerText() {
    debugger;
    return globalMy.value.HTMLElement_outerText;
}, function outerText(val) {
    debugger;
    globalMy.value.HTMLElement_outerText = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).outerText.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).outerText.set, 'set');
globalMy.value.HTMLElement_outerText = '';


globalMy.mydefineProperty(HTMLElement.prototype, 'onbeforexrselect', {}, true, undefined, undefined, function onbeforexrselect() {
    debugger;
    return globalMy.value.HTMLElement_onbeforexrselect;
}, function onbeforexrselect(val) {
    debugger;
    globalMy.value.HTMLElement_onbeforexrselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforexrselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforexrselect.set, 'set');
globalMy.value.HTMLElement_onbeforexrselect = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onabort', {}, true, undefined, undefined, function onabort() {
    debugger;
    return globalMy.value.HTMLElement_onabort;
}, function onabort(val) {
    debugger;
    globalMy.value.HTMLElement_onabort = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onabort.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onabort.set, 'set');
globalMy.value.HTMLElement_onabort = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onblur', {}, true, undefined, undefined, function onblur() {
    debugger;
    return globalMy.value.HTMLElement_onblur;
}, function onblur(val) {
    debugger;
    globalMy.value.HTMLElement_onblur = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onblur.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onblur.set, 'set');
globalMy.value.HTMLElement_onblur = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncancel', {}, true, undefined, undefined, function oncancel() {
    debugger;
    return globalMy.value.HTMLElement_oncancel;
}, function oncancel(val) {
    debugger;
    globalMy.value.HTMLElement_oncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncancel.set, 'set');
globalMy.value.HTMLElement_oncancel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncanplay', {}, true, undefined, undefined, function oncanplay() {
    debugger;
    return globalMy.value.HTMLElement_oncanplay;
}, function oncanplay(val) {
    debugger;
    globalMy.value.HTMLElement_oncanplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplay.set, 'set');
globalMy.value.HTMLElement_oncanplay = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncanplaythrough', {}, true, undefined, undefined, function oncanplaythrough() {
    debugger;
    return globalMy.value.HTMLElement_oncanplaythrough;
}, function oncanplaythrough(val) {
    debugger;
    globalMy.value.HTMLElement_oncanplaythrough = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplaythrough.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplaythrough.set, 'set');
globalMy.value.HTMLElement_oncanplaythrough = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onchange', {}, true, undefined, undefined, function onchange() {
    debugger;
    return globalMy.value.HTMLElement_onchange;
}, function onchange(val) {
    debugger;
    globalMy.value.HTMLElement_onchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onchange.set, 'set');
globalMy.value.HTMLElement_onchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onclick', {}, true, undefined, undefined, function onclick() {
    debugger;
    return globalMy.value.HTMLElement_onclick;
}, function onclick(val) {
    debugger;
    globalMy.value.HTMLElement_onclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclick.set, 'set');
globalMy.value.HTMLElement_onclick = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onclose', {}, true, undefined, undefined, function onclose() {
    debugger;
    return globalMy.value.HTMLElement_onclose;
}, function onclose(val) {
    debugger;
    globalMy.value.HTMLElement_onclose = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclose.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclose.set, 'set');
globalMy.value.HTMLElement_onclose = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncontextlost', {}, true, undefined, undefined, function oncontextlost() {
    debugger;
    return globalMy.value.HTMLElement_oncontextlost;
}, function oncontextlost(val) {
    debugger;
    globalMy.value.HTMLElement_oncontextlost = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextlost.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextlost.set, 'set');
globalMy.value.HTMLElement_oncontextlost = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncontextmenu', {}, true, undefined, undefined, function oncontextmenu() {
    debugger;
    return globalMy.value.HTMLElement_oncontextmenu;
}, function oncontextmenu(val) {
    debugger;
    globalMy.value.HTMLElement_oncontextmenu = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextmenu.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextmenu.set, 'set');
globalMy.value.HTMLElement_oncontextmenu = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncontextrestored', {}, true, undefined, undefined, function oncontextrestored() {
    debugger;
    return globalMy.value.HTMLElement_oncontextrestored;
}, function oncontextrestored(val) {
    debugger;
    globalMy.value.HTMLElement_oncontextrestored = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextrestored.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextrestored.set, 'set');
globalMy.value.HTMLElement_oncontextrestored = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncuechange', {}, true, undefined, undefined, function oncuechange() {
    debugger;
    return globalMy.value.HTMLElement_oncuechange;
}, function oncuechange(val) {
    debugger;
    globalMy.value.HTMLElement_oncuechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncuechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncuechange.set, 'set');
globalMy.value.HTMLElement_oncuechange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondblclick', {}, true, undefined, undefined, function ondblclick() {
    debugger;
    return globalMy.value.HTMLElement_ondblclick;
}, function ondblclick(val) {
    debugger;
    globalMy.value.HTMLElement_ondblclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondblclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondblclick.set, 'set');
globalMy.value.HTMLElement_ondblclick = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondrag', {}, true, undefined, undefined, function ondrag() {
    debugger;
    return globalMy.value.HTMLElement_ondrag;
}, function ondrag(val) {
    debugger;
    globalMy.value.HTMLElement_ondrag = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrag.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrag.set, 'set');
globalMy.value.HTMLElement_ondrag = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragend', {}, true, undefined, undefined, function ondragend() {
    debugger;
    return globalMy.value.HTMLElement_ondragend;
}, function ondragend(val) {
    debugger;
    globalMy.value.HTMLElement_ondragend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragend.set, 'set');
globalMy.value.HTMLElement_ondragend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragenter', {}, true, undefined, undefined, function ondragenter() {
    debugger;
    return globalMy.value.HTMLElement_ondragenter;
}, function ondragenter(val) {
    debugger;
    globalMy.value.HTMLElement_ondragenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragenter.set, 'set');
globalMy.value.HTMLElement_ondragenter = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragleave', {}, true, undefined, undefined, function ondragleave() {
    debugger;
    return globalMy.value.HTMLElement_ondragleave;
}, function ondragleave(val) {
    debugger;
    globalMy.value.HTMLElement_ondragleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragleave.set, 'set');
globalMy.value.HTMLElement_ondragleave = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragover', {}, true, undefined, undefined, function ondragover() {
    debugger;
    return globalMy.value.HTMLElement_ondragover;
}, function ondragover(val) {
    debugger;
    globalMy.value.HTMLElement_ondragover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragover.set, 'set');
globalMy.value.HTMLElement_ondragover = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragstart', {}, true, undefined, undefined, function ondragstart() {
    debugger;
    return globalMy.value.HTMLElement_ondragstart;
}, function ondragstart(val) {
    debugger;
    globalMy.value.HTMLElement_ondragstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragstart.set, 'set');
globalMy.value.HTMLElement_ondragstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondrop', {}, true, undefined, undefined, function ondrop() {
    debugger;
    return globalMy.value.HTMLElement_ondrop;
}, function ondrop(val) {
    debugger;
    globalMy.value.HTMLElement_ondrop = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrop.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrop.set, 'set');
globalMy.value.HTMLElement_ondrop = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondurationchange', {}, true, undefined, undefined, function ondurationchange() {
    debugger;
    return globalMy.value.HTMLElement_ondurationchange;
}, function ondurationchange(val) {
    debugger;
    globalMy.value.HTMLElement_ondurationchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondurationchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondurationchange.set, 'set');
globalMy.value.HTMLElement_ondurationchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onemptied', {}, true, undefined, undefined, function onemptied() {
    debugger;
    return globalMy.value.HTMLElement_onemptied;
}, function onemptied(val) {
    debugger;
    globalMy.value.HTMLElement_onemptied = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onemptied.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onemptied.set, 'set');
globalMy.value.HTMLElement_onemptied = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onended', {}, true, undefined, undefined, function onended() {
    debugger;
    return globalMy.value.HTMLElement_onended;
}, function onended(val) {
    debugger;
    globalMy.value.HTMLElement_onended = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onended.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onended.set, 'set');
globalMy.value.HTMLElement_onended = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onerror', {}, true, undefined, undefined, function onerror() {
    debugger;
    return globalMy.value.HTMLElement_onerror;
}, function onerror(val) {
    debugger;
    globalMy.value.HTMLElement_onerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onerror.set, 'set');
globalMy.value.HTMLElement_onerror = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onfocus', {}, true, undefined, undefined, function onfocus() {
    debugger;
    return globalMy.value.HTMLElement_onfocus;
}, function onfocus(val) {
    debugger;
    globalMy.value.HTMLElement_onfocus = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onfocus.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onfocus.set, 'set');
globalMy.value.HTMLElement_onfocus = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onformdata', {}, true, undefined, undefined, function onformdata() {
    debugger;
    return globalMy.value.HTMLElement_onformdata;
}, function onformdata(val) {
    debugger;
    globalMy.value.HTMLElement_onformdata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onformdata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onformdata.set, 'set');
globalMy.value.HTMLElement_onformdata = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oninput', {}, true, undefined, undefined, function oninput() {
    debugger;
    return globalMy.value.HTMLElement_oninput;
}, function oninput(val) {
    debugger;
    globalMy.value.HTMLElement_oninput = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninput.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninput.set, 'set');
globalMy.value.HTMLElement_oninput = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oninvalid', {}, true, undefined, undefined, function oninvalid() {
    debugger;
    return globalMy.value.HTMLElement_oninvalid;
}, function oninvalid(val) {
    debugger;
    globalMy.value.HTMLElement_oninvalid = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninvalid.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninvalid.set, 'set');
globalMy.value.HTMLElement_oninvalid = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onkeydown', {}, true, undefined, undefined, function onkeydown() {
    debugger;
    return globalMy.value.HTMLElement_onkeydown;
}, function onkeydown(val) {
    debugger;
    globalMy.value.HTMLElement_onkeydown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeydown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeydown.set, 'set');
globalMy.value.HTMLElement_onkeydown = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onkeypress', {}, true, undefined, undefined, function onkeypress() {
    debugger;
    return globalMy.value.HTMLElement_onkeypress;
}, function onkeypress(val) {
    debugger;
    globalMy.value.HTMLElement_onkeypress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeypress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeypress.set, 'set');
globalMy.value.HTMLElement_onkeypress = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onkeyup', {}, true, undefined, undefined, function onkeyup() {
    debugger;
    return globalMy.value.HTMLElement_onkeyup;
}, function onkeyup(val) {
    debugger;
    globalMy.value.HTMLElement_onkeyup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeyup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeyup.set, 'set');
globalMy.value.HTMLElement_onkeyup = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onload', {}, true, undefined, undefined, function onload() {
    debugger;
    return globalMy.value.HTMLElement_onload;
}, function onload(val) {
    debugger;
    globalMy.value.HTMLElement_onload = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onload.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onload.set, 'set');
globalMy.value.HTMLElement_onload = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onloadeddata', {}, true, undefined, undefined, function onloadeddata() {
    debugger;
    return globalMy.value.HTMLElement_onloadeddata;
}, function onloadeddata(val) {
    debugger;
    globalMy.value.HTMLElement_onloadeddata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadeddata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadeddata.set, 'set');
globalMy.value.HTMLElement_onloadeddata = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onloadedmetadata', {}, true, undefined, undefined, function onloadedmetadata() {
    debugger;
    return globalMy.value.HTMLElement_onloadedmetadata;
}, function onloadedmetadata(val) {
    debugger;
    globalMy.value.HTMLElement_onloadedmetadata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadedmetadata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadedmetadata.set, 'set');
globalMy.value.HTMLElement_onloadedmetadata = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onloadstart', {}, true, undefined, undefined, function onloadstart() {
    debugger;
    return globalMy.value.HTMLElement_onloadstart;
}, function onloadstart(val) {
    debugger;
    globalMy.value.HTMLElement_onloadstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadstart.set, 'set');
globalMy.value.HTMLElement_onloadstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmousedown', {}, true, undefined, undefined, function onmousedown() {
    debugger;
    return globalMy.value.HTMLElement_onmousedown;
}, function onmousedown(val) {
    debugger;
    globalMy.value.HTMLElement_onmousedown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousedown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousedown.set, 'set');
globalMy.value.HTMLElement_onmousedown = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseenter', {}, true, undefined, undefined, function onmouseenter() {
    debugger;
    return globalMy.value.HTMLElement_onmouseenter;
}, function onmouseenter(val) {
    debugger;
    globalMy.value.HTMLElement_onmouseenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseenter.set, 'set');
globalMy.value.HTMLElement_onmouseenter = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseleave', {}, true, undefined, undefined, function onmouseleave() {
    debugger;
    return globalMy.value.HTMLElement_onmouseleave;
}, function onmouseleave(val) {
    debugger;
    globalMy.value.HTMLElement_onmouseleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseleave.set, 'set');
globalMy.value.HTMLElement_onmouseleave = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmousemove', {}, true, undefined, undefined, function onmousemove() {
    debugger;
    return globalMy.value.HTMLElement_onmousemove;
}, function onmousemove(val) {
    debugger;
    globalMy.value.HTMLElement_onmousemove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousemove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousemove.set, 'set');
globalMy.value.HTMLElement_onmousemove = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseout', {}, true, undefined, undefined, function onmouseout() {
    debugger;
    return globalMy.value.HTMLElement_onmouseout;
}, function onmouseout(val) {
    debugger;
    globalMy.value.HTMLElement_onmouseout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseout.set, 'set');
globalMy.value.HTMLElement_onmouseout = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseover', {}, true, undefined, undefined, function onmouseover() {
    debugger;
    return globalMy.value.HTMLElement_onmouseover;
}, function onmouseover(val) {
    debugger;
    globalMy.value.HTMLElement_onmouseover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseover.set, 'set');
globalMy.value.HTMLElement_onmouseover = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseup', {}, true, undefined, undefined, function onmouseup() {
    debugger;
    return globalMy.value.HTMLElement_onmouseup;
}, function onmouseup(val) {
    debugger;
    globalMy.value.HTMLElement_onmouseup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseup.set, 'set');
globalMy.value.HTMLElement_onmouseup = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmousewheel', {}, true, undefined, undefined, function onmousewheel() {
    debugger;
    return globalMy.value.HTMLElement_onmousewheel;
}, function onmousewheel(val) {
    debugger;
    globalMy.value.HTMLElement_onmousewheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousewheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousewheel.set, 'set');
globalMy.value.HTMLElement_onmousewheel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpause', {}, true, undefined, undefined, function onpause() {
    debugger;
    return globalMy.value.HTMLElement_onpause;
}, function onpause(val) {
    debugger;
    globalMy.value.HTMLElement_onpause = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpause.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpause.set, 'set');
globalMy.value.HTMLElement_onpause = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onplay', {}, true, undefined, undefined, function onplay() {
    debugger;
    return globalMy.value.HTMLElement_onplay;
}, function onplay(val) {
    debugger;
    globalMy.value.HTMLElement_onplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplay.set, 'set');
globalMy.value.HTMLElement_onplay = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onplaying', {}, true, undefined, undefined, function onplaying() {
    debugger;
    return globalMy.value.HTMLElement_onplaying;
}, function onplaying(val) {
    debugger;
    globalMy.value.HTMLElement_onplaying = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplaying.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplaying.set, 'set');
globalMy.value.HTMLElement_onplaying = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onprogress', {}, true, undefined, undefined, function onprogress() {
    debugger;
    return globalMy.value.HTMLElement_onprogress;
}, function onprogress(val) {
    debugger;
    globalMy.value.HTMLElement_onprogress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onprogress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onprogress.set, 'set');
globalMy.value.HTMLElement_onprogress = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onratechange', {}, true, undefined, undefined, function onratechange() {
    debugger;
    return globalMy.value.HTMLElement_onratechange;
}, function onratechange(val) {
    debugger;
    globalMy.value.HTMLElement_onratechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onratechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onratechange.set, 'set');
globalMy.value.HTMLElement_onratechange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onreset', {}, true, undefined, undefined, function onreset() {
    debugger;
    return globalMy.value.HTMLElement_onreset;
}, function onreset(val) {
    debugger;
    globalMy.value.HTMLElement_onreset = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onreset.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onreset.set, 'set');
globalMy.value.HTMLElement_onreset = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onresize', {}, true, undefined, undefined, function onresize() {
    debugger;
    return globalMy.value.HTMLElement_onresize;
}, function onresize(val) {
    debugger;
    globalMy.value.HTMLElement_onresize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onresize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onresize.set, 'set');
globalMy.value.HTMLElement_onresize = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onscroll', {}, true, undefined, undefined, function onscroll() {
    debugger;
    return globalMy.value.HTMLElement_onscroll;
}, function onscroll(val) {
    debugger;
    globalMy.value.HTMLElement_onscroll = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onscroll.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onscroll.set, 'set');
globalMy.value.HTMLElement_onscroll = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onsecuritypolicyviolation', {}, true, undefined, undefined, function onsecuritypolicyviolation() {
    debugger;
    return globalMy.value.HTMLElement_onsecuritypolicyviolation;
}, function onsecuritypolicyviolation(val) {
    debugger;
    globalMy.value.HTMLElement_onsecuritypolicyviolation = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsecuritypolicyviolation.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsecuritypolicyviolation.set, 'set');
globalMy.value.HTMLElement_onsecuritypolicyviolation = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onseeked', {}, true, undefined, undefined, function onseeked() {
    debugger;
    return globalMy.value.HTMLElement_onseeked;
}, function onseeked(val) {
    debugger;
    globalMy.value.HTMLElement_onseeked = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeked.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeked.set, 'set');
globalMy.value.HTMLElement_onseeked = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onseeking', {}, true, undefined, undefined, function onseeking() {
    debugger;
    return globalMy.value.HTMLElement_onseeking;
}, function onseeking(val) {
    debugger;
    globalMy.value.HTMLElement_onseeking = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeking.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeking.set, 'set');
globalMy.value.HTMLElement_onseeking = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onselect', {}, true, undefined, undefined, function onselect() {
    debugger;
    return globalMy.value.HTMLElement_onselect;
}, function onselect(val) {
    debugger;
    globalMy.value.HTMLElement_onselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselect.set, 'set');
globalMy.value.HTMLElement_onselect = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onslotchange', {}, true, undefined, undefined, function onslotchange() {
    debugger;
    return globalMy.value.HTMLElement_onslotchange;
}, function onslotchange(val) {
    debugger;
    globalMy.value.HTMLElement_onslotchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onslotchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onslotchange.set, 'set');
globalMy.value.HTMLElement_onslotchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onstalled', {}, true, undefined, undefined, function onstalled() {
    debugger;
    return globalMy.value.HTMLElement_onstalled;
}, function onstalled(val) {
    debugger;
    globalMy.value.HTMLElement_onstalled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onstalled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onstalled.set, 'set');
globalMy.value.HTMLElement_onstalled = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onsubmit', {}, true, undefined, undefined, function onsubmit() {
    debugger;
    return globalMy.value.HTMLElement_onsubmit;
}, function onsubmit(val) {
    debugger;
    globalMy.value.HTMLElement_onsubmit = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsubmit.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsubmit.set, 'set');
globalMy.value.HTMLElement_onsubmit = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onsuspend', {}, true, undefined, undefined, function onsuspend() {
    debugger;
    return globalMy.value.HTMLElement_onsuspend;
}, function onsuspend(val) {
    debugger;
    globalMy.value.HTMLElement_onsuspend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsuspend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsuspend.set, 'set');
globalMy.value.HTMLElement_onsuspend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontimeupdate', {}, true, undefined, undefined, function ontimeupdate() {
    debugger;
    return globalMy.value.HTMLElement_ontimeupdate;
}, function ontimeupdate(val) {
    debugger;
    globalMy.value.HTMLElement_ontimeupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontimeupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontimeupdate.set, 'set');
globalMy.value.HTMLElement_ontimeupdate = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontoggle', {}, true, undefined, undefined, function ontoggle() {
    debugger;
    return globalMy.value.HTMLElement_ontoggle;
}, function ontoggle(val) {
    debugger;
    globalMy.value.HTMLElement_ontoggle = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontoggle.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontoggle.set, 'set');
globalMy.value.HTMLElement_ontoggle = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onvolumechange', {}, true, undefined, undefined, function onvolumechange() {
    debugger;
    return globalMy.value.HTMLElement_onvolumechange;
}, function onvolumechange(val) {
    debugger;
    globalMy.value.HTMLElement_onvolumechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onvolumechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onvolumechange.set, 'set');
globalMy.value.HTMLElement_onvolumechange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwaiting', {}, true, undefined, undefined, function onwaiting() {
    debugger;
    return globalMy.value.HTMLElement_onwaiting;
}, function onwaiting(val) {
    debugger;
    globalMy.value.HTMLElement_onwaiting = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwaiting.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwaiting.set, 'set');
globalMy.value.HTMLElement_onwaiting = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkitanimationend', {}, true, undefined, undefined, function onwebkitanimationend() {
    debugger;
    return globalMy.value.HTMLElement_onwebkitanimationend;
}, function onwebkitanimationend(val) {
    debugger;
    globalMy.value.HTMLElement_onwebkitanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationend.set, 'set');
globalMy.value.HTMLElement_onwebkitanimationend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkitanimationiteration', {}, true, undefined, undefined, function onwebkitanimationiteration() {
    debugger;
    return globalMy.value.HTMLElement_onwebkitanimationiteration;
}, function onwebkitanimationiteration(val) {
    debugger;
    globalMy.value.HTMLElement_onwebkitanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationiteration.set, 'set');
globalMy.value.HTMLElement_onwebkitanimationiteration = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkitanimationstart', {}, true, undefined, undefined, function onwebkitanimationstart() {
    debugger;
    return globalMy.value.HTMLElement_onwebkitanimationstart;
}, function onwebkitanimationstart(val) {
    debugger;
    globalMy.value.HTMLElement_onwebkitanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationstart.set, 'set');
globalMy.value.HTMLElement_onwebkitanimationstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkittransitionend', {}, true, undefined, undefined, function onwebkittransitionend() {
    debugger;
    return globalMy.value.HTMLElement_onwebkittransitionend;
}, function onwebkittransitionend(val) {
    debugger;
    globalMy.value.HTMLElement_onwebkittransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkittransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkittransitionend.set, 'set');
globalMy.value.HTMLElement_onwebkittransitionend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwheel', {}, true, undefined, undefined, function onwheel() {
    debugger;
    return globalMy.value.HTMLElement_onwheel;
}, function onwheel(val) {
    debugger;
    globalMy.value.HTMLElement_onwheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwheel.set, 'set');
globalMy.value.HTMLElement_onwheel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onauxclick', {}, true, undefined, undefined, function onauxclick() {
    debugger;
    return globalMy.value.HTMLElement_onauxclick;
}, function onauxclick(val) {
    debugger;
    globalMy.value.HTMLElement_onauxclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onauxclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onauxclick.set, 'set');
globalMy.value.HTMLElement_onauxclick = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ongotpointercapture', {}, true, undefined, undefined, function ongotpointercapture() {
    debugger;
    return globalMy.value.HTMLElement_ongotpointercapture;
}, function ongotpointercapture(val) {
    debugger;
    globalMy.value.HTMLElement_ongotpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ongotpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ongotpointercapture.set, 'set');
globalMy.value.HTMLElement_ongotpointercapture = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onlostpointercapture', {}, true, undefined, undefined, function onlostpointercapture() {
    debugger;
    return globalMy.value.HTMLElement_onlostpointercapture;
}, function onlostpointercapture(val) {
    debugger;
    globalMy.value.HTMLElement_onlostpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onlostpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onlostpointercapture.set, 'set');
globalMy.value.HTMLElement_onlostpointercapture = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerdown', {}, true, undefined, undefined, function onpointerdown() {
    debugger;
    return globalMy.value.HTMLElement_onpointerdown;
}, function onpointerdown(val) {
    debugger;
    globalMy.value.HTMLElement_onpointerdown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerdown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerdown.set, 'set');
globalMy.value.HTMLElement_onpointerdown = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointermove', {}, true, undefined, undefined, function onpointermove() {
    debugger;
    return globalMy.value.HTMLElement_onpointermove;
}, function onpointermove(val) {
    debugger;
    globalMy.value.HTMLElement_onpointermove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointermove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointermove.set, 'set');
globalMy.value.HTMLElement_onpointermove = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerup', {}, true, undefined, undefined, function onpointerup() {
    debugger;
    return globalMy.value.HTMLElement_onpointerup;
}, function onpointerup(val) {
    debugger;
    globalMy.value.HTMLElement_onpointerup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerup.set, 'set');
globalMy.value.HTMLElement_onpointerup = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointercancel', {}, true, undefined, undefined, function onpointercancel() {
    debugger;
    return globalMy.value.HTMLElement_onpointercancel;
}, function onpointercancel(val) {
    debugger;
    globalMy.value.HTMLElement_onpointercancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointercancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointercancel.set, 'set');
globalMy.value.HTMLElement_onpointercancel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerover', {}, true, undefined, undefined, function onpointerover() {
    debugger;
    return globalMy.value.HTMLElement_onpointerover;
}, function onpointerover(val) {
    debugger;
    globalMy.value.HTMLElement_onpointerover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerover.set, 'set');
globalMy.value.HTMLElement_onpointerover = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerout', {}, true, undefined, undefined, function onpointerout() {
    debugger;
    return globalMy.value.HTMLElement_onpointerout;
}, function onpointerout(val) {
    debugger;
    globalMy.value.HTMLElement_onpointerout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerout.set, 'set');
globalMy.value.HTMLElement_onpointerout = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerenter', {}, true, undefined, undefined, function onpointerenter() {
    debugger;
    return globalMy.value.HTMLElement_onpointerenter;
}, function onpointerenter(val) {
    debugger;
    globalMy.value.HTMLElement_onpointerenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerenter.set, 'set');
globalMy.value.HTMLElement_onpointerenter = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerleave', {}, true, undefined, undefined, function onpointerleave() {
    debugger;
    return globalMy.value.HTMLElement_onpointerleave;
}, function onpointerleave(val) {
    debugger;
    globalMy.value.HTMLElement_onpointerleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerleave.set, 'set');
globalMy.value.HTMLElement_onpointerleave = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onselectstart', {}, true, undefined, undefined, function onselectstart() {
    debugger;
    return globalMy.value.HTMLElement_onselectstart;
}, function onselectstart(val) {
    debugger;
    globalMy.value.HTMLElement_onselectstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectstart.set, 'set');
globalMy.value.HTMLElement_onselectstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onselectionchange', {}, true, undefined, undefined, function onselectionchange() {
    debugger;
    return globalMy.value.HTMLElement_onselectionchange;
}, function onselectionchange(val) {
    debugger;
    globalMy.value.HTMLElement_onselectionchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectionchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectionchange.set, 'set');
globalMy.value.HTMLElement_onselectionchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onanimationend', {}, true, undefined, undefined, function onanimationend() {
    debugger;
    return globalMy.value.HTMLElement_onanimationend;
}, function onanimationend(val) {
    debugger;
    globalMy.value.HTMLElement_onanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationend.set, 'set');
globalMy.value.HTMLElement_onanimationend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onanimationiteration', {}, true, undefined, undefined, function onanimationiteration() {
    debugger;
    return globalMy.value.HTMLElement_onanimationiteration;
}, function onanimationiteration(val) {
    debugger;
    globalMy.value.HTMLElement_onanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationiteration.set, 'set');
globalMy.value.HTMLElement_onanimationiteration = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onanimationstart', {}, true, undefined, undefined, function onanimationstart() {
    debugger;
    return globalMy.value.HTMLElement_onanimationstart;
}, function onanimationstart(val) {
    debugger;
    globalMy.value.HTMLElement_onanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationstart.set, 'set');
globalMy.value.HTMLElement_onanimationstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitionrun', {}, true, undefined, undefined, function ontransitionrun() {
    debugger;
    return globalMy.value.HTMLElement_ontransitionrun;
}, function ontransitionrun(val) {
    debugger;
    globalMy.value.HTMLElement_ontransitionrun = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionrun.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionrun.set, 'set');
globalMy.value.HTMLElement_ontransitionrun = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitionstart', {}, true, undefined, undefined, function ontransitionstart() {
    debugger;
    return globalMy.value.HTMLElement_ontransitionstart;
}, function ontransitionstart(val) {
    debugger;
    globalMy.value.HTMLElement_ontransitionstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionstart.set, 'set');
globalMy.value.HTMLElement_ontransitionstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitionend', {}, true, undefined, undefined, function ontransitionend() {
    debugger;
    return globalMy.value.HTMLElement_ontransitionend;
}, function ontransitionend(val) {
    debugger;
    globalMy.value.HTMLElement_ontransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionend.set, 'set');
globalMy.value.HTMLElement_ontransitionend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitioncancel', {}, true, undefined, undefined, function ontransitioncancel() {
    debugger;
    return globalMy.value.HTMLElement_ontransitioncancel;
}, function ontransitioncancel(val) {
    debugger;
    globalMy.value.HTMLElement_ontransitioncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitioncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitioncancel.set, 'set');
globalMy.value.HTMLElement_ontransitioncancel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncopy', {}, true, undefined, undefined, function oncopy() {
    debugger;
    return globalMy.value.HTMLElement_oncopy;
}, function oncopy(val) {
    debugger;
    globalMy.value.HTMLElement_oncopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncopy.set, 'set');
globalMy.value.HTMLElement_oncopy = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncut', {}, true, undefined, undefined, function oncut() {
    debugger;
    return globalMy.value.HTMLElement_oncut;
}, function oncut(val) {
    debugger;
    globalMy.value.HTMLElement_oncut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncut.set, 'set');
globalMy.value.HTMLElement_oncut = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpaste', {}, true, undefined, undefined, function onpaste() {
    debugger;
    return globalMy.value.HTMLElement_onpaste;
}, function onpaste(val) {
    debugger;
    globalMy.value.HTMLElement_onpaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpaste.set, 'set');
globalMy.value.HTMLElement_onpaste = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'dataset', {}, true, undefined, undefined, function dataset() {
    debugger;
    return globalMy.value.HTMLElement_dataset;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).dataset.get, 'get');
globalMy.value.HTMLElement_dataset = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'nonce', '', true, undefined, undefined, function nonce() {
    debugger;
    return globalMy.value.HTMLElement_nonce;
}, function nonce(val) {
    debugger;
    globalMy.value.HTMLElement_nonce = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).nonce.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).nonce.set, 'set');
globalMy.value.HTMLElement_nonce = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'autofocus', false, true, undefined, undefined, function autofocus() {
    debugger;
    return globalMy.value.HTMLElement_autofocus;
}, function autofocus(val) {
    debugger;
    globalMy.value.HTMLElement_autofocus = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autofocus.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autofocus.set, 'set');
globalMy.value.HTMLElement_autofocus = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'tabIndex', -1, true, undefined, undefined, function tabIndex() {
    debugger;
    return globalMy.value.HTMLElement_tabIndex;
}, function tabIndex(val) {
    debugger;
    globalMy.value.HTMLElement_tabIndex = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).tabIndex.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).tabIndex.set, 'set');
globalMy.value.HTMLElement_tabIndex = -1;
globalMy.mydefineProperty(HTMLElement.prototype, 'style', {}, true, undefined, undefined, function style() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['style'];
}, function style(val) {
    debugger;
    if(val instanceof CSSStyleDeclaration){
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['style'] = val;}
    else debugger
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).style.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).style.set, 'set');


globalMy.mydefineProperty(HTMLElement.prototype, 'attachInternals', function attachInternals() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.attachInternals);
globalMy.mydefineProperty(HTMLElement.prototype, 'blur', function blur() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.blur);
globalMy.mydefineProperty(HTMLElement.prototype, 'click', function click() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.click);
globalMy.mydefineProperty(HTMLElement.prototype, 'focus', function focus() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.focus);
globalMy.mydefineProperty(HTMLElement.prototype, 'inert', false, true, undefined, undefined, function inert() {
    debugger;
    return globalMy.value.HTMLElement_inert;
}, function inert(val) {
    debugger;
    globalMy.value.HTMLElement_inert = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inert.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inert.set, 'set');
globalMy.value.HTMLElement_inert = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'enterKeyHint', '', true, undefined, undefined, function enterKeyHint() {
    debugger;
    return globalMy.value.HTMLElement_enterKeyHint;
}, function enterKeyHint(val) {
    debugger;
    globalMy.value.HTMLElement_enterKeyHint = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).enterKeyHint.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).enterKeyHint.set, 'set');
globalMy.value.HTMLElement_enterKeyHint = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'virtualKeyboardPolicy', '', true, undefined, undefined, function virtualKeyboardPolicy() {
    debugger;
    return globalMy.value.HTMLElement_virtualKeyboardPolicy;
}, function virtualKeyboardPolicy(val) {
    debugger;
    globalMy.value.HTMLElement_virtualKeyboardPolicy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).virtualKeyboardPolicy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).virtualKeyboardPolicy.set, 'set');
globalMy.value.HTMLElement_virtualKeyboardPolicy = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerrawupdate', {}, true, undefined, undefined, function onpointerrawupdate() {
    debugger;
    return globalMy.value.HTMLElement_onpointerrawupdate;
}, function onpointerrawupdate(val) {
    debugger;
    globalMy.value.HTMLElement_onpointerrawupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerrawupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerrawupdate.set, 'set');
globalMy.value.HTMLElement_onpointerrawupdate = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onbeforematch', {}, true, undefined, undefined, function onbeforematch() {
    debugger;
    return globalMy.value.HTMLElement_onbeforematch;
}, function onbeforematch(val) {
    debugger;
    globalMy.value.HTMLElement_onbeforematch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforematch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforematch.set, 'set');
globalMy.value.HTMLElement_onbeforematch = {};




