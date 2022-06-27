globalMy.rename = function rename(obj,objName){
    Object.defineProperties(obj,{
        [Symbol.toStringTag]:{
            value:objName,
            configurable:true,
            writable: false,
            enumerable:false
        }
    });
}
