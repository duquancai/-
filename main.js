const fs = require("fs");
const {VM,VMScript} = require("vm2");
const vm = new VM();

let filePath = fs.readdirSync('./env')



let code = '';
code += fs.readFileSync("./tool/functionprotect.js")+'\r\n'
code += fs.readFileSync("./tool/Memory.js")+'\r\n'
code += fs.readFileSync("./tool/rename.js")+'\r\n'
code += fs.readFileSync("./tool/mydefineProperty.js")+'\r\n'
code += fs.readFileSync("./tool/proxy.js")+'\r\n'
code += fs.readFileSync("./tool/error.js")+'\r\n'
code += fs.readFileSync("./tool/Promise.js")+'\r\n'

code += fs.readFileSync("./env/EventTarget.js")+'\r\n'
code += fs.readFileSync("./env/WebGLShaderPrecisionFormat.js")+'\r\n'
code += fs.readFileSync("./env/WebGLUniformLocation.js")+'\r\n'
code += fs.readFileSync("./env/WebGLProgram.js")+'\r\n'
code += fs.readFileSync("./env/WebGLShader.js")+'\r\n'
code += fs.readFileSync("./env/HTMLAllCollection.js")+'\r\n'
code += fs.readFileSync("./env/CSSStyleDeclaration.js")+'\r\n'
code += fs.readFileSync("./env/Event.js")+'\r\n'
code += fs.readFileSync("./env/NodeList.js")+'\r\n'
code += fs.readFileSync("./env/Database.js")+'\r\n'
code += fs.readFileSync("./env/WebSocket.js")+'\r\n'
code += fs.readFileSync("./env/WebGLRenderingContext.js")+'\r\n'
code += fs.readFileSync("./env/WebGLBuffer.js")+'\r\n'
code += fs.readFileSync("./env/HTMLCollection.js")+'\r\n'
code += fs.readFileSync("./env/WindowProperties.js")+'\r\n'

code += fs.readFileSync("./env/Window.js")+'\r\n'
code += fs.readFileSync("./env/Node.js")+'\r\n'
code += fs.readFileSync("./env/DocumentType.js")+'\r\n'

code += fs.readFileSync("./env/CharacterData.js")+'\r\n'
code += fs.readFileSync("./env/Text.js")+'\r\n'
code += fs.readFileSync("./env/matchMedia.js")+'\r\n'
code += fs.readFileSync("./env/Navigator.js")+'\r\n'

code += fs.readFileSync("./env/ScreenOrientation.js")+'\r\n'
code += fs.readFileSync("./env/Screen.js")+'\r\n'

code += fs.readFileSync("./env/Storage.js")+'\r\n'
code += fs.readFileSync("./env/XMLHttpRequestEventTarget.js")+'\r\n'
code += fs.readFileSync("./env/XMLHttpRequest.js")+'\r\n'
code += fs.readFileSync("./env/DOMParser.js")+'\r\n'
code += fs.readFileSync("./env/Element.js")+'\r\n'
code += fs.readFileSync("./env/HTMLElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLInputElement.js")+'\r\n'


code += fs.readFileSync("./env/HTMLBodyElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLScriptElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLDivElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLSpanElement.js")+'\r\n'

code += fs.readFileSync("./env/HTMLImageElement.js")+'\r\n'

code += fs.readFileSync("./env/HTMLAnchorElement.js")+'\r\n'
code += fs.readFileSync("./env/CanvasRenderingContext2D.js")+'\r\n'
code += fs.readFileSync("./env/HTMLCanvasElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLMediaElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLVideoElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLAudioElement.js")+'\r\n'

code += fs.readFileSync("./env/HTMLFormElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLHtmlElement.js")+'\r\n'
code += fs.readFileSync("./env/Document.js")+'\r\n'
code += fs.readFileSync("./env/HTMLDocument.js")+'\r\n'
code += fs.readFileSync("./env/HTMLHeadElement.js")+'\r\n'
code += fs.readFileSync("./env/HTMLMetaElement.js")+'\r\n'
code += fs.readFileSync("./env/BatteryManager.js")+'\r\n'


code += fs.readFileSync("./env/fetch.js")+'\r\n'
code += fs.readFileSync("./env/Request.js")+'\r\n'

code += fs.readFileSync("./env/IDBRequest.js")+'\r\n'
code += fs.readFileSync("./env/IDBOpenDBRequest.js")+'\r\n'
code += fs.readFileSync("./env/IDBFactory.js")+'\r\n'
code += fs.readFileSync("./env/sessionStorage.js")+'\r\n'



// code += fs.readFileSync("./tool/ProxyObject.js")+'\r\n'

code += fs.readFileSync("./env/init_env.js")+'\r\n'

let workCode = fs.readFileSync("./test/test.js")+'\r\n'
// let workCode = fs.readFileSync("./test/work.js")+'\r\n'
// let workCode = fs.readFileSync("./test/doubleHtml.js")+'\r\n'
let  cleanFunccode = '';
cleanFunccode = fs.readFileSync("./tool/cleanFunc.js")+'\r\n'


vm.run(new VMScript("debugger;\r\n" + code + "debugger;\r\n" + workCode + cleanFunccode + "\r\ndebugger;\r\n", "./zcj.js"));
// vm.run(new VMScript("debugger;\r\n"  +  workCode +"debugger;\r\n", "./zcj.js"));