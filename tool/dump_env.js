function getDescriptors(obj){
    return Object.getOwnPropertyDescriptors(obj);
}


function dump_enum_obj_proto(obj,obj_proto_name,objDescriptors){
    let code = "";

    function getCode(obj,obj_proto_name,objkey,constructor){

        if(obj){
            try{
            var value = obj[objkey];
            }
            catch(e){
                return "";
            }
            // 非原型对象，Document的length，name，arguments都不要
            if(constructor['value'] !== undefined){
                let code = ""
                let protect_code = ""
                if(objkey === "constructor"){
                    return "";
                }
                else if(typeof constructor['value'] === "function"){
                    return `globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',function ${objkey}(){debugger;},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']});globalMy.functionprotect(${obj_proto_name}.prototype.${objkey});`;
                    
                }

                else if(typeof constructor['value'] === "number"){
                    code += `globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',${value},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`

                }
                else{debugger;}

                if (constructor['get']){
                    var reg = /function get (.*?)\(\)/
                    var function_name = reg.exec(constructor['get']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_proto_name}.prototype).${function_name}.get,'get');`
                    code +=`function ${function_name}(){debugger;return globalMy.value.${obj_proto_name}_${function_name};},`
                }
                else{
                    code +=`${constructor['get']},`
                }
                if (constructor['set']){

                    var reg = /function set (.*?)\(\)/
                    var function_name = reg.exec(constructor['set']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_proto_name}.prototype).${function_name}.set,'set');`

                    code +=`function ${function_name}(val){debugger;globalMy.value.${obj_proto_name}_${function_name}=val;});`
                }
                else{
                    code +=`${constructor['set']});`;
                }
                return code + protect_code


            }
                // 是原型对象，value则是string object Array类型的
            else{
                let code_2 = "";
                let protect_code = "";
                objkey_type = typeof value;
                // if(value +'' === "[object HTMLAllCollection]"){debugger;}
                if(objkey_type==="string"){
                    code_2 +=  `globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}','${value}',${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`;
                }
                else if (objkey_type==="Array"){
                    
                    code_2 +=`globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',[],${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="object"){
                    
                    code_2 +=`globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',{},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="number"){
                    code_2 += `globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',${value},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="undefined"){
                    value = undefined;
                    code_2 += `globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',${value},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="boolean"){
                    code_2 += `globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',${value},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="null"){
                    code_2 +=`globalMy.mydefineProperty(${obj_proto_name}.prototype,'${objkey}',null,${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else{
                    debugger;
                }
                if (constructor['get']){
                    var reg = /function get (.*?)\(\)/
                    var function_name = reg.exec(constructor['get']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_proto_name}.prototype).${function_name}.get,'get');`
                    code_2 +=`function ${function_name}(){debugger;return globalMy.value.${obj_proto_name}_${function_name};},`
                }
                else{
                    code_2 +=`${constructor['get']},`
                }
                if (constructor['set']){

                    var reg = /function set (.*?)\(\)/
                    var function_name = reg.exec(constructor['set']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_proto_name}.prototype).${function_name}.set,'set');`
                    
                    code_2 +=`function ${function_name}(val){debugger;globalMy.value.${obj_proto_name}_${function_name}=val;});`
                }
                else{
                    code_2 +=`${constructor['set']});`
                }
                
                let set_value_code = "";
                if(objkey_type === "object"){
                    set_value_code = `\r\nglobalMy.value.${obj_proto_name}_${function_name}={};`
                }
                else if (objkey_type === "Array"){
                    set_value_code = `\r\nglobalMy.value.${obj_proto_name}_${function_name}=[];`
                }
                else if (objkey_type === "string"){
                    set_value_code = `\r\nglobalMy.value.${obj_proto_name}_${function_name}='${value}';`;
                }
                else{
                    set_value_code = `\r\nglobalMy.value.${obj_proto_name}_${function_name}=${value};`;
                }
                return code_2 + protect_code + set_value_code;
            }
            
        }
    }
    for(const objkey in objDescriptors){
        code += getCode(obj,obj_proto_name,objkey,objDescriptors[objkey]) + '\r\n';
        // console.log(objkey,obj[objkey],typeof obj[objkey],objDescriptors[objkey])
    }
    return code;
}

function dump_enum_obj(obj,obj_name,objDescriptors){
    let code = "";

    function getCode(obj,obj_name,objkey,constructor){

        if(obj){
            var value = obj[objkey];
            // 非原型对象，Document的length，name，arguments都不要
            if(constructor['value'] !== undefined){
                if(objkey === "constructor"){
                    return "";
                }
                else if(typeof constructor['value'] === "function"){
                    return `globalMy.mydefineProperty(${obj_name},'${objkey}',function ${objkey}(){debugger;},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']});globalMy.functionprotect(${obj_name}.${objkey});`;
                    
                }
                else if(typeof objkey === "string"){
                    
                    let code_2 = `globalMy.mydefineProperty(${obj_name},'${objkey}','${value}',${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`;
                    let protect_code = "";
                    
                if (constructor['get']){
                    var reg = /function get (.*?)\(\)/
                    var function_name = reg.exec(constructor['get']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_name}).${function_name}.get,'get');`
                    code_2 +=`function ${function_name}(){debugger;return globalMy.value.${obj_name}_${function_name};},`
                }
                else{
                    code_2 +=`${constructor['get']},`
                }
                if (constructor['set']){

                    var reg = /function set (.*?)\(\)/
                    var function_name = reg.exec(constructor['set']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_name}).${function_name}.set,'set');`
                    
                }
                else{
                    code_2 +=`${constructor['set']});`
                }
                    
                 return code_2 + protect_code
                }
                else{debugger;}
            }
                // 是原型对象，value则是string object Array类型的
            else{
                let code_2 = "";
                let protect_code = "";
                objkey_type = typeof value;
                // if(value +'' === "[object HTMLAllCollection]"){debugger;}
                if(objkey_type==="string"){
                    code_2 +=  `globalMy.mydefineProperty(${obj_name},'${objkey}','${value}',${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`;
                }
                else if (objkey_type==="Array"){
                    
                    code_2 +=`globalMy.mydefineProperty(${obj_name},'${objkey}',[],${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="object"){
                    
                    code_2 +=`globalMy.mydefineProperty(${obj_name},'${objkey}',{},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="number"){
                    code_2 += `globalMy.mydefineProperty(${obj_name},'${objkey}',${value},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="undefined"){
                    value = undefined;
                    code_2 += `globalMy.mydefineProperty(${obj_name},'${objkey}',${value},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="boolean"){
                    code_2 += `globalMy.mydefineProperty(${obj_name},'${objkey}',${value},${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else if (objkey_type==="null"){
                    code_2 +=`globalMy.mydefineProperty(${obj_name},'${objkey}',null,${constructor['configurable']},${constructor['enumberable']},${constructor['writable']},`
                }
                else{
                    debugger;
                }
                if (constructor['get']){
                    var reg = /function get (.*?)\(\)/
                    var function_name = reg.exec(constructor['get']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_name}).${function_name}.get,'get');`
                    code_2 +=`function ${function_name}(){debugger;return globalMy.value.${obj_name}_${function_name};},`
                }
                else{
                    code_2 +=`${constructor['get']},`
                }
                if (constructor['set']){

                    var reg = /function set (.*?)\(\)/
                    var function_name = reg.exec(constructor['set']+'')[1];
                    protect_code += `globalMy.functionprotect(Object.getOwnPropertyDescriptors(${obj_name}).${function_name}.set,'set');`
                    
                    code_2 +=`function ${function_name}(val){debugger;globalMy.value.${obj_name}_${function_name}=val;});`
                }
                else{
                    code_2 +=`${constructor['set']});`
                }
                
                let set_value_code = "";
                if(objkey_type === "object"){
                    set_value_code = `\r\nglobalMy.value.${obj_name}_${function_name}={};`
                }
                else if (objkey_type === "Array"){
                    set_value_code = `\r\nglobalMy.value.${obj_name}_${function_name}=[];`
                }
                else if (objkey_type === "string"){
                    set_value_code = `\r\nglobalMy.value.${obj_name}_${function_name}='${value}';`;
                }
                else{
                    set_value_code = `\r\nglobalMy.value.${obj_name}_${function_name}=${value};`;
                }
                return code_2 + protect_code + set_value_code;
            }
            
        }
    }
    for(const objkey in objDescriptors){
        code += getCode(obj,obj_name,objkey,objDescriptors[objkey]) + '\r\n';
        // console.log(objkey,obj[objkey],typeof obj[objkey],objDescriptors[objkey])
    }
    return code;
}


// dump原型
// function dump_obj(obj){
//     var reg = /function (.*?)\(\)/;
//     var obj_name = reg.exec(obj+'',reg)[1];
//     var objDescriptors = getDescriptors(obj.prototype);
//     console.log(objDescriptors);
//     for(const objkey in objDescriptors){
//         console.log(objkey,obj[objkey],typeof obj[objkey])
//     }
// }

//dump proto
function dump_proto(obj_proto,obj){
    if((obj_proto +'').indexOf("object")!==-1){
        var reg = /\[object (.*?)\]/
        var obj_proto_name = (reg.exec(obj_proto +''))[1]
    }
    if((obj_proto +'').indexOf("function")!==-1){
        var reg = /function (.*?)\(\)/;
        var obj_proto_name = (reg.exec(obj_proto +''))[1];
    }
    let objDescriptors = getDescriptors(obj_proto.prototype);
    console.log(objDescriptors);
    let code = dump_enum_obj_proto(obj,obj_proto_name,objDescriptors)
    console.log(code)

}

// 类似这种location里面的东西，直接dump出来dump_obj(location,"location")
function dump_obj(obj,obj_name){
    let objDescriptors = getDescriptors(obj);
    let code = dump_enum_obj(obj,obj_name,objDescriptors)
    console.log(code)
}