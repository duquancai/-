
new Promise((resolve,reject) => {
            var event = {}
            globalMy.value.Event_type = "load"
            Object.setPrototypeOf(event,Event.prototype)
            resolve(event)
      }).then((event)=>{
        window.dispatchEvent(event);
      })



globalMy.asyncFunc = function (){
    while (1){
        debugger
        let funFonOne = globalMy.func.shift();
        if (!funFonOne){break};
        try{
            funFonOne[1] ? funFonOne[0](funFonOne[1]) : funFonOne[0]()
        }catch (e){
            console.log(e);
            break
        }
    }

    // while (1){
    //     let funFonOne = globalMy.teshu.shift();
    //     if (!funFonOne){break};
    //     try{
    //         funFonOne[2] ? (typeof funFonOne[0][funFonOne[1]] === 'function' ? funFonOne[0][funFonOne[1]](...funFonOne[2]) : undefined) : funFonOne[0][funFonOne[1]]()
    //     }catch (e){
    //         console.log(e);
    //     }
    // }
}
globalMy.asyncFunc()

function getCK()
{
    globalMy.func_interval[0][0](globalMy.func_interval[0][1])
    return document.cookie;
}
function getUrlParam(url)
{
    XMLHttpRequest.prototype.open("POST",url,true);
    return window.url;
}

function getEnv() {
    var env = "globalMy.mydefineProperty(sessionStorage, '$_cDro', '" + localStorage.$_cDro + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(sessionStorage, '$_YWTU', '" + localStorage.$_YWTU + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '$_f1', '" + localStorage.$_f1 + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '$_ff', '" + localStorage.$_ff + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '$_f0', '" + localStorage.$_f0 + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '$_fh1', '" + localStorage.$_fh1 + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '__#classType', 'localStorage', true, undefined, true, undefined, undefined);\n" +
        "localStorage.$_nd='" + localStorage.$_nd + "';\n" +
        "globalMy.mydefineProperty(localStorage, '$_cDro', '" + localStorage.$_cDro + "', true, undefined, true, undefined, undefined);\n" +
        "globalMy.mydefineProperty(localStorage, '$_YWTU', '" + localStorage.$_YWTU + "', true, undefined, true, undefined, undefined);\n";
    return env;
}

