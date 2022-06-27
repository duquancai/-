MediaQueryList = function MediaQueryList(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(MediaQueryList);
globalMy.rename(MediaQueryList.prototype,"MediaQueryList");
Object.setPrototypeOf(MediaQueryList.prototype,EventTarget.prototype)

globalMy.mydefineProperty(MediaQueryList.prototype,'matches',true,true,true,undefined,
    function matches(){
    debugger;
    return globalMy.value.MediaQueryList_matches;
},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(MediaQueryList.prototype).matches.get,'get');

globalMy.value.MediaQueryList_matches = true;

globalMy.mydefineProperty(MediaQueryList.prototype,'media','',true,true,undefined,
    function media(){
    debugger;
    return globalMy.value.MediaQueryList_media;
},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(MediaQueryList.prototype).media.get,'get');


globalMy.mydefineProperty(MediaQueryList.prototype,'onchange','',true,true,undefined,
    function onchange(){
    debugger;
    return globalMy.value.MediaQueryList_onchange;
},
    function onchange(val){
    debugger;
    globalMy.value.MediaQueryList_onchange = val;
}
    );
globalMy.functionprotect(Object.getOwnPropertyDescriptors(MediaQueryList.prototype).onchange.get,'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(MediaQueryList.prototype).onchange.set,'set');
globalMy.value.MediaQueryList_onchange=null;




matchMedia = function matchMedia(val) {
    var mediaQueryList = {}
    Object.setPrototypeOf(mediaQueryList,MediaQueryList.prototype);
    globalMy.value.MediaQueryList_media = val;
    return mediaQueryList;
}

globalMy.functionprotect(matchMedia);
globalMy.rename(matchMedia.prototype,"matchMedia");


globalMy.mydefineProperty(matchMedia.prototype,'length',1,false,false,true,undefined,undefined);
globalMy.value.matchMedia_length=1;

globalMy.mydefineProperty(matchMedia.prototype,'name','"matchMedia"',true,false,false,undefined,undefined);
globalMy.value.matchMedia_name="matchMedia";