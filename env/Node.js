Node = function Node() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
Node.__proto__ = EventTarget;
globalMy.rename(Node.prototype, "Node")
globalMy.functionprotect(Node);
// globalMy.functionprotect(Node.constructor);

globalMy.mydefineProperty(Node.prototype, 'nodeType', 1, true, undefined, undefined, function nodeType() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['nodeType'];
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeType.get, 'get');
globalMy.value.Node_nodeType = 1;
globalMy.mydefineProperty(Node.prototype, 'nodeName', '', true, undefined, undefined, function nodeName() {
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['nodeName']
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeName.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'baseURI', 'http://qikan.cqvip.com/Qikan/Search/Advance?from=index', true, undefined, undefined, function baseURI() {
    debugger;
    return globalMy.value.Node_baseURI;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).baseURI.get, 'get');
globalMy.value.Node_baseURI = 'http://qikan.cqvip.com/Qikan/Search/Advance?from=index';
globalMy.mydefineProperty(Node.prototype, 'isConnected', true, true, undefined, undefined, function isConnected() {
    debugger;
    return globalMy.value.Node_isConnected;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).isConnected.get, 'get');
globalMy.value.Node_isConnected = true;


globalMy.mydefineProperty(Node.prototype, 'ownerDocument', {}, true, undefined, undefined, function ownerDocument() {
    debugger;
    return document;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).ownerDocument.get, 'get');
// globalMy.value.Node_ownerDocument = {};

globalMy.mydefineProperty(Node.prototype, 'parentElement', {}, true, undefined, undefined, function parentElement() {
    debugger;
    console.log("parentElement =>")
    //需要遍历找到父节点
    var foundName = globalMy.foundName(this);
    if (globalMy.value[foundName]['parentElement']) {
        return globalMy.value[foundName]['parentElement']
    } else return null

    // return globalMy.value.Node_parentElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).parentElement.get, 'get');
globalMy.mydefineProperty(Node.prototype, 'parentNode', {}, true, undefined, undefined, function parentElement() {
    debugger;
    console.log("parentNode =>")
    //需要遍历找到父节点,也可以直接设置
    var foundName = globalMy.foundName(this);
    if (globalMy.value[foundName]['parentNode']) {
        return globalMy.value[foundName]['parentNode']
    } else return null
    // return globalMy.value.Node_parentElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).parentNode.get, 'get');


globalMy.mydefineProperty(Node.prototype, 'childNodes', {}, true, undefined, undefined, function childNodes() {
    debugger;
    //return 一个 NodeList
    console.log("childNodes =>")
    var foundName = globalMy.foundName(this);
    return globalMy.node[foundName]['childNodes']
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).childNodes.get, 'get');

//有待考究
globalMy.mydefineProperty(Node.prototype, 'firstChild', {}, true, undefined, undefined, function firstChild() {
    debugger;
    console.log("firstChild =>")
    //返回的是一个text
    return globalMy.getFirstChild(this);
    // return globalMy.node[foundName]['firstChild'];

}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).firstChild.get, 'get');

//有待考究
globalMy.mydefineProperty(Node.prototype, 'lastChild', {}, true, undefined, undefined, function lastChild() {
    debugger;
    debugger;
    return globalMy.getLastChild(this);
}, undefined);

//前后节点，有待考究
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).lastChild.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'previousSibling', {}, true, undefined, undefined, function previousSibling() {
    debugger;

    return globalMy.getPreviousSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).previousSibling.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'nextSibling', {}, true, undefined, undefined, function nextSibling() {
    debugger;

    return globalMy.getNextSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nextSibling.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'nodeValue', {}, true, undefined, undefined, function nodeValue() {
    debugger;
    var foundName = globalMy.foundName(this);
    if (globalMy.value[foundName]['nodeValue']) {
        return globalMy.value[foundName]['nodeValue']
    } else return null
}, function nodeValue(val) {
    debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['nodeValue'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeValue.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeValue.set, 'set');


globalMy.mydefineProperty(Node.prototype, 'textContent', '高级检索-【维普期刊官网】- 中文期刊服务平台'
    , true, undefined, undefined, function textContent() {
        debugger;
        return globalMy.value.Node_textContent;
    }, function textContent(val) {
        debugger;
        globalMy.value.Node_textContent = val;
    });
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).textContent.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).textContent.set, 'set');
globalMy.value.Node_textContent = '高级检索-【维普期刊官网】- 中文期刊服务平台';

globalMy.mydefineProperty(Node.prototype, 'ELEMENT_NODE', 1, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'ATTRIBUTE_NODE', 2, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'TEXT_NODE', 3, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'CDATA_SECTION_NODE', 4, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'ENTITY_REFERENCE_NODE', 5, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'ENTITY_NODE', 6, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'PROCESSING_INSTRUCTION_NODE', 7, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'COMMENT_NODE', 8, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_NODE', 9, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_TYPE_NODE', 10, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_FRAGMENT_NODE', 11, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'NOTATION_NODE', 12, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_DISCONNECTED', 1, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_PRECEDING', 2, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_FOLLOWING', 4, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINS', 8, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINED_BY', 16, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 32, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'appendChild', function appendChild(child) {
    debugger;
    console.log("appendChlid =>");
    //判断是不是document
    return globalMy.appendChild(this, child);

}, true, undefined, true);
globalMy.functionprotect(Node.prototype.appendChild);

globalMy.mydefineProperty(Node.prototype, 'cloneNode', function cloneNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.cloneNode);
globalMy.mydefineProperty(Node.prototype, 'compareDocumentPosition', function compareDocumentPosition() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.compareDocumentPosition);
globalMy.mydefineProperty(Node.prototype, 'contains', function contains() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.contains);
globalMy.mydefineProperty(Node.prototype, 'getRootNode', function getRootNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.getRootNode);
globalMy.mydefineProperty(Node.prototype, 'hasChildNodes', function hasChildNodes() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.hasChildNodes);
globalMy.mydefineProperty(Node.prototype, 'insertBefore', function insertBefore() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.insertBefore);
globalMy.mydefineProperty(Node.prototype, 'isDefaultNamespace', function isDefaultNamespace() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.isDefaultNamespace);
globalMy.mydefineProperty(Node.prototype, 'isEqualNode', function isEqualNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.isEqualNode);
globalMy.mydefineProperty(Node.prototype, 'isSameNode', function isSameNode() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.isSameNode);
globalMy.mydefineProperty(Node.prototype, 'lookupNamespaceURI', function lookupNamespaceURI() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.lookupNamespaceURI);
globalMy.mydefineProperty(Node.prototype, 'lookupPrefix', function lookupPrefix() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.lookupPrefix);
globalMy.mydefineProperty(Node.prototype, 'normalize', function normalize() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.normalize);
globalMy.mydefineProperty(Node.prototype, 'removeChild', function removeChild(child) {
    debugger;
    //判断是谁要删除子节点
    return globalMy.removeChild(this,child)

}, true, undefined, true);
globalMy.functionprotect(Node.prototype.removeChild);
globalMy.mydefineProperty(Node.prototype, 'replaceChild', function replaceChild() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.replaceChild);
//继承
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);
