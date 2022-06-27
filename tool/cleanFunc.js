
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
}
globalMy.asyncFunc()

new Promise((resolve,reject) => {
            resolve(1)
      }).then((event)=>{
        console.log(JSON.stringify(Object.getOwnPropertyDescriptors(localStorage)))
        console.log(JSON.stringify(globalMy.run))
        console.log(JSON.stringify(globalMy.run1))
      })

globalMy.asyncFunc()