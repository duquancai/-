globalMy = {};
//保护函数,保护toString
(()=>{
    'use strict';
    const $toString = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('',')_',(Math.random()+'').toString(36)));//key
    const myToString = function(){
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this);
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    };
    delete Function.prototype["toString"];//删除原型链上的toString
    set_native(Function.prototype,"toString",myToString);//自己定义一个getter方法
    set_native(Function, myFunction_toString_symbol, "function Function() { [native code] }")
    set_native(Function, "toString", myToString)
    set_native(Function.prototype.toString,myFunction_toString_symbol,"function toString() { [native code] }");

    globalMy.functionprotect = (func, type) =>{
        if(type === 'get'){
            set_native(func,myFunction_toString_symbol,`function get ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
        }
        else if(type === 'set'){
            set_native(func,myFunction_toString_symbol,`function set ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
        }
        else{
            set_native(func,myFunction_toString_symbol,`function ${myFunction_toString_symbol,func.name || ''}() { [native code] }`);
        }

    };
}).call(globalMy);