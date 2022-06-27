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