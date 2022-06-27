EventTarget = function EventTarget(){ };
// globalMy.rename(EventTarget,"EventTarget")
globalMy.rename(EventTarget.prototype,"EventTarget")
globalMy.functionprotect(EventTarget);
// globalMy.functionprotect(EventTarget.prototype);

globalMy.mydefineProperty(EventTarget.prototype,'addEventListener',function addEventListener(type, callback){
    if(!(type in globalMy.memory.listeners)) {
    globalMy.memory.listeners[type] = [];
  }
    console.log("type =>",type,"func=>",callback)

    globalMy.memory.listeners[type].push(callback);
},true,true,true);globalMy.functionprotect(EventTarget.prototype.addEventListener);
globalMy.mydefineProperty(EventTarget.prototype,'dispatchEvent',function dispatchEvent(event){
    if(!(event.type in globalMy.memory.listeners)) {
    return;
  }
  var stack = globalMy.memory.listeners[event.type];
  // event.target = this;
  var task = [];
  for(var i = 0, l = stack.length; i < l; i++) {
      // new Promise((resolve,reject) => {
      //     // stack[i].call(this, event)
      //     resolve(stack[i], this, event);
      // }).then((a,b,c)=>{
      //     a.call(b,c);
      //     console.log("已执行dispatchEvent方法")
      // })
      stack[i].call(this, event)
  }
},true,true,true);globalMy.functionprotect(EventTarget.prototype.dispatchEvent);
globalMy.mydefineProperty(EventTarget.prototype,'removeEventListener',function removeEventListener(type, callback){
    if(!(type in globalMy.memory.listeners)) {
    return;
  }
  var stack = globalMy.memory.listeners[type];
  for(var i = 0, l = stack.length; i < l; i++) {
    if(stack[i] === callback){
      stack.splice(i, 1);
      return this.removeEventListener(type, callback);
    }
  }
},true,true,true);globalMy.functionprotect(EventTarget.prototype.removeEventListener);