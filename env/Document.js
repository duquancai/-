Document = function Document() {
    this.location = {};
};
globalMy.functionprotect(Document);
Document.__proto__ = Node;
Object.setPrototypeOf(Document.prototype, Node.prototype);
globalMy.rename(Document.prototype, "Document")

globalMy.mydefineProperty(Document.prototype, 'implementation', {}, true, undefined, undefined, function implementation() {
    debugger;
    return globalMy.value.Document_implementation;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).implementation.get, 'get');
globalMy.value.Document_implementation = {};
globalMy.mydefineProperty(Document.prototype, 'URL', 'chrome://newtab/', true, undefined, undefined, function URL() {
    debugger;
    return globalMy.value.Document_URL;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).URL.get, 'get');
globalMy.value.Document_URL = 'chrome://newtab/';
globalMy.mydefineProperty(Document.prototype, 'documentURI', 'chrome://newtab/', true, undefined, undefined, function documentURI() {
    debugger;
    return globalMy.value.Document_documentURI;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).documentURI.get, 'get');
globalMy.value.Document_documentURI = 'chrome://newtab/';
globalMy.mydefineProperty(Document.prototype, 'compatMode', 'CSS1Compat', true, undefined, undefined, function compatMode() {
    debugger;
    return globalMy.value.Document_compatMode;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).compatMode.get, 'get');
globalMy.value.Document_compatMode = 'CSS1Compat';
globalMy.mydefineProperty(Document.prototype, 'characterSet', 'UTF-8', true, undefined, undefined, function characterSet() {
    debugger;
    return globalMy.value.Document_characterSet;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).characterSet.get, 'get');
globalMy.value.Document_characterSet = 'UTF-8';
globalMy.mydefineProperty(Document.prototype, 'charset', 'UTF-8', true, undefined, undefined, function charset() {
    debugger;
    return globalMy.value.Document_charset;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).charset.get, 'get');
globalMy.value.Document_charset = 'UTF-8';
globalMy.mydefineProperty(Document.prototype, 'inputEncoding', 'UTF-8', true, undefined, undefined, function inputEncoding() {
    debugger;
    return globalMy.value.Document_inputEncoding;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).inputEncoding.get, 'get');
globalMy.value.Document_inputEncoding = 'UTF-8';
globalMy.mydefineProperty(Document.prototype, 'contentType', 'text/html', true, undefined, undefined, function contentType() {
    debugger;
    return globalMy.value.Document_contentType;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).contentType.get, 'get');
globalMy.value.Document_contentType = 'text/html';
globalMy.mydefineProperty(Document.prototype, 'doctype', {}, true, undefined, undefined, function doctype() {
    debugger;
    return globalMy.value.Document_doctype;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).doctype.get, 'get');
globalMy.value.Document_doctype = {};

//检测webdriver、selenium
globalMy.mydefineProperty(Document.prototype, 'documentElement', {}, true, undefined, undefined, function documentElement() {
    debugger;
    return globalMy.getDocumentElement();
}, undefined);

globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).documentElement.get, 'get');

// globalMy.value.Document_documentElement = {
//     style: globalMy.value.document_element_style,
//     getAttribute: function getAttribute(tagName) {
//         debugger;
//         var tag_name = tagName.toLowerCase() + '';
//         return null;
//     }
// };
// Object.setPrototypeOf(globalMy.value.Document_documentElement, HTMLHtmlElement.prototype)


globalMy.mydefineProperty(Document.prototype, 'xmlEncoding', {}, true, undefined, undefined, function xmlEncoding() {
    debugger;
    return globalMy.value.Document_xmlEncoding;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlEncoding.get, 'get');
globalMy.value.Document_xmlEncoding = {};
globalMy.mydefineProperty(Document.prototype, 'xmlVersion', {}, true, undefined, undefined, function xmlVersion() {
    debugger;
    return globalMy.value.Document_xmlVersion;
}, function xmlVersion(val) {
    debugger;
    globalMy.value.Document_xmlVersion = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlVersion.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlVersion.set, 'set');
globalMy.value.Document_xmlVersion = {};
globalMy.mydefineProperty(Document.prototype, 'xmlStandalone', false, true, undefined, undefined, function xmlStandalone() {
    debugger;
    return globalMy.value.Document_xmlStandalone;
}, function xmlStandalone(val) {
    debugger;
    globalMy.value.Document_xmlStandalone = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlStandalone.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlStandalone.set, 'set');
globalMy.value.Document_xmlStandalone = false;
globalMy.mydefineProperty(Document.prototype, 'domain', 'newtab', true, undefined, undefined, function domain() {
    debugger;
    return globalMy.value.Document_domain;
}, function domain(val) {
    debugger;
    globalMy.value.Document_domain = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).domain.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).domain.set, 'set');
globalMy.value.Document_domain = 'newtab';
globalMy.mydefineProperty(Document.prototype, 'referrer', '', true, undefined, undefined, function referrer() {
    debugger;
    return globalMy.value.Document_referrer;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).referrer.get, 'get');
globalMy.value.Document_referrer = '';
globalMy.mydefineProperty(Document.prototype, 'cookie', '', true, undefined, undefined, function cookie() {
    debugger;
    return globalMy.value.Document_cookie;
}, function cookie(val) {
    console.log('document[setcookie]=>[' + val + ']');
    debugger;
    var cookie = val.split(";")[0];
    var ncookie = cookie.split("=");
    var flag = false;
    var cache = globalMy.value.Document_cookie.split("; ");
    cache = cache.map(function (a) {
        if (a.split("=")[0] === ncookie[0]) {
            flag = true;
            return cookie;
        }
        return a;
    })
    globalMy.value.Document_cookie = cache.join("; ");
    if (!flag) {
        globalMy.value.Document_cookie += "; " + cookie;
    }
    if (globalMy.value.Document_cookie.indexOf("; ") === 0) {
        globalMy.value.Document_cookie = globalMy.value.Document_cookie.slice(2, globalMy.value.Document_cookie.length)
    }
    console.log('document[setcookie] end =>[' + globalMy.value.Document_cookie + ']');
})
;globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).cookie.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).cookie.set, 'set');
globalMy.value.Document_cookie = '';
globalMy.mydefineProperty(Document.prototype, 'lastModified', '06/04/2022 17:42:39', true, undefined, undefined, function lastModified() {
    debugger;
    return globalMy.value.Document_lastModified;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).lastModified.get, 'get');
globalMy.value.Document_lastModified = '06/04/2022 17:42:39';
globalMy.mydefineProperty(Document.prototype, 'readyState', 'complete', true, undefined, undefined, function readyState() {
    debugger;
    return globalMy.value.Document_readyState;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).readyState.get, 'get');
globalMy.value.Document_readyState = 'complete';
globalMy.mydefineProperty(Document.prototype, 'title', '新标签页', true, undefined, undefined, function title() {
    debugger;
    return globalMy.value.Document_title;
}, function title(val) {
    debugger;
    globalMy.value.Document_title = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).title.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).title.set, 'set');
globalMy.value.Document_title = '新标签页';
globalMy.mydefineProperty(Document.prototype, 'dir', 'ltr', true, undefined, undefined, function dir() {
    debugger;
    return globalMy.value.Document_dir;
}, function dir(val) {
    debugger;
    globalMy.value.Document_dir = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).dir.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).dir.set, 'set');
globalMy.value.Document_dir = 'ltr';

//特殊
globalMy.mydefineProperty(Document.prototype, 'body', {}, true, undefined, undefined, function body() {
    debugger;
    return globalMy.element.body;
}, function body(val) {
    debugger;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).body.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).body.set, 'set');


globalMy.mydefineProperty(Document.prototype, 'head', {}, true, undefined, undefined, function head() {
    debugger;
    return globalMy.element.head;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).head.get, 'get');

//需特殊处理
globalMy.mydefineProperty(Document.prototype, 'images', {}, true, undefined, undefined, function images() {
    debugger;
    return globalMy.getElementsByTagName(this,"img");
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).images.get, 'get');



globalMy.mydefineProperty(Document.prototype, 'embeds', {}, true, undefined, undefined, function embeds() {
    debugger;
    return globalMy.value.Document_embeds;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).embeds.get, 'get');
globalMy.value.Document_embeds = {};

globalMy.mydefineProperty(Document.prototype, 'plugins', [], true, undefined, undefined, function plugins() {
    debugger;
    return globalMy.value.Document_plugins;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).plugins.get, 'get');
globalMy.value.Document_plugins = [];

globalMy.mydefineProperty(Document.prototype, 'links', {}, true, undefined, undefined, function links() {
    debugger;
    return globalMy.value.Document_links;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).links.get, 'get');
globalMy.value.Document_links = {};
globalMy.mydefineProperty(Document.prototype, 'forms', {}, true, undefined, undefined, function forms() {
    debugger;
    return globalMy.value.Document_forms;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).forms.get, 'get');
globalMy.value.Document_forms = {};

globalMy.mydefineProperty(Document.prototype, 'currentScript', {}, true, undefined, undefined, function currentScript() {
    debugger;
    return globalMy.value.Document_currentScript;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).currentScript.get, 'get');
globalMy.value.Document_currentScript = {};
globalMy.mydefineProperty(Document.prototype, 'defaultView', {}, true, undefined, undefined, function defaultView() {
    debugger;
    return globalMy.value.Document_defaultView;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).defaultView.get, 'get');
globalMy.value.Document_defaultView = {};
globalMy.mydefineProperty(Document.prototype, 'designMode', 'off', true, undefined, undefined, function designMode() {
    debugger;
    return globalMy.value.Document_designMode;
}, function designMode(val) {
    debugger;
    globalMy.value.Document_designMode = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).designMode.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).designMode.set, 'set');
globalMy.value.Document_designMode = 'off';
globalMy.mydefineProperty(Document.prototype, 'onreadystatechange', {}, true, undefined, undefined, function onreadystatechange() {
    debugger;
    return globalMy.value.Document_onreadystatechange;
}, function onreadystatechange(val) {
    debugger;
    globalMy.value.Document_onreadystatechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreadystatechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreadystatechange.set, 'set');
globalMy.value.Document_onreadystatechange = {};
globalMy.mydefineProperty(Document.prototype, 'anchors', {}, true, undefined, undefined, function anchors() {
    debugger;
    return globalMy.value.Document_anchors;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).anchors.get, 'get');
globalMy.value.Document_anchors = {};
globalMy.mydefineProperty(Document.prototype, 'applets', {}, true, undefined, undefined, function applets() {
    debugger;
    return globalMy.value.Document_applets;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).applets.get, 'get');
globalMy.value.Document_applets = {};
globalMy.mydefineProperty(Document.prototype, 'fgColor', '', true, undefined, undefined, function fgColor() {
    debugger;
    return globalMy.value.Document_fgColor;
}, function fgColor(val) {
    debugger;
    globalMy.value.Document_fgColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fgColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fgColor.set, 'set');
globalMy.value.Document_fgColor = '';
globalMy.mydefineProperty(Document.prototype, 'linkColor', '', true, undefined, undefined, function linkColor() {
    debugger;
    return globalMy.value.Document_linkColor;
}, function linkColor(val) {
    debugger;
    globalMy.value.Document_linkColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).linkColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).linkColor.set, 'set');
globalMy.value.Document_linkColor = '';
globalMy.mydefineProperty(Document.prototype, 'vlinkColor', '', true, undefined, undefined, function vlinkColor() {
    debugger;
    return globalMy.value.Document_vlinkColor;
}, function vlinkColor(val) {
    debugger;
    globalMy.value.Document_vlinkColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).vlinkColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).vlinkColor.set, 'set');
globalMy.value.Document_vlinkColor = '';
globalMy.mydefineProperty(Document.prototype, 'alinkColor', '', true, undefined, undefined, function alinkColor() {
    debugger;
    return globalMy.value.Document_alinkColor;
}, function alinkColor(val) {
    debugger;
    globalMy.value.Document_alinkColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).alinkColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).alinkColor.set, 'set');
globalMy.value.Document_alinkColor = '';
globalMy.mydefineProperty(Document.prototype, 'bgColor', '', true, undefined, undefined, function bgColor() {
    debugger;
    return globalMy.value.Document_bgColor;
}, function bgColor(val) {
    debugger;
    globalMy.value.Document_bgColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).bgColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).bgColor.set, 'set');
globalMy.value.Document_bgColor = '';

globalMy.mydefineProperty(Document.prototype, 'all', [], true, undefined, undefined, function all() {
    debugger;
    return globalMy.getHTMLAllColletion();
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).all.get, 'get');


globalMy.mydefineProperty(Document.prototype, 'scrollingElement', {}, true, undefined, undefined, function scrollingElement() {
    debugger;
    return globalMy.value.Document_scrollingElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).scrollingElement.get, 'get');
globalMy.value.Document_scrollingElement = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerlockchange', {}, true, undefined, undefined, function onpointerlockchange() {
    debugger;
    return globalMy.value.Document_onpointerlockchange;
}, function onpointerlockchange(val) {
    debugger;
    globalMy.value.Document_onpointerlockchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockchange.set, 'set');
globalMy.value.Document_onpointerlockchange = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerlockerror', {}, true, undefined, undefined, function onpointerlockerror() {
    debugger;
    return globalMy.value.Document_onpointerlockerror;
}, function onpointerlockerror(val) {
    debugger;
    globalMy.value.Document_onpointerlockerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockerror.set, 'set');
globalMy.value.Document_onpointerlockerror = {};
globalMy.mydefineProperty(Document.prototype, 'hidden', false, true, undefined, undefined, function hidden() {
    debugger;
    return globalMy.value.Document_hidden;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).hidden.get, 'get');
globalMy.value.Document_hidden = false;
globalMy.mydefineProperty(Document.prototype, 'visibilityState', 'visible', true, undefined, undefined, function visibilityState() {
    debugger;
    return globalMy.value.Document_visibilityState;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).visibilityState.get, 'get');
globalMy.value.Document_visibilityState = 'visible';
globalMy.mydefineProperty(Document.prototype, 'wasDiscarded', false, true, undefined, undefined, function wasDiscarded() {
    debugger;
    return globalMy.value.Document_wasDiscarded;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).wasDiscarded.get, 'get');
globalMy.value.Document_wasDiscarded = false;
globalMy.mydefineProperty(Document.prototype, 'featurePolicy', {}, true, undefined, undefined, function featurePolicy() {
    debugger;
    return globalMy.value.Document_featurePolicy;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).featurePolicy.get, 'get');
globalMy.value.Document_featurePolicy = {};
globalMy.mydefineProperty(Document.prototype, 'webkitVisibilityState', 'visible', true, undefined, undefined, function webkitVisibilityState() {
    debugger;
    return globalMy.value.Document_webkitVisibilityState;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitVisibilityState.get, 'get');
globalMy.value.Document_webkitVisibilityState = 'visible';
globalMy.mydefineProperty(Document.prototype, 'webkitHidden', false, true, undefined, undefined, function webkitHidden() {
    debugger;
    return globalMy.value.Document_webkitHidden;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitHidden.get, 'get');
globalMy.value.Document_webkitHidden = false;
globalMy.mydefineProperty(Document.prototype, 'onbeforecopy', {}, true, undefined, undefined, function onbeforecopy() {
    debugger;
    return globalMy.value.Document_onbeforecopy;
}, function onbeforecopy(val) {
    debugger;
    globalMy.value.Document_onbeforecopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecopy.set, 'set');
globalMy.value.Document_onbeforecopy = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforecut', {}, true, undefined, undefined, function onbeforecut() {
    debugger;
    return globalMy.value.Document_onbeforecut;
}, function onbeforecut(val) {
    debugger;
    globalMy.value.Document_onbeforecut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecut.set, 'set');
globalMy.value.Document_onbeforecut = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforepaste', {}, true, undefined, undefined, function onbeforepaste() {
    debugger;
    return globalMy.value.Document_onbeforepaste;
}, function onbeforepaste(val) {
    debugger;
    globalMy.value.Document_onbeforepaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforepaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforepaste.set, 'set');
globalMy.value.Document_onbeforepaste = {};
globalMy.mydefineProperty(Document.prototype, 'onfreeze', {}, true, undefined, undefined, function onfreeze() {
    debugger;
    return globalMy.value.Document_onfreeze;
}, function onfreeze(val) {
    debugger;
    globalMy.value.Document_onfreeze = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfreeze.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfreeze.set, 'set');
globalMy.value.Document_onfreeze = {};
globalMy.mydefineProperty(Document.prototype, 'onresume', {}, true, undefined, undefined, function onresume() {
    debugger;
    return globalMy.value.Document_onresume;
}, function onresume(val) {
    debugger;
    globalMy.value.Document_onresume = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresume.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresume.set, 'set');
globalMy.value.Document_onresume = {};
globalMy.mydefineProperty(Document.prototype, 'onsearch', {}, true, undefined, undefined, function onsearch() {
    debugger;
    return globalMy.value.Document_onsearch;
}, function onsearch(val) {
    debugger;
    globalMy.value.Document_onsearch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsearch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsearch.set, 'set');
globalMy.value.Document_onsearch = {};
globalMy.mydefineProperty(Document.prototype, 'onvisibilitychange', {}, true, undefined, undefined, function onvisibilitychange() {
    debugger;
    return globalMy.value.Document_onvisibilitychange;
}, function onvisibilitychange(val) {
    debugger;
    globalMy.value.Document_onvisibilitychange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvisibilitychange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvisibilitychange.set, 'set');
globalMy.value.Document_onvisibilitychange = {};
globalMy.mydefineProperty(Document.prototype, 'fullscreenEnabled', true, true, undefined, undefined, function fullscreenEnabled() {
    debugger;
    return globalMy.value.Document_fullscreenEnabled;
}, function fullscreenEnabled(val) {
    debugger;
    globalMy.value.Document_fullscreenEnabled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenEnabled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenEnabled.set, 'set');
globalMy.value.Document_fullscreenEnabled = true;
globalMy.mydefineProperty(Document.prototype, 'fullscreen', false, true, undefined, undefined, function fullscreen() {
    debugger;
    return globalMy.value.Document_fullscreen;
}, function fullscreen(val) {
    debugger;
    globalMy.value.Document_fullscreen = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreen.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreen.set, 'set');
globalMy.value.Document_fullscreen = false;
globalMy.mydefineProperty(Document.prototype, 'onfullscreenchange', {}, true, undefined, undefined, function onfullscreenchange() {
    debugger;
    return globalMy.value.Document_onfullscreenchange;
}, function onfullscreenchange(val) {
    debugger;
    globalMy.value.Document_onfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenchange.set, 'set');
globalMy.value.Document_onfullscreenchange = {};
globalMy.mydefineProperty(Document.prototype, 'onfullscreenerror', {}, true, undefined, undefined, function onfullscreenerror() {
    debugger;
    return globalMy.value.Document_onfullscreenerror;
}, function onfullscreenerror(val) {
    debugger;
    globalMy.value.Document_onfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenerror.set, 'set');
globalMy.value.Document_onfullscreenerror = {};
globalMy.mydefineProperty(Document.prototype, 'webkitIsFullScreen', false, true, undefined, undefined, function webkitIsFullScreen() {
    debugger;
    return globalMy.value.Document_webkitIsFullScreen;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitIsFullScreen.get, 'get');
globalMy.value.Document_webkitIsFullScreen = false;
globalMy.mydefineProperty(Document.prototype, 'webkitCurrentFullScreenElement', {}, true, undefined, undefined, function webkitCurrentFullScreenElement() {
    debugger;
    return globalMy.value.Document_webkitCurrentFullScreenElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitCurrentFullScreenElement.get, 'get');
globalMy.value.Document_webkitCurrentFullScreenElement = {};
globalMy.mydefineProperty(Document.prototype, 'webkitFullscreenEnabled', true, true, undefined, undefined, function webkitFullscreenEnabled() {
    debugger;
    return globalMy.value.Document_webkitFullscreenEnabled;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitFullscreenEnabled.get, 'get');
globalMy.value.Document_webkitFullscreenEnabled = true;
globalMy.mydefineProperty(Document.prototype, 'webkitFullscreenElement', {}, true, undefined, undefined, function webkitFullscreenElement() {
    debugger;
    return globalMy.value.Document_webkitFullscreenElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitFullscreenElement.get, 'get');
globalMy.value.Document_webkitFullscreenElement = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitfullscreenchange', {}, true, undefined, undefined, function onwebkitfullscreenchange() {
    debugger;
    return globalMy.value.Document_onwebkitfullscreenchange;
}, function onwebkitfullscreenchange(val) {
    debugger;
    globalMy.value.Document_onwebkitfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenchange.set, 'set');
globalMy.value.Document_onwebkitfullscreenchange = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitfullscreenerror', {}, true, undefined, undefined, function onwebkitfullscreenerror() {
    debugger;
    return globalMy.value.Document_onwebkitfullscreenerror;
}, function onwebkitfullscreenerror(val) {
    debugger;
    globalMy.value.Document_onwebkitfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenerror.set, 'set');
globalMy.value.Document_onwebkitfullscreenerror = {};
globalMy.mydefineProperty(Document.prototype, 'rootElement', {}, true, undefined, undefined, function rootElement() {
    debugger;
    return globalMy.value.Document_rootElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).rootElement.get, 'get');
globalMy.value.Document_rootElement = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforexrselect', {}, true, undefined, undefined, function onbeforexrselect() {
    debugger;
    return globalMy.value.Document_onbeforexrselect;
}, function onbeforexrselect(val) {
    debugger;
    globalMy.value.Document_onbeforexrselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforexrselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforexrselect.set, 'set');
globalMy.value.Document_onbeforexrselect = {};
globalMy.mydefineProperty(Document.prototype, 'onabort', {}, true, undefined, undefined, function onabort() {
    debugger;
    return globalMy.value.Document_onabort;
}, function onabort(val) {
    debugger;
    globalMy.value.Document_onabort = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onabort.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onabort.set, 'set');
globalMy.value.Document_onabort = {};
globalMy.mydefineProperty(Document.prototype, 'onblur', {}, true, undefined, undefined, function onblur() {
    debugger;
    return globalMy.value.Document_onblur;
}, function onblur(val) {
    debugger;
    globalMy.value.Document_onblur = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onblur.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onblur.set, 'set');
globalMy.value.Document_onblur = {};
globalMy.mydefineProperty(Document.prototype, 'oncancel', {}, true, undefined, undefined, function oncancel() {
    debugger;
    return globalMy.value.Document_oncancel;
}, function oncancel(val) {
    debugger;
    globalMy.value.Document_oncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncancel.set, 'set');
globalMy.value.Document_oncancel = {};
globalMy.mydefineProperty(Document.prototype, 'oncanplay', {}, true, undefined, undefined, function oncanplay() {
    debugger;
    return globalMy.value.Document_oncanplay;
}, function oncanplay(val) {
    debugger;
    globalMy.value.Document_oncanplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplay.set, 'set');
globalMy.value.Document_oncanplay = {};
globalMy.mydefineProperty(Document.prototype, 'oncanplaythrough', {}, true, undefined, undefined, function oncanplaythrough() {
    debugger;
    return globalMy.value.Document_oncanplaythrough;
}, function oncanplaythrough(val) {
    debugger;
    globalMy.value.Document_oncanplaythrough = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplaythrough.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplaythrough.set, 'set');
globalMy.value.Document_oncanplaythrough = {};
globalMy.mydefineProperty(Document.prototype, 'onchange', {}, true, undefined, undefined, function onchange() {
    debugger;
    return globalMy.value.Document_onchange;
}, function onchange(val) {
    debugger;
    globalMy.value.Document_onchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onchange.set, 'set');
globalMy.value.Document_onchange = {};
globalMy.mydefineProperty(Document.prototype, 'onclick', {}, true, undefined, undefined, function onclick() {
    debugger;
    return globalMy.value.Document_onclick;
}, function onclick(val) {
    debugger;
    globalMy.value.Document_onclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclick.set, 'set');
globalMy.value.Document_onclick = {};
globalMy.mydefineProperty(Document.prototype, 'onclose', {}, true, undefined, undefined, function onclose() {
    debugger;
    return globalMy.value.Document_onclose;
}, function onclose(val) {
    debugger;
    globalMy.value.Document_onclose = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclose.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclose.set, 'set');
globalMy.value.Document_onclose = {};
globalMy.mydefineProperty(Document.prototype, 'oncontextlost', {}, true, undefined, undefined, function oncontextlost() {
    debugger;
    return globalMy.value.Document_oncontextlost;
}, function oncontextlost(val) {
    debugger;
    globalMy.value.Document_oncontextlost = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextlost.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextlost.set, 'set');
globalMy.value.Document_oncontextlost = {};
globalMy.mydefineProperty(Document.prototype, 'oncontextmenu', {}, true, undefined, undefined, function oncontextmenu() {
    debugger;
    return globalMy.value.Document_oncontextmenu;
}, function oncontextmenu(val) {
    debugger;
    globalMy.value.Document_oncontextmenu = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextmenu.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextmenu.set, 'set');
globalMy.value.Document_oncontextmenu = {};
globalMy.mydefineProperty(Document.prototype, 'oncontextrestored', {}, true, undefined, undefined, function oncontextrestored() {
    debugger;
    return globalMy.value.Document_oncontextrestored;
}, function oncontextrestored(val) {
    debugger;
    globalMy.value.Document_oncontextrestored = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextrestored.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextrestored.set, 'set');
globalMy.value.Document_oncontextrestored = {};
globalMy.mydefineProperty(Document.prototype, 'oncuechange', {}, true, undefined, undefined, function oncuechange() {
    debugger;
    return globalMy.value.Document_oncuechange;
}, function oncuechange(val) {
    debugger;
    globalMy.value.Document_oncuechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncuechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncuechange.set, 'set');
globalMy.value.Document_oncuechange = {};
globalMy.mydefineProperty(Document.prototype, 'ondblclick', {}, true, undefined, undefined, function ondblclick() {
    debugger;
    return globalMy.value.Document_ondblclick;
}, function ondblclick(val) {
    debugger;
    globalMy.value.Document_ondblclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondblclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondblclick.set, 'set');
globalMy.value.Document_ondblclick = {};
globalMy.mydefineProperty(Document.prototype, 'ondrag', {}, true, undefined, undefined, function ondrag() {
    debugger;
    return globalMy.value.Document_ondrag;
}, function ondrag(val) {
    debugger;
    globalMy.value.Document_ondrag = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrag.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrag.set, 'set');
globalMy.value.Document_ondrag = {};
globalMy.mydefineProperty(Document.prototype, 'ondragend', {}, true, undefined, undefined, function ondragend() {
    debugger;
    return globalMy.value.Document_ondragend;
}, function ondragend(val) {
    debugger;
    globalMy.value.Document_ondragend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragend.set, 'set');
globalMy.value.Document_ondragend = {};
globalMy.mydefineProperty(Document.prototype, 'ondragenter', {}, true, undefined, undefined, function ondragenter() {
    debugger;
    return globalMy.value.Document_ondragenter;
}, function ondragenter(val) {
    debugger;
    globalMy.value.Document_ondragenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragenter.set, 'set');
globalMy.value.Document_ondragenter = {};
globalMy.mydefineProperty(Document.prototype, 'ondragleave', {}, true, undefined, undefined, function ondragleave() {
    debugger;
    return globalMy.value.Document_ondragleave;
}, function ondragleave(val) {
    debugger;
    globalMy.value.Document_ondragleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragleave.set, 'set');
globalMy.value.Document_ondragleave = {};
globalMy.mydefineProperty(Document.prototype, 'ondragover', {}, true, undefined, undefined, function ondragover() {
    debugger;
    return globalMy.value.Document_ondragover;
}, function ondragover(val) {
    debugger;
    globalMy.value.Document_ondragover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragover.set, 'set');
globalMy.value.Document_ondragover = {};
globalMy.mydefineProperty(Document.prototype, 'ondragstart', {}, true, undefined, undefined, function ondragstart() {
    debugger;
    return globalMy.value.Document_ondragstart;
}, function ondragstart(val) {
    debugger;
    globalMy.value.Document_ondragstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragstart.set, 'set');
globalMy.value.Document_ondragstart = {};
globalMy.mydefineProperty(Document.prototype, 'ondrop', {}, true, undefined, undefined, function ondrop() {
    debugger;
    return globalMy.value.Document_ondrop;
}, function ondrop(val) {
    debugger;
    globalMy.value.Document_ondrop = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrop.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrop.set, 'set');
globalMy.value.Document_ondrop = {};
globalMy.mydefineProperty(Document.prototype, 'ondurationchange', {}, true, undefined, undefined, function ondurationchange() {
    debugger;
    return globalMy.value.Document_ondurationchange;
}, function ondurationchange(val) {
    debugger;
    globalMy.value.Document_ondurationchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondurationchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondurationchange.set, 'set');
globalMy.value.Document_ondurationchange = {};
globalMy.mydefineProperty(Document.prototype, 'onemptied', {}, true, undefined, undefined, function onemptied() {
    debugger;
    return globalMy.value.Document_onemptied;
}, function onemptied(val) {
    debugger;
    globalMy.value.Document_onemptied = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onemptied.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onemptied.set, 'set');
globalMy.value.Document_onemptied = {};
globalMy.mydefineProperty(Document.prototype, 'onended', {}, true, undefined, undefined, function onended() {
    debugger;
    return globalMy.value.Document_onended;
}, function onended(val) {
    debugger;
    globalMy.value.Document_onended = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onended.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onended.set, 'set');
globalMy.value.Document_onended = {};
globalMy.mydefineProperty(Document.prototype, 'onerror', {}, true, undefined, undefined, function onerror() {
    debugger;
    return globalMy.value.Document_onerror;
}, function onerror(val) {
    debugger;
    globalMy.value.Document_onerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onerror.set, 'set');
globalMy.value.Document_onerror = {};
globalMy.mydefineProperty(Document.prototype, 'onfocus', {}, true, undefined, undefined, function onfocus() {
    debugger;
    return globalMy.value.Document_onfocus;
}, function onfocus(val) {
    debugger;
    globalMy.value.Document_onfocus = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfocus.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfocus.set, 'set');
globalMy.value.Document_onfocus = {};
globalMy.mydefineProperty(Document.prototype, 'onformdata', {}, true, undefined, undefined, function onformdata() {
    debugger;
    return globalMy.value.Document_onformdata;
}, function onformdata(val) {
    debugger;
    globalMy.value.Document_onformdata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onformdata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onformdata.set, 'set');
globalMy.value.Document_onformdata = {};
globalMy.mydefineProperty(Document.prototype, 'oninput', {}, true, undefined, undefined, function oninput() {
    debugger;
    return globalMy.value.Document_oninput;
}, function oninput(val) {
    debugger;
    globalMy.value.Document_oninput = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninput.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninput.set, 'set');
globalMy.value.Document_oninput = {};
globalMy.mydefineProperty(Document.prototype, 'oninvalid', {}, true, undefined, undefined, function oninvalid() {
    debugger;
    return globalMy.value.Document_oninvalid;
}, function oninvalid(val) {
    debugger;
    globalMy.value.Document_oninvalid = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninvalid.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninvalid.set, 'set');
globalMy.value.Document_oninvalid = {};
globalMy.mydefineProperty(Document.prototype, 'onkeydown', {}, true, undefined, undefined, function onkeydown() {
    debugger;
    return globalMy.value.Document_onkeydown;
}, function onkeydown(val) {
    debugger;
    globalMy.value.Document_onkeydown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeydown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeydown.set, 'set');
globalMy.value.Document_onkeydown = {};
globalMy.mydefineProperty(Document.prototype, 'onkeypress', {}, true, undefined, undefined, function onkeypress() {
    debugger;
    return globalMy.value.Document_onkeypress;
}, function onkeypress(val) {
    debugger;
    globalMy.value.Document_onkeypress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeypress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeypress.set, 'set');
globalMy.value.Document_onkeypress = {};
globalMy.mydefineProperty(Document.prototype, 'onkeyup', {}, true, undefined, undefined, function onkeyup() {
    debugger;
    return globalMy.value.Document_onkeyup;
}, function onkeyup(val) {
    debugger;
    globalMy.value.Document_onkeyup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeyup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeyup.set, 'set');
globalMy.value.Document_onkeyup = {};
globalMy.mydefineProperty(Document.prototype, 'onload', {}, true, undefined, undefined, function onload() {
    debugger;
    return globalMy.value.Document_onload;
}, function onload(val) {
    debugger;
    globalMy.value.Document_onload = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onload.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onload.set, 'set');
globalMy.value.Document_onload = {};
globalMy.mydefineProperty(Document.prototype, 'onloadeddata', {}, true, undefined, undefined, function onloadeddata() {
    debugger;
    return globalMy.value.Document_onloadeddata;
}, function onloadeddata(val) {
    debugger;
    globalMy.value.Document_onloadeddata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadeddata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadeddata.set, 'set');
globalMy.value.Document_onloadeddata = {};
globalMy.mydefineProperty(Document.prototype, 'onloadedmetadata', {}, true, undefined, undefined, function onloadedmetadata() {
    debugger;
    return globalMy.value.Document_onloadedmetadata;
}, function onloadedmetadata(val) {
    debugger;
    globalMy.value.Document_onloadedmetadata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadedmetadata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadedmetadata.set, 'set');
globalMy.value.Document_onloadedmetadata = {};
globalMy.mydefineProperty(Document.prototype, 'onloadstart', {}, true, undefined, undefined, function onloadstart() {
    debugger;
    return globalMy.value.Document_onloadstart;
}, function onloadstart(val) {
    debugger;
    globalMy.value.Document_onloadstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadstart.set, 'set');
globalMy.value.Document_onloadstart = {};
globalMy.mydefineProperty(Document.prototype, 'onmousedown', {}, true, undefined, undefined, function onmousedown() {
    debugger;
    return globalMy.value.Document_onmousedown;
}, function onmousedown(val) {
    debugger;
    globalMy.value.Document_onmousedown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousedown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousedown.set, 'set');
globalMy.value.Document_onmousedown = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseenter', {}, true, undefined, undefined, function onmouseenter() {
    debugger;
    return globalMy.value.Document_onmouseenter;
}, function onmouseenter(val) {
    debugger;
    globalMy.value.Document_onmouseenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseenter.set, 'set');
globalMy.value.Document_onmouseenter = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseleave', {}, true, undefined, undefined, function onmouseleave() {
    debugger;
    return globalMy.value.Document_onmouseleave;
}, function onmouseleave(val) {
    debugger;
    globalMy.value.Document_onmouseleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseleave.set, 'set');
globalMy.value.Document_onmouseleave = {};
globalMy.mydefineProperty(Document.prototype, 'onmousemove', {}, true, undefined, undefined, function onmousemove() {
    debugger;
    return globalMy.value.Document_onmousemove;
}, function onmousemove(val) {
    debugger;
    globalMy.value.Document_onmousemove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousemove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousemove.set, 'set');
globalMy.value.Document_onmousemove = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseout', {}, true, undefined, undefined, function onmouseout() {
    debugger;
    return globalMy.value.Document_onmouseout;
}, function onmouseout(val) {
    debugger;
    globalMy.value.Document_onmouseout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseout.set, 'set');
globalMy.value.Document_onmouseout = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseover', {}, true, undefined, undefined, function onmouseover() {
    debugger;
    return globalMy.value.Document_onmouseover;
}, function onmouseover(val) {
    debugger;
    globalMy.value.Document_onmouseover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseover.set, 'set');
globalMy.value.Document_onmouseover = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseup', {}, true, undefined, undefined, function onmouseup() {
    debugger;
    return globalMy.value.Document_onmouseup;
}, function onmouseup(val) {
    debugger;
    globalMy.value.Document_onmouseup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseup.set, 'set');
globalMy.value.Document_onmouseup = {};
globalMy.mydefineProperty(Document.prototype, 'onmousewheel', {}, true, undefined, undefined, function onmousewheel() {
    debugger;
    return globalMy.value.Document_onmousewheel;
}, function onmousewheel(val) {
    debugger;
    globalMy.value.Document_onmousewheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousewheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousewheel.set, 'set');
globalMy.value.Document_onmousewheel = {};
globalMy.mydefineProperty(Document.prototype, 'onpause', {}, true, undefined, undefined, function onpause() {
    debugger;
    return globalMy.value.Document_onpause;
}, function onpause(val) {
    debugger;
    globalMy.value.Document_onpause = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpause.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpause.set, 'set');
globalMy.value.Document_onpause = {};
globalMy.mydefineProperty(Document.prototype, 'onplay', {}, true, undefined, undefined, function onplay() {
    debugger;
    return globalMy.value.Document_onplay;
}, function onplay(val) {
    debugger;
    globalMy.value.Document_onplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplay.set, 'set');
globalMy.value.Document_onplay = {};
globalMy.mydefineProperty(Document.prototype, 'onplaying', {}, true, undefined, undefined, function onplaying() {
    debugger;
    return globalMy.value.Document_onplaying;
}, function onplaying(val) {
    debugger;
    globalMy.value.Document_onplaying = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplaying.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplaying.set, 'set');
globalMy.value.Document_onplaying = {};
globalMy.mydefineProperty(Document.prototype, 'onprogress', {}, true, undefined, undefined, function onprogress() {
    debugger;
    return globalMy.value.Document_onprogress;
}, function onprogress(val) {
    debugger;
    globalMy.value.Document_onprogress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onprogress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onprogress.set, 'set');
globalMy.value.Document_onprogress = {};
globalMy.mydefineProperty(Document.prototype, 'onratechange', {}, true, undefined, undefined, function onratechange() {
    debugger;
    return globalMy.value.Document_onratechange;
}, function onratechange(val) {
    debugger;
    globalMy.value.Document_onratechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onratechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onratechange.set, 'set');
globalMy.value.Document_onratechange = {};
globalMy.mydefineProperty(Document.prototype, 'onreset', {}, true, undefined, undefined, function onreset() {
    debugger;
    return globalMy.value.Document_onreset;
}, function onreset(val) {
    debugger;
    globalMy.value.Document_onreset = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreset.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreset.set, 'set');
globalMy.value.Document_onreset = {};
globalMy.mydefineProperty(Document.prototype, 'onresize', {}, true, undefined, undefined, function onresize() {
    debugger;
    return globalMy.value.Document_onresize;
}, function onresize(val) {
    debugger;
    globalMy.value.Document_onresize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresize.set, 'set');
globalMy.value.Document_onresize = {};
globalMy.mydefineProperty(Document.prototype, 'onscroll', {}, true, undefined, undefined, function onscroll() {
    debugger;
    return globalMy.value.Document_onscroll;
}, function onscroll(val) {
    debugger;
    globalMy.value.Document_onscroll = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onscroll.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onscroll.set, 'set');
globalMy.value.Document_onscroll = {};
globalMy.mydefineProperty(Document.prototype, 'onsecuritypolicyviolation', {}, true, undefined, undefined, function onsecuritypolicyviolation() {
    debugger;
    return globalMy.value.Document_onsecuritypolicyviolation;
}, function onsecuritypolicyviolation(val) {
    debugger;
    globalMy.value.Document_onsecuritypolicyviolation = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsecuritypolicyviolation.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsecuritypolicyviolation.set, 'set');
globalMy.value.Document_onsecuritypolicyviolation = {};
globalMy.mydefineProperty(Document.prototype, 'onseeked', {}, true, undefined, undefined, function onseeked() {
    debugger;
    return globalMy.value.Document_onseeked;
}, function onseeked(val) {
    debugger;
    globalMy.value.Document_onseeked = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeked.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeked.set, 'set');
globalMy.value.Document_onseeked = {};
globalMy.mydefineProperty(Document.prototype, 'onseeking', {}, true, undefined, undefined, function onseeking() {
    debugger;
    return globalMy.value.Document_onseeking;
}, function onseeking(val) {
    debugger;
    globalMy.value.Document_onseeking = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeking.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeking.set, 'set');
globalMy.value.Document_onseeking = {};
globalMy.mydefineProperty(Document.prototype, 'onselect', {}, true, undefined, undefined, function onselect() {
    debugger;
    return globalMy.value.Document_onselect;
}, function onselect(val) {
    debugger;
    globalMy.value.Document_onselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselect.set, 'set');
globalMy.value.Document_onselect = {};
globalMy.mydefineProperty(Document.prototype, 'onslotchange', {}, true, undefined, undefined, function onslotchange() {
    debugger;
    return globalMy.value.Document_onslotchange;
}, function onslotchange(val) {
    debugger;
    globalMy.value.Document_onslotchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onslotchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onslotchange.set, 'set');
globalMy.value.Document_onslotchange = {};
globalMy.mydefineProperty(Document.prototype, 'onstalled', {}, true, undefined, undefined, function onstalled() {
    debugger;
    return globalMy.value.Document_onstalled;
}, function onstalled(val) {
    debugger;
    globalMy.value.Document_onstalled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onstalled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onstalled.set, 'set');
globalMy.value.Document_onstalled = {};
globalMy.mydefineProperty(Document.prototype, 'onsubmit', {}, true, undefined, undefined, function onsubmit() {
    debugger;
    return globalMy.value.Document_onsubmit;
}, function onsubmit(val) {
    debugger;
    globalMy.value.Document_onsubmit = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsubmit.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsubmit.set, 'set');
globalMy.value.Document_onsubmit = {};
globalMy.mydefineProperty(Document.prototype, 'onsuspend', {}, true, undefined, undefined, function onsuspend() {
    debugger;
    return globalMy.value.Document_onsuspend;
}, function onsuspend(val) {
    debugger;
    globalMy.value.Document_onsuspend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsuspend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsuspend.set, 'set');
globalMy.value.Document_onsuspend = {};
globalMy.mydefineProperty(Document.prototype, 'ontimeupdate', {}, true, undefined, undefined, function ontimeupdate() {
    debugger;
    return globalMy.value.Document_ontimeupdate;
}, function ontimeupdate(val) {
    debugger;
    globalMy.value.Document_ontimeupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontimeupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontimeupdate.set, 'set');
globalMy.value.Document_ontimeupdate = {};
globalMy.mydefineProperty(Document.prototype, 'ontoggle', {}, true, undefined, undefined, function ontoggle() {
    debugger;
    return globalMy.value.Document_ontoggle;
}, function ontoggle(val) {
    debugger;
    globalMy.value.Document_ontoggle = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontoggle.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontoggle.set, 'set');
globalMy.value.Document_ontoggle = {};
globalMy.mydefineProperty(Document.prototype, 'onvolumechange', {}, true, undefined, undefined, function onvolumechange() {
    debugger;
    return globalMy.value.Document_onvolumechange;
}, function onvolumechange(val) {
    debugger;
    globalMy.value.Document_onvolumechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvolumechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvolumechange.set, 'set');
globalMy.value.Document_onvolumechange = {};
globalMy.mydefineProperty(Document.prototype, 'onwaiting', {}, true, undefined, undefined, function onwaiting() {
    debugger;
    return globalMy.value.Document_onwaiting;
}, function onwaiting(val) {
    debugger;
    globalMy.value.Document_onwaiting = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwaiting.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwaiting.set, 'set');
globalMy.value.Document_onwaiting = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitanimationend', {}, true, undefined, undefined, function onwebkitanimationend() {
    debugger;
    return globalMy.value.Document_onwebkitanimationend;
}, function onwebkitanimationend(val) {
    debugger;
    globalMy.value.Document_onwebkitanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationend.set, 'set');
globalMy.value.Document_onwebkitanimationend = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitanimationiteration', {}, true, undefined, undefined, function onwebkitanimationiteration() {
    debugger;
    return globalMy.value.Document_onwebkitanimationiteration;
}, function onwebkitanimationiteration(val) {
    debugger;
    globalMy.value.Document_onwebkitanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationiteration.set, 'set');
globalMy.value.Document_onwebkitanimationiteration = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitanimationstart', {}, true, undefined, undefined, function onwebkitanimationstart() {
    debugger;
    return globalMy.value.Document_onwebkitanimationstart;
}, function onwebkitanimationstart(val) {
    debugger;
    globalMy.value.Document_onwebkitanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationstart.set, 'set');
globalMy.value.Document_onwebkitanimationstart = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkittransitionend', {}, true, undefined, undefined, function onwebkittransitionend() {
    debugger;
    return globalMy.value.Document_onwebkittransitionend;
}, function onwebkittransitionend(val) {
    debugger;
    globalMy.value.Document_onwebkittransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkittransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkittransitionend.set, 'set');
globalMy.value.Document_onwebkittransitionend = {};
globalMy.mydefineProperty(Document.prototype, 'onwheel', {}, true, undefined, undefined, function onwheel() {
    debugger;
    return globalMy.value.Document_onwheel;
}, function onwheel(val) {
    debugger;
    globalMy.value.Document_onwheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwheel.set, 'set');
globalMy.value.Document_onwheel = {};
globalMy.mydefineProperty(Document.prototype, 'onauxclick', {}, true, undefined, undefined, function onauxclick() {
    debugger;
    return globalMy.value.Document_onauxclick;
}, function onauxclick(val) {
    debugger;
    globalMy.value.Document_onauxclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onauxclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onauxclick.set, 'set');
globalMy.value.Document_onauxclick = {};
globalMy.mydefineProperty(Document.prototype, 'ongotpointercapture', {}, true, undefined, undefined, function ongotpointercapture() {
    debugger;
    return globalMy.value.Document_ongotpointercapture;
}, function ongotpointercapture(val) {
    debugger;
    globalMy.value.Document_ongotpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ongotpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ongotpointercapture.set, 'set');
globalMy.value.Document_ongotpointercapture = {};
globalMy.mydefineProperty(Document.prototype, 'onlostpointercapture', {}, true, undefined, undefined, function onlostpointercapture() {
    debugger;
    return globalMy.value.Document_onlostpointercapture;
}, function onlostpointercapture(val) {
    debugger;
    globalMy.value.Document_onlostpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onlostpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onlostpointercapture.set, 'set');
globalMy.value.Document_onlostpointercapture = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerdown', {}, true, undefined, undefined, function onpointerdown() {
    debugger;
    return globalMy.value.Document_onpointerdown;
}, function onpointerdown(val) {
    debugger;
    globalMy.value.Document_onpointerdown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerdown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerdown.set, 'set');
globalMy.value.Document_onpointerdown = {};
globalMy.mydefineProperty(Document.prototype, 'onpointermove', {}, true, undefined, undefined, function onpointermove() {
    debugger;
    return globalMy.value.Document_onpointermove;
}, function onpointermove(val) {
    debugger;
    globalMy.value.Document_onpointermove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointermove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointermove.set, 'set');
globalMy.value.Document_onpointermove = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerup', {}, true, undefined, undefined, function onpointerup() {
    debugger;
    return globalMy.value.Document_onpointerup;
}, function onpointerup(val) {
    debugger;
    globalMy.value.Document_onpointerup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerup.set, 'set');
globalMy.value.Document_onpointerup = {};
globalMy.mydefineProperty(Document.prototype, 'onpointercancel', {}, true, undefined, undefined, function onpointercancel() {
    debugger;
    return globalMy.value.Document_onpointercancel;
}, function onpointercancel(val) {
    debugger;
    globalMy.value.Document_onpointercancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointercancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointercancel.set, 'set');
globalMy.value.Document_onpointercancel = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerover', {}, true, undefined, undefined, function onpointerover() {
    debugger;
    return globalMy.value.Document_onpointerover;
}, function onpointerover(val) {
    debugger;
    globalMy.value.Document_onpointerover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerover.set, 'set');
globalMy.value.Document_onpointerover = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerout', {}, true, undefined, undefined, function onpointerout() {
    debugger;
    return globalMy.value.Document_onpointerout;
}, function onpointerout(val) {
    debugger;
    globalMy.value.Document_onpointerout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerout.set, 'set');
globalMy.value.Document_onpointerout = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerenter', {}, true, undefined, undefined, function onpointerenter() {
    debugger;
    return globalMy.value.Document_onpointerenter;
}, function onpointerenter(val) {
    debugger;
    globalMy.value.Document_onpointerenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerenter.set, 'set');
globalMy.value.Document_onpointerenter = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerleave', {}, true, undefined, undefined, function onpointerleave() {
    debugger;
    return globalMy.value.Document_onpointerleave;
}, function onpointerleave(val) {
    debugger;
    globalMy.value.Document_onpointerleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerleave.set, 'set');
globalMy.value.Document_onpointerleave = {};
globalMy.mydefineProperty(Document.prototype, 'onselectstart', {}, true, undefined, undefined, function onselectstart() {
    debugger;
    return globalMy.value.Document_onselectstart;
}, function onselectstart(val) {
    debugger;
    globalMy.value.Document_onselectstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectstart.set, 'set');
globalMy.value.Document_onselectstart = {};
globalMy.mydefineProperty(Document.prototype, 'onselectionchange', {}, true, undefined, undefined, function onselectionchange() {
    debugger;
    return globalMy.value.Document_onselectionchange;
}, function onselectionchange(val) {
    debugger;
    globalMy.value.Document_onselectionchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectionchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectionchange.set, 'set');
globalMy.value.Document_onselectionchange = {};
globalMy.mydefineProperty(Document.prototype, 'onanimationend', {}, true, undefined, undefined, function onanimationend() {
    debugger;
    return globalMy.value.Document_onanimationend;
}, function onanimationend(val) {
    debugger;
    globalMy.value.Document_onanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationend.set, 'set');
globalMy.value.Document_onanimationend = {};
globalMy.mydefineProperty(Document.prototype, 'onanimationiteration', {}, true, undefined, undefined, function onanimationiteration() {
    debugger;
    return globalMy.value.Document_onanimationiteration;
}, function onanimationiteration(val) {
    debugger;
    globalMy.value.Document_onanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationiteration.set, 'set');
globalMy.value.Document_onanimationiteration = {};
globalMy.mydefineProperty(Document.prototype, 'onanimationstart', {}, true, undefined, undefined, function onanimationstart() {
    debugger;
    return globalMy.value.Document_onanimationstart;
}, function onanimationstart(val) {
    debugger;
    globalMy.value.Document_onanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationstart.set, 'set');
globalMy.value.Document_onanimationstart = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitionrun', {}, true, undefined, undefined, function ontransitionrun() {
    debugger;
    return globalMy.value.Document_ontransitionrun;
}, function ontransitionrun(val) {
    debugger;
    globalMy.value.Document_ontransitionrun = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionrun.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionrun.set, 'set');
globalMy.value.Document_ontransitionrun = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitionstart', {}, true, undefined, undefined, function ontransitionstart() {
    debugger;
    return globalMy.value.Document_ontransitionstart;
}, function ontransitionstart(val) {
    debugger;
    globalMy.value.Document_ontransitionstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionstart.set, 'set');
globalMy.value.Document_ontransitionstart = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitionend', {}, true, undefined, undefined, function ontransitionend() {
    debugger;
    return globalMy.value.Document_ontransitionend;
}, function ontransitionend(val) {
    debugger;
    globalMy.value.Document_ontransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionend.set, 'set');
globalMy.value.Document_ontransitionend = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitioncancel', {}, true, undefined, undefined, function ontransitioncancel() {
    debugger;
    return globalMy.value.Document_ontransitioncancel;
}, function ontransitioncancel(val) {
    debugger;
    globalMy.value.Document_ontransitioncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitioncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitioncancel.set, 'set');
globalMy.value.Document_ontransitioncancel = {};
globalMy.mydefineProperty(Document.prototype, 'oncopy', {}, true, undefined, undefined, function oncopy() {
    debugger;
    return globalMy.value.Document_oncopy;
}, function oncopy(val) {
    debugger;
    globalMy.value.Document_oncopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncopy.set, 'set');
globalMy.value.Document_oncopy = {};
globalMy.mydefineProperty(Document.prototype, 'oncut', {}, true, undefined, undefined, function oncut() {
    debugger;
    return globalMy.value.Document_oncut;
}, function oncut(val) {
    debugger;
    globalMy.value.Document_oncut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncut.set, 'set');
globalMy.value.Document_oncut = {};
globalMy.mydefineProperty(Document.prototype, 'onpaste', {}, true, undefined, undefined, function onpaste() {
    debugger;
    return globalMy.value.Document_onpaste;
}, function onpaste(val) {
    debugger;
    globalMy.value.Document_onpaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpaste.set, 'set');
globalMy.value.Document_onpaste = {};
globalMy.mydefineProperty(Document.prototype, 'children', {}, true, undefined, undefined, function children() {
    debugger;
    return globalMy.getChildren(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).children.get, 'get');

globalMy.mydefineProperty(Document.prototype, 'firstElementChild', {}, true, undefined, undefined, function firstElementChild() {
    debugger;
    return globalMy.getFirstElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).firstElementChild.get, 'get');

globalMy.mydefineProperty(Document.prototype, 'lastElementChild', {}, true, undefined, undefined, function lastElementChild() {
    debugger;
    return globalMy.getLastElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).lastElementChild.get, 'get');

globalMy.mydefineProperty(Document.prototype, 'childElementCount', 1, true, undefined, undefined, function childElementCount() {
    debugger;
    return globalMy.getChildElementCount(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).childElementCount.get, 'get');
globalMy.value.Document_childElementCount = 1;
globalMy.mydefineProperty(Document.prototype, 'activeElement', {}, true, undefined, undefined, function activeElement() {
    debugger;
    return globalMy.value.Document_activeElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).activeElement.get, 'get');
globalMy.value.Document_activeElement = {};
globalMy.mydefineProperty(Document.prototype, 'styleSheets', {}, true, undefined, undefined, function styleSheets() {
    debugger;
    return globalMy.value.Document_styleSheets;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).styleSheets.get, 'get');
globalMy.value.Document_styleSheets = {};
globalMy.mydefineProperty(Document.prototype, 'pointerLockElement', {}, true, undefined, undefined, function pointerLockElement() {
    debugger;
    return globalMy.value.Document_pointerLockElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).pointerLockElement.get, 'get');
globalMy.value.Document_pointerLockElement = {};
globalMy.mydefineProperty(Document.prototype, 'fullscreenElement', {}, true, undefined, undefined, function fullscreenElement() {
    debugger;
    return globalMy.value.Document_fullscreenElement;
}, function fullscreenElement(val) {
    debugger;
    globalMy.value.Document_fullscreenElement = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenElement.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenElement.set, 'set');
globalMy.value.Document_fullscreenElement = {};
globalMy.mydefineProperty(Document.prototype, 'adoptedStyleSheets', {}, true, undefined, undefined, function adoptedStyleSheets() {
    debugger;
    return globalMy.value.Document_adoptedStyleSheets;
}, function adoptedStyleSheets(val) {
    debugger;
    globalMy.value.Document_adoptedStyleSheets = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).adoptedStyleSheets.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).adoptedStyleSheets.set, 'set');
globalMy.value.Document_adoptedStyleSheets = {};
globalMy.mydefineProperty(Document.prototype, 'fonts', {}, true, undefined, undefined, function fonts() {
    debugger;
    return globalMy.value.Document_fonts;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fonts.get, 'get');
globalMy.value.Document_fonts = {};
globalMy.mydefineProperty(Document.prototype, 'adoptNode', function adoptNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.adoptNode);
globalMy.mydefineProperty(Document.prototype, 'append', function append() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.append);
globalMy.mydefineProperty(Document.prototype, 'captureEvents', function captureEvents() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.captureEvents);

globalMy.mydefineProperty(Document.prototype, 'clear', function clear() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.clear);
globalMy.mydefineProperty(Document.prototype, 'close', function close() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.close);
globalMy.mydefineProperty(Document.prototype, 'createAttribute', function createAttribute() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createAttribute);
globalMy.mydefineProperty(Document.prototype, 'createAttributeNS', function createAttributeNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createAttributeNS);
globalMy.mydefineProperty(Document.prototype, 'createCDATASection', function createCDATASection() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createCDATASection);
globalMy.mydefineProperty(Document.prototype, 'createComment', function createComment() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createComment);
globalMy.mydefineProperty(Document.prototype, 'createDocumentFragment', function createDocumentFragment() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createDocumentFragment);
globalMy.mydefineProperty(Document.prototype, 'createElement', function createElement(tagName) {
    debugger;
    return globalMy.createElement(tagName)

}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createElement);
globalMy.mydefineProperty(Document.prototype, 'createElementNS', function createElementNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createElementNS);


globalMy.mydefineProperty(Document.prototype, 'createEvent', function createEvent() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createEvent);

globalMy.mydefineProperty(Document.prototype, 'createExpression', function createExpression() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createExpression);
globalMy.mydefineProperty(Document.prototype, 'createNSResolver', function createNSResolver() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createNSResolver);
globalMy.mydefineProperty(Document.prototype, 'createNodeIterator', function createNodeIterator() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createNodeIterator);
globalMy.mydefineProperty(Document.prototype, 'createProcessingInstruction', function createProcessingInstruction() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createProcessingInstruction);
globalMy.mydefineProperty(Document.prototype, 'createRange', function createRange() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createRange);
globalMy.mydefineProperty(Document.prototype, 'createTextNode', function createTextNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createTextNode);
globalMy.mydefineProperty(Document.prototype, 'createTreeWalker', function createTreeWalker() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createTreeWalker);
globalMy.mydefineProperty(Document.prototype, 'elementFromPoint', function elementFromPoint() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.elementFromPoint);
globalMy.mydefineProperty(Document.prototype, 'elementsFromPoint', function elementsFromPoint() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.elementsFromPoint);
globalMy.mydefineProperty(Document.prototype, 'evaluate', function evaluate() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.evaluate);
globalMy.mydefineProperty(Document.prototype, 'execCommand', function execCommand() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.execCommand);
globalMy.mydefineProperty(Document.prototype, 'exitFullscreen', function exitFullscreen() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.exitFullscreen);
globalMy.mydefineProperty(Document.prototype, 'exitPointerLock', function exitPointerLock() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.exitPointerLock);
globalMy.mydefineProperty(Document.prototype, 'getElementById', function getElementById(Id) {
    debugger;
    return globalMy.getElementById(this, Id)
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementById);
globalMy.mydefineProperty(Document.prototype, 'getElementsByClassName', function getElementsByClassName() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementsByClassName);
globalMy.mydefineProperty(Document.prototype, 'getElementsByName', function getElementsByName() {
    debugger;
}, true, undefined, true);


globalMy.functionprotect(Document.prototype.getElementsByName);
globalMy.mydefineProperty(Document.prototype, 'getElementsByTagName', function getElementsByTagName(tagName) {
    debugger;
    var tag_name = tagName.toLowerCase() + '';
    return globalMy.getElementsByTagName(this, tag_name);

}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementsByTagName);

globalMy.mydefineProperty(Document.prototype, 'scripts', [], true, undefined, undefined, function scripts() {
    debugger;
    return document.getElementsByTagName("script")
}, undefined);

globalMy.mydefineProperty(Document.prototype, 'getElementsByTagNameNS', function getElementsByTagNameNS() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementsByTagNameNS);
globalMy.mydefineProperty(Document.prototype, 'getSelection', function getSelection() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getSelection);
globalMy.mydefineProperty(Document.prototype, 'hasFocus', function hasFocus() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.hasFocus);
globalMy.mydefineProperty(Document.prototype, 'importNode', function importNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.importNode);
globalMy.mydefineProperty(Document.prototype, 'open', function open() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.open);
globalMy.mydefineProperty(Document.prototype, 'prepend', function prepend() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.prepend);
globalMy.mydefineProperty(Document.prototype, 'queryCommandEnabled', function queryCommandEnabled() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandEnabled);
globalMy.mydefineProperty(Document.prototype, 'queryCommandIndeterm', function queryCommandIndeterm() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandIndeterm);
globalMy.mydefineProperty(Document.prototype, 'queryCommandState', function queryCommandState() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandState);
globalMy.mydefineProperty(Document.prototype, 'queryCommandSupported', function queryCommandSupported() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandSupported);
globalMy.mydefineProperty(Document.prototype, 'queryCommandValue', function queryCommandValue() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandValue);
globalMy.mydefineProperty(Document.prototype, 'querySelector', function querySelector() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.querySelector);
globalMy.mydefineProperty(Document.prototype, 'querySelectorAll', function querySelectorAll() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.querySelectorAll);
globalMy.mydefineProperty(Document.prototype, 'releaseEvents', function releaseEvents() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.releaseEvents);
globalMy.mydefineProperty(Document.prototype, 'replaceChildren', function replaceChildren() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.replaceChildren);
globalMy.mydefineProperty(Document.prototype, 'webkitCancelFullScreen', function webkitCancelFullScreen() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.webkitCancelFullScreen);
globalMy.mydefineProperty(Document.prototype, 'webkitExitFullscreen', function webkitExitFullscreen() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.webkitExitFullscreen);
globalMy.mydefineProperty(Document.prototype, 'write', function write(tag) {
    debugger;
    return globalMy.write(tag);

}, true, undefined, true);
globalMy.functionprotect(Document.prototype.write);

globalMy.mydefineProperty(Document.prototype, 'writeln', function writeln() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.writeln);

globalMy.mydefineProperty(Document.prototype, 'fragmentDirective', {}, true, undefined, undefined, function fragmentDirective() {
    debugger;
    return globalMy.value.Document_fragmentDirective;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fragmentDirective.get, 'get');
globalMy.value.Document_fragmentDirective = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforematch', {}, true, undefined, undefined, function onbeforematch() {
    debugger;
    return globalMy.value.Document_onbeforematch;
}, function onbeforematch(val) {
    debugger;
    globalMy.value.Document_onbeforematch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforematch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforematch.set, 'set');
globalMy.value.Document_onbeforematch = {};
globalMy.mydefineProperty(Document.prototype, 'timeline', {}, true, undefined, undefined, function timeline() {
    debugger;
    return globalMy.value.Document_timeline;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).timeline.get, 'get');
globalMy.value.Document_timeline = {};
globalMy.mydefineProperty(Document.prototype, 'pictureInPictureEnabled', true, true, undefined, undefined, function pictureInPictureEnabled() {
    debugger;
    return globalMy.value.Document_pictureInPictureEnabled;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).pictureInPictureEnabled.get, 'get');
globalMy.value.Document_pictureInPictureEnabled = true;
globalMy.mydefineProperty(Document.prototype, 'pictureInPictureElement', {}, true, undefined, undefined, function pictureInPictureElement() {
    debugger;
    return globalMy.value.Document_pictureInPictureElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).pictureInPictureElement.get, 'get');
globalMy.value.Document_pictureInPictureElement = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerrawupdate', {}, true, undefined, undefined, function onpointerrawupdate() {
    debugger;
    return globalMy.value.Document_onpointerrawupdate;
}, function onpointerrawupdate(val) {
    debugger;
    globalMy.value.Document_onpointerrawupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerrawupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerrawupdate.set, 'set');
globalMy.value.Document_onpointerrawupdate = {};
globalMy.mydefineProperty(Document.prototype, 'exitPictureInPicture', function exitPictureInPicture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.exitPictureInPicture);
globalMy.mydefineProperty(Document.prototype, 'getAnimations', function getAnimations() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getAnimations);



