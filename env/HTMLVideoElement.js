HTMLVideoElement = function HTMLVideoElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLVideoElement)
globalMy.rename(HTMLVideoElement.prototype, "HTMLVideoElement")
HTMLVideoElement.__proto__ = HTMLMediaElement;
Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype)



globalMy.mydefineProperty(HTMLVideoElement.prototype,'width',0,true,undefined,undefined,function width(){debugger;return globalMy.value.HTMLVideoElement_width;},function width(val){debugger;globalMy.value.HTMLVideoElement_width=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).width.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).width.set,'set');
globalMy.value.HTMLVideoElement_width=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'height',0,true,undefined,undefined,function height(){debugger;return globalMy.value.HTMLVideoElement_height;},function height(val){debugger;globalMy.value.HTMLVideoElement_height=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).height.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).height.set,'set');
globalMy.value.HTMLVideoElement_height=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'videoWidth',0,true,undefined,undefined,function videoWidth(){debugger;return globalMy.value.HTMLVideoElement_videoWidth;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).videoWidth.get,'get');
globalMy.value.HTMLVideoElement_videoWidth=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'videoHeight',0,true,undefined,undefined,function videoHeight(){debugger;return globalMy.value.HTMLVideoElement_videoHeight;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).videoHeight.get,'get');
globalMy.value.HTMLVideoElement_videoHeight=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'poster','',true,undefined,undefined,function poster(){debugger;return globalMy.value.HTMLVideoElement_poster;},function poster(val){debugger;globalMy.value.HTMLVideoElement_poster=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).poster.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).poster.set,'set');
globalMy.value.HTMLVideoElement_poster='';
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitDecodedFrameCount',0,true,undefined,undefined,function webkitDecodedFrameCount(){debugger;return globalMy.value.HTMLVideoElement_webkitDecodedFrameCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitDecodedFrameCount.get,'get');
globalMy.value.HTMLVideoElement_webkitDecodedFrameCount=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitDroppedFrameCount',0,true,undefined,undefined,function webkitDroppedFrameCount(){debugger;return globalMy.value.HTMLVideoElement_webkitDroppedFrameCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitDroppedFrameCount.get,'get');
globalMy.value.HTMLVideoElement_webkitDroppedFrameCount=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'playsInline',false,true,undefined,undefined,function playsInline(){debugger;return globalMy.value.HTMLVideoElement_playsInline;},function playsInline(val){debugger;globalMy.value.HTMLVideoElement_playsInline=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).playsInline.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).playsInline.set,'set');
globalMy.value.HTMLVideoElement_playsInline=false;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitSupportsFullscreen',true,true,undefined,undefined,function webkitSupportsFullscreen(){debugger;return globalMy.value.HTMLVideoElement_webkitSupportsFullscreen;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitSupportsFullscreen.get,'get');
globalMy.value.HTMLVideoElement_webkitSupportsFullscreen=true;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitDisplayingFullscreen',false,true,undefined,undefined,function webkitDisplayingFullscreen(){debugger;return globalMy.value.HTMLVideoElement_webkitDisplayingFullscreen;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitDisplayingFullscreen.get,'get');
globalMy.value.HTMLVideoElement_webkitDisplayingFullscreen=false;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'onenterpictureinpicture',{},true,undefined,undefined,function onenterpictureinpicture(){debugger;return globalMy.value.HTMLVideoElement_onenterpictureinpicture;},function onenterpictureinpicture(val){debugger;globalMy.value.HTMLVideoElement_onenterpictureinpicture=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onenterpictureinpicture.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onenterpictureinpicture.set,'set');
globalMy.value.HTMLVideoElement_onenterpictureinpicture={};
globalMy.mydefineProperty(HTMLVideoElement.prototype,'onleavepictureinpicture',{},true,undefined,undefined,function onleavepictureinpicture(){debugger;return globalMy.value.HTMLVideoElement_onleavepictureinpicture;},function onleavepictureinpicture(val){debugger;globalMy.value.HTMLVideoElement_onleavepictureinpicture=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onleavepictureinpicture.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onleavepictureinpicture.set,'set');
globalMy.value.HTMLVideoElement_onleavepictureinpicture={};
globalMy.mydefineProperty(HTMLVideoElement.prototype,'disablePictureInPicture',false,true,undefined,undefined,function disablePictureInPicture(){debugger;return globalMy.value.HTMLVideoElement_disablePictureInPicture;},function disablePictureInPicture(val){debugger;globalMy.value.HTMLVideoElement_disablePictureInPicture=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).disablePictureInPicture.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).disablePictureInPicture.set,'set');
globalMy.value.HTMLVideoElement_disablePictureInPicture=false;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'cancelVideoFrameCallback',function cancelVideoFrameCallback(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.cancelVideoFrameCallback);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'requestVideoFrameCallback',function requestVideoFrameCallback(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.requestVideoFrameCallback);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'getVideoPlaybackQuality',function getVideoPlaybackQuality(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.getVideoPlaybackQuality);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'requestPictureInPicture',function requestPictureInPicture(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.requestPictureInPicture);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitEnterFullScreen',function webkitEnterFullScreen(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitEnterFullScreen);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitEnterFullscreen',function webkitEnterFullscreen(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitEnterFullscreen);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitExitFullScreen',function webkitExitFullScreen(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitExitFullScreen);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitExitFullscreen',function webkitExitFullscreen(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitExitFullscreen);