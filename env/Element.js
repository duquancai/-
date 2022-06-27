Element = function Element() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(Element);
globalMy.rename(Element.prototype, "Element")
Object.setPrototypeOf(Element.prototype, Node.prototype)
Element.__proto__ = Node;

globalMy.mydefineProperty(Element.prototype, 'namespaceURI', 'http://www.w3.org/1999/xhtml', true, undefined, undefined, function namespaceURI() {
    debugger;
    return globalMy.value.Element_namespaceURI;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).namespaceURI.get, 'get');
globalMy.value.Element_namespaceURI = 'http://www.w3.org/1999/xhtml';
globalMy.mydefineProperty(Element.prototype, 'prefix', {}, true, undefined, undefined, function prefix() {
    debugger;
    return globalMy.value.Element_prefix;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).prefix.get, 'get');
globalMy.value.Element_prefix = {};

globalMy.mydefineProperty(Element.prototype, 'localName', '', true, undefined, undefined,
    function localName() {
        debugger;
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName]['localName']){
    return globalMy.value[foundName]['localName'];
    }
    else return null;
    }, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).localName.get, 'get');


globalMy.mydefineProperty(Element.prototype, 'tagName', '', true, undefined, undefined, function tagName() {
    debugger;
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName]['tagName']){
    return globalMy.value[foundName]['tagName'];
    }
    else return null;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).tagName.get, 'get');


globalMy.mydefineProperty(Element.prototype, 'id', '', true, undefined, undefined, function id() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['id'];
}, function id(val) {
    debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['id'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).id.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).id.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'className', '', true, undefined, undefined, function className() {
    debugger;
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName]['className']){
    return globalMy.value[foundName]['className'];
    }
    else return null

}, function className(val) {
    debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['className'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).className.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).className.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'classList', {}, true, undefined, undefined, function classList() {
    debugger;
    return globalMy.value.Element_classList;
}, function classList(val) {
    debugger;
    globalMy.value.Element_classList = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).classList.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).classList.set, 'set');
globalMy.value.Element_classList = {};
globalMy.mydefineProperty(Element.prototype, 'slot', '', true, undefined, undefined, function slot() {
    debugger;
    return globalMy.value.Element_slot;
}, function slot(val) {
    debugger;
    globalMy.value.Element_slot = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).slot.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).slot.set, 'set');
globalMy.value.Element_slot = '';

globalMy.mydefineProperty(Element.prototype, 'attributes', {}, true, undefined, undefined, function attributes() {
    debugger;
    return globalMy.value.Element_attributes;
}, undefined);

globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).attributes.get, 'get');
globalMy.value.Element_attributes = {};
globalMy.mydefineProperty(Element.prototype, 'shadowRoot', {}, true, undefined, undefined, function shadowRoot() {
    debugger;
    return globalMy.value.Element_shadowRoot;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).shadowRoot.get, 'get');
globalMy.value.Element_shadowRoot = {};
globalMy.mydefineProperty(Element.prototype, 'part', {}, true, undefined, undefined, function part() {
    debugger;
    return globalMy.value.Element_part;
}, function part(val) {
    debugger;
    globalMy.value.Element_part = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).part.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).part.set, 'set');
globalMy.value.Element_part = {};
globalMy.mydefineProperty(Element.prototype, 'assignedSlot', {}, true, undefined, undefined, function assignedSlot() {
    debugger;
    return globalMy.value.Element_assignedSlot;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).assignedSlot.get, 'get');
globalMy.value.Element_assignedSlot = {};
globalMy.mydefineProperty(Element.prototype, 'innerHTML', '', true, undefined, undefined, function innerHTML() {
    debugger;

    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['innerHTML'];

},
    function innerHTML(val) {
    debugger;
    //这个特么算子节点
    var foundName = globalMy.foundName(this);
    if (val.indexOf("<")  === 0 && val.indexOf("<!") !== 0) {

        var span = globalMy.getMidStr("<", " ", val)
        var dom = document.createElement(span);
        var key = globalMy.getKey(val);
        var val = globalMy.getVal(val);
        for (var i = 0; i < key.length; i++) {
            dom[key[i]] = val[i];
        }
        if(dom["type"] === "hidden"){
            dom['hidden'] = true
        }
        else dom['hidden'] = false

        if (globalMy.value[foundName]['innerHTML'] === '') {
            this.appendChild(dom);
    } else {
        //    需要remove
        this.removeChild(this.children[0]);
    }
    }
    globalMy.value[foundName]['innerHTML'] = val;



});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).innerHTML.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).innerHTML.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'outerHTML', '', true, undefined, undefined,
    function outerHTML() {
        debugger;
        var foundName = globalMy.foundName(this);
        return globalMy.value[foundName]['outerHTML'];
    },
    function outerHTML(val) {
        debugger;
        var foundName = globalMy.foundName(this);
        globalMy.value[foundName]['outerHTML'] = val;
    });
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).outerHTML.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).outerHTML.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'scrollTop', 0, true, undefined, undefined, function scrollTop() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['scrollTop'];
}, function scrollTop(val) {
    debugger;
    globalMy.value[foundName]['scrollTop'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollTop.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollTop.set, 'set');

globalMy.mydefineProperty(Element.prototype, 'scrollLeft', 0, true, undefined, undefined, function scrollLeft() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['scrollLeft'];
}, function scrollLeft(val) {
    debugger;
    globalMy.value[foundName]['scrollLeft'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollLeft.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollLeft.set, 'set');

globalMy.mydefineProperty(Element.prototype, 'scrollWidth', 0, true, undefined, undefined, function scrollWidth() {
    debugger;
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollWidth.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'scrollHeight', 0, true, undefined, undefined, function scrollHeight() {
    debugger;
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollHeight.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientTop', 0, true, undefined, undefined, function clientTop() {
    debugger;
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientTop.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientLeft', 0, true, undefined, undefined, function clientLeft() {
    debugger;
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientLeft.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientWidth', 0, true, undefined, undefined, function clientWidth() {
    debugger;
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientWidth.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientHeight', 0, true, undefined, undefined, function clientHeight() {
    debugger;
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientHeight.get, 'get');


globalMy.mydefineProperty(Element.prototype, 'attributeStyleMap', {}, true, undefined, undefined, function attributeStyleMap() {
    debugger;
    return globalMy.value.Element_attributeStyleMap;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).attributeStyleMap.get, 'get');
globalMy.value.Element_attributeStyleMap = {};
globalMy.mydefineProperty(Element.prototype, 'onbeforecopy', {}, true, undefined, undefined, function onbeforecopy() {
    debugger;
    return globalMy.value.Element_onbeforecopy;
}, function onbeforecopy(val) {
    debugger;
    globalMy.value.Element_onbeforecopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecopy.set, 'set');
globalMy.value.Element_onbeforecopy = {};
globalMy.mydefineProperty(Element.prototype, 'onbeforecut', {}, true, undefined, undefined, function onbeforecut() {
    debugger;
    return globalMy.value.Element_onbeforecut;
}, function onbeforecut(val) {
    debugger;
    globalMy.value.Element_onbeforecut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecut.set, 'set');
globalMy.value.Element_onbeforecut = {};
globalMy.mydefineProperty(Element.prototype, 'onbeforepaste', {}, true, undefined, undefined, function onbeforepaste() {
    debugger;
    return globalMy.value.Element_onbeforepaste;
}, function onbeforepaste(val) {
    debugger;
    globalMy.value.Element_onbeforepaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforepaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforepaste.set, 'set');
globalMy.value.Element_onbeforepaste = {};
globalMy.mydefineProperty(Element.prototype, 'onsearch', {}, true, undefined, undefined, function onsearch() {
    debugger;
    return globalMy.value.Element_onsearch;
}, function onsearch(val) {
    debugger;
    globalMy.value.Element_onsearch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onsearch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onsearch.set, 'set');
globalMy.value.Element_onsearch = {};
globalMy.mydefineProperty(Element.prototype, 'elementTiming', '', true, undefined, undefined, function elementTiming() {
    debugger;
    return globalMy.value.Element_elementTiming;
}, function elementTiming(val) {
    debugger;
    globalMy.value.Element_elementTiming = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).elementTiming.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).elementTiming.set, 'set');
globalMy.value.Element_elementTiming = '';
globalMy.mydefineProperty(Element.prototype, 'onfullscreenchange', {}, true, undefined, undefined, function onfullscreenchange() {
    debugger;
    return globalMy.value.Element_onfullscreenchange;
}, function onfullscreenchange(val) {
    debugger;
    globalMy.value.Element_onfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenchange.set, 'set');
globalMy.value.Element_onfullscreenchange = {};
globalMy.mydefineProperty(Element.prototype, 'onfullscreenerror', {}, true, undefined, undefined, function onfullscreenerror() {
    debugger;
    return globalMy.value.Element_onfullscreenerror;
}, function onfullscreenerror(val) {
    debugger;
    globalMy.value.Element_onfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenerror.set, 'set');
globalMy.value.Element_onfullscreenerror = {};
globalMy.mydefineProperty(Element.prototype, 'onwebkitfullscreenchange', {}, true, undefined, undefined, function onwebkitfullscreenchange() {
    debugger;
    return globalMy.value.Element_onwebkitfullscreenchange;
}, function onwebkitfullscreenchange(val) {
    debugger;
    globalMy.value.Element_onwebkitfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenchange.set, 'set');
globalMy.value.Element_onwebkitfullscreenchange = {};
globalMy.mydefineProperty(Element.prototype, 'onwebkitfullscreenerror', {}, true, undefined, undefined, function onwebkitfullscreenerror() {
    debugger;
    return globalMy.value.Element_onwebkitfullscreenerror;
}, function onwebkitfullscreenerror(val) {
    debugger;
    globalMy.value.Element_onwebkitfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenerror.set, 'set');
globalMy.value.Element_onwebkitfullscreenerror = {};

globalMy.mydefineProperty(Element.prototype, 'children', {}, true, undefined, undefined, function children() {
    debugger;
    return globalMy.getChildren(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).children.get, 'get');



//特殊且重要
globalMy.mydefineProperty(Element.prototype, 'firstElementChild', {}, true, undefined, undefined, function firstElementChild() {
    debugger;
    return globalMy.getFirstElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).firstElementChild.get, 'get');
globalMy.value.Element_firstElementChild = {};
globalMy.mydefineProperty(Element.prototype, 'lastElementChild', {}, true, undefined, undefined, function lastElementChild() {
    debugger;
    return globalMy.getLastElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).lastElementChild.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'childElementCount', 0, true, undefined, undefined, function childElementCount() {
debugger;
return globalMy.getChildElementCount(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).childElementCount.get, 'get');



globalMy.mydefineProperty(Element.prototype, 'previousElementSibling', {}, true, undefined, undefined, function previousElementSibling() {
    debugger;
    return globalMy.getPreviousElementSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).previousElementSibling.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'nextElementSibling', {}, true, undefined, undefined, function nextElementSibling() {
    debugger;
    return globalMy.getNextElementSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).nextElementSibling.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'after', function after() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.after);
globalMy.mydefineProperty(Element.prototype, 'animate', function animate() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.animate);
globalMy.mydefineProperty(Element.prototype, 'append', function append() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.append);
globalMy.mydefineProperty(Element.prototype, 'attachShadow', function attachShadow() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.attachShadow);
globalMy.mydefineProperty(Element.prototype, 'before', function before() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.before);
globalMy.mydefineProperty(Element.prototype, 'closest', function closest() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.closest);
globalMy.mydefineProperty(Element.prototype, 'computedStyleMap', function computedStyleMap() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.computedStyleMap);
globalMy.mydefineProperty(Element.prototype, 'getAttribute', function getAttribute(key) {
    debugger;
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName][key]){
        return globalMy.value[foundName][key]
    }
    else return null;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttribute);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNS', function getAttributeNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNames', function getAttributeNames() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNames);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNode', function getAttributeNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNode);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNodeNS', function getAttributeNodeNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNodeNS);
globalMy.mydefineProperty(Element.prototype, 'getBoundingClientRect', function getBoundingClientRect() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getBoundingClientRect);
globalMy.mydefineProperty(Element.prototype, 'getClientRects', function getClientRects() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getClientRects);
globalMy.mydefineProperty(Element.prototype, 'getElementsByClassName', function getElementsByClassName() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getElementsByClassName);
globalMy.mydefineProperty(Element.prototype, 'getElementsByTagName', function getElementsByTagName(tagName) {
    debugger;
    var tag_name = tagName.toLowerCase() + "";
    let type;
    switch (tag_name) {
        case 'div':
            type = HTMLDivElement.prototype
            break
        case 'meta':
            type = HTMLMetaElement.prototype
            break
        case 'script':
            type = HTMLScriptElement.prototype
            break
        case 'i':
            type = HTMLElement.prototype
            break
        case "base":
            type = ""
            break
        case "canvas":
            type = HTMLCanvasElement.prototype
            break
        case "video":
            type = HTMLVideoElement.prototype
            break
        case "audio":
            type = HTMLAudioElement.prototype
            break
        default:
            debugger
    }
    // var foundName = globalMy.foundName(this);
    // var obj = globalMy.node[foundName]
    // return obj[tag_name];
    return globalMy.getElementsByTagName(this,tag_name)


}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getElementsByTagName);
globalMy.mydefineProperty(Element.prototype, 'getElementsByTagNameNS', function getElementsByTagNameNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getElementsByTagNameNS);
globalMy.mydefineProperty(Element.prototype, 'getInnerHTML', function getInnerHTML() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getInnerHTML);
globalMy.mydefineProperty(Element.prototype, 'hasAttribute', function hasAttribute() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasAttribute);
globalMy.mydefineProperty(Element.prototype, 'hasAttributeNS', function hasAttributeNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'hasAttributes', function hasAttributes() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasAttributes);
globalMy.mydefineProperty(Element.prototype, 'hasPointerCapture', function hasPointerCapture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasPointerCapture);
globalMy.mydefineProperty(Element.prototype, 'insertAdjacentElement', function insertAdjacentElement() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.insertAdjacentElement);
globalMy.mydefineProperty(Element.prototype, 'insertAdjacentHTML', function insertAdjacentHTML() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.insertAdjacentHTML);
globalMy.mydefineProperty(Element.prototype, 'insertAdjacentText', function insertAdjacentText() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.insertAdjacentText);
globalMy.mydefineProperty(Element.prototype, 'matches', function matches() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.matches);
globalMy.mydefineProperty(Element.prototype, 'prepend', function prepend() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.prepend);
globalMy.mydefineProperty(Element.prototype, 'querySelector', function querySelector() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.querySelector);
globalMy.mydefineProperty(Element.prototype, 'querySelectorAll', function querySelectorAll() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.querySelectorAll);
globalMy.mydefineProperty(Element.prototype, 'releasePointerCapture', function releasePointerCapture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.releasePointerCapture);
globalMy.mydefineProperty(Element.prototype, 'remove', function remove() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.remove);
globalMy.mydefineProperty(Element.prototype, 'removeAttribute', function removeAttribute() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.removeAttribute);
globalMy.mydefineProperty(Element.prototype, 'removeAttributeNS', function removeAttributeNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.removeAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'removeAttributeNode', function removeAttributeNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.removeAttributeNode);
globalMy.mydefineProperty(Element.prototype, 'replaceChildren', function replaceChildren() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.replaceChildren);
globalMy.mydefineProperty(Element.prototype, 'replaceWith', function replaceWith() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.replaceWith);
globalMy.mydefineProperty(Element.prototype, 'requestFullscreen', function requestFullscreen() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.requestFullscreen);
globalMy.mydefineProperty(Element.prototype, 'requestPointerLock', function requestPointerLock() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.requestPointerLock);
globalMy.mydefineProperty(Element.prototype, 'scroll', function scroll() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scroll);
globalMy.mydefineProperty(Element.prototype, 'scrollBy', function scrollBy() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollBy);
globalMy.mydefineProperty(Element.prototype, 'scrollIntoView', function scrollIntoView() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollIntoView);
globalMy.mydefineProperty(Element.prototype, 'scrollIntoViewIfNeeded', function scrollIntoViewIfNeeded() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollIntoViewIfNeeded);
globalMy.mydefineProperty(Element.prototype, 'scrollTo', function scrollTo() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollTo);
globalMy.mydefineProperty(Element.prototype, 'setAttribute', function setAttribute(key,val) {
    debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName][key] = val;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttribute);
globalMy.mydefineProperty(Element.prototype, 'setAttributeNS', function setAttributeNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'setAttributeNode', function setAttributeNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttributeNode);
globalMy.mydefineProperty(Element.prototype, 'setAttributeNodeNS', function setAttributeNodeNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttributeNodeNS);
globalMy.mydefineProperty(Element.prototype, 'setPointerCapture', function setPointerCapture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setPointerCapture);
globalMy.mydefineProperty(Element.prototype, 'toggleAttribute', function toggleAttribute() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.toggleAttribute);
globalMy.mydefineProperty(Element.prototype, 'webkitMatchesSelector', function webkitMatchesSelector() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.webkitMatchesSelector);
globalMy.mydefineProperty(Element.prototype, 'webkitRequestFullScreen', function webkitRequestFullScreen() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.webkitRequestFullScreen);
globalMy.mydefineProperty(Element.prototype, 'webkitRequestFullscreen', function webkitRequestFullscreen() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.webkitRequestFullscreen);
globalMy.mydefineProperty(Element.prototype, 'ariaAtomic', {}, true, undefined, undefined, function ariaAtomic() {
    debugger;
    return globalMy.value.Element_ariaAtomic;
}, function ariaAtomic(val) {
    debugger;
    globalMy.value.Element_ariaAtomic = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAtomic.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAtomic.set, 'set');
globalMy.value.Element_ariaAtomic = {};
globalMy.mydefineProperty(Element.prototype, 'ariaAutoComplete', {}, true, undefined, undefined, function ariaAutoComplete() {
    debugger;
    return globalMy.value.Element_ariaAutoComplete;
}, function ariaAutoComplete(val) {
    debugger;
    globalMy.value.Element_ariaAutoComplete = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAutoComplete.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAutoComplete.set, 'set');
globalMy.value.Element_ariaAutoComplete = {};
globalMy.mydefineProperty(Element.prototype, 'ariaBusy', {}, true, undefined, undefined, function ariaBusy() {
    debugger;
    return globalMy.value.Element_ariaBusy;
}, function ariaBusy(val) {
    debugger;
    globalMy.value.Element_ariaBusy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaBusy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaBusy.set, 'set');
globalMy.value.Element_ariaBusy = {};
globalMy.mydefineProperty(Element.prototype, 'ariaChecked', {}, true, undefined, undefined, function ariaChecked() {
    debugger;
    return globalMy.value.Element_ariaChecked;
}, function ariaChecked(val) {
    debugger;
    globalMy.value.Element_ariaChecked = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaChecked.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaChecked.set, 'set');
globalMy.value.Element_ariaChecked = {};
globalMy.mydefineProperty(Element.prototype, 'ariaColCount', {}, true, undefined, undefined, function ariaColCount() {
    debugger;
    return globalMy.value.Element_ariaColCount;
}, function ariaColCount(val) {
    debugger;
    globalMy.value.Element_ariaColCount = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColCount.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColCount.set, 'set');
globalMy.value.Element_ariaColCount = {};
globalMy.mydefineProperty(Element.prototype, 'ariaColIndex', {}, true, undefined, undefined, function ariaColIndex() {
    debugger;
    return globalMy.value.Element_ariaColIndex;
}, function ariaColIndex(val) {
    debugger;
    globalMy.value.Element_ariaColIndex = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColIndex.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColIndex.set, 'set');
globalMy.value.Element_ariaColIndex = {};
globalMy.mydefineProperty(Element.prototype, 'ariaColSpan', {}, true, undefined, undefined, function ariaColSpan() {
    debugger;
    return globalMy.value.Element_ariaColSpan;
}, function ariaColSpan(val) {
    debugger;
    globalMy.value.Element_ariaColSpan = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColSpan.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColSpan.set, 'set');
globalMy.value.Element_ariaColSpan = {};
globalMy.mydefineProperty(Element.prototype, 'ariaCurrent', {}, true, undefined, undefined, function ariaCurrent() {
    debugger;
    return globalMy.value.Element_ariaCurrent;
}, function ariaCurrent(val) {
    debugger;
    globalMy.value.Element_ariaCurrent = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaCurrent.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaCurrent.set, 'set');
globalMy.value.Element_ariaCurrent = {};
globalMy.mydefineProperty(Element.prototype, 'ariaDescription', {}, true, undefined, undefined, function ariaDescription() {
    debugger;
    return globalMy.value.Element_ariaDescription;
}, function ariaDescription(val) {
    debugger;
    globalMy.value.Element_ariaDescription = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDescription.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDescription.set, 'set');
globalMy.value.Element_ariaDescription = {};
globalMy.mydefineProperty(Element.prototype, 'ariaDisabled', {}, true, undefined, undefined, function ariaDisabled() {
    debugger;
    return globalMy.value.Element_ariaDisabled;
}, function ariaDisabled(val) {
    debugger;
    globalMy.value.Element_ariaDisabled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDisabled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDisabled.set, 'set');
globalMy.value.Element_ariaDisabled = {};
globalMy.mydefineProperty(Element.prototype, 'ariaExpanded', {}, true, undefined, undefined, function ariaExpanded() {
    debugger;
    return globalMy.value.Element_ariaExpanded;
}, function ariaExpanded(val) {
    debugger;
    globalMy.value.Element_ariaExpanded = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaExpanded.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaExpanded.set, 'set');
globalMy.value.Element_ariaExpanded = {};
globalMy.mydefineProperty(Element.prototype, 'ariaHasPopup', {}, true, undefined, undefined, function ariaHasPopup() {
    debugger;
    return globalMy.value.Element_ariaHasPopup;
}, function ariaHasPopup(val) {
    debugger;
    globalMy.value.Element_ariaHasPopup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHasPopup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHasPopup.set, 'set');
globalMy.value.Element_ariaHasPopup = {};
globalMy.mydefineProperty(Element.prototype, 'ariaHidden', {}, true, undefined, undefined, function ariaHidden() {
    debugger;
    return globalMy.value.Element_ariaHidden;
}, function ariaHidden(val) {
    debugger;
    globalMy.value.Element_ariaHidden = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHidden.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHidden.set, 'set');
globalMy.value.Element_ariaHidden = {};
globalMy.mydefineProperty(Element.prototype, 'ariaInvalid', {}, true, undefined, undefined, function ariaInvalid() {
    debugger;
    return globalMy.value.Element_ariaInvalid;
}, function ariaInvalid(val) {
    debugger;
    globalMy.value.Element_ariaInvalid = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaInvalid.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaInvalid.set, 'set');
globalMy.value.Element_ariaInvalid = {};
globalMy.mydefineProperty(Element.prototype, 'ariaKeyShortcuts', {}, true, undefined, undefined, function ariaKeyShortcuts() {
    debugger;
    return globalMy.value.Element_ariaKeyShortcuts;
}, function ariaKeyShortcuts(val) {
    debugger;
    globalMy.value.Element_ariaKeyShortcuts = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaKeyShortcuts.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaKeyShortcuts.set, 'set');
globalMy.value.Element_ariaKeyShortcuts = {};
globalMy.mydefineProperty(Element.prototype, 'ariaLabel', {}, true, undefined, undefined, function ariaLabel() {
    debugger;
    return globalMy.value.Element_ariaLabel;
}, function ariaLabel(val) {
    debugger;
    globalMy.value.Element_ariaLabel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLabel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLabel.set, 'set');
globalMy.value.Element_ariaLabel = {};
globalMy.mydefineProperty(Element.prototype, 'ariaLevel', {}, true, undefined, undefined, function ariaLevel() {
    debugger;
    return globalMy.value.Element_ariaLevel;
}, function ariaLevel(val) {
    debugger;
    globalMy.value.Element_ariaLevel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLevel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLevel.set, 'set');
globalMy.value.Element_ariaLevel = {};
globalMy.mydefineProperty(Element.prototype, 'ariaLive', {}, true, undefined, undefined, function ariaLive() {
    debugger;
    return globalMy.value.Element_ariaLive;
}, function ariaLive(val) {
    debugger;
    globalMy.value.Element_ariaLive = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLive.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLive.set, 'set');
globalMy.value.Element_ariaLive = {};
globalMy.mydefineProperty(Element.prototype, 'ariaModal', {}, true, undefined, undefined, function ariaModal() {
    debugger;
    return globalMy.value.Element_ariaModal;
}, function ariaModal(val) {
    debugger;
    globalMy.value.Element_ariaModal = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaModal.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaModal.set, 'set');
globalMy.value.Element_ariaModal = {};
globalMy.mydefineProperty(Element.prototype, 'ariaMultiLine', {}, true, undefined, undefined, function ariaMultiLine() {
    debugger;
    return globalMy.value.Element_ariaMultiLine;
}, function ariaMultiLine(val) {
    debugger;
    globalMy.value.Element_ariaMultiLine = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiLine.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiLine.set, 'set');
globalMy.value.Element_ariaMultiLine = {};
globalMy.mydefineProperty(Element.prototype, 'ariaMultiSelectable', {}, true, undefined, undefined, function ariaMultiSelectable() {
    debugger;
    return globalMy.value.Element_ariaMultiSelectable;
}, function ariaMultiSelectable(val) {
    debugger;
    globalMy.value.Element_ariaMultiSelectable = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiSelectable.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiSelectable.set, 'set');
globalMy.value.Element_ariaMultiSelectable = {};
globalMy.mydefineProperty(Element.prototype, 'ariaOrientation', {}, true, undefined, undefined, function ariaOrientation() {
    debugger;
    return globalMy.value.Element_ariaOrientation;
}, function ariaOrientation(val) {
    debugger;
    globalMy.value.Element_ariaOrientation = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaOrientation.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaOrientation.set, 'set');
globalMy.value.Element_ariaOrientation = {};
globalMy.mydefineProperty(Element.prototype, 'ariaPlaceholder', {}, true, undefined, undefined, function ariaPlaceholder() {
    debugger;
    return globalMy.value.Element_ariaPlaceholder;
}, function ariaPlaceholder(val) {
    debugger;
    globalMy.value.Element_ariaPlaceholder = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPlaceholder.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPlaceholder.set, 'set');
globalMy.value.Element_ariaPlaceholder = {};
globalMy.mydefineProperty(Element.prototype, 'ariaPosInSet', {}, true, undefined, undefined, function ariaPosInSet() {
    debugger;
    return globalMy.value.Element_ariaPosInSet;
}, function ariaPosInSet(val) {
    debugger;
    globalMy.value.Element_ariaPosInSet = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPosInSet.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPosInSet.set, 'set');
globalMy.value.Element_ariaPosInSet = {};
globalMy.mydefineProperty(Element.prototype, 'ariaPressed', {}, true, undefined, undefined, function ariaPressed() {
    debugger;
    return globalMy.value.Element_ariaPressed;
}, function ariaPressed(val) {
    debugger;
    globalMy.value.Element_ariaPressed = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPressed.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPressed.set, 'set');
globalMy.value.Element_ariaPressed = {};
globalMy.mydefineProperty(Element.prototype, 'ariaReadOnly', {}, true, undefined, undefined, function ariaReadOnly() {
    debugger;
    return globalMy.value.Element_ariaReadOnly;
}, function ariaReadOnly(val) {
    debugger;
    globalMy.value.Element_ariaReadOnly = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaReadOnly.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaReadOnly.set, 'set');
globalMy.value.Element_ariaReadOnly = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRelevant', {}, true, undefined, undefined, function ariaRelevant() {
    debugger;
    return globalMy.value.Element_ariaRelevant;
}, function ariaRelevant(val) {
    debugger;
    globalMy.value.Element_ariaRelevant = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRelevant.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRelevant.set, 'set');
globalMy.value.Element_ariaRelevant = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRequired', {}, true, undefined, undefined, function ariaRequired() {
    debugger;
    return globalMy.value.Element_ariaRequired;
}, function ariaRequired(val) {
    debugger;
    globalMy.value.Element_ariaRequired = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRequired.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRequired.set, 'set');
globalMy.value.Element_ariaRequired = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRoleDescription', {}, true, undefined, undefined, function ariaRoleDescription() {
    debugger;
    return globalMy.value.Element_ariaRoleDescription;
}, function ariaRoleDescription(val) {
    debugger;
    globalMy.value.Element_ariaRoleDescription = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRoleDescription.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRoleDescription.set, 'set');
globalMy.value.Element_ariaRoleDescription = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRowCount', {}, true, undefined, undefined, function ariaRowCount() {
    debugger;
    return globalMy.value.Element_ariaRowCount;
}, function ariaRowCount(val) {
    debugger;
    globalMy.value.Element_ariaRowCount = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowCount.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowCount.set, 'set');
globalMy.value.Element_ariaRowCount = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRowIndex', {}, true, undefined, undefined, function ariaRowIndex() {
    debugger;
    return globalMy.value.Element_ariaRowIndex;
}, function ariaRowIndex(val) {
    debugger;
    globalMy.value.Element_ariaRowIndex = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowIndex.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowIndex.set, 'set');
globalMy.value.Element_ariaRowIndex = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRowSpan', {}, true, undefined, undefined, function ariaRowSpan() {
    debugger;
    return globalMy.value.Element_ariaRowSpan;
}, function ariaRowSpan(val) {
    debugger;
    globalMy.value.Element_ariaRowSpan = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowSpan.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowSpan.set, 'set');
globalMy.value.Element_ariaRowSpan = {};
globalMy.mydefineProperty(Element.prototype, 'ariaSelected', {}, true, undefined, undefined, function ariaSelected() {
    debugger;
    return globalMy.value.Element_ariaSelected;
}, function ariaSelected(val) {
    debugger;
    globalMy.value.Element_ariaSelected = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSelected.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSelected.set, 'set');
globalMy.value.Element_ariaSelected = {};
globalMy.mydefineProperty(Element.prototype, 'ariaSetSize', {}, true, undefined, undefined, function ariaSetSize() {
    debugger;
    return globalMy.value.Element_ariaSetSize;
}, function ariaSetSize(val) {
    debugger;
    globalMy.value.Element_ariaSetSize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSetSize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSetSize.set, 'set');
globalMy.value.Element_ariaSetSize = {};
globalMy.mydefineProperty(Element.prototype, 'ariaSort', {}, true, undefined, undefined, function ariaSort() {
    debugger;
    return globalMy.value.Element_ariaSort;
}, function ariaSort(val) {
    debugger;
    globalMy.value.Element_ariaSort = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSort.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSort.set, 'set');
globalMy.value.Element_ariaSort = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueMax', {}, true, undefined, undefined, function ariaValueMax() {
    debugger;
    return globalMy.value.Element_ariaValueMax;
}, function ariaValueMax(val) {
    debugger;
    globalMy.value.Element_ariaValueMax = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMax.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMax.set, 'set');
globalMy.value.Element_ariaValueMax = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueMin', {}, true, undefined, undefined, function ariaValueMin() {
    debugger;
    return globalMy.value.Element_ariaValueMin;
}, function ariaValueMin(val) {
    debugger;
    globalMy.value.Element_ariaValueMin = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMin.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMin.set, 'set');
globalMy.value.Element_ariaValueMin = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueNow', {}, true, undefined, undefined, function ariaValueNow() {
    debugger;
    return globalMy.value.Element_ariaValueNow;
}, function ariaValueNow(val) {
    debugger;
    globalMy.value.Element_ariaValueNow = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueNow.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueNow.set, 'set');
globalMy.value.Element_ariaValueNow = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueText', {}, true, undefined, undefined, function ariaValueText() {
    debugger;
    return globalMy.value.Element_ariaValueText;
}, function ariaValueText(val) {
    debugger;
    globalMy.value.Element_ariaValueText = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueText.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueText.set, 'set');
globalMy.value.Element_ariaValueText = {};
globalMy.mydefineProperty(Element.prototype, 'getAnimations', function getAnimations() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAnimations);


