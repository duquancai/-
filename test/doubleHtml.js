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
globalMy.memory = {
    listeners: {},
    fontFamily_1:['FangSongGB2312', 'KaiTiGB2312', 'Microsoft YaHei', 'Hiragino Sans GB', 'STHeiti Light', 'STHeiti', 'DFPhelvetica', 'Tibetan Machine Uni', 'Cooljazz', 'LG Smart_H test Regular', 'DINPro-light', 'Helvetica LT 43 Light Extended', 'HelveM_India', 'SECRobotoLight Bold', 'OR Mohanty Unicode Regular', 'Droid Sans Thai', 'Kannada Sangam MN', 'DDC Uchen', 'clock2016_v1.1', 'SamsungKannadaRegular', 'MI LANTING Bold', 'SamsungSansNum3L Light', 'HelveticaNeueThin', 'SECFallback', 'SamsungEmoji', 'Telugu Sangam MN', 'Carrois Gothic SC', 'Flyme Light Roboto Light', 'SoMA-Digit Light', 'SoMC Sans Regular', 'HYXiYuanJ', 'sst', 'samsung-sans-num4T', 'gm_mengmeng', 'Lohit Kannada', 'samsung-sans-num4L', 'serif-monospace', 'SamsungSansNum-3T Thin', 'ColorOSUI-XThin', 'Droid Naskh Shift Alt', 'SamsungTeluguRegular', 'Bengali OTS', 'MI LanTing_GB Outside YS', 'FZMiaoWu_GB18030', 'helve-neue-regular', 'SST Medium', 'Khmer Mondulkiri Bold', 'Helvetica LT 23 Ultra Light Extended', 'Helvetica LT 25 Ultra Light', 'Roboto Medium', 'Droid Sans Bold', 'goudy', 'sans-serif-condensed-light', 'SFinder', 'noto-sans-cjk-medium', 'miui', 'MRocky PRC Bold', 'AndroidClock Regular', 'SamsungSansNum-4L Light', 'sans-serif-thin', 'AaPangYaer', 'casual', 'BN MohantyOT Bold', 'x-sst', 'NotoSansMyanmarZawgyi', 'Helvetica LT 33 Thin Extended', 'AshleyScriptMT Alt', 'Noto Sans Devanagari UI', 'Roboto Condensed Bold', 'Roboto Medium Italic', 'miuiex', 'Noto Sans Gurmukhi UI', 'SST Vietnamese Light', 'LG_Oriya', 'hycoffee', 'x-sst-ultralight', 'DFHeiAW7-A', 'FZZWXBTOT_Unicode', 'Devanagari Sangam MN Bold', 'sans-serif-monospace', 'Padauk Book Bold', 'LG-FZYingBiKaiShu-S15-V2.2', 'LG-FZYingBiKaiShu-S15-V2.3', 'HelveticaNeueLT Pro 35 Th', 'SamsungSansFallback', 'SST Medium Italic', 'AndroidEmoji', 'SamsungSansNum-3R', 'ITC Stone Serif', 'sans-serif-smallcaps', 'x-sst-medium', 'LG_Sinhalese', 'Roboto Thin Italic', 'century-gothic', 'Clockopia', 'Luminous_Sans', 'Floridian Script Alt', 'Noto Sans Gurmukhi Bold', 'LTHYSZK Bold', 'GS_Thai', 'SamsungNeoNum_3T_2', 'Arabic', 'hans-sans-normal', 'Lohit Telugu', 'HYQiHei-50S Light', 'Lindsey for Samsung', 'AR Crystalhei DB', 'Samsung Sans Medium', 'samsung-sans-num45', 'hans-sans-bold', 'Luminous_Script', 'SST Condensed', 'SamsungDevanagariRegular', 'Anjal Malayalam MN', 'SamsungThai(test)', 'FZLanTingHei-M-GB18030', 'Hebrew OTS', 'GS45_Arab(AndroidOS)', 'Samsung Sans Light', 'Choco cooky', 'helve-neue-thin', 'PN MohantyOT Medium', 'LG-FZKaTong-M19-V2.4', 'Droid Serif', 'SamsungSinhalaRegular', 'Noto Sans Devanagari UI Bold', 'SST Light', 'DFPEmoji', 'weatherfontnew Regular', 'RobotoNum3R', 'DINPro-medium', 'Samsung Sans Num55', 'SST Heavy Italic', 'LGlock4 Regular_0805', 'noto-sans-cjk', 'Telugu Sangam MN Bold', 'MIUI EX Normal', 'HYQiHei-75S Bold', 'NotoSansMyanmarZawgyi Bold', 'yunospro-black', 'helve-neue-normal', 'Luminous_Serif', 'TM MohantyOT Normal', 'SamsungSansNum-3Lv Light', 'Samsung Sans Num45', 'SmartGothic Medium', 'casual-font-type', 'Samsung Sans Bold', 'small-capitals', 'MFinance PRC Bold', 'FZLanTingHei_GB18030', 'SamsungArmenian', 'Roboto Bold', 'century-gothic-bold', 'x-sst-heavy', 'SST Light Italic', 'TharLon', 'x-sst-light', 'Dinbol Regular', 'SamsungBengaliRegular', 'KN MohantyOTSmall Medium', 'hypure', 'SamsungTamilRegular', 'Malayalam Sangam MN', 'Noto Sans Kannada UI', 'helve-neue', 'Helvetica LT 55 Roman', 'Noto Sans Kannada Bold', 'Sanpya', 'SamsungPunjabiRegular', 'samsung-sans-num4Lv', 'LG_Kannada', 'Samsung Sans Regular', 'Zawgyi-One', 'Droid Serif Bold Italic', 'FZKATJW', 'SamsungEmojiRegular', 'MIUI EX Bold', 'Android Emoji', 'Noto Naskh Arabic UI', 'LCD Com', 'Futura Medium BT', 'Vivo-extract', 'Bangla Sangam MN Bold', 'hans-sans-regular', 'SNum-3R', 'SNum-3T', 'hans-sans', 'SST Ultra Light', 'Roboto Regular', 'Roboto Light', 'Hanuman', 'newlggothic', 'DFHeiAW5-A', 'hans-sans-light', 'Plate Gothic', 'SNum-3L', 'Helvetica LT 45 Light', 'Myanmar Sangam Zawgyi Bold', 'lg-sans-serif-light', 'MIUI EX Light', 'Roboto Thin', 'SoMA Bold', 'Padauk', 'Samsung Sans', 'Spacious_SmallCap', 'sans-serif', 'DV MohantyOT Medium', 'Stable_Slap', 'monaco', 'Flyme-Light', 'fzzys-dospy', 'ScreenSans', 'clock2016', 'Roboto Condensed Bold Italic', 'KN Mohanty Medium', 'MotoyaLMaru W3 mono', 'Handset Condensed', 'Roboto Italic', 'HTC Hand', 'SST Ultra Light Italic', 'SST Vietnamese Roman', 'Noto Naskh Arabic UI Bold', 'chnfzxh-medium', 'SNumCond-3T', 'century-gothic-regular', 'default_roboto-light', 'Noto Sans Myanmar', 'Myanmar Sangam MN', 'Apple Color Emoji', 'weatherfontReg', 'SamsungMalayalamRegular', 'Droid Serif Bold', 'CPo3 PRC Bold', 'MI LANTING', 'SamsungKorean-Regular', 'test45 Regular', 'spirit_time', 'Devanagari Sangam MN', 'ScreenSerif', 'Roboto', 'cursive-font-type', 'STHeiti_vivo', 'chnfzxh', 'Samsung ClockFont 3A', 'Roboto Condensed Regular', 'samsung-neo-num3R', 'GJ MohantyOT Medium', 'Chulho Neue Lock', 'roboto-num3L', 'helve-neue-ultraLightextended', 'SamsungOriyaRegular', 'SamsungSansNum-4Lv Light', 'MYingHei_18030_C2-Bold', 'DFPShaoNvW5-GB', 'Roboto Black', 'helve-neue-ultralight', 'gm_xihei', 'LGlock4 Light_0805', 'Gujarati Sangam MN', 'Malayalam Sangam MN Bold', 'roboto-num3R', 'STXihei_vivo', 'FZZhunYuan_GB18030', 'noto-sans-cjk-light', 'coloros', 'Noto Sans Gurmukhi', 'Noto Sans Symbols', 'Roboto Light Italic', 'Lohit Tamil', 'default_roboto', 'BhashitaComplexSans Bold', 'LG_Number_Roboto Thin', 'monospaced-without-serifs', 'Helvetica LT 35 Thin', 'samsung-sans-num3LV', 'DINPro', 'Jomolhari', 'sans-serif-light', 'helve-neue-black', 'Lohit Bengali', 'Myanmar Sangam Zawgyi', 'Droid Serif Italic', 'Roboto Bold Italic', 'NanumGothic', 'Sony Mobile UD Gothic Regular', 'Georgia Bold Italic', 'samsung-sans-num3Lv', 'yunos-thin', 'samsung-neo-num3T-cond', 'Noto Sans Myanmar UI Bold', 'lgserif', 'FZYouHei-R-GB18030', 'Lohit Punjabi', 'baskerville', 'samsung-sans-num4Tv', 'samsung-sans-thin', 'LG Emoji', 'AnjaliNewLipi', 'SamsungSansNum-4T Thin', 'SamsungKorean-Bold', 'miuiex-light', 'Noto Sans Kannada', 'Roboto Normal Italic', 'Georgia Italic', 'sans-serif-medium', 'Smart Zawgyi', 'Roboto Condensed Italic', 'Noto Sans Kannada UI Bold', 'DFP Sc Sans Heue30_103', 'LG_Number_Roboto Bold', 'Padauk Book', 'x-sst-condensed', 'Sunshine-Uchen', 'Roboto Black Italic', 'Ringo Color Emoji', 'Devanagari OTS', 'Smart Zawgyi Pro', 'FZLanTingHei-M-GBK', 'AndroidClock-Large Regular', 'proportionally-spaced-without-serifs', 'Cutive Mono', 'LG Smart_H test Bold', 'DINPro-Light', 'sans-serif-black', 'Lohit Devanagari', 'proportionally-spaced-with-serifs', 'samsung-sans-num3L', 'MYoung PRC Medium', 'DFGothicPW5-BIG5HK-SONY', 'hans-sans-medium', 'SST Heavy', 'LG-FZZhunYuan-M02-V2.2', 'MyanmarUNew Regular', 'Noto Naskh Arabic Bold', 'SamsungGujarathiRegular', 'helve-neue-light', 'Helvetica Neue OTS Bold', 'noto-sans-cjk-bold', 'samsung-sans-num3R', 'Lindsey Samsung', 'samsung-sans-num3T', 'ScreenSerifMono', 'ETrump Myanmar_ZW', 'helve-neue-thinextended', 'Noto Naskh Arabic', 'LG_Gujarati', 'Smart_Monospaced', 'Tamil Sangam MN', 'LG Emoji NonAME', 'Roboto Condensed Light Italic', 'gm_jingkai', 'FZLanTingKanHei_GB18030', 'lgtravel', 'palatino', 'Georgia Bold', 'Droid Sans', 'LG_Punjabi', 'SmartGothic Bold', 'Samsung Sans Thin', 'SST Condensed Bold', 'Comics_Narrow', 'Oriya Sangam MN', 'helve-neue-lightextended', 'FZLanTingHei-R-GB18030', 'AR CrystalheiHKSCS DB', 'RTWSYueRoudGoG0v1-Regular', 'MiaoWu_prev', 'FZY1K', 'LG_Number_Roboto Regular', 'AndroidClock', 'SoMA Regular', 'HYQiHei-40S Lightx', 'lg-sans-serif', 'Dancing Script Bold', 'default', 'sec-roboto-light', 'ColorOSUI-Regular', 'test Regular', 'Tamil Sangam MN Bold', 'FZYingBiXingShu-S16', 'RobotoNum3L Light', 'monospaced-with-serifs', 'samsung-sans-num35', 'Cool jazz', 'SamsungNeoNum-3L', 'ScreenSansMono', 'DFPWaWaW5-GB', 'SamsungSansNum-3L Light', 'Bangla Sangam MN', 'Gurmukhi Sangam MN', 'SECRobotoLight', 'hyfonxrain', 'MYingHeiGB18030C-Bold', 'samsung-sans-light', 'Helvetica LT 65 Medium', 'Droid Sans Fallback', 'Roboto Test1 Bold', 'Noto Sans Myanmar Bold', 'sans-serif-condensed-custom', 'SamsungNeoNum-3T', 'Samsung Sans Num35', 'TL Mohanty Medium', 'helve-neue-medium', 'LTHYSZK', 'Roboto Condensed custome Bold', 'Myanmar3', 'Droid Sans Devanagari', 'ShaoNv_prev', 'samsung-neo-num3L', 'FZLanTingHei-EL-GBK', 'yunos', 'samsung-neo-num3T', 'helve-neue-bold', 'noto-sans-cjk-regular', 'Noto Sans Gurmukhi UI Bold', 'DINPro-black', 'FZLanTingHei-EL-GB18030', 'SST Vietnamese Medium', 'Roboto Condensed Light', 'SST Vietnamese Bold', 'AR DJ-KK', 'Droid Sans SEMC', 'Noto Sans Myanmar UI', 'Coming Soon', 'MYuppy PRC Medium', 'Rosemary', 'Lohit Gujarati', 'Roboto Condensed custom Bold', 'FZLanTingHeiS-R-GB', 'Helvetica Neue OTS', 'Kaiti_prev', 'Roboto-BigClock', 'FZYBKSJW', 'Handset Condensed Bold', 'SamsungGeorgian', 'Dancing Script', 'sans-serif-condensed', 'hans-sans-thin', 'SamsungSansNum-4Tv Thin', 'Lohit Odia', 'BhashitaComplexSans'],
    fontFamily_2:['SimHei', 'SimSun', 'NSimSun', 'FangSong', 'KaiTi', 'STKaiti', 'STSong', 'STFangsong', 'LiSu', 'YouYuan', 'STXihei', 'STZhongsong', 'FZShuTi', 'FZYaoti', 'STCaiyun', 'STHupo', 'STLiti', 'STXingkai', 'STXinwei', 'Verdana', 'Helvetica Neue LT Pro 35 Thin', 'tahoma', 'verdana', 'times new roman', 'Courier New', 'Microsoft Himalaya', 'helvetica', 'LG-FZKaTong-M19-V2.2', 'Georgia', 'georgia', 'courier new', 'Arial', 'arial', 'cursive', 'times', 'fantasy', 'courier', 'serif', 'STXingkai', 'monospace', 'Times New Roman'],

}

globalMy.func_interval = []
//存放createElement节点的obj
globalMy.element = {}
//存放类死cookie值这样的东西
globalMy.value = {
    document: {}
}
globalMy.value._onreadystatechange = []

//存放所有节点下的 所有节点
globalMy.node = {}


//setTimeout方法的id
globalMy.Id = [];

//存放异步 func地方
globalMy.func = [];

//运行数组
globalMy.run = []
globalMy.run1 = []


//节点类
globalMy.getDocumentElement = function getDocumentElement() {
    return document.firstElementChild;
}
globalMy.createElement = function createElement(tagName) {
    var tag_name = tagName.toLowerCase() + '';
    var type;
    switch (tag_name) {
        case "div":
            type = HTMLDivElement.prototype
            break
        case "a" :
            type = HTMLAnchorElement.prototype
            break
        case "form":
            type = HTMLFormElement.prototype
            break
        case "canvas":
            type = HTMLCanvasElement.prototype
            break
        case "video":
            type = HTMLVideoElement.prototype
            break
        case "audio":
            type = HTMLAudioElement.prototype
            break
        case "meta":
            type = HTMLMetaElement.prototype
            break
        case "body":
            type = HTMLBodyElement.prototype
            break
        case "head":
            type = HTMLHeadElement.prototype
            break
        case "script":
            type = HTMLScriptElement.prototype
            break;
        case "input":
            type = HTMLInputElement.prototype
            break;
        case "html":
            type = HTMLHtmlElement.prototype
            break
        case "text":
            type = Text.prototype
            break
        case "span":
            type = HTMLSpanElement.prototype
            break
        default:
            //出错直接debugger,提醒又要补环境了操
            debugger
            debugger
            debugger
    }
    var index = 0;
    for (i in globalMy.element) {
        index++;
    }
    var name = tag_name + "_" + index;
    globalMy.element[name] = {};
    globalMy.value[name] = {};
    Object.setPrototypeOf(globalMy.element[name], type);
    globalMy.setNodeValue(globalMy.element[name]);
    return globalMy.element[name];
}

globalMy.setNodeValue = function setNodeValue(obj) {
    //给创建好的 dom节点赋予一些参数值
    var foundName = globalMy.foundName(obj);
    var babelName = foundName.split("_")[0]

    //赋值
    globalMy.value[foundName] = {};
    //, 'scrollWidth', 'scrollHeight', 'clientTop', 'clientLeft', 'clientWidth', 'clientHeight'
    let domvalue = ['scrollTop', 'scrollLeft'];
    for (var i = 0; i < domvalue.length; i++) {
        globalMy.value[foundName][domvalue[i]] = 0;
    }
    try {
        try {
            globalMy.value[foundName]['style'] = {
                accentColor: "",
                additiveSymbols: "",
                alignContent: "",
                alignItems: "",
                alignSelf: "",
                alignmentBaseline: "",
                all: "",
                animation: "",
                animationDelay: "",
                animationDirection: "",
                animationDuration: "",
                animationFillMode: "",
                animationIterationCount: "",
                animationName: "",
                animationPlayState: "",
                animationTimingFunction: "",
                appRegion: "",
                appearance: "",
                ascentOverride: "",
                aspectRatio: "",
                backdropFilter: "",
                backfaceVisibility: "",
                background: "",
                backgroundAttachment: "",
                backgroundBlendMode: "",
                backgroundClip: "",
                backgroundColor: "",
                backgroundImage: "",
                backgroundOrigin: "",
                backgroundPosition: "",
                backgroundPositionX: "",
                backgroundPositionY: "",
                backgroundRepeat: "",
                backgroundRepeatX: "",
                backgroundRepeatY: "",
                backgroundSize: "",
                basePalette: "",
                baselineShift: "",
                blockSize: "",
                border: "",
                borderBlock: "",
                borderBlockColor: "",
                borderBlockEnd: "",
                borderBlockEndColor: "",
                borderBlockEndStyle: "",
                borderBlockEndWidth: "",
                borderBlockStart: "",
                borderBlockStartColor: "",
                borderBlockStartStyle: "",
                borderBlockStartWidth: "",
                borderBlockStyle: "",
                borderBlockWidth: "",
                borderBottom: "",
                borderBottomColor: "",
                borderBottomLeftRadius: "",
                borderBottomRightRadius: "",
                borderBottomStyle: "",
                borderBottomWidth: "",
                borderCollapse: "",
                borderColor: "",
                borderEndEndRadius: "",
                borderEndStartRadius: "",
                borderImage: "",
                borderImageOutset: "",
                borderImageRepeat: "",
                borderImageSlice: "",
                borderImageSource: "",
                borderImageWidth: "",
                borderInline: "",
                borderInlineColor: "",
                borderInlineEnd: "",
                borderInlineEndColor: "",
                borderInlineEndStyle: "",
                borderInlineEndWidth: "",
                borderInlineStart: "",
                borderInlineStartColor: "",
                borderInlineStartStyle: "",
                borderInlineStartWidth: "",
                borderInlineStyle: "",
                borderInlineWidth: "",
                borderLeft: "",
                borderLeftColor: "",
                borderLeftStyle: "",
                borderLeftWidth: "",
                borderRadius: "",
                borderRight: "",
                borderRightColor: "",
                borderRightStyle: "",
                borderRightWidth: "",
                borderSpacing: "",
                borderStartEndRadius: "",
                borderStartStartRadius: "",
                borderStyle: "",
                borderTop: "",
                borderTopColor: "",
                borderTopLeftRadius: "",
                borderTopRightRadius: "",
                borderTopStyle: "",
                borderTopWidth: "",
                borderWidth: "",
                bottom: "",
                boxShadow: "",
                boxSizing: "",
                breakAfter: "",
                breakBefore: "",
                breakInside: "",
                bufferedRendering: "",
                captionSide: "",
                caretColor: "",
                clear: "",
                clip: "",
                clipPath: "",
                clipRule: "",
                color: "",
                colorInterpolation: "",
                colorInterpolationFilters: "",
                colorRendering: "",
                colorScheme: "",
                columnCount: "",
                columnFill: "",
                columnGap: "",
                columnRule: "",
                columnRuleColor: "",
                columnRuleStyle: "",
                columnRuleWidth: "",
                columnSpan: "",
                columnWidth: "",
                columns: "",
                contain: "",
                containIntrinsicBlockSize: "",
                containIntrinsicHeight: "",
                containIntrinsicInlineSize: "",
                containIntrinsicSize: "",
                containIntrinsicWidth: "",
                content: "",
                contentVisibility: "",
                counterIncrement: "",
                counterReset: "",
                counterSet: "",
                cursor: "",
                cx: "",
                cy: "",
                d: "",
                descentOverride: "",
                direction: "",
                display: "",
                dominantBaseline: "",
                emptyCells: "",
                fallback: "",
                fill: "",
                fillOpacity: "",
                fillRule: "",
                filter: "",
                flex: "",
                flexBasis: "",
                flexDirection: "",
                flexFlow: "",
                flexGrow: "",
                flexShrink: "",
                flexWrap: "",
                float: "",
                floodColor: "",
                floodOpacity: "",
                font: "",
                fontDisplay: "",
                fontFamily: "",
                fontFeatureSettings: "",
                fontKerning: "",
                fontOpticalSizing: "",
                fontPalette: "",
                fontSize: "",
                fontStretch: "",
                fontStyle: "",
                fontSynthesis: "",
                fontSynthesisSmallCaps: "",
                fontSynthesisStyle: "",
                fontSynthesisWeight: "",
                fontVariant: "",
                fontVariantCaps: "",
                fontVariantEastAsian: "",
                fontVariantLigatures: "",
                fontVariantNumeric: "",
                fontVariationSettings: "",
                fontWeight: "",
                forcedColorAdjust: "",
                gap: "",
                grid: "",
                gridArea: "",
                gridAutoColumns: "",
                gridAutoFlow: "",
                gridAutoRows: "",
                gridColumn: "",
                gridColumnEnd: "",
                gridColumnGap: "",
                gridColumnStart: "",
                gridGap: "",
                gridRow: "",
                gridRowEnd: "",
                gridRowGap: "",
                gridRowStart: "",
                gridTemplate: "",
                gridTemplateAreas: "",
                gridTemplateColumns: "",
                gridTemplateRows: "",
                height: "",
                hyphens: "",
                imageOrientation: "",
                imageRendering: "",
                inherits: "",
                initialValue: "",
                inlineSize: "",
                inset: "",
                insetBlock: "",
                insetBlockEnd: "",
                insetBlockStart: "",
                insetInline: "",
                insetInlineEnd: "",
                insetInlineStart: "",
                isolation: "",
                justifyContent: "",
                justifyItems: "",
                justifySelf: "",
                left: "",
                letterSpacing: "",
                lightingColor: "",
                lineBreak: "",
                lineGapOverride: "",
                lineHeight: "",
                listStyle: "",
                listStyleImage: "",
                listStylePosition: "",
                listStyleType: "",
                margin: "",
                marginBlock: "",
                marginBlockEnd: "",
                marginBlockStart: "",
                marginBottom: "",
                marginInline: "",
                marginInlineEnd: "",
                marginInlineStart: "",
                marginLeft: "",
                marginRight: "",
                marginTop: "",
                marker: "",
                markerEnd: "",
                markerMid: "",
                markerStart: "",
                mask: "",
                maskType: "",
                maxBlockSize: "",
                maxHeight: "",
                maxInlineSize: "",
                maxWidth: "",
                maxZoom: "",
                minBlockSize: "",
                minHeight: "",
                minInlineSize: "",
                minWidth: "",
                minZoom: "",
                mixBlendMode: "",
                negative: "",
                objectFit: "",
                objectPosition: "",
                offset: "",
                offsetDistance: "",
                offsetPath: "",
                offsetRotate: "",
                opacity: "",
                order: "",
                orientation: "",
                orphans: "",
                outline: "",
                outlineColor: "",
                outlineOffset: "",
                outlineStyle: "",
                outlineWidth: "",
                overflow: "",
                overflowAnchor: "",
                overflowClipMargin: "",
                overflowWrap: "",
                overflowX: "",
                overflowY: "",
                overrideColors: "",
                overscrollBehavior: "",
                overscrollBehaviorBlock: "",
                overscrollBehaviorInline: "",
                overscrollBehaviorX: "",
                overscrollBehaviorY: "",
                pad: "",
                padding: "",
                paddingBlock: "",
                paddingBlockEnd: "",
                paddingBlockStart: "",
                paddingBottom: "",
                paddingInline: "",
                paddingInlineEnd: "",
                paddingInlineStart: "",
                paddingLeft: "",
                paddingRight: "",
                paddingTop: "",
                page: "",
                pageBreakAfter: "",
                pageBreakBefore: "",
                pageBreakInside: "",
                pageOrientation: "",
                paintOrder: "",
                perspective: "",
                perspectiveOrigin: "",
                placeContent: "",
                placeItems: "",
                placeSelf: "",
                pointerEvents: "",
                position: "",
                prefix: "",
                quotes: "",
                r: "",
                range: "",
                resize: "",
                right: "",
                rowGap: "",
                rubyPosition: "",
                rx: "",
                ry: "",
                scrollBehavior: "",
                scrollMargin: "",
                scrollMarginBlock: "",
                scrollMarginBlockEnd: "",
                scrollMarginBlockStart: "",
                scrollMarginBottom: "",
                scrollMarginInline: "",
                scrollMarginInlineEnd: "",
                scrollMarginInlineStart: "",
                scrollMarginLeft: "",
                scrollMarginRight: "",
                scrollMarginTop: "",
                scrollPadding: "",
                scrollPaddingBlock: "",
                scrollPaddingBlockEnd: "",
                scrollPaddingBlockStart: "",
                scrollPaddingBottom: "",
                scrollPaddingInline: "",
                scrollPaddingInlineEnd: "",
                scrollPaddingInlineStart: "",
                scrollPaddingLeft: "",
                scrollPaddingRight: "",
                scrollPaddingTop: "",
                scrollSnapAlign: "",
                scrollSnapStop: "",
                scrollSnapType: "",
                scrollbarGutter: "",
                shapeImageThreshold: "",
                shapeMargin: "",
                shapeOutside: "",
                shapeRendering: "",
                size: "",
                sizeAdjust: "",
                speak: "",
                speakAs: "",
                src: "",
                stopColor: "",
                stopOpacity: "",
                stroke: "",
                strokeDasharray: "",
                strokeDashoffset: "",
                strokeLinecap: "",
                strokeLinejoin: "",
                strokeMiterlimit: "",
                strokeOpacity: "",
                strokeWidth: "",
                suffix: "",
                symbols: "",
                syntax: "",
                system: "",
                tabSize: "",
                tableLayout: "",
                textAlign: "",
                textAlignLast: "",
                textAnchor: "",
                textCombineUpright: "",
                textDecoration: "",
                textDecorationColor: "",
                textDecorationLine: "",
                textDecorationSkipInk: "",
                textDecorationStyle: "",
                textDecorationThickness: "",
                textEmphasis: "",
                textEmphasisColor: "",
                textEmphasisPosition: "",
                textEmphasisStyle: "",
                textIndent: "",
                textOrientation: "",
                textOverflow: "",
                textRendering: "",
                textShadow: "",
                textSizeAdjust: "",
                textTransform: "",
                textUnderlineOffset: "",
                textUnderlinePosition: "",
                top: "",
                touchAction: "",
                transform: "",
                transformBox: "",
                transformOrigin: "",
                transformStyle: "",
                transition: "",
                transitionDelay: "",
                transitionDuration: "",
                transitionProperty: "",
                transitionTimingFunction: "",
                unicodeBidi: "",
                unicodeRange: "",
                userSelect: "",
                userZoom: "",
                vectorEffect: "",
                verticalAlign: "",
                visibility: "",
                webkitAlignContent: "",
                webkitAlignItems: "",
                webkitAlignSelf: "",
                webkitAnimation: "",
                webkitAnimationDelay: "",
                webkitAnimationDirection: "",
                webkitAnimationDuration: "",
                webkitAnimationFillMode: "",
                webkitAnimationIterationCount: "",
                webkitAnimationName: "",
                webkitAnimationPlayState: "",
                webkitAnimationTimingFunction: "",
                webkitAppRegion: "",
                webkitAppearance: "",
                webkitBackfaceVisibility: "",
                webkitBackgroundClip: "",
                webkitBackgroundOrigin: "",
                webkitBackgroundSize: "",
                webkitBorderAfter: "",
                webkitBorderAfterColor: "",
                webkitBorderAfterStyle: "",
                webkitBorderAfterWidth: "",
                webkitBorderBefore: "",
                webkitBorderBeforeColor: "",
                webkitBorderBeforeStyle: "",
                webkitBorderBeforeWidth: "",
                webkitBorderBottomLeftRadius: "",
                webkitBorderBottomRightRadius: "",
                webkitBorderEnd: "",
                webkitBorderEndColor: "",
                webkitBorderEndStyle: "",
                webkitBorderEndWidth: "",
                webkitBorderHorizontalSpacing: "",
                webkitBorderImage: "",
                webkitBorderRadius: "",
                webkitBorderStart: "",
                webkitBorderStartColor: "",
                webkitBorderStartStyle: "",
                webkitBorderStartWidth: "",
                webkitBorderTopLeftRadius: "",
                webkitBorderTopRightRadius: "",
                webkitBorderVerticalSpacing: "",
                webkitBoxAlign: "",
                webkitBoxDecorationBreak: "",
                webkitBoxDirection: "",
                webkitBoxFlex: "",
                webkitBoxOrdinalGroup: "",
                webkitBoxOrient: "",
                webkitBoxPack: "",
                webkitBoxReflect: "",
                webkitBoxShadow: "",
                webkitBoxSizing: "",
                webkitClipPath: "",
                webkitColumnBreakAfter: "",
                webkitColumnBreakBefore: "",
                webkitColumnBreakInside: "",
                webkitColumnCount: "",
                webkitColumnGap: "",
                webkitColumnRule: "",
                webkitColumnRuleColor: "",
                webkitColumnRuleStyle: "",
                webkitColumnRuleWidth: "",
                webkitColumnSpan: "",
                webkitColumnWidth: "",
                webkitColumns: "",
                webkitFilter: "",
                webkitFlex: "",
                webkitFlexBasis: "",
                webkitFlexDirection: "",
                webkitFlexFlow: "",
                webkitFlexGrow: "",
                webkitFlexShrink: "",
                webkitFlexWrap: "",
                webkitFontFeatureSettings: "",
                webkitFontSmoothing: "",
                webkitHighlight: "",
                webkitHyphenateCharacter: "",
                webkitJustifyContent: "",
                webkitLineBreak: "",
                webkitLineClamp: "",
                webkitLocale: "",
                webkitLogicalHeight: "",
                webkitLogicalWidth: "",
                webkitMarginAfter: "",
                webkitMarginBefore: "",
                webkitMarginEnd: "",
                webkitMarginStart: "",
                webkitMask: "",
                webkitMaskBoxImage: "",
                webkitMaskBoxImageOutset: "",
                webkitMaskBoxImageRepeat: "",
                webkitMaskBoxImageSlice: "",
                webkitMaskBoxImageSource: "",
                webkitMaskBoxImageWidth: "",
                webkitMaskClip: "",
                webkitMaskComposite: "",
                webkitMaskImage: "",
                webkitMaskOrigin: "",
                webkitMaskPosition: "",
                webkitMaskPositionX: "",
                webkitMaskPositionY: "",
                webkitMaskRepeat: "",
                webkitMaskRepeatX: "",
                webkitMaskRepeatY: "",
                webkitMaskSize: "",
                webkitMaxLogicalHeight: "",
                webkitMaxLogicalWidth: "",
                webkitMinLogicalHeight: "",
                webkitMinLogicalWidth: "",
                webkitOpacity: "",
                webkitOrder: "",
                webkitPaddingAfter: "",
                webkitPaddingBefore: "",
                webkitPaddingEnd: "",
                webkitPaddingStart: "",
                webkitPerspective: "",
                webkitPerspectiveOrigin: "",
                webkitPerspectiveOriginX: "",
                webkitPerspectiveOriginY: "",
                webkitPrintColorAdjust: "",
                webkitRtlOrdering: "",
                webkitRubyPosition: "",
                webkitShapeImageThreshold: "",
                webkitShapeMargin: "",
                webkitShapeOutside: "",
                webkitTapHighlightColor: "",
                webkitTextCombine: "",
                webkitTextDecorationsInEffect: "",
                webkitTextEmphasis: "",
                webkitTextEmphasisColor: "",
                webkitTextEmphasisPosition: "",
                webkitTextEmphasisStyle: "",
                webkitTextFillColor: "",
                webkitTextOrientation: "",
                webkitTextSecurity: "",
                webkitTextSizeAdjust: "",
                webkitTextStroke: "",
                webkitTextStrokeColor: "",
                webkitTextStrokeWidth: "",
                webkitTransform: "",
                webkitTransformOrigin: "",
                webkitTransformOriginX: "",
                webkitTransformOriginY: "",
                webkitTransformOriginZ: "",
                webkitTransformStyle: "",
                webkitTransition: "",
                webkitTransitionDelay: "",
                webkitTransitionDuration: "",
                webkitTransitionProperty: "",
                webkitTransitionTimingFunction: "",
                webkitUserDrag: "",
                webkitUserModify: "",
                webkitUserSelect: "",
                webkitWritingMode: "",
                whiteSpace: "",
                widows: "",
                width: "",
                willChange: "",
                wordBreak: "",
                wordSpacing: "",
                wordWrap: "",
                writingMode: "",
                x: "",
                y: "",
                zIndex: "",
                zoom: "",
            };
            globalMy.mydefineProperty(globalMy.value[foundName]['style'], 'fontFamily', '', true, undefined, undefined, function fontFamily() {
                
                if(globalMy.value[foundName]['style']['_fontFamily']){
                    return globalMy.value[foundName]['style']['_fontFamily']
                }else return ''
            }, function fontFamily(val) {
                
                globalMy.value[foundName]['style']['_fontFamily'] = val;
                if(globalMy.inArray(val,globalMy.memory.fontFamily_1)){
                    globalMy.value[foundName]['offsetHeight'] = 151
                    globalMy.value[foundName]['offsetWidth'] = 1327
                }
                else if(globalMy.inArray(val,globalMy.memory.fontFamily_2)){
                    globalMy.value[foundName]['offsetHeight'] = 114
                    globalMy.value[foundName]['offsetWidth'] = 912
                }
                console.log("set fontFamily =>",val)
            });
            Object.setPrototypeOf(globalMy.value[foundName]['style'], CSSStyleDeclaration.prototype);
        } catch (e) {
            e=(e);console.log("设置Style失败！！ =>", foundName);
        }

        globalMy.value[foundName]["outerHTML"] = "<" + babelName + "></" + babelName + ">"
        globalMy.value[foundName]['id'] = ''
        globalMy.value[foundName]['className'] = ''
        globalMy.value[foundName]['innerHTML'] = ''
        globalMy.value[foundName]['tagName'] = babelName.toUpperCase();
        globalMy.value[foundName]['localName'] = babelName.toLowerCase();
        globalMy.value[foundName]["hidden"] = false;
        globalMy.value[foundName]['nodeName'] = babelName.toUpperCase();
    } catch (e) {

    }
    globalMy.value[foundName]['nodeType'] = 1
    globalMy.value[foundName]['id'] = ''
    switch (foundName.split("_")[0]) {
        case "meta":
            globalMy.value[foundName]['name'] = '';
            globalMy.value[foundName]['content'] = '';
            globalMy.value[foundName]['scheme'] = '';
            globalMy.value[foundName]['media'] = '';
            break
        case "script":

            break
        case "canvas":
            globalMy.value[foundName]['width'] = 200;
            globalMy.value[foundName]['height'] = 50;
            break
        //两者都继承了HTMLMediaElement
        case "audio" || "video":
            globalMy.value[foundName]['currentSrc'] = '';
            globalMy.value[foundName]['src'] = '';

            break;
        case "body":

            break;
        case "div":
            globalMy.value[foundName]['align'] = ''
            break;
        case "head":
            break;
        case "input":
            // globalMy.value[foundName]['name'] = ''
            // globalMy.value[foundName]['value'] = ''
            // globalMy.value[foundName]['defaultValue'] = ''
            break
        case "form":

            break
        case "html":
            globalMy.value[foundName]['offsetTop'] = 0
            globalMy.value[foundName]['offsetLeft'] = 0
            globalMy.value[foundName]['offsetWidth'] = 1920
            globalMy.value[foundName]['offsetHeight'] = 167
            break
        case "text":
            globalMy.value[foundName]["nodeName"] = "#text"
            globalMy.value[foundName]["nodeType"] = 3
            globalMy.value[foundName]["baseURI"] = "http://qikan.cqvip.com/Qikan/Search/Advance?from=index"
            break
        case "span":
            //cssStyle = mmllii时才是这样的
            globalMy.value[foundName]["offsetWidth"] = 1327
            globalMy.value[foundName]["offsetHeight"] = 151
            break
        default:
            

    }

    //添加node节点
    globalMy.node[foundName] = {};
    globalMy.node[foundName]["childNodes"] = [];
    Object.setPrototypeOf(globalMy.node[foundName]["childNodes"], NodeList.prototype)
}
globalMy.setParentNode = function setParentNode(parent, childFoundName) {
    globalMy.value[childFoundName]['parentNode'] = parent;
    globalMy.value[childFoundName]['parentElement'] = parent;

}
globalMy.removeParentNode = function removeParentNode(childFoundName) {
    globalMy.value[childFoundName]['parentNode'] = null;
    globalMy.value[childFoundName]['parentElement'] = null;
}
globalMy.getElementsByTagName = function getElementsByTagName(dom, tagName) {
    var NodeList;
    var htmlCollection = [];
    Object.setPrototypeOf(htmlCollection, HTMLCollection.prototype);
    if (dom === document) {
        NodeList = globalMy.node['allNodes'];
    } else {
        var foundName = globalMy.foundName(dom);
        NodeList = globalMy.node[foundName]['childNodes'];
    }

    for (var i = 0; i < NodeList.length; i++) {
        if (NodeList[i].nodeName.toLowerCase() === tagName) {
            htmlCollection[htmlCollection.length] = NodeList[i]
        }
    }
    return htmlCollection
}
globalMy.getElementById = function getElementById(dom, id) {
    var NodeList;

    if (dom === document) {
        NodeList = globalMy.node['allNodes'];
    } else {
        var foundName = globalMy.foundName(dom);
        NodeList = globalMy.node[foundName]['childNodes'];
    }

    for (var i = 0; i < NodeList.length; i++) {
        if (NodeList[i].nodeType === 1) {
            if (NodeList[i].id === id) return NodeList[i];
        }
    }
    return null
}
globalMy.getPreviousSibling = function getPreviousSibling(dom) {
//    通过dom的parentNode找到父节点
    var parentNodeName = globalMy.foundName(dom.parentNode);
    var NodeList = globalMy.node[parentNodeName]['childNodes'];
    // var if_found = false;
    for (var i = 0; i < NodeList.length; i++) {
        if (NodeList[i] === dom) {
            if (i === 0) {
                return null;
            } else {
                return NodeList[i - 1];
            }
        }
    }
    return null
}
globalMy.getNextSibling = function getNextSibling(dom) {
    var parentNodeName = globalMy.foundName(dom.parentNode);
    var NodeList = globalMy.node[parentNodeName]['childNodes'];
    // var if_found = false;
    for (var i = 0; i < NodeList.length; i++) {
        if (NodeList[i] === dom) {
            if (i === NodeList.length - 1) {
                return null;
            } else {
                return NodeList[i + 1];
            }
        }

    }
    return null

}
globalMy.getPreviousElementSibling = function getPreviousElementSibling(dom) {
//    通过dom的parentNode找到父节点
    var parentNodeName = globalMy.foundName(dom.parentNode);
    var NodeList = globalMy.node[parentNodeName]['childNodes'];
    for (var i = 0; i < NodeList.length; i++) {
        if (NodeList[i] === dom) {
            if (i === 0) {
                return null;
            } else {
                for (var m = i - 1; m >= 0; m--) {
                    if (NodeList[m].nodeType === 1) {
                        return NodeList[m]
                    }
                }
                break
            }
        }
    }
    return null
}
globalMy.getNextElementSibling = function getNextElementSibling(dom) {
    var parentNodeName = globalMy.foundName(dom.parentNode);
    var NodeList = globalMy["node"][parentNodeName]['childNodes'];
    for (var i = 0; i < NodeList.length; i++) {
        if (NodeList[i] === dom) {
            if (i === NodeList.length - 1) {
                return null;
            } else {
                for (var m = i + 1; m < NodeList.length; m++) {
                    if (NodeList[m]["nodeType"] === 1) {
                        return NodeList[m]
                    }
                }
                break
            }

        }
    }
    return null
}
globalMy.getChildren = function getChildren(dom) {
    var NodeList;
    var foundName = globalMy.foundName(dom);
    NodeList = globalMy.node[foundName]['childNodes'];
    var htmlCollection = [];
    Object.setPrototypeOf(htmlCollection, HTMLCollection.prototype);
    for (var i = 0; i < NodeList.length; i++) {
        if (NodeList[i]['nodeType'] === 1) {
            htmlCollection[htmlCollection.length] = NodeList[i]
        }
    }
    return htmlCollection

}
globalMy.getFirstChild = function getFirstChild(dom) {
    var foundName = globalMy.foundName(dom);
    if (globalMy.node[foundName]['childNodes'].length > 0) {
        return globalMy.node[foundName]['childNodes'][0];
    } else return null;
}
globalMy.getLastChild = function getLastChild(dom) {
    var foundName = globalMy.foundName(dom);
    if (globalMy.node[foundName]['childNodes'].length > 0) {
        return globalMy.node[foundName]['childNodes'][globalMy.node[foundName]['childNodes'].length - 1];
    } else return null;
}
globalMy.getFirstElementChild = function getFirstElementChild(dom) {
    var foundName = globalMy.foundName(dom);
    var NodeListLength = globalMy.node[foundName]['childNodes'].length;
    var NodeList = globalMy.node[foundName]['childNodes'];
    if (NodeListLength > 0) {
        for (var i = 0; i < NodeListLength; i++) {
            if (NodeList[i]['nodeType'] === 1) {
                return NodeList[i]
            }
        }
    } else return null;

    return null;
}
globalMy.getLastElementChild = function getLastElementChild(dom) {
    var foundName = globalMy.foundName(dom);
    var NodeListLength = globalMy.node[foundName]['childNodes'].length;
    var NodeList = globalMy.node[foundName]['childNodes'];
    if (NodeListLength > 0) {
        for (var i = NodeListLength - 1; i >= 0; i--) {
            if (NodeList[i]['nodeType'] === 1) {
                return NodeList[i]
            }
        }
    } else return null;

    return null;
}
globalMy.getChildElementCount = function getChildElementCount(dom) {
    var foundName = globalMy.foundName(dom);
    var NodeListLength = globalMy.node[foundName]['childNodes'].length;
    var NodeList = globalMy.node[foundName]['childNodes'];
    var count = 0;
    if (NodeListLength > 0) {
        for (var i = NodeListLength - 1; i >= 0; i--) {
            if (NodeList[i]['nodeType'] === 1) {
                count += 1;
            }
        }
    } else return count;
    return count

}
globalMy.appendChild = function appendChild(parent, child) {
    var foundName = globalMy.foundName(parent);
    var childFoundName = globalMy.foundName(child);
    globalMy.setParentNode(parent, childFoundName);
    globalMy.node.allNodes[globalMy.node.allNodes.length] = child
    globalMy.node[foundName]["childNodes"][globalMy.node[foundName]["childNodes"].length] = child
    return undefined
}
globalMy.removeChild = function removeChild(parent, child) {
    var foundName = globalMy.foundName(parent);
    var childFoundName = globalMy.foundName(child);
    //判断是哪个子节点数组要删除元素
    var NodeList = globalMy.node[foundName]['childNodes'];
    var index = 0;
    var if_found = false;
    var i;
    for (i = 0; i < NodeList.length; i++) {
        if (NodeList[i] === child) {
            if_found = true;
            index = i;
        }
    }
    if (if_found) {
        for (i = index; i < NodeList.length; i++) {
            NodeList[i] = NodeList[i + 1]
        }
        delete NodeList[NodeList.length - 1]
        NodeList.length = NodeList.length - 1
    }
    index = 0;
    if_found = false;
    var allNodeList = globalMy.node['allNodes'];

    for (i = 0; i < allNodeList.length; i++) {
        if (allNodeList[i] === child) {
            if_found = true;
            index = i;
        }
    }
    if (if_found) {
        for (i = index; i < allNodeList.length; i++) {
            NodeList[i] = allNodeList[i + 1]
        }
        delete allNodeList[allNodeList.length - 1]
        allNodeList.length = allNodeList.length - 1
    }
    globalMy.removeParentNode(childFoundName);
}
globalMy.getHTMLAllColletion = function getHTMLAllColletion() {
    var hTMLAllCollection = [];
    Object.setPrototypeOf(hTMLAllCollection, HTMLAllCollection.prototype)
    var NodeListLength = globalMy.node['allNodes'].length;
    var NodeList = globalMy.node['allNodes'];
    if (NodeListLength > 0) {
        for (var i = 0; i < NodeListLength; i++) {
            if (NodeList[i]['nodeType'] === 1) {
                hTMLAllCollection[hTMLAllCollection.length] = NodeList[i]
            }
        }
    } else return hTMLAllCollection;
    return hTMLAllCollection
}
globalMy.write = function write(tag) {
    //需要添加上下文text
    console.log("write =>" + tag)
    var text_1 = document.createElement("text")
    var text_2 = document.createElement("text")
    var span = globalMy.getMidStr("<", " ", tag)
    var dom = document.createElement(span);
    var key = globalMy.getKey(tag);
    var val = globalMy.getVal(tag);
    //赋值
    for (var i = 0; i < key.length; i++) {
        dom[key[i]] = val[i];
    }
    if (dom['type'] === "hidden") {
        dom['hidden'] = true;
    } else {
        dom['hidden'] = false;
    }
    document.body.appendChild(text_1);
    document.body.appendChild(dom);
    document.body.appendChild(text_2);
    document.body['innerHTML'] = tag;
    document.body['outerHTML'] = "<body>" + tag + "</body>>";
}
//canvas
globalMy.getContext = function getContext(dom,tagName){
    var foundName = globalMy.foundName(dom);
    var index = 0;
    for(i in globalMy.element){
        index++;
    }
    var name;
    if(tagName === "2d"){

        name = "CanvasRenderingContext2D_" + index;
        globalMy.element[name] = {};
        Object.setPrototypeOf(globalMy.element[name],CanvasRenderingContext2D.prototype);
        // globalMy.proxy(globalMy.element[name]);
        globalMy.setNodeValue(globalMy.element[name]);
        globalMy.value[name]["canvas"] = dom;
        globalMy.value[foundName]['toDataURL'] =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAYAAAAZUZThAAAAAXNSR0IArs4c6QAAEbBJREFUeF7tm3d0VVX2x7/ntlfSCdUSRUBEQEoogoq0gTg4KDCCFAVEiiSEEkrEEUKXgBAIobdRQCygYBAVGLHQBRwCYZCiqDQh/b2X924557fugZchGPkh6zHrrXjvWvkjN/fuc3b5nL3PPjeEvfEAg3UFjQVI8hkSNJOxJgJiARJcUWABEmT+sAAJModYGSSoHGJlkKByB2BlkOByiAVIcPnDAiTY/GGVWMHlESuDBJk/LECCzCHWHiSoHGKVWEHlDmsPEmTusNq8QecQK4MElUusDBJU7rAySJC5w8ogQecQK4MElUusDBJU7rAySJC5w8ogQecQK4MElUusDBJU7rAySJC5w8ogQecQK4MElUusDBJU7rAySJC5w8ogQecQK4MElUtumkE+1VqhrzsVMeQ8MsMHoQq5cluT/9mohjRvP4x1LuMyilgIuhfN57LeC0tEGHHfltyyXvqR3o2/Fy2AQQRsDIlHdfGXUo+pkDHC/Q98rj2OdaEj0Uw6UvL3QhaKJd7nsUZ7BueMKvz+3eIldJG3YZR9JcKJq+TZW9XhVp/zC/6j32JFJuXdR0SWLErG5CvTK10ImCEtQdwCvwsIYwQjPK9hk9YeZlC96ZiBnrbM2zJbqncg1viewWfh/VGNXL6jgJgT3KY9hhfcs/C4dBBvh46BA14+b1On2d4BmOUdiGTHEh70/uuwXgcvumbjIiqig/wNnpK/5H/6TGuFbVpLRBAXVjvHoYV8mN+/1cC/1eduG5BxeRMI2ABBoi1zplU8d1sOsl76XQv8LiBn6L3oXLQEbeS9yNMiEGtkY5BjPZx2Dwj5Y/+l6wfk87D+qKjlQ1T0qzIYoPkUPjnZpgIB+mdTE4QZxUNwynM/npG3o3PYDhCBYr/+CHq55nIA0pzTIKgAowS/ypF41r0IOhE5BA2kEzA0EVQXOVQXaCUsVHvjZ1IFU8LTUEM8WwKIDB1r5NFwEN/NdbhFXf9wBrkGSE+WGTfdm36XZlf2V0rdVWTFfGAs8LuArFE7I8kzHmtDRuHn4rtwWK2LV2zrUNt+BoJslBr9Gz0WEz3DcYTW5vcfEU5gknMeX8EHuGbgQ+0v/H5jmo2uwud4IeIjdHfNgz+43vU9jQXohY1hQ1FD/LlE9jlWBX8tWo7W4j4e0CZUx/RaGOUZj0P04d+Mdf2kCmgYRrleRZTqxgDHexzsbq4F/JEPwhJwr3EJhipBlA1M1YdgkdoTb4eMQXthD3SfDAbCoRJFyt85qNbFW8Vd0EzMQu+wj+AW7bxMFEGRQNZik9oOm4S2iBHPY7pjDtpIe/l8/RnkRpCOGWXr8cQ/3i+1TEQm57UGQyoBa8yzIMghEIzNfyNqZ9TY3PUg6OG3bVN6dN8YdVWH6PR9hYEJD0tKmYAUw46eRXP5ypkZOhB5xVGY6EtEW3Ef+to2QrH7Slb7DVpHxLsnojLJxUD7u9yiy7w94GEOvBc2DBpkLPL2wjdaE6RKqaiD07jHeZEDYl7mHuQ7vQ56uOch1TkTfZTNJV7ZrLbDIM8UrAkZjfbybmzW2uIV12S+r+ivbODPrVK74RSNQUbIJHSTPyvlUTNjzC4YiCbkGFySE2/Rzng3bDiakiwYPhlEYCiSHOjiXsjf+zBkKELVYp41ZLvGAfFfZqAPLJyOB7RfkORcDsWmort7PrKM2uhg7EJrZR+oTLBYex7mPmip83V0VnaUWYrdTA8VSq+8Nyq8Y44blZzbkzGsIsAlEFylmyEBQIhB6FMiERRGyQgC1qaXseWfHege9+PawdkWIIEDu0xADhr10K1oAfrYNmGylA6X6sRw/TUQyjBLmYUK9jwQkcJcpbu6M0Ah4IOQBESxIr4qXzKisdjXE3Wlk+gRugWztZd4uTPNNhcRpAheZsMMdTCOiTV5ecKYgB7GXLQ0DmOsshw2u5cDOMg9FSfp/TxwBR8wSU3ARSkaK0LHw05V6D4JGpPxT19XXEAlJIUuR4RcevGcV9wXB9wNEQoPHnFmY4htPX/PvEwIzqEy4opWorn4byxRJvCySrKpEK5ljutNbWbDU1oMVsr/QCX5Cnr40nCCVseHcgIeFk5BkAwUquFY7OsFgxEMD18NSIxnGn8G8etageSXqccR/cEz7fX9XV4mKT8JNrqNgQi6LnX8yegQSqjRLFuoUfs9qePwCOb5eoTx9sjqtq0vdqTfJLymLZsdQ8/nm/OlwC8V5n/7SeDC5M8rqUxAJnmGYZnaHR84hyGWZoMxYBXpinTPi1gkpqCF/TAkm4bvjDroWpSBIfZ3kCSuhKHJfIkTpaslmKGLIARYwp7DJvUvWGtP4hB5JRlDPZNQQEJL6veZ9GX8y9cSb8tjUM12GRekaF5edZU+x+vKQpzy3o8B6jQ0sB1HJ2EnInUXdAjwiHZ8rTXBZT0ao20r8YDtLC+b/Nc+owESC19HLD2OF5SP0ETO4vsOc/4mBP7FIE78CunSVP6aZGaPMvZZ5l5qubc7PlZeQTVcQl9tJiTBwGo5GbJh8HeIaGC11g2HvHWRZF+FyrbL6F7833LSLBs7+xajo/J1mXqc06p5njc+TdtNGnyXLvdewkDSTrs6bBBF0oKB+gSGExwCgtqiQMQ4JaOeCyE9M9RpyQ1wUqSgRyjFlQrzD/705w3rwGn+G0AusYp4unApwgUXNtoT4NB8EEQDx8Ua6OGah14sEyPtq3hNv1VvhRdds7A6ZCw6GnuuBZdaElxmIOo+Bev1TphFX8I2ez9EGUXw2eVSexBzg5sl1UJP11wOYCv5W2wlTyDBMwHrQ0egiXEUB7X66KqlgxGC9sZe+KDgS7EJNFzLBtCxSRmKWOEYJPvVOZgZrrtrPrKNmqjPTqIpy+IwV1auQJR1Pt/Txr14umgZ2ol7MEecASIyyDatTAsPcU/m7eGtysuohisYok1CmOjCAmkKj1iz+WBmEbOESnRPwEZpGGqKP6KPNpvLM7PlUaMWumlXq6Wy9BBBaYq+eLoNXtvrUkJSGCnsc8DTmxPvVXxbqs4+wnvihUmxFZkuxI2TRrV5V+rYfo06NrGl8V04ZeImq8S6g4D4zz40JqEZzcL99Dx2iY1wjlTmozZjR5Amz8CD9jPIxJPo50rFOudItDX28+CQlKuBd/3l72LdDBDdJnBAGrNsjJFX4FU9CVmohY3OeDhVFbtZQ3TxZeAdx0i0ofv56n9jGUQNAeaPmR0MQcCo4vF4X43j+xNJN/C5uxWaiEfRK2wTbJKPTzGPRqCLayGiWT5WSK8hRHKXCYh/s53LIrDFPhCKbuAVPQWhovsqINd14kxAhrinINM2GDXZTxwkF3GWAmS1Y1yZenhyIutRg923WXyy03R58NAYenbQenW8ToET0fMP7L7RtpHXulgWIIGD4npJpTKICcXLnunYobXAWNtyxOrZoCC4rESCEoGXVBuK45AsLEdP22Yclx9AF1cGkpVl6IcPISkah8QNB2+nViK5yHBOxDxfP34OcjNAzDZvhtoHHxTHIV2cgonGCDS3H8JoaSV0VcJhsQ66FGdgjLQC8cLam1jjavn0IW3Pmwdd5W2Y65wG6hWx3vs3HDDq4TnlU7QO3VuyCTdLynW+zlgtJaOJcqRMQL7Sm6KXaw5vBMwSU+Gldh74hihglTgesqCWvDfDOwSrvN2wxTEIVfQcvn/LIZEckB+Ne9BZX4Th0ltl6lGcHzLYVO6AUD9mvDx8WBWSu3qNb9xRwaBfhy84+J9KKb+G6sWS2cm4lOfJ6RfprDjOPAexAPkfAOIvN2qLP2CtIwmyanZx/nvmYZ40L/C+wDtT8fY1CFVc6OLNwF30MuaLUxFhL+SAmHV/j6J5GGpfi7H2ZbiVDGICkk1r4jlXOgawDbwUGRW+ErWNMwAT4FEUdPVkINTwYJGUgqr2y3ws8xAz3pWCb2k9vB+SiJriWRw1HuQt3ShSgM0hQ1BBLwQ1RFwUK/DW9X3GBbwc8i4esp82j0rxC62K5wvT0ETPxhDHOtR2ni61BzFLtN7uN+FjCj4OGYwY/SKKqY3vQY6xWvhIiUct8QcOiP8k/x7hItY5RkFXZSRoE5BPwko1JGyGWqYeG7SOP4jMeEpXpUvmJv1hetq5wjdhRTV6+RMTkKhXcx8DxRYGMid/ZtRkK4PcGTD8UktlkAxfH0z0JGKBYzL+js/AqABBoqXanQu9vfGJ90kMV95CO9tu3vuf5ErAs+xfaKwcww/i3Vig9kEFFOCjsKGorOZiq9YKQ/RJeFVcivbCrpI2741nA17Y0Ms9B7m+KHQiOxEfsQayavCNr1m6mS3l6a5X0Jru55ttj2Ln977V62OMfRlG21fAhNgMZhMSs6XbhB7lzQOzHDMz3HatJZa4euJR/JtDEmG72vUyT9LfLByICOqCQylGQ/sxfv/Gk/Tm5Ajv1HkFBd3VNJymMWhH96KVtB85SgSW+p7nLW7zM5ZYlg236sQgfQo8xF7SkMgUnsRUd3yZemhMmpCfGjnVJNds81aml1fHGXtydGDdOrFzDghGM5ArD8un/7qlcOgjb0p9Oy6Wur8UR7/e9Bzdftxq8wYWmBJA/C3bQhqKLaGDEKUW8lbrjSfcWXpt9HbNQW/2MeJtaxBi92C30RCfFbXGWXYXvhIb43H5EGY5ZqIyy+GHblfESPT3vQGmEbQle9E/8gP0c80saX1efwptHlBOciUiQ5yCtvbdfE9hrsxmW9m8dmmN+VjnaSXsFJshRPRgnH0pekhbYfgEZKptkUyT+JnMKHkVqCrxLGGWXea5h/+U/aSnOp5VduDpkG0lh4Gm7juKHsMeoxG2sidwQajEv8XqI2/CYPt6hDIPdK/M5fkUmZ+D3CueR2djJ75QH8U2oQWi5Xy86ZyORuQ/0LwyvMSG3tpsELBSJ+679LL1OJn1mC2xSmo7gERLNvppC2lN7BP64Qw3cVTfITbTiuHYKjIj/ntvnEQYaf+l1DyvvzxlTCzLbl6Pnjh5n+1im5HTX7O+yQoQJ2V+3FEwvGlTBjSUDLo3dMHBrLLGyhvetBVh7CFCyOGIeQcO5MQ3rWu2IgmjbkbZCUNgikDEOgKhPkqMT6LSvsvPT2weC7BGoPoZKpBTUazgUoEQ+bQpP4LmZ5L0U3zn/O2gWLmGgk5EIJUZhMuRXiOTLD1Y0lryj8XADMqM4yIlKiRSHZRUEERyNDxt/56fR7ZwROr6UzpYJCNs+41tz4KRjWsyQ2otMpabL0lb7527p9gc253Q6C5dENsxQuyU4qIiCGfN+ypYjMBQVQA0GcYXjmttVDasps3UgVFEgDCDAadFRlR/G3Y7Hts3QJmwzAGf8KWv/8JKuFLs1/VW9DDHvh3bWm3ewBDyG0DMwAoz9L8RQiXVZv/4977rcQ1tWpUqiDMoKfAHcN6IR+83D7NAEAFGzC7vRUbJV/62Y96IhpHEkNpDIFEiRU6oo3BbgS+sw42AmL+7hjd/RGfGo4B4MHL+voM3qltqLPOrS6DYgHFkftShoykpoIWJTVtSgroCuQpMmZAPa/okIay2AHI0/LoOEUtpbS/K9zRijNVggMN815RPCDkdFuk8TFJ2Xv360dyhXQOEMBQzKvwqSKweZTC/VSnQRXVXLeUL8xPgT53wnT/iefYdUTDY9YvB/6eHf5w/bNtodyZJyVYDEyZ/XikB+jzwz2vAm2keNS73cQLWkYKMCaPF6VnqM3vLWgws6wWvBSxA7pRvhp20RTmj3wfQCQz76rPv+272JjQgBJ4I6zOQO2X1gMu1AAm4SX8rMDcxNgZAjADxIUbY91HzDnz1PxjWGiIAFrAACYARbybii9atpdj67qeogKqgLI+J+nazYXGHh7XEB8gCFiABMqQlpnxawAKkfPrV0ipAFrAACZAhLTHl0wIWIOXTr5ZWAbKABUiADGmJKZ8WsAApn361tAqQBSxAAmRIS0z5tIAFSPn0q6VVgCxgARIgQ1piyqcFLEDKp18trQJkAQuQABnSElM+LWABUj79amkVIAtYgATIkJaY8mkBC5Dy6VdLqwBZ4P8AsWntq2XqbS0AAAAASUVORK5CYII="

        return globalMy.element[name];
    }
    else if(tagName ===  "webgl" || tagName === "experimental-webgl"){

        name = "WebGLRenderingContext_" + index;
        globalMy.element[name] = {};
        Object.setPrototypeOf(globalMy.element[name],WebGLRenderingContext.prototype);
        // globalMy.proxy(globalMy.element[name]);
        globalMy.setNodeValue(globalMy.element[name]);
        globalMy.value[name]["canvas"] = dom;
        globalMy.value[foundName]['toDataURL'] =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAADQJJREFUeF7tnWGIJEcVx1/N7iH5EFBEokiMoBIhBg2KKCKZQ1ACCko+BFFQQUFREJSAgjIdFOIHFRFRQRFRURBRIX5QP2QXBBU12ePuyJq7I6tZ7wx3xIuJ3GEupqVmerOzszM73T3dVe9V/fbrdXe99/+//FL1pqrbCX8ogAIoYEQBZyROwkQBFEABAVgUAQqggBkFAJYZqwgUBVAAYFEDKIACZhQAWGasIlAUQAGARQ2gAAqYUQBgmbGKQFEABQAWNYACKGBGAYBlxioCRQEUAFjUAAqggBkFAJYZqwgUBVAAYFEDKIACZhQAWGasIlAUQAGARQ10rkBZylBEbndO7un84TwwawUAVtb295N8BawNETnunGz2MwpPzVEBgJWj6z3n/GwpG07Gs6xN5+R4z8Px+IwUAFgZmR0q1Slg+SELloahlE9/HICVvsfBM3y2lHKmsIBWcBfSHBBgpelrtKyulTJck/GScPaPflY0V9IZGGCl46WKTP5Xysj5ZeDhaOhnqXDIdhAAy7Z/6qJ/ppSNgchwQWGxNFTnmK2AAJYtv9RH+0wp5UDkqI8FAC31LuoNEGDp9cZcZL5/5WQ8wzry6ybO8fETc+YqCRhgKTEihTDqAov9WSm4HScHgBVH9yRHvVZtGF02w6qSZ2mYZBX0mxTA6lffrJ5+rdp/VRNYXhuglVWFrJ4swFpdQ54gIldLGa5X+68aAEvoZ1E+TRQAWE3U4tqFCrQFFv0siqqJAgCriVpcu1CBp6v+lS+oJjMs+lkUVRMFAFYTtbi2L2DRz6K2aikAsGrJxEXLFPjv1IbRFjOs8ePpZy1TmX8HWNTAygr4/tVgasNoW2DRz1rZiuQfALCSt7j/BK9W5wf3QLUCsFga9m+X6REAlmn7dATfMbCAlg5bVUYBsFTaYiuoq1X/qqMZFv0sW/YHjRZgBZU7vcGeqjaMelh1CSx2wadXK11kBLC6UDHjZ1wtZeTh0gOwWBpmXFeLUgdYFMVKClyZOvDc8QxrLy7OG67kUFo3A6y0/AyezZWpA889AYv9WcFd1TsgwNLrjfrIfP9q74MTPS0JmWWpr4KwAQKssHonNVpAYNHPSqpy2icDsNprl/2d/5n64ETPMyxmWtlX20QAgEUhtFYgArDoZ7V2K40bAVYaPgbP4nIpw2Mz5wf7arrPJMevhsHd1jMgwNLjhalIIgKLfpapSuk2WIDVrZ7ZPO3JOQeeA82w6GdlU2WHEwVYGZu/SuoKgEU/axUDjd4LsIwaFzvsJ+cceA48w2JpGLsIIowPsCKIbn1I37/yG0ZntzJEABbQsl5MDeMHWA0F43KRf5cycnMOPEcClrfkuHOyiTfpKwCw0ve48wyfmGq4T0MqIrDoZ3Xuss4HAiydvqiO6omp/pUWYPH+LNUl01lwAKszKfN4kO9fuan+lSJg0c/KoAQBVgYmd5micmDRz+rSbIXPAlgKTdEc0uWZF/Ypm2GNpeP7hporaLXYANZq+mV39+WZF/ZpBBb9rHTLEmCl623nmV2qPjjhi2ZvD5ZSYNHP6tx9HQ8EWDp8MBGFMWDRzzJRVc2CBFjN9Mr66n9V/SsjMyz6WQlWK8BK0NS+UrIILPpZfVVDnOcCrDi6mxz18WrDqKUZViU0L/0zWXGHgwZYiRjZdxq+fzWY84ZRxU33WUk4b9h3kQR4PsAKIHIKQ1xa8MI+Q8DadE6Op+BFzjkArJzdb5B7AsBiq0MDv7VeCrC0OqMsrksLXthnaIa1pyj9LGW11SQcgNVErUyv/We1YXTeC/sMAsu7SD/LaC0DLKPGhQz7Uikjvz0gIWDRzwpZQB2OBbA6FDPVR12cOfBscFvDPGtYGhosWIBl0LTQIV+cOfCcCLBowocupA7GA1gdiJjyI3z/yn9wYhpSCQGLfpax4gVYxgwLHW4GwKKfFbqoVhgPYK0gXg63PlZtGE14hsXS0FAhAyxDZsUINRNgAa0YxdViTIDVQrRcbtktZXhszvnBxHpYz9nJq5X1VzbA0u9RtAh3r8nw2GDyhefEl4QTjZ1sugHnDaMVXI2BAVYNkXK95MLTY1j5tzTkAawJtAp3TO7J1XPteQMs7Q5FjO/ClQyBtQet64BWxNJbODTA0uiKkpguPCXlvOM4qfawpmV3148nlfwpUwBTlBmiJZzdyzJcc5P+VVZLwn0DNt3z6Wdpqce9OACWNkeUxHP+cRm5cv6B5xxmWFUTvnAvZGmopCQrSzRFQyxqFLhwUTZk8lrkXGdYe14U7gagpaUwmWFpcUJZHOfPS7loK0M2M6zKE/dS+llayhNgaXFCURy7OzIcrC0+8JwbsERk072MfpaGEgVYGlxQFsMYWEe8oSFDYPl1ceFuYmkYu1QBVmwHFI6/e3ay/4ol4SFzCvcqoBWzZAFWTPWVjr3718n+K4B12CD3avpZMcsWYMVUX+HYO6dkuF7tvwJYcw3adK+hnxWrdAFWLOWVjruzJcP1JQees+xhHfSrcK9laRijhAFWDNUVj/nog+NfB4888AywqkPStwGt0KUMsEIrrny8R/8EsOpa5N5IP6uuVl1dB7C6UjKR5/z9D8sPPDPDes7swr2ZWVbI0gdYIdVWPtbO7yb7r5YdxwFYB4ws3FuBVqjSBlihlDYwzs7m/vuv2NbQwDD/0r/bgVYDxVpfCrBaS5fejTv3y8agxoFnZliHvC/c2wBWiP8iAFYIlY2MsfOb/f4VM6zaphXuHcCqtlorXgiwVhQwldvP3ifD9bX9/hXAWuKsXwbeAahC1z/ACq240vF27pORTL2wD2AtMMqD6l2AKlYZA6xYyisb95Ff7O+/4lfCueYU7j2AKnbZAqzYDigZ/5GfHXxhHzOsyhg/o7oTUCkpU3bqajEiZhxnfzL54ESdX/9mQbYIbOb/T+hBdRegilmX88Y2X1faBLUYz9kfynBtALAq7wr3PkCltY4BllZnAsZ17geT/VeZz7AKL7n7ALAKWHqNhwJYjSVL74Zz3zv8htGselh++fchQGWhsgGWBZd6jHH7OzI8Vp0fzHCGVbiPAKoey6vzRwOsziW19cDtb2UJrMJ9DFDZqtRJtADLomsdxnzmG/sHnpOfYfml38cBVYflE/xRACu45LoGPPO1DIDlQfVJQKWr8tpFA7Da6ZbMXWe+Mv+FfYk03Qv3aUCVTLGyJEzJyua5bN8rw7WpA8/JLAn9jOpuQNW8IvTfwQxLv0e9RfjwvTJyUweezQPLyWQv1WeBVW9FE/nBACuyATGHP/MF2ZDqCzl1j9zUvS5CYRXu84AqZj2FGDtCXYVIizHqKPDw6OCBZ5MzrIEUbgSo6vidwjUAKwUXW+Sw/bnJByemIWUMWIX7IqBqYb3pWwCWafvaB7/9GRkNfHNaROa9/0rtr4SlFO5LgKq987bvBFi2/Wsd/fbdh88Pqp5heVB9GVC1NjyRGwFWIkY2TWP7U5P9VwZmWIX7KqBq6m+q1wOsVJ09Iq9Tn5Dh+mDywQnFwCrc1wFVhuV5ZMoAK8OKGAOrVAqsstpL9U1glWFpLk0ZYC2VKL0LHvro/gcnlM2wCvdtQJVexXWXEcDqTkszT3row+qAVbjvAiozBRQxUIAVUfwYQ5/6oAwHbv+DqVFnWP6Xv+8Dqhh1YHVMgGXVuZZxn3q/AmB5UP0IULW0MOvbAFZm9p9+r2w4N97lPt4wGniGVbgfA6rMSq7TdAFWp3Lqf9jpuw5+4TkIsPyM6qeASn916I8QYOn3qNMIT9+5+MBz5zvdPah+Dqg6NTDzhwGsjApg692TD04smlV1Baw1qfZS/RJYZVReQVIFWEFk1jHIqXfKyMniA89dAGsgUqz9ClDpcDy9KABWep4uzOjkHUcfeF4JWKUUz/s1oMqonKKkCrCiyB5n0JNvP/rAcxtg+eXfdb8FVHEczW9UgJWJ51tDGa4tOfDcBFgeVNffD6gyKR81aQIsNVb0G8gYWEsOPNcClpPiBZuAql+3ePoiBQBWJrVx4i3zP5haex9WKcWLfg+oMikXtWkCLLXWdBvYiTe1A5Zf+t3wR0DVrRs8ra0CAKutcobu23qDDF2NA88HloTV9wpf8hdgZcjq5EMFWMlbLLL1uobAKqW48QSgyqA0zKUIsMxZ1jzgrVvrHXj2y7+bTgKq5gpzRygFAFYopSOOs3WLbLhy8RsaPKhe8RCgimgRQ9dUAGDVFMryZVs3LzjwXEpx8xlAZdnb3GIHWIk7/udXynD98IHn4pZzgCpx65NMD2Alaet+Ug+8XEb+QLI32i/9bv0boErc8qTTA1hJ2yvy4I3j/tXmbf8AVIlbnUV6ACtxmx94sYxe/xiwStzmbNIDWNlYTaIoYF8BgGXfQzJAgWwUAFjZWE2iKGBfAYBl30MyQIFsFABY2VhNoihgXwGAZd9DMkCBbBQAWNlYTaIoYF+B/wNQMgm1a4BijgAAAABJRU5ErkJggg=="

        return globalMy.element[name];
    }
}


globalMy.getOffsetWidth = function getOffsetWidth(dom){
    var foundName = globalMy.foundName(dom);
    var fontFamily = globalMy.value[foundName]['style']['fontFamily']
    if(globalMy.inArray(fontFamily,globalMy.memory.fontFamily_1)){
        return 1327
    }
    else if(globalMy.inArray(fontFamily,globalMy.memory.fontFamily_2)){
        return 912
    }
    return 1237
}
globalMy.getOffsetHeight = function getOffsetHeight(dom){
    var foundName = globalMy.foundName(dom);
    var fontFamily = globalMy.value[foundName]['style']['fontFamily']
    // console.log(fontFamily,fontFamily in globalMy.memory.fontFamily_1,fontFamily in globalMy.memory.fontFamily_2)
    if(fontFamily in globalMy.memory.fontFamily_1){
        return 151
    }
    else if(fontFamily in globalMy.memory.fontFamily_2){
        return 114
    }
    return 137
}

globalMy.inArray = function inArray(obj,array){
    for(var i=0;i<array.length;i++){
        if(array[i] === obj){
            return true
        }
    }
    return false;
}

//找到该元素的id
globalMy.foundName = function foundName(obj) {
    for (var foundName in globalMy.element) {
        if (globalMy.element[foundName] === obj) {
            return foundName;
        }
    }
}
//工具类
globalMy.getMidStr = function getValue(key1, key2, str) {
    var m = str.match(new RegExp(key1 + '(.*?)' + key2));
    return m ? m[1] : false;
};

globalMy.getKey = function getKey(str) {
    var key = str.match(new RegExp(/ (.*?)=/gm));
    for (var i = 0; i < key.length; i++) {
        key[i] = key[i].replace(" ", "").replace("=", "")
    }
    return key
}

globalMy.getVal = function getVal(str) {
    var val = str.match(new RegExp(/="(.*?)"/gm));

    for (var i = 0; i < val.length; i++) {

        val[i] = val[i].slice(2, val[i].length - 1)
    }
    return val
}



//offsetWidth 167
//offsetWidth 1920
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

globalMy.mydefineProperty = function mydefinedProperty(obj, key, val, configurable, enumberable, writable, getter, setter) {
    let attr = {
        configurable: configurable,
        enumberable: enumberable,

    }
    if (val !== this.undefined && getter === this.undefined && setter === this.undefined) {
        attr['value'] = val
    }
    if (writable !== this.undefined) {
        attr['writable'] = writable
    }
    if (getter !== this.undefined) {
        attr['get'] = getter
    }
    if (setter !== this.undefined) {
        attr['set'] = setter
    }
    Object.defineProperty(obj, key, attr)
}

globalMy.proxy = function (obj, objname, type) {
    function isSymbol(value) {
        const type = typeof value
        return type === 'symbol' || type === 'object'
    }

    function isSymbol2(value) {
        const type = typeof value
        return type == 'symbol' || (type === 'object' && value != null && Object.prototype.toString.call(value) == '[object Symbol]')
    }

    function getMethodHandler(WatchName) {
        let methodhandler = {
            apply(target, thisArg, argArray) {
                let result = Reflect.apply(target, thisArg, argArray)
                if (isSymbol(result)) {
                    console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray.toString().slice(0, 60)}]`)
                } else {
                    // if (argArray+''.length > 60) {
                    //     console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [function], result is [${result}].`)
                    // }else{
                    console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray.toString().slice(0, 60)}], result is [${result}].`)
                    // }


                }
                return result
            },
            construct(target, argArray, newTarget) {
                var result = Reflect.construct(target, argArray, newTarget)
                if (isSymbol(result)) {

                    console.log(`[${WatchName}] construct function name is [${target.name}], argArray is [${argArray.toString().slice(0, 60)}]`)
                } else {
                    // if (argArray+''.length > 60) {
                    //     console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [function], result is [${result}].`)
                    // }else{
                    console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray.toString().slice(0, 60)}], result is [${result}].`)
                    // }
                    //
                }
                return result;
            }
        }
        return methodhandler
    }

    function getObjhandler(WatchName) {
        let handler = {
            get(target, propKey, receiver) {
                // if (propKey === "constructor"){
                //     
                // }
                let result = Reflect.get(target, propKey, receiver)
                if (result instanceof Object && propKey !== 'cbb_id') {
                    if (typeof result === "function") {
                        if (isSymbol(propKey)) {
                            console.log(`[${WatchName}] getting propKey is [symbol] , it is function`)

                        } else {
                            if (propKey !== 'cbb_id') {
                                console.log(`[${WatchName}] getting propKey is [${propKey}] , it is function`)
                            }

                        }
                        return new Proxy(result, getMethodHandler(WatchName))
                    } else {
                        if (isSymbol(propKey)) {
                            console.log(`[${WatchName}] getting propKey is [msybol], result is [${(result)}]`);

                        } else {
                            if (propKey !== 'cbb_id') {
                                console.log(`[${WatchName}] getting propKey is [${propKey}], result is [${(result)}]`);
                            }

                        }
                    }
                    let paic = ["Function", "Array"]
                    if (paic.indexOf(propKey) != -1 || paic.indexOf(target) != -1 || isSymbol2(propKey)) {
                        return result

                    }
                    return new Proxy(result, getObjhandler(`${WatchName}.${propKey}`))
                    // return result
                }
                if (isSymbol(result)) {
                    if (propKey !== 'cbb_id') {
                        console.log(`[${WatchName}] getting propKey is [${propKey?.description ?? propKey}]`)
                    }

                } else {
                    if (propKey !== 'cbb_id') {

                        console.log(`[${WatchName}] getting propKey is [${propKey?.description ?? propKey}], result is [${result}]`);
                    }

                }
                return result;
            },
            set(target, propKey, value, receiver) {
                if (value instanceof Object) {
                    if (typeof value === "function") {
                        if (isSymbol(WatchName)) {
                            if (propKey !== 'cbb_id') {
                                console.log(`[symbolName] setting propKey is [${propKey}] , it is function`)
                            }

                        } else {
                            if (isSymbol(propKey)) {
                                console.log(`[${WatchName}] setting propKey is [symbolpropKey] , it is function`)

                            } else {
                                if (propKey !== 'cbb_id') {
                                    console.log(`[${WatchName}] setting propKey is [${propKey}] , it is function`)
                                }

                            }

                        }
                    } else if (isSymbol(value)) {
                        if (propKey !== 'cbb_id') {
                            console.log(`[${WatchName}] setting propKey is [${propKey}]`)
                        }
                    } else {
                        if (propKey !== 'cbb_id') {
                            console.log(`[${WatchName}] setting propKey is [${propKey}], value is [${(value)}]`);
                        }
                    }
                } else {
                    if (isSymbol(value)) {
                        if (propKey !== 'cbb_id') {
                            console.log(`[${WatchName}] setting propKey is [${propKey}]`);
                        }
                    } else {
                        if (propKey !== 'cbb_id') {
                            console.log(`[${WatchName}] setting propKey is [${propKey}], value is [${value}]`);
                        }
                    }
                }
                return Reflect.set(target, propKey, value, receiver);
            },
            has(target, propKey) {
                var result = Reflect.has(target, propKey);
                if (isSymbol(result)) {
                    if (propKey !== 'cbb_id') {
                        console.log(`[${WatchName}] has propKey [${propKey}]`)
                    }
                } else {
                    if (propKey !== 'cbb_id') {
                        console.log(`[${WatchName}] has propKey [${propKey}], result is [${result}]`)
                    }
                }
                return result;
            },
            deleteProperty(target, propKey) {
                var result = Reflect.deleteProperty(target, propKey);
                if (isSymbol(result)) {
                    if (propKey !== 'cbb_id') {
                        console.log(`[${WatchName}] delete propKey [${propKey}]`)
                    }

                } else {
                    if (propKey !== 'cbb_id') {
                        console.log(`[${WatchName}] delete propKey [${propKey}], result is [${result}]`)
                    }

                }

                return result;
            },
            getOwnPropertyDescriptor(target, propKey) {
                var result = Reflect.getOwnPropertyDescriptor(target, propKey);
                if (isSymbol(result)) {
                    if (isSymbol2(propKey)) {
                        console.log(`[${WatchName}] getOwnPropertyDescriptor  propKey [symbol] result is [${(result)}]`)
                    } else {
                        if (propKey !== 'cbb_id') {
                            console.log(`[${WatchName}] getOwnPropertyDescriptor  propKey [${propKey}] result is [${(result)}]`)
                        }
                    }
                } else {
                    if (isSymbol(propKey)) {
                        console.log(`[${WatchName}] getOwnPropertyDescriptor  propKey `)
                    } else {
                        if (propKey !== 'cbb_id') {
                            console.log(`[${WatchName}] getOwnPropertyDescriptor  propKey [${propKey}]`)
                        }
                    }
                }
                return result;
            },
            defineProperty(target, propKey, attributes) {
                var result = Reflect.defineProperty(target, propKey, attributes);
                if (isSymbol(result)) {
                    if (propKey !== 'cbb_id') {
                        console.log(`[${WatchName}] defineProperty propKey [${propKey}] attributes is [${(attributes)}], result is [${result}]`)
                    }
                } else {
                    if (isSymbol(propKey)) {
                        console.log(`[${WatchName}] defineProperty propKey [symbolpropKey] attributes is [${(attributes)}]`)
                    } else {
                        if (propKey !== 'cbb_id') {
                            console.log(`[${WatchName}] defineProperty propKey [${propKey}] attributes is [${(attributes)}]`)
                        }
                    }
                }
                return result
            },
            getPrototypeOf(target) {
                var result = Reflect.getPrototypeOf(target)
                if (isSymbol(result)) {
                    console.log(`[${WatchName}] getPrototypeOf result is [${(result)}]`)
                } else {
                    console.log(`[${WatchName}] getPrototypeOf `)
                }
                return result;
            },
            setPrototypeOf(target, proto) {
                console.log(`[${WatchName}] setPrototypeOf proto is [${(proto)}]`)
                return Reflect.setPrototypeOf(target, proto);
            },
            preventExtensions(target) {
                console.log(`[${WatchName}] preventExtensions`)
                return Reflect.preventExtensions(target);
            },
            isExtensible(target) {
                var result = Reflect.isExtensible(target)
                console.log(`[${WatchName}] isExtensible, result is [${result}]`)
                return result;
            },
            ownKeys(target) {
                var result = Reflect.ownKeys(target)
                console.log(`[${WatchName}] invoke ownkeys, result is [${(JSON.stringify(result))}]`)
                if (typeof result === typeof []) {
                    let fo = result.indexOf("globalMy")
                    if (fo !== -1){
                        result.splice(fo,1)
                    }
                }

                return result
            },
            apply(target, thisArg, argArray) {
                let result = Reflect.apply(target, thisArg, argArray)
                if (isSymbol(result)) {
                    console.log(`[${WatchName}] apply function name is [${target.name}]`)

                } else {
                    // if (argArray+''.length > 60) {
                    //     console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [function], result is [${result}].`)
                    // }else{
                    console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`)
                    // }

                }
                return result
            },

            construct(target, argArray, newTarget) {
                var result = Reflect.construct(target, argArray, newTarget)
                if (isSymbol(result)) {
                    console.log(`[${WatchName}] construct function name is [${target.name}]`)
                } else {
                    // if (argArray+''.length > 60) {
                    //    console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [function], result is [${result}].`)
                    // }else{
                    console.log(`[${WatchName}] apply function name is [${target.name}], argArray is [${argArray.slice(0, 60)}], result is [${result}].`)
                    // }
                    //
                }
                return result;
            }
        }
        return handler;
    }

    if (type === "method") {
        return new Proxy(obj, getMethodHandler(objname));
    }
    return new Proxy(obj, getObjhandler(objname));
}
globalMy.error = function error(x,y) {
    let e = new TypeError()
    e.message = x
    e.stack = y
    throw e
};
/*
自定义Promise函数模块：IIFE
 */

const PENDING = 'pending';
const RESOVLED = 'resolved';
const REJECTED = 'rejected';
//Promise构造函数
//executor执行器函数
function Promise(executor) {
    let that = this;
    this.status = PENDING;   //状态未变之前都是pending
    this.data = undefined;     //未定义的数据
    this.callbacks = [];       //每个元素的结构：onResolved(){},onRejected(){}
    //执行器函数，会立即执行
    //两个改变promise状态的函数
    function resolve(value) {
        if (that.status !== PENDING) return
        //调用resolve后，需要将状态改变成为resolved
        that.status = RESOVLED;
        //保存data数据
        that.data = value;
        //如果有未执行的callback，则立即异步执行onResolved,是包含两个回调的对象
        if (that.callbacks.length > 0) {
            setTimeout(() => {
                that.callbacks.forEach(element => {
                    element.onResolved(value)
                });
            });
        }
    }

    function reject(reason) {
        if (that.status !== PENDING) return
        //调用reject后，需要将状态改变成为rejected
        that.status = REJECTED;
        //保存data数据
        that.data = reason;
        //如果有未执行的callback，则立即异步执行onRejected,是包含两个回调的对象
        if (that.callbacks.length > 0) {
            setTimeout(() => {
                that.callbacks.forEach(element => {
                    element.onResolved(reason)
                });
            });
        }
    }

    //传入的参数为两个函数
    //除了resolve和reject,还有可能自己抛出异常，会失败，此时需要一个try catch
    try {
        executor(resolve, reject)
    } catch (error) {
        error=(error);reject(error);
    }
}

/*
//.then接收成功失败的回调
返回新的Promise
 */
Promise.prototype.then = function (onResolved, onRejected) {
    const that = this;
    // 指定回调函数的默认值(必须是函数)
    onResolved = typeof onResolved === 'function' ? onResolved : value => value  //继续向下传递
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    }  //抛出异常
    return new Promise((resolve, reject) => {
        function handle(callback) {
            try {
                const result = onResolved(that.data)
                if (result instanceof Promise) {
                    result.then(resolve, reject
                        // value =>{
                        //     resolve(value)
                        // },
                        // reason=>{
                        //     reject(reason)
                        // }
                    )
                }
            } catch (error) {
                error=(error);reject(error);
            }
        }

        if (this.status === PENDING) {
            //假设当前状态还是pending,将回调保存下来
            this.callbacks.push({
                onResolved(value) {
                    handle(onResolved)
                },
                onRejected(reason) {
                    handle(onRejected)
                }
            })
        } else if (this.status === RESOVLED) {
            setTimeout(() => {
                //  如果回调是promise,return的promise结果就是这个promise结果
                handle(onResolved)
            });
        } else {
            //如果前面的promise返回的是失败的回调
            setTimeout(() => {
                handle(onRejected)
            });
        }
    })
}
/*
接收失败的回调
返回新的promise
 */
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
}
/*
promise函数对象的resolve方法
 */
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(resolve, reject)
        } else {
            resolve(value);
        }
    })
}
/*
promise函数对象的reject方法
 */
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}
//all接收数组
Promise.all = function (promises) {
    const values = [];
    const resolvedCount = 0;
    return new Promise((resolve, reject) => {
        //遍历promise获取每个promise的结果
        promises.forEach((p, index) => {
            Promise.resolve(p).then(
                //成功的时候需要放入数组中
                value => {
                    resolvedCount++;
                    values[index] = value;
                    if (resolvedCount == promises.length) {
                        resolve(values);
                    }
                },
                reason => {
                    //只要一个失败了，return的promise就失败
                    reject(reason)
                }
            )
        })
    })
}
//race接收数组
Promise.race = function (promise) {
    //返回一个pomise
    return new Promise((resolve, reject) => {
        Promise.resolve(p).then(
            //一旦有成功，return成功
            value => {
                resolve(value);
            },
            //一旦有失败，return失败
            reason => {
                reject(reason)
            }
        )
    })
}

// promise的resolveDelay，rejectDelay
/* promise函数对象的resolveDelay方法
*/
Promise.resolveDelay = function (value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value instanceof Promise) {
                value.then(resolve, reject)
            } else {
                resolve(value);
            }
        }, time);
    })
}
/*
promise函数对象的rejectDelay方法
*/
Promise.rejectDelay = function (reason, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(reason)
        }, time);
    })
}

globalMy.functionprotect(Promise)
globalMy.rename(Promise.prototype,"Promise")
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
WebGLShaderPrecisionFormat = function WebGLShaderPrecisionFormat() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(WebGLShaderPrecisionFormat)
globalMy.rename(WebGLShaderPrecisionFormat.prototype, "WebGLShaderPrecisionFormat")
WebGLUniformLocation = function WebGLUniformLocation() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(WebGLUniformLocation)
globalMy.rename(WebGLUniformLocation.prototype, "WebGLUniformLocation")
WebGLProgram = function WebGLProgram() {

}
globalMy.functionprotect(WebGLProgram)
globalMy.rename(WebGLProgram.prototype, "WebGLProgram")
WebGLShader = function WebGLShader() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(WebGLShader)
globalMy.rename(WebGLShader.prototype, "WebGLShader")

HTMLAllCollection = function HTMLAllCollection() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLAllCollection);
globalMy.rename(HTMLAllCollection.prototype,"HTMLAllCollection")
globalMy.mydefineProperty(HTMLAllCollection.prototype,'length',0,true,undefined,undefined,
    function length(){
    console.log("HTMLCollection => get length")
    
    return 0},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAllCollection.prototype).length.get,'get');

globalMy.mydefineProperty(HTMLAllCollection.prototype,'item',function item(){},true,undefined,true);globalMy.functionprotect(HTMLAllCollection.prototype.item);
globalMy.mydefineProperty(HTMLAllCollection.prototype,'namedItem',function namedItem(){},true,undefined,true);globalMy.functionprotect(HTMLAllCollection.prototype.namedItem);

CSSStyleDeclaration =function CSSStyleDeclaration () {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(CSSStyleDeclaration);
globalMy.rename(CSSStyleDeclaration.prototype,"CSSStyleDeclaration")

globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'cssText','',true,undefined,undefined,function cssText(){return globalMy.value.CSSStyleDeclaration_cssText;},function cssText(val){globalMy.value.CSSStyleDeclaration_cssText=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CSSStyleDeclaration.prototype).cssText.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CSSStyleDeclaration.prototype).cssText.set,'set');
globalMy.value.CSSStyleDeclaration_cssText='';
globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'length',0,true,undefined,undefined,function length(){
var foundName = globalMy.foundName(this);
return globalMy.value[foundName]['style'].length;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CSSStyleDeclaration.prototype).length.get,'get');

globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'parentRule',{},true,undefined,undefined,function parentRule(){return globalMy.value.CSSStyleDeclaration_parentRule;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CSSStyleDeclaration.prototype).parentRule.get,'get');
globalMy.value.CSSStyleDeclaration_parentRule={};
globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'cssFloat','',true,undefined,undefined,function cssFloat(){return globalMy.value.CSSStyleDeclaration_cssFloat;},function cssFloat(val){globalMy.value.CSSStyleDeclaration_cssFloat=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CSSStyleDeclaration.prototype).cssFloat.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CSSStyleDeclaration.prototype).cssFloat.set,'set');
globalMy.value.CSSStyleDeclaration_cssFloat='';
globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'getPropertyPriority',function getPropertyPriority(){},true,undefined,true);globalMy.functionprotect(CSSStyleDeclaration.prototype.getPropertyPriority);
globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'getPropertyValue',function getPropertyValue(){},true,undefined,true);globalMy.functionprotect(CSSStyleDeclaration.prototype.getPropertyValue);
globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'item',function item(){},true,undefined,true);globalMy.functionprotect(CSSStyleDeclaration.prototype.item);
globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'removeProperty',function removeProperty(){},true,undefined,true);globalMy.functionprotect(CSSStyleDeclaration.prototype.removeProperty);
globalMy.mydefineProperty(CSSStyleDeclaration.prototype,'setProperty',function setProperty(){},true,undefined,true);globalMy.functionprotect(CSSStyleDeclaration.prototype.setProperty);


Event = function Event() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.mydefineProperty(Event.prototype,'type', undefined, true ,true, undefined,function type(){return globalMy.value.Event_type;},undefined);
globalMy.value.Event_type = "load";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).type.get,'get type')
globalMy.mydefineProperty(Event.prototype,'target', undefined, true ,true, undefined,function target(){
    
    return document;
    // if (this.constructor.toString() === IDBVersionChangeEvent.toString()){
    //     for (let i in globalMy.value._Event_target){
    //         if (globalMy.value._Event_target[i][0].cbb_id && globalMy.value._Event_target[i][0].cbb_id === this.cbb_id){
    //             return globalMy.value._Event_target[i][1];
    //         }
    //     }
    //     return null
    // }else if (this.constructor.toString() === Event.toString()){
    //
    //     let s = globalMy.unmyValueFun(this, globalMy.value._Event_onsuccess)
    //     return globalMy.valueFun(s, globalMy.value._IDBRequest_result)
    //
    // }
    // 查找不到对应的target会debugger
    

    },undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).target.get,'get target')
globalMy.mydefineProperty(Event.prototype,'currentTarget', undefined, true ,true, undefined,function currentTarget(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).currentTarget.get,'get currentTarget')
globalMy.mydefineProperty(Event.prototype,'eventPhase', undefined, true ,true, undefined,function eventPhase(){return globalMy.value.Event_eventPhase;},undefined);
globalMy.value.Event_eventPhase = 2;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).eventPhase.get,'get eventPhase')
globalMy.mydefineProperty(Event.prototype,'bubbles', undefined, true ,true, undefined,function bubbles(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).bubbles.get,'get bubbles')
globalMy.mydefineProperty(Event.prototype,'cancelable', undefined, true ,true, undefined,function cancelable(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).cancelable.get,'get cancelable')
globalMy.mydefineProperty(Event.prototype,'defaultPrevented', undefined, true ,true, undefined,function defaultPrevented(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).defaultPrevented.get,'get defaultPrevented')
globalMy.mydefineProperty(Event.prototype,'composed', undefined, true ,true, undefined,function composed(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).composed.get,'get composed')
globalMy.mydefineProperty(Event.prototype,'timeStamp', undefined, true ,true, undefined,function timeStamp(){return globalMy.value.Event_timeStamp;},undefined);
globalMy.value.Event_timeStamp = 23484164.100000024;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).timeStamp.get,'get timeStamp')
globalMy.mydefineProperty(Event.prototype,'srcElement', undefined, true ,true, undefined,function srcElement(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).srcElement.get,'get srcElement')
globalMy.mydefineProperty(Event.prototype,'returnValue', undefined, true ,true, undefined,function returnValue(){},function returnValue(){});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).returnValue.get,'get returnValue')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).returnValue.set,'set returnValue')
globalMy.mydefineProperty(Event.prototype,'cancelBubble', undefined, true ,true, undefined,function cancelBubble(){},function cancelBubble(){});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).cancelBubble.get,'get cancelBubble')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).cancelBubble.set,'set cancelBubble')
globalMy.mydefineProperty(Event.prototype,'NONE', 0, false ,true, false,undefined,undefined);
globalMy.value.Event_NONE = 0;
globalMy.mydefineProperty(Event.prototype,'CAPTURING_PHASE', 1, false ,true, false,undefined,undefined);
globalMy.value.Event_CAPTURING_PHASE = 1;
globalMy.mydefineProperty(Event.prototype,'AT_TARGET', 2, false ,true, false,undefined,undefined);
globalMy.value.Event_AT_TARGET = 2;
globalMy.mydefineProperty(Event.prototype,'BUBBLING_PHASE', 3, false ,true, false,undefined,undefined);
globalMy.value.Event_BUBBLING_PHASE = 3;
globalMy.mydefineProperty(Event.prototype,'composedPath', function composedPath() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).composedPath.value,'composedPath')
globalMy.mydefineProperty(Event.prototype,'initEvent', function initEvent() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).initEvent.value,'initEvent')
globalMy.mydefineProperty(Event.prototype,'preventDefault', function preventDefault() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).preventDefault.value,'preventDefault')
globalMy.mydefineProperty(Event.prototype,'stopImmediatePropagation', function stopImmediatePropagation() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).stopImmediatePropagation.value,'stopImmediatePropagation')
globalMy.mydefineProperty(Event.prototype,'stopPropagation', function stopPropagation() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).stopPropagation.value,'stopPropagation')
globalMy.mydefineProperty(Event.prototype,'path', undefined, true ,true, undefined,function path(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Event.prototype).path.get,'get path')
Event.prototype.__proto__ = Object.prototype;
globalMy.functionprotect(Event)
globalMy.rename(Event.prototype,"Event")


NodeList = function NodeList(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(NodeList)
globalMy.rename(NodeList.prototype,"NodeList")
globalMy.mydefineProperty(NodeList.prototype,'entries',function entries(){},true,undefined,true);globalMy.functionprotect(NodeList.prototype.entries);
globalMy.mydefineProperty(NodeList.prototype,'keys',function keys(){},true,undefined,true);globalMy.functionprotect(NodeList.prototype.keys);
globalMy.mydefineProperty(NodeList.prototype,'values',function values(){},true,undefined,true);globalMy.functionprotect(NodeList.prototype.values);
globalMy.mydefineProperty(NodeList.prototype,'forEach',function forEach(){},true,undefined,true);globalMy.functionprotect(NodeList.prototype.forEach);
globalMy.mydefineProperty(NodeList.prototype,'length',2,true,undefined,undefined,function length(){return globalMy.value.NodeList_length;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(NodeList.prototype).length.get,'get');
globalMy.value.NodeList_length = 2;
globalMy.mydefineProperty(NodeList.prototype,'item',function item(){},true,undefined,true);globalMy.functionprotect(NodeList.prototype.item);
Database = function Database() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.rename(Database.prototype,"Database")
globalMy.functionprotect(Database);

globalMy.mydefineProperty(Database.prototype,'changeVersion', function changeVersion() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Database.prototype.changeVersion,'changeVersion')
globalMy.mydefineProperty(Database.prototype,'readTransaction', function readTransaction() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Database.prototype.readTransaction,'readTransaction')
globalMy.mydefineProperty(Database.prototype,'transaction', function transaction() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Database.prototype.transaction,'transaction')






WebSocket = function WebSocket(x){
    if (x === 'Create\x20WebSocket' || x=== "itsgonnafail"){
        globalMy.error("Failed to construct 'WebSocket': The URL '" + x + "' is invalid." , `Error: Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid.\\n    at <anonymous>:2:13`)
    }

}

globalMy.mydefineProperty(WebSocket.prototype,'url', undefined, true ,true, undefined,function url(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).url.get,'get url')
globalMy.mydefineProperty(WebSocket.prototype,'readyState', undefined, true ,true, undefined,function readyState(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).readyState.get,'get readyState')
globalMy.mydefineProperty(WebSocket.prototype,'bufferedAmount', undefined, true ,true, undefined,function bufferedAmount(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).bufferedAmount.get,'get bufferedAmount')
globalMy.mydefineProperty(WebSocket.prototype,'onopen', undefined, true ,true, undefined,function onopen(){},function onopen(){});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onopen.get,'get onopen')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onopen.set,'set onopen')
globalMy.mydefineProperty(WebSocket.prototype,'onerror', undefined, true ,true, undefined,function onerror(){},function onerror(){});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onerror.get,'get onerror')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onerror.set,'set onerror')
globalMy.mydefineProperty(WebSocket.prototype,'onclose', undefined, true ,true, undefined,function onclose(){},function onclose(){});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onclose.get,'get onclose')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onclose.set,'set onclose')
globalMy.mydefineProperty(WebSocket.prototype,'extensions', undefined, true ,true, undefined,function extensions(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).extensions.get,'get extensions')
globalMy.mydefineProperty(WebSocket.prototype,'protocol', undefined, true ,true, undefined,function protocol(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).protocol.get,'get protocol')
globalMy.mydefineProperty(WebSocket.prototype,'onmessage', undefined, true ,true, undefined,function onmessage(){},function onmessage(){});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onmessage.get,'get onmessage')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).onmessage.set,'set onmessage')
globalMy.mydefineProperty(WebSocket.prototype,'binaryType', undefined, true ,true, undefined,function binaryType(){},function binaryType(){});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).binaryType.get,'get binaryType')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).binaryType.set,'set binaryType')
globalMy.mydefineProperty(WebSocket.prototype,'CONNECTING', 0, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_CONNECTING = 0;
globalMy.mydefineProperty(WebSocket.prototype,'OPEN', 1, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_OPEN = 1;
globalMy.mydefineProperty(WebSocket.prototype,'CLOSING', 2, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_CLOSING = 2;
globalMy.mydefineProperty(WebSocket.prototype,'CLOSED', 3, false ,true, false,undefined,undefined);
globalMy.value.WebSocket_CLOSED = 3;
globalMy.mydefineProperty(WebSocket.prototype,'close', function close() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).close.value,'close')
globalMy.mydefineProperty(WebSocket.prototype,'send', function send() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebSocket.prototype).send.value,'send')
Object.setPrototypeOf(WebSocket.prototype,EventTarget.prototype)
WebSocket.__proto__ = EventTarget;

globalMy.functionprotect(WebSocket)
globalMy.rename(WebSocket.prototype,"WebSocket")

WebGLRenderingContext = function WebGLRenderingContext() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(WebGLRenderingContext)
globalMy.rename(WebGLRenderingContext.prototype, "WebGLRenderingContext")

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'canvas', {}, true, undefined, undefined, function canvas() {
        
        var foundName = globalMy.foundName(this);
        return globalMy.value[foundName]['canvas'];
    }
    , undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebGLRenderingContext.prototype).canvas.get, 'get');

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawingBufferWidth', 300, true, undefined, undefined, function drawingBufferWidth() {
    
    return globalMy.value.WebGLRenderingContext_drawingBufferWidth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebGLRenderingContext.prototype).drawingBufferWidth.get, 'get');
globalMy.value.WebGLRenderingContext_drawingBufferWidth = 300;
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawingBufferHeight', 150, true, undefined, undefined, function drawingBufferHeight() {
    
    return globalMy.value.WebGLRenderingContext_drawingBufferHeight;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebGLRenderingContext.prototype).drawingBufferHeight.get, 'get');
globalMy.value.WebGLRenderingContext_drawingBufferHeight = 150;
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_BUFFER_BIT', 256, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BUFFER_BIT', 1024, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'COLOR_BUFFER_BIT', 16384, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'POINTS', 0, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINES', 1, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINE_LOOP', 2, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINE_STRIP', 3, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TRIANGLES', 4, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TRIANGLE_STRIP', 5, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TRIANGLE_FAN', 6, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ZERO', 0, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ONE', 1, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SRC_COLOR', 768, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ONE_MINUS_SRC_COLOR', 769, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SRC_ALPHA', 770, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ONE_MINUS_SRC_ALPHA', 771, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DST_ALPHA', 772, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ONE_MINUS_DST_ALPHA', 773, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DST_COLOR', 774, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ONE_MINUS_DST_COLOR', 775, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SRC_ALPHA_SATURATE', 776, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FUNC_ADD', 32774, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_EQUATION', 32777, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_EQUATION_RGB', 32777, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_EQUATION_ALPHA', 34877, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FUNC_SUBTRACT', 32778, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FUNC_REVERSE_SUBTRACT', 32779, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_DST_RGB', 32968, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_SRC_RGB', 32969, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_DST_ALPHA', 32970, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_SRC_ALPHA', 32971, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CONSTANT_COLOR', 32769, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ONE_MINUS_CONSTANT_COLOR', 32770, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CONSTANT_ALPHA', 32771, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ONE_MINUS_CONSTANT_ALPHA', 32772, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND_COLOR', 32773, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ARRAY_BUFFER', 34962, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ELEMENT_ARRAY_BUFFER', 34963, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ARRAY_BUFFER_BINDING', 34964, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ELEMENT_ARRAY_BUFFER_BINDING', 34965, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STREAM_DRAW', 35040, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STATIC_DRAW', 35044, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DYNAMIC_DRAW', 35048, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BUFFER_SIZE', 34660, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BUFFER_USAGE', 34661, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CURRENT_VERTEX_ATTRIB', 34342, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRONT', 1028, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BACK', 1029, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRONT_AND_BACK', 1032, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_2D', 3553, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CULL_FACE', 2884, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLEND', 3042, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DITHER', 3024, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_TEST', 2960, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_TEST', 2929, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SCISSOR_TEST', 3089, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'POLYGON_OFFSET_FILL', 32823, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLE_ALPHA_TO_COVERAGE', 32926, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLE_COVERAGE', 32928, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NO_ERROR', 0, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INVALID_ENUM', 1280, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INVALID_VALUE', 1281, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INVALID_OPERATION', 1282, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'OUT_OF_MEMORY', 1285, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CW', 2304, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CCW', 2305, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINE_WIDTH', 2849, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ALIASED_POINT_SIZE_RANGE', 33901, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ALIASED_LINE_WIDTH_RANGE', 33902, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CULL_FACE_MODE', 2885, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRONT_FACE', 2886, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_RANGE', 2928, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_WRITEMASK', 2930, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_CLEAR_VALUE', 2931, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_FUNC', 2932, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_CLEAR_VALUE', 2961, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_FUNC', 2962, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_FAIL', 2964, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_PASS_DEPTH_FAIL', 2965, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_PASS_DEPTH_PASS', 2966, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_REF', 2967, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_VALUE_MASK', 2963, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_WRITEMASK', 2968, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BACK_FUNC', 34816, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BACK_FAIL', 34817, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BACK_PASS_DEPTH_FAIL', 34818, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BACK_PASS_DEPTH_PASS', 34819, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BACK_REF', 36003, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BACK_VALUE_MASK', 36004, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BACK_WRITEMASK', 36005, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VIEWPORT', 2978, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SCISSOR_BOX', 3088, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'COLOR_CLEAR_VALUE', 3106, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'COLOR_WRITEMASK', 3107, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNPACK_ALIGNMENT', 3317, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'PACK_ALIGNMENT', 3333, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_TEXTURE_SIZE', 3379, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_VIEWPORT_DIMS', 3386, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SUBPIXEL_BITS', 3408, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RED_BITS', 3410, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'GREEN_BITS', 3411, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BLUE_BITS', 3412, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ALPHA_BITS', 3413, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_BITS', 3414, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_BITS', 3415, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'POLYGON_OFFSET_UNITS', 10752, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'POLYGON_OFFSET_FACTOR', 32824, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_BINDING_2D', 32873, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLE_BUFFERS', 32936, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLES', 32937, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLE_COVERAGE_VALUE', 32938, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLE_COVERAGE_INVERT', 32939, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'COMPRESSED_TEXTURE_FORMATS', 34467, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DONT_CARE', 4352, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FASTEST', 4353, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NICEST', 4354, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'GENERATE_MIPMAP_HINT', 33170, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BYTE', 5120, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNSIGNED_BYTE', 5121, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SHORT', 5122, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNSIGNED_SHORT', 5123, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INT', 5124, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNSIGNED_INT', 5125, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FLOAT', 5126, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_COMPONENT', 6402, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ALPHA', 6406, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RGB', 6407, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RGBA', 6408, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LUMINANCE', 6409, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LUMINANCE_ALPHA', 6410, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNSIGNED_SHORT_4_4_4_4', 32819, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNSIGNED_SHORT_5_5_5_1', 32820, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNSIGNED_SHORT_5_6_5', 33635, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAGMENT_SHADER', 35632, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_SHADER', 35633, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_VERTEX_ATTRIBS', 34921, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_VERTEX_UNIFORM_VECTORS', 36347, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_VARYING_VECTORS', 36348, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_COMBINED_TEXTURE_IMAGE_UNITS', 35661, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_VERTEX_TEXTURE_IMAGE_UNITS', 35660, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_TEXTURE_IMAGE_UNITS', 34930, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_FRAGMENT_UNIFORM_VECTORS', 36349, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SHADER_TYPE', 35663, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DELETE_STATUS', 35712, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINK_STATUS', 35714, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VALIDATE_STATUS', 35715, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ATTACHED_SHADERS', 35717, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ACTIVE_UNIFORMS', 35718, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ACTIVE_ATTRIBUTES', 35721, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SHADING_LANGUAGE_VERSION', 35724, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CURRENT_PROGRAM', 35725, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NEVER', 512, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LESS', 513, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'EQUAL', 514, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LEQUAL', 515, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'GREATER', 516, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NOTEQUAL', 517, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'GEQUAL', 518, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ALWAYS', 519, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'KEEP', 7680, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'REPLACE', 7681, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INCR', 7682, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DECR', 7683, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INVERT', 5386, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INCR_WRAP', 34055, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DECR_WRAP', 34056, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VENDOR', 7936, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERER', 7937, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERSION', 7938, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NEAREST', 9728, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINEAR', 9729, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NEAREST_MIPMAP_NEAREST', 9984, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINEAR_MIPMAP_NEAREST', 9985, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NEAREST_MIPMAP_LINEAR', 9986, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LINEAR_MIPMAP_LINEAR', 9987, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_MAG_FILTER', 10240, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_MIN_FILTER', 10241, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_WRAP_S', 10242, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_WRAP_T', 10243, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE', 5890, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_CUBE_MAP', 34067, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_BINDING_CUBE_MAP', 34068, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_CUBE_MAP_POSITIVE_X', 34069, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_CUBE_MAP_NEGATIVE_X', 34070, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_CUBE_MAP_POSITIVE_Y', 34071, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_CUBE_MAP_NEGATIVE_Y', 34072, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_CUBE_MAP_POSITIVE_Z', 34073, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE_CUBE_MAP_NEGATIVE_Z', 34074, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_CUBE_MAP_TEXTURE_SIZE', 34076, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE0', 33984, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE1', 33985, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE2', 33986, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE3', 33987, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE4', 33988, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE5', 33989, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE6', 33990, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE7', 33991, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE8', 33992, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE9', 33993, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE10', 33994, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE11', 33995, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE12', 33996, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE13', 33997, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE14', 33998, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE15', 33999, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE16', 34000, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE17', 34001, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE18', 34002, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE19', 34003, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE20', 34004, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE21', 34005, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE22', 34006, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE23', 34007, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE24', 34008, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE25', 34009, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE26', 34010, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE27', 34011, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE28', 34012, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE29', 34013, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE30', 34014, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'TEXTURE31', 34015, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'ACTIVE_TEXTURE', 34016, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'REPEAT', 10497, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CLAMP_TO_EDGE', 33071, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MIRRORED_REPEAT', 33648, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FLOAT_VEC2', 35664, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FLOAT_VEC3', 35665, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FLOAT_VEC4', 35666, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INT_VEC2', 35667, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INT_VEC3', 35668, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INT_VEC4', 35669, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BOOL', 35670, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BOOL_VEC2', 35671, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BOOL_VEC3', 35672, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BOOL_VEC4', 35673, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FLOAT_MAT2', 35674, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FLOAT_MAT3', 35675, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FLOAT_MAT4', 35676, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLER_2D', 35678, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'SAMPLER_CUBE', 35680, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_ATTRIB_ARRAY_ENABLED', 34338, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_ATTRIB_ARRAY_SIZE', 34339, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_ATTRIB_ARRAY_STRIDE', 34340, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_ATTRIB_ARRAY_TYPE', 34341, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_ATTRIB_ARRAY_NORMALIZED', 34922, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_ATTRIB_ARRAY_POINTER', 34373, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING', 34975, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'IMPLEMENTATION_COLOR_READ_TYPE', 35738, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'IMPLEMENTATION_COLOR_READ_FORMAT', 35739, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'COMPILE_STATUS', 35713, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LOW_FLOAT', 36336, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MEDIUM_FLOAT', 36337, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'HIGH_FLOAT', 36338, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'LOW_INT', 36339, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MEDIUM_INT', 36340, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'HIGH_INT', 36341, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER', 36160, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER', 36161, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RGBA4', 32854, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RGB5_A1', 32855, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RGB565', 36194, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_COMPONENT16', 33189, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_INDEX8', 36168, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_STENCIL', 34041, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_WIDTH', 36162, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_HEIGHT', 36163, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_INTERNAL_FORMAT', 36164, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_RED_SIZE', 36176, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_GREEN_SIZE', 36177, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_BLUE_SIZE', 36178, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_ALPHA_SIZE', 36179, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_DEPTH_SIZE', 36180, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_STENCIL_SIZE', 36181, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE', 36048, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME', 36049, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL', 36050, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE', 36051, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'COLOR_ATTACHMENT0', 36064, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_ATTACHMENT', 36096, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'STENCIL_ATTACHMENT', 36128, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'DEPTH_STENCIL_ATTACHMENT', 33306, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'NONE', 0, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_COMPLETE', 36053, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT', 36054, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT', 36055, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS', 36057, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_UNSUPPORTED', 36061, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'FRAMEBUFFER_BINDING', 36006, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'RENDERBUFFER_BINDING', 36007, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'MAX_RENDERBUFFER_SIZE', 34024, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'INVALID_FRAMEBUFFER_OPERATION', 1286, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNPACK_FLIP_Y_WEBGL', 37440, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNPACK_PREMULTIPLY_ALPHA_WEBGL', 37441, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'CONTEXT_LOST_WEBGL', 37442, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'UNPACK_COLORSPACE_CONVERSION_WEBGL', 37443, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'BROWSER_DEFAULT_WEBGL', 37444, false, undefined, false, undefined, undefined);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'activeTexture', function activeTexture() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.activeTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'attachShader', function attachShader() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.attachShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindAttribLocation', function bindAttribLocation() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindAttribLocation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindRenderbuffer', function bindRenderbuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendColor', function blendColor() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendColor);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendEquation', function blendEquation() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendEquation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendEquationSeparate', function blendEquationSeparate() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendEquationSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendFunc', function blendFunc() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendFunc);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendFuncSeparate', function blendFuncSeparate() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendFuncSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bufferData', function bufferData() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bufferData);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bufferSubData', function bufferSubData() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bufferSubData);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'checkFramebufferStatus', function checkFramebufferStatus() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.checkFramebufferStatus);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'compileShader', function compileShader() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.compileShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'compressedTexImage2D', function compressedTexImage2D() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.compressedTexImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'compressedTexSubImage2D', function compressedTexSubImage2D() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.compressedTexSubImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'copyTexImage2D', function copyTexImage2D() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.copyTexImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'copyTexSubImage2D', function copyTexSubImage2D() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.copyTexSubImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createBuffer', function createBuffer() {
    
    var buf = {}
    Object.setPrototypeOf(buf, WebGLBuffer.prototype)
    return buf

}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createBuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createFramebuffer', function createFramebuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createProgram', function createProgram() {
    
    var webGLProgram = {}
    Object.setPrototypeOf(webGLProgram, WebGLProgram.prototype)
    return webGLProgram
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createRenderbuffer', function createRenderbuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createShader', function createShader() {
    
    var webGLShader = {}
    Object.setPrototypeOf(webGLShader, WebGLShader.prototype)
    return webGLShader
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createTexture', function createTexture() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'cullFace', function cullFace() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.cullFace);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteBuffer', function deleteBuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteBuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteFramebuffer', function deleteFramebuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteProgram', function deleteProgram() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteRenderbuffer', function deleteRenderbuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteShader', function deleteShader() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteTexture', function deleteTexture() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'depthFunc', function depthFunc() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.depthFunc);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'depthMask', function depthMask() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.depthMask);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'depthRange', function depthRange() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.depthRange);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'detachShader', function detachShader() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.detachShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'disable', function disable() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.disable);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'enable', function enable() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.enable);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'finish', function finish() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.finish);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'flush', function flush() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.flush);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'framebufferRenderbuffer', function framebufferRenderbuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.framebufferRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'framebufferTexture2D', function framebufferTexture2D() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.framebufferTexture2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'frontFace', function frontFace() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.frontFace);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'generateMipmap', function generateMipmap() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.generateMipmap);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getActiveAttrib', function getActiveAttrib() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getActiveAttrib);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getActiveUniform', function getActiveUniform() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getActiveUniform);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getAttachedShaders', function getAttachedShaders() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getAttachedShaders);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getAttribLocation', function getAttribLocation(webGLProgram, pattern) {
    
//attrVertex
    return 0
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getAttribLocation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getBufferParameter', function getBufferParameter() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getBufferParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getContextAttributes', function getContextAttributes() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getContextAttributes);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getError', function getError() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getError);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getExtension', function getExtension() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getExtension);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getFramebufferAttachmentParameter', function getFramebufferAttachmentParameter() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getFramebufferAttachmentParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getParameter', function getParameter() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getProgramInfoLog', function getProgramInfoLog() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getProgramInfoLog);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getProgramParameter', function getProgramParameter() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getProgramParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getRenderbufferParameter', function getRenderbufferParameter() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getRenderbufferParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getShaderInfoLog', function getShaderInfoLog() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getShaderInfoLog);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getShaderParameter', function getShaderParameter() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getShaderParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getShaderPrecisionFormat', function getShaderPrecisionFormat(number1, number2) {
    
    var webGLShaderPrecisionFormat;
    if (number2===36338 ||  number2===36337||number2===36336) {
        webGLShaderPrecisionFormat = {
            precision: 23,
            rangeMax: 127,
            rangeMin: 127,
        }
    } else if (number2===36341 ||  number2===36340 || number2===36339) {
        webGLShaderPrecisionFormat = {
            precision: 0,
            rangeMax: 30,
            rangeMin: 31,
        }
    }

    Object.setPrototypeOf(webGLShaderPrecisionFormat, WebGLShaderPrecisionFormat.prototype);
    return webGLShaderPrecisionFormat;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getShaderPrecisionFormat);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getShaderSource', function getShaderSource() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getShaderSource);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getSupportedExtensions', function getSupportedExtensions() {
    
    return ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth", "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB", "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc", "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "WEBGL_multi_draw"]
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getSupportedExtensions);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getTexParameter', function getTexParameter() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getTexParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getUniform', function getUniform() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getUniform);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getUniformLocation', function getUniformLocation(webGLProgram, pattern) {
    
//uniformOffset
    var webGLUniformLocation = {}
    Object.setPrototypeOf(webGLUniformLocation, WebGLUniformLocation.prototype);
    return webGLUniformLocation;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getUniformLocation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getVertexAttrib', function getVertexAttrib() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getVertexAttrib);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getVertexAttribOffset', function getVertexAttribOffset() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getVertexAttribOffset);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'hint', function hint() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.hint);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isBuffer', function isBuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isBuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isContextLost', function isContextLost() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isContextLost);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isEnabled', function isEnabled() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isEnabled);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isFramebuffer', function isFramebuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isProgram', function isProgram() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isRenderbuffer', function isRenderbuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isShader', function isShader() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isTexture', function isTexture() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'lineWidth', function lineWidth() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.lineWidth);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'linkProgram', function linkProgram() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.linkProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'pixelStorei', function pixelStorei() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.pixelStorei);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'polygonOffset', function polygonOffset() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.polygonOffset);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'readPixels', function readPixels() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.readPixels);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'renderbufferStorage', function renderbufferStorage() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.renderbufferStorage);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'sampleCoverage', function sampleCoverage() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.sampleCoverage);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'shaderSource', function shaderSource() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.shaderSource);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilFunc', function stencilFunc() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilFunc);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilFuncSeparate', function stencilFuncSeparate() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilFuncSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilMask', function stencilMask() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilMask);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilMaskSeparate', function stencilMaskSeparate() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilMaskSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilOp', function stencilOp() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilOp);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilOpSeparate', function stencilOpSeparate() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilOpSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texImage2D', function texImage2D() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texParameterf', function texParameterf() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texParameterf);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texParameteri', function texParameteri() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texParameteri);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texSubImage2D', function texSubImage2D() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texSubImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'useProgram', function useProgram() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.useProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'validateProgram', function validateProgram() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.validateProgram);

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindBuffer', function bindBuffer() {
    

}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindBuffer);

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindFramebuffer', function bindFramebuffer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindTexture', function bindTexture() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clear', function clear() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clear);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clearColor', function clearColor() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clearColor);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clearDepth', function clearDepth() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clearDepth);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clearStencil', function clearStencil() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clearStencil);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'colorMask', function colorMask() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.colorMask);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'disableVertexAttribArray', function disableVertexAttribArray() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.disableVertexAttribArray);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawArrays', function drawArrays() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.drawArrays);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawElements', function drawElements() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.drawElements);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'enableVertexAttribArray', function enableVertexAttribArray() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.enableVertexAttribArray);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'scissor', function scissor() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.scissor);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1f', function uniform1f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1fv', function uniform1fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1i', function uniform1i() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1iv', function uniform1iv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2f', function uniform2f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2fv', function uniform2fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2i', function uniform2i() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2iv', function uniform2iv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3f', function uniform3f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3fv', function uniform3fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3i', function uniform3i() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3iv', function uniform3iv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4f', function uniform4f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4fv', function uniform4fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4i', function uniform4i() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4iv', function uniform4iv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniformMatrix2fv', function uniformMatrix2fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniformMatrix2fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniformMatrix3fv', function uniformMatrix3fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniformMatrix3fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniformMatrix4fv', function uniformMatrix4fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniformMatrix4fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib1f', function vertexAttrib1f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib1f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib1fv', function vertexAttrib1fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib1fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib2f', function vertexAttrib2f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib2f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib2fv', function vertexAttrib2fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib2fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib3f', function vertexAttrib3f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib3f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib3fv', function vertexAttrib3fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib3fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib4f', function vertexAttrib4f() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib4f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib4fv', function vertexAttrib4fv() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib4fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttribPointer', function vertexAttribPointer() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttribPointer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'viewport', function viewport() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.viewport);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'makeXRCompatible', function makeXRCompatible() {
    
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.makeXRCompatible);

WebGLBuffer = function WebGLBuffer() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(WebGLBuffer)
globalMy.rename(WebGLBuffer.prototype, "WebGLBuffer")



HTMLCollection = function HTMLCollection () {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(HTMLCollection);
globalMy.rename(HTMLCollection.prototype,"HTMLCollection")
globalMy.mydefineProperty(HTMLCollection.prototype,'length',0,true,undefined,undefined,
    function length(){
    console.log("HTMLCollection => get length")
    
    return 0},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCollection.prototype).length.get,'get');

globalMy.mydefineProperty(HTMLCollection.prototype,'item',function item(){},true,undefined,true);globalMy.functionprotect(HTMLCollection.prototype.item);
globalMy.mydefineProperty(HTMLCollection.prototype,'namedItem',function namedItem(){},true,undefined,true);globalMy.functionprotect(HTMLCollection.prototype.namedItem);
HTMLCollection.prototype.__proto__ = Object.prototype;

WindowProperties = function WindowProperties(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(WindowProperties);
globalMy.rename(WindowProperties.prototype,"WindowProperties")
WindowProperties.__proto__ = EventTarget;
Object.setPrototypeOf(WindowProperties.prototype,EventTarget.prototype)

Window = function Window() {
    //容易被检测到堆栈
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
};


globalMy.functionprotect(Window);
globalMy.rename(Window.prototype, 'Window');
Window.__proto__ = EventTarget;

delete global;
delete GLOBAL;
delete VMError;
delete Buffer;
delete KNBCore;

window = this;
self = window;
window.window = window;
window.top = window;
window.name = ''
window.__proto__ = Window.prototype;

window.__proto__.__proto__ = WindowProperties.prototype;

// Object.setPrototypeOf(Window.prototype, EventTarget.prototype)
// Object.setPrototypeOf(window,Window.prototype)
globalMy.mydefineProperty(Window.prototype, 'TEMPORARY', 0, false, true, false, undefined, undefined);
globalMy.mydefineProperty(Window.prototype, 'PERSISTENT', 1, false, true, false, undefined, undefined);




window.chrome = {
    app: {},
    csi: function () {
        debugger
    },
    loadTimes: function () {
        debugger
    },
    runtime: {}
}

setTimeout = function setTimeout(func, delay,args) {

    console.log("setTimeout func=>",func+'')
    console.log("setTimeout args=>",args+'')
    if(globalMy.Id[globalMy.Id.length-1]){
        var IntervalId = globalMy.Id[globalMy.Id.length-1] + 1
    }
    else{
        var IntervalId = 50
    }
    globalMy.Id.push(IntervalId);
    globalMy.func.push([func,args]);
    //返回一个id
    return IntervalId;

}



setInterval = function setInterval(func, delay, args) {
    
    console.log(func)
    if(globalMy.Id[globalMy.Id.length-1]){
       var IntervalId = globalMy.Id[globalMy.Id.length-1] + 1
    }
    else{
       var IntervalId = 50
    }
    globalMy.Id.push(IntervalId);
    // globalMy.func.push([func,args]);
    globalMy.func_interval.push([func,args]);
    // console.log("设置循环事件====>",func)
    //返回一个id
    return IntervalId;

}
clearInterval = function clearInterval() {
    
    return undefined;
}

clearTimeout = function clearTimeout() {
    
}

globalMy.functionprotect(setTimeout);
globalMy.functionprotect(clearTimeout);
globalMy.functionprotect(setInterval);
globalMy.functionprotect(clearInterval);

globalMy.mydefineProperty(window, 'screenX', undefined, true, true, undefined, function screenX() {
    
    return globalMy.value.Window_screenX;
}, function screenX(x) {
    
    globalMy.value.Window_screenX = x;
});
globalMy.value.Window_screenX = 16;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenX.get, 'get screenX')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenX.set, 'set screenX')
globalMy.mydefineProperty(window, 'screenY', undefined, true, true, undefined, function screenY() {
    
    return globalMy.value.Window_screenY;
}, function screenY(x) {
    
    globalMy.value.Window_screenY = x;
});
globalMy.value.Window_screenY = 91;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenY.get, 'get screenY')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).screenY.set, 'set screenY')
globalMy.mydefineProperty(window, 'pageYOffset', undefined, true, true, undefined, function pageYOffset() {
    
    return globalMy.value.Window_pageYOffset;
}, function pageYOffset(x) {
    
    globalMy.value.Window_pageYOffset = x;
});
globalMy.value.Window_pageYOffset = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageYOffset.get, 'get pageYOffset')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageYOffset.set, 'set pageYOffset')
globalMy.mydefineProperty(window, 'pageXOffset', undefined, true, true, undefined, function pageXOffset() {
    
    return globalMy.value.Window_pageXOffset;
}, function pageXOffset(x) {
    
    globalMy.value.Window_pageXOffset = x;
});
globalMy.value.Window_pageXOffset = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageXOffset.get, 'get pageXOffset')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).pageXOffset.set, 'set pageXOffset')
globalMy.mydefineProperty(window, 'outerWidth', undefined, true, true, undefined, function outerWidth() {
    
    return globalMy.value.Window_outerWidth;
}, function outerWidth(x) {
    
    globalMy.value.Window_outerWidth = x;
});
globalMy.value.Window_outerWidth = 1510;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).outerWidth.get, 'get outerWidth')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).outerWidth.set, 'set outerWidth')
globalMy.mydefineProperty(window, 'innerHeight', undefined, true, true, undefined, function innerHeight() {
    
    return globalMy.value.Window_innerHeight;
}, function innerHeight(x) {
    
    globalMy.value.Window_innerHeight = x;
});
globalMy.value.Window_innerHeight = 859;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerHeight.get, 'get innerHeight')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerHeight.set, 'set innerHeight')
globalMy.mydefineProperty(window, 'innerWidth', undefined, true, true, undefined, function innerWidth() {
    
    return globalMy.value.Window_innerWidth;
}, function innerWidth(x) {
    
    globalMy.value.Window_innerWidth = x;
});
globalMy.value.Window_innerWidth = 150;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerWidth.get, 'get innerWidth')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).innerWidth.set, 'set innerWidth')

globalMy.mydefineProperty(window, 'parent', undefined, true, true, undefined, function parent() {
    return window
}, function parent() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).parent.get, 'get parent')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).parent.set, 'set parent')
globalMy.mydefineProperty(window, 'frameElement', undefined, true, true, undefined, function frameElement() {
    return null
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).frameElement.get, 'get frameElement')
globalMy.mydefineProperty(window, 'postMessage', function postMessage() {
    
}, true, true, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).postMessage.value, 'postMessage')
globalMy.mydefineProperty(window, 'openDatabase', function openDatabase(db_name, version, table_name, size) {
    
    globalMy.element.db = {};
    globalMy.element.db.version = version;
    globalMy.element.db = globalMy.proxy(globalMy.element.db)
    globalMy.rename(globalMy.element.db, "zcjdb")
    Object.setPrototypeOf(globalMy.element.db, Database.prototype)
    return globalMy.element.db;

}, true, true, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).openDatabase.value, 'openDatabase')


globalMy.mydefineProperty(window, 'Image', function Image() {
    let image = {}
    Object.setPrototypeOf(image, HTMLImageElement.prototype)
    return image
}, true, false, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).Image.value, 'Image')

globalMy.mydefineProperty(window, 'webkitRequestAnimationFrame', function webkitRequestAnimationFrame() {
    
}, true, true, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).webkitRequestAnimationFrame.value, 'webkitRequestAnimationFrame')
globalMy.mydefineProperty(window, 'isSecureContext', undefined, true, true, undefined, function isSecureContext() {
    
    return true
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).isSecureContext.get, 'get isSecureContext')
globalMy.mydefineProperty(window, 'devicePixelRatio', undefined, true, true, undefined, function devicePixelRatio() {
    
    return globalMy.value.Window_devicePixelRatio;
}, function devicePixelRatio(x) {
    
    globalMy.value.Window_devicePixelRatio = x;
});
globalMy.value.Window_devicePixelRatio = 1;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).devicePixelRatio.get, 'get devicePixelRatio')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).devicePixelRatio.set, 'set devicePixelRatio')


// globalMy.mydefineProperty(window,'webkitRTCPeerConnection', RTCPeerConnection, true ,false, true,undefined,undefined);
// globalMy.functionprotect(Object.getOwnPropertyDescriptors(window).webkitRTCPeerConnection.value,'RTCPeerConnection')

Node = function Node() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
Node.__proto__ = EventTarget;
globalMy.rename(Node.prototype, "Node")
globalMy.functionprotect(Node);
// globalMy.functionprotect(Node.constructor);

globalMy.mydefineProperty(Node.prototype, 'nodeType', 1, true, undefined, undefined, function nodeType() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['nodeType'];
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeType.get, 'get');
globalMy.value.Node_nodeType = 1;
globalMy.mydefineProperty(Node.prototype, 'nodeName', '', true, undefined, undefined, function nodeName() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['nodeName']
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeName.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'baseURI', 'http://qikan.cqvip.com/Qikan/Search/Advance?from=index', true, undefined, undefined, function baseURI() {
    
    return globalMy.value.Node_baseURI;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).baseURI.get, 'get');
globalMy.value.Node_baseURI = 'http://qikan.cqvip.com/Qikan/Search/Advance?from=index';
globalMy.mydefineProperty(Node.prototype, 'isConnected', true, true, undefined, undefined, function isConnected() {
    
    return globalMy.value.Node_isConnected;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).isConnected.get, 'get');
globalMy.value.Node_isConnected = true;


globalMy.mydefineProperty(Node.prototype, 'ownerDocument', {}, true, undefined, undefined, function ownerDocument() {
    
    return document;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).ownerDocument.get, 'get');
// globalMy.value.Node_ownerDocument = {};

globalMy.mydefineProperty(Node.prototype, 'parentElement', {}, true, undefined, undefined, function parentElement() {
    
    console.log("parentElement =>")
    //需要遍历找到父节点
    var foundName = globalMy.foundName(this);
    if (globalMy.value[foundName]['parentElement']) {
        return globalMy.value[foundName]['parentElement']
    } else return null

    // return globalMy.value.Node_parentElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).parentElement.get, 'get');
globalMy.mydefineProperty(Node.prototype, 'parentNode', {}, true, undefined, undefined, function parentElement() {
    
    console.log("parentNode =>")
    //需要遍历找到父节点,也可以直接设置
    var foundName = globalMy.foundName(this);
    if (globalMy.value[foundName]['parentNode']) {
        return globalMy.value[foundName]['parentNode']
    } else return null
    // return globalMy.value.Node_parentElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).parentNode.get, 'get');


globalMy.mydefineProperty(Node.prototype, 'childNodes', {}, true, undefined, undefined, function childNodes() {
    
    //return 一个 NodeList
    console.log("childNodes =>")
    var foundName = globalMy.foundName(this);
    return globalMy.node[foundName]['childNodes']
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).childNodes.get, 'get');

//有待考究
globalMy.mydefineProperty(Node.prototype, 'firstChild', {}, true, undefined, undefined, function firstChild() {
    
    console.log("firstChild =>")
    //返回的是一个text
    return globalMy.getFirstChild(this);
    // return globalMy.node[foundName]['firstChild'];

}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).firstChild.get, 'get');

//有待考究
globalMy.mydefineProperty(Node.prototype, 'lastChild', {}, true, undefined, undefined, function lastChild() {
    
    
    return globalMy.getLastChild(this);
}, undefined);

//前后节点，有待考究
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).lastChild.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'previousSibling', {}, true, undefined, undefined, function previousSibling() {
    

    return globalMy.getPreviousSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).previousSibling.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'nextSibling', {}, true, undefined, undefined, function nextSibling() {
    

    return globalMy.getNextSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nextSibling.get, 'get');

globalMy.mydefineProperty(Node.prototype, 'nodeValue', {}, true, undefined, undefined, function nodeValue() {
    
    var foundName = globalMy.foundName(this);
    if (globalMy.value[foundName]['nodeValue']) {
        return globalMy.value[foundName]['nodeValue']
    } else return null
}, function nodeValue(val) {
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['nodeValue'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeValue.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).nodeValue.set, 'set');


globalMy.mydefineProperty(Node.prototype, 'textContent', '高级检索-【维普期刊官网】- 中文期刊服务平台'
    , true, undefined, undefined, function textContent() {
        
        return globalMy.value.Node_textContent;
    }, function textContent(val) {
        
        globalMy.value.Node_textContent = val;
    });
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).textContent.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Node.prototype).textContent.set, 'set');
globalMy.value.Node_textContent = '高级检索-【维普期刊官网】- 中文期刊服务平台';

globalMy.mydefineProperty(Node.prototype, 'ELEMENT_NODE', 1, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'ATTRIBUTE_NODE', 2, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'TEXT_NODE', 3, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'CDATA_SECTION_NODE', 4, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'ENTITY_REFERENCE_NODE', 5, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'ENTITY_NODE', 6, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'PROCESSING_INSTRUCTION_NODE', 7, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'COMMENT_NODE', 8, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_NODE', 9, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_TYPE_NODE', 10, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_FRAGMENT_NODE', 11, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'NOTATION_NODE', 12, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_DISCONNECTED', 1, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_PRECEDING', 2, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_FOLLOWING', 4, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINS', 8, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_CONTAINED_BY', 16, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 32, false, undefined, false);

globalMy.mydefineProperty(Node.prototype, 'appendChild', function appendChild(child) {
    
    console.log("appendChlid =>");
    //判断是不是document
    return globalMy.appendChild(this, child);

}, true, undefined, true);
globalMy.functionprotect(Node.prototype.appendChild);

globalMy.mydefineProperty(Node.prototype, 'cloneNode', function cloneNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.cloneNode);
globalMy.mydefineProperty(Node.prototype, 'compareDocumentPosition', function compareDocumentPosition() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.compareDocumentPosition);
globalMy.mydefineProperty(Node.prototype, 'contains', function contains() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.contains);
globalMy.mydefineProperty(Node.prototype, 'getRootNode', function getRootNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.getRootNode);
globalMy.mydefineProperty(Node.prototype, 'hasChildNodes', function hasChildNodes() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.hasChildNodes);
globalMy.mydefineProperty(Node.prototype, 'insertBefore', function insertBefore() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.insertBefore);
globalMy.mydefineProperty(Node.prototype, 'isDefaultNamespace', function isDefaultNamespace() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.isDefaultNamespace);
globalMy.mydefineProperty(Node.prototype, 'isEqualNode', function isEqualNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.isEqualNode);
globalMy.mydefineProperty(Node.prototype, 'isSameNode', function isSameNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.isSameNode);
globalMy.mydefineProperty(Node.prototype, 'lookupNamespaceURI', function lookupNamespaceURI() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.lookupNamespaceURI);
globalMy.mydefineProperty(Node.prototype, 'lookupPrefix', function lookupPrefix() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.lookupPrefix);
globalMy.mydefineProperty(Node.prototype, 'normalize', function normalize() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.normalize);
globalMy.mydefineProperty(Node.prototype, 'removeChild', function removeChild(child) {
    
    //判断是谁要删除子节点
    return globalMy.removeChild(this,child)

}, true, undefined, true);
globalMy.functionprotect(Node.prototype.removeChild);
globalMy.mydefineProperty(Node.prototype, 'replaceChild', function replaceChild() {
    
}, true, undefined, true);
globalMy.functionprotect(Node.prototype.replaceChild);
//继承
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);

DocumentType = function DocumentType(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.rename(DocumentType.prototype, "DocumentType")
globalMy.functionprotect(DocumentType);
Object.setPrototypeOf(DocumentType.prototype,Node.prototype)

globalMy.mydefineProperty(DocumentType.prototype,'name','html',true,undefined,undefined,function name(){return globalMy.value.DocumentType_name;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(DocumentType.prototype).name.get,'get');
globalMy.value.DocumentType_name='html';
globalMy.mydefineProperty(DocumentType.prototype,'publicId','-//W3C//DTD XHTML 1.0 Transitional//EN',true,undefined,undefined,function publicId(){return globalMy.value.DocumentType_publicId;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(DocumentType.prototype).publicId.get,'get');
globalMy.value.DocumentType_publicId='-//W3C//DTD XHTML 1.0 Transitional//EN';
globalMy.mydefineProperty(DocumentType.prototype,'systemId','http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd',true,undefined,undefined,function systemId(){return globalMy.value.DocumentType_systemId;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(DocumentType.prototype).systemId.get,'get');
globalMy.value.DocumentType_systemId='http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd';
globalMy.mydefineProperty(DocumentType.prototype,'after',function after(){},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.after);
globalMy.mydefineProperty(DocumentType.prototype,'before',function before(){},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.before);
globalMy.mydefineProperty(DocumentType.prototype,'remove',function remove(){},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.remove);
globalMy.mydefineProperty(DocumentType.prototype,'replaceWith',function replaceWith(){},true,undefined,true);globalMy.functionprotect(DocumentType.prototype.replaceWith);
CharacterData = function CharacterData() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(CharacterData);
globalMy.rename(CharacterData.prototype,"CharacterData");
Object.setPrototypeOf(CharacterData.prototype,Node.prototype);


globalMy.mydefineProperty(CharacterData.prototype,'data','',true,undefined,undefined,function data(){return globalMy.value.CharacterData_data;},function data(val){globalMy.value.CharacterData_data=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).data.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).data.set,'set');
globalMy.value.CharacterData_data='';
globalMy.mydefineProperty(CharacterData.prototype,'length',1,true,undefined,undefined,function length(){return globalMy.value.CharacterData_length;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).length.get,'get');
globalMy.value.CharacterData_length=1;
//好像只找element，不是text
globalMy.mydefineProperty(CharacterData.prototype,'previousElementSibling',{},true,undefined,undefined,
    function previousElementSibling(){
    return globalMy.getPreviousElementSibling(this);
        },undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).previousElementSibling.get,'get');

globalMy.mydefineProperty(CharacterData.prototype,'nextElementSibling',{},true,undefined,undefined,
    function nextElementSibling(){

        return globalMy.getNextElementSibling(this);
    },undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CharacterData.prototype).nextElementSibling.get,'get');

globalMy.mydefineProperty(CharacterData.prototype,'after',function after(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.after);
globalMy.mydefineProperty(CharacterData.prototype,'appendData',function appendData(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.appendData);
globalMy.mydefineProperty(CharacterData.prototype,'before',function before(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.before);
globalMy.mydefineProperty(CharacterData.prototype,'deleteData',function deleteData(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.deleteData);
globalMy.mydefineProperty(CharacterData.prototype,'insertData',function insertData(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.insertData);
globalMy.mydefineProperty(CharacterData.prototype,'remove',function remove(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.remove);
globalMy.mydefineProperty(CharacterData.prototype,'replaceData',function replaceData(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.replaceData);
globalMy.mydefineProperty(CharacterData.prototype,'replaceWith',function replaceWith(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.replaceWith);
globalMy.mydefineProperty(CharacterData.prototype,'substringData',function substringData(){},true,undefined,true);globalMy.functionprotect(CharacterData.prototype.substringData);

Text = function Text() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(Text);
globalMy.rename(Text.prototype,"Text");
Object.setPrototypeOf(Text.prototype,CharacterData.prototype);

globalMy.mydefineProperty(Text.prototype,'wholeText','',true,undefined,undefined,function wholeText(){return globalMy.value.Text_wholeText;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Text.prototype).wholeText.get,'get');
globalMy.value.Text_wholeText='';
globalMy.mydefineProperty(Text.prototype,'assignedSlot',{},true,undefined,undefined,function assignedSlot(){return globalMy.value.Text_assignedSlot;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Text.prototype).assignedSlot.get,'get');
globalMy.value.Text_assignedSlot={};
globalMy.mydefineProperty(Text.prototype,'splitText',function splitText(){},true,undefined,true);globalMy.functionprotect(Text.prototype.splitText);
MediaQueryList = function MediaQueryList(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(MediaQueryList);
globalMy.rename(MediaQueryList.prototype,"MediaQueryList");
Object.setPrototypeOf(MediaQueryList.prototype,EventTarget.prototype)

globalMy.mydefineProperty(MediaQueryList.prototype,'matches',true,true,true,undefined,
    function matches(){
    
    return globalMy.value.MediaQueryList_matches;
},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(MediaQueryList.prototype).matches.get,'get');

globalMy.value.MediaQueryList_matches = true;

globalMy.mydefineProperty(MediaQueryList.prototype,'media','',true,true,undefined,
    function media(){
    
    return globalMy.value.MediaQueryList_media;
},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(MediaQueryList.prototype).media.get,'get');


globalMy.mydefineProperty(MediaQueryList.prototype,'onchange','',true,true,undefined,
    function onchange(){
    
    return globalMy.value.MediaQueryList_onchange;
},
    function onchange(val){
    
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
Navigator = function Navigator(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(Navigator);
globalMy.rename(Navigator.prototype,"Navigator");
navigator = {};
Object.setPrototypeOf(navigator,Navigator.prototype)

globalMy.mydefineProperty(Navigator.prototype,'vendorSub','',true,undefined,undefined,function vendorSub(){return globalMy.value.Navigator_vendorSub;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).vendorSub.get,'get');
globalMy.value.Navigator_vendorSub='';
globalMy.mydefineProperty(Navigator.prototype,'productSub','20030107',true,undefined,undefined,function productSub(){return globalMy.value.Navigator_productSub;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).productSub.get,'get');
globalMy.value.Navigator_productSub='20030107';
globalMy.mydefineProperty(Navigator.prototype,'vendor','Google Inc.',true,undefined,undefined,function vendor(){return globalMy.value.Navigator_vendor;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).vendor.get,'get');
globalMy.value.Navigator_vendor='Google Inc.';
globalMy.mydefineProperty(Navigator.prototype,'maxTouchPoints',0,true,undefined,undefined,function maxTouchPoints(){return globalMy.value.Navigator_maxTouchPoints;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).maxTouchPoints.get,'get');
globalMy.value.Navigator_maxTouchPoints=0;
globalMy.mydefineProperty(Navigator.prototype,'userActivation',{},true,undefined,undefined,function userActivation(){return globalMy.value.Navigator_userActivation;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).userActivation.get,'get');
globalMy.value.Navigator_userActivation={};
globalMy.mydefineProperty(Navigator.prototype,'doNotTrack',{},true,undefined,undefined,function doNotTrack(){return globalMy.value.Navigator_doNotTrack;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).doNotTrack.get,'get');
globalMy.value.Navigator_doNotTrack={};
globalMy.mydefineProperty(Navigator.prototype,'geolocation',{},true,undefined,undefined,function geolocation(){return globalMy.value.Navigator_geolocation;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).geolocation.get,'get');
globalMy.value.Navigator_geolocation={};
globalMy.mydefineProperty(Navigator.prototype,'connection',{},true,undefined,undefined,function connection(){return globalMy.value.Navigator_connection;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).connection.get,'get');
globalMy.value.Navigator_connection={};
globalMy.mydefineProperty(Navigator.prototype,'plugins',{},true,undefined,undefined,function plugins(){return globalMy.value.Navigator_plugins;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).plugins.get,'get');
globalMy.value.Navigator_plugins={};
globalMy.mydefineProperty(Navigator.prototype,'mimeTypes',{},true,undefined,undefined,function mimeTypes(){return globalMy.value.Navigator_mimeTypes;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).mimeTypes.get,'get');
globalMy.value.Navigator_mimeTypes={};
globalMy.mydefineProperty(Navigator.prototype,'pdfViewerEnabled',true,true,undefined,undefined,function pdfViewerEnabled(){return globalMy.value.Navigator_pdfViewerEnabled;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).pdfViewerEnabled.get,'get');
globalMy.value.Navigator_pdfViewerEnabled=true;
globalMy.mydefineProperty(Navigator.prototype,'webkitTemporaryStorage',{},true,undefined,undefined,function webkitTemporaryStorage(){return globalMy.value.Navigator_webkitTemporaryStorage;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).webkitTemporaryStorage.get,'get');
globalMy.value.Navigator_webkitTemporaryStorage={};
globalMy.mydefineProperty(Navigator.prototype,'webkitPersistentStorage',{},true,undefined,undefined,function webkitPersistentStorage(){return globalMy.value.Navigator_webkitPersistentStorage;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).webkitPersistentStorage.get,'get');
globalMy.value.Navigator_webkitPersistentStorage={};
globalMy.mydefineProperty(Navigator.prototype,'hardwareConcurrency',8,true,undefined,undefined,function hardwareConcurrency(){return globalMy.value.Navigator_hardwareConcurrency;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).hardwareConcurrency.get,'get');
globalMy.value.Navigator_hardwareConcurrency=8;
globalMy.mydefineProperty(Navigator.prototype,'cookieEnabled',true,true,undefined,undefined,function cookieEnabled(){return globalMy.value.Navigator_cookieEnabled;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).cookieEnabled.get,'get');
globalMy.value.Navigator_cookieEnabled=true;
globalMy.mydefineProperty(Navigator.prototype,'appCodeName','Mozilla',true,undefined,undefined,function appCodeName(){return globalMy.value.Navigator_appCodeName;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).appCodeName.get,'get');
globalMy.value.Navigator_appCodeName='Mozilla';
globalMy.mydefineProperty(Navigator.prototype,'appName','Netscape',true,undefined,undefined,function appName(){return globalMy.value.Navigator_appName;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).appName.get,'get');
globalMy.value.Navigator_appName='Netscape';
globalMy.mydefineProperty(Navigator.prototype,'appVersion','5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',true,undefined,undefined,function appVersion(){return globalMy.value.Navigator_appVersion;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).appVersion.get,'get');
globalMy.value.Navigator_appVersion='5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36';
globalMy.mydefineProperty(Navigator.prototype,'platform','Win32',true,undefined,undefined,function platform(){return globalMy.value.Navigator_platform;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).platform.get,'get');
globalMy.value.Navigator_platform='Win32';
globalMy.mydefineProperty(Navigator.prototype,'product','Gecko',true,undefined,undefined,function product(){return globalMy.value.Navigator_product;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).product.get,'get');
globalMy.value.Navigator_product='Gecko';
globalMy.mydefineProperty(Navigator.prototype,'userAgent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',true,undefined,undefined,function userAgent(){return globalMy.value.Navigator_userAgent;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).userAgent.get,'get');
globalMy.value.Navigator_userAgent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36';
globalMy.mydefineProperty(Navigator.prototype,'language','zh-CN',true,undefined,undefined,function language(){return globalMy.value.Navigator_language;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).language.get,'get');
globalMy.value.Navigator_language='zh-CN';
globalMy.mydefineProperty(Navigator.prototype,'languages',['zh-CN'],true,undefined,undefined,function languages(){return globalMy.value.Navigator_languages;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).languages.get,'get');
globalMy.value.Navigator_languages=['zh-CN'];
globalMy.mydefineProperty(Navigator.prototype,'onLine',true,true,undefined,undefined,function onLine(){return globalMy.value.Navigator_onLine;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).onLine.get,'get');
globalMy.value.Navigator_onLine=true;
globalMy.mydefineProperty(Navigator.prototype,'webdriver',false,true,undefined,undefined,function webdriver(){return globalMy.value.Navigator_webdriver;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).webdriver.get,'get');
globalMy.value.Navigator_webdriver=false;
globalMy.mydefineProperty(Navigator.prototype,'getBattery',function getBattery(){
    
    return new Promise((resolve,reject)=>{
        let arg  = {};
        Object.setPrototypeOf(arg, BatteryManager.prototype)
        resolve(arg)})

},true,undefined,true);globalMy.functionprotect(Navigator.prototype.getBattery);
globalMy.mydefineProperty(Navigator.prototype,'getGamepads',function getGamepads(){},true,undefined,true);globalMy.functionprotect(Navigator.prototype.getGamepads);
globalMy.mydefineProperty(Navigator.prototype,'javaEnabled',function javaEnabled(){},true,undefined,true);globalMy.functionprotect(Navigator.prototype.javaEnabled);
globalMy.mydefineProperty(Navigator.prototype,'sendBeacon',function sendBeacon(){},true,undefined,true);globalMy.functionprotect(Navigator.prototype.sendBeacon);
globalMy.mydefineProperty(Navigator.prototype,'vibrate',function vibrate(){},true,undefined,true);globalMy.functionprotect(Navigator.prototype.vibrate);

globalMy.mydefineProperty(Navigator.prototype,'scheduling',{},true,undefined,undefined,function scheduling(){return globalMy.value.Navigator_scheduling;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).scheduling.get,'get');
globalMy.value.Navigator_scheduling={};
globalMy.mydefineProperty(Navigator.prototype,'ink',{},true,undefined,undefined,function ink(){return globalMy.value.Navigator_ink;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).ink.get,'get');
globalMy.value.Navigator_ink={};
globalMy.mydefineProperty(Navigator.prototype,'mediaCapabilities',{},true,undefined,undefined,function mediaCapabilities(){return globalMy.value.Navigator_mediaCapabilities;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).mediaCapabilities.get,'get');
globalMy.value.Navigator_mediaCapabilities={};
globalMy.mydefineProperty(Navigator.prototype,'mediaSession',{},true,undefined,undefined,function mediaSession(){return globalMy.value.Navigator_mediaSession;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).mediaSession.get,'get');
globalMy.value.Navigator_mediaSession={};
globalMy.mydefineProperty(Navigator.prototype,'permissions',{},true,undefined,undefined,function permissions(){return globalMy.value.Navigator_permissions;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(Navigator.prototype).permissions.get,'get');
globalMy.value.Navigator_permissions={};

ScreenOrientation = function ScreenOrientation() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(ScreenOrientation);
globalMy.rename(ScreenOrientation.prototype, "ScreenOrientation")
ScreenOrientation.__proto__ = EventTarget;
Object.setPrototypeOf(ScreenOrientation.prototype, EventTarget.prototype);

globalMy.mydefineProperty(ScreenOrientation.prototype, 'angle', 0, true, undefined, undefined, function angle() {
    
    return globalMy.value.ScreenOrientation_angle;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).angle.get, 'get');
globalMy.value.ScreenOrientation_angle = 0;
globalMy.mydefineProperty(ScreenOrientation.prototype, 'type', 'landscape-primary', true, undefined, undefined, function type() {
    
    return globalMy.value.ScreenOrientation_type;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).type.get, 'get');
globalMy.value.ScreenOrientation_type = 'landscape-primary';
globalMy.mydefineProperty(ScreenOrientation.prototype, 'onchange', {}, true, undefined, undefined, function onchange() {
    
    return globalMy.value.ScreenOrientation_onchange;
}, function onchange(val) {
    
    globalMy.value.ScreenOrientation_onchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).onchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(ScreenOrientation.prototype).onchange.set, 'set');
globalMy.value.ScreenOrientation_onchange = {};
globalMy.mydefineProperty(ScreenOrientation.prototype, 'lock', function lock() {
    
}, true, undefined, true);
globalMy.functionprotect(ScreenOrientation.prototype.lock);
globalMy.mydefineProperty(ScreenOrientation.prototype, 'unlock', function unlock() {
    
}, true, undefined, true);
globalMy.functionprotect(ScreenOrientation.prototype.unlock);

Screen = function Screen() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(Screen);
globalMy.rename(Screen.prototype, "Screen")
Screen.__proto__ = EventTarget;
Object.setPrototypeOf(Screen.prototype, EventTarget.prototype);

screen = {}
Object.setPrototypeOf(screen,Screen.prototype)

globalMy.mydefineProperty(Screen.prototype, 'availWidth', 1920, true, undefined, undefined, function availWidth() {
    
    return globalMy.value.Screen_availWidth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availWidth.get, 'get');
globalMy.value.Screen_availWidth = 1920;
globalMy.mydefineProperty(Screen.prototype, 'availHeight', 1040, true, undefined, undefined, function availHeight() {
    
    return globalMy.value.Screen_availHeight;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availHeight.get, 'get');
globalMy.value.Screen_availHeight = 1040;
globalMy.mydefineProperty(Screen.prototype, 'width', 1920, true, undefined, undefined, function width() {
    
    return globalMy.value.Screen_width;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).width.get, 'get');
globalMy.value.Screen_width = 1920;
globalMy.mydefineProperty(Screen.prototype, 'height', 1080, true, undefined, undefined, function height() {
    
    return globalMy.value.Screen_height;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).height.get, 'get');
globalMy.value.Screen_height = 1080;
globalMy.mydefineProperty(Screen.prototype, 'colorDepth', 24, true, undefined, undefined, function colorDepth() {
    
    return globalMy.value.Screen_colorDepth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).colorDepth.get, 'get');
globalMy.value.Screen_colorDepth = 24;
globalMy.mydefineProperty(Screen.prototype, 'pixelDepth', 24, true, undefined, undefined, function pixelDepth() {
    
    return globalMy.value.Screen_pixelDepth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).pixelDepth.get, 'get');
globalMy.value.Screen_pixelDepth = 24;
globalMy.mydefineProperty(Screen.prototype, 'availLeft', 0, true, undefined, undefined, function availLeft() {
    
    return globalMy.value.Screen_availLeft;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availLeft.get, 'get');
globalMy.value.Screen_availLeft = 0;
globalMy.mydefineProperty(Screen.prototype, 'availTop', 0, true, undefined, undefined, function availTop() {
    
    return globalMy.value.Screen_availTop;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).availTop.get, 'get');
globalMy.value.Screen_availTop = 0;
globalMy.mydefineProperty(Screen.prototype, 'orientation', {}, true, undefined, undefined, function orientation() {
    
    return globalMy.value.Screen_orientation;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Screen.prototype).orientation.get, 'get');
globalMy.value.Screen_orientation = {};
Object.setPrototypeOf(globalMy.value.Screen_orientation,ScreenOrientation.prototype)




Storage = function Storage(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(Storage);
globalMy.rename(Storage.prototype,"Storage");
localStorage = {};
Object.setPrototypeOf(localStorage,Storage.prototype)


globalMy.mydefineProperty(Storage.prototype,'length',30,true,true,true)
globalMy.mydefineProperty(Storage.prototype,'clear',function clear(){},true,true,true);globalMy.functionprotect(Storage.prototype.clear);
globalMy.mydefineProperty(Storage.prototype,'getItem',function getItem(tagName){
    
    return localStorage[tagName+''];
},true,true,true);globalMy.functionprotect(Storage.prototype.getItem);
globalMy.mydefineProperty(Storage.prototype,'key',function key(){},true,true,true);globalMy.functionprotect(Storage.prototype.key);
globalMy.mydefineProperty(Storage.prototype,'removeItem',function removeItem(tagName){
    
    var result = delete localStorage[tagName+ ''];
    return result;
    },true,true,true);globalMy.functionprotect(Storage.prototype.removeItem);
globalMy.mydefineProperty(Storage.prototype,'setItem',function setItem(tagName,value){
    
    localStorage[tagName+ ''] = value;
    return undefined;
},true,true,true);globalMy.functionprotect(Storage.prototype.setItem);



//瑞数5
globalMy.mydefineProperty(localStorage,'$_nd',undefined,true, undefined, undefined,function $_nd(){
    return globalMy.value["$_nd"];
},function $_nd(val){
    globalMy.value["$_nd"] = val + ''
});globalMy.mydefineProperty(localStorage,'__#classType','localStorage',true,undefined,true,undefined,undefined);
globalMy.mydefineProperty(localStorage,'$_cDro',undefined,true,undefined,true,undefined,undefined);
globalMy.mydefineProperty(localStorage,'$_YWTU',undefined,true,undefined,true,undefined,undefined);


XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(XMLHttpRequestEventTarget);
globalMy.rename(XMLHttpRequestEventTarget.prototype,"XMLHttpRequestEventTarget");

Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype,EventTarget.prototype);


XMLHttpRequest = function XMLHttpRequest(){
}

globalMy.mydefineProperty(XMLHttpRequest.prototype,'onreadystatechange', undefined, true ,true, undefined,function onreadystatechange(){
    
    for (let i = 0; i<globalMy.value._onreadystatechange.length; i++){
        if (globalMy.value._onreadystatechange[i][0] === this){
            return globalMy.value._onreadystatechange[i][1]
        }
    }
    return null
    },function onreadystatechange(x){
    console.log(`XMLHttpRequest[onreadystatechange] => [${x}]`)
    
    globalMy.value._onreadystatechange.push([this, x])

});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).onreadystatechange.get,'get onreadystatechange')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).onreadystatechange.set,'set onreadystatechange')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'readyState', undefined, true ,true, undefined,function readyState(){return globalMy.value.XMLHttpRequest_readyState;},undefined);
globalMy.value.XMLHttpRequest_readyState = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).readyState.get,'get readyState')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'timeout', undefined, true ,true, undefined,function timeout(){return globalMy.value.XMLHttpRequest_timeout;},function timeout(x){ globalMy.value.XMLHttpRequest_timeout = x;});
globalMy.value.XMLHttpRequest_timeout = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).timeout.get,'get timeout')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).timeout.set,'set timeout')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'withCredentials', undefined, true ,true, undefined,function withCredentials(){},function withCredentials(x){
    console.log(`XMLHttpRequest[withCredentials] => [${x}]`)
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).withCredentials.get,'get withCredentials')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).withCredentials.set,'set withCredentials')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'upload', undefined, true ,true, undefined,function upload(){
    
    // let s = {}
    // s.__proto__ = XMLHttpRequestUpload.prototype
    // return s
    },undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).upload.get,'get upload')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseURL', undefined, true ,true, undefined,function responseURL(){return globalMy.value.XMLHttpRequest_responseURL;},undefined);
globalMy.value.XMLHttpRequest_responseURL = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseURL.get,'get responseURL')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'status', undefined, true ,true, undefined,function status(){return globalMy.value.XMLHttpRequest_status;},undefined);
globalMy.value.XMLHttpRequest_status = 0;
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).status.get,'get status')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'statusText', undefined, true ,true, undefined,function statusText(){return globalMy.value.XMLHttpRequest_statusText;},undefined);
globalMy.value.XMLHttpRequest_statusText = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).statusText.get,'get statusText')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseType', undefined, true ,true, undefined,function responseType(){return globalMy.value.XMLHttpRequest_responseType;},function responseType(x){ globalMy.value.XMLHttpRequest_responseType = x;});
globalMy.value.XMLHttpRequest_responseType = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseType.get,'get responseType')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseType.set,'set responseType')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'response', undefined, true ,true, undefined,function response(){return globalMy.value.XMLHttpRequest_response;},undefined);
globalMy.value.XMLHttpRequest_response = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).response.get,'get response')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseText', undefined, true ,true, undefined,function responseText(){return globalMy.value.XMLHttpRequest_responseText;},undefined);
globalMy.value.XMLHttpRequest_responseText = "";
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseText.get,'get responseText')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'responseXML', undefined, true ,true, undefined,function responseXML(){},undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).responseXML.get,'get responseXML')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'UNSENT', 0, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_UNSENT = 0;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'OPENED', 1, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_OPENED = 1;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'HEADERS_RECEIVED', 2, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_HEADERS_RECEIVED = 2;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'LOADING', 3, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_LOADING = 3;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'DONE', 4, false ,true, false,undefined,undefined);
globalMy.value.XMLHttpRequest_DONE = 4;
globalMy.mydefineProperty(XMLHttpRequest.prototype,'abort', function abort() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).abort.value,'abort')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'getAllResponseHeaders', function getAllResponseHeaders() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).getAllResponseHeaders.value,'getAllResponseHeaders')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'getResponseHeader', function getResponseHeader() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).getResponseHeader.value,'getResponseHeader')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'open', function open() {
    console.log(`XMLHttpRequest[open] => [${JSON.stringify(arguments)}]`)
    window.url = arguments[1];
    console.log(window.url);
    }, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).open.value,'open')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'overrideMimeType', function overrideMimeType() {}, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).overrideMimeType.value,'overrideMimeType')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'send', function send() {
    console.log(`XMLHttpRequest[send] => [${JSON.stringify(arguments)}]`)
    

    }, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).send.value,'send')
globalMy.mydefineProperty(XMLHttpRequest.prototype,'setRequestHeader', function setRequestHeader(x,y) {
    console.log(`XMLHttpRequest[setRequestHeader] => key[${x}] value[${y}]`)
    
    }, true ,true, true,undefined,undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(XMLHttpRequest.prototype).setRequestHeader.value,'setRequestHeader')
Object.setPrototypeOf(XMLHttpRequest.prototype,XMLHttpRequestEventTarget.prototype)
XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget;
globalMy.functionprotect(XMLHttpRequest)
globalMy.rename(XMLHttpRequest.prototype,"XMLHttpRequest")

DOMParser = function DOMParser() {
    
}
globalMy.functionprotect(DOMParser);
Element = function Element() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(Element);
globalMy.rename(Element.prototype, "Element")
Object.setPrototypeOf(Element.prototype, Node.prototype)
Element.__proto__ = Node;

globalMy.mydefineProperty(Element.prototype, 'namespaceURI', 'http://www.w3.org/1999/xhtml', true, undefined, undefined, function namespaceURI() {
    
    return globalMy.value.Element_namespaceURI;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).namespaceURI.get, 'get');
globalMy.value.Element_namespaceURI = 'http://www.w3.org/1999/xhtml';
globalMy.mydefineProperty(Element.prototype, 'prefix', {}, true, undefined, undefined, function prefix() {
    
    return globalMy.value.Element_prefix;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).prefix.get, 'get');
globalMy.value.Element_prefix = {};

globalMy.mydefineProperty(Element.prototype, 'localName', '', true, undefined, undefined,
    function localName() {
        
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName]['localName']){
    return globalMy.value[foundName]['localName'];
    }
    else return null;
    }, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).localName.get, 'get');


globalMy.mydefineProperty(Element.prototype, 'tagName', '', true, undefined, undefined, function tagName() {
    
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName]['tagName']){
    return globalMy.value[foundName]['tagName'];
    }
    else return null;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).tagName.get, 'get');


globalMy.mydefineProperty(Element.prototype, 'id', '', true, undefined, undefined, function id() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['id'];
}, function id(val) {
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['id'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).id.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).id.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'className', '', true, undefined, undefined, function className() {
    
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName]['className']){
    return globalMy.value[foundName]['className'];
    }
    else return null

}, function className(val) {
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['className'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).className.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).className.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'classList', {}, true, undefined, undefined, function classList() {
    
    return globalMy.value.Element_classList;
}, function classList(val) {
    
    globalMy.value.Element_classList = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).classList.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).classList.set, 'set');
globalMy.value.Element_classList = {};
globalMy.mydefineProperty(Element.prototype, 'slot', '', true, undefined, undefined, function slot() {
    
    return globalMy.value.Element_slot;
}, function slot(val) {
    
    globalMy.value.Element_slot = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).slot.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).slot.set, 'set');
globalMy.value.Element_slot = '';

globalMy.mydefineProperty(Element.prototype, 'attributes', {}, true, undefined, undefined, function attributes() {
    
    return globalMy.value.Element_attributes;
}, undefined);

globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).attributes.get, 'get');
globalMy.value.Element_attributes = {};
globalMy.mydefineProperty(Element.prototype, 'shadowRoot', {}, true, undefined, undefined, function shadowRoot() {
    
    return globalMy.value.Element_shadowRoot;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).shadowRoot.get, 'get');
globalMy.value.Element_shadowRoot = {};
globalMy.mydefineProperty(Element.prototype, 'part', {}, true, undefined, undefined, function part() {
    
    return globalMy.value.Element_part;
}, function part(val) {
    
    globalMy.value.Element_part = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).part.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).part.set, 'set');
globalMy.value.Element_part = {};
globalMy.mydefineProperty(Element.prototype, 'assignedSlot', {}, true, undefined, undefined, function assignedSlot() {
    
    return globalMy.value.Element_assignedSlot;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).assignedSlot.get, 'get');
globalMy.value.Element_assignedSlot = {};
globalMy.mydefineProperty(Element.prototype, 'innerHTML', '', true, undefined, undefined, function innerHTML() {
    

    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['innerHTML'];

},
    function innerHTML(val) {
    
    //这个特么算子节点
    var foundName = globalMy.foundName(this);
    if (val.indexOf("<")  === 0 && val.indexOf("<!") !== 0) {

        var span = globalMy.getMidStr("<", " ", val)
        var dom = document.createElement(span);
        var key = globalMy.getKey(val);
        var val = globalMy.getVal(val);
        for (var i = 0; i < key.length; i++) {
            dom[key[i]] = val[i];
        }
        if(dom["type"] === "hidden"){
            dom['hidden'] = true
        }
        else dom['hidden'] = false

        if (globalMy.value[foundName]['innerHTML'] === '') {
            this.appendChild(dom);
    } else {
        //    需要remove
        this.removeChild(this.children[0]);
    }
    }
    globalMy.value[foundName]['innerHTML'] = val;



});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).innerHTML.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).innerHTML.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'outerHTML', '', true, undefined, undefined,
    function outerHTML() {
        
        var foundName = globalMy.foundName(this);
        return globalMy.value[foundName]['outerHTML'];
    },
    function outerHTML(val) {
        
        var foundName = globalMy.foundName(this);
        globalMy.value[foundName]['outerHTML'] = val;
    });
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).outerHTML.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).outerHTML.set, 'set');


globalMy.mydefineProperty(Element.prototype, 'scrollTop', 0, true, undefined, undefined, function scrollTop() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['scrollTop'];
}, function scrollTop(val) {
    
    globalMy.value[foundName]['scrollTop'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollTop.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollTop.set, 'set');

globalMy.mydefineProperty(Element.prototype, 'scrollLeft', 0, true, undefined, undefined, function scrollLeft() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['scrollLeft'];
}, function scrollLeft(val) {
    
    globalMy.value[foundName]['scrollLeft'] = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollLeft.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollLeft.set, 'set');

globalMy.mydefineProperty(Element.prototype, 'scrollWidth', 0, true, undefined, undefined, function scrollWidth() {
    
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollWidth.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'scrollHeight', 0, true, undefined, undefined, function scrollHeight() {
    
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).scrollHeight.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientTop', 0, true, undefined, undefined, function clientTop() {
    
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientTop.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientLeft', 0, true, undefined, undefined, function clientLeft() {
    
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientLeft.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientWidth', 0, true, undefined, undefined, function clientWidth() {
    
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientWidth.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'clientHeight', 0, true, undefined, undefined, function clientHeight() {
    
    return 0;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).clientHeight.get, 'get');


globalMy.mydefineProperty(Element.prototype, 'attributeStyleMap', {}, true, undefined, undefined, function attributeStyleMap() {
    
    return globalMy.value.Element_attributeStyleMap;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).attributeStyleMap.get, 'get');
globalMy.value.Element_attributeStyleMap = {};
globalMy.mydefineProperty(Element.prototype, 'onbeforecopy', {}, true, undefined, undefined, function onbeforecopy() {
    
    return globalMy.value.Element_onbeforecopy;
}, function onbeforecopy(val) {
    
    globalMy.value.Element_onbeforecopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecopy.set, 'set');
globalMy.value.Element_onbeforecopy = {};
globalMy.mydefineProperty(Element.prototype, 'onbeforecut', {}, true, undefined, undefined, function onbeforecut() {
    
    return globalMy.value.Element_onbeforecut;
}, function onbeforecut(val) {
    
    globalMy.value.Element_onbeforecut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforecut.set, 'set');
globalMy.value.Element_onbeforecut = {};
globalMy.mydefineProperty(Element.prototype, 'onbeforepaste', {}, true, undefined, undefined, function onbeforepaste() {
    
    return globalMy.value.Element_onbeforepaste;
}, function onbeforepaste(val) {
    
    globalMy.value.Element_onbeforepaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforepaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onbeforepaste.set, 'set');
globalMy.value.Element_onbeforepaste = {};
globalMy.mydefineProperty(Element.prototype, 'onsearch', {}, true, undefined, undefined, function onsearch() {
    
    return globalMy.value.Element_onsearch;
}, function onsearch(val) {
    
    globalMy.value.Element_onsearch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onsearch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onsearch.set, 'set');
globalMy.value.Element_onsearch = {};
globalMy.mydefineProperty(Element.prototype, 'elementTiming', '', true, undefined, undefined, function elementTiming() {
    
    return globalMy.value.Element_elementTiming;
}, function elementTiming(val) {
    
    globalMy.value.Element_elementTiming = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).elementTiming.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).elementTiming.set, 'set');
globalMy.value.Element_elementTiming = '';
globalMy.mydefineProperty(Element.prototype, 'onfullscreenchange', {}, true, undefined, undefined, function onfullscreenchange() {
    
    return globalMy.value.Element_onfullscreenchange;
}, function onfullscreenchange(val) {
    
    globalMy.value.Element_onfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenchange.set, 'set');
globalMy.value.Element_onfullscreenchange = {};
globalMy.mydefineProperty(Element.prototype, 'onfullscreenerror', {}, true, undefined, undefined, function onfullscreenerror() {
    
    return globalMy.value.Element_onfullscreenerror;
}, function onfullscreenerror(val) {
    
    globalMy.value.Element_onfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onfullscreenerror.set, 'set');
globalMy.value.Element_onfullscreenerror = {};
globalMy.mydefineProperty(Element.prototype, 'onwebkitfullscreenchange', {}, true, undefined, undefined, function onwebkitfullscreenchange() {
    
    return globalMy.value.Element_onwebkitfullscreenchange;
}, function onwebkitfullscreenchange(val) {
    
    globalMy.value.Element_onwebkitfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenchange.set, 'set');
globalMy.value.Element_onwebkitfullscreenchange = {};
globalMy.mydefineProperty(Element.prototype, 'onwebkitfullscreenerror', {}, true, undefined, undefined, function onwebkitfullscreenerror() {
    
    return globalMy.value.Element_onwebkitfullscreenerror;
}, function onwebkitfullscreenerror(val) {
    
    globalMy.value.Element_onwebkitfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).onwebkitfullscreenerror.set, 'set');
globalMy.value.Element_onwebkitfullscreenerror = {};

globalMy.mydefineProperty(Element.prototype, 'children', {}, true, undefined, undefined, function children() {
    
    return globalMy.getChildren(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).children.get, 'get');



//特殊且重要
globalMy.mydefineProperty(Element.prototype, 'firstElementChild', {}, true, undefined, undefined, function firstElementChild() {
    
    return globalMy.getFirstElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).firstElementChild.get, 'get');
globalMy.value.Element_firstElementChild = {};
globalMy.mydefineProperty(Element.prototype, 'lastElementChild', {}, true, undefined, undefined, function lastElementChild() {
    
    return globalMy.getLastElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).lastElementChild.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'childElementCount', 0, true, undefined, undefined, function childElementCount() {

return globalMy.getChildElementCount(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).childElementCount.get, 'get');



globalMy.mydefineProperty(Element.prototype, 'previousElementSibling', {}, true, undefined, undefined, function previousElementSibling() {
    
    return globalMy.getPreviousElementSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).previousElementSibling.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'nextElementSibling', {}, true, undefined, undefined, function nextElementSibling() {
    
    return globalMy.getNextElementSibling(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).nextElementSibling.get, 'get');

globalMy.mydefineProperty(Element.prototype, 'after', function after() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.after);
globalMy.mydefineProperty(Element.prototype, 'animate', function animate() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.animate);
globalMy.mydefineProperty(Element.prototype, 'append', function append() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.append);
globalMy.mydefineProperty(Element.prototype, 'attachShadow', function attachShadow() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.attachShadow);
globalMy.mydefineProperty(Element.prototype, 'before', function before() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.before);
globalMy.mydefineProperty(Element.prototype, 'closest', function closest() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.closest);
globalMy.mydefineProperty(Element.prototype, 'computedStyleMap', function computedStyleMap() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.computedStyleMap);
globalMy.mydefineProperty(Element.prototype, 'getAttribute', function getAttribute(key) {
    
    var foundName = globalMy.foundName(this);
    if(globalMy.value[foundName][key]){
        return globalMy.value[foundName][key]
    }
    else return null;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttribute);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNS', function getAttributeNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNames', function getAttributeNames() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNames);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNode', function getAttributeNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNode);
globalMy.mydefineProperty(Element.prototype, 'getAttributeNodeNS', function getAttributeNodeNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAttributeNodeNS);
globalMy.mydefineProperty(Element.prototype, 'getBoundingClientRect', function getBoundingClientRect() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getBoundingClientRect);
globalMy.mydefineProperty(Element.prototype, 'getClientRects', function getClientRects() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getClientRects);
globalMy.mydefineProperty(Element.prototype, 'getElementsByClassName', function getElementsByClassName() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getElementsByClassName);
globalMy.mydefineProperty(Element.prototype, 'getElementsByTagName', function getElementsByTagName(tagName) {
    
    var tag_name = tagName.toLowerCase() + "";
    let type;
    switch (tag_name) {
        case 'div':
            type = HTMLDivElement.prototype
            break
        case 'meta':
            type = HTMLMetaElement.prototype
            break
        case 'script':
            type = HTMLScriptElement.prototype
            break
        case 'i':
            type = HTMLElement.prototype
            break
        case "base":
            type = ""
            break
        case "canvas":
            type = HTMLCanvasElement.prototype
            break
        case "video":
            type = HTMLVideoElement.prototype
            break
        case "audio":
            type = HTMLAudioElement.prototype
            break
        default:
            debugger
    }
    // var foundName = globalMy.foundName(this);
    // var obj = globalMy.node[foundName]
    // return obj[tag_name];
    return globalMy.getElementsByTagName(this,tag_name)


}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getElementsByTagName);
globalMy.mydefineProperty(Element.prototype, 'getElementsByTagNameNS', function getElementsByTagNameNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getElementsByTagNameNS);
globalMy.mydefineProperty(Element.prototype, 'getInnerHTML', function getInnerHTML() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getInnerHTML);
globalMy.mydefineProperty(Element.prototype, 'hasAttribute', function hasAttribute() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasAttribute);
globalMy.mydefineProperty(Element.prototype, 'hasAttributeNS', function hasAttributeNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'hasAttributes', function hasAttributes() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasAttributes);
globalMy.mydefineProperty(Element.prototype, 'hasPointerCapture', function hasPointerCapture() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.hasPointerCapture);
globalMy.mydefineProperty(Element.prototype, 'insertAdjacentElement', function insertAdjacentElement() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.insertAdjacentElement);
globalMy.mydefineProperty(Element.prototype, 'insertAdjacentHTML', function insertAdjacentHTML() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.insertAdjacentHTML);
globalMy.mydefineProperty(Element.prototype, 'insertAdjacentText', function insertAdjacentText() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.insertAdjacentText);
globalMy.mydefineProperty(Element.prototype, 'matches', function matches() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.matches);
globalMy.mydefineProperty(Element.prototype, 'prepend', function prepend() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.prepend);
globalMy.mydefineProperty(Element.prototype, 'querySelector', function querySelector() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.querySelector);
globalMy.mydefineProperty(Element.prototype, 'querySelectorAll', function querySelectorAll() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.querySelectorAll);
globalMy.mydefineProperty(Element.prototype, 'releasePointerCapture', function releasePointerCapture() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.releasePointerCapture);
globalMy.mydefineProperty(Element.prototype, 'remove', function remove() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.remove);
globalMy.mydefineProperty(Element.prototype, 'removeAttribute', function removeAttribute() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.removeAttribute);
globalMy.mydefineProperty(Element.prototype, 'removeAttributeNS', function removeAttributeNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.removeAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'removeAttributeNode', function removeAttributeNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.removeAttributeNode);
globalMy.mydefineProperty(Element.prototype, 'replaceChildren', function replaceChildren() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.replaceChildren);
globalMy.mydefineProperty(Element.prototype, 'replaceWith', function replaceWith() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.replaceWith);
globalMy.mydefineProperty(Element.prototype, 'requestFullscreen', function requestFullscreen() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.requestFullscreen);
globalMy.mydefineProperty(Element.prototype, 'requestPointerLock', function requestPointerLock() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.requestPointerLock);
globalMy.mydefineProperty(Element.prototype, 'scroll', function scroll() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scroll);
globalMy.mydefineProperty(Element.prototype, 'scrollBy', function scrollBy() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollBy);
globalMy.mydefineProperty(Element.prototype, 'scrollIntoView', function scrollIntoView() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollIntoView);
globalMy.mydefineProperty(Element.prototype, 'scrollIntoViewIfNeeded', function scrollIntoViewIfNeeded() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollIntoViewIfNeeded);
globalMy.mydefineProperty(Element.prototype, 'scrollTo', function scrollTo() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.scrollTo);
globalMy.mydefineProperty(Element.prototype, 'setAttribute', function setAttribute(key,val) {
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName][key] = val;
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttribute);
globalMy.mydefineProperty(Element.prototype, 'setAttributeNS', function setAttributeNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttributeNS);
globalMy.mydefineProperty(Element.prototype, 'setAttributeNode', function setAttributeNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttributeNode);
globalMy.mydefineProperty(Element.prototype, 'setAttributeNodeNS', function setAttributeNodeNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setAttributeNodeNS);
globalMy.mydefineProperty(Element.prototype, 'setPointerCapture', function setPointerCapture() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.setPointerCapture);
globalMy.mydefineProperty(Element.prototype, 'toggleAttribute', function toggleAttribute() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.toggleAttribute);
globalMy.mydefineProperty(Element.prototype, 'webkitMatchesSelector', function webkitMatchesSelector() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.webkitMatchesSelector);
globalMy.mydefineProperty(Element.prototype, 'webkitRequestFullScreen', function webkitRequestFullScreen() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.webkitRequestFullScreen);
globalMy.mydefineProperty(Element.prototype, 'webkitRequestFullscreen', function webkitRequestFullscreen() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.webkitRequestFullscreen);
globalMy.mydefineProperty(Element.prototype, 'ariaAtomic', {}, true, undefined, undefined, function ariaAtomic() {
    
    return globalMy.value.Element_ariaAtomic;
}, function ariaAtomic(val) {
    
    globalMy.value.Element_ariaAtomic = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAtomic.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAtomic.set, 'set');
globalMy.value.Element_ariaAtomic = {};
globalMy.mydefineProperty(Element.prototype, 'ariaAutoComplete', {}, true, undefined, undefined, function ariaAutoComplete() {
    
    return globalMy.value.Element_ariaAutoComplete;
}, function ariaAutoComplete(val) {
    
    globalMy.value.Element_ariaAutoComplete = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAutoComplete.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaAutoComplete.set, 'set');
globalMy.value.Element_ariaAutoComplete = {};
globalMy.mydefineProperty(Element.prototype, 'ariaBusy', {}, true, undefined, undefined, function ariaBusy() {
    
    return globalMy.value.Element_ariaBusy;
}, function ariaBusy(val) {
    
    globalMy.value.Element_ariaBusy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaBusy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaBusy.set, 'set');
globalMy.value.Element_ariaBusy = {};
globalMy.mydefineProperty(Element.prototype, 'ariaChecked', {}, true, undefined, undefined, function ariaChecked() {
    
    return globalMy.value.Element_ariaChecked;
}, function ariaChecked(val) {
    
    globalMy.value.Element_ariaChecked = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaChecked.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaChecked.set, 'set');
globalMy.value.Element_ariaChecked = {};
globalMy.mydefineProperty(Element.prototype, 'ariaColCount', {}, true, undefined, undefined, function ariaColCount() {
    
    return globalMy.value.Element_ariaColCount;
}, function ariaColCount(val) {
    
    globalMy.value.Element_ariaColCount = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColCount.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColCount.set, 'set');
globalMy.value.Element_ariaColCount = {};
globalMy.mydefineProperty(Element.prototype, 'ariaColIndex', {}, true, undefined, undefined, function ariaColIndex() {
    
    return globalMy.value.Element_ariaColIndex;
}, function ariaColIndex(val) {
    
    globalMy.value.Element_ariaColIndex = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColIndex.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColIndex.set, 'set');
globalMy.value.Element_ariaColIndex = {};
globalMy.mydefineProperty(Element.prototype, 'ariaColSpan', {}, true, undefined, undefined, function ariaColSpan() {
    
    return globalMy.value.Element_ariaColSpan;
}, function ariaColSpan(val) {
    
    globalMy.value.Element_ariaColSpan = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColSpan.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaColSpan.set, 'set');
globalMy.value.Element_ariaColSpan = {};
globalMy.mydefineProperty(Element.prototype, 'ariaCurrent', {}, true, undefined, undefined, function ariaCurrent() {
    
    return globalMy.value.Element_ariaCurrent;
}, function ariaCurrent(val) {
    
    globalMy.value.Element_ariaCurrent = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaCurrent.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaCurrent.set, 'set');
globalMy.value.Element_ariaCurrent = {};
globalMy.mydefineProperty(Element.prototype, 'ariaDescription', {}, true, undefined, undefined, function ariaDescription() {
    
    return globalMy.value.Element_ariaDescription;
}, function ariaDescription(val) {
    
    globalMy.value.Element_ariaDescription = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDescription.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDescription.set, 'set');
globalMy.value.Element_ariaDescription = {};
globalMy.mydefineProperty(Element.prototype, 'ariaDisabled', {}, true, undefined, undefined, function ariaDisabled() {
    
    return globalMy.value.Element_ariaDisabled;
}, function ariaDisabled(val) {
    
    globalMy.value.Element_ariaDisabled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDisabled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaDisabled.set, 'set');
globalMy.value.Element_ariaDisabled = {};
globalMy.mydefineProperty(Element.prototype, 'ariaExpanded', {}, true, undefined, undefined, function ariaExpanded() {
    
    return globalMy.value.Element_ariaExpanded;
}, function ariaExpanded(val) {
    
    globalMy.value.Element_ariaExpanded = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaExpanded.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaExpanded.set, 'set');
globalMy.value.Element_ariaExpanded = {};
globalMy.mydefineProperty(Element.prototype, 'ariaHasPopup', {}, true, undefined, undefined, function ariaHasPopup() {
    
    return globalMy.value.Element_ariaHasPopup;
}, function ariaHasPopup(val) {
    
    globalMy.value.Element_ariaHasPopup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHasPopup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHasPopup.set, 'set');
globalMy.value.Element_ariaHasPopup = {};
globalMy.mydefineProperty(Element.prototype, 'ariaHidden', {}, true, undefined, undefined, function ariaHidden() {
    
    return globalMy.value.Element_ariaHidden;
}, function ariaHidden(val) {
    
    globalMy.value.Element_ariaHidden = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHidden.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaHidden.set, 'set');
globalMy.value.Element_ariaHidden = {};
globalMy.mydefineProperty(Element.prototype, 'ariaInvalid', {}, true, undefined, undefined, function ariaInvalid() {
    
    return globalMy.value.Element_ariaInvalid;
}, function ariaInvalid(val) {
    
    globalMy.value.Element_ariaInvalid = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaInvalid.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaInvalid.set, 'set');
globalMy.value.Element_ariaInvalid = {};
globalMy.mydefineProperty(Element.prototype, 'ariaKeyShortcuts', {}, true, undefined, undefined, function ariaKeyShortcuts() {
    
    return globalMy.value.Element_ariaKeyShortcuts;
}, function ariaKeyShortcuts(val) {
    
    globalMy.value.Element_ariaKeyShortcuts = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaKeyShortcuts.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaKeyShortcuts.set, 'set');
globalMy.value.Element_ariaKeyShortcuts = {};
globalMy.mydefineProperty(Element.prototype, 'ariaLabel', {}, true, undefined, undefined, function ariaLabel() {
    
    return globalMy.value.Element_ariaLabel;
}, function ariaLabel(val) {
    
    globalMy.value.Element_ariaLabel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLabel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLabel.set, 'set');
globalMy.value.Element_ariaLabel = {};
globalMy.mydefineProperty(Element.prototype, 'ariaLevel', {}, true, undefined, undefined, function ariaLevel() {
    
    return globalMy.value.Element_ariaLevel;
}, function ariaLevel(val) {
    
    globalMy.value.Element_ariaLevel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLevel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLevel.set, 'set');
globalMy.value.Element_ariaLevel = {};
globalMy.mydefineProperty(Element.prototype, 'ariaLive', {}, true, undefined, undefined, function ariaLive() {
    
    return globalMy.value.Element_ariaLive;
}, function ariaLive(val) {
    
    globalMy.value.Element_ariaLive = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLive.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaLive.set, 'set');
globalMy.value.Element_ariaLive = {};
globalMy.mydefineProperty(Element.prototype, 'ariaModal', {}, true, undefined, undefined, function ariaModal() {
    
    return globalMy.value.Element_ariaModal;
}, function ariaModal(val) {
    
    globalMy.value.Element_ariaModal = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaModal.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaModal.set, 'set');
globalMy.value.Element_ariaModal = {};
globalMy.mydefineProperty(Element.prototype, 'ariaMultiLine', {}, true, undefined, undefined, function ariaMultiLine() {
    
    return globalMy.value.Element_ariaMultiLine;
}, function ariaMultiLine(val) {
    
    globalMy.value.Element_ariaMultiLine = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiLine.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiLine.set, 'set');
globalMy.value.Element_ariaMultiLine = {};
globalMy.mydefineProperty(Element.prototype, 'ariaMultiSelectable', {}, true, undefined, undefined, function ariaMultiSelectable() {
    
    return globalMy.value.Element_ariaMultiSelectable;
}, function ariaMultiSelectable(val) {
    
    globalMy.value.Element_ariaMultiSelectable = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiSelectable.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaMultiSelectable.set, 'set');
globalMy.value.Element_ariaMultiSelectable = {};
globalMy.mydefineProperty(Element.prototype, 'ariaOrientation', {}, true, undefined, undefined, function ariaOrientation() {
    
    return globalMy.value.Element_ariaOrientation;
}, function ariaOrientation(val) {
    
    globalMy.value.Element_ariaOrientation = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaOrientation.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaOrientation.set, 'set');
globalMy.value.Element_ariaOrientation = {};
globalMy.mydefineProperty(Element.prototype, 'ariaPlaceholder', {}, true, undefined, undefined, function ariaPlaceholder() {
    
    return globalMy.value.Element_ariaPlaceholder;
}, function ariaPlaceholder(val) {
    
    globalMy.value.Element_ariaPlaceholder = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPlaceholder.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPlaceholder.set, 'set');
globalMy.value.Element_ariaPlaceholder = {};
globalMy.mydefineProperty(Element.prototype, 'ariaPosInSet', {}, true, undefined, undefined, function ariaPosInSet() {
    
    return globalMy.value.Element_ariaPosInSet;
}, function ariaPosInSet(val) {
    
    globalMy.value.Element_ariaPosInSet = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPosInSet.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPosInSet.set, 'set');
globalMy.value.Element_ariaPosInSet = {};
globalMy.mydefineProperty(Element.prototype, 'ariaPressed', {}, true, undefined, undefined, function ariaPressed() {
    
    return globalMy.value.Element_ariaPressed;
}, function ariaPressed(val) {
    
    globalMy.value.Element_ariaPressed = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPressed.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaPressed.set, 'set');
globalMy.value.Element_ariaPressed = {};
globalMy.mydefineProperty(Element.prototype, 'ariaReadOnly', {}, true, undefined, undefined, function ariaReadOnly() {
    
    return globalMy.value.Element_ariaReadOnly;
}, function ariaReadOnly(val) {
    
    globalMy.value.Element_ariaReadOnly = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaReadOnly.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaReadOnly.set, 'set');
globalMy.value.Element_ariaReadOnly = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRelevant', {}, true, undefined, undefined, function ariaRelevant() {
    
    return globalMy.value.Element_ariaRelevant;
}, function ariaRelevant(val) {
    
    globalMy.value.Element_ariaRelevant = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRelevant.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRelevant.set, 'set');
globalMy.value.Element_ariaRelevant = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRequired', {}, true, undefined, undefined, function ariaRequired() {
    
    return globalMy.value.Element_ariaRequired;
}, function ariaRequired(val) {
    
    globalMy.value.Element_ariaRequired = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRequired.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRequired.set, 'set');
globalMy.value.Element_ariaRequired = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRoleDescription', {}, true, undefined, undefined, function ariaRoleDescription() {
    
    return globalMy.value.Element_ariaRoleDescription;
}, function ariaRoleDescription(val) {
    
    globalMy.value.Element_ariaRoleDescription = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRoleDescription.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRoleDescription.set, 'set');
globalMy.value.Element_ariaRoleDescription = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRowCount', {}, true, undefined, undefined, function ariaRowCount() {
    
    return globalMy.value.Element_ariaRowCount;
}, function ariaRowCount(val) {
    
    globalMy.value.Element_ariaRowCount = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowCount.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowCount.set, 'set');
globalMy.value.Element_ariaRowCount = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRowIndex', {}, true, undefined, undefined, function ariaRowIndex() {
    
    return globalMy.value.Element_ariaRowIndex;
}, function ariaRowIndex(val) {
    
    globalMy.value.Element_ariaRowIndex = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowIndex.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowIndex.set, 'set');
globalMy.value.Element_ariaRowIndex = {};
globalMy.mydefineProperty(Element.prototype, 'ariaRowSpan', {}, true, undefined, undefined, function ariaRowSpan() {
    
    return globalMy.value.Element_ariaRowSpan;
}, function ariaRowSpan(val) {
    
    globalMy.value.Element_ariaRowSpan = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowSpan.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaRowSpan.set, 'set');
globalMy.value.Element_ariaRowSpan = {};
globalMy.mydefineProperty(Element.prototype, 'ariaSelected', {}, true, undefined, undefined, function ariaSelected() {
    
    return globalMy.value.Element_ariaSelected;
}, function ariaSelected(val) {
    
    globalMy.value.Element_ariaSelected = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSelected.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSelected.set, 'set');
globalMy.value.Element_ariaSelected = {};
globalMy.mydefineProperty(Element.prototype, 'ariaSetSize', {}, true, undefined, undefined, function ariaSetSize() {
    
    return globalMy.value.Element_ariaSetSize;
}, function ariaSetSize(val) {
    
    globalMy.value.Element_ariaSetSize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSetSize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSetSize.set, 'set');
globalMy.value.Element_ariaSetSize = {};
globalMy.mydefineProperty(Element.prototype, 'ariaSort', {}, true, undefined, undefined, function ariaSort() {
    
    return globalMy.value.Element_ariaSort;
}, function ariaSort(val) {
    
    globalMy.value.Element_ariaSort = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSort.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaSort.set, 'set');
globalMy.value.Element_ariaSort = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueMax', {}, true, undefined, undefined, function ariaValueMax() {
    
    return globalMy.value.Element_ariaValueMax;
}, function ariaValueMax(val) {
    
    globalMy.value.Element_ariaValueMax = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMax.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMax.set, 'set');
globalMy.value.Element_ariaValueMax = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueMin', {}, true, undefined, undefined, function ariaValueMin() {
    
    return globalMy.value.Element_ariaValueMin;
}, function ariaValueMin(val) {
    
    globalMy.value.Element_ariaValueMin = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMin.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueMin.set, 'set');
globalMy.value.Element_ariaValueMin = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueNow', {}, true, undefined, undefined, function ariaValueNow() {
    
    return globalMy.value.Element_ariaValueNow;
}, function ariaValueNow(val) {
    
    globalMy.value.Element_ariaValueNow = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueNow.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueNow.set, 'set');
globalMy.value.Element_ariaValueNow = {};
globalMy.mydefineProperty(Element.prototype, 'ariaValueText', {}, true, undefined, undefined, function ariaValueText() {
    
    return globalMy.value.Element_ariaValueText;
}, function ariaValueText(val) {
    
    globalMy.value.Element_ariaValueText = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueText.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Element.prototype).ariaValueText.set, 'set');
globalMy.value.Element_ariaValueText = {};
globalMy.mydefineProperty(Element.prototype, 'getAnimations', function getAnimations() {
    
}, true, undefined, true);
globalMy.functionprotect(Element.prototype.getAnimations);



HTMLElement = function HTMLElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLElement);
globalMy.rename(HTMLElement.prototype, "HTMLElement")
Object.setPrototypeOf(HTMLElement.prototype, Element.prototype)
HTMLElement.__proto__ = Element;

globalMy.mydefineProperty(HTMLElement.prototype, 'title', '', true, undefined, undefined, function title() {
    
    return globalMy.value.HTMLElement_title;
}, function title(val) {
    
    globalMy.value.HTMLElement_title = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).title.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).title.set, 'set');
globalMy.value.HTMLElement_title = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'lang', '', true, undefined, undefined, function lang() {
    
    return globalMy.value.HTMLElement_lang;
}, function lang(val) {
    
    globalMy.value.HTMLElement_lang = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).lang.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).lang.set, 'set');
globalMy.value.HTMLElement_lang = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'translate', true, true, undefined, undefined, function translate() {
    
    return globalMy.value.HTMLElement_translate;
}, function translate(val) {
    
    globalMy.value.HTMLElement_translate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).translate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).translate.set, 'set');
globalMy.value.HTMLElement_translate = true;
globalMy.mydefineProperty(HTMLElement.prototype, 'dir', '', true, undefined, undefined, function dir() {
    
    return globalMy.value.HTMLElement_dir;
}, function dir(val) {
    
    globalMy.value.HTMLElement_dir = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).dir.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).dir.set, 'set');
globalMy.value.HTMLElement_dir = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'hidden', false, true, undefined, undefined, function hidden() {
        
        var foundName = globalMy.foundName(this);
        return globalMy.value[foundName]["hidden"];
    },
    function hidden(val) {
        
        var foundName = globalMy.foundName(this);
        globalMy.value[foundName]["hidden"] = val;
    });
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).hidden.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).hidden.set, 'set');


globalMy.mydefineProperty(HTMLElement.prototype, 'accessKey', '', true, undefined, undefined, function accessKey() {
    
    return globalMy.value.HTMLElement_accessKey;
}, function accessKey(val) {
    
    globalMy.value.HTMLElement_accessKey = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).accessKey.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).accessKey.set, 'set');
globalMy.value.HTMLElement_accessKey = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'draggable', false, true, undefined, undefined, function draggable() {
    
    return globalMy.value.HTMLElement_draggable;
}, function draggable(val) {
    
    globalMy.value.HTMLElement_draggable = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).draggable.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).draggable.set, 'set');
globalMy.value.HTMLElement_draggable = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'spellcheck', true, true, undefined, undefined, function spellcheck() {
    
    return globalMy.value.HTMLElement_spellcheck;
}, function spellcheck(val) {
    
    globalMy.value.HTMLElement_spellcheck = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).spellcheck.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).spellcheck.set, 'set');
globalMy.value.HTMLElement_spellcheck = true;
globalMy.mydefineProperty(HTMLElement.prototype, 'autocapitalize', '', true, undefined, undefined, function autocapitalize() {
    
    return globalMy.value.HTMLElement_autocapitalize;
}, function autocapitalize(val) {
    
    globalMy.value.HTMLElement_autocapitalize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autocapitalize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autocapitalize.set, 'set');
globalMy.value.HTMLElement_autocapitalize = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'contentEditable', 'inherit', true, undefined, undefined, function contentEditable() {
    
    return globalMy.value.HTMLElement_contentEditable;
}, function contentEditable(val) {
    
    globalMy.value.HTMLElement_contentEditable = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).contentEditable.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).contentEditable.set, 'set');
globalMy.value.HTMLElement_contentEditable = 'inherit';
globalMy.mydefineProperty(HTMLElement.prototype, 'isContentEditable', false, true, undefined, undefined, function isContentEditable() {
    
    return globalMy.value.HTMLElement_isContentEditable;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).isContentEditable.get, 'get');
globalMy.value.HTMLElement_isContentEditable = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'inputMode', '', true, undefined, undefined, function inputMode() {
    
    return globalMy.value.HTMLElement_inputMode;
}, function inputMode(val) {
    
    globalMy.value.HTMLElement_inputMode = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inputMode.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inputMode.set, 'set');
globalMy.value.HTMLElement_inputMode = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'offsetParent', {}, true, undefined, undefined, function offsetParent() {
    
    return globalMy.value.HTMLElement_offsetParent;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetParent.get, 'get');
globalMy.value.HTMLElement_offsetParent = {};

globalMy.mydefineProperty(HTMLElement.prototype, 'offsetTop', 0, true, undefined, undefined, function offsetTop() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetTop'];
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetTop.get, 'get');

globalMy.mydefineProperty(HTMLElement.prototype, 'offsetLeft', 0, true, undefined, undefined, function offsetLeft() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetLeft'];
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetLeft.get, 'get');


globalMy.mydefineProperty(HTMLElement.prototype, 'offsetWidth', 0, true, undefined, undefined, function offsetWidth() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetWidth']
    // return globalMy.getOffsetWidth(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetWidth.get, 'get');

globalMy.mydefineProperty(HTMLElement.prototype, 'offsetHeight', 0, true, undefined, undefined, function offsetHeight() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['offsetHeight']
    // return globalMy.getOffsetHeight(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).offsetHeight.get, 'get');


globalMy.mydefineProperty(HTMLElement.prototype, 'innerText', '', true, undefined, undefined, function innerText() {
    
    return globalMy.value.HTMLElement_innerText;
}, function innerText(val) {
    
    globalMy.value.HTMLElement_innerText = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).innerText.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).innerText.set, 'set');
globalMy.value.HTMLElement_innerText = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'outerText', '', true, undefined, undefined, function outerText() {
    
    return globalMy.value.HTMLElement_outerText;
}, function outerText(val) {
    
    globalMy.value.HTMLElement_outerText = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).outerText.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).outerText.set, 'set');
globalMy.value.HTMLElement_outerText = '';


globalMy.mydefineProperty(HTMLElement.prototype, 'onbeforexrselect', {}, true, undefined, undefined, function onbeforexrselect() {
    
    return globalMy.value.HTMLElement_onbeforexrselect;
}, function onbeforexrselect(val) {
    
    globalMy.value.HTMLElement_onbeforexrselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforexrselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforexrselect.set, 'set');
globalMy.value.HTMLElement_onbeforexrselect = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onabort', {}, true, undefined, undefined, function onabort() {
    
    return globalMy.value.HTMLElement_onabort;
}, function onabort(val) {
    
    globalMy.value.HTMLElement_onabort = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onabort.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onabort.set, 'set');
globalMy.value.HTMLElement_onabort = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onblur', {}, true, undefined, undefined, function onblur() {
    
    return globalMy.value.HTMLElement_onblur;
}, function onblur(val) {
    
    globalMy.value.HTMLElement_onblur = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onblur.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onblur.set, 'set');
globalMy.value.HTMLElement_onblur = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncancel', {}, true, undefined, undefined, function oncancel() {
    
    return globalMy.value.HTMLElement_oncancel;
}, function oncancel(val) {
    
    globalMy.value.HTMLElement_oncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncancel.set, 'set');
globalMy.value.HTMLElement_oncancel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncanplay', {}, true, undefined, undefined, function oncanplay() {
    
    return globalMy.value.HTMLElement_oncanplay;
}, function oncanplay(val) {
    
    globalMy.value.HTMLElement_oncanplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplay.set, 'set');
globalMy.value.HTMLElement_oncanplay = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncanplaythrough', {}, true, undefined, undefined, function oncanplaythrough() {
    
    return globalMy.value.HTMLElement_oncanplaythrough;
}, function oncanplaythrough(val) {
    
    globalMy.value.HTMLElement_oncanplaythrough = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplaythrough.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncanplaythrough.set, 'set');
globalMy.value.HTMLElement_oncanplaythrough = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onchange', {}, true, undefined, undefined, function onchange() {
    
    return globalMy.value.HTMLElement_onchange;
}, function onchange(val) {
    
    globalMy.value.HTMLElement_onchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onchange.set, 'set');
globalMy.value.HTMLElement_onchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onclick', {}, true, undefined, undefined, function onclick() {
    
    return globalMy.value.HTMLElement_onclick;
}, function onclick(val) {
    
    globalMy.value.HTMLElement_onclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclick.set, 'set');
globalMy.value.HTMLElement_onclick = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onclose', {}, true, undefined, undefined, function onclose() {
    
    return globalMy.value.HTMLElement_onclose;
}, function onclose(val) {
    
    globalMy.value.HTMLElement_onclose = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclose.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onclose.set, 'set');
globalMy.value.HTMLElement_onclose = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncontextlost', {}, true, undefined, undefined, function oncontextlost() {
    
    return globalMy.value.HTMLElement_oncontextlost;
}, function oncontextlost(val) {
    
    globalMy.value.HTMLElement_oncontextlost = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextlost.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextlost.set, 'set');
globalMy.value.HTMLElement_oncontextlost = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncontextmenu', {}, true, undefined, undefined, function oncontextmenu() {
    
    return globalMy.value.HTMLElement_oncontextmenu;
}, function oncontextmenu(val) {
    
    globalMy.value.HTMLElement_oncontextmenu = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextmenu.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextmenu.set, 'set');
globalMy.value.HTMLElement_oncontextmenu = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncontextrestored', {}, true, undefined, undefined, function oncontextrestored() {
    
    return globalMy.value.HTMLElement_oncontextrestored;
}, function oncontextrestored(val) {
    
    globalMy.value.HTMLElement_oncontextrestored = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextrestored.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncontextrestored.set, 'set');
globalMy.value.HTMLElement_oncontextrestored = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncuechange', {}, true, undefined, undefined, function oncuechange() {
    
    return globalMy.value.HTMLElement_oncuechange;
}, function oncuechange(val) {
    
    globalMy.value.HTMLElement_oncuechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncuechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncuechange.set, 'set');
globalMy.value.HTMLElement_oncuechange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondblclick', {}, true, undefined, undefined, function ondblclick() {
    
    return globalMy.value.HTMLElement_ondblclick;
}, function ondblclick(val) {
    
    globalMy.value.HTMLElement_ondblclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondblclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondblclick.set, 'set');
globalMy.value.HTMLElement_ondblclick = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondrag', {}, true, undefined, undefined, function ondrag() {
    
    return globalMy.value.HTMLElement_ondrag;
}, function ondrag(val) {
    
    globalMy.value.HTMLElement_ondrag = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrag.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrag.set, 'set');
globalMy.value.HTMLElement_ondrag = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragend', {}, true, undefined, undefined, function ondragend() {
    
    return globalMy.value.HTMLElement_ondragend;
}, function ondragend(val) {
    
    globalMy.value.HTMLElement_ondragend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragend.set, 'set');
globalMy.value.HTMLElement_ondragend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragenter', {}, true, undefined, undefined, function ondragenter() {
    
    return globalMy.value.HTMLElement_ondragenter;
}, function ondragenter(val) {
    
    globalMy.value.HTMLElement_ondragenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragenter.set, 'set');
globalMy.value.HTMLElement_ondragenter = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragleave', {}, true, undefined, undefined, function ondragleave() {
    
    return globalMy.value.HTMLElement_ondragleave;
}, function ondragleave(val) {
    
    globalMy.value.HTMLElement_ondragleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragleave.set, 'set');
globalMy.value.HTMLElement_ondragleave = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragover', {}, true, undefined, undefined, function ondragover() {
    
    return globalMy.value.HTMLElement_ondragover;
}, function ondragover(val) {
    
    globalMy.value.HTMLElement_ondragover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragover.set, 'set');
globalMy.value.HTMLElement_ondragover = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondragstart', {}, true, undefined, undefined, function ondragstart() {
    
    return globalMy.value.HTMLElement_ondragstart;
}, function ondragstart(val) {
    
    globalMy.value.HTMLElement_ondragstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondragstart.set, 'set');
globalMy.value.HTMLElement_ondragstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondrop', {}, true, undefined, undefined, function ondrop() {
    
    return globalMy.value.HTMLElement_ondrop;
}, function ondrop(val) {
    
    globalMy.value.HTMLElement_ondrop = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrop.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondrop.set, 'set');
globalMy.value.HTMLElement_ondrop = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ondurationchange', {}, true, undefined, undefined, function ondurationchange() {
    
    return globalMy.value.HTMLElement_ondurationchange;
}, function ondurationchange(val) {
    
    globalMy.value.HTMLElement_ondurationchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondurationchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ondurationchange.set, 'set');
globalMy.value.HTMLElement_ondurationchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onemptied', {}, true, undefined, undefined, function onemptied() {
    
    return globalMy.value.HTMLElement_onemptied;
}, function onemptied(val) {
    
    globalMy.value.HTMLElement_onemptied = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onemptied.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onemptied.set, 'set');
globalMy.value.HTMLElement_onemptied = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onended', {}, true, undefined, undefined, function onended() {
    
    return globalMy.value.HTMLElement_onended;
}, function onended(val) {
    
    globalMy.value.HTMLElement_onended = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onended.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onended.set, 'set');
globalMy.value.HTMLElement_onended = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onerror', {}, true, undefined, undefined, function onerror() {
    
    return globalMy.value.HTMLElement_onerror;
}, function onerror(val) {
    
    globalMy.value.HTMLElement_onerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onerror.set, 'set');
globalMy.value.HTMLElement_onerror = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onfocus', {}, true, undefined, undefined, function onfocus() {
    
    return globalMy.value.HTMLElement_onfocus;
}, function onfocus(val) {
    
    globalMy.value.HTMLElement_onfocus = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onfocus.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onfocus.set, 'set');
globalMy.value.HTMLElement_onfocus = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onformdata', {}, true, undefined, undefined, function onformdata() {
    
    return globalMy.value.HTMLElement_onformdata;
}, function onformdata(val) {
    
    globalMy.value.HTMLElement_onformdata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onformdata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onformdata.set, 'set');
globalMy.value.HTMLElement_onformdata = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oninput', {}, true, undefined, undefined, function oninput() {
    
    return globalMy.value.HTMLElement_oninput;
}, function oninput(val) {
    
    globalMy.value.HTMLElement_oninput = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninput.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninput.set, 'set');
globalMy.value.HTMLElement_oninput = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oninvalid', {}, true, undefined, undefined, function oninvalid() {
    
    return globalMy.value.HTMLElement_oninvalid;
}, function oninvalid(val) {
    
    globalMy.value.HTMLElement_oninvalid = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninvalid.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oninvalid.set, 'set');
globalMy.value.HTMLElement_oninvalid = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onkeydown', {}, true, undefined, undefined, function onkeydown() {
    
    return globalMy.value.HTMLElement_onkeydown;
}, function onkeydown(val) {
    
    globalMy.value.HTMLElement_onkeydown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeydown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeydown.set, 'set');
globalMy.value.HTMLElement_onkeydown = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onkeypress', {}, true, undefined, undefined, function onkeypress() {
    
    return globalMy.value.HTMLElement_onkeypress;
}, function onkeypress(val) {
    
    globalMy.value.HTMLElement_onkeypress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeypress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeypress.set, 'set');
globalMy.value.HTMLElement_onkeypress = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onkeyup', {}, true, undefined, undefined, function onkeyup() {
    
    return globalMy.value.HTMLElement_onkeyup;
}, function onkeyup(val) {
    
    globalMy.value.HTMLElement_onkeyup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeyup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onkeyup.set, 'set');
globalMy.value.HTMLElement_onkeyup = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onload', {}, true, undefined, undefined, function onload() {
    
    return globalMy.value.HTMLElement_onload;
}, function onload(val) {
    
    globalMy.value.HTMLElement_onload = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onload.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onload.set, 'set');
globalMy.value.HTMLElement_onload = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onloadeddata', {}, true, undefined, undefined, function onloadeddata() {
    
    return globalMy.value.HTMLElement_onloadeddata;
}, function onloadeddata(val) {
    
    globalMy.value.HTMLElement_onloadeddata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadeddata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadeddata.set, 'set');
globalMy.value.HTMLElement_onloadeddata = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onloadedmetadata', {}, true, undefined, undefined, function onloadedmetadata() {
    
    return globalMy.value.HTMLElement_onloadedmetadata;
}, function onloadedmetadata(val) {
    
    globalMy.value.HTMLElement_onloadedmetadata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadedmetadata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadedmetadata.set, 'set');
globalMy.value.HTMLElement_onloadedmetadata = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onloadstart', {}, true, undefined, undefined, function onloadstart() {
    
    return globalMy.value.HTMLElement_onloadstart;
}, function onloadstart(val) {
    
    globalMy.value.HTMLElement_onloadstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onloadstart.set, 'set');
globalMy.value.HTMLElement_onloadstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmousedown', {}, true, undefined, undefined, function onmousedown() {
    
    return globalMy.value.HTMLElement_onmousedown;
}, function onmousedown(val) {
    
    globalMy.value.HTMLElement_onmousedown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousedown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousedown.set, 'set');
globalMy.value.HTMLElement_onmousedown = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseenter', {}, true, undefined, undefined, function onmouseenter() {
    
    return globalMy.value.HTMLElement_onmouseenter;
}, function onmouseenter(val) {
    
    globalMy.value.HTMLElement_onmouseenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseenter.set, 'set');
globalMy.value.HTMLElement_onmouseenter = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseleave', {}, true, undefined, undefined, function onmouseleave() {
    
    return globalMy.value.HTMLElement_onmouseleave;
}, function onmouseleave(val) {
    
    globalMy.value.HTMLElement_onmouseleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseleave.set, 'set');
globalMy.value.HTMLElement_onmouseleave = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmousemove', {}, true, undefined, undefined, function onmousemove() {
    
    return globalMy.value.HTMLElement_onmousemove;
}, function onmousemove(val) {
    
    globalMy.value.HTMLElement_onmousemove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousemove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousemove.set, 'set');
globalMy.value.HTMLElement_onmousemove = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseout', {}, true, undefined, undefined, function onmouseout() {
    
    return globalMy.value.HTMLElement_onmouseout;
}, function onmouseout(val) {
    
    globalMy.value.HTMLElement_onmouseout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseout.set, 'set');
globalMy.value.HTMLElement_onmouseout = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseover', {}, true, undefined, undefined, function onmouseover() {
    
    return globalMy.value.HTMLElement_onmouseover;
}, function onmouseover(val) {
    
    globalMy.value.HTMLElement_onmouseover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseover.set, 'set');
globalMy.value.HTMLElement_onmouseover = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmouseup', {}, true, undefined, undefined, function onmouseup() {
    
    return globalMy.value.HTMLElement_onmouseup;
}, function onmouseup(val) {
    
    globalMy.value.HTMLElement_onmouseup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmouseup.set, 'set');
globalMy.value.HTMLElement_onmouseup = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onmousewheel', {}, true, undefined, undefined, function onmousewheel() {
    
    return globalMy.value.HTMLElement_onmousewheel;
}, function onmousewheel(val) {
    
    globalMy.value.HTMLElement_onmousewheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousewheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onmousewheel.set, 'set');
globalMy.value.HTMLElement_onmousewheel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpause', {}, true, undefined, undefined, function onpause() {
    
    return globalMy.value.HTMLElement_onpause;
}, function onpause(val) {
    
    globalMy.value.HTMLElement_onpause = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpause.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpause.set, 'set');
globalMy.value.HTMLElement_onpause = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onplay', {}, true, undefined, undefined, function onplay() {
    
    return globalMy.value.HTMLElement_onplay;
}, function onplay(val) {
    
    globalMy.value.HTMLElement_onplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplay.set, 'set');
globalMy.value.HTMLElement_onplay = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onplaying', {}, true, undefined, undefined, function onplaying() {
    
    return globalMy.value.HTMLElement_onplaying;
}, function onplaying(val) {
    
    globalMy.value.HTMLElement_onplaying = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplaying.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onplaying.set, 'set');
globalMy.value.HTMLElement_onplaying = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onprogress', {}, true, undefined, undefined, function onprogress() {
    
    return globalMy.value.HTMLElement_onprogress;
}, function onprogress(val) {
    
    globalMy.value.HTMLElement_onprogress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onprogress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onprogress.set, 'set');
globalMy.value.HTMLElement_onprogress = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onratechange', {}, true, undefined, undefined, function onratechange() {
    
    return globalMy.value.HTMLElement_onratechange;
}, function onratechange(val) {
    
    globalMy.value.HTMLElement_onratechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onratechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onratechange.set, 'set');
globalMy.value.HTMLElement_onratechange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onreset', {}, true, undefined, undefined, function onreset() {
    
    return globalMy.value.HTMLElement_onreset;
}, function onreset(val) {
    
    globalMy.value.HTMLElement_onreset = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onreset.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onreset.set, 'set');
globalMy.value.HTMLElement_onreset = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onresize', {}, true, undefined, undefined, function onresize() {
    
    return globalMy.value.HTMLElement_onresize;
}, function onresize(val) {
    
    globalMy.value.HTMLElement_onresize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onresize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onresize.set, 'set');
globalMy.value.HTMLElement_onresize = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onscroll', {}, true, undefined, undefined, function onscroll() {
    
    return globalMy.value.HTMLElement_onscroll;
}, function onscroll(val) {
    
    globalMy.value.HTMLElement_onscroll = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onscroll.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onscroll.set, 'set');
globalMy.value.HTMLElement_onscroll = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onsecuritypolicyviolation', {}, true, undefined, undefined, function onsecuritypolicyviolation() {
    
    return globalMy.value.HTMLElement_onsecuritypolicyviolation;
}, function onsecuritypolicyviolation(val) {
    
    globalMy.value.HTMLElement_onsecuritypolicyviolation = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsecuritypolicyviolation.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsecuritypolicyviolation.set, 'set');
globalMy.value.HTMLElement_onsecuritypolicyviolation = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onseeked', {}, true, undefined, undefined, function onseeked() {
    
    return globalMy.value.HTMLElement_onseeked;
}, function onseeked(val) {
    
    globalMy.value.HTMLElement_onseeked = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeked.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeked.set, 'set');
globalMy.value.HTMLElement_onseeked = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onseeking', {}, true, undefined, undefined, function onseeking() {
    
    return globalMy.value.HTMLElement_onseeking;
}, function onseeking(val) {
    
    globalMy.value.HTMLElement_onseeking = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeking.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onseeking.set, 'set');
globalMy.value.HTMLElement_onseeking = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onselect', {}, true, undefined, undefined, function onselect() {
    
    return globalMy.value.HTMLElement_onselect;
}, function onselect(val) {
    
    globalMy.value.HTMLElement_onselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselect.set, 'set');
globalMy.value.HTMLElement_onselect = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onslotchange', {}, true, undefined, undefined, function onslotchange() {
    
    return globalMy.value.HTMLElement_onslotchange;
}, function onslotchange(val) {
    
    globalMy.value.HTMLElement_onslotchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onslotchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onslotchange.set, 'set');
globalMy.value.HTMLElement_onslotchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onstalled', {}, true, undefined, undefined, function onstalled() {
    
    return globalMy.value.HTMLElement_onstalled;
}, function onstalled(val) {
    
    globalMy.value.HTMLElement_onstalled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onstalled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onstalled.set, 'set');
globalMy.value.HTMLElement_onstalled = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onsubmit', {}, true, undefined, undefined, function onsubmit() {
    
    return globalMy.value.HTMLElement_onsubmit;
}, function onsubmit(val) {
    
    globalMy.value.HTMLElement_onsubmit = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsubmit.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsubmit.set, 'set');
globalMy.value.HTMLElement_onsubmit = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onsuspend', {}, true, undefined, undefined, function onsuspend() {
    
    return globalMy.value.HTMLElement_onsuspend;
}, function onsuspend(val) {
    
    globalMy.value.HTMLElement_onsuspend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsuspend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onsuspend.set, 'set');
globalMy.value.HTMLElement_onsuspend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontimeupdate', {}, true, undefined, undefined, function ontimeupdate() {
    
    return globalMy.value.HTMLElement_ontimeupdate;
}, function ontimeupdate(val) {
    
    globalMy.value.HTMLElement_ontimeupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontimeupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontimeupdate.set, 'set');
globalMy.value.HTMLElement_ontimeupdate = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontoggle', {}, true, undefined, undefined, function ontoggle() {
    
    return globalMy.value.HTMLElement_ontoggle;
}, function ontoggle(val) {
    
    globalMy.value.HTMLElement_ontoggle = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontoggle.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontoggle.set, 'set');
globalMy.value.HTMLElement_ontoggle = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onvolumechange', {}, true, undefined, undefined, function onvolumechange() {
    
    return globalMy.value.HTMLElement_onvolumechange;
}, function onvolumechange(val) {
    
    globalMy.value.HTMLElement_onvolumechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onvolumechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onvolumechange.set, 'set');
globalMy.value.HTMLElement_onvolumechange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwaiting', {}, true, undefined, undefined, function onwaiting() {
    
    return globalMy.value.HTMLElement_onwaiting;
}, function onwaiting(val) {
    
    globalMy.value.HTMLElement_onwaiting = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwaiting.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwaiting.set, 'set');
globalMy.value.HTMLElement_onwaiting = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkitanimationend', {}, true, undefined, undefined, function onwebkitanimationend() {
    
    return globalMy.value.HTMLElement_onwebkitanimationend;
}, function onwebkitanimationend(val) {
    
    globalMy.value.HTMLElement_onwebkitanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationend.set, 'set');
globalMy.value.HTMLElement_onwebkitanimationend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkitanimationiteration', {}, true, undefined, undefined, function onwebkitanimationiteration() {
    
    return globalMy.value.HTMLElement_onwebkitanimationiteration;
}, function onwebkitanimationiteration(val) {
    
    globalMy.value.HTMLElement_onwebkitanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationiteration.set, 'set');
globalMy.value.HTMLElement_onwebkitanimationiteration = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkitanimationstart', {}, true, undefined, undefined, function onwebkitanimationstart() {
    
    return globalMy.value.HTMLElement_onwebkitanimationstart;
}, function onwebkitanimationstart(val) {
    
    globalMy.value.HTMLElement_onwebkitanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkitanimationstart.set, 'set');
globalMy.value.HTMLElement_onwebkitanimationstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwebkittransitionend', {}, true, undefined, undefined, function onwebkittransitionend() {
    
    return globalMy.value.HTMLElement_onwebkittransitionend;
}, function onwebkittransitionend(val) {
    
    globalMy.value.HTMLElement_onwebkittransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkittransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwebkittransitionend.set, 'set');
globalMy.value.HTMLElement_onwebkittransitionend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onwheel', {}, true, undefined, undefined, function onwheel() {
    
    return globalMy.value.HTMLElement_onwheel;
}, function onwheel(val) {
    
    globalMy.value.HTMLElement_onwheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onwheel.set, 'set');
globalMy.value.HTMLElement_onwheel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onauxclick', {}, true, undefined, undefined, function onauxclick() {
    
    return globalMy.value.HTMLElement_onauxclick;
}, function onauxclick(val) {
    
    globalMy.value.HTMLElement_onauxclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onauxclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onauxclick.set, 'set');
globalMy.value.HTMLElement_onauxclick = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ongotpointercapture', {}, true, undefined, undefined, function ongotpointercapture() {
    
    return globalMy.value.HTMLElement_ongotpointercapture;
}, function ongotpointercapture(val) {
    
    globalMy.value.HTMLElement_ongotpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ongotpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ongotpointercapture.set, 'set');
globalMy.value.HTMLElement_ongotpointercapture = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onlostpointercapture', {}, true, undefined, undefined, function onlostpointercapture() {
    
    return globalMy.value.HTMLElement_onlostpointercapture;
}, function onlostpointercapture(val) {
    
    globalMy.value.HTMLElement_onlostpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onlostpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onlostpointercapture.set, 'set');
globalMy.value.HTMLElement_onlostpointercapture = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerdown', {}, true, undefined, undefined, function onpointerdown() {
    
    return globalMy.value.HTMLElement_onpointerdown;
}, function onpointerdown(val) {
    
    globalMy.value.HTMLElement_onpointerdown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerdown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerdown.set, 'set');
globalMy.value.HTMLElement_onpointerdown = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointermove', {}, true, undefined, undefined, function onpointermove() {
    
    return globalMy.value.HTMLElement_onpointermove;
}, function onpointermove(val) {
    
    globalMy.value.HTMLElement_onpointermove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointermove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointermove.set, 'set');
globalMy.value.HTMLElement_onpointermove = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerup', {}, true, undefined, undefined, function onpointerup() {
    
    return globalMy.value.HTMLElement_onpointerup;
}, function onpointerup(val) {
    
    globalMy.value.HTMLElement_onpointerup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerup.set, 'set');
globalMy.value.HTMLElement_onpointerup = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointercancel', {}, true, undefined, undefined, function onpointercancel() {
    
    return globalMy.value.HTMLElement_onpointercancel;
}, function onpointercancel(val) {
    
    globalMy.value.HTMLElement_onpointercancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointercancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointercancel.set, 'set');
globalMy.value.HTMLElement_onpointercancel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerover', {}, true, undefined, undefined, function onpointerover() {
    
    return globalMy.value.HTMLElement_onpointerover;
}, function onpointerover(val) {
    
    globalMy.value.HTMLElement_onpointerover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerover.set, 'set');
globalMy.value.HTMLElement_onpointerover = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerout', {}, true, undefined, undefined, function onpointerout() {
    
    return globalMy.value.HTMLElement_onpointerout;
}, function onpointerout(val) {
    
    globalMy.value.HTMLElement_onpointerout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerout.set, 'set');
globalMy.value.HTMLElement_onpointerout = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerenter', {}, true, undefined, undefined, function onpointerenter() {
    
    return globalMy.value.HTMLElement_onpointerenter;
}, function onpointerenter(val) {
    
    globalMy.value.HTMLElement_onpointerenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerenter.set, 'set');
globalMy.value.HTMLElement_onpointerenter = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerleave', {}, true, undefined, undefined, function onpointerleave() {
    
    return globalMy.value.HTMLElement_onpointerleave;
}, function onpointerleave(val) {
    
    globalMy.value.HTMLElement_onpointerleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerleave.set, 'set');
globalMy.value.HTMLElement_onpointerleave = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onselectstart', {}, true, undefined, undefined, function onselectstart() {
    
    return globalMy.value.HTMLElement_onselectstart;
}, function onselectstart(val) {
    
    globalMy.value.HTMLElement_onselectstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectstart.set, 'set');
globalMy.value.HTMLElement_onselectstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onselectionchange', {}, true, undefined, undefined, function onselectionchange() {
    
    return globalMy.value.HTMLElement_onselectionchange;
}, function onselectionchange(val) {
    
    globalMy.value.HTMLElement_onselectionchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectionchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onselectionchange.set, 'set');
globalMy.value.HTMLElement_onselectionchange = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onanimationend', {}, true, undefined, undefined, function onanimationend() {
    
    return globalMy.value.HTMLElement_onanimationend;
}, function onanimationend(val) {
    
    globalMy.value.HTMLElement_onanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationend.set, 'set');
globalMy.value.HTMLElement_onanimationend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onanimationiteration', {}, true, undefined, undefined, function onanimationiteration() {
    
    return globalMy.value.HTMLElement_onanimationiteration;
}, function onanimationiteration(val) {
    
    globalMy.value.HTMLElement_onanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationiteration.set, 'set');
globalMy.value.HTMLElement_onanimationiteration = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onanimationstart', {}, true, undefined, undefined, function onanimationstart() {
    
    return globalMy.value.HTMLElement_onanimationstart;
}, function onanimationstart(val) {
    
    globalMy.value.HTMLElement_onanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onanimationstart.set, 'set');
globalMy.value.HTMLElement_onanimationstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitionrun', {}, true, undefined, undefined, function ontransitionrun() {
    
    return globalMy.value.HTMLElement_ontransitionrun;
}, function ontransitionrun(val) {
    
    globalMy.value.HTMLElement_ontransitionrun = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionrun.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionrun.set, 'set');
globalMy.value.HTMLElement_ontransitionrun = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitionstart', {}, true, undefined, undefined, function ontransitionstart() {
    
    return globalMy.value.HTMLElement_ontransitionstart;
}, function ontransitionstart(val) {
    
    globalMy.value.HTMLElement_ontransitionstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionstart.set, 'set');
globalMy.value.HTMLElement_ontransitionstart = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitionend', {}, true, undefined, undefined, function ontransitionend() {
    
    return globalMy.value.HTMLElement_ontransitionend;
}, function ontransitionend(val) {
    
    globalMy.value.HTMLElement_ontransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitionend.set, 'set');
globalMy.value.HTMLElement_ontransitionend = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'ontransitioncancel', {}, true, undefined, undefined, function ontransitioncancel() {
    
    return globalMy.value.HTMLElement_ontransitioncancel;
}, function ontransitioncancel(val) {
    
    globalMy.value.HTMLElement_ontransitioncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitioncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).ontransitioncancel.set, 'set');
globalMy.value.HTMLElement_ontransitioncancel = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncopy', {}, true, undefined, undefined, function oncopy() {
    
    return globalMy.value.HTMLElement_oncopy;
}, function oncopy(val) {
    
    globalMy.value.HTMLElement_oncopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncopy.set, 'set');
globalMy.value.HTMLElement_oncopy = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'oncut', {}, true, undefined, undefined, function oncut() {
    
    return globalMy.value.HTMLElement_oncut;
}, function oncut(val) {
    
    globalMy.value.HTMLElement_oncut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).oncut.set, 'set');
globalMy.value.HTMLElement_oncut = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onpaste', {}, true, undefined, undefined, function onpaste() {
    
    return globalMy.value.HTMLElement_onpaste;
}, function onpaste(val) {
    
    globalMy.value.HTMLElement_onpaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpaste.set, 'set');
globalMy.value.HTMLElement_onpaste = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'dataset', {}, true, undefined, undefined, function dataset() {
    
    return globalMy.value.HTMLElement_dataset;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).dataset.get, 'get');
globalMy.value.HTMLElement_dataset = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'nonce', '', true, undefined, undefined, function nonce() {
    
    return globalMy.value.HTMLElement_nonce;
}, function nonce(val) {
    
    globalMy.value.HTMLElement_nonce = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).nonce.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).nonce.set, 'set');
globalMy.value.HTMLElement_nonce = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'autofocus', false, true, undefined, undefined, function autofocus() {
    
    return globalMy.value.HTMLElement_autofocus;
}, function autofocus(val) {
    
    globalMy.value.HTMLElement_autofocus = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autofocus.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).autofocus.set, 'set');
globalMy.value.HTMLElement_autofocus = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'tabIndex', -1, true, undefined, undefined, function tabIndex() {
    
    return globalMy.value.HTMLElement_tabIndex;
}, function tabIndex(val) {
    
    globalMy.value.HTMLElement_tabIndex = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).tabIndex.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).tabIndex.set, 'set');
globalMy.value.HTMLElement_tabIndex = -1;
globalMy.mydefineProperty(HTMLElement.prototype, 'style', {}, true, undefined, undefined, function style() {
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['style'];
}, function style(val) {
    
    if(val instanceof CSSStyleDeclaration){
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['style'] = val;}
    else debugger
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).style.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).style.set, 'set');


globalMy.mydefineProperty(HTMLElement.prototype, 'attachInternals', function attachInternals() {
    
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.attachInternals);
globalMy.mydefineProperty(HTMLElement.prototype, 'blur', function blur() {
    
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.blur);
globalMy.mydefineProperty(HTMLElement.prototype, 'click', function click() {
    
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.click);
globalMy.mydefineProperty(HTMLElement.prototype, 'focus', function focus() {
    
}, true, undefined, true);
globalMy.functionprotect(HTMLElement.prototype.focus);
globalMy.mydefineProperty(HTMLElement.prototype, 'inert', false, true, undefined, undefined, function inert() {
    
    return globalMy.value.HTMLElement_inert;
}, function inert(val) {
    
    globalMy.value.HTMLElement_inert = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inert.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).inert.set, 'set');
globalMy.value.HTMLElement_inert = false;
globalMy.mydefineProperty(HTMLElement.prototype, 'enterKeyHint', '', true, undefined, undefined, function enterKeyHint() {
    
    return globalMy.value.HTMLElement_enterKeyHint;
}, function enterKeyHint(val) {
    
    globalMy.value.HTMLElement_enterKeyHint = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).enterKeyHint.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).enterKeyHint.set, 'set');
globalMy.value.HTMLElement_enterKeyHint = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'virtualKeyboardPolicy', '', true, undefined, undefined, function virtualKeyboardPolicy() {
    
    return globalMy.value.HTMLElement_virtualKeyboardPolicy;
}, function virtualKeyboardPolicy(val) {
    
    globalMy.value.HTMLElement_virtualKeyboardPolicy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).virtualKeyboardPolicy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).virtualKeyboardPolicy.set, 'set');
globalMy.value.HTMLElement_virtualKeyboardPolicy = '';
globalMy.mydefineProperty(HTMLElement.prototype, 'onpointerrawupdate', {}, true, undefined, undefined, function onpointerrawupdate() {
    
    return globalMy.value.HTMLElement_onpointerrawupdate;
}, function onpointerrawupdate(val) {
    
    globalMy.value.HTMLElement_onpointerrawupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerrawupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onpointerrawupdate.set, 'set');
globalMy.value.HTMLElement_onpointerrawupdate = {};
globalMy.mydefineProperty(HTMLElement.prototype, 'onbeforematch', {}, true, undefined, undefined, function onbeforematch() {
    
    return globalMy.value.HTMLElement_onbeforematch;
}, function onbeforematch(val) {
    
    globalMy.value.HTMLElement_onbeforematch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforematch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLElement.prototype).onbeforematch.set, 'set');
globalMy.value.HTMLElement_onbeforematch = {};





HTMLInputElement = function  HTMLInputElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLInputElement);
globalMy.rename(HTMLInputElement.prototype, 'HTMLInputElement')
Object.setPrototypeOf(HTMLInputElement.prototype,HTMLElement.prototype)

globalMy.mydefineProperty(HTMLInputElement.prototype,'accept','',true,undefined,undefined,function accept(){return globalMy.value.HTMLInputElement_accept;},function accept(val){globalMy.value.HTMLInputElement_accept=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).accept.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).accept.set,'set');
globalMy.value.HTMLInputElement_accept='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'alt','',true,undefined,undefined,function alt(){return globalMy.value.HTMLInputElement_alt;},function alt(val){globalMy.value.HTMLInputElement_alt=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).alt.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).alt.set,'set');
globalMy.value.HTMLInputElement_alt='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'autocomplete','',true,undefined,undefined,function autocomplete(){return globalMy.value.HTMLInputElement_autocomplete;},function autocomplete(val){globalMy.value.HTMLInputElement_autocomplete=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).autocomplete.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).autocomplete.set,'set');
globalMy.value.HTMLInputElement_autocomplete='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'defaultChecked',false,true,undefined,undefined,function defaultChecked(){return globalMy.value.HTMLInputElement_defaultChecked;},function defaultChecked(val){globalMy.value.HTMLInputElement_defaultChecked=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).defaultChecked.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).defaultChecked.set,'set');
globalMy.value.HTMLInputElement_defaultChecked=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'checked',false,true,undefined,undefined,function checked(){return globalMy.value.HTMLInputElement_checked;},function checked(val){globalMy.value.HTMLInputElement_checked=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).checked.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).checked.set,'set');
globalMy.value.HTMLInputElement_checked=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'dirName','',true,undefined,undefined,function dirName(){return globalMy.value.HTMLInputElement_dirName;},function dirName(val){globalMy.value.HTMLInputElement_dirName=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).dirName.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).dirName.set,'set');
globalMy.value.HTMLInputElement_dirName='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'disabled',false,true,undefined,undefined,function disabled(){return globalMy.value.HTMLInputElement_disabled;},function disabled(val){globalMy.value.HTMLInputElement_disabled=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).disabled.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).disabled.set,'set');
globalMy.value.HTMLInputElement_disabled=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'form',{},true,undefined,undefined,function form(){return globalMy.value.HTMLInputElement_form;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).form.get,'get');
globalMy.value.HTMLInputElement_form={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'files',{},true,undefined,undefined,function files(){return globalMy.value.HTMLInputElement_files;},function files(val){globalMy.value.HTMLInputElement_files=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).files.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).files.set,'set');
globalMy.value.HTMLInputElement_files={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'formAction','',true,undefined,undefined,function formAction(){return globalMy.value.HTMLInputElement_formAction;},function formAction(val){globalMy.value.HTMLInputElement_formAction=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formAction.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formAction.set,'set');
globalMy.value.HTMLInputElement_formAction='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'formEnctype','',true,undefined,undefined,function formEnctype(){return globalMy.value.HTMLInputElement_formEnctype;},function formEnctype(val){globalMy.value.HTMLInputElement_formEnctype=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formEnctype.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formEnctype.set,'set');
globalMy.value.HTMLInputElement_formEnctype='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'formMethod','',true,undefined,undefined,function formMethod(){return globalMy.value.HTMLInputElement_formMethod;},function formMethod(val){globalMy.value.HTMLInputElement_formMethod=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formMethod.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formMethod.set,'set');
globalMy.value.HTMLInputElement_formMethod='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'formNoValidate',false,true,undefined,undefined,function formNoValidate(){return globalMy.value.HTMLInputElement_formNoValidate;},function formNoValidate(val){globalMy.value.HTMLInputElement_formNoValidate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formNoValidate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formNoValidate.set,'set');
globalMy.value.HTMLInputElement_formNoValidate=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'formTarget','',true,undefined,undefined,function formTarget(){return globalMy.value.HTMLInputElement_formTarget;},function formTarget(val){globalMy.value.HTMLInputElement_formTarget=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formTarget.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).formTarget.set,'set');
globalMy.value.HTMLInputElement_formTarget='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'height',0,true,undefined,undefined,function height(){return globalMy.value.HTMLInputElement_height;},function height(val){globalMy.value.HTMLInputElement_height=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).height.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).height.set,'set');
globalMy.value.HTMLInputElement_height=0;
globalMy.mydefineProperty(HTMLInputElement.prototype,'indeterminate',false,true,undefined,undefined,function indeterminate(){return globalMy.value.HTMLInputElement_indeterminate;},function indeterminate(val){globalMy.value.HTMLInputElement_indeterminate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).indeterminate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).indeterminate.set,'set');
globalMy.value.HTMLInputElement_indeterminate=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'list',{},true,undefined,undefined,function list(){return globalMy.value.HTMLInputElement_list;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).list.get,'get');
globalMy.value.HTMLInputElement_list={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'max','',true,undefined,undefined,function max(){return globalMy.value.HTMLInputElement_max;},function max(val){globalMy.value.HTMLInputElement_max=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).max.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).max.set,'set');
globalMy.value.HTMLInputElement_max='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'maxLength',-1,true,undefined,undefined,function maxLength(){return globalMy.value.HTMLInputElement_maxLength;},function maxLength(val){globalMy.value.HTMLInputElement_maxLength=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).maxLength.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).maxLength.set,'set');
globalMy.value.HTMLInputElement_maxLength=-1;
globalMy.mydefineProperty(HTMLInputElement.prototype,'min','',true,undefined,undefined,function min(){return globalMy.value.HTMLInputElement_min;},function min(val){globalMy.value.HTMLInputElement_min=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).min.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).min.set,'set');
globalMy.value.HTMLInputElement_min='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'minLength',-1,true,undefined,undefined,function minLength(){return globalMy.value.HTMLInputElement_minLength;},function minLength(val){globalMy.value.HTMLInputElement_minLength=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).minLength.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).minLength.set,'set');
globalMy.value.HTMLInputElement_minLength=-1;
globalMy.mydefineProperty(HTMLInputElement.prototype,'multiple',false,true,undefined,undefined,function multiple(){return globalMy.value.HTMLInputElement_multiple;},function multiple(val){globalMy.value.HTMLInputElement_multiple=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).multiple.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).multiple.set,'set');
globalMy.value.HTMLInputElement_multiple=false;

globalMy.mydefineProperty(HTMLInputElement.prototype,'name','',true,undefined,undefined,
    function name(){
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['name'];
    },function name(val){
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['name']=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).name.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).name.set,'set');


globalMy.mydefineProperty(HTMLInputElement.prototype,'pattern','',true,undefined,undefined,function pattern(){return globalMy.value.HTMLInputElement_pattern;},function pattern(val){globalMy.value.HTMLInputElement_pattern=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).pattern.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).pattern.set,'set');
globalMy.value.HTMLInputElement_pattern='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'placeholder','',true,undefined,undefined,function placeholder(){return globalMy.value.HTMLInputElement_placeholder;},function placeholder(val){globalMy.value.HTMLInputElement_placeholder=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).placeholder.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).placeholder.set,'set');
globalMy.value.HTMLInputElement_placeholder='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'readOnly',false,true,undefined,undefined,function readOnly(){return globalMy.value.HTMLInputElement_readOnly;},function readOnly(val){globalMy.value.HTMLInputElement_readOnly=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).readOnly.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).readOnly.set,'set');
globalMy.value.HTMLInputElement_readOnly=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'required',false,true,undefined,undefined,function required(){return globalMy.value.HTMLInputElement_required;},function required(val){globalMy.value.HTMLInputElement_required=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).required.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).required.set,'set');
globalMy.value.HTMLInputElement_required=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'size',20,true,undefined,undefined,function size(){return globalMy.value.HTMLInputElement_size;},function size(val){globalMy.value.HTMLInputElement_size=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).size.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).size.set,'set');
globalMy.value.HTMLInputElement_size=20;
globalMy.mydefineProperty(HTMLInputElement.prototype,'src','',true,undefined,undefined,function src(){return globalMy.value.HTMLInputElement_src;},function src(val){globalMy.value.HTMLInputElement_src=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).src.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).src.set,'set');
globalMy.value.HTMLInputElement_src='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'step','',true,undefined,undefined,function step(){return globalMy.value.HTMLInputElement_step;},function step(val){globalMy.value.HTMLInputElement_step=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).step.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).step.set,'set');
globalMy.value.HTMLInputElement_step='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'type','hidden',true,undefined,undefined,function type(){return globalMy.value.HTMLInputElement_type;},function type(val){globalMy.value.HTMLInputElement_type=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).type.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).type.set,'set');
globalMy.value.HTMLInputElement_type='hidden';

globalMy.mydefineProperty(HTMLInputElement.prototype,'defaultValue','',true,undefined,undefined,function defaultValue(){
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['defaultValue'];
},function defaultValue(val){
var foundName = globalMy.foundName(this);
globalMy.value[foundName]['defaultValue']=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).defaultValue.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).defaultValue.set,'set');

globalMy.mydefineProperty(HTMLInputElement.prototype,'value','',true,undefined,undefined,function value(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['value'];
},function value(val){
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['value']=val;
    globalMy.value[foundName]['defaultValue']=val;
});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).value.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).value.set,'set');

globalMy.mydefineProperty(HTMLInputElement.prototype,'valueAsDate',{},true,undefined,undefined,function valueAsDate(){return globalMy.value.HTMLInputElement_valueAsDate;},function valueAsDate(val){globalMy.value.HTMLInputElement_valueAsDate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).valueAsDate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).valueAsDate.set,'set');
globalMy.value.HTMLInputElement_valueAsDate={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'valueAsNumber',NaN,true,undefined,undefined,function valueAsNumber(){return globalMy.value.HTMLInputElement_valueAsNumber;},function valueAsNumber(val){globalMy.value.HTMLInputElement_valueAsNumber=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).valueAsNumber.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).valueAsNumber.set,'set');
globalMy.value.HTMLInputElement_valueAsNumber=NaN;
globalMy.mydefineProperty(HTMLInputElement.prototype,'width',0,true,undefined,undefined,function width(){return globalMy.value.HTMLInputElement_width;},function width(val){globalMy.value.HTMLInputElement_width=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).width.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).width.set,'set');
globalMy.value.HTMLInputElement_width=0;
globalMy.mydefineProperty(HTMLInputElement.prototype,'willValidate',false,true,undefined,undefined,function willValidate(){return globalMy.value.HTMLInputElement_willValidate;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).willValidate.get,'get');
globalMy.value.HTMLInputElement_willValidate=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'validity',{},true,undefined,undefined,function validity(){return globalMy.value.HTMLInputElement_validity;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).validity.get,'get');
globalMy.value.HTMLInputElement_validity={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'validationMessage','',true,undefined,undefined,function validationMessage(){return globalMy.value.HTMLInputElement_validationMessage;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).validationMessage.get,'get');
globalMy.value.HTMLInputElement_validationMessage='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'labels',{},true,undefined,undefined,function labels(){return globalMy.value.HTMLInputElement_labels;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).labels.get,'get');
globalMy.value.HTMLInputElement_labels={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'selectionStart',{},true,undefined,undefined,function selectionStart(){return globalMy.value.HTMLInputElement_selectionStart;},function selectionStart(val){globalMy.value.HTMLInputElement_selectionStart=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).selectionStart.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).selectionStart.set,'set');
globalMy.value.HTMLInputElement_selectionStart={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'selectionEnd',{},true,undefined,undefined,function selectionEnd(){return globalMy.value.HTMLInputElement_selectionEnd;},function selectionEnd(val){globalMy.value.HTMLInputElement_selectionEnd=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).selectionEnd.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).selectionEnd.set,'set');
globalMy.value.HTMLInputElement_selectionEnd={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'selectionDirection',{},true,undefined,undefined,function selectionDirection(){return globalMy.value.HTMLInputElement_selectionDirection;},function selectionDirection(val){globalMy.value.HTMLInputElement_selectionDirection=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).selectionDirection.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).selectionDirection.set,'set');
globalMy.value.HTMLInputElement_selectionDirection={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'align','',true,undefined,undefined,function align(){return globalMy.value.HTMLInputElement_align;},function align(val){globalMy.value.HTMLInputElement_align=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).align.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).align.set,'set');
globalMy.value.HTMLInputElement_align='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'useMap','',true,undefined,undefined,function useMap(){return globalMy.value.HTMLInputElement_useMap;},function useMap(val){globalMy.value.HTMLInputElement_useMap=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).useMap.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).useMap.set,'set');
globalMy.value.HTMLInputElement_useMap='';
globalMy.mydefineProperty(HTMLInputElement.prototype,'webkitdirectory',false,true,undefined,undefined,function webkitdirectory(){return globalMy.value.HTMLInputElement_webkitdirectory;},function webkitdirectory(val){globalMy.value.HTMLInputElement_webkitdirectory=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).webkitdirectory.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).webkitdirectory.set,'set');
globalMy.value.HTMLInputElement_webkitdirectory=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'incremental',false,true,undefined,undefined,function incremental(){return globalMy.value.HTMLInputElement_incremental;},function incremental(val){globalMy.value.HTMLInputElement_incremental=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).incremental.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).incremental.set,'set');
globalMy.value.HTMLInputElement_incremental=false;
globalMy.mydefineProperty(HTMLInputElement.prototype,'checkValidity',function checkValidity(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.checkValidity);
globalMy.mydefineProperty(HTMLInputElement.prototype,'reportValidity',function reportValidity(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.reportValidity);
globalMy.mydefineProperty(HTMLInputElement.prototype,'select',function select(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.select);
globalMy.mydefineProperty(HTMLInputElement.prototype,'setCustomValidity',function setCustomValidity(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.setCustomValidity);
globalMy.mydefineProperty(HTMLInputElement.prototype,'setRangeText',function setRangeText(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.setRangeText);
globalMy.mydefineProperty(HTMLInputElement.prototype,'setSelectionRange',function setSelectionRange(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.setSelectionRange);
globalMy.mydefineProperty(HTMLInputElement.prototype,'stepDown',function stepDown(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.stepDown);
globalMy.mydefineProperty(HTMLInputElement.prototype,'stepUp',function stepUp(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.stepUp);
globalMy.mydefineProperty(HTMLInputElement.prototype,'webkitEntries',{},true,undefined,undefined,function webkitEntries(){return globalMy.value.HTMLInputElement_webkitEntries;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLInputElement.prototype).webkitEntries.get,'get');
globalMy.value.HTMLInputElement_webkitEntries={};
globalMy.mydefineProperty(HTMLInputElement.prototype,'showPicker',function showPicker(){},true,undefined,true);globalMy.functionprotect(HTMLInputElement.prototype.showPicker);


HTMLBodyElement = function HTMLBodyElement() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}

globalMy.functionprotect(HTMLBodyElement);
globalMy.rename(HTMLBodyElement.prototype,"HTMLBodyElement")
Object.setPrototypeOf(HTMLBodyElement.prototype,HTMLElement.prototype)

globalMy.mydefineProperty(HTMLBodyElement.prototype,'text','',true,undefined,undefined,function text(){return globalMy.value.HTMLBodyElement_text;},function text(val){globalMy.value.HTMLBodyElement_text=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).text.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).text.set,'set');
globalMy.value.HTMLBodyElement_text='';
globalMy.mydefineProperty(HTMLBodyElement.prototype,'link','',true,undefined,undefined,function link(){return globalMy.value.HTMLBodyElement_link;},function link(val){globalMy.value.HTMLBodyElement_link=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).link.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).link.set,'set');
globalMy.value.HTMLBodyElement_link='';
globalMy.mydefineProperty(HTMLBodyElement.prototype,'vLink','',true,undefined,undefined,function vLink(){return globalMy.value.HTMLBodyElement_vLink;},function vLink(val){globalMy.value.HTMLBodyElement_vLink=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).vLink.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).vLink.set,'set');
globalMy.value.HTMLBodyElement_vLink='';
globalMy.mydefineProperty(HTMLBodyElement.prototype,'aLink','',true,undefined,undefined,function aLink(){return globalMy.value.HTMLBodyElement_aLink;},function aLink(val){globalMy.value.HTMLBodyElement_aLink=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).aLink.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).aLink.set,'set');
globalMy.value.HTMLBodyElement_aLink='';
globalMy.mydefineProperty(HTMLBodyElement.prototype,'bgColor','',true,undefined,undefined,function bgColor(){return globalMy.value.HTMLBodyElement_bgColor;},function bgColor(val){globalMy.value.HTMLBodyElement_bgColor=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).bgColor.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).bgColor.set,'set');
globalMy.value.HTMLBodyElement_bgColor='';
globalMy.mydefineProperty(HTMLBodyElement.prototype,'background','',true,undefined,undefined,function background(){return globalMy.value.HTMLBodyElement_background;},function background(val){globalMy.value.HTMLBodyElement_background=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).background.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).background.set,'set');
globalMy.value.HTMLBodyElement_background='';
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onblur',{},true,undefined,undefined,function onblur(){return globalMy.value.HTMLBodyElement_onblur;},function onblur(val){globalMy.value.HTMLBodyElement_onblur=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onblur.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onblur.set,'set');
globalMy.value.HTMLBodyElement_onblur={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onerror',{},true,undefined,undefined,function onerror(){return globalMy.value.HTMLBodyElement_onerror;},function onerror(val){globalMy.value.HTMLBodyElement_onerror=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onerror.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onerror.set,'set');
globalMy.value.HTMLBodyElement_onerror={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onfocus',{},true,undefined,undefined,function onfocus(){return globalMy.value.HTMLBodyElement_onfocus;},function onfocus(val){globalMy.value.HTMLBodyElement_onfocus=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onfocus.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onfocus.set,'set');
globalMy.value.HTMLBodyElement_onfocus={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onload',{},true,undefined,undefined,function onload(){return globalMy.value.HTMLBodyElement_onload;},function onload(val){globalMy.value.HTMLBodyElement_onload=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onload.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onload.set,'set');
globalMy.value.HTMLBodyElement_onload={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onresize',{},true,undefined,undefined,function onresize(){return globalMy.value.HTMLBodyElement_onresize;},function onresize(val){globalMy.value.HTMLBodyElement_onresize=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onresize.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onresize.set,'set');
globalMy.value.HTMLBodyElement_onresize={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onscroll',{},true,undefined,undefined,function onscroll(){return globalMy.value.HTMLBodyElement_onscroll;},function onscroll(val){globalMy.value.HTMLBodyElement_onscroll=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onscroll.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onscroll.set,'set');
globalMy.value.HTMLBodyElement_onscroll={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onafterprint',{},true,undefined,undefined,function onafterprint(){return globalMy.value.HTMLBodyElement_onafterprint;},function onafterprint(val){globalMy.value.HTMLBodyElement_onafterprint=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onafterprint.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onafterprint.set,'set');
globalMy.value.HTMLBodyElement_onafterprint={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onbeforeprint',{},true,undefined,undefined,function onbeforeprint(){return globalMy.value.HTMLBodyElement_onbeforeprint;},function onbeforeprint(val){globalMy.value.HTMLBodyElement_onbeforeprint=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onbeforeprint.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onbeforeprint.set,'set');
globalMy.value.HTMLBodyElement_onbeforeprint={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onbeforeunload',{},true,undefined,undefined,function onbeforeunload(){return globalMy.value.HTMLBodyElement_onbeforeunload;},function onbeforeunload(val){globalMy.value.HTMLBodyElement_onbeforeunload=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onbeforeunload.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onbeforeunload.set,'set');
globalMy.value.HTMLBodyElement_onbeforeunload={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onhashchange',{},true,undefined,undefined,function onhashchange(){return globalMy.value.HTMLBodyElement_onhashchange;},function onhashchange(val){globalMy.value.HTMLBodyElement_onhashchange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onhashchange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onhashchange.set,'set');
globalMy.value.HTMLBodyElement_onhashchange={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onlanguagechange',{},true,undefined,undefined,function onlanguagechange(){return globalMy.value.HTMLBodyElement_onlanguagechange;},function onlanguagechange(val){globalMy.value.HTMLBodyElement_onlanguagechange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onlanguagechange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onlanguagechange.set,'set');
globalMy.value.HTMLBodyElement_onlanguagechange={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onmessage',{},true,undefined,undefined,function onmessage(){return globalMy.value.HTMLBodyElement_onmessage;},function onmessage(val){globalMy.value.HTMLBodyElement_onmessage=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onmessage.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onmessage.set,'set');
globalMy.value.HTMLBodyElement_onmessage={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onmessageerror',{},true,undefined,undefined,function onmessageerror(){return globalMy.value.HTMLBodyElement_onmessageerror;},function onmessageerror(val){globalMy.value.HTMLBodyElement_onmessageerror=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onmessageerror.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onmessageerror.set,'set');
globalMy.value.HTMLBodyElement_onmessageerror={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onoffline',{},true,undefined,undefined,function onoffline(){return globalMy.value.HTMLBodyElement_onoffline;},function onoffline(val){globalMy.value.HTMLBodyElement_onoffline=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onoffline.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onoffline.set,'set');
globalMy.value.HTMLBodyElement_onoffline={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'ononline',{},true,undefined,undefined,function ononline(){return globalMy.value.HTMLBodyElement_ononline;},function ononline(val){globalMy.value.HTMLBodyElement_ononline=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).ononline.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).ononline.set,'set');
globalMy.value.HTMLBodyElement_ononline={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onpagehide',{},true,undefined,undefined,function onpagehide(){return globalMy.value.HTMLBodyElement_onpagehide;},function onpagehide(val){globalMy.value.HTMLBodyElement_onpagehide=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onpagehide.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onpagehide.set,'set');
globalMy.value.HTMLBodyElement_onpagehide={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onpageshow',{},true,undefined,undefined,function onpageshow(){return globalMy.value.HTMLBodyElement_onpageshow;},function onpageshow(val){globalMy.value.HTMLBodyElement_onpageshow=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onpageshow.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onpageshow.set,'set');
globalMy.value.HTMLBodyElement_onpageshow={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onpopstate',{},true,undefined,undefined,function onpopstate(){return globalMy.value.HTMLBodyElement_onpopstate;},function onpopstate(val){globalMy.value.HTMLBodyElement_onpopstate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onpopstate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onpopstate.set,'set');
globalMy.value.HTMLBodyElement_onpopstate={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onrejectionhandled',{},true,undefined,undefined,function onrejectionhandled(){return globalMy.value.HTMLBodyElement_onrejectionhandled;},function onrejectionhandled(val){globalMy.value.HTMLBodyElement_onrejectionhandled=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onrejectionhandled.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onrejectionhandled.set,'set');
globalMy.value.HTMLBodyElement_onrejectionhandled={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onstorage',{},true,undefined,undefined,function onstorage(){return globalMy.value.HTMLBodyElement_onstorage;},function onstorage(val){globalMy.value.HTMLBodyElement_onstorage=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onstorage.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onstorage.set,'set');
globalMy.value.HTMLBodyElement_onstorage={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onunhandledrejection',{},true,undefined,undefined,function onunhandledrejection(){return globalMy.value.HTMLBodyElement_onunhandledrejection;},function onunhandledrejection(val){globalMy.value.HTMLBodyElement_onunhandledrejection=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onunhandledrejection.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onunhandledrejection.set,'set');
globalMy.value.HTMLBodyElement_onunhandledrejection={};
globalMy.mydefineProperty(HTMLBodyElement.prototype,'onunload',{},true,undefined,undefined,function onunload(){return globalMy.value.HTMLBodyElement_onunload;},function onunload(val){globalMy.value.HTMLBodyElement_onunload=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onunload.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLBodyElement.prototype).onunload.set,'set');
globalMy.value.HTMLBodyElement_onunload={};



HTMLScriptElement = function HTMLScriptElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLScriptElement);
globalMy.rename(HTMLScriptElement.prototype,"HTMLScriptElement");
Object.setPrototypeOf(HTMLScriptElement.prototype,HTMLElement.prototype);



globalMy.mydefineProperty(HTMLScriptElement.prototype,'src','https://qikan.cqvip.com/NJDrTcXo8msX/q6etnJaJUcHH.9887446.js',true,undefined,undefined,function src(){return globalMy.value.HTMLScriptElement_src;},function src(val){globalMy.value.HTMLScriptElement_src=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).src.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).src.set,'set');
globalMy.value.HTMLScriptElement_src='https://qikan.cqvip.com/NJDrTcXo8msX/q6etnJaJUcHH.9887446.js';

globalMy.mydefineProperty(HTMLScriptElement.prototype,'type','text/javascript',true,undefined,undefined,function type(){return globalMy.value.HTMLScriptElement_type;},function type(val){globalMy.value.HTMLScriptElement_type=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).type.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).type.set,'set');
globalMy.value.HTMLScriptElement_type='text/javascript';
globalMy.mydefineProperty(HTMLScriptElement.prototype,'noModule',false,true,undefined,undefined,function noModule(){return globalMy.value.HTMLScriptElement_noModule;},function noModule(val){globalMy.value.HTMLScriptElement_noModule=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).noModule.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).noModule.set,'set');
globalMy.value.HTMLScriptElement_noModule=false;
globalMy.mydefineProperty(HTMLScriptElement.prototype,'charset','utf-8',true,undefined,undefined,function charset(){return globalMy.value.HTMLScriptElement_charset;},function charset(val){globalMy.value.HTMLScriptElement_charset=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).charset.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).charset.set,'set');
globalMy.value.HTMLScriptElement_charset='utf-8';
globalMy.mydefineProperty(HTMLScriptElement.prototype,'async',false,true,undefined,undefined,function async(){return globalMy.value.HTMLScriptElement_async;},function async(val){globalMy.value.HTMLScriptElement_async=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).async.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).async.set,'set');
globalMy.value.HTMLScriptElement_async=false;
globalMy.mydefineProperty(HTMLScriptElement.prototype,'defer',false,true,undefined,undefined,function defer(){return globalMy.value.HTMLScriptElement_defer;},function defer(val){globalMy.value.HTMLScriptElement_defer=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).defer.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).defer.set,'set');
globalMy.value.HTMLScriptElement_defer=false;
globalMy.mydefineProperty(HTMLScriptElement.prototype,'crossOrigin',{},true,undefined,undefined,function crossOrigin(){return globalMy.value.HTMLScriptElement_crossOrigin;},function crossOrigin(val){globalMy.value.HTMLScriptElement_crossOrigin=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).crossOrigin.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).crossOrigin.set,'set');
globalMy.value.HTMLScriptElement_crossOrigin={};
globalMy.mydefineProperty(HTMLScriptElement.prototype,'text','',true,undefined,undefined,function text(){return globalMy.value.HTMLScriptElement_text;},function text(val){globalMy.value.HTMLScriptElement_text=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).text.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).text.set,'set');
globalMy.value.HTMLScriptElement_text='';
globalMy.mydefineProperty(HTMLScriptElement.prototype,'referrerPolicy',{},true,undefined,undefined,function referrerPolicy(){return globalMy.value.HTMLScriptElement_referrerPolicy;},function referrerPolicy(val){globalMy.value.HTMLScriptElement_referrerPolicy=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).referrerPolicy.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).referrerPolicy.set,'set');
globalMy.value.HTMLScriptElement_referrerPolicy={};
globalMy.mydefineProperty(HTMLScriptElement.prototype,'event','',true,undefined,undefined,function event(){return globalMy.value.HTMLScriptElement_event;},function event(val){globalMy.value.HTMLScriptElement_event=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).event.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).event.set,'set');
globalMy.value.HTMLScriptElement_event='';
globalMy.mydefineProperty(HTMLScriptElement.prototype,'htmlFor','',true,undefined,undefined,function htmlFor(){return globalMy.value.HTMLScriptElement_htmlFor;},function htmlFor(val){globalMy.value.HTMLScriptElement_htmlFor=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).htmlFor.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).htmlFor.set,'set');
globalMy.value.HTMLScriptElement_htmlFor='';
globalMy.mydefineProperty(HTMLScriptElement.prototype,'integrity','',true,undefined,undefined,function integrity(){return globalMy.value.HTMLScriptElement_integrity;},function integrity(val){globalMy.value.HTMLScriptElement_integrity=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).integrity.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).integrity.set,'set');
globalMy.value.HTMLScriptElement_integrity='';
globalMy.mydefineProperty(HTMLScriptElement.prototype,'fetchPriority','auto',true,undefined,undefined,function fetchPriority(){return globalMy.value.HTMLScriptElement_fetchPriority;},function fetchPriority(val){globalMy.value.HTMLScriptElement_fetchPriority=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).fetchPriority.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLScriptElement.prototype).fetchPriority.set,'set');
globalMy.value.HTMLScriptElement_fetchPriority='auto';
HTMLDivElement = function HTMLDivElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLDivElement);
globalMy.rename(HTMLDivElement.prototype, "HTMLDivElement")
Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype)
HTMLDivElement.__proto__ = HTMLElement;

globalMy.mydefineProperty(HTMLDivElement.prototype, 'align', '', true, undefined, undefined, function align() {
    
    for(var foundName in globalMy.element){
        if(globalMy.element[foundName] === this){
            try{var val = globalMy.value[foundName]['align'];}
            catch (e) {
                e=(e);console.log("bug  => get div align")
                globalMy.value[foundName]['align'] = '';
                val = '';
            }

            break
        }
    }
    return val;
}, function align(val) {
    

    var foundName = globalMy.foundName(this)
    globalMy.value[foundName]['align'] = val;

    return undefined;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLDivElement.prototype).align.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLDivElement.prototype).align.set, 'set');



HTMLSpanElement = function HTMLSpanElement(){
globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)

}

Object.setPrototypeOf(HTMLSpanElement.prototype,HTMLElement.prototype);
HTMLSpanElement.__proto__ = HTMLElement;
globalMy.functionprotect(HTMLSpanElement)
globalMy.rename(HTMLSpanElement.prototype,"HTMLSpanElement")



HTMLImageElement = function HTMLImageElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)

}

globalMy.mydefineProperty(HTMLImageElement.prototype, 'alt', undefined, true, true, undefined, function alt() {
    
}, function alt() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).alt.get, 'get alt')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).alt.set, 'set alt')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'src', undefined, true, true, undefined, function src() {
    
}, function src() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).src.get, 'get src')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).src.set, 'set src')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'srcset', undefined, true, true, undefined, function srcset() {
    
}, function srcset() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).srcset.get, 'get srcset')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).srcset.set, 'set srcset')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'sizes', undefined, true, true, undefined, function sizes() {
    
}, function sizes() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).sizes.get, 'get sizes')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).sizes.set, 'set sizes')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'crossOrigin', undefined, true, true, undefined, function crossOrigin() {
    
}, function crossOrigin() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).crossOrigin.get, 'get crossOrigin')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).crossOrigin.set, 'set crossOrigin')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'useMap', undefined, true, true, undefined, function useMap() {
    
}, function useMap() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).useMap.get, 'get useMap')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).useMap.set, 'set useMap')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'isMap', undefined, true, true, undefined, function isMap() {
    
}, function isMap() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).isMap.get, 'get isMap')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).isMap.set, 'set isMap')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'width', undefined, true, true, undefined, function width() {
    
}, function width() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).width.get, 'get width')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).width.set, 'set width')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'height', undefined, true, true, undefined, function height() {
    
}, function height() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).height.get, 'get height')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).height.set, 'set height')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'naturalWidth', undefined, true, true, undefined, function naturalWidth() {
    
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).naturalWidth.get, 'get naturalWidth')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'naturalHeight', undefined, true, true, undefined, function naturalHeight() {
    
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).naturalHeight.get, 'get naturalHeight')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'complete', undefined, true, true, undefined, function complete() {
    
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).complete.get, 'get complete')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'currentSrc', undefined, true, true, undefined, function currentSrc() {
    
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).currentSrc.get, 'get currentSrc')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'referrerPolicy', undefined, true, true, undefined, function referrerPolicy() {
    
}, function referrerPolicy() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).referrerPolicy.get, 'get referrerPolicy')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).referrerPolicy.set, 'set referrerPolicy')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'decoding', undefined, true, true, undefined, function decoding() {
    
}, function decoding() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).decoding.get, 'get decoding')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).decoding.set, 'set decoding')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'name', undefined, true, true, undefined, function name() {
    
}, function name() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).name.get, 'get name')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).name.set, 'set name')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'lowsrc', undefined, true, true, undefined, function lowsrc() {
    
}, function lowsrc() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).lowsrc.get, 'get lowsrc')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).lowsrc.set, 'set lowsrc')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'align', undefined, true, true, undefined, function align() {
    
}, function align() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).align.get, 'get align')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).align.set, 'set align')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'hspace', undefined, true, true, undefined, function hspace() {
    
}, function hspace() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).hspace.get, 'get hspace')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).hspace.set, 'set hspace')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'vspace', undefined, true, true, undefined, function vspace() {
    
}, function vspace() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).vspace.get, 'get vspace')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).vspace.set, 'set vspace')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'longDesc', undefined, true, true, undefined, function longDesc() {
    
}, function longDesc() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).longDesc.get, 'get longDesc')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).longDesc.set, 'set longDesc')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'border', undefined, true, true, undefined, function border() {
    
}, function border() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).border.get, 'get border')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).border.set, 'set border')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'x', undefined, true, true, undefined, function x() {
    
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).x.get, 'get x')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'y', undefined, true, true, undefined, function y() {
    
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).y.get, 'get y')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'decode', function decode() {
    
}, true, true, true, undefined, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).decode.value, 'decode')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'fetchPriority', undefined, true, true, undefined, function fetchPriority() {
    
}, function fetchPriority() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).fetchPriority.get, 'get fetchPriority')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).fetchPriority.set, 'set fetchPriority')
globalMy.mydefineProperty(HTMLImageElement.prototype, 'loading', undefined, true, true, undefined, function loading() {
    
}, function loading() {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).loading.get, 'get loading')
globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLImageElement.prototype).loading.set, 'set loading')

Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype)
HTMLImageElement.__proto__ = HTMLElement;
globalMy.functionprotect(HTMLImageElement)
globalMy.rename(HTMLImageElement.prototype, "HTMLImageElement")

HTMLAnchorElement = function HTMLAnchorElement (){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLAnchorElement);
globalMy.rename(HTMLAnchorElement.prototype,"HTMLAnchorElement")
Object.setPrototypeOf(HTMLAnchorElement.prototype,HTMLElement.prototype);

// HTMLAnchorElement.prototype.__proto__ = HTMLElement.prototype
HTMLAnchorElement.__proto__ = HTMLElement;

globalMy.mydefineProperty(HTMLAnchorElement.prototype,'target','',true,undefined,undefined,function target(){return globalMy.value.HTMLAnchorElement_target;},function target(val){globalMy.value.HTMLAnchorElement_target=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).target.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).target.set,'set');
globalMy.value.HTMLAnchorElement_target='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'download','',true,undefined,undefined,function download(){return globalMy.value.HTMLAnchorElement_download;},function download(val){globalMy.value.HTMLAnchorElement_download=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).download.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).download.set,'set');
globalMy.value.HTMLAnchorElement_download='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'ping','',true,undefined,undefined,function ping(){return globalMy.value.HTMLAnchorElement_ping;},function ping(val){globalMy.value.HTMLAnchorElement_ping=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).ping.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).ping.set,'set');
globalMy.value.HTMLAnchorElement_ping='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'rel','',true,undefined,undefined,function rel(){return globalMy.value.HTMLAnchorElement_rel;},function rel(val){globalMy.value.HTMLAnchorElement_rel=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).rel.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).rel.set,'set');
globalMy.value.HTMLAnchorElement_rel='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'relList',{},true,undefined,undefined,function relList(){return globalMy.value.HTMLAnchorElement_relList;},function relList(val){globalMy.value.HTMLAnchorElement_relList=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).relList.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).relList.set,'set');
globalMy.value.HTMLAnchorElement_relList={};
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'hreflang','',true,undefined,undefined,function hreflang(){return globalMy.value.HTMLAnchorElement_hreflang;},function hreflang(val){globalMy.value.HTMLAnchorElement_hreflang=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hreflang.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hreflang.set,'set');
globalMy.value.HTMLAnchorElement_hreflang='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'type','',true,undefined,undefined,function type(){return globalMy.value.HTMLAnchorElement_type;},function type(val){globalMy.value.HTMLAnchorElement_type=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).type.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).type.set,'set');
globalMy.value.HTMLAnchorElement_type='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'referrerPolicy','',true,undefined,undefined,function referrerPolicy(){return globalMy.value.HTMLAnchorElement_referrerPolicy;},function referrerPolicy(val){globalMy.value.HTMLAnchorElement_referrerPolicy=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).referrerPolicy.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).referrerPolicy.set,'set');
globalMy.value.HTMLAnchorElement_referrerPolicy='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'text','',true,undefined,undefined,function text(){return globalMy.value.HTMLAnchorElement_text;},function text(val){globalMy.value.HTMLAnchorElement_text=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).text.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).text.set,'set');
globalMy.value.HTMLAnchorElement_text='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'coords','',true,undefined,undefined,function coords(){return globalMy.value.HTMLAnchorElement_coords;},function coords(val){globalMy.value.HTMLAnchorElement_coords=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).coords.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).coords.set,'set');
globalMy.value.HTMLAnchorElement_coords='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'charset','',true,undefined,undefined,function charset(){return globalMy.value.HTMLAnchorElement_charset;},function charset(val){globalMy.value.HTMLAnchorElement_charset=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).charset.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).charset.set,'set');
globalMy.value.HTMLAnchorElement_charset='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'name','',true,undefined,undefined,function name(){return globalMy.value.HTMLAnchorElement_name;},function name(val){globalMy.value.HTMLAnchorElement_name=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).name.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).name.set,'set');
globalMy.value.HTMLAnchorElement_name='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'rev','',true,undefined,undefined,function rev(){return globalMy.value.HTMLAnchorElement_rev;},function rev(val){globalMy.value.HTMLAnchorElement_rev=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).rev.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).rev.set,'set');
globalMy.value.HTMLAnchorElement_rev='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'shape','',true,undefined,undefined,function shape(){return globalMy.value.HTMLAnchorElement_shape;},function shape(val){globalMy.value.HTMLAnchorElement_shape=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).shape.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).shape.set,'set');
globalMy.value.HTMLAnchorElement_shape='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'origin','',true,undefined,undefined,function origin(){return globalMy.value.HTMLAnchorElement_origin;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).origin.get,'get');
globalMy.value.HTMLAnchorElement_origin='http://qikan.cqvip.com';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'protocol',':',true,undefined,undefined,function protocol(){return globalMy.value.HTMLAnchorElement_protocol;},function protocol(val){globalMy.value.HTMLAnchorElement_protocol=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).protocol.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).protocol.set,'set');
globalMy.value.HTMLAnchorElement_protocol='http:';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'username','',true,undefined,undefined,function username(){return globalMy.value.HTMLAnchorElement_username;},function username(val){globalMy.value.HTMLAnchorElement_username=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).username.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).username.set,'set');
globalMy.value.HTMLAnchorElement_username='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'password','',true,undefined,undefined,function password(){return globalMy.value.HTMLAnchorElement_password;},function password(val){globalMy.value.HTMLAnchorElement_password=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).password.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).password.set,'set');
globalMy.value.HTMLAnchorElement_password='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'host','',true,undefined,undefined,function host(){return globalMy.value.HTMLAnchorElement_host;},function host(val){globalMy.value.HTMLAnchorElement_host=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).host.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).host.set,'set');
globalMy.value.HTMLAnchorElement_host='qikan.cqvip.com';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'hostname','',true,undefined,undefined,function hostname(){return globalMy.value.HTMLAnchorElement_hostname;},function hostname(val){globalMy.value.HTMLAnchorElement_hostname=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hostname.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hostname.set,'set');
globalMy.value.HTMLAnchorElement_hostname='qikan.cqvip.com';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'port','',true,undefined,undefined,function port(){return globalMy.value.HTMLAnchorElement_port;},function port(val){globalMy.value.HTMLAnchorElement_port=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).port.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).port.set,'set');
globalMy.value.HTMLAnchorElement_port='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'pathname','',true,undefined,undefined,function pathname(){return globalMy.value.HTMLAnchorElement_pathname;},function pathname(val){globalMy.value.HTMLAnchorElement_pathname=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).pathname.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).pathname.set,'set');
globalMy.value.HTMLAnchorElement_pathname='/Search/SearchList';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'search','',true,undefined,undefined,function search(){return globalMy.value.HTMLAnchorElement_search;},function search(val){globalMy.value.HTMLAnchorElement_search=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).search.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).search.set,'set');
globalMy.value.HTMLAnchorElement_search='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'hash','',true,undefined,undefined,function hash(){return globalMy.value.HTMLAnchorElement_hash;},function hash(val){globalMy.value.HTMLAnchorElement_hash=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hash.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hash.set,'set');
globalMy.value.HTMLAnchorElement_hash='';
globalMy.mydefineProperty(HTMLAnchorElement.prototype,'href','',true,undefined,undefined,function href(){return globalMy.value.HTMLAnchorElement_href;},function href(val){globalMy.value.HTMLAnchorElement_href=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).href.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).href.set,'set');
globalMy.value.HTMLAnchorElement_href='http://qikan.cqvip.com/Search/SearchList';

globalMy.mydefineProperty(HTMLAnchorElement.prototype,'hrefTranslate','',true,undefined,undefined,function hrefTranslate(){return globalMy.value.HTMLAnchorElement_hrefTranslate;},function hrefTranslate(val){globalMy.value.HTMLAnchorElement_hrefTranslate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hrefTranslate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLAnchorElement.prototype).hrefTranslate.set,'set');
globalMy.value.HTMLAnchorElement_hrefTranslate='';

CanvasRenderingContext2D = function CanvasRenderingContext2D(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
};
globalMy.functionprotect(CanvasRenderingContext2D);
globalMy.rename(CanvasRenderingContext2D.prototype,"CanvasRenderingContext2D");



globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'canvas',{},true,undefined,undefined,function canvas(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.element[foundName]["canvas"];},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).canvas.get,'get');



globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'globalAlpha',1,true,undefined,undefined,function globalAlpha(){return globalMy.value.CanvasRenderingContext2D_globalAlpha;},function globalAlpha(val){globalMy.value.CanvasRenderingContext2D_globalAlpha=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).globalAlpha.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).globalAlpha.set,'set');
globalMy.value.CanvasRenderingContext2D_globalAlpha=1;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'globalCompositeOperation','source-over',true,undefined,undefined,function globalCompositeOperation(){return globalMy.value.CanvasRenderingContext2D_globalCompositeOperation;},function globalCompositeOperation(val){globalMy.value.CanvasRenderingContext2D_globalCompositeOperation=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).globalCompositeOperation.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).globalCompositeOperation.set,'set');
globalMy.value.CanvasRenderingContext2D_globalCompositeOperation='source-over';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'filter','none',true,undefined,undefined,function filter(){return globalMy.value.CanvasRenderingContext2D_filter;},function filter(val){globalMy.value.CanvasRenderingContext2D_filter=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).filter.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).filter.set,'set');
globalMy.value.CanvasRenderingContext2D_filter='none';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'imageSmoothingEnabled',true,true,undefined,undefined,function imageSmoothingEnabled(){return globalMy.value.CanvasRenderingContext2D_imageSmoothingEnabled;},function imageSmoothingEnabled(val){globalMy.value.CanvasRenderingContext2D_imageSmoothingEnabled=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).imageSmoothingEnabled.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).imageSmoothingEnabled.set,'set');
globalMy.value.CanvasRenderingContext2D_imageSmoothingEnabled=true;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'imageSmoothingQuality','low',true,undefined,undefined,function imageSmoothingQuality(){return globalMy.value.CanvasRenderingContext2D_imageSmoothingQuality;},function imageSmoothingQuality(val){globalMy.value.CanvasRenderingContext2D_imageSmoothingQuality=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).imageSmoothingQuality.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).imageSmoothingQuality.set,'set');
globalMy.value.CanvasRenderingContext2D_imageSmoothingQuality='low';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'strokeStyle','#000000',true,undefined,undefined,function strokeStyle(){return globalMy.value.CanvasRenderingContext2D_strokeStyle;},function strokeStyle(val){globalMy.value.CanvasRenderingContext2D_strokeStyle=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).strokeStyle.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).strokeStyle.set,'set');
globalMy.value.CanvasRenderingContext2D_strokeStyle='#000000';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'fillStyle','rgba(240, 110, 53, 0.4)',true,undefined,undefined,function fillStyle(){return globalMy.value.CanvasRenderingContext2D_fillStyle;},function fillStyle(val){globalMy.value.CanvasRenderingContext2D_fillStyle=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fillStyle.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fillStyle.set,'set');
globalMy.value.CanvasRenderingContext2D_fillStyle='rgba(240, 110, 53, 0.4)';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'shadowOffsetX',0,true,undefined,undefined,function shadowOffsetX(){return globalMy.value.CanvasRenderingContext2D_shadowOffsetX;},function shadowOffsetX(val){globalMy.value.CanvasRenderingContext2D_shadowOffsetX=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowOffsetX.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowOffsetX.set,'set');
globalMy.value.CanvasRenderingContext2D_shadowOffsetX=0;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'shadowOffsetY',0,true,undefined,undefined,function shadowOffsetY(){return globalMy.value.CanvasRenderingContext2D_shadowOffsetY;},function shadowOffsetY(val){globalMy.value.CanvasRenderingContext2D_shadowOffsetY=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowOffsetY.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowOffsetY.set,'set');
globalMy.value.CanvasRenderingContext2D_shadowOffsetY=0;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'shadowBlur',0,true,undefined,undefined,function shadowBlur(){return globalMy.value.CanvasRenderingContext2D_shadowBlur;},function shadowBlur(val){globalMy.value.CanvasRenderingContext2D_shadowBlur=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowBlur.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowBlur.set,'set');
globalMy.value.CanvasRenderingContext2D_shadowBlur=0;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'shadowColor','rgba(0, 0, 0, 0)',true,undefined,undefined,function shadowColor(){return globalMy.value.CanvasRenderingContext2D_shadowColor;},function shadowColor(val){globalMy.value.CanvasRenderingContext2D_shadowColor=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowColor.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).shadowColor.set,'set');
globalMy.value.CanvasRenderingContext2D_shadowColor='rgba(0, 0, 0, 0)';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'lineWidth',1,true,undefined,undefined,function lineWidth(){return globalMy.value.CanvasRenderingContext2D_lineWidth;},function lineWidth(val){globalMy.value.CanvasRenderingContext2D_lineWidth=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineWidth.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineWidth.set,'set');
globalMy.value.CanvasRenderingContext2D_lineWidth=1;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'lineCap','butt',true,undefined,undefined,function lineCap(){return globalMy.value.CanvasRenderingContext2D_lineCap;},function lineCap(val){globalMy.value.CanvasRenderingContext2D_lineCap=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineCap.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineCap.set,'set');
globalMy.value.CanvasRenderingContext2D_lineCap='butt';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'lineJoin','miter',true,undefined,undefined,function lineJoin(){return globalMy.value.CanvasRenderingContext2D_lineJoin;},function lineJoin(val){globalMy.value.CanvasRenderingContext2D_lineJoin=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineJoin.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineJoin.set,'set');
globalMy.value.CanvasRenderingContext2D_lineJoin='miter';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'miterLimit',10,true,undefined,undefined,function miterLimit(){return globalMy.value.CanvasRenderingContext2D_miterLimit;},function miterLimit(val){globalMy.value.CanvasRenderingContext2D_miterLimit=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).miterLimit.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).miterLimit.set,'set');
globalMy.value.CanvasRenderingContext2D_miterLimit=10;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'lineDashOffset',0,true,undefined,undefined,function lineDashOffset(){return globalMy.value.CanvasRenderingContext2D_lineDashOffset;},function lineDashOffset(val){globalMy.value.CanvasRenderingContext2D_lineDashOffset=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineDashOffset.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).lineDashOffset.set,'set');
globalMy.value.CanvasRenderingContext2D_lineDashOffset=0;
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'font','18px Arial',true,undefined,undefined,function font(){return globalMy.value.CanvasRenderingContext2D_font;},function font(val){globalMy.value.CanvasRenderingContext2D_font=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).font.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).font.set,'set');
globalMy.value.CanvasRenderingContext2D_font='18px Arial';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'textAlign','start',true,undefined,undefined,function textAlign(){return globalMy.value.CanvasRenderingContext2D_textAlign;},function textAlign(val){globalMy.value.CanvasRenderingContext2D_textAlign=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).textAlign.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).textAlign.set,'set');
globalMy.value.CanvasRenderingContext2D_textAlign='start';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'textBaseline','top',true,undefined,undefined,function textBaseline(){return globalMy.value.CanvasRenderingContext2D_textBaseline;},function textBaseline(val){globalMy.value.CanvasRenderingContext2D_textBaseline=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).textBaseline.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).textBaseline.set,'set');
globalMy.value.CanvasRenderingContext2D_textBaseline='top';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'direction','ltr',true,undefined,undefined,function direction(){return globalMy.value.CanvasRenderingContext2D_direction;},function direction(val){globalMy.value.CanvasRenderingContext2D_direction=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).direction.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).direction.set,'set');
globalMy.value.CanvasRenderingContext2D_direction='ltr';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'fontKerning','auto',true,undefined,undefined,function fontKerning(){return globalMy.value.CanvasRenderingContext2D_fontKerning;},function fontKerning(val){globalMy.value.CanvasRenderingContext2D_fontKerning=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fontKerning.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fontKerning.set,'set');
globalMy.value.CanvasRenderingContext2D_fontKerning='auto';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'fontStretch','normal',true,undefined,undefined,function fontStretch(){return globalMy.value.CanvasRenderingContext2D_fontStretch;},function fontStretch(val){globalMy.value.CanvasRenderingContext2D_fontStretch=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fontStretch.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fontStretch.set,'set');
globalMy.value.CanvasRenderingContext2D_fontStretch='normal';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'fontVariantCaps','normal',true,undefined,undefined,function fontVariantCaps(){return globalMy.value.CanvasRenderingContext2D_fontVariantCaps;},function fontVariantCaps(val){globalMy.value.CanvasRenderingContext2D_fontVariantCaps=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fontVariantCaps.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).fontVariantCaps.set,'set');
globalMy.value.CanvasRenderingContext2D_fontVariantCaps='normal';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'letterSpacing','0px',true,undefined,undefined,function letterSpacing(){return globalMy.value.CanvasRenderingContext2D_letterSpacing;},function letterSpacing(val){globalMy.value.CanvasRenderingContext2D_letterSpacing=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).letterSpacing.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).letterSpacing.set,'set');
globalMy.value.CanvasRenderingContext2D_letterSpacing='0px';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'textRendering','auto',true,undefined,undefined,function textRendering(){return globalMy.value.CanvasRenderingContext2D_textRendering;},function textRendering(val){globalMy.value.CanvasRenderingContext2D_textRendering=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).textRendering.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).textRendering.set,'set');
globalMy.value.CanvasRenderingContext2D_textRendering='auto';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'wordSpacing','0px',true,undefined,undefined,function wordSpacing(){return globalMy.value.CanvasRenderingContext2D_wordSpacing;},function wordSpacing(val){globalMy.value.CanvasRenderingContext2D_wordSpacing=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).wordSpacing.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(CanvasRenderingContext2D.prototype).wordSpacing.set,'set');
globalMy.value.CanvasRenderingContext2D_wordSpacing='0px';
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'clip',function clip(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.clip);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'createConicGradient',function createConicGradient(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.createConicGradient);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'createImageData',function createImageData(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.createImageData);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'createLinearGradient',function createLinearGradient(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.createLinearGradient);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'createPattern',function createPattern(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.createPattern);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'createRadialGradient',function createRadialGradient(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.createRadialGradient);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'drawFocusIfNeeded',function drawFocusIfNeeded(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.drawFocusIfNeeded);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'drawImage',function drawImage(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.drawImage);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'fill',function fill(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.fill);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'fillText',function fillText(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.fillText);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'getContextAttributes',function getContextAttributes(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.getContextAttributes);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'getImageData',function getImageData(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.getImageData);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'getLineDash',function getLineDash(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.getLineDash);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'getTransform',function getTransform(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.getTransform);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'isContextLost',function isContextLost(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.isContextLost);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'isPointInPath',function isPointInPath(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.isPointInPath);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'isPointInStroke',function isPointInStroke(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.isPointInStroke);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'measureText',function measureText(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.measureText);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'putImageData',function putImageData(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.putImageData);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'reset',function reset(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.reset);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'roundRect',function roundRect(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.roundRect);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'save',function save(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.save);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'scale',function scale(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.scale);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'setLineDash',function setLineDash(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.setLineDash);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'setTransform',function setTransform(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.setTransform);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'stroke',function stroke(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.stroke);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'strokeText',function strokeText(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.strokeText);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'transform',function transform(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.transform);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'translate',function translate(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.translate);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'arc',function arc(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.arc);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'arcTo',function arcTo(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.arcTo);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'beginPath',function beginPath(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.beginPath);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'bezierCurveTo',function bezierCurveTo(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.bezierCurveTo);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'clearRect',function clearRect(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.clearRect);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'closePath',function closePath(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.closePath);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'ellipse',function ellipse(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.ellipse);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'fillRect',function fillRect(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.fillRect);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'lineTo',function lineTo(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.lineTo);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'moveTo',function moveTo(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.moveTo);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'quadraticCurveTo',function quadraticCurveTo(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.quadraticCurveTo);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'rect',function rect(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.rect);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'resetTransform',function resetTransform(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.resetTransform);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'restore',function restore(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.restore);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'rotate',function rotate(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.rotate);
globalMy.mydefineProperty(CanvasRenderingContext2D.prototype,'strokeRect',function strokeRect(){},true,undefined,true);globalMy.functionprotect(CanvasRenderingContext2D.prototype.strokeRect);


HTMLCanvasElement = function HTMLCanvasElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLCanvasElement)
globalMy.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement")
HTMLCanvasElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype)

globalMy.mydefineProperty(HTMLCanvasElement.prototype,'width',300,true,undefined,undefined,function width(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['width'];
    },function width(val){
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['width'] = val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).width.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).width.set,'set');


globalMy.mydefineProperty(HTMLCanvasElement.prototype,'height',150,true,undefined,undefined,function height(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['height'];
},function height(val){
var foundName = globalMy.foundName(this);
globalMy.value[foundName]['height']=val;
});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).height.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLCanvasElement.prototype).height.set,'set');


globalMy.mydefineProperty(HTMLCanvasElement.prototype,'captureStream',function captureStream(){},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.captureStream);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'getContext',function getContext(tagName){
    
    return globalMy.getContext(this,tagName)

},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.getContext);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'toBlob',function toBlob(){},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.toBlob);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'toDataURL',function toDataURL(){
    
    var foundName = globalMy.foundName(this)
//    直接return 一个base64得了
    return globalMy.value[foundName]['toDataURL'];
},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.toDataURL);
globalMy.mydefineProperty(HTMLCanvasElement.prototype,'transferControlToOffscreen',function transferControlToOffscreen(){},true,undefined,true);globalMy.functionprotect(HTMLCanvasElement.prototype.transferControlToOffscreen);



HTMLMediaElement =function HTMLMediaElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLMediaElement)
globalMy.rename(HTMLMediaElement.prototype, "HTMLMediaElement")
HTMLMediaElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLMediaElement.prototype, HTMLElement.prototype)


globalMy.mydefineProperty(HTMLMediaElement.prototype,'error',{},true,undefined,undefined,function error(){return globalMy.value.HTMLMediaElement_error;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).error.get,'get');
globalMy.value.HTMLMediaElement_error={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'src','',true,undefined,undefined,function src(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['src'];},
    function src(val){
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['src'] = val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).src.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).src.set,'set');

globalMy.mydefineProperty(HTMLMediaElement.prototype,'currentSrc','',true,undefined,undefined,function currentSrc(){
var foundName = globalMy.foundName(this);
return globalMy.value[foundName]['currentSrc'];},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).currentSrc.get,'get');


globalMy.mydefineProperty(HTMLMediaElement.prototype,'crossOrigin',{},true,undefined,undefined,function crossOrigin(){return globalMy.value.HTMLMediaElement_crossOrigin;},function crossOrigin(val){globalMy.value.HTMLMediaElement_crossOrigin=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).crossOrigin.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).crossOrigin.set,'set');
globalMy.value.HTMLMediaElement_crossOrigin={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'networkState',0,true,undefined,undefined,function networkState(){return globalMy.value.HTMLMediaElement_networkState;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).networkState.get,'get');
globalMy.value.HTMLMediaElement_networkState=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'preload','metadata',true,undefined,undefined,function preload(){return globalMy.value.HTMLMediaElement_preload;},function preload(val){globalMy.value.HTMLMediaElement_preload=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preload.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preload.set,'set');
globalMy.value.HTMLMediaElement_preload='metadata';
globalMy.mydefineProperty(HTMLMediaElement.prototype,'buffered',{},true,undefined,undefined,function buffered(){return globalMy.value.HTMLMediaElement_buffered;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).buffered.get,'get');
globalMy.value.HTMLMediaElement_buffered={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'readyState',0,true,undefined,undefined,function readyState(){return globalMy.value.HTMLMediaElement_readyState;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).readyState.get,'get');
globalMy.value.HTMLMediaElement_readyState=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'seeking',false,true,undefined,undefined,function seeking(){return globalMy.value.HTMLMediaElement_seeking;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).seeking.get,'get');
globalMy.value.HTMLMediaElement_seeking=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'currentTime',0,true,undefined,undefined,function currentTime(){return globalMy.value.HTMLMediaElement_currentTime;},function currentTime(val){globalMy.value.HTMLMediaElement_currentTime=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).currentTime.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).currentTime.set,'set');
globalMy.value.HTMLMediaElement_currentTime=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'duration',NaN,true,undefined,undefined,function duration(){return globalMy.value.HTMLMediaElement_duration;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).duration.get,'get');
globalMy.value.HTMLMediaElement_duration=NaN;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'paused',true,true,undefined,undefined,function paused(){return globalMy.value.HTMLMediaElement_paused;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).paused.get,'get');
globalMy.value.HTMLMediaElement_paused=true;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'defaultPlaybackRate',1,true,undefined,undefined,function defaultPlaybackRate(){return globalMy.value.HTMLMediaElement_defaultPlaybackRate;},function defaultPlaybackRate(val){globalMy.value.HTMLMediaElement_defaultPlaybackRate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultPlaybackRate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultPlaybackRate.set,'set');
globalMy.value.HTMLMediaElement_defaultPlaybackRate=1;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'playbackRate',1,true,undefined,undefined,function playbackRate(){return globalMy.value.HTMLMediaElement_playbackRate;},function playbackRate(val){globalMy.value.HTMLMediaElement_playbackRate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).playbackRate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).playbackRate.set,'set');
globalMy.value.HTMLMediaElement_playbackRate=1;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'played',{},true,undefined,undefined,function played(){return globalMy.value.HTMLMediaElement_played;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).played.get,'get');
globalMy.value.HTMLMediaElement_played={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'seekable',{},true,undefined,undefined,function seekable(){return globalMy.value.HTMLMediaElement_seekable;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).seekable.get,'get');
globalMy.value.HTMLMediaElement_seekable={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'ended',false,true,undefined,undefined,function ended(){return globalMy.value.HTMLMediaElement_ended;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).ended.get,'get');
globalMy.value.HTMLMediaElement_ended=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'autoplay',false,true,undefined,undefined,function autoplay(){return globalMy.value.HTMLMediaElement_autoplay;},function autoplay(val){globalMy.value.HTMLMediaElement_autoplay=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).autoplay.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).autoplay.set,'set');
globalMy.value.HTMLMediaElement_autoplay=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'loop',false,true,undefined,undefined,function loop(){return globalMy.value.HTMLMediaElement_loop;},function loop(val){globalMy.value.HTMLMediaElement_loop=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).loop.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).loop.set,'set');
globalMy.value.HTMLMediaElement_loop=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'controls',false,true,undefined,undefined,function controls(){return globalMy.value.HTMLMediaElement_controls;},function controls(val){globalMy.value.HTMLMediaElement_controls=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controls.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controls.set,'set');
globalMy.value.HTMLMediaElement_controls=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'controlsList',{},true,undefined,undefined,function controlsList(){return globalMy.value.HTMLMediaElement_controlsList;},function controlsList(val){globalMy.value.HTMLMediaElement_controlsList=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controlsList.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).controlsList.set,'set');
globalMy.value.HTMLMediaElement_controlsList={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'volume',1,true,undefined,undefined,function volume(){return globalMy.value.HTMLMediaElement_volume;},function volume(val){globalMy.value.HTMLMediaElement_volume=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).volume.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).volume.set,'set');
globalMy.value.HTMLMediaElement_volume=1;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'muted',false,true,undefined,undefined,function muted(){return globalMy.value.HTMLMediaElement_muted;},function muted(val){globalMy.value.HTMLMediaElement_muted=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).muted.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).muted.set,'set');
globalMy.value.HTMLMediaElement_muted=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'defaultMuted',false,true,undefined,undefined,function defaultMuted(){return globalMy.value.HTMLMediaElement_defaultMuted;},function defaultMuted(val){globalMy.value.HTMLMediaElement_defaultMuted=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultMuted.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).defaultMuted.set,'set');
globalMy.value.HTMLMediaElement_defaultMuted=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'textTracks',{},true,undefined,undefined,function textTracks(){return globalMy.value.HTMLMediaElement_textTracks;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).textTracks.get,'get');
globalMy.value.HTMLMediaElement_textTracks={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'webkitAudioDecodedByteCount',0,true,undefined,undefined,function webkitAudioDecodedByteCount(){return globalMy.value.HTMLMediaElement_webkitAudioDecodedByteCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).webkitAudioDecodedByteCount.get,'get');
globalMy.value.HTMLMediaElement_webkitAudioDecodedByteCount=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'webkitVideoDecodedByteCount',0,true,undefined,undefined,function webkitVideoDecodedByteCount(){return globalMy.value.HTMLMediaElement_webkitVideoDecodedByteCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).webkitVideoDecodedByteCount.get,'get');
globalMy.value.HTMLMediaElement_webkitVideoDecodedByteCount=0;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'onencrypted',{},true,undefined,undefined,function onencrypted(){return globalMy.value.HTMLMediaElement_onencrypted;},function onencrypted(val){globalMy.value.HTMLMediaElement_onencrypted=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onencrypted.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onencrypted.set,'set');
globalMy.value.HTMLMediaElement_onencrypted={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'onwaitingforkey',{},true,undefined,undefined,function onwaitingforkey(){return globalMy.value.HTMLMediaElement_onwaitingforkey;},function onwaitingforkey(val){globalMy.value.HTMLMediaElement_onwaitingforkey=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onwaitingforkey.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).onwaitingforkey.set,'set');
globalMy.value.HTMLMediaElement_onwaitingforkey={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'srcObject',{},true,undefined,undefined,function srcObject(){return globalMy.value.HTMLMediaElement_srcObject;},function srcObject(val){globalMy.value.HTMLMediaElement_srcObject=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).srcObject.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).srcObject.set,'set');
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
globalMy.mydefineProperty(HTMLMediaElement.prototype,'addTextTrack',function addTextTrack(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.addTextTrack);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'canPlayType',function canPlayType(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.canPlayType);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'captureStream',function captureStream(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.captureStream);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'load',function load(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.load);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'pause',function pause(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.pause);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'play',function play(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.play);
globalMy.mydefineProperty(HTMLMediaElement.prototype,'preservesPitch',true,true,undefined,undefined,function preservesPitch(){return globalMy.value.HTMLMediaElement_preservesPitch;},function preservesPitch(val){globalMy.value.HTMLMediaElement_preservesPitch=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preservesPitch.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).preservesPitch.set,'set');
globalMy.value.HTMLMediaElement_preservesPitch=true;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'sinkId','',true,undefined,undefined,function sinkId(){return globalMy.value.HTMLMediaElement_sinkId;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).sinkId.get,'get');
globalMy.value.HTMLMediaElement_sinkId='';
globalMy.mydefineProperty(HTMLMediaElement.prototype,'remote',{},true,undefined,undefined,function remote(){return globalMy.value.HTMLMediaElement_remote;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).remote.get,'get');
globalMy.value.HTMLMediaElement_remote={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'disableRemotePlayback',false,true,undefined,undefined,function disableRemotePlayback(){return globalMy.value.HTMLMediaElement_disableRemotePlayback;},function disableRemotePlayback(val){globalMy.value.HTMLMediaElement_disableRemotePlayback=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).disableRemotePlayback.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).disableRemotePlayback.set,'set');
globalMy.value.HTMLMediaElement_disableRemotePlayback=false;
globalMy.mydefineProperty(HTMLMediaElement.prototype,'setSinkId',function setSinkId(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.setSinkId);

globalMy.mydefineProperty(HTMLMediaElement.prototype,'mediaKeys',{},true,undefined,undefined,function mediaKeys(){return globalMy.value.HTMLMediaElement_mediaKeys;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype).mediaKeys.get,'get');
globalMy.value.HTMLMediaElement_mediaKeys={};
globalMy.mydefineProperty(HTMLMediaElement.prototype,'setMediaKeys',function setMediaKeys(){},true,undefined,true);globalMy.functionprotect(HTMLMediaElement.prototype.setMediaKeys);

HTMLVideoElement = function HTMLVideoElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(HTMLVideoElement)
globalMy.rename(HTMLVideoElement.prototype, "HTMLVideoElement")
HTMLVideoElement.__proto__ = HTMLMediaElement;
Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype)



globalMy.mydefineProperty(HTMLVideoElement.prototype,'width',0,true,undefined,undefined,function width(){return globalMy.value.HTMLVideoElement_width;},function width(val){globalMy.value.HTMLVideoElement_width=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).width.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).width.set,'set');
globalMy.value.HTMLVideoElement_width=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'height',0,true,undefined,undefined,function height(){return globalMy.value.HTMLVideoElement_height;},function height(val){globalMy.value.HTMLVideoElement_height=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).height.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).height.set,'set');
globalMy.value.HTMLVideoElement_height=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'videoWidth',0,true,undefined,undefined,function videoWidth(){return globalMy.value.HTMLVideoElement_videoWidth;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).videoWidth.get,'get');
globalMy.value.HTMLVideoElement_videoWidth=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'videoHeight',0,true,undefined,undefined,function videoHeight(){return globalMy.value.HTMLVideoElement_videoHeight;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).videoHeight.get,'get');
globalMy.value.HTMLVideoElement_videoHeight=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'poster','',true,undefined,undefined,function poster(){return globalMy.value.HTMLVideoElement_poster;},function poster(val){globalMy.value.HTMLVideoElement_poster=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).poster.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).poster.set,'set');
globalMy.value.HTMLVideoElement_poster='';
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitDecodedFrameCount',0,true,undefined,undefined,function webkitDecodedFrameCount(){return globalMy.value.HTMLVideoElement_webkitDecodedFrameCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitDecodedFrameCount.get,'get');
globalMy.value.HTMLVideoElement_webkitDecodedFrameCount=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitDroppedFrameCount',0,true,undefined,undefined,function webkitDroppedFrameCount(){return globalMy.value.HTMLVideoElement_webkitDroppedFrameCount;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitDroppedFrameCount.get,'get');
globalMy.value.HTMLVideoElement_webkitDroppedFrameCount=0;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'playsInline',false,true,undefined,undefined,function playsInline(){return globalMy.value.HTMLVideoElement_playsInline;},function playsInline(val){globalMy.value.HTMLVideoElement_playsInline=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).playsInline.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).playsInline.set,'set');
globalMy.value.HTMLVideoElement_playsInline=false;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitSupportsFullscreen',true,true,undefined,undefined,function webkitSupportsFullscreen(){return globalMy.value.HTMLVideoElement_webkitSupportsFullscreen;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitSupportsFullscreen.get,'get');
globalMy.value.HTMLVideoElement_webkitSupportsFullscreen=true;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitDisplayingFullscreen',false,true,undefined,undefined,function webkitDisplayingFullscreen(){return globalMy.value.HTMLVideoElement_webkitDisplayingFullscreen;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).webkitDisplayingFullscreen.get,'get');
globalMy.value.HTMLVideoElement_webkitDisplayingFullscreen=false;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'onenterpictureinpicture',{},true,undefined,undefined,function onenterpictureinpicture(){return globalMy.value.HTMLVideoElement_onenterpictureinpicture;},function onenterpictureinpicture(val){globalMy.value.HTMLVideoElement_onenterpictureinpicture=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onenterpictureinpicture.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onenterpictureinpicture.set,'set');
globalMy.value.HTMLVideoElement_onenterpictureinpicture={};
globalMy.mydefineProperty(HTMLVideoElement.prototype,'onleavepictureinpicture',{},true,undefined,undefined,function onleavepictureinpicture(){return globalMy.value.HTMLVideoElement_onleavepictureinpicture;},function onleavepictureinpicture(val){globalMy.value.HTMLVideoElement_onleavepictureinpicture=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onleavepictureinpicture.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).onleavepictureinpicture.set,'set');
globalMy.value.HTMLVideoElement_onleavepictureinpicture={};
globalMy.mydefineProperty(HTMLVideoElement.prototype,'disablePictureInPicture',false,true,undefined,undefined,function disablePictureInPicture(){return globalMy.value.HTMLVideoElement_disablePictureInPicture;},function disablePictureInPicture(val){globalMy.value.HTMLVideoElement_disablePictureInPicture=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).disablePictureInPicture.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLVideoElement.prototype).disablePictureInPicture.set,'set');
globalMy.value.HTMLVideoElement_disablePictureInPicture=false;
globalMy.mydefineProperty(HTMLVideoElement.prototype,'cancelVideoFrameCallback',function cancelVideoFrameCallback(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.cancelVideoFrameCallback);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'requestVideoFrameCallback',function requestVideoFrameCallback(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.requestVideoFrameCallback);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'getVideoPlaybackQuality',function getVideoPlaybackQuality(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.getVideoPlaybackQuality);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'requestPictureInPicture',function requestPictureInPicture(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.requestPictureInPicture);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitEnterFullScreen',function webkitEnterFullScreen(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitEnterFullScreen);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitEnterFullscreen',function webkitEnterFullscreen(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitEnterFullscreen);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitExitFullScreen',function webkitExitFullScreen(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitExitFullScreen);
globalMy.mydefineProperty(HTMLVideoElement.prototype,'webkitExitFullscreen',function webkitExitFullscreen(){},true,undefined,true);globalMy.functionprotect(HTMLVideoElement.prototype.webkitExitFullscreen);
HTMLAudioElement  = function HTMLAudioElement () {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLAudioElement)
globalMy.rename(HTMLAudioElement.prototype, "HTMLAudioElement")
HTMLAudioElement.__proto__ = HTMLMediaElement;
Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype)


HTMLFormElement = function HTMLFormElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLFormElement);
globalMy.rename(HTMLFormElement.prototype,"HTMLFormElement")
Object.setPrototypeOf(HTMLFormElement.prototype,HTMLElement.prototype)
HTMLFormElement.__proto__ = HTMLElement;

globalMy.mydefineProperty(HTMLFormElement.prototype,'acceptCharset','',true,undefined,undefined,function acceptCharset(){return globalMy.value.HTMLFormElement_acceptCharset;},function acceptCharset(val){globalMy.value.HTMLFormElement_acceptCharset=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).acceptCharset.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).acceptCharset.set,'set');
globalMy.value.HTMLFormElement_acceptCharset='';
globalMy.mydefineProperty(HTMLFormElement.prototype,'action','',true,undefined,undefined,function action(){return globalMy.value.HTMLFormElement_action;},function action(val){globalMy.value.HTMLFormElement_action=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).action.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).action.set,'set');
globalMy.value.HTMLFormElement_action='';
globalMy.mydefineProperty(HTMLFormElement.prototype,'autocomplete','on',true,undefined,undefined,function autocomplete(){return globalMy.value.HTMLFormElement_autocomplete;},function autocomplete(val){globalMy.value.HTMLFormElement_autocomplete=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).autocomplete.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).autocomplete.set,'set');
globalMy.value.HTMLFormElement_autocomplete='on';
globalMy.mydefineProperty(HTMLFormElement.prototype,'enctype','application/x-www-form-urlencoded',true,undefined,undefined,function enctype(){return globalMy.value.HTMLFormElement_enctype;},function enctype(val){globalMy.value.HTMLFormElement_enctype=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).enctype.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).enctype.set,'set');
globalMy.value.HTMLFormElement_enctype='application/x-www-form-urlencoded';
globalMy.mydefineProperty(HTMLFormElement.prototype,'encoding','application/x-www-form-urlencoded',true,undefined,undefined,function encoding(){return globalMy.value.HTMLFormElement_encoding;},function encoding(val){globalMy.value.HTMLFormElement_encoding=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).encoding.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).encoding.set,'set');
globalMy.value.HTMLFormElement_encoding='application/x-www-form-urlencoded';
globalMy.mydefineProperty(HTMLFormElement.prototype,'method','get',true,undefined,undefined,function method(){return globalMy.value.HTMLFormElement_method;},function method(val){globalMy.value.HTMLFormElement_method=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).method.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).method.set,'set');
globalMy.value.HTMLFormElement_method='get';
globalMy.mydefineProperty(HTMLFormElement.prototype,'name','',true,undefined,undefined,function name(){return globalMy.value.HTMLFormElement_name;},function name(val){globalMy.value.HTMLFormElement_name=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).name.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).name.set,'set');
globalMy.value.HTMLFormElement_name='';
globalMy.mydefineProperty(HTMLFormElement.prototype,'noValidate',false,true,undefined,undefined,function noValidate(){return globalMy.value.HTMLFormElement_noValidate;},function noValidate(val){globalMy.value.HTMLFormElement_noValidate=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).noValidate.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).noValidate.set,'set');
globalMy.value.HTMLFormElement_noValidate=false;
globalMy.mydefineProperty(HTMLFormElement.prototype,'target','',true,undefined,undefined,function target(){return globalMy.value.HTMLFormElement_target;},function target(val){globalMy.value.HTMLFormElement_target=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).target.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).target.set,'set');
globalMy.value.HTMLFormElement_target='';
globalMy.mydefineProperty(HTMLFormElement.prototype,'elements',{},true,undefined,undefined,function elements(){return globalMy.value.HTMLFormElement_elements;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).elements.get,'get');
globalMy.value.HTMLFormElement_elements={};
globalMy.mydefineProperty(HTMLFormElement.prototype,'length',0,true,undefined,undefined,function length(){return globalMy.value.HTMLFormElement_length;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLFormElement.prototype).length.get,'get');
globalMy.value.HTMLFormElement_length=0;
globalMy.mydefineProperty(HTMLFormElement.prototype,'checkValidity',function checkValidity(){},true,undefined,true);globalMy.functionprotect(HTMLFormElement.prototype.checkValidity);
globalMy.mydefineProperty(HTMLFormElement.prototype,'reportValidity',function reportValidity(){},true,undefined,true);globalMy.functionprotect(HTMLFormElement.prototype.reportValidity);
globalMy.mydefineProperty(HTMLFormElement.prototype,'requestSubmit',function requestSubmit(){},true,undefined,true);globalMy.functionprotect(HTMLFormElement.prototype.requestSubmit);
globalMy.mydefineProperty(HTMLFormElement.prototype,'reset',function reset(){},true,undefined,true);globalMy.functionprotect(HTMLFormElement.prototype.reset);
globalMy.mydefineProperty(HTMLFormElement.prototype,'submit',function submit(){},true,undefined,true);globalMy.functionprotect(HTMLFormElement.prototype.submit);


HTMLHtmlElement = function HTMLHtmlElement(){
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLHtmlElement)
globalMy.rename(HTMLHtmlElement.prototype,"HTMLHtmlElement")

HTMLHtmlElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLHtmlElement.prototype,HTMLElement.prototype)

globalMy.mydefineProperty(HTMLHtmlElement.prototype,'version','',true,undefined,undefined,function version(){return globalMy.value.HTMLHtmlElement_version;},function version(val){globalMy.value.HTMLHtmlElement_version=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLHtmlElement.prototype).version.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLHtmlElement.prototype).version.set,'set');
globalMy.value.HTMLHtmlElement_version='';

Document = function Document() {
    this.location = {};
};
globalMy.functionprotect(Document);
Document.__proto__ = Node;
Object.setPrototypeOf(Document.prototype, Node.prototype);
globalMy.rename(Document.prototype, "Document")

globalMy.mydefineProperty(Document.prototype, 'implementation', {}, true, undefined, undefined, function implementation() {
    
    return globalMy.value.Document_implementation;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).implementation.get, 'get');
globalMy.value.Document_implementation = {};
globalMy.mydefineProperty(Document.prototype, 'URL', 'chrome://newtab/', true, undefined, undefined, function URL() {
    
    return globalMy.value.Document_URL;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).URL.get, 'get');
globalMy.value.Document_URL = 'chrome://newtab/';
globalMy.mydefineProperty(Document.prototype, 'documentURI', 'chrome://newtab/', true, undefined, undefined, function documentURI() {
    
    return globalMy.value.Document_documentURI;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).documentURI.get, 'get');
globalMy.value.Document_documentURI = 'chrome://newtab/';
globalMy.mydefineProperty(Document.prototype, 'compatMode', 'CSS1Compat', true, undefined, undefined, function compatMode() {
    
    return globalMy.value.Document_compatMode;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).compatMode.get, 'get');
globalMy.value.Document_compatMode = 'CSS1Compat';
globalMy.mydefineProperty(Document.prototype, 'characterSet', 'UTF-8', true, undefined, undefined, function characterSet() {
    
    return globalMy.value.Document_characterSet;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).characterSet.get, 'get');
globalMy.value.Document_characterSet = 'UTF-8';
globalMy.mydefineProperty(Document.prototype, 'charset', 'UTF-8', true, undefined, undefined, function charset() {
    
    return globalMy.value.Document_charset;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).charset.get, 'get');
globalMy.value.Document_charset = 'UTF-8';
globalMy.mydefineProperty(Document.prototype, 'inputEncoding', 'UTF-8', true, undefined, undefined, function inputEncoding() {
    
    return globalMy.value.Document_inputEncoding;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).inputEncoding.get, 'get');
globalMy.value.Document_inputEncoding = 'UTF-8';
globalMy.mydefineProperty(Document.prototype, 'contentType', 'text/html', true, undefined, undefined, function contentType() {
    
    return globalMy.value.Document_contentType;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).contentType.get, 'get');
globalMy.value.Document_contentType = 'text/html';
globalMy.mydefineProperty(Document.prototype, 'doctype', {}, true, undefined, undefined, function doctype() {
    
    return globalMy.value.Document_doctype;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).doctype.get, 'get');
globalMy.value.Document_doctype = {};

//检测webdriver、selenium
globalMy.mydefineProperty(Document.prototype, 'documentElement', {}, true, undefined, undefined, function documentElement() {
    
    return globalMy.getDocumentElement();
}, undefined);

globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).documentElement.get, 'get');

// globalMy.value.Document_documentElement = {
//     style: globalMy.value.document_element_style,
//     getAttribute: function getAttribute(tagName) {
//         
//         var tag_name = tagName.toLowerCase() + '';
//         return null;
//     }
// };
// Object.setPrototypeOf(globalMy.value.Document_documentElement, HTMLHtmlElement.prototype)


globalMy.mydefineProperty(Document.prototype, 'xmlEncoding', {}, true, undefined, undefined, function xmlEncoding() {
    
    return globalMy.value.Document_xmlEncoding;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlEncoding.get, 'get');
globalMy.value.Document_xmlEncoding = {};
globalMy.mydefineProperty(Document.prototype, 'xmlVersion', {}, true, undefined, undefined, function xmlVersion() {
    
    return globalMy.value.Document_xmlVersion;
}, function xmlVersion(val) {
    
    globalMy.value.Document_xmlVersion = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlVersion.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlVersion.set, 'set');
globalMy.value.Document_xmlVersion = {};
globalMy.mydefineProperty(Document.prototype, 'xmlStandalone', false, true, undefined, undefined, function xmlStandalone() {
    
    return globalMy.value.Document_xmlStandalone;
}, function xmlStandalone(val) {
    
    globalMy.value.Document_xmlStandalone = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlStandalone.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).xmlStandalone.set, 'set');
globalMy.value.Document_xmlStandalone = false;
globalMy.mydefineProperty(Document.prototype, 'domain', 'newtab', true, undefined, undefined, function domain() {
    
    return globalMy.value.Document_domain;
}, function domain(val) {
    
    globalMy.value.Document_domain = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).domain.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).domain.set, 'set');
globalMy.value.Document_domain = 'newtab';
globalMy.mydefineProperty(Document.prototype, 'referrer', '', true, undefined, undefined, function referrer() {
    
    return globalMy.value.Document_referrer;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).referrer.get, 'get');
globalMy.value.Document_referrer = '';
globalMy.mydefineProperty(Document.prototype, 'cookie', '', true, undefined, undefined, function cookie() {
    
    return globalMy.value.Document_cookie;
}, function cookie(val) {
    console.log('document[setcookie]=>[' + val + ']');
    
    var cookie = val.split(";")[0];
    var ncookie = cookie.split("=");
    var flag = false;
    var cache = globalMy.value.Document_cookie.split("; ");
    cache = cache.map(function (a) {
        if (a.split("=")[0] === ncookie[0]) {
            flag = true;
            return cookie;
        }
        return a;
    })
    globalMy.value.Document_cookie = cache.join("; ");
    if (!flag) {
        globalMy.value.Document_cookie += "; " + cookie;
    }
    if (globalMy.value.Document_cookie.indexOf("; ") === 0) {
        globalMy.value.Document_cookie = globalMy.value.Document_cookie.slice(2, globalMy.value.Document_cookie.length)
    }
    console.log('document[setcookie] end =>[' + globalMy.value.Document_cookie + ']');
})
;globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).cookie.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).cookie.set, 'set');
globalMy.value.Document_cookie = '';
globalMy.mydefineProperty(Document.prototype, 'lastModified', '06/04/2022 17:42:39', true, undefined, undefined, function lastModified() {
    
    return globalMy.value.Document_lastModified;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).lastModified.get, 'get');
globalMy.value.Document_lastModified = '06/04/2022 17:42:39';
globalMy.mydefineProperty(Document.prototype, 'readyState', 'complete', true, undefined, undefined, function readyState() {
    
    return globalMy.value.Document_readyState;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).readyState.get, 'get');
globalMy.value.Document_readyState = 'complete';
globalMy.mydefineProperty(Document.prototype, 'title', '新标签页', true, undefined, undefined, function title() {
    
    return globalMy.value.Document_title;
}, function title(val) {
    
    globalMy.value.Document_title = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).title.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).title.set, 'set');
globalMy.value.Document_title = '新标签页';
globalMy.mydefineProperty(Document.prototype, 'dir', 'ltr', true, undefined, undefined, function dir() {
    
    return globalMy.value.Document_dir;
}, function dir(val) {
    
    globalMy.value.Document_dir = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).dir.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).dir.set, 'set');
globalMy.value.Document_dir = 'ltr';

//特殊
globalMy.mydefineProperty(Document.prototype, 'body', {}, true, undefined, undefined, function body() {
    
    return globalMy.element.body;
}, function body(val) {
    
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).body.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).body.set, 'set');


globalMy.mydefineProperty(Document.prototype, 'head', {}, true, undefined, undefined, function head() {
    
    return globalMy.element.head;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).head.get, 'get');

//需特殊处理
globalMy.mydefineProperty(Document.prototype, 'images', {}, true, undefined, undefined, function images() {
    
    return globalMy.getElementsByTagName(this,"img");
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).images.get, 'get');



globalMy.mydefineProperty(Document.prototype, 'embeds', {}, true, undefined, undefined, function embeds() {
    
    return globalMy.value.Document_embeds;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).embeds.get, 'get');
globalMy.value.Document_embeds = {};

globalMy.mydefineProperty(Document.prototype, 'plugins', [], true, undefined, undefined, function plugins() {
    
    return globalMy.value.Document_plugins;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).plugins.get, 'get');
globalMy.value.Document_plugins = [];

globalMy.mydefineProperty(Document.prototype, 'links', {}, true, undefined, undefined, function links() {
    
    return globalMy.value.Document_links;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).links.get, 'get');
globalMy.value.Document_links = {};
globalMy.mydefineProperty(Document.prototype, 'forms', {}, true, undefined, undefined, function forms() {
    
    return globalMy.value.Document_forms;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).forms.get, 'get');
globalMy.value.Document_forms = {};

globalMy.mydefineProperty(Document.prototype, 'currentScript', {}, true, undefined, undefined, function currentScript() {
    
    return globalMy.value.Document_currentScript;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).currentScript.get, 'get');
globalMy.value.Document_currentScript = {};
globalMy.mydefineProperty(Document.prototype, 'defaultView', {}, true, undefined, undefined, function defaultView() {
    
    return globalMy.value.Document_defaultView;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).defaultView.get, 'get');
globalMy.value.Document_defaultView = {};
globalMy.mydefineProperty(Document.prototype, 'designMode', 'off', true, undefined, undefined, function designMode() {
    
    return globalMy.value.Document_designMode;
}, function designMode(val) {
    
    globalMy.value.Document_designMode = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).designMode.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).designMode.set, 'set');
globalMy.value.Document_designMode = 'off';
globalMy.mydefineProperty(Document.prototype, 'onreadystatechange', {}, true, undefined, undefined, function onreadystatechange() {
    
    return globalMy.value.Document_onreadystatechange;
}, function onreadystatechange(val) {
    
    globalMy.value.Document_onreadystatechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreadystatechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreadystatechange.set, 'set');
globalMy.value.Document_onreadystatechange = {};
globalMy.mydefineProperty(Document.prototype, 'anchors', {}, true, undefined, undefined, function anchors() {
    
    return globalMy.value.Document_anchors;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).anchors.get, 'get');
globalMy.value.Document_anchors = {};
globalMy.mydefineProperty(Document.prototype, 'applets', {}, true, undefined, undefined, function applets() {
    
    return globalMy.value.Document_applets;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).applets.get, 'get');
globalMy.value.Document_applets = {};
globalMy.mydefineProperty(Document.prototype, 'fgColor', '', true, undefined, undefined, function fgColor() {
    
    return globalMy.value.Document_fgColor;
}, function fgColor(val) {
    
    globalMy.value.Document_fgColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fgColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fgColor.set, 'set');
globalMy.value.Document_fgColor = '';
globalMy.mydefineProperty(Document.prototype, 'linkColor', '', true, undefined, undefined, function linkColor() {
    
    return globalMy.value.Document_linkColor;
}, function linkColor(val) {
    
    globalMy.value.Document_linkColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).linkColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).linkColor.set, 'set');
globalMy.value.Document_linkColor = '';
globalMy.mydefineProperty(Document.prototype, 'vlinkColor', '', true, undefined, undefined, function vlinkColor() {
    
    return globalMy.value.Document_vlinkColor;
}, function vlinkColor(val) {
    
    globalMy.value.Document_vlinkColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).vlinkColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).vlinkColor.set, 'set');
globalMy.value.Document_vlinkColor = '';
globalMy.mydefineProperty(Document.prototype, 'alinkColor', '', true, undefined, undefined, function alinkColor() {
    
    return globalMy.value.Document_alinkColor;
}, function alinkColor(val) {
    
    globalMy.value.Document_alinkColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).alinkColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).alinkColor.set, 'set');
globalMy.value.Document_alinkColor = '';
globalMy.mydefineProperty(Document.prototype, 'bgColor', '', true, undefined, undefined, function bgColor() {
    
    return globalMy.value.Document_bgColor;
}, function bgColor(val) {
    
    globalMy.value.Document_bgColor = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).bgColor.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).bgColor.set, 'set');
globalMy.value.Document_bgColor = '';

globalMy.mydefineProperty(Document.prototype, 'all', [], true, undefined, undefined, function all() {
    
    return globalMy.getHTMLAllColletion();
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).all.get, 'get');


globalMy.mydefineProperty(Document.prototype, 'scrollingElement', {}, true, undefined, undefined, function scrollingElement() {
    
    return globalMy.value.Document_scrollingElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).scrollingElement.get, 'get');
globalMy.value.Document_scrollingElement = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerlockchange', {}, true, undefined, undefined, function onpointerlockchange() {
    
    return globalMy.value.Document_onpointerlockchange;
}, function onpointerlockchange(val) {
    
    globalMy.value.Document_onpointerlockchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockchange.set, 'set');
globalMy.value.Document_onpointerlockchange = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerlockerror', {}, true, undefined, undefined, function onpointerlockerror() {
    
    return globalMy.value.Document_onpointerlockerror;
}, function onpointerlockerror(val) {
    
    globalMy.value.Document_onpointerlockerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerlockerror.set, 'set');
globalMy.value.Document_onpointerlockerror = {};
globalMy.mydefineProperty(Document.prototype, 'hidden', false, true, undefined, undefined, function hidden() {
    
    return globalMy.value.Document_hidden;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).hidden.get, 'get');
globalMy.value.Document_hidden = false;
globalMy.mydefineProperty(Document.prototype, 'visibilityState', 'visible', true, undefined, undefined, function visibilityState() {
    
    return globalMy.value.Document_visibilityState;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).visibilityState.get, 'get');
globalMy.value.Document_visibilityState = 'visible';
globalMy.mydefineProperty(Document.prototype, 'wasDiscarded', false, true, undefined, undefined, function wasDiscarded() {
    
    return globalMy.value.Document_wasDiscarded;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).wasDiscarded.get, 'get');
globalMy.value.Document_wasDiscarded = false;
globalMy.mydefineProperty(Document.prototype, 'featurePolicy', {}, true, undefined, undefined, function featurePolicy() {
    
    return globalMy.value.Document_featurePolicy;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).featurePolicy.get, 'get');
globalMy.value.Document_featurePolicy = {};
globalMy.mydefineProperty(Document.prototype, 'webkitVisibilityState', 'visible', true, undefined, undefined, function webkitVisibilityState() {
    
    return globalMy.value.Document_webkitVisibilityState;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitVisibilityState.get, 'get');
globalMy.value.Document_webkitVisibilityState = 'visible';
globalMy.mydefineProperty(Document.prototype, 'webkitHidden', false, true, undefined, undefined, function webkitHidden() {
    
    return globalMy.value.Document_webkitHidden;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitHidden.get, 'get');
globalMy.value.Document_webkitHidden = false;
globalMy.mydefineProperty(Document.prototype, 'onbeforecopy', {}, true, undefined, undefined, function onbeforecopy() {
    
    return globalMy.value.Document_onbeforecopy;
}, function onbeforecopy(val) {
    
    globalMy.value.Document_onbeforecopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecopy.set, 'set');
globalMy.value.Document_onbeforecopy = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforecut', {}, true, undefined, undefined, function onbeforecut() {
    
    return globalMy.value.Document_onbeforecut;
}, function onbeforecut(val) {
    
    globalMy.value.Document_onbeforecut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforecut.set, 'set');
globalMy.value.Document_onbeforecut = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforepaste', {}, true, undefined, undefined, function onbeforepaste() {
    
    return globalMy.value.Document_onbeforepaste;
}, function onbeforepaste(val) {
    
    globalMy.value.Document_onbeforepaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforepaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforepaste.set, 'set');
globalMy.value.Document_onbeforepaste = {};
globalMy.mydefineProperty(Document.prototype, 'onfreeze', {}, true, undefined, undefined, function onfreeze() {
    
    return globalMy.value.Document_onfreeze;
}, function onfreeze(val) {
    
    globalMy.value.Document_onfreeze = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfreeze.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfreeze.set, 'set');
globalMy.value.Document_onfreeze = {};
globalMy.mydefineProperty(Document.prototype, 'onresume', {}, true, undefined, undefined, function onresume() {
    
    return globalMy.value.Document_onresume;
}, function onresume(val) {
    
    globalMy.value.Document_onresume = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresume.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresume.set, 'set');
globalMy.value.Document_onresume = {};
globalMy.mydefineProperty(Document.prototype, 'onsearch', {}, true, undefined, undefined, function onsearch() {
    
    return globalMy.value.Document_onsearch;
}, function onsearch(val) {
    
    globalMy.value.Document_onsearch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsearch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsearch.set, 'set');
globalMy.value.Document_onsearch = {};
globalMy.mydefineProperty(Document.prototype, 'onvisibilitychange', {}, true, undefined, undefined, function onvisibilitychange() {
    
    return globalMy.value.Document_onvisibilitychange;
}, function onvisibilitychange(val) {
    
    globalMy.value.Document_onvisibilitychange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvisibilitychange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvisibilitychange.set, 'set');
globalMy.value.Document_onvisibilitychange = {};
globalMy.mydefineProperty(Document.prototype, 'fullscreenEnabled', true, true, undefined, undefined, function fullscreenEnabled() {
    
    return globalMy.value.Document_fullscreenEnabled;
}, function fullscreenEnabled(val) {
    
    globalMy.value.Document_fullscreenEnabled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenEnabled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenEnabled.set, 'set');
globalMy.value.Document_fullscreenEnabled = true;
globalMy.mydefineProperty(Document.prototype, 'fullscreen', false, true, undefined, undefined, function fullscreen() {
    
    return globalMy.value.Document_fullscreen;
}, function fullscreen(val) {
    
    globalMy.value.Document_fullscreen = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreen.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreen.set, 'set');
globalMy.value.Document_fullscreen = false;
globalMy.mydefineProperty(Document.prototype, 'onfullscreenchange', {}, true, undefined, undefined, function onfullscreenchange() {
    
    return globalMy.value.Document_onfullscreenchange;
}, function onfullscreenchange(val) {
    
    globalMy.value.Document_onfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenchange.set, 'set');
globalMy.value.Document_onfullscreenchange = {};
globalMy.mydefineProperty(Document.prototype, 'onfullscreenerror', {}, true, undefined, undefined, function onfullscreenerror() {
    
    return globalMy.value.Document_onfullscreenerror;
}, function onfullscreenerror(val) {
    
    globalMy.value.Document_onfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfullscreenerror.set, 'set');
globalMy.value.Document_onfullscreenerror = {};
globalMy.mydefineProperty(Document.prototype, 'webkitIsFullScreen', false, true, undefined, undefined, function webkitIsFullScreen() {
    
    return globalMy.value.Document_webkitIsFullScreen;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitIsFullScreen.get, 'get');
globalMy.value.Document_webkitIsFullScreen = false;
globalMy.mydefineProperty(Document.prototype, 'webkitCurrentFullScreenElement', {}, true, undefined, undefined, function webkitCurrentFullScreenElement() {
    
    return globalMy.value.Document_webkitCurrentFullScreenElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitCurrentFullScreenElement.get, 'get');
globalMy.value.Document_webkitCurrentFullScreenElement = {};
globalMy.mydefineProperty(Document.prototype, 'webkitFullscreenEnabled', true, true, undefined, undefined, function webkitFullscreenEnabled() {
    
    return globalMy.value.Document_webkitFullscreenEnabled;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitFullscreenEnabled.get, 'get');
globalMy.value.Document_webkitFullscreenEnabled = true;
globalMy.mydefineProperty(Document.prototype, 'webkitFullscreenElement', {}, true, undefined, undefined, function webkitFullscreenElement() {
    
    return globalMy.value.Document_webkitFullscreenElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).webkitFullscreenElement.get, 'get');
globalMy.value.Document_webkitFullscreenElement = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitfullscreenchange', {}, true, undefined, undefined, function onwebkitfullscreenchange() {
    
    return globalMy.value.Document_onwebkitfullscreenchange;
}, function onwebkitfullscreenchange(val) {
    
    globalMy.value.Document_onwebkitfullscreenchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenchange.set, 'set');
globalMy.value.Document_onwebkitfullscreenchange = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitfullscreenerror', {}, true, undefined, undefined, function onwebkitfullscreenerror() {
    
    return globalMy.value.Document_onwebkitfullscreenerror;
}, function onwebkitfullscreenerror(val) {
    
    globalMy.value.Document_onwebkitfullscreenerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitfullscreenerror.set, 'set');
globalMy.value.Document_onwebkitfullscreenerror = {};
globalMy.mydefineProperty(Document.prototype, 'rootElement', {}, true, undefined, undefined, function rootElement() {
    
    return globalMy.value.Document_rootElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).rootElement.get, 'get');
globalMy.value.Document_rootElement = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforexrselect', {}, true, undefined, undefined, function onbeforexrselect() {
    
    return globalMy.value.Document_onbeforexrselect;
}, function onbeforexrselect(val) {
    
    globalMy.value.Document_onbeforexrselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforexrselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforexrselect.set, 'set');
globalMy.value.Document_onbeforexrselect = {};
globalMy.mydefineProperty(Document.prototype, 'onabort', {}, true, undefined, undefined, function onabort() {
    
    return globalMy.value.Document_onabort;
}, function onabort(val) {
    
    globalMy.value.Document_onabort = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onabort.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onabort.set, 'set');
globalMy.value.Document_onabort = {};
globalMy.mydefineProperty(Document.prototype, 'onblur', {}, true, undefined, undefined, function onblur() {
    
    return globalMy.value.Document_onblur;
}, function onblur(val) {
    
    globalMy.value.Document_onblur = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onblur.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onblur.set, 'set');
globalMy.value.Document_onblur = {};
globalMy.mydefineProperty(Document.prototype, 'oncancel', {}, true, undefined, undefined, function oncancel() {
    
    return globalMy.value.Document_oncancel;
}, function oncancel(val) {
    
    globalMy.value.Document_oncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncancel.set, 'set');
globalMy.value.Document_oncancel = {};
globalMy.mydefineProperty(Document.prototype, 'oncanplay', {}, true, undefined, undefined, function oncanplay() {
    
    return globalMy.value.Document_oncanplay;
}, function oncanplay(val) {
    
    globalMy.value.Document_oncanplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplay.set, 'set');
globalMy.value.Document_oncanplay = {};
globalMy.mydefineProperty(Document.prototype, 'oncanplaythrough', {}, true, undefined, undefined, function oncanplaythrough() {
    
    return globalMy.value.Document_oncanplaythrough;
}, function oncanplaythrough(val) {
    
    globalMy.value.Document_oncanplaythrough = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplaythrough.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncanplaythrough.set, 'set');
globalMy.value.Document_oncanplaythrough = {};
globalMy.mydefineProperty(Document.prototype, 'onchange', {}, true, undefined, undefined, function onchange() {
    
    return globalMy.value.Document_onchange;
}, function onchange(val) {
    
    globalMy.value.Document_onchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onchange.set, 'set');
globalMy.value.Document_onchange = {};
globalMy.mydefineProperty(Document.prototype, 'onclick', {}, true, undefined, undefined, function onclick() {
    
    return globalMy.value.Document_onclick;
}, function onclick(val) {
    
    globalMy.value.Document_onclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclick.set, 'set');
globalMy.value.Document_onclick = {};
globalMy.mydefineProperty(Document.prototype, 'onclose', {}, true, undefined, undefined, function onclose() {
    
    return globalMy.value.Document_onclose;
}, function onclose(val) {
    
    globalMy.value.Document_onclose = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclose.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onclose.set, 'set');
globalMy.value.Document_onclose = {};
globalMy.mydefineProperty(Document.prototype, 'oncontextlost', {}, true, undefined, undefined, function oncontextlost() {
    
    return globalMy.value.Document_oncontextlost;
}, function oncontextlost(val) {
    
    globalMy.value.Document_oncontextlost = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextlost.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextlost.set, 'set');
globalMy.value.Document_oncontextlost = {};
globalMy.mydefineProperty(Document.prototype, 'oncontextmenu', {}, true, undefined, undefined, function oncontextmenu() {
    
    return globalMy.value.Document_oncontextmenu;
}, function oncontextmenu(val) {
    
    globalMy.value.Document_oncontextmenu = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextmenu.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextmenu.set, 'set');
globalMy.value.Document_oncontextmenu = {};
globalMy.mydefineProperty(Document.prototype, 'oncontextrestored', {}, true, undefined, undefined, function oncontextrestored() {
    
    return globalMy.value.Document_oncontextrestored;
}, function oncontextrestored(val) {
    
    globalMy.value.Document_oncontextrestored = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextrestored.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncontextrestored.set, 'set');
globalMy.value.Document_oncontextrestored = {};
globalMy.mydefineProperty(Document.prototype, 'oncuechange', {}, true, undefined, undefined, function oncuechange() {
    
    return globalMy.value.Document_oncuechange;
}, function oncuechange(val) {
    
    globalMy.value.Document_oncuechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncuechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncuechange.set, 'set');
globalMy.value.Document_oncuechange = {};
globalMy.mydefineProperty(Document.prototype, 'ondblclick', {}, true, undefined, undefined, function ondblclick() {
    
    return globalMy.value.Document_ondblclick;
}, function ondblclick(val) {
    
    globalMy.value.Document_ondblclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondblclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondblclick.set, 'set');
globalMy.value.Document_ondblclick = {};
globalMy.mydefineProperty(Document.prototype, 'ondrag', {}, true, undefined, undefined, function ondrag() {
    
    return globalMy.value.Document_ondrag;
}, function ondrag(val) {
    
    globalMy.value.Document_ondrag = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrag.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrag.set, 'set');
globalMy.value.Document_ondrag = {};
globalMy.mydefineProperty(Document.prototype, 'ondragend', {}, true, undefined, undefined, function ondragend() {
    
    return globalMy.value.Document_ondragend;
}, function ondragend(val) {
    
    globalMy.value.Document_ondragend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragend.set, 'set');
globalMy.value.Document_ondragend = {};
globalMy.mydefineProperty(Document.prototype, 'ondragenter', {}, true, undefined, undefined, function ondragenter() {
    
    return globalMy.value.Document_ondragenter;
}, function ondragenter(val) {
    
    globalMy.value.Document_ondragenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragenter.set, 'set');
globalMy.value.Document_ondragenter = {};
globalMy.mydefineProperty(Document.prototype, 'ondragleave', {}, true, undefined, undefined, function ondragleave() {
    
    return globalMy.value.Document_ondragleave;
}, function ondragleave(val) {
    
    globalMy.value.Document_ondragleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragleave.set, 'set');
globalMy.value.Document_ondragleave = {};
globalMy.mydefineProperty(Document.prototype, 'ondragover', {}, true, undefined, undefined, function ondragover() {
    
    return globalMy.value.Document_ondragover;
}, function ondragover(val) {
    
    globalMy.value.Document_ondragover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragover.set, 'set');
globalMy.value.Document_ondragover = {};
globalMy.mydefineProperty(Document.prototype, 'ondragstart', {}, true, undefined, undefined, function ondragstart() {
    
    return globalMy.value.Document_ondragstart;
}, function ondragstart(val) {
    
    globalMy.value.Document_ondragstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondragstart.set, 'set');
globalMy.value.Document_ondragstart = {};
globalMy.mydefineProperty(Document.prototype, 'ondrop', {}, true, undefined, undefined, function ondrop() {
    
    return globalMy.value.Document_ondrop;
}, function ondrop(val) {
    
    globalMy.value.Document_ondrop = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrop.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondrop.set, 'set');
globalMy.value.Document_ondrop = {};
globalMy.mydefineProperty(Document.prototype, 'ondurationchange', {}, true, undefined, undefined, function ondurationchange() {
    
    return globalMy.value.Document_ondurationchange;
}, function ondurationchange(val) {
    
    globalMy.value.Document_ondurationchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondurationchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ondurationchange.set, 'set');
globalMy.value.Document_ondurationchange = {};
globalMy.mydefineProperty(Document.prototype, 'onemptied', {}, true, undefined, undefined, function onemptied() {
    
    return globalMy.value.Document_onemptied;
}, function onemptied(val) {
    
    globalMy.value.Document_onemptied = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onemptied.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onemptied.set, 'set');
globalMy.value.Document_onemptied = {};
globalMy.mydefineProperty(Document.prototype, 'onended', {}, true, undefined, undefined, function onended() {
    
    return globalMy.value.Document_onended;
}, function onended(val) {
    
    globalMy.value.Document_onended = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onended.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onended.set, 'set');
globalMy.value.Document_onended = {};
globalMy.mydefineProperty(Document.prototype, 'onerror', {}, true, undefined, undefined, function onerror() {
    
    return globalMy.value.Document_onerror;
}, function onerror(val) {
    
    globalMy.value.Document_onerror = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onerror.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onerror.set, 'set');
globalMy.value.Document_onerror = {};
globalMy.mydefineProperty(Document.prototype, 'onfocus', {}, true, undefined, undefined, function onfocus() {
    
    return globalMy.value.Document_onfocus;
}, function onfocus(val) {
    
    globalMy.value.Document_onfocus = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfocus.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onfocus.set, 'set');
globalMy.value.Document_onfocus = {};
globalMy.mydefineProperty(Document.prototype, 'onformdata', {}, true, undefined, undefined, function onformdata() {
    
    return globalMy.value.Document_onformdata;
}, function onformdata(val) {
    
    globalMy.value.Document_onformdata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onformdata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onformdata.set, 'set');
globalMy.value.Document_onformdata = {};
globalMy.mydefineProperty(Document.prototype, 'oninput', {}, true, undefined, undefined, function oninput() {
    
    return globalMy.value.Document_oninput;
}, function oninput(val) {
    
    globalMy.value.Document_oninput = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninput.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninput.set, 'set');
globalMy.value.Document_oninput = {};
globalMy.mydefineProperty(Document.prototype, 'oninvalid', {}, true, undefined, undefined, function oninvalid() {
    
    return globalMy.value.Document_oninvalid;
}, function oninvalid(val) {
    
    globalMy.value.Document_oninvalid = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninvalid.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oninvalid.set, 'set');
globalMy.value.Document_oninvalid = {};
globalMy.mydefineProperty(Document.prototype, 'onkeydown', {}, true, undefined, undefined, function onkeydown() {
    
    return globalMy.value.Document_onkeydown;
}, function onkeydown(val) {
    
    globalMy.value.Document_onkeydown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeydown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeydown.set, 'set');
globalMy.value.Document_onkeydown = {};
globalMy.mydefineProperty(Document.prototype, 'onkeypress', {}, true, undefined, undefined, function onkeypress() {
    
    return globalMy.value.Document_onkeypress;
}, function onkeypress(val) {
    
    globalMy.value.Document_onkeypress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeypress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeypress.set, 'set');
globalMy.value.Document_onkeypress = {};
globalMy.mydefineProperty(Document.prototype, 'onkeyup', {}, true, undefined, undefined, function onkeyup() {
    
    return globalMy.value.Document_onkeyup;
}, function onkeyup(val) {
    
    globalMy.value.Document_onkeyup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeyup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onkeyup.set, 'set');
globalMy.value.Document_onkeyup = {};
globalMy.mydefineProperty(Document.prototype, 'onload', {}, true, undefined, undefined, function onload() {
    
    return globalMy.value.Document_onload;
}, function onload(val) {
    
    globalMy.value.Document_onload = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onload.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onload.set, 'set');
globalMy.value.Document_onload = {};
globalMy.mydefineProperty(Document.prototype, 'onloadeddata', {}, true, undefined, undefined, function onloadeddata() {
    
    return globalMy.value.Document_onloadeddata;
}, function onloadeddata(val) {
    
    globalMy.value.Document_onloadeddata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadeddata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadeddata.set, 'set');
globalMy.value.Document_onloadeddata = {};
globalMy.mydefineProperty(Document.prototype, 'onloadedmetadata', {}, true, undefined, undefined, function onloadedmetadata() {
    
    return globalMy.value.Document_onloadedmetadata;
}, function onloadedmetadata(val) {
    
    globalMy.value.Document_onloadedmetadata = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadedmetadata.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadedmetadata.set, 'set');
globalMy.value.Document_onloadedmetadata = {};
globalMy.mydefineProperty(Document.prototype, 'onloadstart', {}, true, undefined, undefined, function onloadstart() {
    
    return globalMy.value.Document_onloadstart;
}, function onloadstart(val) {
    
    globalMy.value.Document_onloadstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onloadstart.set, 'set');
globalMy.value.Document_onloadstart = {};
globalMy.mydefineProperty(Document.prototype, 'onmousedown', {}, true, undefined, undefined, function onmousedown() {
    
    return globalMy.value.Document_onmousedown;
}, function onmousedown(val) {
    
    globalMy.value.Document_onmousedown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousedown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousedown.set, 'set');
globalMy.value.Document_onmousedown = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseenter', {}, true, undefined, undefined, function onmouseenter() {
    
    return globalMy.value.Document_onmouseenter;
}, function onmouseenter(val) {
    
    globalMy.value.Document_onmouseenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseenter.set, 'set');
globalMy.value.Document_onmouseenter = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseleave', {}, true, undefined, undefined, function onmouseleave() {
    
    return globalMy.value.Document_onmouseleave;
}, function onmouseleave(val) {
    
    globalMy.value.Document_onmouseleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseleave.set, 'set');
globalMy.value.Document_onmouseleave = {};
globalMy.mydefineProperty(Document.prototype, 'onmousemove', {}, true, undefined, undefined, function onmousemove() {
    
    return globalMy.value.Document_onmousemove;
}, function onmousemove(val) {
    
    globalMy.value.Document_onmousemove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousemove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousemove.set, 'set');
globalMy.value.Document_onmousemove = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseout', {}, true, undefined, undefined, function onmouseout() {
    
    return globalMy.value.Document_onmouseout;
}, function onmouseout(val) {
    
    globalMy.value.Document_onmouseout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseout.set, 'set');
globalMy.value.Document_onmouseout = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseover', {}, true, undefined, undefined, function onmouseover() {
    
    return globalMy.value.Document_onmouseover;
}, function onmouseover(val) {
    
    globalMy.value.Document_onmouseover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseover.set, 'set');
globalMy.value.Document_onmouseover = {};
globalMy.mydefineProperty(Document.prototype, 'onmouseup', {}, true, undefined, undefined, function onmouseup() {
    
    return globalMy.value.Document_onmouseup;
}, function onmouseup(val) {
    
    globalMy.value.Document_onmouseup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmouseup.set, 'set');
globalMy.value.Document_onmouseup = {};
globalMy.mydefineProperty(Document.prototype, 'onmousewheel', {}, true, undefined, undefined, function onmousewheel() {
    
    return globalMy.value.Document_onmousewheel;
}, function onmousewheel(val) {
    
    globalMy.value.Document_onmousewheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousewheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onmousewheel.set, 'set');
globalMy.value.Document_onmousewheel = {};
globalMy.mydefineProperty(Document.prototype, 'onpause', {}, true, undefined, undefined, function onpause() {
    
    return globalMy.value.Document_onpause;
}, function onpause(val) {
    
    globalMy.value.Document_onpause = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpause.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpause.set, 'set');
globalMy.value.Document_onpause = {};
globalMy.mydefineProperty(Document.prototype, 'onplay', {}, true, undefined, undefined, function onplay() {
    
    return globalMy.value.Document_onplay;
}, function onplay(val) {
    
    globalMy.value.Document_onplay = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplay.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplay.set, 'set');
globalMy.value.Document_onplay = {};
globalMy.mydefineProperty(Document.prototype, 'onplaying', {}, true, undefined, undefined, function onplaying() {
    
    return globalMy.value.Document_onplaying;
}, function onplaying(val) {
    
    globalMy.value.Document_onplaying = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplaying.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onplaying.set, 'set');
globalMy.value.Document_onplaying = {};
globalMy.mydefineProperty(Document.prototype, 'onprogress', {}, true, undefined, undefined, function onprogress() {
    
    return globalMy.value.Document_onprogress;
}, function onprogress(val) {
    
    globalMy.value.Document_onprogress = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onprogress.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onprogress.set, 'set');
globalMy.value.Document_onprogress = {};
globalMy.mydefineProperty(Document.prototype, 'onratechange', {}, true, undefined, undefined, function onratechange() {
    
    return globalMy.value.Document_onratechange;
}, function onratechange(val) {
    
    globalMy.value.Document_onratechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onratechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onratechange.set, 'set');
globalMy.value.Document_onratechange = {};
globalMy.mydefineProperty(Document.prototype, 'onreset', {}, true, undefined, undefined, function onreset() {
    
    return globalMy.value.Document_onreset;
}, function onreset(val) {
    
    globalMy.value.Document_onreset = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreset.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onreset.set, 'set');
globalMy.value.Document_onreset = {};
globalMy.mydefineProperty(Document.prototype, 'onresize', {}, true, undefined, undefined, function onresize() {
    
    return globalMy.value.Document_onresize;
}, function onresize(val) {
    
    globalMy.value.Document_onresize = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresize.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onresize.set, 'set');
globalMy.value.Document_onresize = {};
globalMy.mydefineProperty(Document.prototype, 'onscroll', {}, true, undefined, undefined, function onscroll() {
    
    return globalMy.value.Document_onscroll;
}, function onscroll(val) {
    
    globalMy.value.Document_onscroll = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onscroll.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onscroll.set, 'set');
globalMy.value.Document_onscroll = {};
globalMy.mydefineProperty(Document.prototype, 'onsecuritypolicyviolation', {}, true, undefined, undefined, function onsecuritypolicyviolation() {
    
    return globalMy.value.Document_onsecuritypolicyviolation;
}, function onsecuritypolicyviolation(val) {
    
    globalMy.value.Document_onsecuritypolicyviolation = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsecuritypolicyviolation.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsecuritypolicyviolation.set, 'set');
globalMy.value.Document_onsecuritypolicyviolation = {};
globalMy.mydefineProperty(Document.prototype, 'onseeked', {}, true, undefined, undefined, function onseeked() {
    
    return globalMy.value.Document_onseeked;
}, function onseeked(val) {
    
    globalMy.value.Document_onseeked = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeked.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeked.set, 'set');
globalMy.value.Document_onseeked = {};
globalMy.mydefineProperty(Document.prototype, 'onseeking', {}, true, undefined, undefined, function onseeking() {
    
    return globalMy.value.Document_onseeking;
}, function onseeking(val) {
    
    globalMy.value.Document_onseeking = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeking.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onseeking.set, 'set');
globalMy.value.Document_onseeking = {};
globalMy.mydefineProperty(Document.prototype, 'onselect', {}, true, undefined, undefined, function onselect() {
    
    return globalMy.value.Document_onselect;
}, function onselect(val) {
    
    globalMy.value.Document_onselect = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselect.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselect.set, 'set');
globalMy.value.Document_onselect = {};
globalMy.mydefineProperty(Document.prototype, 'onslotchange', {}, true, undefined, undefined, function onslotchange() {
    
    return globalMy.value.Document_onslotchange;
}, function onslotchange(val) {
    
    globalMy.value.Document_onslotchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onslotchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onslotchange.set, 'set');
globalMy.value.Document_onslotchange = {};
globalMy.mydefineProperty(Document.prototype, 'onstalled', {}, true, undefined, undefined, function onstalled() {
    
    return globalMy.value.Document_onstalled;
}, function onstalled(val) {
    
    globalMy.value.Document_onstalled = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onstalled.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onstalled.set, 'set');
globalMy.value.Document_onstalled = {};
globalMy.mydefineProperty(Document.prototype, 'onsubmit', {}, true, undefined, undefined, function onsubmit() {
    
    return globalMy.value.Document_onsubmit;
}, function onsubmit(val) {
    
    globalMy.value.Document_onsubmit = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsubmit.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsubmit.set, 'set');
globalMy.value.Document_onsubmit = {};
globalMy.mydefineProperty(Document.prototype, 'onsuspend', {}, true, undefined, undefined, function onsuspend() {
    
    return globalMy.value.Document_onsuspend;
}, function onsuspend(val) {
    
    globalMy.value.Document_onsuspend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsuspend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onsuspend.set, 'set');
globalMy.value.Document_onsuspend = {};
globalMy.mydefineProperty(Document.prototype, 'ontimeupdate', {}, true, undefined, undefined, function ontimeupdate() {
    
    return globalMy.value.Document_ontimeupdate;
}, function ontimeupdate(val) {
    
    globalMy.value.Document_ontimeupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontimeupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontimeupdate.set, 'set');
globalMy.value.Document_ontimeupdate = {};
globalMy.mydefineProperty(Document.prototype, 'ontoggle', {}, true, undefined, undefined, function ontoggle() {
    
    return globalMy.value.Document_ontoggle;
}, function ontoggle(val) {
    
    globalMy.value.Document_ontoggle = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontoggle.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontoggle.set, 'set');
globalMy.value.Document_ontoggle = {};
globalMy.mydefineProperty(Document.prototype, 'onvolumechange', {}, true, undefined, undefined, function onvolumechange() {
    
    return globalMy.value.Document_onvolumechange;
}, function onvolumechange(val) {
    
    globalMy.value.Document_onvolumechange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvolumechange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onvolumechange.set, 'set');
globalMy.value.Document_onvolumechange = {};
globalMy.mydefineProperty(Document.prototype, 'onwaiting', {}, true, undefined, undefined, function onwaiting() {
    
    return globalMy.value.Document_onwaiting;
}, function onwaiting(val) {
    
    globalMy.value.Document_onwaiting = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwaiting.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwaiting.set, 'set');
globalMy.value.Document_onwaiting = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitanimationend', {}, true, undefined, undefined, function onwebkitanimationend() {
    
    return globalMy.value.Document_onwebkitanimationend;
}, function onwebkitanimationend(val) {
    
    globalMy.value.Document_onwebkitanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationend.set, 'set');
globalMy.value.Document_onwebkitanimationend = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitanimationiteration', {}, true, undefined, undefined, function onwebkitanimationiteration() {
    
    return globalMy.value.Document_onwebkitanimationiteration;
}, function onwebkitanimationiteration(val) {
    
    globalMy.value.Document_onwebkitanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationiteration.set, 'set');
globalMy.value.Document_onwebkitanimationiteration = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkitanimationstart', {}, true, undefined, undefined, function onwebkitanimationstart() {
    
    return globalMy.value.Document_onwebkitanimationstart;
}, function onwebkitanimationstart(val) {
    
    globalMy.value.Document_onwebkitanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkitanimationstart.set, 'set');
globalMy.value.Document_onwebkitanimationstart = {};
globalMy.mydefineProperty(Document.prototype, 'onwebkittransitionend', {}, true, undefined, undefined, function onwebkittransitionend() {
    
    return globalMy.value.Document_onwebkittransitionend;
}, function onwebkittransitionend(val) {
    
    globalMy.value.Document_onwebkittransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkittransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwebkittransitionend.set, 'set');
globalMy.value.Document_onwebkittransitionend = {};
globalMy.mydefineProperty(Document.prototype, 'onwheel', {}, true, undefined, undefined, function onwheel() {
    
    return globalMy.value.Document_onwheel;
}, function onwheel(val) {
    
    globalMy.value.Document_onwheel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwheel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onwheel.set, 'set');
globalMy.value.Document_onwheel = {};
globalMy.mydefineProperty(Document.prototype, 'onauxclick', {}, true, undefined, undefined, function onauxclick() {
    
    return globalMy.value.Document_onauxclick;
}, function onauxclick(val) {
    
    globalMy.value.Document_onauxclick = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onauxclick.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onauxclick.set, 'set');
globalMy.value.Document_onauxclick = {};
globalMy.mydefineProperty(Document.prototype, 'ongotpointercapture', {}, true, undefined, undefined, function ongotpointercapture() {
    
    return globalMy.value.Document_ongotpointercapture;
}, function ongotpointercapture(val) {
    
    globalMy.value.Document_ongotpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ongotpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ongotpointercapture.set, 'set');
globalMy.value.Document_ongotpointercapture = {};
globalMy.mydefineProperty(Document.prototype, 'onlostpointercapture', {}, true, undefined, undefined, function onlostpointercapture() {
    
    return globalMy.value.Document_onlostpointercapture;
}, function onlostpointercapture(val) {
    
    globalMy.value.Document_onlostpointercapture = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onlostpointercapture.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onlostpointercapture.set, 'set');
globalMy.value.Document_onlostpointercapture = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerdown', {}, true, undefined, undefined, function onpointerdown() {
    
    return globalMy.value.Document_onpointerdown;
}, function onpointerdown(val) {
    
    globalMy.value.Document_onpointerdown = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerdown.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerdown.set, 'set');
globalMy.value.Document_onpointerdown = {};
globalMy.mydefineProperty(Document.prototype, 'onpointermove', {}, true, undefined, undefined, function onpointermove() {
    
    return globalMy.value.Document_onpointermove;
}, function onpointermove(val) {
    
    globalMy.value.Document_onpointermove = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointermove.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointermove.set, 'set');
globalMy.value.Document_onpointermove = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerup', {}, true, undefined, undefined, function onpointerup() {
    
    return globalMy.value.Document_onpointerup;
}, function onpointerup(val) {
    
    globalMy.value.Document_onpointerup = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerup.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerup.set, 'set');
globalMy.value.Document_onpointerup = {};
globalMy.mydefineProperty(Document.prototype, 'onpointercancel', {}, true, undefined, undefined, function onpointercancel() {
    
    return globalMy.value.Document_onpointercancel;
}, function onpointercancel(val) {
    
    globalMy.value.Document_onpointercancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointercancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointercancel.set, 'set');
globalMy.value.Document_onpointercancel = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerover', {}, true, undefined, undefined, function onpointerover() {
    
    return globalMy.value.Document_onpointerover;
}, function onpointerover(val) {
    
    globalMy.value.Document_onpointerover = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerover.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerover.set, 'set');
globalMy.value.Document_onpointerover = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerout', {}, true, undefined, undefined, function onpointerout() {
    
    return globalMy.value.Document_onpointerout;
}, function onpointerout(val) {
    
    globalMy.value.Document_onpointerout = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerout.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerout.set, 'set');
globalMy.value.Document_onpointerout = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerenter', {}, true, undefined, undefined, function onpointerenter() {
    
    return globalMy.value.Document_onpointerenter;
}, function onpointerenter(val) {
    
    globalMy.value.Document_onpointerenter = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerenter.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerenter.set, 'set');
globalMy.value.Document_onpointerenter = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerleave', {}, true, undefined, undefined, function onpointerleave() {
    
    return globalMy.value.Document_onpointerleave;
}, function onpointerleave(val) {
    
    globalMy.value.Document_onpointerleave = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerleave.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerleave.set, 'set');
globalMy.value.Document_onpointerleave = {};
globalMy.mydefineProperty(Document.prototype, 'onselectstart', {}, true, undefined, undefined, function onselectstart() {
    
    return globalMy.value.Document_onselectstart;
}, function onselectstart(val) {
    
    globalMy.value.Document_onselectstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectstart.set, 'set');
globalMy.value.Document_onselectstart = {};
globalMy.mydefineProperty(Document.prototype, 'onselectionchange', {}, true, undefined, undefined, function onselectionchange() {
    
    return globalMy.value.Document_onselectionchange;
}, function onselectionchange(val) {
    
    globalMy.value.Document_onselectionchange = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectionchange.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onselectionchange.set, 'set');
globalMy.value.Document_onselectionchange = {};
globalMy.mydefineProperty(Document.prototype, 'onanimationend', {}, true, undefined, undefined, function onanimationend() {
    
    return globalMy.value.Document_onanimationend;
}, function onanimationend(val) {
    
    globalMy.value.Document_onanimationend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationend.set, 'set');
globalMy.value.Document_onanimationend = {};
globalMy.mydefineProperty(Document.prototype, 'onanimationiteration', {}, true, undefined, undefined, function onanimationiteration() {
    
    return globalMy.value.Document_onanimationiteration;
}, function onanimationiteration(val) {
    
    globalMy.value.Document_onanimationiteration = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationiteration.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationiteration.set, 'set');
globalMy.value.Document_onanimationiteration = {};
globalMy.mydefineProperty(Document.prototype, 'onanimationstart', {}, true, undefined, undefined, function onanimationstart() {
    
    return globalMy.value.Document_onanimationstart;
}, function onanimationstart(val) {
    
    globalMy.value.Document_onanimationstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onanimationstart.set, 'set');
globalMy.value.Document_onanimationstart = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitionrun', {}, true, undefined, undefined, function ontransitionrun() {
    
    return globalMy.value.Document_ontransitionrun;
}, function ontransitionrun(val) {
    
    globalMy.value.Document_ontransitionrun = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionrun.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionrun.set, 'set');
globalMy.value.Document_ontransitionrun = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitionstart', {}, true, undefined, undefined, function ontransitionstart() {
    
    return globalMy.value.Document_ontransitionstart;
}, function ontransitionstart(val) {
    
    globalMy.value.Document_ontransitionstart = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionstart.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionstart.set, 'set');
globalMy.value.Document_ontransitionstart = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitionend', {}, true, undefined, undefined, function ontransitionend() {
    
    return globalMy.value.Document_ontransitionend;
}, function ontransitionend(val) {
    
    globalMy.value.Document_ontransitionend = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionend.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitionend.set, 'set');
globalMy.value.Document_ontransitionend = {};
globalMy.mydefineProperty(Document.prototype, 'ontransitioncancel', {}, true, undefined, undefined, function ontransitioncancel() {
    
    return globalMy.value.Document_ontransitioncancel;
}, function ontransitioncancel(val) {
    
    globalMy.value.Document_ontransitioncancel = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitioncancel.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).ontransitioncancel.set, 'set');
globalMy.value.Document_ontransitioncancel = {};
globalMy.mydefineProperty(Document.prototype, 'oncopy', {}, true, undefined, undefined, function oncopy() {
    
    return globalMy.value.Document_oncopy;
}, function oncopy(val) {
    
    globalMy.value.Document_oncopy = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncopy.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncopy.set, 'set');
globalMy.value.Document_oncopy = {};
globalMy.mydefineProperty(Document.prototype, 'oncut', {}, true, undefined, undefined, function oncut() {
    
    return globalMy.value.Document_oncut;
}, function oncut(val) {
    
    globalMy.value.Document_oncut = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncut.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).oncut.set, 'set');
globalMy.value.Document_oncut = {};
globalMy.mydefineProperty(Document.prototype, 'onpaste', {}, true, undefined, undefined, function onpaste() {
    
    return globalMy.value.Document_onpaste;
}, function onpaste(val) {
    
    globalMy.value.Document_onpaste = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpaste.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpaste.set, 'set');
globalMy.value.Document_onpaste = {};
globalMy.mydefineProperty(Document.prototype, 'children', {}, true, undefined, undefined, function children() {
    
    return globalMy.getChildren(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).children.get, 'get');

globalMy.mydefineProperty(Document.prototype, 'firstElementChild', {}, true, undefined, undefined, function firstElementChild() {
    
    return globalMy.getFirstElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).firstElementChild.get, 'get');

globalMy.mydefineProperty(Document.prototype, 'lastElementChild', {}, true, undefined, undefined, function lastElementChild() {
    
    return globalMy.getLastElementChild(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).lastElementChild.get, 'get');

globalMy.mydefineProperty(Document.prototype, 'childElementCount', 1, true, undefined, undefined, function childElementCount() {
    
    return globalMy.getChildElementCount(this);
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).childElementCount.get, 'get');
globalMy.value.Document_childElementCount = 1;
globalMy.mydefineProperty(Document.prototype, 'activeElement', {}, true, undefined, undefined, function activeElement() {
    
    return globalMy.value.Document_activeElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).activeElement.get, 'get');
globalMy.value.Document_activeElement = {};
globalMy.mydefineProperty(Document.prototype, 'styleSheets', {}, true, undefined, undefined, function styleSheets() {
    
    return globalMy.value.Document_styleSheets;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).styleSheets.get, 'get');
globalMy.value.Document_styleSheets = {};
globalMy.mydefineProperty(Document.prototype, 'pointerLockElement', {}, true, undefined, undefined, function pointerLockElement() {
    
    return globalMy.value.Document_pointerLockElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).pointerLockElement.get, 'get');
globalMy.value.Document_pointerLockElement = {};
globalMy.mydefineProperty(Document.prototype, 'fullscreenElement', {}, true, undefined, undefined, function fullscreenElement() {
    
    return globalMy.value.Document_fullscreenElement;
}, function fullscreenElement(val) {
    
    globalMy.value.Document_fullscreenElement = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenElement.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fullscreenElement.set, 'set');
globalMy.value.Document_fullscreenElement = {};
globalMy.mydefineProperty(Document.prototype, 'adoptedStyleSheets', {}, true, undefined, undefined, function adoptedStyleSheets() {
    
    return globalMy.value.Document_adoptedStyleSheets;
}, function adoptedStyleSheets(val) {
    
    globalMy.value.Document_adoptedStyleSheets = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).adoptedStyleSheets.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).adoptedStyleSheets.set, 'set');
globalMy.value.Document_adoptedStyleSheets = {};
globalMy.mydefineProperty(Document.prototype, 'fonts', {}, true, undefined, undefined, function fonts() {
    
    return globalMy.value.Document_fonts;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fonts.get, 'get');
globalMy.value.Document_fonts = {};
globalMy.mydefineProperty(Document.prototype, 'adoptNode', function adoptNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.adoptNode);
globalMy.mydefineProperty(Document.prototype, 'append', function append() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.append);
globalMy.mydefineProperty(Document.prototype, 'captureEvents', function captureEvents() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.captureEvents);

globalMy.mydefineProperty(Document.prototype, 'clear', function clear() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.clear);
globalMy.mydefineProperty(Document.prototype, 'close', function close() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.close);
globalMy.mydefineProperty(Document.prototype, 'createAttribute', function createAttribute() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createAttribute);
globalMy.mydefineProperty(Document.prototype, 'createAttributeNS', function createAttributeNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createAttributeNS);
globalMy.mydefineProperty(Document.prototype, 'createCDATASection', function createCDATASection() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createCDATASection);
globalMy.mydefineProperty(Document.prototype, 'createComment', function createComment() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createComment);
globalMy.mydefineProperty(Document.prototype, 'createDocumentFragment', function createDocumentFragment() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createDocumentFragment);
globalMy.mydefineProperty(Document.prototype, 'createElement', function createElement(tagName) {
    
    return globalMy.createElement(tagName)

}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createElement);
globalMy.mydefineProperty(Document.prototype, 'createElementNS', function createElementNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createElementNS);


globalMy.mydefineProperty(Document.prototype, 'createEvent', function createEvent() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createEvent);

globalMy.mydefineProperty(Document.prototype, 'createExpression', function createExpression() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createExpression);
globalMy.mydefineProperty(Document.prototype, 'createNSResolver', function createNSResolver() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createNSResolver);
globalMy.mydefineProperty(Document.prototype, 'createNodeIterator', function createNodeIterator() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createNodeIterator);
globalMy.mydefineProperty(Document.prototype, 'createProcessingInstruction', function createProcessingInstruction() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createProcessingInstruction);
globalMy.mydefineProperty(Document.prototype, 'createRange', function createRange() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createRange);
globalMy.mydefineProperty(Document.prototype, 'createTextNode', function createTextNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createTextNode);
globalMy.mydefineProperty(Document.prototype, 'createTreeWalker', function createTreeWalker() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.createTreeWalker);
globalMy.mydefineProperty(Document.prototype, 'elementFromPoint', function elementFromPoint() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.elementFromPoint);
globalMy.mydefineProperty(Document.prototype, 'elementsFromPoint', function elementsFromPoint() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.elementsFromPoint);
globalMy.mydefineProperty(Document.prototype, 'evaluate', function evaluate() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.evaluate);
globalMy.mydefineProperty(Document.prototype, 'execCommand', function execCommand() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.execCommand);
globalMy.mydefineProperty(Document.prototype, 'exitFullscreen', function exitFullscreen() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.exitFullscreen);
globalMy.mydefineProperty(Document.prototype, 'exitPointerLock', function exitPointerLock() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.exitPointerLock);
globalMy.mydefineProperty(Document.prototype, 'getElementById', function getElementById(Id) {
    
    return globalMy.getElementById(this, Id)
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementById);
globalMy.mydefineProperty(Document.prototype, 'getElementsByClassName', function getElementsByClassName() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementsByClassName);
globalMy.mydefineProperty(Document.prototype, 'getElementsByName', function getElementsByName() {
    
}, true, undefined, true);


globalMy.functionprotect(Document.prototype.getElementsByName);
globalMy.mydefineProperty(Document.prototype, 'getElementsByTagName', function getElementsByTagName(tagName) {
    
    var tag_name = tagName.toLowerCase() + '';
    return globalMy.getElementsByTagName(this, tag_name);

}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementsByTagName);

globalMy.mydefineProperty(Document.prototype, 'scripts', [], true, undefined, undefined, function scripts() {
    
    return document.getElementsByTagName("script")
}, undefined);

globalMy.mydefineProperty(Document.prototype, 'getElementsByTagNameNS', function getElementsByTagNameNS() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getElementsByTagNameNS);
globalMy.mydefineProperty(Document.prototype, 'getSelection', function getSelection() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getSelection);
globalMy.mydefineProperty(Document.prototype, 'hasFocus', function hasFocus() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.hasFocus);
globalMy.mydefineProperty(Document.prototype, 'importNode', function importNode() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.importNode);
globalMy.mydefineProperty(Document.prototype, 'open', function open() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.open);
globalMy.mydefineProperty(Document.prototype, 'prepend', function prepend() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.prepend);
globalMy.mydefineProperty(Document.prototype, 'queryCommandEnabled', function queryCommandEnabled() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandEnabled);
globalMy.mydefineProperty(Document.prototype, 'queryCommandIndeterm', function queryCommandIndeterm() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandIndeterm);
globalMy.mydefineProperty(Document.prototype, 'queryCommandState', function queryCommandState() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandState);
globalMy.mydefineProperty(Document.prototype, 'queryCommandSupported', function queryCommandSupported() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandSupported);
globalMy.mydefineProperty(Document.prototype, 'queryCommandValue', function queryCommandValue() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.queryCommandValue);
globalMy.mydefineProperty(Document.prototype, 'querySelector', function querySelector() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.querySelector);
globalMy.mydefineProperty(Document.prototype, 'querySelectorAll', function querySelectorAll() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.querySelectorAll);
globalMy.mydefineProperty(Document.prototype, 'releaseEvents', function releaseEvents() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.releaseEvents);
globalMy.mydefineProperty(Document.prototype, 'replaceChildren', function replaceChildren() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.replaceChildren);
globalMy.mydefineProperty(Document.prototype, 'webkitCancelFullScreen', function webkitCancelFullScreen() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.webkitCancelFullScreen);
globalMy.mydefineProperty(Document.prototype, 'webkitExitFullscreen', function webkitExitFullscreen() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.webkitExitFullscreen);
globalMy.mydefineProperty(Document.prototype, 'write', function write(tag) {
    
    return globalMy.write(tag);

}, true, undefined, true);
globalMy.functionprotect(Document.prototype.write);

globalMy.mydefineProperty(Document.prototype, 'writeln', function writeln() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.writeln);

globalMy.mydefineProperty(Document.prototype, 'fragmentDirective', {}, true, undefined, undefined, function fragmentDirective() {
    
    return globalMy.value.Document_fragmentDirective;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).fragmentDirective.get, 'get');
globalMy.value.Document_fragmentDirective = {};
globalMy.mydefineProperty(Document.prototype, 'onbeforematch', {}, true, undefined, undefined, function onbeforematch() {
    
    return globalMy.value.Document_onbeforematch;
}, function onbeforematch(val) {
    
    globalMy.value.Document_onbeforematch = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforematch.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onbeforematch.set, 'set');
globalMy.value.Document_onbeforematch = {};
globalMy.mydefineProperty(Document.prototype, 'timeline', {}, true, undefined, undefined, function timeline() {
    
    return globalMy.value.Document_timeline;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).timeline.get, 'get');
globalMy.value.Document_timeline = {};
globalMy.mydefineProperty(Document.prototype, 'pictureInPictureEnabled', true, true, undefined, undefined, function pictureInPictureEnabled() {
    
    return globalMy.value.Document_pictureInPictureEnabled;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).pictureInPictureEnabled.get, 'get');
globalMy.value.Document_pictureInPictureEnabled = true;
globalMy.mydefineProperty(Document.prototype, 'pictureInPictureElement', {}, true, undefined, undefined, function pictureInPictureElement() {
    
    return globalMy.value.Document_pictureInPictureElement;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).pictureInPictureElement.get, 'get');
globalMy.value.Document_pictureInPictureElement = {};
globalMy.mydefineProperty(Document.prototype, 'onpointerrawupdate', {}, true, undefined, undefined, function onpointerrawupdate() {
    
    return globalMy.value.Document_onpointerrawupdate;
}, function onpointerrawupdate(val) {
    
    globalMy.value.Document_onpointerrawupdate = val;
});
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerrawupdate.get, 'get');
globalMy.functionprotect(Object.getOwnPropertyDescriptors(Document.prototype).onpointerrawupdate.set, 'set');
globalMy.value.Document_onpointerrawupdate = {};
globalMy.mydefineProperty(Document.prototype, 'exitPictureInPicture', function exitPictureInPicture() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.exitPictureInPicture);
globalMy.mydefineProperty(Document.prototype, 'getAnimations', function getAnimations() {
    
}, true, undefined, true);
globalMy.functionprotect(Document.prototype.getAnimations);




HTMLDocument = function HTMLDocument(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(HTMLDocument);
globalMy.rename(HTMLDocument.prototype,"HTMLDocument")
HTMLDocument.__proto__ = Document;
Object.setPrototypeOf(HTMLDocument.prototype,Document.prototype);

document = {};
Object.setPrototypeOf(document,HTMLDocument.prototype);

document.nodeName = "#document";
document.nodeType = 9;


globalMy.mydefineProperty(document,"location",{

},true,true,true)
Object.setPrototypeOf(document,HTMLDocument.prototype)
Location = function Location(){
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);

};
globalMy.functionprotect(Location);
globalMy.rename(Location.prototype,"Location")
Object.setPrototypeOf(document.location,Location.prototype)
window.location = document.location;


globalMy.mydefineProperty(location,'ancestorOrigins',{},false,undefined,undefined,function ancestorOrigins(){return globalMy.value.location_ancestorOrigins;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).ancestorOrigins.get,'get');
globalMy.value.location_ancestorOrigins={};
globalMy.mydefineProperty(location,'href','http://qikan.cqvip.com/Qikan/Search/Advance?from=index',false,undefined,undefined,function href(){return globalMy.value.location_href;},function href(val){globalMy.value.location_href=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).href.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).href.set,'set');
globalMy.value.location_href='http://qikan.cqvip.com/Qikan/Search/Advance?from=index';
globalMy.mydefineProperty(location,'origin','http://qikan.cqvip.com',false,undefined,undefined,function origin(){return globalMy.value.location_origin;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).origin.get,'get');
globalMy.value.location_origin='http://qikan.cqvip.com';
globalMy.mydefineProperty(location,'protocol','http:',false,undefined,undefined,function protocol(){return globalMy.value.location_protocol;},function protocol(val){globalMy.value.location_protocol=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).protocol.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).protocol.set,'set');
globalMy.value.location_protocol='http:';
globalMy.mydefineProperty(location,'host','qikan.cqvip.com',false,undefined,undefined,function host(){return globalMy.value.location_host;},function host(val){globalMy.value.location_host=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).host.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).host.set,'set');
globalMy.value.location_host='qikan.cqvip.com';
globalMy.mydefineProperty(location,'hostname','qikan.cqvip.com',false,undefined,undefined,function hostname(){return globalMy.value.location_hostname;},function hostname(val){globalMy.value.location_hostname=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hostname.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hostname.set,'set');
globalMy.value.location_hostname='qikan.cqvip.com';
globalMy.mydefineProperty(location,'port','',false,undefined,undefined,function port(){return globalMy.value.location_port;},function port(val){globalMy.value.location_port=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).port.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).port.set,'set');
globalMy.value.location_port='';
globalMy.mydefineProperty(location,'pathname','/Qikan/Search/Advance',false,undefined,undefined,function pathname(){return globalMy.value.location_pathname;},function pathname(val){globalMy.value.location_pathname=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).pathname.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).pathname.set,'set');
globalMy.value.location_pathname='/Qikan/Search/Advance';
globalMy.mydefineProperty(location,'search','?from=index',false,undefined,undefined,function search(){return globalMy.value.location_search;},function search(val){globalMy.value.location_search=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).search.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).search.set,'set');
globalMy.value.location_search='?from=index';
globalMy.mydefineProperty(location,'hash','',false,undefined,undefined,function hash(){return globalMy.value.location_hash;},function hash(val){globalMy.value.location_hash=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hash.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(location).hash.set,'set');
globalMy.value.location_hash='';
globalMy.mydefineProperty(location,'assign',function assign(){},false,undefined,false);globalMy.functionprotect(location.assign);
globalMy.mydefineProperty(location,'reload',function reload(){},false,undefined,false);globalMy.functionprotect(location.reload);
globalMy.mydefineProperty(location,'replace',function replace(){},false,undefined,false);globalMy.functionprotect(location.replace);


HTMLHeadElement = function HTMLHeadElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLHeadElement)
globalMy.rename(HTMLHeadElement.prototype, "HTMLHeadElement")
HTMLHeadElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);


HTMLMetaElement = function HTMLMetaElement() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(HTMLMetaElement)
globalMy.rename(HTMLMetaElement.prototype, "HTMLMetaElement")
HTMLMetaElement.__proto__ = HTMLElement;
Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype)



globalMy.mydefineProperty(HTMLMetaElement.prototype,'name','',true,undefined,undefined,function name(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['name'];
    },
    function name(val){
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['name'] = val;
});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).name.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).name.set,'set');

globalMy.mydefineProperty(HTMLMetaElement.prototype,'httpEquiv','Content-Type',true,undefined,undefined,function httpEquiv(){return globalMy.value.HTMLMetaElement_httpEquiv;},function httpEquiv(val){globalMy.value.HTMLMetaElement_httpEquiv=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).httpEquiv.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).httpEquiv.set,'set');
globalMy.value.HTMLMetaElement_httpEquiv='Content-Type';

globalMy.mydefineProperty(HTMLMetaElement.prototype,'content','',true,undefined,undefined,function content(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['content'];}
,
    function content(val){
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['content'] = val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).content.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).content.set,'set');


globalMy.mydefineProperty(HTMLMetaElement.prototype,'scheme','',true,undefined,undefined,function scheme(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['scheme'];
    },function scheme(val){
    
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['scheme']=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).scheme.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).scheme.set,'set');


globalMy.mydefineProperty(HTMLMetaElement.prototype,'media','',true,undefined,undefined,function media(){
    
    var foundName = globalMy.foundName(this);
    return globalMy.value[foundName]['media'];
    }
    ,function media(val){
    var foundName = globalMy.foundName(this);
    globalMy.value[foundName]['media'] = val;
});globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).media.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(HTMLMetaElement.prototype).media.set,'set');

BatteryManager = function BatteryManager() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.rename(BatteryManager.prototype,"BatteryManager");

globalMy.functionprotect(BatteryManager);

globalMy.mydefineProperty(BatteryManager.prototype,'charging',undefined,true,undefined,undefined,function charging(){return globalMy.value.BatteryManager_charging;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).charging.get,'get');
globalMy.value.BatteryManager_charging = true;
globalMy.mydefineProperty(BatteryManager.prototype,'chargingTime',undefined,true,undefined,undefined,function chargingTime(){return globalMy.value.BatteryManager_chargingTime;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).chargingTime.get,'get');
globalMy.value.BatteryManager_chargingTime=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'dischargingTime',undefined,true,undefined,undefined,function dischargingTime(){return globalMy.value.BatteryManager_dischargingTime;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).dischargingTime.get,'get');
globalMy.value.BatteryManager_dischargingTime=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'level',undefined,true,undefined,undefined,function level(){return globalMy.value.BatteryManager_level;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).level.get,'get');
globalMy.value.BatteryManager_level=1;
globalMy.mydefineProperty(BatteryManager.prototype,'onchargingchange',undefined,true,undefined,undefined,function onchargingchange(){return globalMy.value.BatteryManager_onchargingchange;},function onchargingchange(val){globalMy.value.BatteryManager_onchargingchange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingchange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingchange.set,'set');
globalMy.value.BatteryManager_onchargingchange=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'onchargingtimechange',undefined,true,undefined,undefined,function onchargingtimechange(){return globalMy.value.BatteryManager_onchargingtimechange;},function onchargingtimechange(val){globalMy.value.BatteryManager_onchargingtimechange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingtimechange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onchargingtimechange.set,'set');
globalMy.value.BatteryManager_onchargingtimechange=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'ondischargingtimechange',undefined,true,undefined,undefined,function ondischargingtimechange(){return globalMy.value.BatteryManager_ondischargingtimechange;},function ondischargingtimechange(val){globalMy.value.BatteryManager_ondischargingtimechange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).ondischargingtimechange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).ondischargingtimechange.set,'set');
globalMy.value.BatteryManager_ondischargingtimechange=undefined;
globalMy.mydefineProperty(BatteryManager.prototype,'onlevelchange',undefined,true,undefined,undefined,function onlevelchange(){return globalMy.value.BatteryManager_onlevelchange;},function onlevelchange(val){globalMy.value.BatteryManager_onlevelchange=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onlevelchange.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(BatteryManager.prototype).onlevelchange.set,'set');
globalMy.value.BatteryManager_onlevelchange=undefined;
fetch = function fetch() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}
globalMy.functionprotect(fetch);
globalMy.rename(fetch.prototype,"fetch")


Request = function Request() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(Request);
globalMy.rename(Request.prototype,"Request")

IDBRequest = function IDBRequest() {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(IDBRequest)
globalMy.rename(IDBRequest.prototype,"IDBRequest")
Object.setPrototypeOf(IDBRequest.prototype,EventTarget.prototype)

globalMy.mydefineProperty(IDBRequest.prototype,'source',{},true,undefined,undefined,function source(){return globalMy.value.IDBRequest_source;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).source.get,'get');
globalMy.value.IDBRequest_source={};
globalMy.mydefineProperty(IDBRequest.prototype,'transaction',{},true,undefined,undefined,function transaction(){return globalMy.value.IDBRequest_transaction;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).transaction.get,'get');
globalMy.value.IDBRequest_transaction={};
globalMy.mydefineProperty(IDBRequest.prototype,'readyState','pending',true,undefined,undefined,function readyState(){return globalMy.value.IDBRequest_readyState;},undefined);globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).readyState.get,'get');
globalMy.value.IDBRequest_readyState='pending';
globalMy.mydefineProperty(IDBRequest.prototype,'onsuccess',{},true,undefined,undefined,function onsuccess(){return globalMy.value.IDBRequest_onsuccess;},function onsuccess(val){globalMy.value.IDBRequest_onsuccess=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onsuccess.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onsuccess.set,'set');
globalMy.value.IDBRequest_onsuccess={};
globalMy.mydefineProperty(IDBRequest.prototype,'onerror',{},true,undefined,undefined,function onerror(){return globalMy.value.IDBRequest_onerror;},function onerror(val){globalMy.value.IDBRequest_onerror=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onerror.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBRequest.prototype).onerror.set,'set');
globalMy.value.IDBRequest_onerror={};
IDBOpenDBRequest = function IDBOpenDBRequest () {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.functionprotect(IDBOpenDBRequest)
globalMy.rename(IDBOpenDBRequest.prototype,"IDBOpenDBRequest")
Object.setPrototypeOf(IDBOpenDBRequest.prototype,IDBRequest.prototype)

globalMy.mydefineProperty(IDBOpenDBRequest.prototype,'onblocked',{},true,undefined,undefined,function onblocked(){return globalMy.value.IDBOpenDBRequest_onblocked;},function onblocked(val){globalMy.value.IDBOpenDBRequest_onblocked=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onblocked.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onblocked.set,'set');
globalMy.value.IDBOpenDBRequest_onblocked={};
globalMy.mydefineProperty(IDBOpenDBRequest.prototype,'onupgradeneeded',{},true,undefined,undefined,function onupgradeneeded(){return globalMy.value.IDBOpenDBRequest_onupgradeneeded;},function onupgradeneeded(val){globalMy.value.IDBOpenDBRequest_onupgradeneeded=val;});globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onupgradeneeded.get,'get');globalMy.functionprotect(Object.getOwnPropertyDescriptors(IDBOpenDBRequest.prototype).onupgradeneeded.set,'set');
globalMy.value.IDBOpenDBRequest_onupgradeneeded={};
IDBFactory = function IDBFactory () {
    globalMy.error("Illegal constructor" , `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`)
}
globalMy.rename(IDBFactory.prototype,"IDBFactory")
globalMy.functionprotect(IDBFactory)
indexedDB = {};
Object.setPrototypeOf(indexedDB,IDBFactory.prototype);

globalMy.mydefineProperty(IDBFactory.prototype,'cmp',function cmp(){},true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.cmp);
globalMy.mydefineProperty(IDBFactory.prototype,'databases',function databases(){},true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.databases);
globalMy.mydefineProperty(IDBFactory.prototype,'deleteDatabase',function deleteDatabase(){},true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.deleteDatabase);
globalMy.mydefineProperty(IDBFactory.prototype,'open',function open(name, version){
    
    console.log(`IDBFactory 打开数据库[open] => name:[${name}] banben:[${version}]`)

    if(version === undefined)
    {
        version = 1;
    }
    globalMy.element.indexedDB = {};
    globalMy.element.indexedDB = globalMy.proxy(globalMy.element.indexedDB);
    globalMy.rename(globalMy.element.indexedDB,"indexedDB");
    Object.setPrototypeOf(globalMy.element.indexedDB,IDBOpenDBRequest.prototype);
    return globalMy.element.indexedDB;
    },true,undefined,true);globalMy.functionprotect(IDBFactory.prototype.open);
sessionStorage = {
}
Object.setPrototypeOf(sessionStorage,Storage.prototype)

globalMy.mydefineProperty(sessionStorage,'$_YWTU',undefined,true,undefined,true,undefined,undefined);
globalMy.mydefineProperty(sessionStorage,'$_cDro',undefined,true,undefined,true,undefined,undefined);

globalMy.mydefineProperty(sessionStorage,'clear',function clear(){},true,undefined,true);globalMy.functionprotect(sessionStorage.clear);
globalMy.mydefineProperty(sessionStorage,'getItem',function getItem(tagName){
    
    return sessionStorage[tagName + ''];
},true,undefined,true);globalMy.functionprotect(sessionStorage.getItem);
globalMy.mydefineProperty(sessionStorage,'key',function key(){},true,undefined,true);globalMy.functionprotect(sessionStorage.key);
globalMy.mydefineProperty(sessionStorage,'removeItem',function removeItem(tagName){
    
    return delete sessionStorage[tagName];
},true,undefined,true);globalMy.functionprotect(sessionStorage.removeItem);
globalMy.mydefineProperty(sessionStorage,'setItem',function setItem(tagName,val){
    
    sessionStorage[tagName+''] = val;
    return undefined;
},true,undefined,true);globalMy.functionprotect(sessionStorage.setItem);



//node下的allNodes存放的是所有节点的一个数组,NodeList
globalMy.node.document = {
    childNodes:[],
}
Object.setPrototypeOf(globalMy.node.document.childNodes,NodeList.prototype)

globalMy.node.allNodes = []
Object.setPrototypeOf(globalMy.node.allNodes,NodeList.prototype)

globalMy.element.document = document;
globalMy.value.document ={}
globalMy.node.document ={}
globalMy.node.document.childNodes = []
Object.setPrototypeOf(globalMy.node.document.childNodes,NodeList.prototype)

//设置document的第一个node节点
globalMy.element.documentType = {}
globalMy.value.documentType ={}
globalMy.node.documentType ={}
globalMy.node.documentType.childNodes = []
globalMy.element.documentType.nodeType = 10
globalMy.element.documentType.nodeName = 'html'
Object.setPrototypeOf(globalMy.element.documentType,DocumentType.prototype)
Object.setPrototypeOf(globalMy.node.documentType.childNodes,NodeList.prototype)
Object.setPrototypeOf(globalMy.element.documentType,DocumentType.prototype)


globalMy.element.html = document.createElement("html")

document.appendChild(globalMy.element.documentType)
document.appendChild(globalMy.element.html)

globalMy.element.head = document.createElement("head")
globalMy.element.body = document.createElement("body")


globalMy.element.html.appendChild(globalMy.element.head)
globalMy.element.html.appendChild(globalMy.element.body)

//这是head里的值
var metaDom = document.createElement("meta")

var scriptDom = document.createElement("script")
// scriptDom.setAttribute("r","m")

document['head'].appendChild(metaDom)
document['head'].appendChild(scriptDom)
document['head'].appendChild(scriptDom)
metaDom.content='{qJ1656299215809h4W9JfElQDQ8r7qlp0pLAFvGWcGVVYSWloaZlD988744qqqqqqqqqh06KlDDCxQYll4608r0qc64q.kwm2NUbPJ_zgzOj_wMNcGo5c3tLZ9sbU1jTYb6u9J8Z~Rc8yFflDDMyYe2stV3L9gXVXdUWTZaUba3jSd7stZHEfEnDcBHQpspVxUioJxwumz102LR6yp8sJHMON8MUZnIum3pV2yRDz_VnNoQDTPR2wZpkm4ioNcIDeeinmBt6THW9yc8km3ipq5QCSJQbmoQY2fAfx5omTOVl7nR0f5F6yLoYEQWv0SwT0qMYwbplQrVCedkVpes9N8K2xYW2RyRkmzs9zdsUqL8aJshCSg86xBWKAWFaTIt0ErxoWnQuTgHv79xo20ROYHRVgyAuxyolQ6xDZnMuT7HbZ9Wo2GUPz2l9anHczqJuEPWARmhUqDUfY_hlqWHmJyqsJ8USTWrkEN3cEqqqqqqqqY.rs6e0VgPLTi._aY2PJqBt1083179008r0VKMxLfDnmFgTGfCPq3EeNc64IwzwRff5um4wRPpi_rhZ8ZO8_qhg3GSWr1|ox2YehGpGYDmCH2Vpp1ectbE5ckRpR0J.mqTUASay1rRtcqLhVaNt10Gw1GVtrmWo19rEDlLccGmsolL7c2rGWVGXmarjDbWmcc2JAKQxMSeZlDl_rlpelYH71jTEe0.BcXNs_Vjj1Hxtyq.vV5RtN0Oy1Xm4LGsvVexdgSd9oeT9L0kR3dyE5vsnVQzvXruq1i2tZA.aVdJtOlOV17gtuYHE1L2E00.hc7RsSV.6KgwECV.r8_Aqqqqqqqqhv9KVQ6Yxn5sk674qr0qixF7s9f8QlN7VvAr0QFpY8xY0BKnmQtTqjUnTwtTqXUc2Qqqqqq!x7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipaqq';

globalMy.value.Document_cookie='7078512fe8=075acf59953577e481a10d15d668f262; GW1gelwM5YZuT=53.98uCtyozqqqqDrLnrMaAEp6HiZ2VK_3ysZDfIqDpmCww0Mt62lsn3LobfV8bhtAnSLsfH12frP5CUCOhWuHIjyS3Fx9JbQyXBn7WEntyitPVFsadd8p_7d1blnyTJWCWKX6hPazHUv3q84yWhTvOcv8Y4HT1f5rtpH1rEpENHVrzfUX75Lm5nLYMQCYQt76d.oDd.n0EkuUbrw1weDs6frRxglgubaC_ejQtP3VFyVbxAUwfdwS5U5QTXEZRkdsGR2IqP5IfD..uAgppDoiK'

globalMy.mydefineProperty(sessionStorage, '$_cDro', 'Wq', true, undefined, true, undefined, undefined);
globalMy.mydefineProperty(sessionStorage, '$_YWTU', 'S14gVNExWa1fL.6EogNf8QTqMfPrVEzef4jt16EPBfW', true, undefined, true, undefined, undefined);
globalMy.mydefineProperty(localStorage, '$_f1', '8hTsokUMbdUlLGPRf.f2NqD71Ra', true, undefined, true, undefined, undefined);
globalMy.mydefineProperty(localStorage, '$_ff', 'S22gwmoiesNI7IKHdC24gQgG8jjcEdSCjd7imizrE3HDx44TDH1xamBrRP0a8WR_', true, undefined, true, undefined, undefined);
globalMy.mydefineProperty(localStorage, '$_f0', 'yDwcHZeuLkARCOJO3WaZvhcOlqQ', true, undefined, true, undefined, undefined);
globalMy.mydefineProperty(localStorage, '$_fh1', 'abJRX5qGt_GW5Q3sOLAzug9aM7Q', true, undefined, true, undefined, undefined);
globalMy.mydefineProperty(localStorage, '__#classType', 'localStorage', true, undefined, true, undefined, undefined);
localStorage.$_nd='13968';
globalMy.mydefineProperty(localStorage, '$_cDro', 'Wq', true, undefined, true, undefined, undefined);
globalMy.mydefineProperty(localStorage, '$_YWTU', 'S14gVNExWa1fL.6EogNf8QTqMfPrVEzef4jt16EPBfW', true, undefined, true, undefined, undefined);

$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.scj=[];$_ts['9887446']='ǘ*ǑǒȂଈ\x00숈[=(,.;);){[5]](<var =0;){var =0,++ ]=]=.push(&&+===;}function &return ;var .length;=new ){if((){var ++ ){();!==+=!=|=||];);}function ));if(>[4]][){}(362,;if(try{=[],>>=[];=(-for(),if( !){return (168,>>><==[(178,?*);}}function ));(343,][];if([7]]==);var (){return [166],;function /==[40];;}[9]](()-(){(176,=1;);});return >=[27];=0;var = !,true);],;}else{++ ;[98]]^;}}function ;this.[27],++ ){var [69]]();}else{.length===[1]]((357,;}return <<();var  in [3]]((){if(:(953,.length,.length>[149];[1]](0,=this.;return )){; ++(229,,0,[74];[0];[0],++ );(360,++ ){if([27]){){if( typeof [54]](^]===:case .length<[18]](+=1;[8])][());[43]](()[);}return [71]]([40],[64]](.y-[76]&.join(=0;if([70]][[76];](;for(={};[149]&>0){)){var (),){for(var [1];++ ]=(+=2;.x-.x*[55]][.abs(.y*);}if(++ ];){if( ![99],[27]);)||([14]](&& ![66]+.length;var [91]]=[90]](.length-();if()===[100];.length-1; ++;}else if([95]][(224,[73]](();}){}function [2]]=this[={},try{if(=1;var ;}var [0])[49]][[162];=false;[82];);}}catch([143]^=0;for(var [37]](());var .sqrt((.y);.x)+(=0;while([3];(910,,0);(10,.length; ++[100],[96]](;}}catch(]|)/){return;}%.join(\'\');}function = typeof [92]](]);.max([8])];[79]);[162]||[1],);}var [26]+[162]){[60]](.length/+=3;&&(.set([94],return[||(return());}function =true,++ ;}else{)*(+=1;}[85]););function [21]]([27]]=[15]]=.x,+1)%;}for([5]](this,[([178];.get([40]);=((return;){}}function [100]){[12]]=(707,===0){[143]]^[46]][]]!==[67]){[91]][=[];var +=5;[57]+)|0;[98]]<<=1,[78]+[49]){;){[72]][=null;var ]]=[93]);[77]]=[89]]=){try{var );}catch([2]];if(;}if();}}];}}function =\'\';var [149]^);while();}else if(){try{if(){}}}function [31]][];var ()){[149])&(234,>0;[2]]===[33]](=true;[143])&[157]);[27]);if([17];try{return ();}else{;}catch(.length>=[100])<<[9]*[184];[41]);.y)/([1][[60]]=);}else{return ;}}if([27]];[(([36]]([162])for(var [80]);}}.x+.length!==.length<=++ ]<<[6]]()));[178],[38])[0],[288],[40])+[40]){+=8;|| ![27])+[15]][){this.[2]]=();}return [65]]===[80]&&[164]),]=([29]]==true;}if([3],:if([340]](;(]!==){return(){return[+=4;.length+[595],);}}}function [71]]){];}return [37]);[2]){);}else if(();if( !(]^=]:\"\")+\" )\")[];}}catch([2];[20])];+=9;)){if([62]][[43]](([35]];,1,===null||[4]]=new (new ):)+)*)%[547]]=+=7;[28]][&& typeof +=13;[56]]([76]){[76])&[381],;if( typeof [616]][+=1;if([170]]([27]+[327],[577]][;for(var =[];for(var [16]);-1;.length);[63]](-- ;if([8];[135];[52])<<.length;while([4],[0][]?\": \"+[48]]=]=\"\";[198]]);}[87],,true);}function [36]](this,arguments);}function [59]]=();}function [44]]([593]](.src=);}}}catch()||[52];var <<1^([14];[170])&[399]];[37],)&&[10];():[45]);(129,[30],;}}}}if([53]]([279]],[75]]){[120];[13]]){[640]);for(var ++ ;}if(=arguments[1];var .z;[27];}var [611]](+([71]][[568]],[71]]=[90]](0,[195],[4];for(+1);var ];}if([132]](=1;}}}if([47]]=arguments[0];){}try{[8])];if(]])!==(206)&&[75]]=[37];[317]]=[75]][.length;for(var [30]);var ++ ){if( typeof([301]]&& ![260]]=[1]+=false;var [6]];var [7]]){case [19]]===[578]];[24])){}else{if([186];return )]=[40]||[32]],(this,this.[85]){[67];[647]][[138];[474]];=this;var [28]]===arguments[1]){[157])*[100]]^(){return[[338]]=[666]]||[37]);}if([36]](null,[143]]<<<this.;}else{return [5]](this.[572])&&;}for(var (22,+1]&[219]](()));[17];}else{(){if( !this.[191]);if([186])/[257]];[68]][[23]];[565]]!==?1:[83]]){[564]]=====0){[405]](-1;else if([53]]&&[325]][[2]];if( !]));}[656]]&&);}}var .y;[278]]([190]:[162])return[(923,[6]]()[[225]]([37]*([76]^[138];var [42]]();}function [498]][>0||[179]]([0];var +1];=[];this.);}else{if([6]]=[24]){[181]][)>1){[540]][; --[74];}return [461],[85]]){[55]]){[505]](.length;if([206]],>0){for(var [88]]=[20])in [22]==[403])===[12]][());}catch((256);[88]][[76]);if([36]]([],[138]){this.[496],[10]]=[25],,arguments[2]);var ++ ;break;}if([26],);}}}.top){=null;if( !this.[50]][>=0;[169];[514]))!=.y)));if([562]]([([(){return[];}function [139]);[145]){[46]],(709,)<<];}function [12]]){[86]);;}break;case [516]])){.length%[254]](=false,[684]],[1]](0);[125]]([100]?[84]][[91]]!==[186])|([84]]=.x&&,arguments[0],-1; ++[31]];var ];}){return[0,0];}[74]));[53];[430]]&&[192]+[44]);if([47]]===arguments[0]&&[95]]=]!=[0]||[27])){return\"\";}}var ++ )]*[98];[262]],.x);[74],+=15;(this,[35]]=this[[70]]=[33]){[421])in [82]);[82]),[2],[2]^++ ])&[52])-[169],,true,arguments);}function [406],[97]]&&([0]);if([35]]=[479]]([351]);[53]]);[236]]([98]]==.length];}function [0]&&+=14;;}}else if(]<]=1;[194];(368,={};if([47];[490],[83]]=(){this.[0];}[28]]=[83]][[91]]){[27]*[12]);[156],[531],[27]&&(830,=0;}function .y))*[76])+[44]](([76]);[0];if());var );if( !){if((]]){[222]],)!==true){[581]]([598]+-- ){if([85]]=[255]]([12])<<[384]]=[16],++ ;}else if([85]][[27],( ++[386]],).split([440],]++ ;}[74],(!=null){[13]][[95];.length-1];[13]]=)return [183]]([101]);-1+[27]){if([167]];[311],++ ;}}}[41],[344]++=11;[100])*[70]]){^=[76];if((){return new [0]+[61]],[61]]=();function [0]^[88]]){[579]];[556]]([31]],,this);[268]];[562]]([48]](=false;}[79]));[221]){]&&[9]][[98]]]^[57]);if([430]][return 1;[96]);[655])){(59);}catch(.pop();if((1);[149])+[85];[40]);}[654]);[27];}else if([40])|([3]),||0;if([181]^+=());return ){return[(]);}}=true;}catch([100];while([178])-)|(;}}for(var ]>>>|=1<<[508]))();[472]]!==[33]],[0]++ ;}else if((false);=String.fromCharCode;var [143];]);if( ![56]]);(953,1);[143],===\'\')))&&[33])!==null&&( typeof [365];[134]];[149];}}for();this.[640]);[76]-(=true;break;}}}];}}return (897);[27])&&([232]].sdp,\'\\n\');[172];[1]](0),=false;;var [105];}if(.x!=[492]],){try{,0);}function [238]))!=[74]);[4]&&.length);}}function +=39;(203);[396]];}}}};function [7]));}if((368,0,[76]];.y;if(>>>1));}[143]);=[];if( ![646]],&&((+=62;[347]){[64];[456]],[293]]&& ! ![74]){(133);if(=true;}}return [38],[214]]===(206)){[97]]))){return\"\";}for(var +=-4;[120];if([78])[0];var .length!=[45]),[349]];++ ;}}[30])){[27]);continue;}}[20]),[528]], !1,0,0);[135]:1;[1]);for(var [283]);}catch(>=40&&;}}}}function -30;}[419]+(new [40]);var [3]; ++[630]),());}[40];}else if([40]];[35]){.length);return (372,[97]][[26])===0){var [683]]=[40]];if([485]],[65]);.length][[36]](this,arguments);return;}for(var ];}for([28]){];for([549]];}else{[81]);++ ;}}return ))return [0]<<[6]]()==[142]].length;();return{[482],[40];for(<127){[91]);[449];[121]))in [91])+[81]){[271]]);()){this.[388][(614);[178]){return;}var +1]^=[105]){var (152);[354]]([473]));[100]& -[139]);}if([622]](0,0,[570]]=[566]]||[570]]/[249]],[52]];if([680]]&&++ )];if([178]&&[103]));[184];if([85];}if([422]+[41]);}else{}}catch([63]];var [59]);}[4]].get=[313]);var [31])continue;[692];[122]],[122]]([606]]([245]],[245]];[1]);}return ])===]();[74]];}return [74]];}return([76]){return[0,0];}for([423]);=window,[247]]&& ![674]];}[57]);[687]],[275]]([161]])/[27]));[165]);if((>>>1)):([233]]);+1));}}function [117];=1;}}if(( ![43]],[111]){[542]]!==[138])||[70]];var (1,0),[95]]){!==\'\'){if((739);[52]);else if(=1;})return false;return [635]]||[]).join([272]]);(38);.pop();:false};}function ();}}])?1:0);}[0]){if([113];[3]===[397]));[4]].push;;var =this;try{var >=92)[71]];(808,,{},[409]]();[50]));[196]]([3]=([138]),[200]]&&[196]];[244]);var [30]]);var [1][0]===[616]]||[292],[].length;[656]][[40]&& !|=1;[656]],!=true)){(843);[143]));if([522])!==));}else{>=97&&;switch(arguments.length){case 0:= ! !([1]/([355])))[342]);[0]>>>0;}function [196]][[27])|([0]=([56])!==0)[338]]);this.[688]){){return false;}}[27]];if([261];var [682]](0)[(0);return [380]))in ;}if( typeof [27],unique:false});}function =unescape,[157];return |=1;}if([27]];var [40];}}var .length){var [40]]);break;}[49];if([0][1]){[256];[9];[133];}var [641]]([641]],(582,)return new [266])));[162])>>>0;}function [97];}if([273]](0);return [143]))){return [314]](;}break;default:break;}[1]=[41])+[60]][[178]);}}return ++ ;}}}return [26]);if( !([40]-[40]/[5];[40]*=false;}if(this[[325]]&& ![40]?[315]]([596]]([217];if([138])));}[41]){[98]];}function [464]]);if([76]!==0)[315]]=[439]]([436]]){if( ![102]);if([180];[80]))&&( ![115];var +1:[521];<<1)^[83];[687]]()*={\'tests\':[180],[48];){return[true,[193]]=);return\"\";}try{var =[0,0,0,0,0,0,0,0];],0);[76]);}else if(,false,arguments);}function (12);[72]]===[92]];var [157];else [186]);return;}[74];}else{[435]](++ );}[24];[678]).length===0){[387]]){[24],[589]);if( !([296]]([1].length+[63],[11]]&&);return\"\";}var [611]](\'2d\');[63];[42]]()/));function +=35;[601],)){return;}if([379],[511],[306],](arguments[0]);break;case [438]]([241]in =arguments[0];}return [11]].now());}}function [168],[618]]].join([572],[609];[63]in [32]]?.day!==(211);}}catch([30],\'\',[23]]==0;function (838);.length-1)===[135])+[511])));}catch([87]);if( !(904);.x==[67])[40]];this[[693]]=[477]];)===false){return [66]);for(var [639]]===0){[431]];(171);++ ;}}}function [37];var [32]][[142]);}[205];}function [398];[554]]();[130];[23]][[151]][[72]]!==, --[345]),+1)];}function [21]],[62]];if((210);[433],[298]],=0;try{.length-1];return -- ;}}else if(=this;function [34]];[34]]=[418]]){[259]),)));var [24];if([100]));[34]]-[343]]||||0;[40]]==0&&[290]];||0,,true);}[61]]);if([148];[163];[363]+(\"any\"!==(713,|(].y-[98]]];}}return[.y);}function [495]),]+this.[27]],++ ;}for(var [56]);for([57]);for([43];var [101]],[136]^([110]],[110]]-[40]));[667]))||[61]<=[130]),()*[100]];,0);if( ![135]+[6]])){if((){return(();try{[349]]=[186]||this[;return[[450]],[40])){[133]);}else{[27]]&;try{[591]),[40]));var [119]));.x<=true;}}}catch(.x;[478]));])!==[40]);if( ![24]===.push(0);}while([95]||[125])-1]);if([76];}}var [100]);}if([27]];}}return [74]];}function [495]));}catch([349]||[462]];[410],[],){case [67];function [469]]||([22];}}[215]))!=[676]));]);}}}function ](arguments[0],arguments[1]);break;case ]){return true;}}}return false;}function [356]in [470]](.top==null;[694],[442];if([40])return .length;}else{==null;==null?,false);}return null;}function [4]].set=))).top===[42]]()-);}else{return;}[569]),[637];[37];}}else{if([13]););}}return [212]))[()));}catch((){for(var [87],\'\');}}catch((960,(1,0);var [40]+1){continue;}if([202]]);}[26];var [101];[100]:1]^[5]++ ;}}for(var ))[[348]]){[101]+-1];}[57])){var )===0){return [1]+(new )){continue;}else if([20])]||.length-1]);];}var [149]; ++[186],true,[407])));var [389]]([374]);[100];}else if([39])?[390]]=[39]);){return null;})|(([51]);if([68]];[27]);}if([162];return [34]])));[673],,false,arguments);[226])];=1;}if([160]+(\"any\"!==(338,[612]]([143]);}else if([2]++ ;}else if(){}}}return false;}function ].x-[162]){var [178];}else{[246]+<<=1;}[19];var [17];}if([401]]!=[497]));[120]){if([7])),[300]]){}else{>=127)){return;}if([81]|| ![15];var [2].length>0;[80];[187];var [214]]&& typeof =false;for(var +1));}else{return\"\";}}return\"\";}function [487],[150]];}if();for(var [89]){[2]];if(this[[59];[448]&&[594],++ <++ :[223]](()));if(++ ,[4];.length));}}};function [391]];);for([109]](){if(this.++ ]^[105]){this.[33]](new [328]]);}else if([37]);var ==0||.y<.y+);}}}try{if( typeof [229]]([35]);if([102]))){[155],[67]){return;}try{this.[540]]&&[434];var (){return(([523],try{for([35]];}catch([270]);var =encodeURIComponent,+1)).join([597]),\"\");[272]]===(1,1);[89];}else if([224]],[536]);();for(var [ --[364],===\'\'){if([491]]((62);[39];var [92]];this.)){if( !(true);[1];if(=\"\";var [162])){if((884);[12];[149])|(-=1;}[85]){continue;}[182]]();}else{return;}}catch([131]][){return 0;}if([19]]!==([15]]){=true;if(++ ;}return [193])^[98]]);break;case [118]]=.charCodeAt(0)-97;for(var [188]);.length==.run=){}if([146],[82]);if([665])!==[107]){=0;}else{[472]]:\'\',[524];.log,);}}else{var [135]&& ![685]]()[,1);return;}}}function [48]);){return false;}}function [200]][[65]]);if([604]],.y<0){[166])&&-- ){[605]];[631];var [155]){return 1;}else if(=this;();this.[476]]:\'\',.join(\'\\n\'));}function [103]){[57]));[40]);else if(([527]);[177],=0;}break;case [142]);[427],?0:=[];for([308]]||[53]);[60],0]);[576]);var ()));}function [466]));]>=]>>(\'t~a}tyr`~wtnp`}plof@alap`tyope<q`{}zazaf{p`nlww`az@a}tyr`af{p`upcxkicvqt`nzynla`}p~{zy~p`{p}qz}xlynp`zyp}}z}`zywzlopyo`ap~a`zy}plof~alapnslyrp`$_qsR`UUT`~{wta`{}zaznzw`nbnkm{ran{`xlans`R`nwpl}6yap}clw`saa{~[`P`*`ylxp`peap}ylw`nzzvtp`2vn=`wznlatzy`oznbxpya`nptw`atxp@alx{`~alab~`l{{wf`l{{pyo0stwo`#`l`vpf0zop`$_7>ys`rpaAtxp`qwzz}`}zbyo`otc`oznbxpya2wpxpya`pcpya`~pyo`:las`E:95aa{?p|bp~a2cpyaAl}rpa`(`}p~bwa`nly=wlfAf{p`}pxzcp0stwo`~afwp`xlans:potl`[`wznlw@az}lrp`}p~{zy~pE:9`z{py`}p~{zy~pApea`b~p}.rpya`.natcpE<mupna`rpa2wpxpya~/fAlr;lxp`}p~{zy~pAf{p`&`byopqtypo`5A:93z}x2wpxpya`n}plap2wpxpya`mzof`loo2cpya9t~apyp}`2cpyaAl}rpa`rpa2wpxpya/f6o`$_cc06`zy{}zr}p~~`YQ`tyyp}5A:9`,`M`saa{[`qbynatzy`nlycl~`zywzlo~al}a`}pxzcp2cpya9t~apyp}`zylmz}a`O`$_q{yR`zyatxpzba`zy~bnnp~~`~{wtnp`zywzlo`~pa6yap}clw`i`$_n1}z`E:95aa{?p|bp~a`rpa.aa}tmbap`tyopepo1/`mbaazy`wzlo`n{b0wl~~`azB{{p}0l~p`s__jmvijs|__F_jmvijs|_8iehiv3shi`\\\\hIOL,J\\\\j`Hybww] t~ yza ly zmupna`apea`{z~a`dpmvta?A0=pp}0zyypnatzy`w 124E`bytqz}xSq`nwtpyaE`nlwpyol}`szcp}izyNopxlyoiyzypilyf`utqqv`|.pd|f1dh~?.pd|f1dh~`:~exwOE:95AA=`.mz}a`a}fh}pab}y Idtyozd ty~alynpzq DtyozdJ(jnlansIpJhj`<=2;` sptrsa*W dtoas*R af{p*l{{wtnlatzyPeN~sznvdlcpNqwl~s ~}n*`xzg6apx~`bdjU~yyze`p~nl{p`4pa.ww?p~{zy~p5plop}~`az1lalB?9`~pa6apx`d*xXduQ|aaQdgb+dda7*dzdjXhx`.oo@pl}ns=}zctop}`yUapm0XZB0XZ`cp}ape=z~.}}lf`jaz|pg3WrnyUynhra L7 H|{ca|y36`6yaw`aspy`A`nlyotolap`)2:/21 to*`$_qq`apeaPexw`s8iep<mhisH8iep<mhisBxqC [gxmzi> )srxvsp BMLGfmxC`:tn}z~zqaOE:95AA=`n=nju;ujdn{M=nju;ujdn{G}vH ,l}ranC .xw}{xu GRQLkr}H`nsl}rtyr`azbnsp~`^\\\\~Li\\\\~L$`~alyolwzyp`rpa2eapy~tzy`q=+?kh-~zH{i}kh`\\\\\\\\`g}ehyeyry|yfksxq~wu`{l}~p3wzla`yzyp`}zd~`mg\\\\}J\\\\Gxk~sbo myno\\\\]\\\\}Ji`dpmvta=p}~t~apya@az}lrp`nwtpyaF`saa{[PP`azbns~al}a`nzzvtp2ylmwpo`~pa9znlw1p~n}t{atzy`3?.4:2;A_@5.12?`IlyfN{ztyap}`wpqa`.ule }p~{zy~p mzof }p{wlf N `$m_nlww5lyowp}`wpcpw`nzyapyaNaf{p`3bynatzy`$mx3QlEGw?xwCfB57`zmupna`:~exwSO@p}cp}E:95AA=OVOQ`sl~<dy=}z{p}af`jrgvcKdyybparr{`]`dk|h|u|a|inv{tczx`opalns2cpya`sptrsa`fk`xzb~pwplcp`obx{.ww`~a}tyrtqf`:216B:_6;A`{l}pya2wpxpya`Dpm@znvpa`laalns@slop}`stoopy`?A0=pp}0zyypnatzy`wzlopo`{z}a`Azbns2cpya`zqq~paBytqz}x`slyowp}`[\\\\oL`qz}2lns`<{py`( @pnb}p`:~exwSO@p}cp}E:95AA=OWOQ`qzya~`~p~~tzy@az}lrp`xlansp~`z}tpyalatzy`nwz~p`{}zobna@bm`xp~~lrp`Hylatcp nzop]`IJ*+m`qbynatzy qpansIJ h Hylatcp nzop] j`n}popyatlw~`}pab}y lHm]I`settpmgexmsrI|Gwlsgo{eziGjpewl`zyazbns~al}a`lnnpwp}latzy`m2kbo5myx6kbk5x~o|pkmoLto}syx`xVmcqnhc I\\\\C<EBH]C@ =(5{4.{4X)>B`.ylwf~p};zop`edlwv`d*dzdj`jIKUuryercvpn@Yvorcn{ Rnpuv{r Z{v@H||ywnii@[raqn{n@Mryercvpn Srdr QY Ua| 8: Yuv{@cnu|zn@QL Xznac_M crbc Wrtdyna@INSUa|2yvtuc@Mryercvpn QY 98 Qvtuc Jgcr{qrq@MryerR_N{qvn@XJHW|o|c|Qvtuc G|yq@TW R|un{ch Z{vp|qr Wrtdyna@Ia|vq Xn{b Yunv@Pn{{nqn Xn{tnz RS@IIH Zpur{@py|px756;_e636@Xnzbd{tPn{{nqnWrtdyna@RN QFSYNSL G|yq@Xnzbd{tXn{bSdz8Q Qvtuc@eraqn{n@MryercvpnSrdrYuv{@XJHKnyyonpx@Xnzbd{tJz|wv@Yrydtd Xn{tnz RS@Hnaa|vb L|cuvp XH@Kyhzr Qvtuc W|o|c| Qvtuc@X|RF2Ivtvc Qvtuc@X|RH Xn{b Wrtdyna@M*)v*dn{O@bbc@bnzbd{t2bn{b2{dz9Y@tz_zr{tzr{t@Q|uvc Pn{{nqn@cvzrb {rf a|zn{@bnzbd{t2bn{b2{dz9Q@bravs2z|{|b}npr@Xnzbd{tXn{bSdz28Y Yuv{@H|y|aTXZN2)Yuv{@Ia|vq Snbxu Xuvsc Fyc@Xnzbd{tYrydtdWrtdyna@Gr{tnyv TYX@RN Qn{Yv{t_LG Tdcbvqr *X@K+Rvn|(d_LG6=585@uryer2{rdr2artdyna@XXY Rrqvdz@H|davra Srf@Puzra R|{qdyxvav G|yq@Mryercvpn QY 78 Zycan Qvtuc Jgcr{qrq@Mryercvpn QY 7: Zycan Qvtuc@W|o|c| Rrqvdz@Ia|vq Xn{b G|yq@t|dqh@bn{b2bravs2p|{qr{brq2yvtuc@XKv{qra@{|c|2bn{b2pwx2zrqvdz@zvdv@RW|pxh UWH G|yq@F{qa|vqHy|px Wrtdyna@Xnzbd{tXn{bSdz29Q Qvtuc@bn{b2bravs2cuv{@FnUn{t*nra@pnbdny@GS R|un{chTY G|yq@g2bbc@S|c|Xn{bRhn{zna+nfthv@Mryercvpn QY 88 Yuv{ Jgcr{qrq@FbuyrhXpav}cRY Fyc@S|c| Xn{b Iren{ntnav ZN@W|o|c| H|{qr{brq G|yq@W|o|c| Rrqvdz Ncnyvp@zvdvrg@S|c| Xn{b Ldazdxuv ZN@XXY [vrc{nzrbr Qvtuc@QL_Tavhn@uhp|ssrr@g2bbc2dycanyvtuc@IKMrvF(<2F@K++()GYTY_Z{vp|qr@Iren{ntnav Xn{tnz RS G|yq@bn{b2bravs2z|{|b}npr@Unqndx G||x G|yq@QL2K+*v{tGvPnvXud2X6:2[737@QL2K+*v{tGvPnvXud2X6:2[738@MryercvpnSrdrQY Ua| 8: Yu@Rvpa|b|sc Mvznynhn@Xnzbd{tXn{bKnyyonpx@XXY Rrqvdz Ncnyvp@F{qa|vqJz|wv@Xnzbd{tXn{bSdz28W@NYH Xc|{r Xravs@bn{b2bravs2bznyypn}b@g2bbc2zrqvdz@QL_Xv{unyrbr@W|o|c| Yuv{ Ncnyvp@pr{cdah2t|cuvp@Hy|px|}vn@Qdzv{|db_Xn{b@Ky|avqvn{ Xpav}c Fyc@S|c| Xn{b Ldazdxuv G|yq@QYM*X+P G|yq@LX_Yunv@Xnzbd{tSr|Sdz_8Y_7@Fanovp@un{b2bn{b2{|azny@Q|uvc Yrydtd@M*VvMrv2:5X Qvtuc@Qv{qbrh s|a Xnzbd{t@FW Hahbcnyurv IG@Xnzbd{t Xn{b Rrqvdz@bnzbd{t2bn{b2{dz9:@un{b2bn{b2o|yq@Qdzv{|db_Xpav}c@XXY H|{qr{brq@Xnzbd{tIren{ntnavWrtdyna@F{wny Rnynhnynz RS@Xnzbd{tYunv-crbc.@K+Qn{Yv{tMrv2R2LG6=585@Mroarf TYX@LX9:_Fano-F{qa|vqTX.@Xnzbd{t Xn{b Qvtuc@Hu|p| p||xh@uryer2{rdr2cuv{@US R|un{chTY Rrqvdz@QL2K+PnY|{t2R6>2[739@Ia|vq Xravs@Xnzbd{tXv{unynWrtdyna@uryercvpn@QL2K+PnY|{t2R6>2[737@S|c| Xn{b Iren{ntnav ZN G|yq@XXY Qvtuc@IKUJz|wv@frncuras|{c{rf Wrtdyna@W|o|c|Sdz8W@INSUa|2zrqvdz@Xnzbd{t Xn{b Sdz::@XXY Mrneh Ncnyvp@QLy|px9 Wrtdyna_5=5:@Lr|atvn@{|c|2bn{b2pwx@Yrydtd Xn{tnz RS G|yq@RNZN J) S|azny@M*VvMrv2<:X G|yq@S|c|Xn{bRhn{zna+nfthv G|yq@hd{|b}a|2oynpx@uryer2{rdr2{|azny@Qdzv{|db_Xravs@YR R|un{chTY S|azny@Xnzbd{tXn{bSdz28Qe Qvtuc@Xnzbd{t Xn{b Sdz9:@XznacL|cuvp Rrqvdz@tr|atvn@pnbdny2s|{c2ch}r@Xnzbd{t Xn{b G|yq@bznyy2pn}vcnyb@RKv{n{pr UWH G|yq@K+Qn{Yv{tMrv_LG6=585@Xnzbd{tFazr{vn{@W|o|c| G|yq@pr{cdah2t|cuvp2o|yq@g2bbc2urneh@XXY Qvtuc Ncnyvp@YunaQ|{@g2bbc2yvtuc@Iv{o|y Wrtdyna@Xnzbd{tGr{tnyvWrtdyna@PS R|un{chTYXznyy Rrqvdz@uh}dar@Xnzbd{tYnzvyWrtdyna@Rnynhnynz Xn{tnz RS@S|c| Xn{b Pn{{nqn ZN@uryer2{rdr@Mryercvpn QY :: W|zn{@S|c| Xn{b Pn{{nqn G|yq@Xn{}hn@Xnzbd{tUd{wnovWrtdyna@bnzbd{t2bn{b2{dz9Qe@QL_Pn{{nqn@Xnzbd{t Xn{b Wrtdyna@+nfthv2T{r@Ia|vq Xravs G|yq Ncnyvp@K+PFYO(@p|davra {rf@Xnzbd{tJz|wvWrtdyna@RNZN J) G|yq@F{qa|vq Jz|wv@S|c| Snbxu Fanovp ZN@QHI H|z@Kdcdan Rrqvdz GY@[ve|2rgcanpc@Gn{tyn Xn{tnz RS G|yq@un{b2bn{b2artdyna@XSdz28W@XSdz28Y@un{b2bn{b@XXY Zycan Qvtuc@W|o|c| Wrtdyna@W|o|c| Qvtuc@Mn{dzn{@{rfytt|cuvp@IKMrvF(:2F@un{b2bn{b2yvtuc@Uyncr L|cuvp@XSdz28Q@Mryercvpn QY 9: Qvtuc@Rhn{zna Xn{tnz +nfthv G|yq@yt2bn{b2bravs2yvtuc@RNZN J) Qvtuc@W|o|c| Yuv{@X|RF G|yq@Unqndx@Xnzbd{t Xn{b@X}npv|db_XznyyHn}@bn{b2bravs@I[ R|un{chTY Rrqvdz@Xcnoyr_Xyn}@z|{np|@Kyhzr2Qvtuc@siihb2q|b}h@Xparr{Xn{b@py|px756;@W|o|c| H|{qr{brq G|yq Ncnyvp@Favny@PS R|un{ch Rrqvdz@R|c|hnQRnad (8 z|{|@Mn{qbrc H|{qr{brq@W|o|c| Ncnyvp@MYH Mn{q@XXY Zycan Qvtuc Ncnyvp@XXY [vrc{nzrbr W|zn{@S|c| Snbxu Fanovp ZN G|yq@pu{sigu2zrqvdz@XSdzH|{q28Y@pr{cdah2t|cuvp2artdyna@qrsndyc_a|o|c|2yvtuc@S|c| Xn{b Rhn{zna@Rhn{zna Xn{tnz RS@F}}yr H|y|a Jz|wv@frncuras|{cWrt@Xnzbd{tRnynhnynzWrtdyna@navny@Ia|vq Xravs G|yq@HU|8 UWH G|yq@RN QFSYNSL@Xnzbd{tP|arn{2Wrtdyna@crbc9: Wrtdyna@b}vavc_cvzr@Iren{ntnav Xn{tnz RS@Xparr{Xravs@W|o|c|@pdabver2s|{c2ch}r@XYMrvcv_eve|@pu{sigu@Xnzbd{t Hy|pxK|{c 8F@W|o|c| H|{qr{brq Wrtdyna@bnzbd{t2{r|2{dz8W@LO R|un{chTY Rrqvdz@Hudyu| Srdr Q|px@a|o|c|2{dz8Q@uryer2{rdr2dycanQvtucrgcr{qrq@Xnzbd{tTavhnWrtdyna@Xnzbd{tXn{bSdz29Qe Qvtuc@R*v{tMrv_6=585_H72G|yq@IKUXun|Se(:2LG@W|o|c| Gynpx@uryer2{rdr2dycanyvtuc@tz_gvurv@QLy|px9 Qvtuc_5=5:@Ldwnancv Xn{tnz RS@Rnynhnynz Xn{tnz RS G|yq@a|o|c|2{dz8W@XY)vurv_eve|@K++ud{*dn{_LG6=585@{|c|2bn{b2pwx2yvtuc@p|y|a|b@S|c| Xn{b Ldazdxuv@S|c| Xn{b Xhzo|yb@W|o|c| Qvtuc Ncnyvp@Q|uvc Ynzvy@pdabver@qrsndyc_a|o|c|@GunbuvcnH|z}yrgXn{b G|yq@QL_Sdzora_W|o|c| Yuv{@z|{|b}nprq2fvcu|dc2bravsb@Mryercvpn QY 8: Yuv{@bnzbd{t2bn{b2{dz8Q[@INSUa|@O|z|yunav@bn{b2bravs2yvtuc@uryer2{rdr2oynpx@Q|uvc Gr{tnyv@Rhn{zna Xn{tnz +nfthv@Ia|vq Xravs Ncnyvp@W|o|c| G|yq Ncnyvp@Sn{dzL|cuvp@X|{h R|ovyr ZI L|cuvp Wrtdyna@Lr|atvn G|yq Ncnyvp@bnzbd{t2bn{b2{dz8Qe@hd{|b2cuv{@bnzbd{t2{r|2{dz8Y2p|{q@S|c| Xn{b Rhn{zna ZN G|yq@ytbravs@K+*|dMrv2W2LG6=585@Q|uvc Ud{wnov@onbxraevyyr@bnzbd{t2bn{b2{dz9Ye@bnzbd{t2bn{b2cuv{@QL Jz|wv@F{wnyvSrfQv}v@Xnzbd{tXn{bSdz29Y Yuv{@Xnzbd{tP|arn{2G|yq@zvdvrg2yvtuc@S|c| Xn{b Pn{{nqn@W|o|c| S|azny Ncnyvp@Lr|atvn Ncnyvp@bn{b2bravs2zrqvdz@Xznac +nfthv@W|o|c| H|{qr{brq Ncnyvp@S|c| Xn{b Pn{{nqn ZN G|yq@IKU Xp Xn{b Mrdr85_658@QL_Sdzora_W|o|c| G|yq@Unqndx G||x@g2bbc2p|{qr{brq@Xd{buv{r2Zpur{@W|o|c| Gynpx Ncnyvp@Wv{t| H|y|a Jz|wv@Iren{ntnav TYX@Xznac +nfthv Ua|@K+Qn{Yv{tMrv2R2LGP@F{qa|vqHy|px2Qnatr Wrtdyna@}a|}|acv|{nyyh2b}nprq2fvcu|dc2bravsb@Hdcver R|{|@cvzrb@QL Xznac_M crbc G|yq@INSUa|2Qvtuc@bn{b2bravs2oynpx@Q|uvc Iren{ntnav@}a|}|acv|{nyyh2b}nprq2fvcu2bravsb@bnzbd{t2bn{b2{dz8Q@R*|d{t UWH Rrqvdz@IKL|cuvpU(:2GNL:MP2XTS*@un{b2bn{b2zrqvdz@XXY Mrneh@QL2K++ud{*dn{2R572[737@Rhn{znaZSrf Wrtdyna@S|c| Snbxu Fanovp G|yq@Xnzbd{tLdwnancuvWrtdyna@sn{cnbh@uryer2{rdr2yvtuc@Mryercvpn Srdr TYX G|yq@{|c|2bn{b2pwx2o|yq@bnzbd{t2bn{b2{dz8W@Qv{qbrh Xnzbd{t@bnzbd{t2bn{b2{dz8Y@Xparr{XravsR|{|@JYadz} Rhn{zna_+(@uryer2{rdr2cuv{rgcr{qrq@S|c| Snbxu Fanovp@QL_Ldwnancv@Xznac_R|{|b}nprq@Ynzvy Xn{tnz RS@QL Jz|wv S|{FRJ@W|o|c| H|{qr{brq Qvtuc Ncnyvp@tz_wv{txnv@K+Qn{Yv{tPn{Mrv_LG6=585@ytcanery@}nyncv{|@Lr|atvn G|yq@Ia|vq Xn{b@QL_Ud{wnov@XznacL|cuvp G|yq@Xnzbd{t Xn{b Yuv{@XXY H|{qr{brq G|yq@H|zvpb_Snaa|f@p|davra@Tavhn Xn{tnz RS@uryer2{rdr2yvtucrgcr{qrq@K+Qn{Yv{tMrv2W2LG6=585@FW HahbcnyurvMPXHX IG@bravs@WY(X*drW|dqL|L5e62Wrtdyna@Rvn|(d_}are@K+*6P@QL_Sdzora_W|o|c| Wrtdyna@F{qa|vqHy|px@X|RF Wrtdyna@M*VvMrv295X Qvtucg@yt2bn{b2bravs@In{pv{t Xpav}c G|yq@qrsndyc@brp2a|o|c|2yvtuc@H|y|aTXZN2Wrtdyna@crbc Wrtdyna@Ynzvy Xn{tnz RS G|yq@K+*v{tGv)v{tXud2X6;@W|o|c|Sdz8Q Qvtuc@z|{|b}nprq2fvcu2bravsb@bnzbd{t2bn{b2{dz8:@H||y wnii@Xnzbd{tSr|Sdz28Q@XY)v{txnv@Xparr{Xn{bR|{|@IKU(n(n(:2LG@Xnzbd{tXn{bSdz28Q Qvtuc@Gn{tyn Xn{tnz RS@Ldazdxuv Xn{tnz RS@XJHW|o|c|Qvtuc@uhs|{ganv{@R*v{tMrvLG6=585H2G|yq@bnzbd{t2bn{b2yvtuc@Mryercvpn QY ;: Rrqvdz@Ia|vq Xn{b Knyyonpx@W|o|c| Yrbc6 G|yq@S|c| Xn{b Rhn{zna G|yq@bn{b2bravs2p|{qr{brq2pdbc|z@Xnzbd{tSr|Sdz28Y@Xnzbd{t Xn{b Sdz8:@z|{|b}npr@YQ R|un{ch Rrqvdz@uryer2{rdr2zrqvdz@QYM*X+P@W|o|c| H|{qr{brq pdbc|zr G|yq@Rhn{zna8@Ia|vq Xn{b Iren{ntnav@Xun|Se_}are@bnzbd{t2{r|2{dz8Q@K+Qn{Yv{tMrv2JQ2LGP@hd{|b@bnzbd{t2{r|2{dz8Y@Yvzrb Srf W|zn{@uryer2{rdr2o|yq@{|c|2bn{b2pwx2artdyna@S|c| Xn{b Ldazdxuv ZN G|yq@INSUa|2oynpx@K+Qn{Yv{tMrv2JQ2LG6=585@XXY [vrc{nzrbr Rrqvdz@W|o|c| H|{qr{brq Qvtuc@XXY [vrc{nzrbr G|yq@FW IO2PP@Ia|vq Xn{b XJRH@S|c| Xn{b Rhn{zna ZN@H|zv{t X||{@R*d}}h UWH Rrqvdz@W|brznah@Q|uvc Ldwnancv@W|o|c| H|{qr{brq pdbc|z G|yq@K+Qn{Yv{tMrvX2W2LG@Mryercvpn Srdr TYX@Pnvcv_}are@W|o|c|2GvtHy|px@K+*GPXO(@Mn{qbrc H|{qr{brq G|yq@Xnzbd{tLr|atvn{@In{pv{t Xpav}c@bn{b2bravs2p|{qr{brq@un{b2bn{b2cuv{@Xnzbd{tXn{bSdz29Ye Yuv{@Q|uvc Tqvn@GunbuvcnH|z}yrgXn{b`lm~zwbap`zqq~paE`zmupna@az}p`nsl}lnap}@pa`x`s}pq`rpa?p~{zy~p5plop}`:216B:_39<.A`nzx{twp@slop}`v6lzqfE[fufdujpo`3twp?plop}`.ule }p~{zy~p mzof t~ yza pyn}f{apo N `wtyv=}zr}lx`( {las*P`zwo0zyqt}x`wznlw1p~n}t{atzy`sl}odl}p0zynb}}pynf`I`ulcl~n}t{a[`{l}~p`nl{ansl?pq}p~sMnl{ansl_}pq}p~sMnspnv9zrtyMopn}f{a0lwwmlnv`p,yvzz~hsr`8pfmzl}o`1<:=l}~p}`~alnv`q}lnatzylw@pnzyo1trta~`xzb~ppyap}`xpal`~pl}ns`um~nspxp[PP`=p}qz}xlynp<m~p}cp}`mwbpazzas`~n}ppyE`xzg6yopepo1/`\\x00`IlyfNszcp}`GYE577FO;D2V;g?vFusxFg:UIJ`{l}~p6ya`~slop}@zb}np`}rmlISUQMRRQMVTMQOUJ`$;D2V;g?vFusxFg:U`{}pnt~tzy xpotbx{ qwzla(cl}ftyr cpnS cl}ftyApe0zz}otylap(czto xltyIJ hrw_3}lr0zwz}*cpnUIcl}ftyApe0zz}otylapMQMRJ(j`xcduhbdnqhdms~shnm`ct~tmtwtaf`Q`sz~a`l}taf`x$1qd6XWqnvrdqXk~rrhbA6XWqnvrdq.drr~fdXdmsdq`QQQQ`wYhrome\\\\E>\\\\dA?`bytqz}x<qq~pa`xtxpAf{p~`nzyapya`ml~p`@A.A60_1?.D`nsl}rtyrAtxp`az3tepo`pclwblap`cp}ape.aa}tm=ztyap}`mpslctz}`H`n}plap@slop}`~paAtxpzba`{ScUkjpnkh@ScUkjpnkh`H(&]`o}ld.}}lf~`pe{p}txpyalwNdpmrw`{__sa|~neran_o}nelp_bj`*a}bp`~lcp`^I,[\\\\ohRMTjI,[\\\\Oi$JJhUj`xzb~pozdy`rmfrrjwmjficithzrjsyHhmfwxjyGmfrrjwmjficithzrjsyHzwqHwjxtq{jwGmfrrjwmjficjqjrjsyHqnxyjsnslHj{jsyxHxytwfljHuwtuGmfrrjwmjficqthfyntsH|wfuujw`$m_{wlaqz}x`wzloE:9`6;@2?A <? ?2=9.02 6;A< 2vn=_a IylxpM clwbpJ C.9B2@I,M ,J`rpa3}lxp9znlatzy` ~}qwe `|}nvwx1z2easD7t5.{R~CF8BT?3:>dY64q=<ZSmc9;uNXgE/l@ybQA0Wrf_UGpVok!-$%^&KIJL*)+O,P[(hjH]i `4paCl}tlmwp`5645_6;A`}lyrp:le`lmz}a`4pa<}trtylwB}w`2yataf`nwtpya6yqz}xlatzy`Iypl} \\\'OOO ybwwHQ]OOO\\\'J`nwtpya p}}z}`}p~zwcpo<{atzy~`bywzlo`1pctnp<}tpyalatzy2cpya`xzg0zyypnatzy`9<D_6;A`zqq~pa5ptrsa`vpfb{`.botzA}lnv9t~aMopqlbwa@alab~M<mupnaO~pa=}zazaf{p<qMalzm}zd~p}_2cpyaMdpmvta?p|bp~a3twp@f~apxMzyz{p}lopalnspoctpdnslyrpM=lasS1O{}zazaf{pOloo=lasM@zb}np/bqqp}O{}zazaf{pOnslyrpAf{pMdplasp}/}torpMns}zxpOn~tM{l~~dz}o_xlylrp}_pylmwpoMoznbxpyaOmzofOeNx~Nlnnpwp}laz}vpfMpeap}ylwO.oo3lcz}tapM@zrzb9zrtyBatw~M@zb}np/bqqp}M~szd:zolw1tlwzrMoznbxpyaO~pwpnatzyOaf{p1paltwM@C4=laap}y2wpxpyaO@C4_B;6A_AF=2_</720A/<B;16;4/<EMoznbxpyaOzy~pwpnatzynslyrpMoznbxpyaOmzofO~afwpOmlnvr}zbyo/wpyo:zopMoznbxpyaOoznbxpya2wpxpyaOzy}p~tgpM0lycl~?pyop}tyr0zyapeaS1O{}zazaf{pOdpmvta4pa6xlrp1lal51MB0Dpm2eaM01.A.@pnatzyO{}zazaf{pO}pxzcpM/wzm1zdywzlo0lwwmlnvM_DE7@MoznbxpyaOx~0l{~9znvDl}ytyr<qqM0@@0sl}~pa?bwpMoznbxpyaO~n}zwwtyr2wpxpyaO~afwpOqzyaCl}tlya;bxp}tnM3bynatzyO{}zazaf{pOmtyoMns}zxpOl{{O6y~alww@alapMt~;zopDstap~{lnpM<mupnaO~plwMoznbxpyaOopqlbwa0sl}~paM__qt}pqze__Mzyxp~~lrpM__~zrzb_~pnb}p_ty{baM0wz~p2cpyaO{}zazaf{pOtyta0wz~p2cpyaMrpa:lanspo0@@?bwp~M;zatqtnlatzyM5A:93}lxp@pa2wpxpyaO{}zazaf{pOsl~=ztyap}0l{ab}pMoznbxpyaOmzofOzyxzb~ppyap}M<qq~n}ppy0lycl~?pyop}tyr0zyapeaS1Mns}zxpM<mupnaO{}zazaf{pO__opqtyp@paap}__MoznbxpyaOqtwp0}plapo1lapMdpmvta.botz0zyapeaO{}zazaf{pOnwz~pM4pa=p}qAp~a~M:potl0zya}zwwp}Mpeap}ylwO6~@pl}ns=}zctop}6y~alwwpoMApeaA}lnv9t~aO{}zazaf{pOrpaA}lnv/f6oMoznbxpyaO~pwpnatzyMoznbxpyaOmzofO~afwpOwtyp/}plvMoznbxpyaOmzofO~afwpOapea.wtry9l~aM@n}ppy<}tpyalatzyMoznbxpyaOmzofO~afwpOxtyDtoasM@{ppns@fyasp~t~Baap}lynpMzyp}}z}MDpm8ta3wlr~M?plop}:zop.}atnwp=lrpM__z{p}lM=p}qz}xlynp=ltyaAtxtyrM{p}qz}xlynpMoznbxpyaOmzofO~afwpOx~Apea@tgp.oub~aMoznbxpyaOmzofOzy{lrpM@C44}l{stn~2wpxpyaO{}zazaf{pOxzg?p|bp~a=ztyap}9znvM0wtnv1lalM:potl2yn}f{apo2cpyaM__$_|tszzTWQ_$__MoznbxpyaOzyxzb~pxzcpM/pqz}p6y~alww=}zx{a2cpyaO{}zazaf{pO82FB=M5A:93}lxp@pa2wpxpyaO{}zazaf{pOdpmvta?p|bp~a3bww@n}ppyMpeap}ylw`RROWXY`rpa@slop}=}pnt~tzy3z}xla`$m_zy/}torp?plof`a}tx`$_yo`v__nuuZsfbuf)sbnfCnuuZvntupn-6`I^\\\\~KJiI\\\\~K$J`;bxmp}`)~{ly wlyr*\"gs\" ~afwp*\"qzyaNqlxtwf[xxwwtt(qzyaN~tgp[RRU{e\"+xxxxxxxxxxxwwttt)P~{ly+`mcoln|sbo|Mobkvak~o`7@<;`@2920A clwbp 3?<: 2vn=_a D52?2 ylxp*,`ns}zxp`saa{`xzb~pb{`mlaap}f`zcp}}top:txpAf{p`wtypyz`zqq~paDtoas`~szd:zolw1tlwzr`~bmxta`tgrosklqEgrosklqlqirEgrosklqphwd`$_qQ`{}pnt~tzy`y7-0j}wcpB/W8`tyap}ylw`zympqz}pbywzlo`pepnbap@|w`mzaazx`g[y}PuyC[y}[g~CV[y}[g~CNq~w[a~wCSqy(yCNq~w[a~wOJ:;9:CSqy(yOJ:;9:CUysdaeavf -qPuyCPydqwy~a [q~e OJC[(Puyfy TywxfC[(PuyfyC[(SqyfyC[([a~wC[(Nq~wea~wCTy[gC-ag-gq~C[(,yxuyC[(.xa~wea~wCN.[xg(yCN.-qafyC[(Kqykg~C[(PgbaC[(TyfyC[(,y~w{qyC[(,y~iuyC`nzyypnatzy`V`t7hdo5od|hu`alr;lxp`ybxmp}`ap~a~`~alab~Apea`{lasylxp`$_q}`jMrnqyrbbHua|zr`pybxp}lap1pctnp~`pepn`vrc_csjehfCrccppltifmg`nl{ab}p@alnvA}lnp`rpa/zbyotyr0wtpya?pna`rpa.aa}tm9znlatzy`apea/l~pwtyp`qbyn`>A=_2=2_5<<8`#RXp`Inzwz}Nrlxba`?p~{zy~pNAf{p`lyo}zto`z~n{b`^II,[H\\\\olNq]hRMUjI,[[iJJhQMYjJI[[J,II,[H\\\\olNq]hRMUjI,[[iJJhQMYjJ$`loo/pslctz}`cvuxveo`$_nzyqtr__Oopaltw__ L* R`zyb{r}lopyppopo`:~exwSOE:95AA=OVOQ`:~exwSOE:95AA=`tUremhfw lgV\"eeQKnm\" fodvvlgV\"fovlgSLINIiQJRFRQeNFJJfiFeeQKFIIddIIegfhIe\" zlgwkV\"Is{\" khljkwV\"Is{\"WUHremhfwW`zqq~paF`dtxle`~bqqtep~`l*nlyotolap[`~n}zww`s{ifomx.mhhir`vpfozdy`y^\\\\$;}Ax]ba_`qpans`olal`olm~qkmuw|qwv`.??.F_/B332?`{b~s;zatqtnlatzy`~}rmi{Ti}pnSQSQilyf`rpa=l}lxpap}`{z~tatzy`lnnpwp}latzy6ynwbotyr4}lctaf`-opmbrrp}`l{{wtnlatzyPexw`|}nvwx1z2easD7t5.{R~CF8BT?3:>dY64q=<ZSmc9;uOXgE/l@ybQA0Wrf_UGpVohjik !#$%IJKLMN(*,-H]^`)!NNHtq ra 62 `cwlbp`f1whatgzba12 nire r F avj Mrgv12D uvshxxveD evghea avj Mrgv12 6 r G :99Dp122`pasp}ypa`xleAzbns=ztya~`saa{~[PP`1pctnp:zatzy2cpya`okikpm_`}`Ipclwblatyr \\\'ybwwHQ]\\\'J`lnz~`co3x`ROSTU`x__cqhudq_du~kt~sdA__vdacqhudq_du~kt~sdA__rdkdmhtl_du~kt~sdA__ewcqhudq_du~kt~sdA__cqhudq_tmvq~oodcA__vdacqhudq_tmvq~oodcA__rdkdmhtl_tmvq~oodcA__ewcqhudq_tmvq~oodcA__vdacqhudq_rbqhos_etmbA__vdacqhudq_rbqhos_em`az4:A@a}tyr`0?2.A2 A./92 63 ;<A 2E6@A@ 2vn=_a Ito 6;A242? ;<A ;B99 =?6:.?F 82F .BA<6;0?2:2;AM ylxp A2EA ;<A ;B99M clwbp A2EA ;<A ;B99M B;6>B2 IylxpJJ`zwo.wp}a`_a~_`_O92.8_.99`byp~nl{p`qbynatzy nwpl}6yap}clwIJ h Hylatcp nzop] j`pylmwpCp}ape.aa}tm.}}lf`ot~{wlf`rpa/laap}f`( pe{t}p~*`h`o7wd+xxmizivkm`pylmwp_`h             \\\"tnp@p}cp}~\\\" [ H                 h\"b}w\" [ \"~aby[~abyQRO~t{{szypOnzx\"jM h\"b}w\" [ \"~aby[~abyOpvtrlOypa\"jM                 h\"b}w\" [ \"~aby[~abyOqdoypaOypa\"jM h\"b}w\" [ \"~aby[~abyOtopl~t{Onzx\"jM                 h\"b}w\" [ \"~aby[~abyOt{apwOz}r\"jM h\"b}w\" [ \"~aby[~abyO}teapwpnzxO~p\"jM                 h\"b}w\" [ \"~aby[~abyO~nswbyoOop\"jM h\"b}w\" [ \"~aby[~abyOwOrzzrwpOnzx[RZTQS\"jM                 h\"b}w\" [ \"~aby[~abyROwOrzzrwpOnzx[RZTQS\"jM h\"b}w\" [ \"~aby[~abySOwOrzzrwpOnzx[RZTQS\"jM                 h\"b}w\" [ \"~aby[~abyTOwOrzzrwpOnzx[RZTQS\"jM h\"b}w\" [ \"~aby[~abyUOwOrzzrwpOnzx[RZTQS\"j             ]         j`qzya3lxtwf`nsl}0zop.a`k`:tn}z~zqaOE:95AA=OROQ`}__hcabngyl}`__#nwl~~Af{p`2wpxpya`mpal`nsl}.a`$_;ltR`PP`lwp}a`}byatxp`tq}lxp`laalns2cpya`mbqqp}1lal`azbnsxzcp`dpmvta?p|bp~a3twp@f~apx`b}wI#opqlbwa#b~p}olalJ`@pa?p|bp~a5plop}`~pa.aa}tmbap`l{{;lxp`azjan{j`mzzwply`baqNY`dtqt`tapx@tgp`+`saa{~[\\\\\\\\`nstwo}py`p}}z}`n__<?;__3::6_9:?4140=`t~3tytap`~bm~a}`u4(*F4fh[vtn`}trsa`s_9ipirmyq_/*+_8igsvhivF_wipirmyqFgepp9ipirmyq`ty{ba`:~exwTOE:95AA=`\"`ybx6apx~`z{py1lalml~p`}$biie$<$$fiaa}l<$$fmj<$$fmlz<$b|r$<$l}y|sSi|}Qfl}y|sUr}{on}|Yh0bcmVlyg}<$m|r$<$oc}$`atxpzba`|mjjo>czhh~mc~z}>ncz}jr>pd`$_a~`BtyaY.}}lf`:~exwSO@p}cp}E:95AA=OUOQ`wznlwp`frcc(traL}zt|5rcc(traObthfXhg5rcc(traTvlMbja5rcc(traTvl*c5rcc(tra(vau[vc}rtv~vag5rcc(traXa[vrul(grgvLyraxv[vc}rtv~vag5rcc(traUbruQrau}ve5rcc(tra(vgYrxvUbruvu`x~:leAzbns=ztya~`m`atxpGzyp`~}n2wpxpya`upgvurctmgtD__puD__puYrrgpf8gzvDgq;gdZtqyugt`qtwwApea`:~exwSO@p}cp}E:95AA=`fvkcvez~vagr}`:~exwSOE:95AA=OUOQ`sl~s`@pyo`C2?A2E_@5.12?`nzx{wpap`wtyp;bxmp}Mnzwbxy;bxmp}Mqtwp;lxpMwtypMnzwbxyMop~n}t{atzy`n}plap<qqp}`dtas0}popyatlw~`$_FDAB`rpa@zb}np~`opnzopB?60zx{zypya`rwzmlw@az}lrp`aywdd*~wflge:_h~wflge`jXu|pxfnerKynbu3Xu|pxfnerKynbu`nwtnv`{ole_dkkga~>ikvSjei{pekj1p{np2eia>ikv[j~ata~VT>ikv0amqaopSjei{pekjXn{ia`zmupna@az}p;lxp~`mmYSvu`ybxmp}tyr@f~apx`9<D_39<.A`x~1z;zaA}lnv`az9zdp}0l~p`RY{e \\\'.}tlw\\\'`nzyalty~`c%|uccyh|yux%8%jyijOuzyOehy%8%jyijOuzyPh}lyh%8%jyijOuzyUzhucyPh}lyh%8%jyijOuzyMkjecuj}ed%`olal[`a}fh}pab}y __qtwpylxp(jnlansIpJhj`wl~a6yope<q`opctnp6o`$_c7A{`6yqtytaf`~lql}t`})c{li)}mm}ha}l`dtyozd~NRSVS`:@=ztyap}2cpya`A?6.;492_@A?6=`rpa@b{{z}apo2eapy~tzy~`%`bytnzop`ctopzPzrr( nzopn~*\"aspz}l\"ictopzPx{U( nzopn~*\"lcnROUS2QR2\"ictopzPdpmx( nzopn~*\"c{YM cz}mt~\"ictopzPx{U( nzopn~*\"x{UcOSQOYM x{UlOUQOS\"ictopzPx{U( nzopn~*\"x{UcOSQOSUQM x{UlOUQOS\"ictopzPeNxla}z~vl( nzopn~*\"aspz}lM cz}mt~\"`<mupnaO6yupnapo@n}t{aOpclwblap`]+)t+)Pt+)!Hpyotq]NN+`um~nspxp[PP|bpbp_sl~_xp~~lrp`oz;zaA}lnv`e-wt.WVcyWgy_+XS[+O_`ctopz`39<.A`qzya`<cp}}top:txpAf{p`azbnspyo` sz~a `lbotz`wpyras`qsub0ojjkt`:~exwO1<:1znbxpya`x~0}f{az`zwo=}zx{a`}p~{zy~pB?9`:potl@a}plxA}lnv`$_qR`fpl}`l{{wtnlatzy0lnsp`mtyo/bqqp}`P[b~p}_qzya~`lw{sl`qtww@afwp`qtwp;lxp`clwbp`kp~udq~1qdmxcmbq`saa{[\\\\\\\\`n}f{az`xzg?A0=pp}0zyypnatzy`$m_~pab{`ta~rzyylqltw`rpa6apx`@2;1`zytnpnlyotolap`dpmrw`_`ybww`a}ly~lnatzy`0lww@tap`~pwq`zylbaznzx{wpap`dpmvta6yopepo1/`l~fyn`qtwpylxp`bjzcze~ld`dtoas`.ule }p~{zy~p mzof 0?0 qltwb}p N `=<@A`4lxp{lo`N`dpm~az}p`}plod}tap`{l}pya;zop`rlxxl`{wlaqz}x`$m_qpans>bpbp`}pxzcp6apx`n}plap/bqqp}`x~6yopepo1/`xzyas`5645_39<.A`?p|bp~a`rpa.ww?p~{zy~p5plop}~`laa}Cp}ape`nzzvtp ot~lmwpo`H\\\\\\\\\\\\\\\"\\\\bQQQQN\\\\bQQRq\\\\bQQXqN\\\\bQQZq\\\\bQQlo\\\\bQWQQN\\\\bQWQU\\\\bQXQq\\\\bRXmU\\\\bRXmV\\\\bSQQnN\\\\bSQQq\\\\bSQSYN\\\\bSQSq\\\\bSQWQN\\\\bSQWq\\\\bqpqq\\\\bqqqQN\\\\bqqqq]`}q}zecnpcmczcfcns{byha}`1t~{lans2cpya`t~;l;`~pa?p|bp~a5plop}`xzb~pxzcp`{l}~p3}zx@a}tyr`r`.ule }p~{zy~p mzof opn}f{atzy qltwpo N `b~p=}zr}lx`s$`:zb~p`IHQNZ]hRMTjI\\\\OHQNZ]hRMTjJhTji IIHQNZlNq]hRMUj[JhXMXjHQNZlNq]hRMUjiIHQNZlNq]hRMUj[JhRMXj[iIHQNZlNq]hRMUj[JhRMWj[HQNZlNq]hRMUjiIHQNZlNq]hRMUj[JhRMVjI[HQNZlNq]hRMUjJhRMSjiIHQNZlNq]hRMUj[JhRMUjI[HQNZlNq]hRMUjJhRMTjiIHQNZlNq]hRMUj[JhRMTjI[HQNZlNq]hRMUjJhRMUjiIHQNZlNq]hRMUj[JhRMSjI[HQNZlNq]hRMUjJhRMVjiHQNZlNq]hRMUj[II[HQNZlNq]hRMUjJhRMWjJi[II[HQNZlNq]hRMUjJhRMXji[Ji[[IqqqqI[QhRMUjJhQMRj[JhQMRjIISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]J\\\\OJhTMTjISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]JiIHQNZlNq]hRMUj[JhRMUj[IISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]J\\\\OJhTMTjISVHQNV]iISHQNU]iRhQMRjHQNZ]JhQMRjHQNZ]JJ J`A2:=<?.?F`}lyrp:ty`5A:9.ynsz}2wpxpya`~paAtxp`ot~{lans2cpya`dpmvta0zyypnatzy`( @lxp@tap*;zyp`m?C/~vN?C/~v`rpa0zyapea`}p{wlnp`#qYS`qz}x`nsl}~pa`al}rpa`J`cp}~tzy`rpa?lyozxClwbp~`3wzlaTS.}}lf`0lww`qtww?pna`wtyp;bxmp}`~n}ppyF`j`=wpl~p pylmwp nzzvtp ty fzb} m}zd~p} mpqz}p fzb nzyatybpO`Hzmupna .}}lf]`rpaBytqz}x9znlatzy`{wbrty~`~l|e|gbnf<|oxenxm|`sz~aylxp`q}zx0sl}0zop`n}plap2cpya`4pa?p~{zy~p5plop}`wlyrblrp~`q__ix?khH__m+x?kh`b~p ~a}tna`~bm~a}tyr`p}}z}0zop`~n}t{a`pclw`nvxear|rkrur}dlqjwpn`GYE577FOmx3QlEGw?xwCfB57IJ`GYE5u`n}plap=}zr}lx`op~n}t{atzy`xpotl1pctnp~`qtypinzl}~piyzypilyf`4pa;pea?p|61`~kfhzq=-|xe+exr|k VA Rhgmkhe`t`\\\'ybww\\\' t~ yza ly zmupna`npwwbwl}`Tup.9p@~lW`tynwbop`~spyutly`v__xfcesjwfs_fwbmvbuf`n}plap1lal0slyypw`pepn@n}t{a`{}zobna`:~exwSOE:95AA=OWOQ`n`n}plap<mupna@az}p`t *gjH`>>/}zd~p}`=ztyap}2cpya`zjpVobabkqf|ip`~stqa`cp}ape=z~.aa}tm`{l}~p2}}z}`PAX.fA}ezDe4o`___a~___`:~exwSO@p}cp}E:95AA=OTOQ`pylmwpo=wbrty`laa}tmbap cpnS laa}Cp}ape(cl}ftyr cpnS cl}ftyApe0zz}otylap(bytqz}x cpnS bytqz}x<qq~pa(czto xltyIJhcl}ftyApe0zz}otylap*laa}Cp}apeLbytqz}x<qq~pa(rw_=z~tatzy*cpnUIlaa}Cp}apeMQMRJ(j`gxb_ytu~fyvyud`7lcl2enp{atzy`{l}~p}p}}z}`2920A?<;_/?<D@2?_D6;1<D_09<@2`l{{Cp}~tzy`0zbya`tapx`$m_zy;latcp?p~{zy~p`xpaszo`1lapAtxp3z}xla`?pr2e{`}lyozx`}p~{zy~p/zof`lbotzPzrr( nzopn~*\"cz}mt~\"ilbotzPdlc( nzopn~*\"R\"ilbotzPx{pr(ilbotzPeNxUl(lbotzPlln(`=p}qz}xlynp<m~p}cp}2ya}f9t~a`a}fh}pab}y __ot}ylxp(jnlansIpJhj`=`nlwwmlnv`:~exwSOE:95AA=OTOQ\');+1]-[27];break;}[64]||){}}};function ]=null;}else if( typeof((50));[4]);if([99]]((){if( ![186])];[141]);[444]](\"id\",[138])){return;}[679])>1;[222];var .x;if([159]]],[27]){var [81];();}}}function [443],[102]&&( ![2]]||this[(664);[26];if([286]]([121],[194];}var (975));var [293]]()[]);}catch(]];}}}function [319],[121];if([137])!=[131])[192]){return [253]);}catch([81]== typeof [58];}catch([491]]){&1)&&([6]]()));}[29]);[525]]);[56]]&&= !([92]]);=false;if([84]](arguments[0],[191]),\'\');}function [24])){[10]];}catch();}}}else{var .x)*([27]];}return[0,0];}function [29]],\"; \");var [139],(329);[115],(45));[320]],[162]+[162],[90]);(921);=\'cb_\'+([635]]===[76]&&[119]+)){return[true,[213]]){}else if([81]&&([575]]){}else if(=[arguments[1],arguments[2],arguments[3]];(176,1);if([166];[476]]!==(115,=[0,1,:\'\';var ++ ){try{var [74];if()/(;try{if([284])];)if(],0)!==[518]]();[382]))&&[74]:[623]]);[2]];(57);[171]))){[657])]||[384]];this[[27]);var .y==[111]]:\'\',){this[[548]in [76]);}function [128],++ );return ():([672]]=(0));[294])!==){return(new [393]);if((157);var .length-1)return [58]];}catch()||[];}else{return [94]){[546]];[465]]){try{this.[501]],[30],{keyPath:){}var =\'\';do{[133]){}[98]]=[264]))){[329],[489]];var ();}else{for(var [98]],){for(+=1;}if((669);[441]]&& !(].join(\'\');}[69];[124]]());[59]];}catch([481])in [186]);return;}if([148];}catch([43]](this.[545]));}}catch([426]){var ])){return false;}[539]]=[9]);}catch(,false);function [61]];}var [544]](.length-1){var [193];}}[65]]===\'\'||[176]||[584]]:\'\',(841);]!==null&&[52]][[0]|| typeof [65]];[131]););}if( !(=false;}if([29]],[78]);return ]=0;}else if([519]);if([399]in [258];[136],[305]]();<arguments.length;[186];[149]&&[30]<=return[0,0,0,0];[3]+[186],[7],[50]]=-1];if(=true;return [220]]||[170]));[7];&1;var [42],[664]))!==[76]));[344]!==[66],[408]),[418]in +\'\')[(685);[17]){[116]);[122])<<.top)/[3]^[3][[186]){[182],[40]]==0){[672];]]===[0]){return true;}else{try{var [40]);for([74])){return;}}+=17;();;;[100]){return 0;}for(var  delete [91]]){if([59]]=null;[454],[493]];var =true;}else{if((){if( typeof [163]]([70]]);}}return [178]]){}else if(+=31;[559])||[163]];[131]&&[8])]);[163]]=[552]][[530],[25]);if([76]);else if([51]);for(var [200]]();function [519],0);for(var [1]],[4]];if(){return false;}[218]],=null,[158],[631]],[339]]=(123,!==\'\'){[453]][0];[149]|0);this.[631]];= typeof([27];}else{return 0;}}.push(Number(();}var [13];[628]]([72]];}var ;)[208])];;}}return[[514]))!==[425]],[419]+(335);.put({name:);return new (310);]();break;case 1:[366]]);[624]],[20];}else{}-1].x,,0)===[41]));.min([155]);}function [159]){[82])){[291]]([189]]=.length)===]===\"..\"){if([18];[162];}else if(.length)[[200]]();}function || typeof([124]]()));=0; !(333);.length){[242]]:\'\',+=50;[447]|| typeof +=-471;[321];[378])===0;[645]](),[299],[9]],[164])];}function [629]];;){var [646]]].join([74]?[353]]){[1];var [38];var [465]](];}}if((161);)){continue;}[101],[50]);else if((arguments[0]);return [7]]=[302]];[333]];[132];[57];var [2]:true;[671],[149])^[86],[86]);if(.length*[584]]!==[169]]);[100]]);[1]](0);}}function [149]){(973,=1;}}else{[27];}if(+1];}[387]]){try{&1)?(=[[],[],[],[],[]];var -1].y);if([517]],0,[681]];[135];}}function .length-1; ++];while([621]]&&];if( typeof([510]]||[100]^[4];var [162]);if([123]+[123],try{if( !(].length===0){continue;};this[(141,=[0,0,0,0],[108];.length+1),:false;:0))/[235]){[37]&& !([34]);[690]]){[37];}else{<0){debugger;[429]]=[71]](arguments[0],[1]](0);if([127];[100]:[127],[202]]);-=[211])))[100]/[27]||[26])>[240]],+=-246;[68]);else if([81]){}else{[26]),|| ! ![51]));[647]]&&return false;[111]]!===Function;var [161];[95]);return [97]]||[6];(17,[98]];if([611]]){[38])[1];return [356]]([383]];if([494]));){}}}}return[false,null];}function [149]);}catch([2]];try{[37]){+=54;+=23;={};for(var [663]]([194];for(!==null;}function (){try{[100];var [2])+[186]));=parseInt,[86]){if([128]),[687]]();}function [457]],[22]){[597]),\'\');}function ]]+1;}}for([285];var ){}}if(+=43;[97]<[243],[6]]().length;[176])),(958);[58],[248];)){return true;}}catch([1])<[1]);[409]]();if( ![197]];var [486];(673);[1])+[538]]!=.length&&[52]];var [185]){[537])||[162];function [658]](\"\");[636]))){[6]]();var [660]]);[41]){while();}}else{if([418]]()[[337]),[223],[542]]:\'\',());if([27]]);[186]-[474]]!==[74]);}[592],;}if( ![78])[1];if((653);[290]]==<=0){return;}if([236]]){return +=\'\';[127]]&& !]();}catch([26]);}])){return [157];[41]);return;}var .x||[98]^[331]];+1];if((880);[474]in [124]));[100]);if([180]],(772,[680]]))){,1);}}else{.PI-[25]+));}}if((178,0,)return;try{var [541],[582]]();[72]]();}catch([2]||[6]]();if(-=1;}if([431]]||[155]){return ++ )]-.abs,[302]][[465]]&&[153]]){[73]);[276]]=[530]){[40];}();;;;[279]]);[160];var .x)+)>0){var [333]]=[70]];.join(\'\');}else{return\'\';}}function [138]];[112][[62]])||[145]));.x){[1]),(;this.y=[22];}else if(.y>0){.length);}if([210]]||++ ){for(.id;if([385]),(799,[362];[455])];[178]));[533]);[33];else <0){return (791);[579]]);[65]]===\'\')&&,0);var [63]]){+=20;[309]]];for([587],[360]]=){return true;}}}function [2]]===1){())));={\'0.0.0.0\':true,\'127.0.0.1\':true};]===0){if([11]===[2]+[239]],++ ){try{new [79];[2][;){if([36]);(233);[232]];[85]);if([359]]=\"top\";(251);[100];return [483]];+1;[296]]!=[467],(false);if([513]]&&[1]](0);var [376];;}return[[644],\'\',return\"\";=\'on\'+[316]],[88]]!==();}}catch());}[27]);}else if(=Object,=Error,[336]]);}}}}catch([1]](0);this.[214]])||)){return true;}return false;}function ]]];=[];for(;[506]);[620]]([[1];if( ![299]){[1]&&[68]]){var ,true);}if([157]]))){return;}[446])];[571]+.y){return true;}return false;}function [515]&&[157],[30]],[162];}for(var [62]];[513]][[32],[35]],[82]]!=null)[4]);}else{return [350];[428])in ,true);}}}catch([0]){return;}var +1<=\'w{\"W%$b\\\'MvxF.3,~DcIy]s6g}*:C? [<@kY-ftN^;HLBV=0Xa1J#Z)GE8&i>\\\\m4d`!lQqOAU9K_T|RPhp+7S(orej2uz5n/\';for()===false&&[661],.length>0||?0:1))+[209]in &&new [361]]||[352]))[[110],[677]];===1){<<1^[603]],1,[485]]);[114],[250]]||[87]);[65]];if(();arguments[0]=this.]^[240]]){var [74]][=Array,[649]]&&[509]],[79]);return =Array;++ ;}[335],[460]),=(new [356]]&&([289]);[529]]==[];}}function [586]];[586]]==0^[0]);}}function )|0;}}function [347]&&[222]);if([434],[100]};if([19]];>1){for(var [67];var [93]){]>(767);<<1)|(]&++ ;}}var [19]],]-[101]);}function ]/]*[500]]:\'\',)<[585]],[314]]){[133])+;this.x=))).[100];for((15,){this.x=){return(([331]]||===0){if([85]){if( !.pop();var [2]=(+=21;)>=0){return true;}}return false;}function [4]=([626]);}}else{}}catch(];}}}}function [338]],arguments[2]);this.[624]];this[[15]]){if([0]===-1]===[441]]([552]]){var [113]))==0;[444]](\'id\',[143])|([2]),([68])+[151]].length>=1){[413])>1;(186);++ )[27]);}function [249]];this.y=[16]);if( !return[(([154],-=1;}}return[[3]++ ;}else if([68]){[150];[651]);if([25];var =null;if([282]]([95]]();}else if()){return [47]:[129]];this.[668]]();var [444]]((\'qUTTTT`ZYYWY`VTT`UV(`TR(`Y[`V)`XT)ZT`VZVUXX`UTVX`UTW`XY`ThW6`YU`UUTT`Th[[WY)XTT`Th(6U22343`[)`VY)VTTT`(T`QTRVZ`QTR)`QUTT`ThUTUTUTU`Tht`WWYYXXWV`RVZ`V`ThsT`YV`)[`Th666666`ThUTWVYX[Z`UVZ`X)`UZ[[[VUZ`U(`UTT`ThZ[XYVWTU`Th56`X`VT`ThY1(V[)))`ThT6666666`UX`ThW666`W)`Th6666`ZYYWZ`(U)V`U[`R)`UY`W[`WWW[YZY)(X`YVXV((`Th(T`W(`)T`VTX(`R(UWVZXYXW`X(`Th66TT`ThZ54)521U`YT`UTTTTT`Th5T`ThT[tttttt`U)`ThWt`ThV4`ThUTTTU`ThtT`WZ`Th66`RX`UZ`Q)T`QX`V(`)W`YW`VYZ`VZ(XWYXYZ`RV`UT`QU(T`YTTTT`))`TRTU`XU`VV`Th3W4V5U6T`Thts`ThqT`WV`WT`QTRTU`VYY`ThWrWt`W`UTTT`)`VTTT`)V`Z(`ThVZ)sqW`Thtq`UV[`XZ`(W((ZT(`TRU`UVV`UW`ThW3`TRWY`WY`UTX(Y[Z`YTTT`Th[66`UT[W[XU(VX`Z[UT((ZX`ThT6`[W)Z`UYTT`)U`ThU66666`XT)Z`WZT`Th31ZV3U4Z`UZW(X`XT`UWUT[V`VU`UV`UU`Th542((WVT`ThTTUttttt`ZX`UTTRT`WTTTT`WW`WU`VX`WX`VY`ThX2`(V`VUX[X(WZX(`(`ZW`ThUt`ZY`Th563412()`QTRV`TRY`WV[Z(`[`U(T`TRZ`Th65`VTW`QU`YWZ([T)UV`Th66666666`VZ`UWXVU[[V(`VW`ThY1`Thtttttttt`ThUTTTTTTTT`Th[t`WTTTTT`Th)5W[[)2)`Y(`Thtt`VTTTT`YUV`Y`UVT`VTU`ThUTU`Th)(214365`()`(ZXTTTTT`Y)`Z`Tht(`YXXT`XW`UTV`V[`(Z`V(W`ThUTUTUTT`UTTU\');var [594]]([41])&&(362,([370]);}catch([513]];if(++ ]=(([646]]);(){ ++[43];[187]){[166]]);[42]]();[274]){return true;}}function [237]);[617])||[];}}return[];}function ||( ![36]](this,arguments);}}function [357]]();()+[76])|([88];[2]===[82]; ++[36]](this,arguments);return;}var [5]](\'\\\\\',0);var -1)+[393])!=(96);+1];var ,1);return;}}}}function [151]];return(=this;this.[507])){[101]];}catch([3].length;[183];.x);if(0<==\'\';}[61]];}catch([159]]);[95]<=[134])|(([201]]);[216]))[[27]:[186];}return [512]];[551],);}if( !={};for([532])!==;}}else{());}function [287]));[27]^,0)===\" \"){[452]];for(var [30])){var =\'\';[178];}}catch([23]^(217);=1;}}++ ){try{[367]);[619]](new [653];[588]);[78],0);for(++ ]));}return [267]);(226,];}else{return [322]),(80);=true;}var ,1)===++ ]^=);}this.;}}}return\'\';}[330]]];[368]]){[372],[87]));[146])))[61]]===[100]);}return;});}if( typeof [86]||[164]]*[0])continue;===\'\'){[600])&&[76]),[519]+[63]]){var [634]];var [469]]={});var [162]];}function ];}return[0,||1,[525]]||+1);}function ||(new [328]]){[6]));var ))[0];if([353]]()[[107]];[11]];if(++ )];}else if([227]];[78]);if(.apply(null,);}}}}+=6;[15];[5]](\'=a\"S%$Y\\\'tU9q.C,~NQy-^|6rXh:H?M[<@fK;0W+VI2RiJ(FencmskgL#OBT>\\\\4Gj`P&1_wD7oZxAb]}updv5Ez) *3{!l8/\',\'\');+=66;(){function [96])];for(var [672]);===\'\'){var [36]));[178]);}function ){return false;}else if([613];[18]){return [64]){[526])))return 1;};}}}catch([186];var =this;try{if([75],[11];.pow,;}}var [41])])|0;[535]))in ()));for(var [175]]/[433]);){return null;}}[175]]=[263]in )):\"\");[580]]=])){return true;}}return false;}function [40];var [64]);[71]^(910,1,+=0;(51);[167]));if([457]](0,[95]);if([464]]=[74])];[383]][[136]);[149],[76]);var [149]/[149]);}}catch([30]);[16];[6]]()));if(-1]===\"..\"){[40]){if( !+=-247;[412])===0){var (147,?0:1;[144]);[144]]!==[583]];}catch([134]);[641]][[402])]){[383]]=([(,\'\'];return[[72]){-1),++ ;}return null;}function -1)*[156];}catch(=true;}}}if([78]);if( !()==1){if(-1);];if( ![469]]={};[140]),,value:.length>0){if([1]=([79]));}(176,1);}else if([573]];)return 1;}[504];[61]].length>0&&(31);[304]);[24]))){return null;}var ];}catch([117]))();(229,0)+1)&[520]){return +=12;[692];}else{);}}else{if( ![411]]!=(arguments[1]);arguments[1]=[44]);}}catch(return true;.y)*([153],[558]]=.length>0){.day:\'\'];[612]],[100]);[58]].length?[76]-[29]].length>1||+=19;[91]);}else if(,false);[445]]);[318]))){[140])&&( !=0;for([640]);var [9])){));if([18]],+=58;+=27;[281]));for([152]));if( typeof [63]]){return [334])))[24]&& !(===\'\'&&.length>0)(971)+)!=.length>0;(659);.now){return ]){[503]],[95],[177];}else{();}}function [95]>)return false;var [154]]);}(131,[231]]!=[1];}var [34]]));if((851);if([458]),]),[648][[0];for(var [158]]([5]);}function [50]]();}catch([480],[10]];if([20],0,0,===\'get\'||[323]],[36]);else if([52]]===false;}var [437]);+=-8;[62]]);[46]);[101])[-1,[106])&&=\'\';function [202]],[32]];try{var [51];);}}}}catch(]];}}}for(]=\'\';}else if((805);[46]){.sqrt,[51])[0];var +=471;[27]);if( ![1]===[335]);]^=(===0||([55],[317]])||<92){[599]]([185]]||[40]]);[638]],[40])];.y));}function [394],\'\');[369]));[11]].now&&(;}else{var [550]),[0]),([3])];}function [375]],[0]!==0){[174]===try{new =true;}}if([63]]=[149]]([108]))!==[138])));}return this;}function [59];if([114]),[165]);[179]){if([34]]);[187]];if( ![149]]^[553]]||[52]);}else if(= !this[[241]];if( !];return[[23]]);=\"\";}}function [57])));[379]];[145]]([0]=[ ++[395]+( ++[25]);return [178]){return [22]:)>=0&&[610]),[377]],.run([615]];if([0]){return[];}var .top[=[0,[58]));}function [4]+){switch();}}else{switch();}while([554]]=[371]]=[178]){return[[134]]);[138]);}return [1],1));if([62]]==]=\'\';}}]);}else{[312];[27]+1]=());return [175];}return [187]];[156]){return true;}return [242]]!==[51]);[432]],[168]&&[400],[3]&&[607],,0);for(var [118];[373],)|( ~){return;}var )){return false;}var [557]]=[152]<=[49])&&[142]));[269]];[451];,\'\\n\');[608]];[65]]=])<<([326])){[1]++ ;}else if((arguments[[3]],[632]];var .y);break;case [3]];[27];while([412]+,1);}function >0&&;}}}function [632]];[154]]-]));}}function [24]){return false;}return true;}function [129]]);[329]||+=246;.length;){[500]]!==[670]][.length);if(]||1){[56]){(161))[7]],[116],=false;}}function [297]],[251])+[19];[79]);}else{[689];[149]),(){}if( ![7]]);switch([126]))||= ! !=Math,[25]);var [471],){}}return false;}function [415];[1]^())[(){try{if( typeof [112])||(=String;var [19]]+[341]]+(229,0);[541]);[199]]!==++ )+[143]]]^[560]+new =\"\",-1]=[358]]([586]]){[31]];}function [691]))();return ![230]+(859,+1);return ]))()).[148]),()),[95]);[60]];[40])];if([280]),[62])>>[125];else if([27])){return\"\";}}return [351],[189]],1,1);[173]),.push([[310]]){[134]][[399]]!==[188];}}function [21],0,[61]);[234]+;}}}return;}}}try{[424]]=[484]]=[417]]=[669]],[85],[651]);while([392])||[302]]&&[669]]=[141]];(96);var [614])?[642]),[641]]);[25]);if(([414]](=\'\'+[192]]([76])+1,,1);}else{[48]];var :return true;default:return false;}}function (24);.length<=1){return ]);if([1]:null;[686]];var [38])){[82]][[0][0]&& ![142]][[70]]);}return new [499]);[58]].x=1,[555]);}catch([350]],={};var [0])+[27]);return [138]){return [109]===){}}}.join(\' \'));if([643]);}catch([416]]([324],[[3]);[145]);}else [76]));return [534];[45],-1){var .y||[39],0);if()];}function -1];for(.charCodeAt([307]]!=[15]]=null;[204]&&[567]]=false;={};for(;[546]]||=Date,[19]){[650]),[450]]=[488]]([468]));[178])|([190]]&&[502]]||](arguments[0],arguments[1],arguments[2]);break;default:}if(();}}else if( ![633]]([189]===]);}return [49];()&&([58]][[82]?[82]:={};;[675];[58]];var [44]]^[602]);[11]].now();}else{return =[[],[],[],[],[]];[4]++ ;}else{[563]]&&)?0:[632]](={});[1]?\"\":});}[52]];if( ![66]);}else{return [96])|([203])!==[95]];var [77],[459]]+>0)[178]){.push(this..length-1];var [574];}}return\'\';}function [252]+(\"any\"!==[78]);[228]+-52;}else if(.length>1){var [40]]=function [61]){[310]];for([178]);=1;}}if(ǽǼǾǿǓǔȀȁ\x00\x000Đɏĳɘ)ʿN˃¿ɁÅɠĹʊȡĝȧñ̂s˔*ȷÌːʏä̕åɋ£ºę̑Ķȯɒ˜}ʰ¯˅\x00㺯ଃıǚ\x00\"\"ծǧÎǧ\nǚЈǬǚ\x00ǧA\"Õ\"࡙ǬǬς³³9ùלǬ\"дǬ\"ॲǠòǬRîǬǠҥǧढ़ńŅ¦ńŕŅধǚĨ\x00\"	ńvŅͤ2\x00\"	ǚ²2\x00\"	Ņ%;ńŅń\x00\"ʐŅ\x00\"Żń\x00\"ӅŅ\x00\"͐ń\x00\"ਸ਼Ņ\x00\"٥ń\x00\"ڜń\x00\"ٗń5,ńպŅ\x00\"śģ#Ņ\x00\"ٞŅ\x00\"ś\"·ǚŅ\x00\"ࣹŅ\x00\"শŅ\x00\"९Ĭùĕń\x00\"ˠ`Ņ\x00\"˟Ņ\x00\"ࠧń5\'ǚń\x00\"Ʌń\x00\"ٚǧŅ\x00\"Ց\"εŅ\x00\"śģ#Ņ\x00\"ߢǧêǧ\x00\"i\"שùâǧ\x00\"i\"ࢾùփ\x00\"ࡄǬࡎĂ੥\"Шń\x00\"˟\"صǬ\x00\"\"юń\x00\"ƨǬʙ\x00\"ःǬ\x00\"ƙ\"նǬ\x00\"્Ǭ\x00\"ۚń\x00\"ҦǬ\x00\"੍\"Ѿń\x00\"ƨǬઐń\x00\"ˠŅ\x00\"࣊ǠǓń\x00\"ɅŅ\x00\"׻ǠǓń\x00\"ƨŅ\x00\"ُǠĄiǚ\x00\"ټ\x00\"ਉǚ\rǧ2\x00\"	ǚ\'ǧ\"Սǧ\"ࠠǧ\"ॶǚ\"ૼĚE¦M½ǶNēÄ\x00\"॥ǔ̖±_ࠀ¥\rǚ¥\x00\"ڲǚWǚ\x00\"੿Æǚ\x00\"થǧٿǬĬùЊǧǬXķǚ\x00\"ŀǠǚ\x00\"Ƣǫࣗ\x00\"ɶǡŉ\x00\"ݔ\rƙP\x00\"क़ǟ\x00\"ृ\"ȫǤ,\x00\"ੴK\x00\"ࡓ\x00\"ࡔǣł\x00\"ࠚƤ\x00\"Ȋ\")\"܁\x00\"Ȋ\")\"߈ǪǠNgǙĭॻǙf]\'Ǚ\'rW\x00\"ƧǫNࡂ\'۾Æ\x00\"ƧǡE1ſ¥ࣘǟƮƯ~Ʈ\"ώƯĽƯ\x00\"ȷ\"˵ƙ\"ùǅǙĭƮƙƮǙf,ƯĽƯ\x00\"ɢ\"ǿƯ\x00\"˚Ư\x00\"ʂǙ\'Ư\x00\"ڢ\x00\"ƧǤE\"҅ǣƮƯƯĽƯ\x00\"ȷ\"˵ƙ\"ùǅǙĭƮƙƮǙf,ƯĽƯ\x00\"ɢ\"ǿƯ\x00\"˚Ư\x00\"ʂǙ\'Ư\x00\"રKƮƯ%ǪNǔlùĳƤ\x00\"ࢴMń\rǚń\x00\"pùॆǧǬǠÓǚǠǚƞǬ\nǠǧ|ǚ\x00ǬÞǚ\x00Ǭǧ(ùૡùૢǧeǚ®ńŅņ\rǚǧǧń\x00ņૈǚņƗǚ(ŅȰǚń\x00ǚń\x00ǚԏń\x00ŅǧǚǧƕǬǬ\nùÅǬǚǬƔǠǠ\nùoǠǚĂǚܔùҷǚζǚ̹ǧ\x00Ǭǚeǧ˝H\"ȣČńŅņŇ\rǚí\x00\"źŅņØùĴŇŇƚǚ2ŅSùąČńŅǚŇ¤ņ2ǚSùąČńǚņŇġ®ńŅņ%`ńŅņ\rǚ<\"ןńǚǧĨ\x00\"	ńǚ੎ǧùƊǔÐù^\"ʺņрǬĻǧLøԁǠǔÐù^\"ʺņіǫǬ\x00ǬˌǬǬ\x00\"pùܡǫ­ǬsǔÐùŏ\"ࠞņűĬùɹǡǬȧǟĒǬżǡǎǤņo\x00\"޶ǟǤǔÐù\"؅ņűĬùɹǣǬ\x00\"cǡ੹ėǣȪņ7ńŌĘŅùůǔÐùÔ\"૿ņűĬù઄ń\\fńشĜ੻~ńࡱgƩ?ńńZZń\"Ő\"͍ǚ\x00\"	ń\"ਂD\x00\"	ńvǚऊþńŅ\rǚǧ\"࡞Ǭ:\"مǠ:\"߿\"ࡁńوǚǚ\nǠǚǝŅ\x00Ǡ\x00ǚǕǧń\x00Ǡ\x00ǚċŅ\x00Ǡ\x00ǚʶŅ\x00Ǡ\x00ǚęń\x00Ǡ\x00ǚ৉ǚǚ\nǬǚǝŅ\x00Ǭ\x00ǚǕǧń\x00Ǭ\x00ǚċŅ\x00Ǭ\x00ǚʶŅ\x00Ǭ\x00ǚęń\x00Ǭ\x00ǚצhńŅņ~ń\"ÁńßńDǚŅņRǚTńƦǙń\rǚÑછǧÙń˅ǚՉǬǬ\nǧǬùۀǧ\x00Ǭ੆1ń\rƙવƤÄƙ0ƙৄǚƮƯưƱƲƤǡǙ4ƙńԨń\x00\"ùƢƍń\x00\"ɧ\"Čń\x00\"®ƞeǙǧƮ6ƙńфƞƮƙ\x00\"řń\x00\"ȕƤ;ƙńƤŠƙ\x00\"ڛĬùĕƙ\x00\"č\"	ƙƮaƙ\x00\"č\"ýƮūƢƮƯƙ\x00\"řń\x00\"ğƙ\x00\"įù्Ƥ;ƙńƤ৩ƙ\x00\"ࢂĬùĕƙ\x00\"ŗ\"	ƙƮƯaƙ\x00\"ŗ\"ýƮƯɊƙńcƙńWƙ\x00\"ŀǚƙ\x00\"Ƣǧƙ\x00\"пƙ\x00\"֓ǚƙ\x00\"઒ƙ\x00\"ਮǧń\x00\"ùƢƍń\x00\"ɧ\"Čń\x00\"®ƞeƙÙń\rǚń­ǧǬ¢ǚड़Ǡń֔ǫǡPǡ\nǚtǡǧńૉǡ\'ǧ͙ǧৗǧ Ǡ,ǧϔǧǧ଀ǧϮǧͻǧ Ǡ,ǧԽǧǧ͛Ǭ\x00ǫǧeÑकǬ% ń6ėÝń4Ŀù^ׂjńŅņŇ\rǚí\x00\"źŅņØùĴŇŇƚǚ2ŅSù}jńŅǚŇ¤ņ2ǚSù}jńǚņŇġ0ńŅņ%ĥńŅ\rǚŅǛǧǧ\nǚǧ|Ņ\x00ǧńߩħƙ¢ù˿ǚǧ°\x00\"ࢼǬ°\x00\"	\"ڰǠǠ\nù͞ǠǚǠ,ǚIǬ#ǚIǧƙ\x00Ǡù۟ǚ(ùڧǚ9ùәƙ\x00ǠǚȒǚùתƙ\x00Ǡùઃǚ(ùŜǚ9ù̙ƙ\x00ǠǚȒǚùňƙ\x00Ǡùߞƙ\x00ǠǚKãǫGǫEƙ\\ń\rǚZń\"ৎǧ\x00\"	ǚ\"܈ǧùԲǬ\x00\"	ǚ\"ટǬùâǬ\nǧƵǧ\nǚط2\x00\"	D\x00\"	ǚǧθöń\rǚńRėǚ%7ńŅ\rǚ\"ҵǧ¢ŅĥŅǧոŅe\x00ńÚùߋńí\x00ǚńHùਖǧÛĪń6Y<Y\x00\"	ńƀğ\x00\"	ń,\"̗\"ݪbǚVùвǚ&&\x00\"ޙ&\x00\"ʔǚع!\"એǚ\"ࢲċńŅ6ńLń\rǚń\x00\"ܶǚù΅ǧǚࡹǬǠǚƞǬ\nǠǚ\x00ǬࣱǧÀǫǚ°ùसǡŀMǚ\x00\"cǫऎǡ(oǡ(ù̓oùъoǡŉǚǚ\x00\"pǫDǟ\x00\"৫\"ΞǤgĵǡHǟg\"ԙǣǚ­Ǫ਌ÓAG$ǬÎǬ\nǣǚ\x00ǬǤҫǚ\x00Ǭ՚ǪQĿùॅǤRǚÍǚ\x00\"\"এǧǚ\x00ǚˌǧ\x00\"Ɠ\"ǧ%E\x00\"ੵńńģń̚ń\"ɸń\x00\"ӂńںńĪńäǚòńʴǚ«m«ûmıŚîńǚӵFǶ·ùŝ·ùŝ·ùŝ·ù۰­ń\rǚńƍǚ\"ÁǚßǚDǧÓ>îÓ>»ÊǬǠǚmǫÎǫ\nǠǬǧþǬǚ\x00ǫʉùΩǬßń\rǚǧǬńCńǬńǚ¢ǬǬܻù̇ǧ\nǬǚ\x00ǧ°\x00\"	ńǧzǚ\x00ǧ°\x00\"	ńǧzǚ\x00ǧ°\x00\"	ńǧzǚ\x00ǧ°\x00\"	ńǧьǬ ù̇ǧ\nǬ&ǚ\x00ǧ°\x00\"	ńǧدǚĊńŅŅģ#Ņ&Ĵ\"ńǷń\rǚńmƙǧǬUǠǫgƤ¢Ǡĥƙ\nǚǧǫƤ\x00ǬD\x00\"	ńƙǧƙ ǧKčǡGǫǙÃ\x00°\x00\"	ńƙΔǙߟÃ\x00°\x00\"	ńƙɺùܢÃ\x00°\x00\"	ńƙɺùɳÃ\x00°\x00\"	ńƙऒǙ\nùસǙ¶Ǚ9ù׫Ǚ=ùɳÃ\x00°\x00\"	ńƙ޺ùઌǡƮ\rǙƮÚùȢǟƮ2ǙǙǙǙ˛ÓÄǟ ǙrƤ\x00ǟĢ-ǚùÔǧ\x00\"`\"͏Ǭǧ\x00\"\"ખǧ\x00\"ě\"ਁǚƁ\"իǬʏǚ(ùӱǚ,\x00\"গùΘǔ7\"ނ\"Ѫ6ùܙļǚĜշǧǧٱǧǚ~਺ǧ૝ǚg\"pùحǸǚ\x00\"\"ϟǧǚ\x00ǚૻǬǧ\x00\"ਲǧ\x00\"Ɠ\"ǧRǬŀE\x00\"Â\"՜H\"љùࡧQǚčùͿÓ¸RǚøǚčùࢋÓRǚ%òń\rǚ:\"զ\"ਥ\"࣓\"ࣜǧǧ\nǚǧ|ńǚ\x00ǧष\nǚčùЛÓÓRǚ%ń\rǚńèùǧǬǠń­ǫ¢ǚĥǧ\nǠǫ\x00Ǭࢩń\x00ǧōùࢉń\x00ǧōùࢷń\x00ǧōùֆń\x00ǧࣩǫ¸ǚ\x00\"ऑǚǚঠ\x00\"૨MÇ\\¾ń̄ń8ùĲùˈń8ùƋùˈń8ùĬùɾńùӞ»ǚƕǧǧ\nùࢺǧ\rǬǧƔǠǠ\nùԗǠʵǬùϸǬ1ǬиùшǬԵǚ\x00ǧǬùਞǚ%ń\rǚھń²\"؏ńڇ\"i\"૴ùԥǚ±ƙƤƞùՀǚùʲ]ƙď]\x00\"৖·ǚƤƙǚ,Ƥ(ƞ]\x00\"Ǚ·ǚa]\x00\"ǙƤKāǧYāǬǧࢫƙ,ƙSƤ±ŚƙǬǙ\x00\"ϼǙĲ#ĺ\x00\"	Ǚ\"ॏǟďǙ\x00\"cùҺǟǟ<ǟж·ƞ\x00\"ø\"ੀǟYǟ·ƞǟ\\ąńŅ\rǚńDǧŅRǧ`ǚƦ_ǚĬù৮î³ù֢ǚƙ:\"؀\"ֻ\"঵\"ԧ\"੡\"ʋ\"ǌ\"؂\"ਪ\"ӯ\"͹\"ࣶ\"࠱\"ӡ\x00\"৪ǧǧƮƯǙǙ\nƙÓǙĽƮƙ\x00Ǚޞ1ſƮޯƯВƮƯۍƮ>5ńࡵùٴńń9ù੧ùਯńń9ù਍©ńŦùҼńń9ù঳~ǚ\x00\"ɭǧæǚ\x00\"ʷ\"ݒ\x00\"	ǚ\x00\"ࡥ\"࡚ǚ\x00\"ɼǚ\x00\"઴zǧ%4ńŅņŇń{Ňxń5ĭŇݸŇКń5fńŇĹùɥŇ܄þńŅ\'ńƇŅ\x00\"ࠉ\"ČŅ\x00\"ȹǚĠņ6W\x00\"ŅŅŇȪŇbùਃŅ\x00\"çŇyŇãńŇšŇࠩŅ\x00\"çŇyŇãń>ǚjń\x00\"ˣń\x00\"ɀ\"	ńūǲǚ¢ùʆǧ¢ùʆǬǠǠǠ\nùÅǠǚ\x00ǠÑǧ\x00ǠǠäƙ࠯ǠùˋǠ\nùܩǠ࢏ǬǠ2ùণǚ\x00ǠÚ\x00\"	ƙǬ4ǧ\x00Ǡ°\x00\"	ƙǬƙǚúǫƤŁ\x00\"ङĄǡGǫEƙǡEƤ\\ǨԂǚǚ9ùɻǚÃ\x00ǚùࠣǚǚ\neǚ_ǧ°\x00\"	e\x00ǚтó\x00ǧǚfùTĸ\x00ǧǚ/ùJ=\x00ǧŞǚùƝùJ\x00ǧǚ/ùTă\x00ǧŞǚùĺùٲÃ\x00ǧǚ\\İǚčù࡮ÓÕĊùܹǚŋù݌ǚ%ĭńŅ\rƙƤĘǚńGƞƮƯ\rǙĎǟģǠLİǙǙ\x00\"LƯƮŅҤǠDǥǔȝùԘǙDǡ+ǥƤ7­ǡ4ùષ\x00\"	ǟ\"ɉǡ%ƢƮƮ\"\rǙZZƮ\"Ő\"ޕǙ\x00\"ièਅǙ\x00\"iࡼǧ੦ń\"Áńޚƙń\'ƢƙѝēńċńƙÆǙԾƙŽƙ(ùœǔlùّđƙsǔlùщńƙƙ-ǟlƙDǠǟ<\"ĔǟؗǥļpÈƙ;ǠҜǡƙuǡЅĬùĕǡ\"ù߂ń \"ĔƞǡǥŅ\'ǟ२³³9ù܎ń«ń٧Ĭùঐǟ«ǟQǟ\"¬ǟƤù˻ń ǟǬƮĿù^ގƤŽvƙѼƮЁƮ\"٤Ʈ\"۩Ʈ\"̿ƮડƮ,ƮŌķƮƮƤùНƮơEƤݟǠƮƯʵƮসƮ\"ৃơ૟װĬùਰƙƙ\nùΕBƙŸƙuŘ7ڟƯģ#ƯŽƯࣿƯ\"̩Ư\"՛7ٻƯࣳǧ͸kǚfkń\'kǬ/kǠokÕ7ϋðńŅņŇ\rǚí\x00\"źŅņØùĴŇŇƚǚ2ŅSùąðńŅǚŇ¤ņ2ǚSùąðńǚņŇġńŅņ%ń\rǚ\x00\"Â\"İ\x00\"Â\"кùʅńń\x00\"L¾ŀयǧǧ\nńǧń\x00ǧŲǚKĿù^ń\x00ǧǚrńõńĝǚńRǚĥǚçĞǧ֦ZńŅ\rǚĺ\x00\"	ńŅ\'ǚùȜń৹D\x00\"	ńvǚ4D\x00\"	ńǚҎ@ń~ń\"ÁńßńDǚÓ&îÓ&Êǧࡕù؆ǬńǛǠǠ\nǬĖǧ1ǧ8ù܆ǚþǧń\x00ǠʉùΪǧùДjĞÙĞıÜǫߣǚ:࠵:±ǚ\rǧǚ\x00\"৸ǧਬǬǧ\x00\"ކǠŁ\x00\"	Ǭ਴ǬǠ˷ǬচǠছǬǠ˷ĺ\x00\"	Ǭ\"ϬùâRǬ\"ગǬ\"ࢰǫNĞ੔Cń68ÈńðńŅ\rǚÿƙǚyƤǚࠗƙમƙЋ²ŅƙƤäƞôńƙƤöǧƮƯ\rǙí\x00\"ƮèùણǟǠ.ǥù̠Ʈɟùँǡǚ,ƯǠǡFہǛƮ\x00\"ɣǚƮũǥǟƮǟ\nǚۅǛ\x00ǟǥǛǛ՗ǟǟ\nǙĖǚǛ\x00\"cǟfù˃ǟəù¨ǚǡ<ǚǡƀǚǡĔƞǚvƙǠǠ\x00\"LǡÀǠ%ǬƮƯ\rǙǟǠǥǡ.ǚǛƮƮ\'ƯǛƮ\x00\"pùāƮƮ\x00\"cù˻ǙƮèùͺǟǟ\nǙĖǥƮ\x00\"cǟfù˃ǟəù¨ǠĔƞǥżƤǡǡ\x00\"LǛ<ǠǛƀǠǛǥKǡÀǡǚǡ\x00ǡҕǡ\x00\"pǡ°ǚäǠǠTǧǠ`ǬrǠǢƙģĎǡƤďčùऍƞV˸Ð\"ŪǟÐ\"őǤÐ\"ƒǣÐ\x00\"ɗ\"ݰǪÐ\x00\"ɗ\"ָǢÐ\"ƌǭÐ\"˔ǙöƢƮ\rǁƮǄǂǇ.Ǚ½ǟǙǠǙwǥǙǡǙºǚǙǛǙ\nǘǙǜǙYǣǙ4ǞǙzǢǙÔǝǙIǤrǙGǠժǂûǁIǄ%ǥEǂIǄǡǧɌwīǧǇ\x00Ǆ$Ǆ1ǄûǁeǧǚǧɌwīǂ1ǂˑǁƃǁǧǇ\x00ǂŭǧǛǈՙ΂ºǇ\x00ǂǈǂ1ǂûǁǘӃǂ2ǄǁƃǁǜNǄǂʭǣEǄǞEǂǢǈŦǈûǁǝǈŦǈˑǁƃǁǤǈ6Ǉ\x00ǈĢơƮƯưǙǙ\nƯtǙƮ\x00Ǚư\\ƨƮƯƮIģ#ƯIģडƮѷƯɪƮةƯࠟƫƮƯ6íËƮƯ׽ƮƯÍƮƯॾƮƯঢ়ƝƮƯ6í¢ƮƯ߆í¢ƮƯҮŷƮƯ\rǙ1Ʈ ƯŊƮ£ƯľíËƮ ƮÍƮ£ƮʮíËƯ ƯÍƯ£Ưɑí¢ǙȮǙďǙí\x00\"ȑǙ%ƎƮƯ\rǙ1Ʈ ƯŊƮ£ƯľíËƮ ƮÍƮ£ƮʮíËƯ ƯÍƯ£Ưɑí¢ǙȮǙďǙäǟí\x00\"ȑǙ\'Ʈ֪ǟùʧíޭǟeǟƇƮ\rǙ.ǟŹԅǠƮ঱ǥPǥ\nƮǥ_ǡƮ\x00ǥĪǚŹǡǠúǡǠÌǙƎǚǟ?ǠǡeǙƗǙ½ǁ.ǄǂǇǃ.ǆ.ǅ0Ǚ(ǟǙǠǙÀǥǙ[ǡǙyǚǙ­ǛǙ«ǘǙ¡ǜǙAǣǙ·ǞrǙGǟǈ\rǧǄǇǂǆ0ǅ0ǁ0ǃƕǯǈYǯ!ǈ4ǯǈzǯŸǯ!ǈYīǁ\x00ǄƝǈIǯ4ǧǄZǅǈIǯ঑ƨǈIǯ4ǧۻǃ\x00ǇƫǈIǯ4ǧ\'ǃ\x00Ǉʚùůǂ ǃ\x00Ǉ$Ǉ͑ǧǈIǯǆǧ>ǠǶǂǇɚǥǈ\rǧùधǯ.ǙơǯǧਨǦǦ\nǇtǦ\rǟǃ\x00ǦBǟ9ù}ǯ̐ǟ9ùǭǯਹǟ9ùɖǯԯǟ9ùतǯ࢖ǟ9ù૑ǯ૪ǯԋǦǦ\nǧtǦǯ\x00ǦডǙͳǙǡǈ\rǧùકǯǙǦ½ǟǨǄ\nǧ6ǯÀǞÎǞ\nǄૄǛ.ǭǶǜǫǮ0ǙǦ૎Ǟ\nǄɬǞǶǁ\x00ǞȨǜǁ\x00ǞBǜ՟ǜ(ùůǞɈǶȐǞ ù׈ǫǶ2ǜ,ĥǫǛʸǦ\x00ǫʛǙòǦ\x00ǫˇǛ\x00ǭǫǭǂǭ\nùֈǟǦݜǢǢ\nǭƗǢ_ǤǛ\x00ǢׇǛ\x00ǢBĥǤǮʸǦ\x00ǤʛǟòǦ\x00ǤˇǮ\x00ǢǤȀǴhǦǦ\x00ǴࡨǮnùۘǟଇǙ(ǟǨǟYǨǙKǯíßǨǯǯǚǈ\rǧñǯǙǦǟǨɡǞǆnùވǦ\nǅٜǛࠔǦ\nǅ´Ǧǯǅ\x00Ǧ$Ǚǅ\x00ǦޤƨǯǙsǦɈǯ̪Ǚߏǟ1ǯǙľǯǙࣈǟǟ\nùՊǟùմùݯǟǟܲǟùЕǟ\nùݩǟùߒǟ(ùݙǟùӽǯǙߓǟùܱǟùӦǛǟ¤ǛnùǭǛϊǛ\x00\"ࢡǭÈǶǶ\nǛǶǭ Ǜ\x00ǶԖǜǭHǛ­ǫǮÈǶǶ\nǛǶǮí¢Ǜ\x00Ƕࡦǜǫ ǮĠǞȐǞǫHǛӲǞ1ǫHǛũǞØùܑǞ(ùμǧ˫ǨॠǨŧǧǞइùआǛǈ\rǧùƯǯñǙñǦñǟ֏ǆnǧ\rǨēǞǛÈǭPǭ\nǆ´ǭ_Ƕǆ\x00ǭĪǜǆ\x00ǭࣀǫǮǫǶӐǜזǯ!ǫǨƏǞ(ù}ǙǯKǞǯǫYǞôǮǶՠǜ̸Ǧ!ǮǨƏǛ(ù}ǟǦKǛǦǮYǛىǞ(ùʫǙ!ǯǙǯǨ޷Ǜ(ùʫǟ!ǦǟǦǨ࢕Ǩǆ°ù׾ǘǧ.ǯǙǆŌùਔǯǧʖǦǎǏǏ2ǎ(ù֯ǎ2Ǐ(ù޹ùڿǧƇǆDǟǦǧyǧ͗ǨùTǨ\nǧǨ_ǞǦǧ\x00ǨXǧ\x00ǨӚǟǞǯƏǙ(ùૹǯևǙ֝ǙôǟǞࠄǯǧʖǜǈǉ\rǧùеǯǙǆǦďǧ=ǙܪǟǨǞģǛǭǶǜǦ\nùڙǫǙ´ǫSǙ°ǦȰǫǨŹǙ\x00ǫԱǙ\x00ǫۓǙ\x00ǫҬǙ\x00ǫܖǞ!ģǛŷǨǞǭ ǛǶíßǶǛQǞǨKǜĂǭ2ǶؚǦफ़ùু\"ЖǜǣǈǉǊ\rǧ׷ǉ!Ʀ֌ǈ\nॢǊ\x00\"CƃƨǈIǈY੽ǊsǧͅǧǞǧǆyǯŹπǙģǦǟǨÈǞPǞ\nǆ´Ǟ_Ǜǆ\x00ǞBƝǛǧ߇ǭŹǛǧúǛǧÌǦƎǭǯ\'ǙģǦǙǨôǟǙǦǧǛۇǨǟĢƌǙ½ǁ.ǄǂǙ(ǟǙǠǙÏǥǙbǡrǙGǟǈǄǂÈǧǈYǧ!ǈ4ǧǈzǧǯǈIǧ\'ǯ\x00\"CƘ#ǯ\x00\"Cƕǁ\x00ǄǯǄǂǯ\x00\"CƘǂҁǠEǂǥǈ\rǧùƴǯùܠǙڵǦǟ.ǨǞǛǄ࡝ǭǭ\nǄtǭ\rǶǁ\x00ǭBǶ\x00\"CƘǙˉǟ\x00ǦǶ\x00\"ҟǙ\x00\"ҘǦࡋǙǶ̊ǭǭ\nǦtǭǟ\x00ǭʚǧǨОǨǡǈ\rǧǯՅǙǙ\nǄtǙǙ\rǦǁ\x00ǙBǧ\x00\"Cƕ#Ǧ\x00\"CƘǧ\x00\"Ңǧ\x00\"ڑǯ̡ǧǁ\x00Ǚŭǯ\\ǚǙ½ǁƗǄƌǂǇǙ֗ǟrǙGǟǈǉǊ\rǧʞǈIƄǯhǁǁ\x00\"ƐǯǙǁ\x00ǯƊǉǊ\'Ǚģǧ\x00ǯǙǂ˕ƊنǯhǄǄ\x00\"ƐǯǦǄ\x00ǯƁ\'Ǧģǧ\x00ǯǦǇ˕ƁŚǧबƭǚˡǧƮ\rǙ½ǁǄƢƮ4ǂƢƮǙǟǙ0ǠǙtǥǙBǡrǙGǟǈǉǊǉޘǈIƄǄǊǁòǂǊࣲBƩǠǈǉǈIģ6ǉeǈǥǈ6ďǈ=ùԎùۗǡǧUǯǙǦǟǨǞǛǭǶǜǫǮǢźǤǴǰǝǪǣǡǘźǬǄ\nǳǂ\n±ǬȸǵǄYǵ!Ǆ4ǵǄzǵǲǄIǵ4ǠǲǙ Ǡxǯ ǠǟíßǲÀǟǨíßǲ[Ǩ\'ǲy!ģ\rǚǲy,ǚ০ǶǮ ǚǛǚʲǛǭôǫùȠǮHǶǜùȠǭHǶȘǱǲ«Ǥ Ǳxǰ Ǳ۶ǥǲ·ǝ ǥxǪ ǥǞíßǲ¡Ǟ\'ǲA!ģǢIźǢǲAYǢǢǲAƻǰǴí\x00\"ǤHǰ=ùǹǪǣí\x00\"ǝHǪ=ùǹǳȸǵǂYǵ!ǂ4ǵǂzǵǩǂIǵǦ ǩǡ ǩÏ,ǩb!ģǘźǘǩbYǘǘǩbƻǢIźǢ٨ǘIźǘ়ǵƙ0ƙ\x00ǵǔ+í\x00\"ƪǙ?ƙ\x00ǵǔ+ǯƙ\x00ǵǔ+ǁƙ\x00ǵǔ+ǟƙ\x00ǵǧƙ\x00ǵǔ+Ǵƙ\x00ǵǔ+Ǩƙ\x00ǵǔ+ǫƙ\x00ǵǔ+ǜƙ\x00ǵǔ+Ǟƙ\x00ǵǢƙ\x00ǵǔ+Ǧƙ\x00ǵǔ+ǡƙ\x00ǵǘƙ\x00ǵǔ{ǣƙ¢\x00\")\"˯\"ɂƙȘƭǚgƛǧù՞ƒƃēƂù^ƈùÔƆùƘùŏƕùٷżùƯƦǬ¿Ƅƀ¿ƥƍ¿ǠùǌǫùмƊƢǠ4ƁƢǫDƋ.ŻƜƪ\"܅ƏUźùރſƮƯưث\"ۿƮ࡯Ư\x00\"࢑Ư\x00\"ࢁ\"ҙưܦ\"ଂƯ\x00\"ѹ\"ʿƯ\x00\"ا\"قƯ\x00\"ЬŹƮƯࡴƮߑƯÀƩƣēƚù^ƠùݡƖƅžƟƔGƑƮ6MƟƓƮਏƮ\x00\"ǣƒƈƆƃƂદŸƮƯ\rǙſƮƯƑƯ\x00\"বƤƐǙࣔƓǙŸƔIƄƧƄQƁǙƔƀ,ƁīƧƀਐžӣƩŢǙ\x00\"CƒƊǙĦǙ\x00\"CƃƧƄƦǙ\'Ǚ\x00\"ʕƥžƚYƅžƠʙǙ\x00\"CƆƖǙžƣɝƣŢǙ\x00\"Cƈ¦ƨƖǙsƧƄQžƩɝƚŢǙ\x00\"CƂžƩ¶Ǚ\x00\"CƃǙ\x00\"ʕƍžƠƅֹƠkǙ\x00\"Cƒ<ƅՐƅƅSù}žƩЙƔƄ\\ƧƮƯư\rǙǟ:\"ќ\"߰ǠƮIƄ<ǠƊ\nƷǠƁ\n±ǠǙƭਈƮƯưƛƮǠǙ>ƐƮ\rǙ0ǙƮ\x00\"ੜƮ\x00\"ǣƒƈƆkǙƮɽǙƮ਽ƃƂkǙƮɽǙƮÌǙƮ\x00\"֒ƘƕkǙƮ\x00\"ЉǙƮ\x00\"৲ƋǙ઻ƋݿMƜSùִŽό\x00\"ڸǥGƉǙ:ǡǚǛǘĪǟ:čùजǠǠ\nǙǠࣣǟ\x00ǠǙ\x00Ǡޜǥǟ\x00Ǡਙǟǟ\"ࡉëfǟњǡj\x00\"ࢆǧ\x00\"ڪ\"ࣥ\x00\"ӭùુǧߊǚEí\x00\"ݧǛ˝H\"ȣǘE\x00\"ѕ\x00\"ৠ\x00\"ѥŽǙ̻ŻŻƉºƏZǙŻǙƏǙƞǙǙ\x00\"LƋƋ0ƜƬǙֳƬƮ\rǙ࢛\x00\"ρǙ\x00\"࢝\x00\"ߤǙ\x00\"ƙ\"ΌǙˉǙ\x00\"ç\"ѨƪWǙ\x00\"˪Ʈ>ǡNƧƀRƙǟƮŸƒƮ%ǤƮŸƃƮ%ǣƮŸƂƮ%ǪƮŸƈƮ%ǢƮŸƆƮ%ǭƮŸƘƮ%ǙƮŸƕƮ%ǥƮƤƐſſżϗƑƮ\x00\"ԦŽךVń6 čńð«ń\rǚńmǧ¢ǚ4ǬǬǬ\nǚǬ_Ǡ°\x00\"	ńǬ\'ùদǠ#Ǡ(ùʃǧ\x00ǬÈÚ\x00\"	ńǬϭǧ\x00ǬÚ\x00\"	ńǬӿǧÛBń6ýńùठń\rǚŁ\x00\"	ń\"٬ǚનńȀǧPǧ\nǚǧ_Ǭǚ\x00ǧBǬĹùטǠD\x00\"	Ǭvùبǫ\x00\"ɠǠùɁù࣌ǫǫ9ùʃǚ\x00ǧ\x00\"૭ǫƁD\x00\"	Ǭù͓ǚ\x00ǧ\"ंǚ\x00ǧŭǚÛĔńŅņŇ\rǚń\x00ņXǧŅˢǚyǬŅ\x00ņ<ùԊǚãǠŅʈǚʇǫŅ\x00ņȍùǵǚšǡǟǤǣǚèùРù^ǪǢùǭܨǙŇyǥŇãǘŇʇǝŇšǨŇǍǪǪ\nǣǪǡǙ\x00ǧ8ùĉǥ\x00Ǭ/ùù[ǘ\x00Ǡ/ùù[ǝ\x00ǫù[ǚ\x00Ǣ$ǟǙ\x00Ǭ8ùĉǥ\x00Ǡ/ùù[ǘ\x00ǫ/ùù[ǝ\x00ǧù[ǚ\x00ǢȨǤǙ\x00Ǡ8ùĉǥ\x00ǫ/ùù[ǘ\x00ǧ/ùù[ǝ\x00Ǭù[ǚ\x00ǢùŃǫǙ\x00ǫ8ùĉǥ\x00ǧ/ùù[ǘ\x00Ǭ/ùù[ǝ\x00Ǡù[ǚ\x00ǢùҿǢ ùJǧǡǬǟǠǤüǪǪ\nùJǪǭ\x00ņ<ù΋ǪkǪǨ\x00ǧ8ùǻùÇǨ\x00Ǭ/ùùĒùȡǨ\x00Ǡ/ùùĒùĤǨ\x00ǫù[ǚ\x00Ǣ¥ǡǧǧǬǬǠǠǫǫǡeǭ{ń\rǚ°\x00\"	ńӀ5ǚ͊ǧǧ\nńǧ_Ǭ°\x00\"	ńǧ\'5ǬƮ©Ǭ©ùહǬ©ù߮Ǭ©ù૜Ǭԓù১Ǭ62\x00\"	Ĩ\x00\"	ńvǧՆǹƙܕƤ૩ÿǚGǚƮŧƙƤĢvńĬùਠýńੁǵń\rǚÑࢿ\"Ùń˅ǚ%ńŅņŇ±ńञǚń5/2\x00\"	ń{4ń\x00\"֨ǚŅ\x00\"ࢤ\"չǚġþńŅŇ৿ń5\'ŇʏņÆ\x00\"ŅŅŇaŅ\x00\"˪ŇࡖǮǚ\x00\"\"ǁǧǚ´ǧɎǧʻǚ\x00ǧA\"Õ\"ȼ\"˭ǚ\x00ǧA\"ȭ\"ǚ\x00ǧ̅Ŀù^Ó^á\x00Ó^ǚ%cńŅņ\rǚ:\"Վ\"ۮ\"ߧ\"ތ\"ਧ\"ޓ\"ل\"ګ\"כ\"੓\"ܣ\"ऄǧ\"ӤǬƮ6ǙGǙǧϯǧŅ\x00ƮۏǧŅ\x00Ʈѡù࣐ǧŅ\x00ƮӪùܸǧŅ\x00Ʈ૙Ʈ\"࠘ń\x00\"řŅ\x00\"ݘń\x00\"ʐŅ\x00\"խǯݭƮ\"੉Ʈ\"߁ńѤǧ̊ǠǠ\nǚǠ_ǫǚ\x00ǠܝŅ\x00ǫӔǧń\x00ǫǬǫ\'ņń\x00Ā\x00\"	ǫǩń\x00ǫ$ń\x002\x00\"	ǫǩń\x00ǫࡿ0ńŅņ\rǚǧǬǚŅǧņƗǚ\nǧtǚҌǧǬń\x00ǚ$ń\x00ǚń\x00ǧ$ń\x00ǧǬ\\ÐńŅņŇń\x00\"Ŭń\x00\"ŅņŇaŅࠇŅń\x00\"ѢŅņ>Ĉń\rǚ:ĉÖBńƇń\"ʗńଁǧ.ǬǠńŁ\x00\"	ń\"ѽǫǫ\nńǫǠń\x00ǫ$ǬZǠ\"ПĥǬyǚӷǧǠǧ\"૲ń\\ǫN×V˸zģǚVùިǚz\"ĔǚKĬďčùटĤďčùϙďčùڂïďčù਱ķùĻďčùߜĘùĻďčùݣĿù^ÊǧVù߸ǧ\rǬŁ\x00\"	ǧ\"ԢǬŋùفǬxĉǬÖǬŵǬÏ<ǬՔèǬТJǬݎxǬپǬƛǬЍ¬ǬƶǬपǬօ^ǬۂªǬƱOǬघīǬॊǬĵ(Ǭ۞ĢǬ੗ĖǬے\\gǠčùीǠçŁ\x00\"	Ǡ\"੘çࡒĜʢ²q\x00\"ࠐGȩlʭĠńńń\"ԈǚŁ\x00\"	\x00\"׿ǧǬǧǧ\nǚǧǬǚ\x00ǧBRǬńʹD\x00\"	Ǭṉ́XछǚǁǲǙ¥ֱWǙ]ȩģǄÄǙ\x00\"ùǟǙ\x00\"ʡǠǙ\x00\"®ǥǙ\x00\"ˍǡǙ\x00\"ʼǚǙ\x00\"ĆǛǙ\x00\"ǗǘʀǙcʀǙٙǟNǁ\x00\"¼\"Ջ\"ߪǄФ\"įùϦǄ;ǁ˧ǄŠǁ\x00\"֎ǁ\x00\"ŗ\"	ǁ>ǠNǄÄǁ\x00\"¼\"ğǁ\x00\"Ȏǁ\x00\"ʥ\"	ǁ>ǥǈǁ\x00\"¼\"ȕǄ;ǁ˧ǄŠǁ\x00\"ʦǁ\x00\"č\"	ǁǈ>ǡjǁ\x00\"ǀǁ\x00\"ˊ\"	ǁ>ǚNǁ\x00\"ʁ\"Żǁ\x00\"¼\"ğǁ\x00\"ȳǁ\x00\"˂\"	ǁ>ǛNǁ\x00\"ʁ\"Żǁ\x00\"¼\"ğǁ\x00\"ɛǁ\x00\"Ƚ\"	ǁ>ǘǈǁ\x00\"ƾǁ\x00\"ǚ\"	ǁǈūǧڠ\x00\"ц\"է\r\x00\"޴ǙŘ\r\x00\"ۄǁࣃ\r\x00\"ʼǟ]\r\x00\"ĆǠ]\r\x00\"®ǥ]\r\x00\"ʡǡ]\r\x00\"Ǘǚ]\r\x00\"ȹǛ]\r\x00\"ˍǘGǟjǁ\x00\"ȳǁ\x00\"˂\"	ǁ>Ǡjǁ\x00\"ɛǁ\x00\"Ƚ\"	ǁ>ǥjǁ\x00\"ʦǁ\x00\"č\"	ǁ>ǡjǁ\x00\"Ȏǁ\x00\"ʥ\"	ǁ>ǚjǁ\x00\"ƾǁ\x00\"ǚ\"	ǁ>Ǜjǁ\x00\"ˣǁ\x00\"ɀ\"	ǁ>ǘjǁ\x00\"ǀǁ\x00\"ˊ\"	ǁբ\x00\"ҋ\"Č\x00\"ٹǧĠ\x00\"ɲ\x00\"˲\")\"Ŭ\x00\"ɍ\")\"ǊǠ\x00\"ɍ\")\"ɩǫÖǬ*\x00\"ɶǚӌ\x00\"·\"ž\x00\"঴Ǭ\x00\"·\"žǧº\x00\"·\")\"ŀǡ\x00\"·\")\"Ƣǟ,\x00\"ɲ\x00\"˲\")\"Ŭ\x00\"·\")\"ǊǤ\x00\"·\")\"ɩǣǠȆW\x00\"ė\")\"ǈ\"ࢻǁǃǄҗǙǈǄ\x00\"¼\"أǁ\x00\"	ǄǈQ\x00\"ė\")\"ǈ\"ǾWɫǙɇǟǟ\x00\"ǒǟ\x00\"ʤǁǟ\x00\"ǷǙ]ǟ%ǫȆW\x00\"ė\")\"ɦ\"ͭǙǙǼǙ_ǟq\x00ǙBǟ\x00\"ɵǟ\x00\"ǳ\x00\"ė\")\"ɦ\"ǾWɫǟ\x00\"ࢀ\x00\"¯Ǚ֤ǡE4ǬWʌǟEǬWʌǤǁǃǄǲǙǄWGǟǈǁ\x00\"	ǄǈQǙ\x00\"ܵǟɇǠǠ\x00\"ǒǠ\x00\"ʤǁǠ\x00\"Ƿǟ]Ǡ%ǣǙqWƔǟǟǼǟ_Ǡq\x00ǟBǠ\x00\"ɵǠ\x00\"ǳǙ\x00\"׸Ǡ\x00\"Ϲ\x00\"¯ǟࣁëńŅ~ń\"ÁńßńŅŅ#eǚǧǬǠńmǫǡǚ¢í\x00\"İǠ=ùСùҞǠń°ùਿǧ\nǠǫń\x00ǧ¥ǚ\x00ǬŅ\x00ǫ/ùŃǡń\x00ǧ¥ǚ\x00ǬŅńǫùĺù˾ǡ/ùড়ǫń\x00ǧ¥ǚ\x00ǬŅńǡùƝù϶ǫ/ùאǚ\x00ǬŅ\x00ǫùՈǧ\nńۦǫń\x00ǧ$ǚ\x00ǬŅ\x00ǫ/ùŃǡń਀ǧ$ǚ\x00ǬŅńǫùĺù˾ǡ/ù઀ǡģǚ\x00ǬŅþǡùƝùӝǚÛqńd\rǚŁ\x00\"	d\"ڮǧǧ\nǚǧ|ńǚ\x00ǧӫɔìńŅņńń\"Ŝń\"ঙŅńĮਭǚ{ņ\'ǚǚ\"Ŝǚ\"ੇńŅńŅǚǚ\nńǚؘǧń\x00ǚĪǬ,ǧyǧ૯\"࢙Ǭ\x00\"ªŅݶǠ԰ń¦ńۢńঝ\"ਊǚńmǧ¢í\x00\"ǚ=ùܽùӎǬǠǫǡǟǤǣǚ2ùࡲǟǟ\nǣĖǬ°\x00\"	ńǟzǠ°\x00\"	ńǟzǫ°\x00\"	ńǟzǡ°\x00\"	ńǟzǧ\x00Ǥó\x00Ǭ×ĸ\x00Ǡ$ǧ\x00Ǥ=\x00Ǡ×\x00ǫ$ǧ\x00Ǥă\x00ǫ×Ã\x00ǡǏǟ\nǚǬ°\x00\"	ńǟzǠ°\x00\"	ńǟzǧ\x00Ǥó\x00Ǭ×ĸ\x00ǠBǟ\nǚǫ°\x00\"	ńǟǧ\x00Ǥ=\x00Ǡ×\x00ǫ̢ǧôńŅņ\rǚń,ńɟùЮǚLńDǧǚDǬǠǫǡǟǤŅƟǣǧmǪ¿ǡǧ\x00\"ࠂǟֽǬǣǬ\nùУǣù߲Ǭǫǡ\x00ǬٺǬÚǣ৔ǣùٳǬÚǣùӉǫǤ\x00ǫ8ùǻùÇǤ\x00ǫ/ùùĒùȡǤ\x00ǫ/ùùĒùĤǤ\x00ǫùݐǬÚǣĈǫǫfùĤǫ8ùÇǪfù̓ǪǪưǪ/ùǴùٝǡ\x00Ǭǡ\x00Ǭ2ǣࡃǫüǠǬǠՓǬ֬ǫǡ\x00ǠùɥǬkǬ2ùͩǬ9ùǪǠ\nùœǟ\x00ǠǫYǟ\x00ǠņƠǤ\x00ǫ8ù੯ņĿǤ\x00ǫ/ùù˰ņ߳Ǥ\x00ǫ/ùù˰ņڎǤ\x00ǫùҭǡǟɚńŅņŇńŅ\"Đńń+ņańDǚè,Ňŧǚń࣬ǚ\"åń\\¡ɔĿńŅ\"ń,Ņ&Ĵ\"ńćń\rǚւǧZń\"औǧbù}ǚǧফǬǧƠ\"\"੠ǠǬȶǬ\x00Ǡࢄ\"ࣼǬ\x00ǠौǬ\x00ǠƣǠҲǫǫ\nǠߴǬ\x00ǫ۝ǫĈǬ\x00ǫƣǫˁǫ࠺Ǭ\x00\"¯ǫતǬ\x00\"¯ǫূù¨ǫҖǬ\x00ǫ\"ݥǫĈǬ\x00ǫƣǫòǬ\x00\"¯ǫެǫࡤǡǬ\"ڬǚঁǡ \"Ĕǚeǡ¼ńŅņ\rǚĕńŅņ\'ǚڔǧVùɴǧ\rǬŁ\x00\"	ǧ\"˱Ǭnù˒Ǭϡ\"ٕǠ,Ĩ\x00\"	ǬਗǠ\x00\"ªŅ࢞qńņ֡ǫëļŅ̃Ǭ৑ǫqńņৈǡ੢²ńŅņ\rǚŅƟǧņƟǬǠǫǡ.ǟ.ǤǣǪǢǭǙǬǬ\nùÅǬǟþǡ\x00ǬǬưǬ/ùǴù֑ǬǬüǠǫۤǚ\x00Ǡ$Ǡ˛Ǥईǫǟ\x00ǫ੏Ǣǫǫ࠻ǫfùࣚǫfùܟǫfùJǢǢ/ùĤǢùޢùࢸǚ\x00ǠǢǧ\x00ǢǠǤǡ\x00ǠͮǬǬ\nùÅǬǧ\x00ǚ\x00ǬęǬüǠǠ\nùÅǠǢǚ\x00Ǡ$Ǫǡ\x00ǣǡ\x00Ǥǡ\x00ǠࠓǙǪ=ù࣠ǣ=ùऺǤ=ù́Ǡ=ùʜǭǡ\x00Ǣࡩù́Ǣ=ùݞǬǬ\nùJǬŅ\x00ǬAǠǭǭfùÇǭ8ùoņ\x00ǬAǢǙǙfùÇǙ8ù̝ǬǬ\nùÿǬŅ\x00ǬŅ\x00ǬA\"ɣņ\x00Ǭņ\x00ǬA\"܍ńŅņ\rǚǧǧń\x00ŅͰǚŅǚ\nņɬǚń\x00ǚń\x00ǚܒń\x00ņੲǧńŅņ\rǚŅņRǚ`ńƦǘ׏R\"ʷ\"ਸââÓPÍথǰǚ\x00\"\"ǁǧǚ´ǧɎǧʻǚ\x00ǧA\"Õ\"ȼ\"˭ǚ\x00ǧA\"ȭ\"ǚ\x00ǧөįńŅņ6ëhńŅņðîńŅņ\rǚǚńǚEǚǚXǚǚ%ǚ-ǚ\"ǚVĲǚHÄǚuÄǚ;Ĳ؛RńտņmńmEńYǚùЇǧgǬǧ\x00।Ǭ#Ǭࡷǧ\x00ê\"ňǬ\"˜ǧ\x00ê\"ǦǬ\"ԷńĲ¦ņmńmEYń~ºŅ࣯Ǡ\x00\"`\"ԟǠ\x00\rńǠ\x00\rǠ\x00\rBǠ\x00\rťĲǠ\x00\rX\"ࣄǚùǨǚÀǫǠ\x00êBǫ\"ܭǚùЄǚޔìǫ³ǚsǚùǨǚÀǡ\x00\"	ǧ\x00êX\'ǧ\x00ěXĮǬ\'ŅǧÚ\x00\"	ń۔rÚ\x00\"	ńࣰr\rǟĨ\x00\"	ńù৐ņmǠ\x00\r\x00\"	mX\'ǟaǠ\x00\r\x00\"	ǧ\x00êX\'ǟॹņmǠ\x00\r\x00\"	mńaǠ\x00\r\x00\"	ǡń׼ǤRń\"ॡņmǤǠ\x00\r\x00\"	mm-ńaǠ\x00\r\x00\"	m?m-4ńމǤ#Rń\"બǠ\x00\r\x00\"	ǡǧ\x00UXńaǠ\x00\r\x00\"	ǡ?ǧ\x00UযńखǚXǠ\x00ê$ǚǠ\x00ěBǠ\x00Ĳ#Ǡ\x00߭Ǡ\x00ê\"ňǚ%\"˜Ǡ\x00ê\"Ǧǚ%\"ȅǚ%Ǡ\x00ǏÚ\x00\"	Ǡ\x00U؞rǚ-\x00\"	rǠ\x00Uਚǚ-Ǡ\x00Uɮǚ\"Ǡ\x00\"ΥǚVǠ\x00\"߼ǚ\x00\"	ǚX\'ǚĮǚ%ǚE\x00\"	ǚǚ-ǚ\"ǚVDǣ\x00\"	ǧ\x00\"ڷĮǬDǪ\x00\"	ǚĮǚ%\'Ǫǣ#¼ǚXǚǚ%sǚuǪǣǢ\x00\"	Ǫǚ-ǚ\"Dǭ\x00\"	ǣǧ\x00UXzǚHǭǢǚ;ćǚ-\'õǚ-sǚù߻ǚĠŅǚù˽ǚ!ùœǚܐǚùࣟǙǚù࣑ǚań\rǚǧāӄǚįǧ\"Đń\nȾǬǚÞǧ\"ĐńĊùΜĿù^ÊǠVϿÞǠ\"Đǚ%ĒńŅņŅŅ̀ņģ&ņń­ǚ¢í\x00\"İńèùԻǧņ2ùٸǬÎŅ\nǧǚ\x00ǬÑ\x00\"Ǻń\x00\"cŅŅ ù̵Ņ\nņ&ǚ\x00ǬÑ\x00\"Ǻń\x00\"cŅņ̃ǚÛĕńŅņ\rǚ\"Ӗń<ǚ\"਄ǚ\"ϽǧbgǬǧȧǠǧցǬ\rǫëļǚĮŅĮņʳǡǬ\x00ǫBǡоǡ۹Ǡǟǟ\nǠǟ_ǤǠ\x00ǟBǤùԆǤਦǤϐņǤ̰Ǥࢹǚĝǣ,Ǥ׍ǣ\x00\"ªŅ؍ǤŴǪݖńŅǚhŅħǚ\"Ӡǚ\"଄ń\x00ǚ৊ǚ\"ͣń\x00ǚ٫ǚ\"Ϻń\x00ǚ׋Ņ\x00ǚΧ\"݃ń\x00ǚŅ\x00ǚŴǧĨńŅ̄ńˢŅৣń੤ŅߐńʈŅࢊńڍŅ৤ĻńŅņ6ń4Ņņ%Àń\rǚńmǧǬǠń܉ùǫǡǡ¢Ǡĥǧ\nǚǫń\x00ǧ¥ǡ\x00Ǭǫ8ùĲùwǡ\x00Ǭǫ8ùƋùwǡ\x00Ǭǫ8ùĬùwǡ\x00ǬǫùȱǡĽńŅ¦ńŕŅφ2\x00\"	ń²2\x00\"	Ņ%·ń6í\x00\"nҾń%lńń\"\rǚZZń\"Ő\"٪ĈǚΦń\"À\".ù.Ñ̒¢ࡊǵ׆ǙࢣģǥĘέ੨¥\x00\"૵\x00\"ΛmĘûǡ:ࠎ¢ࡆí੟ďݤHૐǜࠍ8ЃÈկ¨݊\x00\"ǫǭ਋\"˦ní\x00\"α|í޻ǚí\x00\"̏gí\x00\"λĵí֠Aíफġí্Ü\x00\"ƽľ\x00\"ч!\x00\"АǞ\x00\"Ρǳ\x00\"؄ǧ\x00\"̫Ü\x00\"ƽǦ\x00\"́â\x00\"˦&\x00\"হĂ\x00\"݀,\x00\"ફÓ\x00\"ӥ\x00\"अÚ\x00\")\"ਣ°\x00\")\"ۉ\x00\")\"ۯĺ\x00\")\"਻\x00\")\"ࡈǟ\x00\")\"ҏğ\x00\")\"ঃǤ\x00\")\"ΤĨ\x00\")\"ڱŁ\x00\")\"঒D\x00\")\"ݨ9\x00\")\"৛2\x00\")\"ঢĀ\x00\")\"ҶY\x00\")\"ࠈÑ\x00\"਼Ǡǜ\x00\")\"Ǣ ¨\x00\")\"Ǣ³G¿tUǴ+WÆĲģr\"࢚Į\"܃\"۷\'\"թ\r\"וê\"Զě\"֮\"ՃU\"ࠪǺgÇǡ¢\x00\"ϒǻ:ùѦù֙ù࠾ùοǝĎãāķĘó.ĸ.=..ă.ÃĎeŁ\x00\"	\"৞ǨژǲgúĄĴUĞ̨çdǷǸǫgčPĉÖ<èJx¬^ªOī(ĢĖï×ĤzĬ]ŤǪʳéģ¹ģŤǔףÿǹ߃Ĝ\x00\"žǯg.#ÂÔ	Ǳù^tU§EłĎoÏ[ੱü¶3ǘǔȿǔݼǔيǔڈǔضSģǩù߅ǣùսIÊØUÄuUËà´U\"Ι^\"ݬ$,\"Ǥ\"Ȭ$ \"עÎ/.ģ>ģÛ÷TºÉÒĦ6ŃUµĘĩUUw.ÁUĆ¤ĎŤǢÊáૣǔ੸áDǛùȢǬù҂ÕUyǔѶÓá\x00ÓyÕǔքǔݳǮÐ\"§ǰD¦½KēǶˡǯʢ~ǚ]gǧ]:ù͆ùॿùڐùࠦùվp:ùڀùєùˀùࢠ=ǬGǚƮ~Ʈ\"ÁƮßƮDǙqGqG\x00\"LƮ̞l ƮƞǙĹùɃ=Ǚ\x00\"ǋù৭ǧǙǟǠqGǥq²ǡ\"ૂǠùҳǙǠũùʧùJǙùٍǙǠӗǠ\x00ǡׄùɃ=Ǡ\x00\"ǋùЪǠǠǠí\x00\"ٓl=ùेùٽǠૺl=ùڼ=Ǡǡǥ­ǚ¢ǡ=ùڕǙǟǙ\nǡ۲Ǜǥ\x00Ǚ¥ǚ\x00ǟǛ8ùĲùwǚ\x00ǟǛ8ùƋùwǚ\x00ǟǛ8ùĬùwǚ\x00ǟǛùȱǚǬƮ\rǙǟǠǥǡǚǛǘƮ\x00\"̧ǜq²ǣǞǢ\"ࢬǠǜxǥǜǡǜŵǚǜÏǛǜǍǙǙ9ùĵǙ|ǙSùƊǣǘ\x00Ǚ2ùǵǘ\x00Ǚ2ù৴ǘ\x00Ǚ2ù૦ǘ\x00Ǚ2ù̷ǘ\x00ǙŞǣࡢǣ8ù҄ǣ1Ǡfù૖Ǡ8ùȇǙ9ùࢗǞ1ǥǡਫǥǚĦǙ9ùৌǞǥǡǚ¶Ǚ9ùށǞ1ǥǡ̉ǥǚ̉ǡǚĦǙ9ùډǞǥǡǚKǟ1ǣǞǛǘ\x00ǙҰp\x00í\x00ǢǙHùभǛǚǚǡǡ1ǥfù૳ǥ8ù¨ǥǠǠǟKǜϷǜ˞Ǡđǜ३ǜǠǥđǜࡺǜ߯ǡđǜϛǜٶǚđǜࡽǜ਎Ǜࡗėń\rǚ.ǧǬǠǫ°\x00\"	\"ࣨǧǧ\nńੋǬń\x00ǧBǬ\nù੐ǠǬ¶Ǭ\nùغǠǫ¶Ǭ\nùͯǠĂǬùʾùɨń\x00ǧȂùʨǧˁǬ\nùज़ǠĂǬùڋù࣍ń\x00ǧȂùʾùɨń\x00ǧùӋùʨǧ ù˽Ǭ\nùࢭǠǫǧ ùԜǬ\nù֜Ǡǫǧ ù͡Ǭ\nù࡟Ǡǫǧ ùԳǠǫKǧZǚǠĒǚ%kń\rǚ0ǚńRǚϴń\rǚؖùÔùࠡùѐùࣂń/Ó¦ԡńǚ\x00Ó¦਷ùސÓ¦ðǪń\"Ӽǫgƙń\x00\"৆Ƥń\x00\"Іƞń\x00\"૥Ƣń\x00\"ڞơń\x00\"ݺƨń\x00\"ݍń\x00\"࠿ń\x00\"Ώń\x00\"॔ǚؿƫлù࡛ńӸńĝǧƃ\"ʍƤ\'ǧģń\x00\"øǧÖǬ*Ðń\"ѠǡQǠGǠƮŘƮ#ƫ]ʞń\x00\"ؼÉń\x00\"۸\"Ѯ\"ƺùĻù٘Ǚ઺Ǡ\x00\"ΝǟǠ\x00\"ӶǤGƝƮƯưƱƲƳ\rǁְƱƱ̀ƱĈǁÎŷƮƯǁ°ƎƮƯǁÆƇƮƯǁƗƮƯǁÁƌƮƯƭ\x00\"	ǁƮƯƛ\x00\"	ǁƮƯ¤ƯģǧƳ̽ń\x00\"޽ǁģ©ƨêǁkģ#ǁk̘ƱՏǁ\x00\"ԍÜǚùޠǙǁǟ.ǠǥǡǁࣕǡhǙǙ\x00ǡˮǙ\x00ǡ٢Ǚ\x00ǡɷģǟ\x00Ǚ\x00ǡęǟ\x00Ǚ\x00ǡړģȍǟ\x00Ǚ\x00ǡݫǡhǟǟ\x00ǡࡠǠǠǟ\x00ǡ$ǥǡłǥģêƲģ#ƲϩǁëƮǥࣻư\"΀ưǥǙ>ǚNƝ\x00\"	ǁƮƯưƱƲ>ŷƮƯħƯģƤƒƤƮƯŁƃƮƤÆǙĄƎƮƯơħƯģơ\x00\"ɤƮƯŁơ\x00\"˥ƮÆǙĨƇƮƯƢĝǙƂ±ƯģƢ\x00ǙAƮƯǽƢ\x00ǙAƮŴǟĨƗƮƯƞħƯģƞ\x00\"ɤƮƯŁƞ\x00\"˥ƮÆǙĨƌƮƯ¦³ޱǙƈ\"ૃ\"૆Ǚ\x00\"ࣵǙ\x00\"¡\"߀\"ӰƯģǙ\x00\"ࢢƮƯǙ\x00\"נƮaǙ\x00\"׎ƮRǙ\x00\"ÕƮƭǟĄƭƮƯ\rǁϓǙǁÉ,ǙƯǙ\x00\"˩ǠaǙ\x00\"˩ǥƭǟ»Ǡǈǈ\x00\"ţ\"Ӣǧǯǈ\x00\"ţ\"ϣƮƯXǙǦöǧǎǏ»ǯǎǏ»ǙǎǏ»ǦǎǏĄǥǈǈ\x00\"ţ\"ાƮXǧǯöǧǎǏǏ\x00\"ࢌǁǏ\x00\"Ҋ\"Ͼ\"ͱǁ৻ǯǎǏ׊ƛƮƯ\rǁनƨ\rǙ¿ǟƨ\x00\"ç\"ƺǙǟ\x00\"Ćǥǟ\x00\"ਓǡ,Ưģǟ\x00\"ĜǚYǟ\x00\"ĜǛदǠ»ǥǈ»ǡǈ\rǧǈ\x00\"Ǝ\"ހǯǧ\x00\"ݝ\"ؾ\"Ђǚǈ\rǧǈ\x00\"Ǝ\"Βǧ\x00\"Ȥ\"ȵ\"ࣝǯǧ\x00\"ɒ\"ࠢ\"ׁǙǯ\x00\"ȃ\"ǜǦǙیƮ१Ư૰ǧ\x00\"ۡǛǈ\rǧǈ\x00\"Ǝ\"૱ǧ\x00\"Ȥ\"ȵ\"͒ǁkģৡǯǧ\x00\"ɒ\"ϠǙǯ\x00\"ȃ\"ǜǍǙĀƮǍ\x00\"ĜǦKǧ\x00\"گǦǎǍ\x00\"঻ģǁkģYǁkǍ\x00\"٣\"̴ƒƮƯưưń\x00\"΢ư\'ĺ\x00\"	Ʈ\"¬Ư\"ܿùâĺ\x00\"	ƮƯ\"ͧǙĺ\x00\"	Ʈ\"¬Ư\"݄ǟǠ,ǙùæǙĺ\x00\"	ƮƯ\"ޝǟĺ\x00\"	Ʈ\"ڄǙǎǥD\x00\"	ƮvǙ\'ǟùæǠǥD\x00\"	ƮǟǇǙ࠳\"¬Ư\"åưYǠǥ\"¬Ư\"åưeǠǽƮ\"¬Ư\"åư\\ƃƮƯ~Ư\"࠭ǙƮ\"ɉǟǠǥŁ\x00\"	Ư,\"কǟǟ\nǥǟǠǥ\x00ǟܛÚ\x00\"	ǠࣛǠ9\x00\"	ǠżǠߔĺ\x00\"	ǠǙԑń\x00\"ઠ9\x00\"	ǠǙmǠՕƂEğ\x00\"	ń\x00\"ĩ\"ɼ,\"׹ƈƮƯư\rǙ,Ưģƙ\x00\"¹ƯsǙƙ\x00\"¹ƯaǙƙ\x00\"`ƮQǙ\x00\"¡\"ǟ\"ļǙ\x00\"¡\"Ԟ\"ЩƯǙ\x00\"גƯ¤ưƙ\x00\"\"ÉǙǙǫݠ]ń\x00\"ظǙ֘]̬]\x00\"ر\"ڒ]\x00\"ʹ\"झ]\x00\"ܴ\"׮ǟ]ģ੃ǡNƤƒƤ\"ʍń\x00\"ޏń\x00\"øƤǟƮƯưƱƝ\x00\"ýƮģƯưƱ%ǤƮƯƝ\x00\"ýƮƯģ>đń6ýṋ́æńŅ\rǚĺ\x00\"	ńŅ\'ǚùȜńग़D\x00\"	ńvǚ4D\x00\"	ńǚેRńŅ6Ĩ\x00\"	ńvŅۜŅǺN³-+iÇħƩÝń\rǚń4ǧ1ǚ͵ù˹ǚãǬǚmǠǠùTǠ\nǬǠ ù}ǚ\x00Ǡ৓ǧ/ùĬùؙǠ࠮Ǭ&ǚ\x00ǠΆǧùwǧ֐ǚ\x00\"cù࢐\\ǚ\x00\"ɭǧVùɴǧ\"׺P^\"ॸP^\"ЎǬǚ\x00\"৳Ǭǚ\x00\"Ǥ\"ȬǬ\"ȅǬ\"ӛǠǚ\x00\"੩ǬdVù͝ǫŁ\x00\"	ǧ\"˱qǠ࠰ǫnù˒Ǭǫ޵ǚ\x00\"֍ǫ˞\"Ԑǡdȶǡ\nùৱǡ૸d \"েd Ǡ͚pń\rǚـǚńńń਑ń!ǚˎĀ\x00\"	ń%ýńŅ\rǚń-ń\"ǧĕńXńń%\'ǧʗǧ࠙ǧĿŅˮǧĿŅXǚࠒÞń6įńø͠\x00ǯǮǰǱǔǕǲǳńŅņƙƝƞơƢƤƨƫǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭ\\řsŒÓŚĐőĒŎęœěŧĈŔĊŲČũĎŢõŤ÷ŴûűĀŪ\x00ŘîŭĻŨŁŋİšĲūĴŕ8ůĝŉĢţĪśĮŊOňVşXŗRŮZť\\ŏĶŐ¬ō©ŌªŬ£Ŝ§ųŦ}ŝŰiŵgŖlŞbŠdϖƆŢĜēȺ8T?ŻȬƷȬ?ƎDÿȚXâűōɪƘȻǚƂŲșÿĎđɷXčʣė;Ŧē?ĺ?Ȯēûʃ?ê<ƛ9??ʠȜ?ūŷĹɱÆ&ǩOÖćƬÄɯ³ʏoƵʕǲĘȀʒɖȒʢYɉʒɖțÅpĖƩȷÚʚȰƠGŪhƫũǭȿɊřȋȧŌø®ĚȔȾ÷ʦ?ǵ?Ëíʒ\'þŨÞ?ɋöēƓƴ?ǖŏɀ?BȨēɏ?Ȗēɳ?ËÓēƨ½Ƹ?Ƒ@?Ļē¾+?Ĉ?ơʒ?þ¶?Ǝȱ¼ʒǪʨ?ƗēAßɍŭʒǪʨ?­v?£Ê?2ēxɎƉ?ĬɃúɤEēȵÞ?Ɇ¬ʒǸþĨ?Ľ0ēã]ēŤIĥʒĩʍìʒ¡ɒǔ?ʛ´īƴ?ǌ3ʒƹȏlʒƝHnʒùƮ>ʒĝʒƤęǜȱçēþǟƐʒʨǁƶʒ6ʫȠʒŇÜɄʒƖɞƃʒďǊʒɶŕǆʒ»ƂȈʒȘÉťʒǽȊRʒʉȳʞēʘº?ůŮ?Ǣ?Ɂ?Ëåɲ?ɢ¢ș§ʒþȇĢēPƴ?}?ư?²Ǥēʊ?ñ?ËǒȟŚƚ#ʪáʔȢĄÏȍȆʖǥƔƇ,ʟƪǅǫƺÌöʒ^ȣöʒƱÝɑ©ȽʌÃǘƅśȁLĞdǬÂ=öʒƱǞ×öʒƱŸ ōeĶÕǇŰʩǦēšşǡtʒýǋ5ȱȐƏʒƌǓƀɝēw5Uʑļō^ʍłʒ^Ô%ļō^ƽʍłʒ^ƍƍēȂȪʒɅɇȞʒªƳʜƄōǧƕǗŜōŀȭȕƿɛǄɡŢĮʒȝȳȌē¥Fk¤\x00ĊƟĕƣȗcʒ1ǑcʒżȄēǯ±?ʬēŒǴȶ?ȱQ¨Áɟ?ɵȱžģ?ƋʬēőÐʥȫē¯?ëēǠɭ?ʬēŋɫ?ǎĐʐ?İʐ?õōŹ?òĀɽʒȃþ?[ȯŁʁɥ?Ă ʭîǹ!ɂʋɈĉ\rØǼŵōæǝƞȑȩĦbʤÈſǕƊɨƜ¦Ǳ?ǐ?ɬ?äðƧ?ĴʒVā?ĴʒƯʅ?Ĵēʧ?Ŋź|ľkɧƙǂ4ɮf?Ŭɐ?ĴpǃǍʒəÍʡȎōŘēɓ?Žȼ?ɰ?Ĵē	?ƈēăǰ?(ēĵ?ÑŠkq)ʆó?Ʋk¸ÙȤµ?Ë·ǛĪ¹.ʒġŧœʒɕʙǺʒğgCʒƻėɚʒ\\þʮÞ?Ľȸ?ɦ?ĆǻȲōňɌ`Zěƾ?:ƁǷ?ɠ?*ʒ?7«Ȧ?ţēĤÞ?Î?ırĢōʇƥĿʎǨĢɣĠWʒʄȳɗēƭ?ËsŅōʝ/Û?ŝĭ?ʂ?ïǿ°?éàʒuþ\"Þ?įüyNzĸųńǈaȴǣɜɺǮɸǶȹ?ɴÇŉ?Àȓ$-ōǳJ`ŖƢ?jSèʀŞ?ķɻēƒɩ?ņMƼĒ_¿ʒȉþĲ?ċ?ħǙʒȡʈŗŔŎōɿÒþȅȥŃɘŎʒKǏʗʓ{Ŵ~ǀǉ?ƦĔēŶ?ɾ?mŐąkǾĳēÛ?ɹ?ô?\nɔɼČēi?\x00ʯ	ǨíۖǥmùĽǰǔ؁ń©ţǧ\"ùՌǧ\"ù҈\rǬ\x00Ǡǔ+Ǜ۠\"LǛǧňùÃǰIĮŖƙ0\rǰÚ\x00\"	PPѲ\"Π	ǚÓ+	Ð\"ȲW5ǰ&ǯŷ\rǰ\x00\"״%\x00\"̕Ǭ \"ѩ	Ǭ\x00Ǡǔ+ńrŋǧ\"ùҧEE#ǚ\rǔ7ǚƮǔ7ǧǧ\x00\"ȗ\x00\"ϥ\"Ͷ\"ૌ\x00\"М\"Ȟ\"i\"ࢍǔ;ùFù॒ǧÓ^ǔΈǬ\"׭Ǭ\x00\"ࡏǬ\x00\"ݓǧ4ǚ\"ѣǧ4ǚ«ǔ̳ǭĎǚǧ	ǰV³#³(ùo¦Ǡǚǔ@\"৒¾\x00\"ȏɋ\x00\"ş$Öǚ*	Ð\"ƌ*W	-ǚ!\"׬ǧ*ǧ	ǠďVùߎ	ǚǔ@\"ەǚƙ\x00\"ߡǚ\x00\"˓ǰǔҪłń²ùÃTǚș%ǰ׵Ĭùξ\x00Ù\"\"Ź\"i\"֛ùâ\x00Ù\"\"Ź\"iÙ\"ۈùÃ\rŇǚhRǚÙ\"थǬ\x00ǠùÿǰǠ\nǧ	ǰǬ\x00\"C\"ݵ3ǠǠ\nǚǠǬ\x00Ǡ°\x00\"	ǚǠQǰǚ\x00\"ࠤǧ\"ùƿǰ\x00\"¹Ù\"૕ǰǔ7Ù\"ݕƙ\x00\"৺ǰĬùǰǔ;ùFùֿƙǔ@\"ʒ7ǚ:Ù\"үÙ\"ݦÙ\"মÙ\"৯Ù\"૒Ù\"ҽÙ\"०Ù\"ϜÙ\"ҍÙ\"ਆÙ\"ދÙ\"ઁÙ\"ԩǘµĩǤǔ@\"ƖŃ-Ƥ0Ǭ\"૤Ǡ\"ٮǫƙ\x00\"޳ƙ\x00\"ٛƙ\x00\"˄ǫǡ\x00\"ࠖù࢔ùઍùऩùষù׀ƙ\x00\"аƙ\x00\"˄ǡƙ\x00\"΁ǫ\x00\"૓ù³ǫ\x00\"ुù³ǟƙ\x00\"ۭǤƙ\x00\"Țƙ\x00\"࠽ƙ\x00\"ʽǤǬƙ\x00\"ȟǤǣƙ\x00\"Țƙ\x00\"࣋ƙ\x00\"ʽǣǠƙ\x00\"ȟǣƙ\x00\"ˏǟǤƙ\x00\"ˏǟǣƙ\x00\"գǟƙ\x00\"৘ǟǟ\x00\"ઙƙ\x00\"ੳǟ\"ࣧǟ\x00\"ۛƙ\x00\"ۃǟ\"࣪ƙ\x00\"ઽǟ\x00\"ੈƙ\x00\"βǟ\x00\"ઔǫ\x00\"ӈƙ\x00\"͕ƙ\x00\"՘ǟ\x00\"આƙ\x00\"࢜ƙ\x00\"ܗǫ\x00\"Эƙ\x00\"ࠨƤƙ\x00\"ભ\"َǕхǕÒƙ\'ƙ\x00\"࡭Ǫ:ƙ\x00\"ͪƙ\x00\"חǢ:ƙ\x00\"࡬ƙ\x00\"յƙ\x00\"ؽƙ\x00\"੕ƙ\x00\"ީƙ\x00\"ߦǭǭ\nǪǭߖǙǙ\nǢǙǥƙ\x00\"ИǪ\x00ǭXǢ\x00ǙÞƤǥ\x00\"֩ǥ\x00\"ғǥ\x00\"ࠏǧ*ǚǔ@\"Ɩǰǔ7Ù\"Өă3ǚǚ\nŅǚ|ń\x00Ņ\x00ǚċģ७ǔ;ùFùӾ¹ǔܧ\"ॄ	ǰǬ\x00\"C\"ͽ5ǰ&ǯ˘ǰ\"Ӭ:ǰV¼ǘǥǝǚǝǯ̾	ü\x00\"ॖ\"ݱ½ǬǯŔ	Ǭ\x00Ǡǔ+Øƙ\x00\"	ǚª\"Ɇ(\"૾ń¢Ŵǚƙ\x00\"࣎ǚ\x00ńǧÊ̂MI	ǰÙ\"ࠫ	ǬļLøȄ3ǧǧ\nǚǧ߱ǚ\x00ǧÞéǚ\x00ǧץǬल5ǰ&ǯߥł\x00\"ÝĹùΖǰǬù	\x00\"\"ÉƙǤ\"з\rǬ1ǧ\x00\"૷ǧ\x00\"γùTǔটǚùÿǰǚ\x00\"ˤǬ\x00Ǡǚ\rƙ\x00\"	ƙÞŅ?ǯńŚ+¾ĴùԺ\x00\"ԸģÛ\x00\"Ù\"ߘsࠛ\x00\"૊ģº\x00\"Ù\"қࠬǚ*ǰǛ	Ǭ\x00Ǡǔ+´	Ǭ\x00Ǡǔ+Û3ǚǚ\nƙÓǚǧƙ\x00ǚ$Ƥ\x00ǚëfǧ\x00\"ױǯŷ	ǥ\"΃\"\"Ě\x00\"҇ǚLİ5ǰ&ǯŨǰǔ7Ù\"׃ǚń=ùļǰǔ7Ù\"ӓ	-ǫǔ˶ǡǫࣉ5ǰ&ǯॷ÷ǚӒǧń\x00\"÷,\"ࣙ	-ǚǔϖńĞǧÙǰǤ!ģǚ\x00\"ȉ\"ऴǚ-ǪǪ\'ǪbùƊǬ\x00ǠǪǧ\"ùতǔd\"ԃǢ*ॽńaŤń?űǣǚùɏƙ:/N¯¸$ǚ\x00ńŅ3ǢǢ\nǪǢǪ\x00ǢŲ^ʣ´àHǚǩ݈\rǚ]#ÓMîÓM૮Ëǚǔޥu ǚ	ǰ1ǚù֫tǚMǯݚ	ǰ\x00\"ƫǚǰǧɪǧș	§ďčùˬǧŅ-ǬǔভǬǔd\"ҒǬǔlùॼǚ*Ċńǭ0	ǧ1ƙ\x00\"χ\"á:ń\x00\"৅ń\x00\"ǉń\x00\"ࣴƙĀ\"ʠŝ\x00éǰjǔd\"޲ǘ࢓ńùંùਗ਼ńùूǧ:ÓK$	Ð\"ɄęWǧļǚMǚ?	Ǚ\x00\"`\"ַ5ǰ&ǯग3ǢǢ\nǥǢǨ\x00\"Ɖ\"ҩǥ\x00Ǣơǥ\x00Ǣų\"Ƥ\"˗ëhǧǬ?¹ǰÛ!ģ#º!ģ3ǚ\x00\"Ǳ	ǰVǧŅģǚɡǧǧ\"ùҨǝ\"ĵ-ǧǔ̈́ǧǔd\"ƥǧǔlùैǚ*ǰÜŅ\"יµ5ǰ&ǯƈǬ\x00Ǡǭ1¾\x00\"ը\x00\"ȯ\"ׯ\x00\"ȯ\"ջŦQǚ\x00Ù\"ǔǚ\x00\"݇ǚ\x00\"ǯ\"۵ǚ\x00\"ǯ\"ए\"ǐųÆǧ*ǰǚùwǚŊǚǦǔlùଆǚ\x00\"Lǧ¢\x00\")\"˯\"ɂǬń\x00\"Â\"ƪńǚǠǚǚ\x00\"L¾Ï?µºtŅ	ǧ\x00Ù\"àÉń\x00\"ػ5ǰ&ǯࡻǔԬŗǔ;ùFùͲǰ\x00Ù\"ئ\x00Ù\"؜\'-ǚ\x00\"ƙÙ\"ӟǧǬ\x00Ù\"\"˨ǚǬ\x00Ù\"ۆǚǚǚ\x00\"ί˳ǰ\x00\"߉ǧǚx	ØďÊHǧ\"ùJ	Ǭ\x00Ǡǔ+ÔǚǔزǚǙǚƙ\x00\"ېǫùƶmıǯ˘ǬǕ࣮ǚǚǔؤ	ǔćľ\x00\"׶ƙǫģּ\x00\"Â\"ʰMØùɕ#Zǚń\x00\"ߕń\x00\"ՖǬøǰS!ģǧ\"ù૞ǧ\"ùˋǚƙ\x00\"އǚǔ@\"੬	Ð\"ўäWÒń\x00\"ѿǚǘǬǯڤǧ\"ùTǚƙƤÙ\"ࡍƞÙ\"څƢ:Ù\"ӻÙ\"͔Ù\"ࠝǰ\x00\"ȉǬ\x00ǠǔϪ	ǚ\x00\"¹\"઱	Ï@ǚ\x00\"িǚHǬşÐÙ\"ৢ£ǰ\x00\"६Ǡ0ǚࣞ-ǚ\x00\"`\"ʅƙǚ\x00\"ǆ\"ڥǚ\x00\"ǆ\"͘ǧÙǰùԉǰ\"ަǚǰ\x00\"˓	Ð\"ƒĝWǧÓǔޖ\rǔࢦņ2ńƂùϱŅ2ń?Ċù֥µÛ\x00\"şń\"åŅǔজ\"੷ǔԄïǰËĮǰǚ3ǢǢ\nǞǢǚǕݏǞ\x00ǢύǦϰƙ\x00\"उƙ\x00\"૘\x00\"׳ǔ;ùFù޿ǬŁ\x00\"	\"Շ\"áģń¹ŢǬ\x00ǠǤǯ	ƙ\x00\"`\"Ƹ	Zł\x00\"ÝùާÓ£á\x00Ó£Ψ	ń\x00\"iŅņǬ\x00ǠńǬ\"͜HǧԌ\"Ϙǚń\x00\"Ϣń\x00\"ѻǬǕધǔްń	Ð\"ʪW	Ǭ\x00Ǡǔ{ǨS¾\x00\"ȏɋǚĺ\x00\"	\x00\"٩²ùÃǧHǧ\x00\"Σǧ\x00\"ӹùͫ\x00\"ş$\"ۊǧ\x00\"ݹǚࢳ³ê\x00\"ই\x00Ù\"\"ࠜǔऻ\"ёĬṳ̀Ĭùۙ\x00\"ы\"ࡾǬ*ǰ\x00\"ңƤǠVùĳǔ;ùFù٦Ëƙ\x00\"࢈\"˼\rŅ7­ǧ4ùŖǧ5ǰ&ǯ	ǰǚǚģǧ\"ùƛǘ0ǯď	ǣ\x00\"`\"ߝǯۨǚ\"چ\x00Ù\"ڨǠ1ǧ\x00\"੪ǧڌùTǰéǰǔҀ	Ǭ\x00Ǡǔ+Äǚù³ǬǧѓǧࣆǚPǰǧ	ÄďuH#ǚďöń4ùõǰ\"٭ǚł\x00\"ÝŮùࣷǚĚíùࡅ\"Lǚ\x00\"pùɰ3ǚ\x00\"ƳǰǬǧǚ\x00\"Lǔ࣫[?ǚwܤĬùדƙ߬ǧ\x00\"৙\x00\"৵\x00\"ऐƤ,\"૧ǬҔǬďöǔ@\"ѴǠਜ਼ǧÙǫ±í¢ǫ2Ǭ࡫ǚǔ@\"ࢥǔ@\"ږǔd\"џëǫ\x00\"Ŏǡ&\x00\"ʔ\"άƞǧǡƞ\x00\"ঀŬƞ\x00\"ބƞ\x00\"૔ŜōƢƫŌƫƝŐĸǠ*ǰǘ\"ՂńÅŘÔZǚǧǬǠǫǡ\x00\"੄	Ð\"§ŏ	ǰ\"Ȼčùॕ	ǰ\"Ȼčù̺Îń	Ǭ\x00Ǡǔ+ºǚQń½ŧǚƙ\x00\"η{-ǫ¢ǡÙ\"ϳǟ1ǡÙ\"࣏\"\"ਢƙ\x00\"`\"Ƹƙ\x00\"¡\"ǟ\"ļƙ\x00\"ě\"۫\x00\"\"Éƙǣƙ\x00\"ڻǪǣ\x00\"ޣǢǣ\x00\"ଅǬǬ\nǟÓǬǣ\x00\"¡\"ઑǟ\x00ǬBǪ!ǣ\x00\"ࡶǢ!ǣ\x00\"ઉǫǟ\x00Ǭ̅ǔÒǫ\"݆\x00\"\"ƙĞǭ*ǰǔ7Ù\"Ί	ǰǚǚbùJ	ǚ\x00Ù\"àǰ\x00\"ȋǧbùЦǧܫǧ\"ùйǔמ	ǰǚǚbùǫ@ǧ\x00\"LǠ?ńÈŲ\rǰǚêǚbùǪǚbùʱǚVùĳǔ;ùFùΰǬǧŊǧ\x00\"ΐùTc-ǡĠPʴǡ#ǡǫɯǟĨ\x00\"	ǡǧùा\"ڃǡɸǟŋùΫǤǤ\nǟǤǟ\x00ǤŲ^ʣǣǟ\x00\"cǚǬ?Ǫǟ\x00\"cǬǠ?Ǣǣ\x00ǚ̋ǚǭǪ\x00ǚ̋ǚӇǢ=ùۼǭ=ùࣅǙɯǚǧ%3ǚǚ\nń\x00\"ͷǚǧń\x00\"યǚ$ǧ\x00\"Αǧ\x00\"ۑǧ\x00\"Ҹǧ\x00\"ন	ǚÙ\"Ⱥƙ5ǰ&ǯéǰŅŅ­Ņ?ǧࢶǚń\x00\"৚ń\x00\"هńúńÌ	ǰǬ\x00\"C\"ࣦǬǯঈ½ǧǔͥńǰ³Iģ#³(ùoǚǔ؃ĿùE	Ǭ\x00Ǡǔ+ĩǰddঞǚù̦Ǡǧ\"ùǰǰ÷!ǚޡT!ǚૅ!ǚǄ\"ùT5ǰ&ǯƅ	ǚďńùõ[ǚ\x00\"ˤǰǔ7Ù\"য়ǰǤǯڗ	-ǚ!\"઼ǧ*Ǜǔ@\"ƖǨ0ǚ0ƙƤǰƙǚ#ǧǚ\x00\"ȗǔ7\x00\"Ϩ\"ࢱǬ\x00Ǡ6ǰǚ\x00\"ϞǰǔۺńŔ\rǪÀɓǡǟǤǣÞǰ\x00\"ϕǔ܏Pǚ	ƙ\x00Ù\"àǧ\"ùà̂MË/Š\rǔ@\"ˀń<ëfńव	Ǭ\x00ǟ¾ǧ	Ð\"§ťǪǔ@\"ࡀǔުńǯɿǰǔۋǰǙ	Ǭ\x00Ǡǔ+ǰ³(ùo	Ǭ\x00Ǡǔ{Áǰń\x00\"ਾǧÙ\"ࡐǔো	Ǭ\x00Ǡǣǯ۪ǰ³ǰǣǯݮŅŁ\x00\"	Ņ\"áٵ=-ǬĻǚLİՒǬ֖ùɖǠǬҝǠ!­Ǭ\x00\"pùЗǧKǫkǬ\x00\"cù˖ùϫŀMǫ(ùणǧKǧǬ\x00\"pùΚǡ*Ǭ\x00Ǡw	Ǭ\x00ǠßǙǔ;ùFùীǰਫ਼\x00\"͂\x00\"૗\x00\"פ\"iÙ\"ࢇ3ǬPǬ\nǚ\x00\"ϵ\"ܘǬǧǚ\x00\"ϚǬࠋ\x00\"ѯÌńń#ùɻǘëfƤ\"ৼ\x00\"ЧŞǔ;ùFùבÐÙ\"͟£\rǬ\x00Ǡßǥ\x00\"िǨ?3ǢǢ\nǥǢǝ\x00\"Ɖ\"૽ǥ\x00Ǣơǥ\x00Ǣų\"ƤǚĴÓKá\x00ÓKǧǬǬ\x00Ǡǔߺǔ;ùFù੾ǧǡǧશǡǧݽǡǧݢǡǧિǚǔȝńঊEEऋHMǚ(ùŮS	ǥ\"র\"\"ĚǬ\x00ǠǚǨǚǬ\rǧԒ¢ùআǬհ\"੖ǧÏǯওǚ:\"ő\"ƒ\"Ū\"ƌ\"ʩ\"ˆ\"ʪ\"Ʉ\"Ȳ\"৽	ń(ù۴ùءń	Ǭ\x00ǠǚǰÉ!ń\x00\"૏Ò!ń\x00\"޸Ħ!ń\x00\"ǥǧ\"ù܂ǧǚǫǰ\x00\"Ǟ\x00\"ओǰÉ!ģÒ!ģĦ!ģïS1ǚģ?ǔ;ùFù˴Ŀù^ǚùJǧ7ńùŖŅǧ\"ùܷµġAń\x00\"ҹǬùŖAń\x00\"੅Ǡùδ	ǥ\x00\"ĩ\"ڽǭëǪǯ̲	\x00\"҉\"ȫŵ	ǔć!\x00\"ઞ	ǝ\x00\"ĩ\"ਟǟǠZǰǔۥǰ6!ģńÐũ\r\"˗ǭëhǧǬ?ǯݛǧ\"ùÏǅ-ǚ\x00Ù\"àǬǚ\x00\"Ґǚ\x00\"॓ģĴ\"ùƿĴ\"ùιĴ\"ùרǔ7Ù\"كǔOù৶ĺ\x00\"	ǬÙ\"ɐùæǔOùউǔ7Ù\"եǔOùࠌǔ7Ù\"ঌǔOùуǔ7Ù\"ޅǔ५ǔ7Ù\"੝\x00\"	ǬÙ\"ӧùæǔOùӊǔOùࣺǠ³,ǠSùڏǔ;ù৕Ǡ\'ǠSùࡸ\x00\"ʎ\x00\"Ǹ\x00\"ɞǧǑǔ7Ù\"һǔ7\x00\"ǫÙ\"إǔ;ù࠸ùӕ\x00\"͉ǧԪǚ\x00\"޾Ċùդǔ7Ù\"ܼǔOù۽ĺ\x00\"	ǬÙ\"৬ùņǔOù݂ĺ\x00\"	ǬÙ\"ځùņǔOùֶ\x00\"Մ\x00\"͇\"ਤÙ\"ِ\x00\"ࠑ\x00\"	ǬÙ\"̮ùæǔOùીǔؒ\x00\"Х\x00\"Ȕ\"б\x00\"Ȕ\"ؐ\x00\"Ȍģ\x00\"҃\"Ȍģ«\x00\"ή\x00\"ܰǔOùԮ\x00\"Ǟ\x00\"؎\x00\"Ɔ\"ޛ\x00\"ڣ\x00\"Ɔ\"ࡇ\x00\"Ɔ\"ԼjǑÙ\"ʄ\x00\"Ċ\"ȴǔ;ùɆùԤǔ7Ù\"ࣸǔOùτǔ7Ù\"ϲǔOùڭǔ7Ù\"ঘǔOù঺ĺ\x00\"	ǬÙ\"ɐùņǔOùͼǫ\x00\"ࢨǫǫ\x00\"яǔ;ùסùӜ\x00\"੭ģ&Ĵ\"ù͌ǔੑĴ\"ùْǡ*	ǔć¨\x00\"ࢮZǡí\x00\"¦Hùːǚ\x00\"ЏÙ\"ϑǛǔࢎǧ\"ùÅ¶ǔ࣡ǔߠŅŅ\x00\"L¾ŀȄǧ\"ùؓ	Ǭ\x00Ǡǔ+ǰǚ9Õ	\x00\"\"ƙǬǧ\x00\"Ҡǧ\x00\"־ǧ\x00\"ਵǰǔ7Ù\"ԹÐÙ\"࣭£ǧ\"ùoǔ;ùFùڊń\x00\"ڴń\x00\"৥ńúńÌǤǔσ!\x00\"ॺģ\x00\"পģ\x00\"ݾģ\x00\"ϝ\x00\"֧\"Ȟ\"i\"הń¤Ŏǰń(ùʟǬ\x00Ǡyǰ	Ǭ\x00Ǡǔ{ǙƘ	ǧń\x00\"÷ǚǚƙ\x00\"ঋjPǬ\x00ǟģ\rǬ\x00Ǡǔ+µӴù࢟µǚǛńÒŉǬ\x00\"¯ǠǬ°Ǡ3ņņҡņ\nńÓņ؝ń\x00ņŅˎņǔѱǤ\"ਖ਼¦ǧÂZ	\x00\"ڡ\"ࠅńń¿šǔlù঄íǚͬ\"Lǚ	Ð\"Ū¿W	ǰǬ\x00\"C\"҆ǧǚ\x00\"ࢵ	Ð\"§£ǔ;ùFùܯǬ \"ʜǧÓ£ǰǣǣ\x00\"ȓ%ǣ\x00\"ʓ	Ǭ\x00Ǡǔ+)-Ǭ\x00Ǡǔ̶ùخÉǬ\x00Ǡǔʝù܇ùڶÒǬ\x00Ǡǔʝù૶ùݴĦǧ\"ùय़Ǣ*ؑǰǬnǠǬụ̌ǡ\x00\"Â\"ʰǇ¤<MĆܬùɕǧŅǰ\x00\"ܜ\x00\"૫\x00\"࠹Ǖێǯƅǚǔ׌ǰǘ\"э	Ǭ\x00Ǡǔ+ǫǰ.ǯचǣǔ@\"ʒ	Ð\"ڝĳ3ǢǢ\nǪǢǟǣ\x00\"ƼǪ\x00ǢȖǬǚǞ\"ਛ	Ǭ\x00Ǡßdǰ1Ó (ùٟÓ§(ù঍³#³(ùõǛ¡ǔ;ùFù઎5ǰ&ǯŔ	ƙ\x00\"ěÙ\"ԛ3ǢǢ\nǪǢǟǙ\x00\"ƼǪ\x00ǢȖMíǚ\x00\"݉ģ<ǚ\x00\"تǚ\x00\"ਡģ<ǚ\x00\"ۧǚ\x00\"̎ģ<ǚ\x00\"֞ǚ\x00\"ੌģ<ǚ\x00\"ࡪǚ\x00\"ؔģ<ǚ\x00\"ֲǚ\x00\"νģ<ǚ\x00\"ލǚ\x00\"܊ģ<ǚ\x00\"٠ǚѬģ<ǚংǝ\"ǰǭ!ģǔ߶\rǰ\x00\"࠶\x00Ù\"ߛǚÕ߽Ǭ\x00ǠtǧϧĦń\x00\"ǥǠÓƙǩǕऽǰV¹	Ð\"§ÅW	ǰ§ੂ§\nùoǰǚùӘǚùϏǯ৏	Ǭ\x00Ǡǔ{dƘ	ǰ³³9ùoǔȿ	ǥ\"ߌ\"\"Ě5ǰ&ǯďǬǠǯéńÍőǚ̌ùޟI3ǢǢ\nǥǢǘ\x00\"Ɖ\"ԫǥ\x00Ǣơǥ\x00Ǣų\"Ƥ¾ǚ\x00\"ऌǕؕǚ\x00\"՝ǚ\x00\"Қǚ\x00\"ފ\"ǐř֊ǧ*ńÃūé0ǔÒǧ\"ˬâ	Ǭ\x00Ǡǔ+#ǞŁ\x00\"	Ǟ\"áǜǕω\rǔdńįŅLİ߫¾ǔ͈ǚ1¨\"ॴǧ1¨\"̍Ǭ1¨\"੶ǚǧǬÖǠ*	Ð\"˔ĶWǧ:\"ॱǰ,Ù\"࠷\"ªǚ\x00\"ߍǚ\x00\"؊ĲǬ\x00Ǡ§ǚßńǧ\"ùн	Ð\"ˆĐWǰǙǙ\x00\"ȓ%Ǚ\x00\"ʓǚǜ	ǚǔ@ń4ǧǠǧաǧ\x00\"रùT-Ǖ˶ǚ*ǚÙ\"ࠕ	Ð\"§ŕŰǰ࠲ȥĩȥĮǯ़Ü)Ñ\x00\"ЯŭǚùT	ǪǤ\x00\"\"Ě	ǰǬ\nù؋ǧՁǧǧ\x00\"L¾ǫ?	ǔćÜ\x00\"߄	ǰǬ\x00\"C\"ࠃ	ǘ\x00\"ĩ\"࡜ńœǰǪǯঔIµǰVǝǧǚ\x00ń$e3ǫPǫ\nùJǫ|ǫùܾǧ\x00ǫܥǧ\x00ǫǧ\x00ǫA\"\"ҴǠǠ\nǧ\x00ǫϤǠǧ\x00ǫAǠ\x00\"ɠǧ\x00ǫAǠXùɁ\x00\"ƫǧ\x00ǫAǠٖǧ\x00ǫAǠǡǧ\x00ǫAǠׅù˹ǡǧ\x00ǫAǠࡣùޒǧ\x00ǫǧ\x00ǫٌ3ǠǠ\nǬǠ|ǧ\x00Ǭ\x00Ǡċģǚ̌Ǡŉǔlù¨µÎ\x00\"ȋ-ǧǔ@\"ѵǧǧčùȇǧǔd\"ƥǧƭǚ*ǚ\x00\"pùāǧ0ǔlùāܳZƤ0ǠǕ॰\'-ǚ \x00\"Ņńǧ,Ù\"খń\"Կǧ\x00\"ªǚ©Ņ!ģńŅࡰ.̆Ǭ*ǚƙ\x00\"܌-Ǡ\x00Ù\"ǔ\x00\"ًǠ\x00\"Γ,Ù\"Ԁ\"ªǠ\x00\"ޫ\x00\"ࢅ\x00\"࠼ǬǧĦÙ\"ʄ\x00\"Ċ\"ȴǚ\x00\"ͦ\"ç\"ॉǚ\x00\"Ćǧǚ\x00\"ĜǬ¶\x00\"ࠁ\x00\"ࠥ\"ܓ\x00\"অǬذ\x00\"લ\x00\"ૠ\"ʹÙ\"ݲǬȾǫǧ૚\x00\"ʎ\x00\"Ǹ\x00\"ɞǧķǬࠊǫǬºĿճ\rǚǧēǬùǠùoǰĮǔ;ùFù؇ƙ\x00\"ě\"ӁĢ\"،Ǡª\"ޮĢ\"ਲ਼ń¯śࠆńůǰǚùJ\x00\"਒ŨǰÜń\"xǔ΄	ǧņ\x00\"Lǧ3ǫǫ\nùǫǠ\x00ǫ=ùøǧ\x00ǫ$Ǡ\x00ǫ=ùਜǬ\x00ǫɮǔ؈q-ƙ\"Ηƙh\x00\"Ù\"ઇŒŰƙÙ\"म\x00\"Ù\"ઝŒŰƙÙ\"Ѐ\x00\"Ù\"ӍŒŰƙÙ\";\x00\"Ù\"੼ŒӺѰŒǙV\x00ƙBǙI¤Ù¤Ǚ,¤Ćķ MĆł\x00ƙťģǕѭǚ*q-ǚ\x00\"`\"֚ǚǚ\x00\"ݑǚ\x00\"Ύùŵǚ\x00\"ळù̀ǧǚ\x00\"їǬ\"јǧ\x00\"߹ǧ\x00\"ࡑ\"८ǧ\x00\"Ƅ\"ढǧ\x00\"΍ùƴù˴ǧ\x00\"Ƅ\"ߚǧ\x00\"ʑǬùÔùʱǧ\x00\"Ƅ\"Ќǧ\x00\"ʑǬùŏùߵǠëfǚ\x00\"ۣǔd\"ࡌǠRǠÖǫ*ǧǠǧÏ3ǧǧ\nǚǧÐǚ\x00ǧXQǚǄ	ǧǧƠ\"\"ɜÕǚǔ;ùFùहńùʟ	Ð\"ʩåW	Ǭ\x00Ǡǔ+ÂǯŨǚ,\"ࣤǫǔБń	ǚǔ@\"ɰ5ǰ&ǯ	Ǥ1ǚHùƲùɏǬ\x00ǠÀख़ÕHùƲùʋÕù܋ǟ0	Ǭ\x00Ǡǔ+ǡǟí\x00\"½Hùːǔ;ùFùײǯƈǝ0ǚ:ǔ{o4ǔ{34ǔ{ü4¶$Ǚǔ@\"ऱǬ¢ǚƘǰǔґǬ\x00ǠÀɓĴÞǚ\x00\"֋\"֣\"ٰ/ǚǟƞ\x00\"ÝŪùŮǔࡡǚń\x00\"͢	¹fǚ\"ֵł\x00\"Ý}ùӏǔ;ùFùֺ\rǬ\x00Ǡǔ+í\x00\"ƪŃ?	Ǭ¢ù˿ǠǯћǰùƱ	Ð\"őWǚǧǦǨǩǕǖǪǫƮƯư\rǠǡǂǃǄǥǁǇǘǙǚǛǟƹƴƼ\rƾƿƵ2Ʒƶ\x00ƽ ƺ6ƻƸŎ	JÀ)]«9À?ÀµÀZÀO¢LDÀ©À ¨«VÁÀ l¨«TÁÀ¯6I8\nR«$bÀ +ÁÀªXÀ^o)½«W·M8BA[ÀÀ±ÀS«ÀÀ¾À0À­hqÀ/À{ÀdÀPÀÅH8Y.kÀf\"8N@À#ÀÀÀjÀS)(K«6U<«Q=wg¨p7¡¤\x00¼)=\'&À-«¶À3ÀÀÀ²¨«_«ÀÄ:\\®8,¥Q«yci \\C8,Q;«ÀGn«ÀQ­vÀ4«F}À4«FÀ¯>ÁÀ°E|«ÁÀtÀ¬`¸«§aÀ¿¦%«~³ÀÀÀ5ÀÀÀ°EÃ«ÁÀ£ÀÀ1«§aÀ¿¦%«!³À»mÀ2ÀÂÀºÀuÀs´À8rxÀ«À*e¹z\rÀ\x00Æƙë\"ìëÁ\x00\"Ŏǥ\x00\"܀	ǔd\"ɾëơ?mı	ǔd\"˖ëƨ?Ǩơbù২\x00\"։\"ળǟǙǟ\x00\"ԇǙƙ\x00\"Ǳ#-Ǚǔ@\"࢒Ǚǟ\x00\"¹Ģ\'ǟƇǟ\x00\"߾\"ѸǔÒǟ\x00\"ђ\"ٔǠ*Ǚƙ\x00\"Ƴǡǔǖ\x00Ù\"Ù\"ŶǟǕƹǠƙ0Ǚģ\x00\"`\"જùțùƜǨ\x00\"ڦǡǔǖÙ\"Ⱥ\x00Ù\"àǁ\x00\"®ǁ\x00\"ùƿǙ6ďƮ\x00\"ࣽùŮ	Ǚǔ7Ƥ	Ǩ\x00\"¹\"˼	ǨVǠ#Ǡnù˺Ʈ=ǕuƮॣǨǟǙǕ¸ƯƁƮǕ¸ùѳùɱƮǙ	ǨÜƙ\x00\"ޑ\"ǮǨƨǠëƨ\r-\x00\"૛\"֕ǟ̆Ǡǟ˫ǨơǥëơïƮưóƯưóƯưƂùƑǕuùŒƮǨƮ\x00\"ղ\x00\"࣒E-ǟ঎ǠǠ\nƮǠǥƮ\x00Ǡ$ǡǥ\x00\"ܞǥߗǡǡnùЫǚëfǡ?ǙǙ#ǚ,ƙǚ&ǟκǟŕƙƵǙƙǙǔd\"અƙÆǛ*ǥ\"࠴\rǨÜ\x00Ù\"\"ਘ\"xwсƙĀ\"ìƼǙǕƹƮ5Ǩ&ǧŨǄǂ-!\"ࢧǟǙǟ\x00\"ܺǙǟ\x00\"آǙǟ\x00\"ࢪǙ\"جǟQǧďǨƮ\x00\"̜Ü}Ñǔ঩Ƹǔlùõ	ǨV³«\x00\"֭\rǕuù̈Ǖuù˙ùƑùǘƞ\x00\"লƮƾƹǨƮ\nùTǕuùȈù³ǟwǟ5Ǩ&ǧ	\x00\"\"ƙǠǔ@\"Ľ	ǨVǥ#ǥnù˺ǨǠwǙ\r3ǟPǟ\nƮtǟ&Ǚ ǟ-ŇǙhƮĀ\x00\"	Ǚ²Ǚ~Ʈ\x00Ǚɷ\"ࣾǟƙ\x00\"ԚƮ\x00Ǚ઩ǟ!ģ~ǟ\"ࡘǟSùΟƤǟɊ	ŃďƮ\x00\"ψŇǛhǛࢃÙ\"ऀǛ\x00\"÷Ù\"ؠ\x00ǛAÙ\"ॗƙ࣢ƙǙ#ǟ#Ǡ#\x00Ù\"Ù\"ԔǡǨơbùJ	ǕࡳǟǙ\x00ǙԕǙù³˳ǙV\x00ƙ$ǨǙ(ù਩	ǨÜƙ\x00\"ઋ\"Ǯǧ੊	ǨVǙ#Ǚ͎ùo3ǠǠ\nǙܚǠǟǕȁǟǙ\x00Ǡ̔ǟϻǨǚďǚݷùࣇŃǙŁ\x00\"	Ʈ\"ɜ	ƤƤ݅ÜƻÑ5Ǩ&ǧéǧéǨƮ3ǠǠ\nǟǠǥǟ\x00Ǡ$Ǚઈǥ\x00\"੒ǥ\x00\"ਇǥ\x00\"۳\"४Ǡčùৰ\'3ǠǠ\nǟǠǥǟ\x00Ǡ$ǡ:ǥ\x00\"ұǥ\x00\"̼ǥ\x00\"ǉǥ\x00\"ѧ\"áǙǡQǡÜƶÑ>ıĶǕȁƮƯ©ƯhƮƮƮ\x00\"ƐƯĞǙڳ3ǘǘ\nƢǘ|\x00\"Ċ\"ÕƢ\x00ǘ੺ƙυ5Ǩ&ǧŷÎƞ	ǟǔ7ƞ\rǟǟ\x00\"ԭ,\"ק\"ձǧ݁ù݋íǙǟǥ$5Ǩ&ǧƈ\"੣\x00\"शƵƮ\x00\"ચǧʘǔ١ǥǔ@\"̯\r-ǙąƮøਝǙĸǟ*ǔɘ¸ǟƙ\x00\"˨ƯùƜǨǙI¤Ǩ\x00\"ઘ\x00\"޼Ù\"Ŷ5Ǩ&ǧďûıƮ	ǁ\x00\"`\"̟॑\rïǕĭùʯǕ¸ùŒǕॵùw MĆƙĀ\"ìƷƙƮ\rǨĺ\x00\"	Ʈ\"ࣖùÃ3ǙǙ\nƙǙǟƙ\x00Ǚ$ǟºǙǟǠǨӳǕ¸ƮࢽǕ¸Ʈ2ù¨ïƮưóƯưóƯưƂùƑǕuùāǟƙ\x00\"۱ƙƙ<ƙƷǔɘ¸ÜƴùĽǨǙĴ\"ùƛǕĭùʯǕ¸ùŒǕ੫ǧơǔʬǟ#լǙǙ\nƤÓǙǟƙ\x00Ǚ$Ǡëfǟ\x00\"ोƤ\x00ǙťǠ.ӑǥ*¤ǙǕڹƮǕĭùʊùJƤZǨ¤ǠPǇPǁƬƙǃ0\x00\"کƽ\rǨĺ\x00\"	Ʈ\"سùÃ5Ǩ&ǧʘ	ǁ\x00\"ޗ\"̛ǧɿưù³	ǨV³«\x00\"ԣǧ	ǨƤ(ù׉Ǚ	ǨVǟ#ƙ\x00ǟ$Ǚƙ\x00\"؟ńր\x00ǠǕuù̈Ǖuù˙ùTǙ0Áǟ\x00\"ѫù͖ƙë\"ʠǠǨƨbùƯùTùгǨǟĶƮ\x00ƯॳǙԠÜñÑ5Ǩ&ǧ\x00\"`\"ԝùțùƜĆǨƨbùJǙƮùǘĶ:ĸǙ*ǙƤ\x00\"ΉƮ4ǟǙ<ǙપƮƯ=ư	\x00\"\"Éǁ3ǟǟ\nǙǟǠǙ\x00ǟ$ǥƙ\x00\"৾ǠƤǠǕÒǥQ	ƝƮ\x00\"ઊ\"ਕǚ\x00Ù\"\"Ź\"÷,Ù\"Гǧॎ\x00\"ͨƺǕĭùʊùÿƮùɱǧƅ	Ǩǥ\x00Ù\"Ŷń̑ƮPăǙǕuùȈùJǨӮƨǔʬǟǙ¸MńǸǷǹǺǖǗǻǼǈǉǊǯǧǋ\x00< #$	**\n(\r*&\"\'+!*\x00%)*\x00,ǃǯ	ǧ&\x00\"ȦǃÁZǹǁăǯ\x00\"ʿǉǸǯǄƬ\"֟Á\x00\"ƫÁ૬ÁƫÁǔߙǈǸা\rǹ৷\"ם\"į\"ӆ\"į\"ݻښǂ\x00ǈ$\r-ǔd\"ƥǈǔlùݗǧ*ǧǉ	Ǆ\x00\"`\"ঽǂ\x00ǧǊ5ǹ&Ǹéǯ\x00\"ߨǈǹƞ\x00\"߷ǧ\x00\"ઢǋǧŁ\x00\"	ƞ\x00\"̥ƙë\"ìëÁ\x00\"ŎǹƢ\nùܮơƨ	Ǆ\x00\"¡\"ઓ\"࢘ǧ؉Ǉ੮\"ੰH\"ࢯǃ0ǹǧǄƬ\"Դ&\x00\"ȦǯǸŔ¹ǔռǯ\x00\"Ѻǧ	ǁ\x00\"®ǁ\x00\"ોǔॐ\"ٯ¹ƙƤģǧ	ǁ\x00\"Ɠ\"ǁǹVǄƢZǧǂ\x00ǈ$5ǹ&Ǹ	\x00\"Ċ\"ÉǄǙǘǚǛǗ\x00ǜǝǎ\x00\x00\x00\x00ăǙǙ͋ǚĺ\x00\"	ǎ\"۬Ɲǎ5ǚ&Ǚ';
(function(){var _$d_=16,_$06=[[13,9,12,13,12,1,14,10,11,10,15,4,3,1,7,6,1],[7,62,30,102,67,85,45,34,33,70,90,114,96,35,115,114,38,51,49,114,26,1,104,82,11,72,108,52,94,113,81,76,10,100,86,25,38,98,118,86,79,87,107,28,39,85,40,75,101,102,56,86,66,4,59,92,12,8,29,65,86,9,73,86,85,114,55,50,101,78,22,31,114,3,78,114,83,21,102,57,107,89,88,113,114,17,18,14,47,63,44,18,84,106,80,71,51,41,5,95,69,97,75,111,106,13,9,74,103,107,68,53,43,114,25,6,18,44,49,36,37,6,9,87,49,113,97,94,27,48,31,107,24,3,90,20,61,26,43,7,0,101,111,37,5,25,24,22,65,55,1,91,7,106,40,84,29,10,10,6,108,95,110,59,115,60,10,85,20,73,102,11,43,56,24,41],[27,22,27,22,20,14,0,29,21,11,30,8,9,19,28,30,41,1,23,1,2,24,3,7,0,18,15,31,15,7,15,13,7,3,32,15,12,15,28,25,17,10,30],[0,1,14,19,35,28,30,34,9,47,9,7,0,12,13,37,58,26,51,12,38,27,46,36,13,44,35,25,49,17,20,21,30,43,5,43,1,2,25,42,4,2,45,30,23,29,29,17,5,30,10,17,51,33,0,41,32,39,11,23,17,9,33,29,11,46,48,16,24],[24,22,28,1,35,39,29,39,13,29,8,12,22,5,3,37,30,38,45,37,24,33,17,11,10,26,5,40,2,10,31,36,26,42,4,43,0,25,9,19,21,20,10,14,43,33,25,22,40,41,17,7,8,30,16]];function _$2X(_$vb){var _$iZ=_$vb.length;var _$qE,_$7O=new _$xW(_$iZ-1),_$o0=_$vb.charCodeAt(0)-97;for(var _$Vq=0,_$d_=1;_$d_<_$iZ; ++_$d_){_$qE=_$vb.charCodeAt(_$d_);if(_$qE>=40&&_$qE<92){_$qE+=_$o0;if(_$qE>=92)_$qE=_$qE-52;}else if(_$qE>=97&&_$qE<127){_$qE+=_$o0;if(_$qE>=127)_$qE=_$qE-30;}_$7O[_$Vq++ ]=_$qE;}return _$yd.apply(null,_$7O);}function _$Qf(_$vb){var _$iZ=_$yd(96);var _$qE=_$2X(_$vb).split(_$iZ);for(var _$7O=0;_$7O<_$qE.length;_$7O++ ){_$Ib.push(Number(_$qE[_$7O]));}}function _$9u(_$vb){var _$iZ=_$yd(96);_$zd=_$2X(_$vb).split(_$iZ);}function _$iZ(_$vb,_$qy){return _$RH[_$zd[34]].abs(_$vb)%_$qy;}function _$Lu(_$ej){_$ej[12]=_$Kq(_$ej);_$f8(_$ej);var _$NR=_$yS();var _$NR=_$ej[_$iZ(_$Mw()+_$Pe(),16)];var _$NR=_$9P()-_$ej[_$iZ(_$IB(),16)];_$$S(_$ej);return _$Nl(_$ej);}function _$Kq(_$ej){var _$x$=_$zO();var _$x$=_$Mw();var _$x$=_$fx();var _$lV=_$qU();var _$x$=_$IB();_$ej[_$iZ(_$zO(),16)]=_$Mw();_$if(_$ej);return _$af(_$ej);}function _$zO(){return 7}function _$Mw(){return 13}function _$fx(){return 14}function _$qU(){return 12}function _$IB(){return 8}function _$if(_$ej){_$ej[9]=_$KL();var _$NR=_$IB();var _$lV=_$cI();_$ej[4]=_$Oh();var _$lV=_$fx();return _$qU();}function _$KL(){return 15}function _$cI(){return 6}function _$Oh(){return 2}function _$af(_$ej){var _$NR=_$zO();var _$NR=_$Mw();var _$x$=_$fx();var _$lV=_$qU();var _$NR=_$IB();return _$cI();}function _$f8(_$ej){var _$x$=_$VQ();var _$NR=_$ej[_$iZ(_$qU(),16)];_$Ho(_$ej);_$Ko(_$ej);return _$m_(_$ej);}function _$VQ(){return 9}function _$Ho(_$ej){var _$NR=_$zO();var _$x$=_$Mw();var _$x$=_$fx();var _$NR=_$qU();_$ej[_$iZ(_$oW(),16)]=_$yS();return _$ej[_$iZ(_$2E(),16)];}function _$oW(){return 11}function _$yS(){return 1}function _$2E(){return 4}function _$Ko(_$ej){var _$x$=_$gU();if(_$VQ()){var _$lV=_$IB();}var _$NR=_$VQ();var _$x$=_$KL();_$O9(_$ej);if(_$Oh()){_$ej[0]=_$fx();}if(_$yS()){_$ej[7]=_$Mw();}return _$ej[_$iZ(_$qU(),16)];}function _$gU(){return 10}function _$O9(_$ej){_$ej[_$iZ(_$IB(),16)]=_$cI();_$ej[4]=_$Oh();var _$lV=_$KL();var _$lV=_$9P();_$ej[11]=_$yS();return _$zO();}function _$9P(){return 5}function _$m_(_$ej){var _$x$=_$fx();if(_$yS()){_$ej[7]=_$Mw();}var _$NR=_$yS();var _$x$=_$zO();_$fX(_$ej);return _$ej[_$iZ(_$qU(),16)];}function _$fX(_$ej){_$ej[_$iZ(_$GJ(),16)]=_$fx();_$ej[_$iZ(_$9P(),16)]=_$oW();_$ej[1]=_$zO();_$ej[13]=_$Pe();return _$VQ();}function _$GJ(){return 0}function _$Pe(){return 3}function _$$S(_$ej){_$N2(_$ej);var _$NR=_$oW();var _$x$=_$yS();_$ej[7]=_$Mw();_$ej[3]=_$VQ();_$ej[15]=_$9P();_$ej[_$iZ(_$yS()+_$zO(),16)]=_$T6(_$ej);return _$l7(_$ej);}function _$N2(_$ej){_$xY(_$ej);_$RV(_$ej);_$O$(_$ej);_$ej[15]=_$9P();var _$NR=_$cI();var _$NR=_$2E();return _$01(_$ej);}function _$xY(_$ej){_$ej[_$iZ(_$fx(),16)]=_$qU();_$ej[_$iZ(_$oW(),16)]=_$yS();var _$NR=_$Oh();var _$lV=_$GJ();_$ej[14]=_$qU();return _$gU();}function _$RV(_$ej){var _$NR=_$Mw();var _$x$=_$Pe();_$ej[9]=_$KL();var _$x$=_$oW();return _$yS();}function _$O$(_$ej){var _$lV=_$GJ();var _$x$=_$fx();_$ej[12]=_$gU();_$ej[_$iZ(_$yS(),16)]=_$zO();_$ej[13]=_$Pe();return _$VQ();}function _$01(_$ej){var _$x$=_$KL();var _$x$=_$9P();var _$NR=_$cI();var _$lV=_$2E();var _$x$=_$GJ();return _$fx();}function _$T6(_$ej){_$ej[0]=_$fx();_$ej[12]=_$gU();_$ej[8]=_$cI();return _$2E();}function _$l7(_$ej){_$0P(_$ej);_$zM(_$ej);_$ej[_$iZ(_$yS(),16)]=_$zO();var _$x$=_$GJ();var _$lV=_$fx();return _$9P()+_$oW();}function _$0P(_$ej){_$ej[14]=_$qU();_$ej[10]=_$IB();_$ej[_$iZ(_$zO(),16)]=_$Mw();return _$Pe();}function _$zM(_$ej){_$ej[15]=_$9P();_$ej[11]=_$yS();_$ej[7]=_$Mw();var _$x$=_$fx();var _$lV=_$qU();return _$gU();}function _$Nl(_$ej){_$ej[_$iZ(_$Mw(),16)]=_$ej[_$iZ(_$GJ(),16)];_$ej[14]=_$9P()+_$oW();var _$x$=_$Mw();var _$NR=_$ej[_$iZ(_$GJ(),16)];_$1G(_$ej);_$ej[3]=_$VQ();return _$ej[_$iZ(_$9P()+_$oW(),16)];}function _$1G(_$ej){var _$NR=_$oW();var _$NR=_$yS();_$82(_$ej);if(_$gU()){_$ej[8]=_$cI();}if(_$fx()){_$ej[12]=_$gU();}return _$Mw();}function _$82(_$ej){var _$lV=_$GJ();var _$lV=_$fx();var _$lV=_$gU();_$ej[8]=_$cI();var _$x$=_$Pe();var _$x$=_$VQ();return _$KL();}var _$BI,_$yd,_$Nk,_$zd,_$RH,_$Ib,_$Lu,_$ub,_$8_,_$tV,_$Mj,_$xW;var _$6J,_$o0,_$7O=_$d_,_$qr=_$06[0];while(1){_$o0=_$qr[_$7O++];if(90>93-_$o0&&8>_$o0){if(455===_$o0*91){_$6J= !_$Mj;}else if(4===_$o0){_$zd=[],_$Ib=[],_$yd=String.fromCharCode;}else if(52*_$o0===312){_$jU(0);}else{return;}}else if(_$o0*31<124){if(119===_$o0*119){_$jU(134);_$7O=0;}else if(0===_$o0){_$Qf('rSQX`Z`Sgssss`UXY`TSUW`TY`W`TYV[W`YXXVY`TSS`YW`U`WS(Y');}else if(1*_$o0===2){if( !_$6J)_$7O+=1;}else{_$Mj=_$RH[_$zd[5]]={};}}else if(_$o0*93>651&&-15*_$o0>-180){if(207===_$o0*23){_$Nk=[_$Ib[6],_$Ib[5],_$Ib[10],_$Ib[3],_$Ib[4],_$Ib[12],_$Ib[7],_$Ib[8]];}else if(8===_$o0){_$xW=Array;}else if(128*_$o0===1280){_$9u('jtzcjz ~{S`4`iveyfd`zmvc`0//.++-`$_kj`t`W`Tr`jlwjki`ODC?kkgIzhlzjk`tzcjzr`{lexk~fezmvcSTrRevk~mzxfyz]t`xvcc`]28iivpYgifkfkpgzYglj}YvggcpS`|zkK~dz`D~xifjf{kYODC?KKG`R\\i\\e\\j]`x}vi:fyz8k`izvypJkvkz`fgze`TST2`jzey`~{S`wizvb2`1`S{lexk~feSTrmvi `R`izgcvxz`kfJki~e|`zozxJxi~gk`4$_kjYjxaW`n}~czS(Tr`izjgfejzKzok`Dvk}`mvi `4$_kjYvzw~2`jxi~gkj`xvjz `Wvi|ldzekjT2izklie `jgc~k`{lexk~fe `lej}~{k`feizvypjkvkzx}ve|z`8xk~mzOFwazxk`vzw~`|`{ifd:}vi:fyz`2`jn~kx}S`3`S`VV]2`{cffi`STrmvi `YvggcpSk}~jW');}else{_$7O+=-5;}}else{if(1508===_$o0*116){_$7O+=5;}else if(12===_$o0){_$RH=window,_$tV=String,_$xW=Array,_$8_=document,_$BI=Date;}else{_$Mj=_$RH[_$zd[5]];}}}function _$jU(_$lV,_$vb){function _$Z5(){return _$HL[_$zd[18]](_$27++ );}var _$o0,_$qr,_$ej,_$qE,_$Qb,_$HL,_$27,_$3q,_$5T,_$Gg,_$NQ,_$iM,_$iZ,_$Qf,_$9u,_$d_,_$7O,_$6J,_$Vq;var _$NR,_$zO,_$x$=_$lV,_$Mw=_$06[1];while(1){_$zO=_$Mw[_$x$++];if(-4*_$zO>-256){if(_$zO*70>2170&&-116*_$zO>-5568){if(_$zO*57>2223&&-107*_$zO>-4708){if(9*_$zO===387){return 14;}else if(-42<_$zO-82&&_$zO-38<4){_$6J=_$Z5();}else if(5166===_$zO*123){_$8b(0);}else{_$vb._$AL="_$KL";}}else if(-121*_$zO<-4235&&18<58-_$zO){if(57*_$zO===2223){var _$qE=_$jU(66);}else if(17<_$zO-19&&_$zO-99<-61){return _$vb[_$jU(148,_$jU(139))];}else if(1026===_$zO*27){var _$d_=_$Z5();}else{_$vb[0]=_$jU(147);}}else if(18>49-_$zO&&36>_$zO){if(97*_$zO===3395){_$x$+=11;}else if(-91<_$zO-123&&_$zO-94<-60){for(_$iZ=0,_$qE=0;_$qE<_$7O;_$qE+=_$Ib[11]){_$o0[_$iZ++ ]=_$Vq+_$vb[_$zd[9]](_$qE,_$Ib[11]);}}else if(1088===_$zO*32){_$vb._$fX="_$n8";}else{_$iZ+="rp06pOjU8bLqP0iZQf9ud_7O6JVqo0qrejqEQblVx$NRKqzOMwfxqUIBifKLcIOhaff8VQHooWyS2EKogUO99Pm_fXGJPe$SN2xYRV";}}else{if(9*_$zO===423){var _$iZ='';}else if(-55<_$zO-99&&_$zO-87<-41){_$vb._$C1="_$2_";}else if(3864===_$zO*84){_$vb._$d_="_$l7";}else{if(_$jU(150)){_$vb[_$jU(148,_$jU(138))]=_$jU(139);}}}}else if(-1*_$zO<-15&&92<124-_$zO){if(_$zO*56>1288&&-112*_$zO>-3136){if(49*_$zO===1323){_$iZ+="O$01T6l70PzMNl1G822_1P_njb$er_dYcSDpeSa65ymX_sCuTmi2AAVDQE0xSZTGld9zbYTiS4Yz$zr5n9vNk1zTkD0llsM$0e1s6";}else if(-82<_$zO-106&&_$zO-59<-33){return 10;}else if(2964===_$zO*114){for(_$ej=0;_$ej<_$06.length;_$ej++){_$qr=_$06[_$ej];for(_$qE=0;_$qE<_$qr.length;_$qE++){_$qr[_$qE]^=_$o0[Math.abs(_$qE)%16];}}return;}else{var _$NQ=_$Mj[_$zd[45]]=[];}}else if(-61*_$zO<-1159&&32<56-_$zO){if(31*_$zO===713){_$NR=_$RH[_$zd[30]];}else if(-33<_$zO-53&&_$zO-11<11){_$vb._$0x=21;}else if(1276===_$zO*58){return 9;}else{for(_$ej=0;_$ej<16;_$ej++)_$o0[_$ej]=1;}}else if(61>76-_$zO&&20>_$zO){if(21*_$zO===399){_$vb._$Vs="_$cI";}else if(-12<_$zO-28&&_$zO-111<-93){return 1;}else if(1440===_$zO*80){_$vb[13]=_$jU(163);}else{_$vb._$K6=53;}}else{if(17*_$zO===527){_$NR=_$Mj[_$zd[4]];}else if(-84<_$zO-112&&_$zO-39<-9){var _$3q=_$Z5();}else if(1950===_$zO*65){return 0;}else{var _$9u=_$Qb.join('');}}}else if(16>_$zO){if(_$zO*17>119&&-114*_$zO>-1368){if(20*_$zO===220){var _$qr=_$jU(10);}else if(3<_$zO-5&&_$zO-40<-30){_$Qb.push(_$zd[21]);}else if(1210===_$zO*121){_$iZ+="0ZQAnw2U_zXSRZ1MYYP0CLJ2$XM0s$QIlYqWNaBpfW7VhCRcyYDnZYhrZ_oQToUvQWutm8sce3c4_pTL7l_S_OusRbrr2xPBfh1iG";}else{_$vb._$fx="_$cz";}}else if(-6*_$zO<-18&&72<80-_$zO){if(80*_$zO===560){return 15;}else if(-61<_$zO-65&&_$zO-6<0){var _$Qb=[];}else if(342===_$zO*57){return 7;}else{_$vb._$1s="aHfaxc4976q";}}else if(4>_$zO){if(27*_$zO===81){_$Mj[_$zd[4]]=_$ub;}else if(-107<_$zO-107&&_$zO-74<-72){return 0;}else if(6===_$zO*3){_$NR=_$vb===undefined||_$vb==="";}else{_$iZ+="la$SSabpyl8Vr$uCzuIUbHr8nrBbEaQasJx2PTldfVsSyP9qOilzhM1VCMl6zC12e$3cz_pGqB6T$AL5tbDiqaOF4K6VElHl6QQYQbn";}}else{if(72*_$zO===1080){_$vb._$aQ=2;}else if(-83<_$zO-95&&_$zO-69<-55){for(_$ej=0;_$ej<_$6J;_$ej++ ){_$Qb.push(_$zd[6]);}}else if(938===_$zO*67){_$Mj._$0l=_$jU(16);}else{_$vb._$FY="_$7K";}}}else{if(_$zO*105>5775&&-9*_$zO>-540){if(35*_$zO===2065){return 2;}else if(-68<_$zO-124&&_$zO-75<-17){_$iM=_$HL[_$zd[9]](_$27,_$Qf)[_$zd[40]](_$tV[_$zd[47]](1));}else if(2320===_$zO*40){_$vb._$k1="_$r_";}else{_$iZ=_$RH[_$zd[30]](_$vb);}}else if(-39*_$zO<-1989&&-38<18-_$zO){if(7*_$zO===385){return 8;}else if(-45<_$zO-97&&_$zO-98<-44){_$iZ+="DjkywZcXUEIwiC55bqkNAf8S_CTfhjiWdbYY93zxzJf0LD5ocqYFex15BSBkniCH7nChgOuyNrXxnhopmkNCKcG0bcgtPzMLn6_EbmVzYaMhdr1UDb";}else if(5562===_$zO*103){var _$iZ=_$RH[_$zd[3]][_$zd[29]]();}else{_$vb._$1m="_$MM";}}else if(62>109-_$zO&&52>_$zO){if(85*_$zO===4335){_$iZ=_$iZ[_$zd[28]](RegExp(_$zd[17],_$zd[46]),"");}else if(17<_$zO-31&&_$zO-100<-50){if(_$jU(149)){_$vb[6]=_$jU(115);}}else if(3050===_$zO*61){_$iZ+="sv2XBIydNkzdRHIbLuub8_tVMjxWvbqyZ5qMHL273q5TGgNQiMgik$2W90bNnJshZR8mc$ottLE5Zf6x_5cKPYX0qP_JXA7jIAXj";}else{_$x$+=-11;}}else{if(37*_$zO===2331){_$jU(85,_$Mj);}else if(-41<_$zO-101&&_$zO-68<-6){_$jU(116,_$o0);}else if(3162===_$zO*51){_$vb._$Gq="_$AA";}else{var _$6J=_$Z5();}}}}else{if(_$zO*114>10830&&-128*_$zO>-14336){if(_$zO*34>3502&&-74*_$zO>-7992){if(83*_$zO===8881){_$vb._$S4=188;}else if(84<_$zO-20&&_$zO-10<96){_$vb._$nW="_$Rd";}else if(2438===_$zO*23){var _$5T=_$Z5();}else{_$vb._$zP="_$a$";}}else if(-13*_$zO<-1287&&-95<9-_$zO){if(111*_$zO===11433){if( !_$NR)_$x$+=2;}else if(52<_$zO-48&&_$zO-30<72){var _$Gg=_$Mj._$0l;}else if(12036===_$zO*118){_$vb._$90="_$qO";}else{_$NR=_$iZ!==_$zd[12];}}else if(-43>52-_$zO&&100>_$zO){if(76*_$zO===7524){var _$7O=_$HL.length;}else if(83<_$zO-13&&_$zO-88<10){var _$iZ,_$qE,_$7O=_$vb.length,_$o0=new _$xW(_$7O/_$Ib[11]),_$Vq='_$';}else if(9408===_$zO*96){_$x$+=2;}else{_$vb._$DL="u1QQ0UmOD1G";}}else{if(125*_$zO===13875){_$iZ+="ZtVUKFcaMXn8zPTyDLAWndnW1mFYdPCVTofDnUK8iwlw$JCo09XtgfHYk__QKgwS1fEz0otXwItgv2x_p1mOBDi6UhtU$d_zxkHFBjv";}else if(14<_$zO-94&&_$zO-44<66){_$iZ+="xeG_u3TSBaNSkoc5JPOp$9e4j4T3VKWTP2Z368XBlRIxcUcjDL4kT7d8TAoZc52$iSaTOvfBE_ALjjEJw626Yq2jqdjLcj7_Zq9HP";}else if(7260===_$zO*66){_$vb._$X0="WaVr0gkGwyZW.9AGkBR3iG";}else{_$NR=_$6J>0;}}}else if(-41*_$zO<-3239&&9<105-_$zO){if(_$zO*125>10875&&-59*_$zO>-5428){if(67*_$zO===6097){return new _$BI()[_$zd[15]]();}else if(11<_$zO-77&&_$zO-70<20){_$iZ=_$qE[_$zd[13]](_$RH,_$vb);}else if(9990===_$zO*111){_$o0=[];}else{_$qE=_$RH[_$zd[3]];}}else if(-33*_$zO<-2739&&-31<57-_$zO){if(94*_$zO===8178){}else if(44<_$zO-40&&_$zO-53<33){_$vb._$TG="_$ls";}else if(10234===_$zO*119){var _$Vq=_$Z5();}else{_$x$+=1;}}else if(-43>36-_$zO&&84>_$zO){if(126*_$zO===10458){_$iZ+="0SpR$onF__RIEC5w3C_5i99x0V68eAD47tO30Yi$yq_xKs$BAKbzeOEA0YEWkYg76Jad13lfwDqlYxUqo2VGrTNwJH_u8xgK4OGvHc";}else if(45<_$zO-35&&_$zO-47<35){_$vb._$82="_$VU";}else if(6560===_$zO*80){var _$iZ;}else{var _$iZ=_$jU(10);}}else{if(17*_$zO===1615){return _$jU(12,_$iZ);}else if(27<_$zO-65&&_$zO-90<4){for(_$ej=0;_$ej<_$6J;_$ej++ ){_$8b(16,_$ej,_$Qb);}}else if(10998===_$zO*117){_$vb._$$3="BC6GptcADia";}else{_$Mj._$as=_$jU(10)-_$iZ;}}}else if(-25>38-_$zO&&80>_$zO){if(_$zO*111>7881&&-38*_$zO>-2888){if(126*_$zO===9450){_$vb._$dP="_$H6";}else if(-54<_$zO-126&&_$zO-43<31){_$iZ+="EnkOblKTOYUX_DMEAHj9Tvhf0VK9slhC9HdJKyLT2H7vlhXL2xbvUGIXXe28nSyPGarPhF7EcNmBEqQzcHHm4GGHDWdUN5NFkC2Yp";}else if(1998===_$zO*27){var _$Qf=_$Z5()*_$Ib[2]+_$Z5();}else{_$jU(73,_$9u);}}else if(-82*_$zO<-5494&&-4<68-_$zO){if(27*_$zO===1917){_$x$+=10;}else if(10<_$zO-58&&_$zO-64<6){_$vb._$8n="_$$e";}else if(5250===_$zO*75){_$vb._$Dp="_$aO";}else{_$vb._$nd="bd.MGDeXmj3bUlleD8c8b7";}}else if(-56>7-_$zO&&68>_$zO){if(103*_$zO===6901){_$27+=_$Qf;}else if(19<_$zO-45&&_$zO-52<14){return Math.abs(arguments[1]) % 16;}else if(1716===_$zO*26){_$jU(30);}else{_$Mj._$uI=_$jU(10)-_$iZ;}}else{if(104*_$zO===8216){if( !_$NR)_$x$+=1;}else if(27<_$zO-49&&_$zO-85<-7){var _$HL=_$Mj[_$zd[4]];}else if(7332===_$zO*94){var _$o0=_$Z5();}else{_$vb._$Cz=_$Lu;}}}else{if(26*_$zO===2990){return;}else if(71<_$zO-41&&_$zO-42<72){var _$27=0;}else if(3534===_$zO*31){return _$o0;}else{return _$iZ;}}}}function _$8b(_$d_,_$gi,_$k$){function _$2W(){var _$Vq=[0];Array.prototype.push.apply(_$Vq,arguments);return _$Lq.apply(this,_$Vq);}var _$ZR,_$8m,_$c$,_$ot,_$tL,_$E5,_$Zf,_$6x,_$_5,_$cK,_$iZ,_$Qf,_$9u,_$bN,_$nJ,_$sh;var _$6J,_$o0,_$7O=_$d_,_$qr=_$06[2];while(1){_$o0=_$qr[_$7O++];if(93>108-_$o0&&32>_$o0){if(79>102-_$o0&&28>_$o0){if(1175===_$o0*47){var _$tL=_$Z5();}else if(24===_$o0){var _$nJ=[];}else if(37*_$o0===962){var _$Zf=_$Z5();}else{var _$iZ=_$Z5();}}else if(19<_$o0&&_$o0*112<2688){if(357===_$o0*17){_$6J=_$iZ;}else if(20===_$o0){_$bN[_$zd[43]]=_$2W;}else if(123*_$o0===2706){var _$iZ=_$Qf>1?_$8_[_$zd[37]][_$Qf-_$Ib[11]].src:_$ub;}else{_$7O+=16;}}else if(_$o0*17>255&&-26*_$o0>-520){if(1411===_$o0*83){for(_$9u=0;_$9u<_$Qf;_$9u++ ){_$iZ[_$9u]=_$Z5();}}else if(16===_$o0){for(_$9u=0;_$9u<_$iZ;_$9u++ ){_$nJ[_$9u]=_$8b(11);}}else if(9*_$o0===162){var _$Qf=_$8_[_$zd[37]].length;}else{var _$6x=_$Z5();}}else{if(2291===_$o0*79){return _$iZ;}else if(28===_$o0){_$bN[_$zd[20]]('GET',_$iZ,false);}else if(64*_$o0===1920){var _$E5=_$8b(11);}else{return;}}}else if(_$o0*90<1440){if(116>123-_$o0&&12>_$o0){if(342===_$o0*38){var _$Qf=_$Z5();}else if(8===_$o0){var _$iZ=new _$xW(_$Qf);}else if(47*_$o0===470){_$bN[_$zd[22]]();}else{_$Lq(7,_$k$);}}else if(3<_$o0&&_$o0*5<40){if(270===_$o0*54){var _$ot=_$8b(11);}else if(4===_$o0){var _$sh=_$Z5();}else if(71*_$o0===426){var _$8m=_$Z5();}else{_$bN=_$RH[_$zd[44]]?new _$RH[_$zd[44]](_$zd[16]):new _$RH[_$zd[10]]();}}else if(-69*_$o0>-276){if(12===_$o0*12){var _$_5=_$Z5();}else if(0===_$o0){_$7O+=-16;}else if(9*_$o0===18){var _$Qf=_$8b(11);}else{var _$c$=_$Z5();}}else{if(52===_$o0*4){var _$cK=_$8b(11);}else if(12===_$o0){var _$ZR=_$8b(11);}else if(98*_$o0===1372){}else{if( !_$6J)_$7O+=4;}}}else{if(198===_$o0*6){_$NQ[_$gi]=_$Qf;}else{var _$bN=_$Z5();}}}function _$Lq(_$9u,_$PY){var _$iZ,_$Qf,_$qP,_$_J;var _$7O,_$Vq,_$d_=_$9u,_$o0=_$06[3];while(1){_$Vq=_$o0[_$d_++];if(26>57-_$Vq&&48>_$Vq){if(-2>37-_$Vq&&44>_$Vq){if(820===_$Vq*20){_$PY.push(_$Gg[_$sh]);}else if(40===_$Vq){_$PY.push("];");}else if(97*_$Vq===4074){_$d_+=-25;}else{for(_$Qf=1;_$Qf<_$ot.length;_$Qf++ ){_$PY.push(_$zd[7]);_$PY.push(_$Gg[_$ot[_$Qf]]);}}}else if(35<_$Vq&&_$Vq*2<80){if(1739===_$Vq*47){_$PY.push(_$zd[51]);}else if(36===_$Vq){_$PY.push("=0,");}else if(94*_$Vq===3572){if( !_$7O)_$d_+=10;}else{_$d_+=8;}}else if(_$Vq*38>1178&&-41*_$Vq>-1476){if(2013===_$Vq*61){_$7O=_$nJ.length;}else if(32===_$Vq){_$PY.push(_$zd[27]);}else if(1*_$Vq===34){if( !_$7O)_$d_+=1;}else{var _$Qf,_$qP=_$Ib[6];}}else{if(3465===_$Vq*77){_$7O=_$E5.length;}else if(44===_$Vq){_$PY.push(_$Gg[_$c$]);}else if(112*_$Vq===5152){_$7O=_$ot.length;}else{_$_J=_$nJ.length;}}}else if(15<_$Vq&&_$Vq*109<3488){if(46>69-_$Vq&&28>_$Vq){if(1375===_$Vq*55){return;}else if(24===_$Vq){for(_$Qf=0;_$Qf<_$E5.length;_$Qf++ ){_$PY.push(_$zd[7]);_$PY.push(_$Gg[_$E5[_$Qf]]);}}else if(17*_$Vq===442){_$PY.push(_$zd[41]);}else{_$PY.push(_$zd[31]);}}else if(19<_$Vq&&_$Vq*65<1560){if(1218===_$Vq*58){for(_$Qf=0;_$Qf<_$ZR.length;_$Qf+=_$Ib[11]){if(_$Ib[0]<Math[_$zd[2]]()){_$iZ.push([_$ZR[_$Qf],_$ZR[_$Qf+1]]);}else{_$iZ[_$zd[42]]([_$ZR[_$Qf],_$ZR[_$Qf+1]]);}}}else if(20===_$Vq){for(_$Qf=0;_$Qf<_$iZ.length;_$Qf++ ){_$P0(0,_$iZ[_$Qf][0],_$iZ[_$Qf][1],_$PY);}}else if(126*_$Vq===2772){_$PY.push(_$Gg[_$_5]);}else{_$P0(48);}}else if(_$Vq*8>120&&-127*_$Vq>-2540){if(119===_$Vq*7){_$PY.push(_$zd[6]);}else if(16===_$Vq){_$PY.push(_$zd[1]);}else if(50*_$Vq===900){_$7O=_$Mj[_$zd[4]];}else{var _$iZ=[];}}else{if(3625===_$Vq*125){_$jU(30);}else if(28===_$Vq){_$PY.push(_$Gg[_$bN]);}else if(119*_$Vq===3570){_$PY.push(_$Gg[_$ot[0]]);}else{_$PY.push(_$zd[7]);}}}else if(-58*_$Vq>-928){if(11>18-_$Vq&&12>_$Vq){if(189===_$Vq*21){_$7O=_$bN[_$zd[19]]==_$Ib[6];}else if(8===_$Vq){_$d_+=25;}else if(60*_$Vq===600){_$PY.push(_$zd[32]);}else{_$PY.push(_$Gg[_$6x]);}}else if(3<_$Vq&&_$Vq*7<56){if(605===_$Vq*121){_$PY.push(_$zd[48]);}else if(4===_$Vq){var _$_J=0;}else if(6*_$Vq===36){_$7O=_$gi==0;}else{_$PY.push(_$gi);}}else if(-23*_$Vq>-92){if(42===_$Vq*42){if( !_$7O)_$d_+=8;}else if(0===_$Vq){if( !_$7O)_$d_+=4;}else if(66*_$Vq===132){_$PY.push(_$zd[52]);}else{_$PY.push(_$zd[35]);}}else{if(1651===_$Vq*127){_$PY.push(_$zd[36]);}else if(12===_$Vq){_$PY.push(_$Gg[_$Zf]);}else if(27*_$Vq===378){_$PY.push(_$zd[26]);}else{_$jU(73,_$bN[_$zd[33]]);}}}else{if(1715===_$Vq*35){_$P0(13,0,_$nJ.length);}else if(48===_$Vq){_$PY.push(_$zd[8]);}else if(114*_$Vq===5700){_$PY.push(_$Gg[_$3q]);}else{_$PY.push(_$Gg[_$5T]);}}}function _$P0(_$qE,_$XA,_$7j,_$IA){var _$o0,_$qr,_$ej,_$iZ,_$Qf,_$9u,_$d_,_$7O,_$6J,_$Vq;var _$lV,_$NR,_$Qb=_$qE,_$Kq=_$06[4];while(1){_$NR=_$Kq[_$Qb++];if(100<116-_$NR){if(-99*_$NR<-693&&55<67-_$NR){if(-56<_$NR-63&&_$NR-123<-114){_$7O=_$d_[0];}else if(729===_$NR*81){if( !_$lV)_$Qb+=1;}else if(10===_$NR){if( !_$lV)_$Qb+=15;}else{_$ej=_$zd[23];}}else if(98>101-_$NR&&8>_$NR){if(-60<_$NR-63&&_$NR-109<-104){for(_$iZ=0;_$iZ<_$o0;_$iZ++ ){_$d_[_$iZ]=_$XA+_$iZ;}}else if(545===_$NR*109){for(_$iZ=0;_$iZ<_$o0-1;_$iZ++ ){if(_$iZ==_$Vq){_$qr=_$7j;if(_$XA>1&&_$6J%_$Ib[11]==0){_$qr=_$XA-1;}_$PY.push(_$ej);_$PY.push(_$Gg[_$_5]);_$PY.push(_$9u);_$PY.push(_$qr);_$PY.push(_$zd[8]);_$P0(2,_$6J%_$_J);_$ej=_$zd[0];}_$PY.push(_$ej);_$PY.push(_$Gg[_$_5]);_$PY.push(_$9u);_$PY.push(_$d_[_$iZ]);_$PY.push(_$zd[8]);_$P0(2,_$d_[_$iZ]);_$ej=_$zd[0];}}else if(6===_$NR){_$lV=_$cK.length!=_$iZ;}else{var _$iZ,_$ej,_$Qf,_$o0=_$7j-_$XA;}}else if(_$NR*122<488){if(_$NR-3<-2){var _$ej=_$iZ.length;}else if(18===_$NR*18){_$P0(2,_$d_[_$iZ]);}else if(2===_$NR){_$lV=_$o0==0;}else{_$iZ=_$6J%_$o0;}}else{if(-117<_$NR-128&&_$NR-98<-85){for(_$Qf=0;_$Qf<_$ej;_$Qf+=_$Ib[11]){_$PY.push(_$iM[_$iZ[_$Qf]]);_$PY.push(_$Gg[_$iZ[_$Qf+1]]);}}else if(104===_$NR*8){_$PY.push(_$iM[_$iZ[_$ej]]);}else if(14===_$NR){_$Qb+=8;}else{for(;_$XA+_$Qf<_$7j;_$XA+=_$Qf){_$PY.push(_$ej);_$PY.push(_$Gg[_$_5]);_$PY.push(_$zd[50]);_$PY.push(_$XA+_$Qf);_$PY.push(_$zd[8]);_$P0(13,_$XA,_$XA+_$Qf);_$ej=_$zd[0];}}}}else if(60>75-_$NR&&32>_$NR){if(-25*_$NR<-575&&78<106-_$NR){if(-92<_$NR-115&&_$NR-72<-47){_$PY.push(_$zd[6]);}else if(1975===_$NR*79){_$P0(2,_$XA);}else if(26===_$NR){_$lV=_$iZ.length!=_$ej;}else{_$d_=[];}}else if(65>84-_$NR&&24>_$NR){if(-22<_$NR-41&&_$NR-90<-69){for(_$iZ=1;_$iZ<_$Ib[1];_$iZ++ ){if(_$o0<=_$Nk[_$iZ]){_$Qf=_$Nk[_$iZ-1];break;}}}else if(1512===_$NR*72){}else if(22===_$NR){_$lV=_$o0<=_$qP;}else{return;}}else if(15<_$NR&&_$NR*7<140){if(3<_$NR-12&&_$NR-110<-93){for(_$ej=0;_$ej<_$iZ;_$ej+=_$Ib[11]){_$PY.push(_$iM[_$cK[_$ej]]);_$PY.push(_$Gg[_$cK[_$ej+1]]);}}else if(1666===_$NR*98){_$IA.push([_$zd[41],_$Gg[_$XA],_$zd[54],_$Gg[_$tL],"=[",_$7j,_$zd[14],_$Gg[_$tL],_$zd[39],_$Gg[_$8m],_$zd[55],_$Gg[_$tL],");}"].join(''));}else if(18===_$NR){_$Qf=0;}else{_$9u="===";}}else{if(10<_$NR-17&&_$NR-52<-23){_$Qb+=-4;}else if(1972===_$NR*68){var _$iZ=_$nJ[_$XA];}else if(30===_$NR){_$d_[0]=_$d_[_$iZ];}else{_$PY.push(_$iM[_$cK[_$iZ]]);}}}else{if(-53*_$NR<-2067&&75<119-_$NR){if(-49<_$NR-88&&_$NR-107<-66){_$iZ-=_$iZ%_$Ib[11];}else if(492===_$NR*12){_$6J=Math[_$zd[53]]((Math[_$zd[2]]()*_$Ib[9])+1);}else if(42===_$NR){_$PY.push(_$zd[11]);}else{_$Vq=_$6J%_$qP;}}else if(-24>11-_$NR&&40>_$NR){if(20<_$NR-15&&_$NR-35<2){if( !_$lV)_$Qb+=2;}else if(1258===_$NR*34){_$d_[_$iZ]=_$7O;}else if(38===_$NR){_$Qb+=2;}else{_$Qb+=29;}}else if(31<_$NR&&_$NR*79<2844){if(-23<_$NR-54&&_$NR-56<-23){_$Qb+=25;}else if(2739===_$NR*83){var _$iZ=_$cK.length;}else if(34===_$NR){_$ej-=_$ej%_$Ib[11];}else{_$P0(13,_$XA,_$7j);}}else{_$lV=_$o0==1;}}}}}}}})()

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


