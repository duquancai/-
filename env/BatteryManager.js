BatteryManager = function BatteryManager() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.rename(BatteryManager.prototype,"BatteryManager");

globalMy.functionprotect(BatteryManager);

globalMy.mydefineProperty(BatteryManager.prototype,'charging',undefined,true,undefined,undefined,function charging(){debugger;return globalMy.value.BatteryManager_charging;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).charging.get,'get');
globalMy.value.BatteryManager_charging = true;
globalMy.mydefineProperty(BatteryManager.prototype,'chargingTime',undefined,true,undefined,undefined,function chargingTime(){debugger;return globalMy.value.BatteryManager_chargingTime;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).chargingTime.get,'get');
globalMy.value.BatteryManager_chargingTime=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'dischargingTime',undefined,true,undefined,undefined,function dischargingTime(){debugger;return globalMy.value.BatteryManager_dischargingTime;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).dischargingTime.get,'get');
globalMy.value.BatteryManager_dischargingTime=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'level',undefined,true,undefined,undefined,function level(){debugger;return globalMy.value.BatteryManager_level;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).level.get,'get');
globalMy.value.BatteryManager_level=1;
globalMy.mydefineProperty(BatteryManager.prototype,'onchargingchange',undefined,true,undefined,undefined,function onchargingchange(){debugger;return globalMy.value.BatteryManager_onchargingchange;},function onchargingchange(val){debugger;globalMy.value.BatteryManager_onchargingchange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingchange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingchange.set,'set');
globalMy.value.BatteryManager_onchargingchange=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'onchargingtimechange',undefined,true,undefined,undefined,function onchargingtimechange(){debugger;return globalMy.value.BatteryManager_onchargingtimechange;},function onchargingtimechange(val){debugger;globalMy.value.BatteryManager_onchargingtimechange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingtimechange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingtimechange.set,'set');
globalMy.value.BatteryManager_onchargingtimechange=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'ondischargingtimechange',undefined,true,undefined,undefined,function ondischargingtimechange(){debugger;return globalMy.value.BatteryManager_ondischargingtimechange;},function ondischargingtimechange(val){debugger;globalMy.value.BatteryManager_ondischargingtimechange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).ondischargingtimechange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).ondischargingtimechange.set,'set');
globalMy.value.BatteryManager_ondischargingtimechange=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'onlevelchange',undefined,true,undefined,undefined,function onlevelchange(){debugger;return globalMy.value.BatteryManager_onlevelchange;},function onlevelchange(val){debugger;globalMy.value.BatteryManager_onlevelchange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onlevelchange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onlevelchange.set,'set');
globalMy.value.BatteryManager_onlevelchange=undefined;