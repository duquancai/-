HTMLMediaElement =function HTMLMediaElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLMediaElement)
globalMy.rename(HTMLMediaElement.prototype, "HTMLMediaElement")
HTMLMediaElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.prototype)


globalMy.mydefineProperty(HTMLMediaElement.prototype,'error',{},true,undefined,undefined,function error(){debugger;return globalMy.value.HTMLMediaElement_error;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).error.get,'get');
globalMy.value.HTMLMediaElement_error={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'src','',true,undefined,undefined,function src(){
    debugger;
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['src'];},
    function src(val){debugger;
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['src'] = val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).src.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).src.set,'set');

globalMy.mydefineProperty(HTMLMediaElement.prototype,'currentSrc','',true,undefined,undefined,function currentSrc(){debugger;
var foundName = globalMy.foundName(this);
return globalMy.value[foundName]['currentSrc'];},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).currentSrc.get,'get');


globalMy.mydefineProperty(HTMLMediaElement.prototype,'crossOrigin',{},true,undefined,undefined,function crossOrigin(){debugger;return globalMy.value.HTMLMediaElement_crossOrigin;},function crossOrigin(val){debugger;globalMy.value.HTMLMediaElement_crossOrigin=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).crossOrigin.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).crossOrigin.set,'set');
globalMy.value.HTMLMediaElement_crossOrigin={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'networkState',0,true,undefined,undefined,function networkState(){debugger;return globalMy.value.HTMLMediaElement_networkState;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).networkState.get,'get');
globalMy.value.HTMLMediaElement_networkState=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'preload','metadata',true,undefined,undefined,function preload(){debugger;return globalMy.value.HTMLMediaElement_preload;},function preload(val){debugger;globalMy.value.HTMLMediaElement_preload=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preload.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preload.set,'set');
globalMy.value.HTMLMediaElement_preload='metadata';
globalMy.mydefineProperty(HTMLMediaElement.prototype,'buffered',{},true,undefined,undefined,function buffered(){debugger;return globalMy.value.HTMLMediaElement_buffered;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).buffered.get,'get');
globalMy.value.HTMLMediaElement_buffered={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'readyState',0,true,undefined,undefined,function readyState(){debugger;return globalMy.value.HTMLMediaElement_readyState;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).readyState.get,'get');
globalMy.value.HTMLMediaElement_readyState=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'seeking',false,true,undefined,undefined,function seeking(){debugger;return globalMy.value.HTMLMediaElement_seeking;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).seeking.get,'get');
globalMy.value.HTMLMediaElement_seeking=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'currentTime',0,true,undefined,undefined,function currentTime(){debugger;return globalMy.value.HTMLMediaElement_currentTime;},function currentTime(val){debugger;globalMy.value.HTMLMediaElement_currentTime=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).currentTime.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).currentTime.set,'set');
globalMy.value.HTMLMediaElement_currentTime=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'duration',NaN,true,undefined,undefined,function duration(){debugger;return globalMy.value.HTMLMediaElement_duration;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).duration.get,'get');
globalMy.value.HTMLMediaElement_duration=NaN;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'paused',true,true,undefined,undefined,function paused(){debugger;return globalMy.value.HTMLMediaElement_paused;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).paused.get,'get');
globalMy.value.HTMLMediaElement_paused=true;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'defaultPlaybackRate',1,true,undefined,undefined,function defaultPlaybackRate(){debugger;return globalMy.value.HTMLMediaElement_defaultPlaybackRate;},function defaultPlaybackRate(val){debugger;globalMy.value.HTMLMediaElement_defaultPlaybackRate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultPlaybackRate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultPlaybackRate.set,'set');
globalMy.value.HTMLMediaElement_defaultPlaybackRate=1;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'playbackRate',1,true,undefined,undefined,function playbackRate(){debugger;return globalMy.value.HTMLMediaElement_playbackRate;},function playbackRate(val){debugger;globalMy.value.HTMLMediaElement_playbackRate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).playbackRate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).playbackRate.set,'set');
globalMy.value.HTMLMediaElement_playbackRate=1;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'played',{},true,undefined,undefined,function played(){debugger;return globalMy.value.HTMLMediaElement_played;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).played.get,'get');
globalMy.value.HTMLMediaElement_played={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'seekable',{},true,undefined,undefined,function seekable(){debugger;return globalMy.value.HTMLMediaElement_seekable;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).seekable.get,'get');
globalMy.value.HTMLMediaElement_seekable={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'ended',false,true,undefined,undefined,function ended(){debugger;return globalMy.value.HTMLMediaElement_ended;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).ended.get,'get');
globalMy.value.HTMLMediaElement_ended=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'autoplay',false,true,undefined,undefined,function autoplay(){debugger;return globalMy.value.HTMLMediaElement_autoplay;},function autoplay(val){debugger;globalMy.value.HTMLMediaElement_autoplay=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).autoplay.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).autoplay.set,'set');
globalMy.value.HTMLMediaElement_autoplay=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'loop',false,true,undefined,undefined,function loop(){debugger;return globalMy.value.HTMLMediaElement_loop;},function loop(val){debugger;globalMy.value.HTMLMediaElement_loop=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).loop.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).loop.set,'set');
globalMy.value.HTMLMediaElement_loop=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'controls',false,true,undefined,undefined,function controls(){debugger;return globalMy.value.HTMLMediaElement_controls;},function controls(val){debugger;globalMy.value.HTMLMediaElement_controls=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controls.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controls.set,'set');
globalMy.value.HTMLMediaElement_controls=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'controlsList',{},true,undefined,undefined,function controlsList(){debugger;return globalMy.value.HTMLMediaElement_controlsList;},function controlsList(val){debugger;globalMy.value.HTMLMediaElement_controlsList=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controlsList.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controlsList.set,'set');
globalMy.value.HTMLMediaElement_controlsList={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'volume',1,true,undefined,undefined,function volume(){debugger;return globalMy.value.HTMLMediaElement_volume;},function volume(val){debugger;globalMy.value.HTMLMediaElement_volume=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).volume.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).volume.set,'set');
globalMy.value.HTMLMediaElement_volume=1;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'muted',false,true,undefined,undefined,function muted(){debugger;return globalMy.value.HTMLMediaElement_muted;},function muted(val){debugger;globalMy.value.HTMLMediaElement_muted=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).muted.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).muted.set,'set');
globalMy.value.HTMLMediaElement_muted=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'defaultMuted',false,true,undefined,undefined,function defaultMuted(){debugger;return globalMy.value.HTMLMediaElement_defaultMuted;},function defaultMuted(val){debugger;globalMy.value.HTMLMediaElement_defaultMuted=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultMuted.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultMuted.set,'set');
globalMy.value.HTMLMediaElement_defaultMuted=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'textTracks',{},true,undefined,undefined,function textTracks(){debugger;return globalMy.value.HTMLMediaElement_textTracks;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).textTracks.get,'get');
globalMy.value.HTMLMediaElement_textTracks={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'webkitAudioDecodedByteCount',0,true,undefined,undefined,function webkitAudioDecodedByteCount(){debugger;return globalMy.value.HTMLMediaElement_webkitAudioDecodedByteCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).webkitAudioDecodedByteCount.get,'get');
globalMy.value.HTMLMediaElement_webkitAudioDecodedByteCount=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'webkitVideoDecodedByteCount',0,true,undefined,undefined,function webkitVideoDecodedByteCount(){debugger;return globalMy.value.HTMLMediaElement_webkitVideoDecodedByteCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).webkitVideoDecodedByteCount.get,'get');
globalMy.value.HTMLMediaElement_webkitVideoDecodedByteCount=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'onencrypted',{},true,undefined,undefined,function onencrypted(){debugger;return globalMy.value.HTMLMediaElement_onencrypted;},function onencrypted(val){debugger;globalMy.value.HTMLMediaElement_onencrypted=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onencrypted.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onencrypted.set,'set');
globalMy.value.HTMLMediaElement_onencrypted={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'onwaitingforkey',{},true,undefined,undefined,function onwaitingforkey(){debugger;return globalMy.value.HTMLMediaElement_onwaitingforkey;},function onwaitingforkey(val){debugger;globalMy.value.HTMLMediaElement_onwaitingforkey=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onwaitingforkey.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onwaitingforkey.set,'set');
globalMy.value.HTMLMediaElement_onwaitingforkey={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'srcObject',{},true,undefined,undefined,function srcObject(){debugger;return globalMy.value.HTMLMediaElement_srcObject;},function srcObject(val){debugger;globalMy.value.HTMLMediaElement_srcObject=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).srcObject.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).srcObject.set,'set');
globalMy.value.HTMLMediaElement_srcObject={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'NETWORK_EMPTY',0,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'NETWORK_IDLE',1,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'NETWORK_LOADING',2,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'NETWORK_NO_SOURCE',3,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'HAVE_NOTHING',0,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'HAVE_METADATA',1,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'HAVE_CURRENT_DATA',2,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'HAVE_FUTURE_DATA',3,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'HAVE_ENOUGH_DATA',4,false,undefined,false,undefined,undefined);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'addTextTrack',function addTextTrack(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.addTextTrack);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'canPlayType',function canPlayType(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.canPlayType);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'captureStream',function captureStream(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.captureStream);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'load',function load(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.load);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'pause',function pause(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.pause);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'play',function play(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.play);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'preservesPitch',true,true,undefined,undefined,function preservesPitch(){debugger;return globalMy.value.HTMLMediaElement_preservesPitch;},function preservesPitch(val){debugger;globalMy.value.HTMLMediaElement_preservesPitch=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preservesPitch.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preservesPitch.set,'set');
globalMy.value.HTMLMediaElement_preservesPitch=true;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'sinkId','',true,undefined,undefined,function sinkId(){debugger;return globalMy.value.HTMLMediaElement_sinkId;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).sinkId.get,'get');
globalMy.value.HTMLMediaElement_sinkId='';
globalMy.mydefineProperty(HTMLMediaElement.prototype,'remote',{},true,undefined,undefined,function remote(){debugger;return globalMy.value.HTMLMediaElement_remote;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).remote.get,'get');
globalMy.value.HTMLMediaElement_remote={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'disableRemotePlayback',false,true,undefined,undefined,function disableRemotePlayback(){debugger;return globalMy.value.HTMLMediaElement_disableRemotePlayback;},function disableRemotePlayback(val){debugger;globalMy.value.HTMLMediaElement_disableRemotePlayback=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).disableRemotePlayback.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).disableRemotePlayback.set,'set');
globalMy.value.HTMLMediaElement_disableRemotePlayback=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'setSinkId',function setSinkId(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.setSinkId);

globalMy.mydefineProperty(HTMLMediaElement.prototype,'mediaKeys',{},true,undefined,undefined,function mediaKeys(){debugger;return globalMy.value.HTMLMediaElement_mediaKeys;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).mediaKeys.get,'get');
globalMy.value.HTMLMediaElement_mediaKeys={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'setMediaKeys',function setMediaKeys(){debugger;},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.setMediaKeys);
