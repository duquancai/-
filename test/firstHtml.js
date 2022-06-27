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
metaDom.content='{qc64q.Rn7HUSJQUYV1smrqoTaLRfYLc9rKITJyElQdQp3cUa9~REOwSUKNppmSKUf2w1V3sQDr0wapUw2Ex1pwVcr9kmumOQ07KmvJ4kDLQlkNfir993axqh23DVKNvJpEop1qFxf9kMprpW0Wu8CmBiVVzsfyVkS9nlqTjrVQDlTfoYmVCDOYjqp9BlY9KilAlKPyBioljF2zK16V_8rqFHbqfAnwqpvNmDPLRHvYhppyicCeE8npUpDutRBJCgU.7DX2p6pvKRBxU52OfVZf4y916V4zo59umAeN6Zb.FktLF.rKfmjqWdYDOsBSv.bMaFdTpTKdZkt3FbrKYmNAWnYDIwzxJ_KshmJSLdf.NDQezg2OHwzy1yKOMmENpCfXowZx96p.n1H7hadsZlrfVLm.l4608r0.S14gVNExWa1fL.6EogNf8QTqMfPrVEzef4jt16EPBfWqqqqqqqqlALNzADAJdQURNxDS63vSdD988744qr0hFVnEqA1RvlEr7qqqqqqqqqqi8gpJBli0s4eWBar0Qp.zSP6tmwEzuOU5WQHwnZUdaQdwuhwjMNvAXtTrBk674r4r0q!x7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipaqqqqqqc64I8.TY4rHYDemY9S5Gctl14kXGktAVNpZr1|osmqUtCyvHbAQJsZQhnqLxaGT3OW43c2XIO3eIv3DEP7GWCqiiA0GsPEKEqfGcu9tEl7Po1qm3qAyrnqS3lZthcETIAVqoA9q3PEvsq0DrpEKDa7dM9WUmk9UEmqPccq13rly4cczEBQG4Ckji89GjPhnEiApNK4PiQ9YdvU4wQqiXc.QcI9PdS4yiZ3Jz6MJEXEGeDk6iI3GznhNEHmGZkvuEEaPTcki3W0ynckgW3LP0PkllFWYtRmnQ7cekaOhtPbAl_Mmit1083179040r0VRKNVUmrwYTYQUTpMUYe1q| M6SsmAlJDGNHcSMac.SJ_GMvc5lrN0dBc4NJTukbq83q_GBsWteHgq4PcjTJdmuPiIGO0GM2EZaD5GkaDiGg6svUDigf.Avzt_QNuSI3KBEJ_a.Bt8qKyasGiXeKauOQiWV6aOjVkNyMeY6PkWQOScickJ33OcoVKX0W0GvBt3g95k4HKZ9_OPMzihAfO1nTc4Ah9S8.Exw3jOFco3fROGjSEIGWLr66cjVx9PP9m3GOvqc7r49NvncZDhNw9ucAWhlid95.k.EFX2hcAF7mjSPjYN3D2PP8thrMXr.QmFl2P961qqqqqq';

$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.scj=[];$_ts['9887446']='ʺöʳʴΰᅙἷ[=(,.;===);){[2]](){var <[0]].=0;;var ;}function );}function =this.);if(){this.&&var ]=++ ){+.push(){if(();=new =0,].)++ ]=.length;for(var );}}function ;this.(){var +=&||.length;);var !==;if();}return ();return ==){return ];();var [135],)this.++ ){var ;}}function <=!=);return >=>[8]]([6]](?);this.=[>>|=(){[0]][=[],=(){}=1;),(357,=[];];if([0],*()[-try{ instanceof );}else if(for()){;function ][)return if( !(){return [66]]((163,,true);));;}>>>;return (173,(),);}return ){case (this.(338,;}return >0){()-[7]]==);}else{(){if([102],[38];[38],();if([15]](();switch(:);}var )&&/);}if(){if( ![116]:;}else{[77];[87]);=0;var ;}var [16]](],[212];(171,= !(953,[1],[4]+++ ]=([77],++ ;){if(this.=[];this.[26],;}else if(<<;}if();}});break;case ,false);)){var [30]);var );for(var ++ ){if(.length;if(){if( typeof && ![223]]^;}}else if(](.length,[43]][();return new .length===[12]](^[9]]([70]]((352,);if( !&&([9]](0,=true;[1]+[48],[23]]();}catch([73]);}function || ! in [29]]([3],.length>,0,[0].());)===){for(var ));}function [28]](();case [141];[92]);this.; ++]===();}[83]],={};[38]){[58]](++ );[152],=\'\';var );function [21]][,1);.join([131]){);}}}function (231,(new )+){}function ;for([89]](){return;}();}function [37]);}function ))return [1];[1][[24])(355,:case ];}function .length-.length<=0;if([68])][[78],[6]+[72]]=[53]](={},={};this.=[];for(var [0];[3]],[40]](=true,[46]]);if([0]]=new );}}return [135]){;}catch([141]&.y-++ ];[166]&[94]);===0){[25]+.length;var =false;();break;case =[];var .length-1;.push(new [95]]((){}function ,0);)){if(=null;var )){return );}this.=1;var %[18]]([38]);+=1;[4],[3]]=[38]||.join(\'\');}function [49],[166];[456]][]);}if(=0;while(=0;for(var ||([75]]=[44],[26]](+=2;.x-.x*)||([4]);if([101];);}if(this..abs(.y*[141])&=(([131])[90]){();}return [0];var ){}}function [94]);this..length; ++.length/[17]);++ )],[74];[131]||[19]][ ++[212],[83]]=){try{var [27]]=this[(226,try{if([131];){return(){try{if([135];[5])];var [60]](()){[0]);)return;);}}catch(,0);}function [92]);var [2]](this,();}else{[38]);if([71]&&+=3;;while(=false;var (910,());var ;}else{return .sqrt(([(.y);[39])&[39]^[77]){.x)+();while([7]]===[77]||[141]){){}}}function [131]);var [150]){);return new [1];var [1]);[166])&.length>1){[2];;){;}}catch(];}if(===null||]|)/[81]]([32]&&[134],[134];[7]])===());}function ];}}function [617],[380]](= typeof ];if( !]);;for(var .max(,1,[307]]=){return;}var [68])];[45]+>0;[42]]=[345],){try{[50]);.length>=[3];var [223]]<<[75]][[184];=[];while(,1);if(++ ;}else{[63],+=1;};}}.x,.length!==[15]](this.return[++ )[141],[77]);[11])[0],.get([141]^.length==++ );if([97]]=;}for(return(return;[206]][[98]]=[500]](=null;this.(707,[3];=true;}if(.set(.length);[777]](]]!==[216]);[141]&&[91]][[80]]=;this[-=[37]););if( !(+=5;)|0;[739]))!==1,[6]*[2]);[2],),[this.]]=;if( ![93]){]+):))[216];[0]===(){this.(236,[3]){var [71]){[64],;if( typeof [540],[765]]=[27]];if(.length>0){[7]]&&();}}function [45]:[430]]([27]]===);case ,1);}return [0]+[0][[39]]^[94]);}function [56]){);}}else if(&& typeof ]);if([82]][+1)%)*()||[730]]=[42]][[43]]=[176],[38]:[38]+[280])];():[5]){return ());}[175],[76]]===1){return [77])+[160])<<++ ;}if(]?\": \"+[401]](.push(arguments[[43]],[95]]){):\'\';}else if(();}}++ );while([215]:());case [41]);=this[[5];[677]);.y)/([84]);(0))[229]);var [840]){[33]]+);}else{return ];}else if([38]&&;}}if([27]]=[26]]=[(([93],.x+<this.]);}}}function .length<=[205],++ ]<<=false;}function [225],(this);}}function [1];}[663],);for([61]];[31]]()));try{return +1];[34]][]^=[1])[1];if(();}if([19]*);}}else{var +=13;]&&[179]]<[135])<<[142]);[141])|);}else{if([65]][[322]][[166])|(){this[[46]])===));}else if([94]){+=9;]:\"\")+\" )\")[]=((){return this.<arguments.length;);}}}[25],:if([4];var [62],[21],;(]!==+=7;,0)===.length)===){return[[629]](+=4;[86],[56]);];}return )&&(.length-1,[2]){,false,[38]){var [16]](null,);}else if(();}}var );return;}var [284]]&&());if([31]];var [284]]){}else{[26];[56]){if([166]){];}}catch([862]]=[872]][[63]&&[72]];[2])){while(){}return false;}function [38]];[38]]([39]]===[1]&&===1){[645],[45]);this.]&)*)%)&[77]]=,arguments[2]);}else if(,\'rel\',[67]][[0]);}else if([43]]){[187]),,\'as\',);}if( ![49]){var [197]){if([454]+()){if(+=1;if(){if((for(var [612]]=[170],,this.));if([38])+.length>0)[158]]([69]+this.[113]]);}++ )];return -1;[173]:[55],;}else{var -- ;if((){return new .length;while([141]){}else{var [22],();function ){switch(>0||(7,[833]]=[48]]=]=\"\";[373]](>0&&(\"try\");[7]],,true);}function [40]](([459]]();return;}else if(=false;else [482]]){,0);function [3]){.length+[3]);[44]]=]);}}.src=[728])===);}}}catch([220],[637]]=[77];}[697]&&<<1^([885]);[33],[31]]()[[158]:[730]]([60]){return [637]][[494]);[232];var +1]&[10],[4]&&[62]){if(+=39;[217],)){for(var [714]][[655])in [38]*()*[46]]);[61]]=this[(363,[157]){[2]](this.[35]){]));}[595]);[16]](this,arguments);}function [75]]){)>>1);[660]]([98]]){[388],;case [14],[171]:>1)[89]](0,[366])&&[124];[86]],[4]){(\"for\");[684]]===++ )];if([145]||[4]),.y)));if([151],=arguments[1];var .z;[94]+[62])){if([97]]);[160])-[134])&[117],[1]);var +([32]);for(var [1])[0]+)return false;return );}else{var [79]]+[135];while([3])||(;default:if([143];[196]:[4];for(.push(\'; \');));}if([76]]!==1|| ![416]&&[235],[64])){var ){}try{]])!==[9]^[130]){[56])&&(=[new )return new [77]]);}}else{[375]){return .top){[73]);var [1]);if([1])!==[96]),\"\");[22]);var +\" <\"+[7]]){case [435]](++ );}[77]]);}}else if([20],[671]){return [65]]||)]=(this,this.+1;}else if(=0;function [166]^[292]];[99]]);if([834]][-1;else if()][[130],[48]){var .ctl;if([83]]&&+1];var [62]]===());}catch(]>>>[625]];=this;var +=([181]);[131])||,0);if( !){}else{if([100]][[10]<=[11])&&-- ;var [56])&&;try{!==\'\'||(){return[[109])&[562]][,true);}catch([2];var [32]){return [95]||;}for(var [14]);[5])){return [97]]!=null){.length;}else{(12,[142]*([189]][()));=true;}catch(;}}}}if([100]]=[82]];var (){if( !this.|| typeof [25]);for(var [39])|([63]){var );else [0]=]);}}function ,arguments[2]);}}else if(]!=?1:[83]]){[79],[48]){[38]){if(){return;}if([63]){[131]){if([32],]=1;[48]);[63]);[134])-[5]){return[];}var .y;[108]][[60],[11])[0];var [108]]=(\"if\");=1;if([221]][[77];var (1,1);(923,[ --[31],[84],){}if([49]]()===false&&[45]);if(-- ){(830,[604]];=0;}function [34]];if(([90]);if(this.[44]){[220])/(){if( ![220])|([141])+[64];var [24]){[443],-(()>1){[131],; --();}}else if(;if(this.=true;var [15]][[56]){var [712]]=[320]][[253]);[320]]=[627],;}if(this.[873]];var [506]];[10]&&[94])([487]]([[206]],());return [320]]){[69]);return new [27]];if( !>0){for(var [65],[49]);[5])return [872]]===arguments[1]){[64]&&[69]+[188]);if([0]instanceof [60]);var [98]][!==null&&[709]]([11];[135]]^[10]]([496],=false;this.[73]);if(this.[885],){try{return [498]],+1]<<[135])]))&++ ;break;}if(>=0;[707]][[25];}else{,arguments[2],arguments[3]);}else if((709,[77]^((([[49]]&&[463]],[223]]]^,1);}function (this,[99]]===arguments[0]&&++ );if( ![143]][[1]);case [5]|| typeof [129]](=null,[15]);var !==\'\'){[46]],(\"new\");this.[13],[13];[131]);if([713],[419],[265]],[867]]((1,;}break;case [51]==);}else{this.[330],[135])*[135]),));}}else if([337]](===1||[79]]===.length%[199]){return [281])){-1;}else if([616],];while([80]],);}}}else if((24,[205];=\'\';if(,arguments[2]);var [690]]){=true;}}}function <0){[54]);[77]);}[476]]&& ![203]]||[688]]!==[442]+[64]){return 1;);}return;}else if([1]);}function .x&&,arguments[0],[93];,\'();\',[128]);[247],[68])];var [291]]===[57];}return new [397];if(-1; ++[1])+[140],[38];}var [223];[690]][[227],[108]]){];}[690]]=){return[0,0];}[433]];[196],[289]]([631];}else{[166]);[192],[95]]=[95]][()&&[148]&&++ )]*[637]]){[5]){arguments[0]=[36]],[73]);.x);+=15;[160];var [872]]=[85]||[128]);return new [70],[68])];if([466],,0);var (\"var\");var ];function [2]^++ ])&[232]){this.(251);[76]]&&[54]]==[741],[54])<<[21]]){));})){return true;}return false;}function [38];}else if([216],[0]);if(;}}}else if([166])+[479]]([745]]);[145];[228]));();if( !)===false&&[48]||[87])+);return;}if([36]]=+1);var ;};function [533]][.length];}function [616])){if([0]);}if([531]],+=14;[19]]=]<[365]]([45]);var [16]]([],();}}}function [46]])return;var [83]]);if((={};if([96]))+[38]]=()||[757]](,true,arguments);}function =null;if([47]:+=8;[38])){return\"\";}}var ++ ){if( typeof([543]]=()+[0];}[88];[131])return[[77])|([82]],[87])||([11])[1];var [533]]&&[28]:[166]);if([304])&&,true),[63])&&;}}else{[226],[220];return [75]);[39]]<<[869],[11]),[735]]([836]]&&[212];}return =0;this.[35]).y))*[199]);if([38],( ++);try{[189]],[2]]&&(this);}function [56])){]);}else if([209],[0];if());var ++ );}while([174]]()>=0;}function ]]){[746]]([11]+,1);}catch()!==true){[77])){if(;}}var [75]]!==[847]),(201)&&&& !this.[212],([2];if( typeof -- ){if([84]);var [85]]=[194]||[145],++ ;}else if([448]);[722]&&[85]][[126],[458]])){[4]||this.[448],[785]];}if( ![132]);[144]]()<<[206],[135]){return;}]++ ;}||0;if([152]]();}function ]){!=null){[185];.length-1];(131,[266],[76]]===[45],));return [142],[122]);[101]),.push(\" \"+-1+[9]](0);[11])return([80]){return new [528],[806]]&&[311],[487]](=1;}}}if(++ ;}}}[825]]&&([216])*[117]|| typeof [459]]((+=11;[18];^=[10]){[135]?[146]]([135]:[788],[72],[29]:[837]]===0){[550]];[61]]=[745]]&&[0]^[31]]=,this);[518],[232];[607]+[449]]====false;}[24])){var [82],=null;if( !this.[55]];var [268]][[227]],\'`\');var [745]]([7]]=[116],+1;[100]]){[63])){[99]]=arguments[0];[228]){[163]&&.pop();if([881]](){return false;}}function [82]]===[48]);if( !(1);[669]][[235]],[870]](=\'\';[16]){ ++[520]];={};var [842]&&).split(,0);if([842])[142]);}if([57]);}function =false,[128]||[181],[1]);if( !(;switch(){return[([169]){[5]){var [142];[280])in [406]],.push(this.)|(;}}for(var [485],();}if( ![634]](.length>1){var [796]];|=1<<[220]:[220];[220]-[300]+new );this[[694]]=[147],[157]));[33]],[77]]);}else if((false);=String.fromCharCode;var [770]]=[696]];var [8]){[705]]=[77]){return (953,1);[769]).length===0){[787]]()));]=\'b[\'+[224]+===\'\')))&&[843]||[207];}else{[123];()));}function [11];var [876]]);}else if([874]]||[467]),\'\');}function [77])&&!==null&&( typeof =false;}}while([33];[759]);(\'g--`+,*`+*`01+*220.`[*(,0`*r?@=>;<23`20`*r0?>3?<;+`*r~2`*r+*+`.2`+,2`//`.*30`*r}*`12`3,`3+`,*+`+*,.`-*****`01`*r01./,-*+`,-`*r+*+*+**`31`++`--//..-,`./`+*,`[.`-0*`+-+*1,`*r=->,?+@*`3.`/,.,22`/-`23`,`,.`*r+~`+0/`20.*****`*r@@**`+++`.-`,/3,***`+,.`+0-2.`/,`*r32<;>=@?`+3`1-`/*`*r-@`/.`*r~}`+****`+*+`,*-`2+`+*-`[+2*`[*(3`-****`.,`*r+*+*+*+`*(+`02`*r*@`2-220*2`3-`*r1@@`*r{*`32`+**(*`*(-/`.`---1/0/32.`-+`+2*`*r+*-,/.10`,+`0-`2,`+,/`00`+,,`*r2@+<<=>=`+/**`/+`0*`*r~~`-/`,**`,0`*r*1~~~~~~`3*`[*(,`[*(*+`/0`,/0`+-.,+11,2`*r?><22-,*`*r~`(2+-,0./.-`2*`*(/`2-`*r+********`*r1~`*r@?`*r11-/3.**`+*****`*r~*`+1`0+`-0`[3*`*r+@@@@@`*r~{`1-30`-*`0//-0`,0,+..`(3`+-`+,`2/`*r?@`13`[+`+***`+0111,+0`/`-`*r/;`1/0*`*r@@@@@@`/-021*3+,`+2`2`+**`+*1-1.+2,.`,,`-,`,02.-/./0`*r/;2,1333`*ryy`.1`2+3,`*r-@@@`3`/****`*r+***+`*r,03}{-`0.-0+/`,***`10`,3`+/`*r=;0,=+>0`/***`0/`*r,>`/..*`+0`,+.1.2-0.2`.0`+,0`1+`..`(,0`-2`*(2`/1`*r.<`.*30*`*r-|-~`*(*+`*r2*`,*`-.`-,102`*r~~~~~~~~`*r@@@@`*r?*`*r@@@@@@@@`+.`0//-/`*r**+~~~~~`1,`/3`*r-~`/2`*(0`.*`2.`*r3?-113<3`,1`(.`+**+`[+**`,*.2`+,-`-1`1/`/+,`+,1`03`.+`-3`*r@@`,2`++**`0,`1`*r-=`33`22`0`*r*@@@@@@@`,****`,//`,2-`+*.2/10`1*`1.`,/`11`.3`(,`0.\');var [14];[266]);if(this.[210]])];}else{return[[208])[160]);[38];}if(.length;){if([193])<<[43]];[165]]([50],(201)){[566],=[\'top\',=true;break;}}}){}return\"\";}function [548],[],[556]]||[720]];var [73]);if([131]){var [5]&&(];}}return (897);[38]^[370]].length>=1){[198]]([753]+[37],[842];[13];var [127])|(([10]:[549]][.length-1)&&([230]);[364]];))){if();if(this..y;if([51]);else if([0]++ ;}else if(=true;}}}catch([148]])){return ());}}[31]]()==+=62;[32]);[190])&[11])){);}}}if([48]);if([625]]!==[490]]();else .push){=true;}}return [157]]||[532]),[55]){return [77]:)){return\"\";}for(var [827]),[226],\"==\");}default:return =true;}}else{[76]]===1&& typeof [107]){return 1;}else if([751];var [718]];());}return new ())[741]||[77]-++ ;}}[303]))();[17])[180]&&[490]])return [38]];if((,\"*/\",[30],[17];[17]:[369],[1]);for(var [567];[501],[180]);for(;}}}}function [55])){[454]);}case [51]:[615],);}break;case [633]),[27]];if(this[[175]};var [128]));break;case [99];}if(:0))/[81]]);[46]]){[104])<<[73];[288])];[211]:return .length);return [38]]){var [63])){if([24]){return [6]){if([707]]&&[344])>1;[140]);[485]],[53]){[38]);var !==\"js\"){];for([3]];}}if([86]));if([222];[43]]);}}else if([339]))){);else return new ++ ;}}return [741]);[447]](1));}function [669]]&& !+=-39;[0]<<[130]){do{[171]+[39]))){return =\"\";}return >=0){var [524]);[413]]){[880]]){return [212]?+1]^=<127){[79];var [868]]={});var [53]),(838);){}else if([663]);if( !<arguments.length; ++.length-1)===[580]]&&[743])||[683]][()){this.[594]),(614);[682]]()[[142];}}else{if([473]));[206]:if([671]){[38]]){return [286],[441],[216]-1)?0:[715]]);[84]);}case [0])+[249]]=[39]]===\'\'||[159]],[4]);[4])>;return;}var .pop();}}function [294]];this[=false;do{[90])||[120]))!==[1]);}else if([809]];[162])!==));}return -- ;+=527;[38]];}return[0,0];}function [440]]));if([301]]);=[arguments[1],arguments[2],arguments[3]];-1)+(){if(this.[505]&&[692],[1]);}return [775]),]();(212);[651]]){[706],)));continue;}if([203];]()*[453];[152]<=;break;}}return[[132]];}catch([659]);if([218]){if([132],[208];[134]);.length>0&& typeof [663],\'\');}}catch([141]);}function (arguments[0]);}}function [479]){if([724]]([80]];}function [0]].push){[73]);for(var [38]===0)return [777]&& !(.length==0)return [38]+1]=[731],>>>1)):([868]]||([32]){if( typeof +1));}}function [117]:=1;}}if(( !.push){if(this.(false,true));}function )===false){return [782]));[130]);if( !(664);.url)[1];var (1,0),[134]){[207]];if());}var .length>1){return([574]);if( !(=\"\";}}function (0,\"\",0,0,0,true));}function [802]]([135];for(!==\'\'){if(=1;}[836]][[152]){var .pop();[571]);var [107]]&&:false};}function [844]);}[436]]||[97]]);}function [49]){[447]],(\'</(\'+[797]]([3]===[94])||[];}}return[];}function [36]);(975));var [371];}else{(54);}catch([15]](0,=this;try{var [26]][[97],[399]](new [677]);if( ![134];}}catch([276]]:\'\',-1);var [69])<<[213];[363]]=[216])&&( typeof ===null){[44]];this[[618]];[81]){return ,{},[666]]){+=27;(\" \");}function [648]][[112];[28]===[240]];[768];[317];var [36]){]);}catch([37]);default:if([239],[446]],===\"++\"||this.[3]=([45];var +=-532;[2]=([582]),]];}}}function [598]))));return true;}return;}}return =false;;var [808])){for(var [19]]){[1][0]===[805]]){if([326],[818],.x!=);return true;}}else if([167]in ].length;[103]],0,[27]];try{[209],\">=\");case [135],0,0,0,0,[215]:if([546],[77]));[329]||((125,[84]||this.[517]];for(var [10],\'true\':!=true)){, --[215],[32]);var [551]], !1,0,0););}continue;}if());}else{[439]);}case >=97&&;switch(arguments.length){case 0:[552]]==== ! !([512]);if([494],[799]),([([0]=(,\" \");if([168]&& ![336]]!==;}try{if( typeof ++ );}while(([191],\"--\",[152]]()/[571]);this.[35]&& !([640]]))){return;}){return false;}}].join(\'\');if([208]){[152]]();[211]:[452]);if( !;}if( typeof [813],[259]]].join([4]);}[109]])/=unescape,+=532;[101]][={};;;;;;;var [232]){return .length){var [226],\"!==\");default:return [153],[59]];}catch(]=\'c[\'+,true);}else if([0][1]){[107]);}function [617])&&[9];[208]);){}}}return false;}function [10];)){return;}if( ![650]]===0){[63])&& typeof [209]]||[428]]([38]);continue;}}[62]]();return;}}function [67]]){try{[77]];}else{(653);[13]);return [581]]&&[12]](\"_$\")>0;if( !.join(\'\');}[601]]||[271]+[576]in [232])));};}break;default:break;}[739]))!==[1]=[35]))){return null;}var [16]||[211]){++ ;}}}return [856]]===[291]])));}}catch(];return[[170]:if(=false;}if(this[[384])){[145]);return [5],[39]]]^[40];[48]);var [492]]();var [252])]){=this;function [118]+[211]);[118],[236]);if([752]))();return ![351],[83],>>>1));}[7]]);switch([135]);}if([60]],<<1)^[83]:++ ]^[48];[131];}for(var [134]&&=this;.charCodeAt(===\'img\'||);return\"\";}try{var ])<<(],0);[729]];[227]);if(,false,arguments);}function [729]]=[614]&&[152]]()-.y+[42]]=null;[24];[2]);if(+=50;[5])||([756]](=0;}}function [10]&& typeof arguments[2]===[24],||( ![166]!==0)[128]]-[96]),\"\\n\"),[375],);return\"\";}var [33]];[38])&&([4],0,0,[723]];else{return (false,false));;[1])[1];if( ![100],\'function\':));function +=35;)){return;}if(+=1;switch([379],[168]:[226],\"===\");default:return );}}else{](arguments[0]);break;case &&(this.[53]],[77]);return [158],[168],[181]){[45]===[520]]!==[536],[604]]);[52]]==0){[22]],[23]],[1]);}}else{.day!===true;}return [579]||;}return false;}function [570]),.length),1);else [715]][(582,[294]],[47]]){var try{if( !([2])+[64]){var [371];[240]][[605]+(904);.x=====true){var (\"set\");[15]](1,[34]];if(])===(){return ![496]);=window,[398])&&[677],[402]&& ![188]);}}catch([108]);[437]&&[175]:case :\'\';if([1]){return;}var [83],\'with\':[342]]||(){this[[60];var ++ ;}}}function [695]];if( !);}if( !this.[254]){[204]);[321]+(\"any\"!==[183];}catch([182]);(),new [130];=[];}[346]]!=null)[182]),[398],[210],\'try\':[433]]=[24]);default:return [34]];[1];try{if(+1)];}function [559]+.length){case 0:return [795]+[714]]&&[298]]([178]]([38]));}var [298]],=0;try{.length-1];return -- ;}}else if();return false;}[762]][-30;}[627]]+[265],arguments);}function [685],[685]+[594]));}catch(){return false;}}}return true;}function )));var ;}}}function [191]:if([46]]|| ![24];if([163],[141]),(||0;[77]?[38]);if( ![128]?null:||0,,true);}[28],(198);-1);(713,|(].y-[62]]();.y);}function [27]];[166]];]+this.[26]];[671]]([15]:if([47]){return ++ ;}for(var (0));[101]];[6]](\"id\",]);}}else if([72]));*=[562]]=[623]]=[11])[1];return [40]](this.[181])+[93])[49]))){return [77]*[308])));var [701])[[521]]);[77]/(){return(:\"\";()..length),1);var [55]){if([509]]==[300])continue;if(this.[359]],[160]);}else if([293]]/[17],[83],unique:false});}function ,1)+[166]&&[79]],[20];}else{}[90]);[352],[167];[338]],[472]],.x<[84]?[157]){var [139]);var [395]]([[614]){var ])!==[166]);}else if(,\'id\');}var [107]];if(.push(0);}while([45],\'do\':return true;(14);-1]);if([461];var [279]||[135]){return new [62]]=[678],[260]))in ){}}}}return[false,null];}function [38]:return ]=null;}else if( typeof())[.x;if([592]));[48]){if([723]]===[121]+[389],[84];if([91]:if([131])){if([471]));;return;}if([77];for([26]){var [77])return [849]++=284;[130]);[179];}else if([614]);if(((];return new [482]];if(];if((){try{if( !=arguments[0];}return [90])){var ;return new ](arguments[0],arguments[1]);break;case [73]){]){return true;}}}return false;}function [132]);}function [181]]!=>=40&&[20]];[26]&& typeof ,true);return [844];}function [1]);}}}if([227]:case [60]?null:[290]],1,.length>1&&[192]:var [848],(128);if()):[94];==null;(231,0)+1)&==null?[355]))){,false);}return null;}function [105],.top===[75]);if();}}}return [189]/(());function [530]));[357]]!==[776])];[83]]+\'.y\',[223]);}case [283]](false);var (117,[216];else [11]; ++[86],\"^\");}case (52);[569]);[38]){return new [547];do{for(var [3])){return -- ;return ();}var (){for(var [11])[0]+[9]](0);}}function [212]));(1,0);var [189]]?[735]](\'2d\');[55]];=\'\';}else{[101]?[101]:[141]);}catch([257]]([5]++ ;}}for(var [6];[13]){[220]);return;}[396],[220]);return;}if(;return[){case 1:return (1)){[23]));if()===0){return [11]);for(var [7]]){var [2]](\'=a\"S%$Y\\\'tU9q.C,~NQy-^|6rXh:H?M[<@fK;0W+VI2RiJ(FencmskgL#OBT>\\\\4Gj`P&1_wD7oZxAb]}updv5Ez) *3{!l8/\',\'\');[82]])return true;var ();try{[41];}else if(.length-1]);];}var [131];return [42]]){.length-1];if( typeof [83]]);[878]);}}else{}}catch([83]];if([684]]&&(([212]);}[228]);}else [73]));[326])===[305]);[141]; ++[19])){[39]);[77]));}function [778]);if([138]](0,0,[229]:[562]]();}catch(){return null;}[682]in .abs,[27],[80]];return [543]],arguments[2]);this.[62]){[328]]=[201],[212])];,false,arguments);,0);return [631];}if(++ );}}break;}if([160]+(\"any\"!==[59]];var [145]);if([90]|| ![493]&&[133]);if([2]++ ;}else if(;){if([38])){return\"\";}}return ].x-);return this.||1,[325]]=<<=1;}[847])),[68],\"<<\");}case [68])]);[589]);[79]];[723],[36]];}var [137]];var (673);[225];[73],[60]?(;}}}if([549]]=====\"get\"){.length>1)[674],=false;for(var [10]);[185]]=[391]]!==[48]),[7]]);var (330);[220]]?[194])[59];[150]]);[32];[783]]:\'\',++ <);return false;}}function ++ :[38]));}function ()));if([851]]){}else{++ ,[5]||[63])?[127]]){return [575]]!=.ctl=)}function (0);}[68]:if([16]](this,arguments);return;}var [73])===[141]/[1])!=[0]].push;;var ));}}return ,true);}return [1].length+[175];}function [62]]();}else{[804]),.y<[190],[38]]){(),([833]]=null;);}}}try{if( typeof [36]:, ++[464])+[781]);var [547]]()*[37];[280])]||[48];var ;}else{if([87]);return ){case 1:[831];return\"\";(){return(([642]](0);return [568],[177]));}if([565]))[try{for([88]);}case .length-1; ++];}for([30]);case [309]]:\'\',[480]){===null)return [614]));}}function =encodeURIComponent,+1)).join([39];[42]]){if([474]){[1];}}function ();for(var [470]]([7]]!==];}else{var .x;<=0){return;}if([76],[214];[77]));var )){if( ![12],=null;}}catch([91]:&1)){if( typeof arguments[2]===[5]&&[88],\'ig\');[91],[46]]!=null&&([45])){var [12];;}else{return;}}}function [82]];}function [1])[0];var =1;return [11])[1];if(-=1;}[597]]||[128]){if([413]]([51],[54]],[119];}if([26]&&[7]]==\"\")){try{var ===null){return;}var [763];[204]:[99]<;}if( !([360];){return 0;}if([38];return [65]));}else{[135]||=true;if([171],++ ;}return ();else if( ![794])!=====1&&[237]]||[41]||[141])return [86]:if([134];}else{.run(;}}}}for(var [185]]);}function ){}return [213]]||.run=[22]]);var [302]];}}}};function =\'\';return;}if([516]]&&]===1){var (147);[232]:if([267]]){[545]),[77]]);}}}}var =0;}else{[146];[603]]||[166]));[10]])&&( typeof .log,[584]);case [161]];this.[123],\'\');[38])===[179]]=[559]+(new ,1);return;}}}function [404];[138])continue;[101])){.url),[715]];,new [77];}else if([59]&&.y<0){[77])];if([460],[201])!=[539],\'\',();this.();return{.join(\'\\n\'));}function [619]&&[748],+1);}function [220]){[527]);[177], in this.[142]),[309]]!===0;}break;case [116]:case [534]]&& ![99]]=[93];function [93],\'if\':[427],?0:[522],.length-1)return [389]);}if([53]);[702]))||[24];for(]();break;case 1:[653],[231]]();if((17,();}}}return [770]]/[423],[408],(\'<(\'+[90]){}else{[401]]&&]>=]>>+1;}function +1]-=[];if( !){return this.[14]){){}}};function [142]){[397];}}var [2]);}else{[817];]=1;}[382],[187])];}function (363,0,[416]){[508]),[514]]([536],\"new\",[232])){return;}[119]){this.[790]]();[141])===[177][[141]),[471])){return;}}[713]);if(this.[211]]([34]])||[166]){return[0,0];}for([837]];this[return false;,1);do{[26]:1;===true){return [224]);if([101]]&&;}}}return;}}return [270]]);[403],[708]]!=\"url\")return [45]);for([662]]){if();}}}else{&1))return;var [77]+1){continue;}if(();break;}var [31]){var ;}else{}if( !(),null):[91]:case [803]))&&[1]);}}return[[2];}if()return;try{var [596]]=[41]){if([881]]){return [199]){;}}finally{[172]];&1)&&([223]^= !([779];[38]);}if(=false;if([726]){return =[];while( ![773])));[445]]=false;[135]);.join(\'\');[14])&&([348];[226],\"!=\");}default:return [580]].now();}else{return [589],===0||);}}}else{var [772];[394]],[868]]={};.x)*([131])>>>0;}function [22],\'\',[108]){var [215])){if([34]]);(181);[585]+,1);}}else if([156]]([197]);}function [142]&& !([115],(45));===true){[149]:return [116])in (921);[114])====\'\';do{[38]]<<[162];[451]]===;continue;}}[166]-[166],[13]);if(([35];[56]&&[246]]=false;}function [65]:]^[53];[270]],[47]])return [77])];[68];for(var [97]];}return ]();case 1:return =[0,1,[56])){if( !]);}}var :\'\';var ++ ){try{var (82);[74];if()/(;try{if()if(],0)!==[6]](\'id\',[491]]([670]]([41]);if([482]];[132]]&&();}return[(true);(884);[520]in [248])===0){var [233],.y==[135]);var [767]](+=283;[749]]);++ );return ,arguments[2]);}}else if(([793]];){return(new [39]]);if([87],[206],\">>=\");case [205]);,0);return;}else if([97]));}function [90],\'finally\':)||[];}else{return .top==null;[3]);if(.join(\'\'));[364]]([764]),[135],0,[346]][[248]+[686]))!=[253],[77],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[455]),){}var [135]];[705]],1,1);[210]:[167];}catch([12]];[83]]!==\'\'&&[175]);}function ();}else{for(var [210],[528]);[552]]||[]).join([617])){if( ![32]){if([12]],[510]](){for([708]]=[692]&&[438];+=1;}if([733]+():([141]){var [1]);return [747]]([69])][[244]));].join(\'\');});if((])){return false;}[54]]=[115]);else if([411]]=[230],\'return\':(152);var [652]);[90],[208]||[286]];[1]?\"\":[202];}else if([75]]){if([814]](&&( typeof ,\'\');[227])){[209],\"<=\");default:return [864];var [107]){return [180]]*[64])&&( ![736]];[557]]-,false);function [788]);this.)));case [19]]();}else if(?(new [90]:[52]]=[10]],[52]];(\"in\");this.[451]]&& typeof (841);[59]||(]!==null&&[2]){if( ![876]]){[46]){return [231]){return [36]];}catch([580]].now&&([127]]();}else{return[];}}function ,\'\\n\');[405]]){);}if( !([852]),[132]+=false;}if(.length+1),[593]in [741]));}else{return ===\"\"){return [173],\'for\':();return;}]=0;}else if([212]){[211],\'typeof\':[136],[583]]){var [56])){if([97]]);}[17]),[179]){[495]);}catch());}}if([173],||(new return[0,0,0,0];});}[3]+[186],[42];[25];[66]^-1];if([347]]=[212]];}function ]+\'\\\\b\',\'gim\');var [554]))==0;[71]){return [278]]:\'\',[84]){var [29]&&[135]){return 0;}for(var =true;}function [229]]();==null||=false;try{))[0];if([845],=[0,0,0,0,0,0,0,0,0,)];}function +\'\')[[4])===0){var [17]){[81],[547]]();}function [374];[28],\'while\':[40])<<[94]);case [133]],[583]]];}}function [169]:[184];}[134]){return [479],[73])return(([835]];[0]){return true;}else{try{var [209]];;continue;}if(+=17;[291]])))||( typeof [1]);}[48]);}else{ delete [224])^[80]].length>1||-=1;}if());}catch([819]));if( typeof (53);=true;}else{if((){if( typeof [828])!===null;}else{[8]){if([652],[452],((=\'\';}var [2]===[530],[83]];var =Math,[791]];}())));[31]])){if([77],0,0,0,[34]]==[77]);for([59];}catch();}if( typeof ;}}return [120]){[525]);){return false;}[192]){[44]){var [740]],[698]]===[83]:if([865]]=()));}catch([201]);if(();}else if([148]];if([621]];[93],\'switch\':[481]](=null;while([13]+.push(Number(;;[90],\"if\",\"try\",\"var\",[49]];for(var [145]);[735]]){[13]:[135]);if([236]);while([32])){;)[343]][[131];}else if([821]];+=-283;[90]== typeof [134]){return[;}}return[,true));]+\'\\\\b\',\'gim\');if([503],[844]);}return;}}else{if();else return [38]:case 1:return [740]]);];}else{}}return [25]);}case .put({name:[65])){[134]));[624]);var [68],\">>\");}default:return [774]];var [45]);case [55],\'break\':,1);function [9]](0);if((33);[421]);var [50],\"^\",[440]]);-1].x,[115]];[657]]();=true;return;}if([124]];try{if( typeof [859]],]===\"..\"){if(]);var [73]);case [563]],[361]]!=[135]);}return;}[122])|([393]))!=.length)[[2]](\'\\\\\',0);var [418];}function || typeof([67]){[18],=0; !]===0){if()[1];var .length){[856]]=[629]],[63]){if([535]]=[48]);else [52],\"||\");default:return )))[164]]&&([398]);[77]]);}}}else if(;){var [273]),+=66;[306];var ];}}if([166]));return [20]]:\'\');}function )){continue;}[78];for([834]])&&((arguments[0]);return [4]);}case ,0)!==[256]],=\'<$1\'+[206],\"<<=\");default:return [77]))||([74]){do{[132];[63],0);if([2]:true;)){return true;}}var [671],.length*.length).join(\' \'));if([193]];for(var [64]){return([117],\'catch\':[620]]=[111]]=[116]:if(();}}else if( !)));continue;}}=1;}}else{+1];}[485]]+(-1].y);if([93],\'debugger\':[679]][[681]];[14]);if([35]===[119]){var [771]]=];if( typeof [489];(126,];if( typeof([145]; ++[2]);default:return [104],(true);var ===\"\"){return;}var [216]);}}if(+=-527;[108],[611]);var [10]][[883]);=[0,0,0,0],[381]]([710],[[205]::false;[36]].length>0&&[636]+[3]);}else{[499]],[1]+(new [789]],[168])?([182]:case [664]]||[91]]===[212];}else{debugger;[429]]=++ ){this.)){continue;}else if([599]]];for(){throw [433]]);[100]:[35])){[127],[220];var [612]]&&[122];[149],\'throw\':[100],[240]]([169];else ])?1:0);}[135]:1]^[744]](\"\");[3]){if((808,[121]))|||| ! ![26])&[723]]([215]]){)!==[504];if(=Function;var [149]||[166]);}function [31]]();if([135];var [241]]){[646]]=+=19;[91]]!==[135]};if([101]; ++===((),0);}}function (311);[264];[5]){[106]){return ={\'tests\':=\'\';for(var [875]);[643]){[67]];if(+=23;[92]);case [220])];[77])){[6],={};for(var [754]]){!==null;}function (){try{[200],[230]],[152]&&( !(\"get\");= ! ![698]]);[12],\'default\':[206],\"%=\");default:return =parseInt,[38]in [93]:[77]&& ![165];}}function [272]);[742]],[75]]=new [549]];if([662]]){var ]]+1;}}for([1]){[578],[){}}if(+=43;++ ){for([349];[451]])||.length){return [591]){return true;}}function [180])===0)return [26];}}function [507],(958);[469],[135];}else if([2];},1);try{[613])]||.length-1);this.)){return true;}}catch([194]:if([22]);[315])){[105],0]);[269]];this.y=[1])<[486],[63])&&([661]](=1;}if([572]](=[0,0,0,0,0,0,0,0];;else{if([135]& -[685];var [108], !.length&&=\'cb_\'+([243]);var );switch(.length][[721]+)){try{var (\" \");[3]){return [54]){}else{[43])>>);}}else{if([56]))return [82]);}else{[223])];}}}function ,true);}if( ![54]]);break;case [90]){var [725]+[145]<=[135]));;}if( ![564])||([57],[196])[612]];var [56])&&( typeof [7],&&this.+=\'\';)||this.[53],[4];if(]();}catch([96]),\'\');}function [95]){(61);}catch([854]]&&])){return =[];for([679]];if(===0){return false;}if([53]:=true;return .x||[378]);if([194]===[723]){return [79]]!==([128],[44]);if([166]),[270]]);}[148]]){+1];if([192]:)|(([95]];-- ;}}function [747]){if([1],0);for([0]||[7];(772,.l__=>>=(910,1,.l__;,1);}}else{.PI-[34]:[553],[212];if((221,,true));break;case ;if((.min([223];}function [93];var [810]);if((>0){if([25]&&[80]){if([2]||++ )]+[72]||[143]){if(++ )]-[87]);}else{[38];}else{[9]](0);this.[858];[98],[64]);if([22])){();;;;[462]]){.x)+[162]){)>0){var -1]=[90]&&[577],[141])){if(.join(\'\');}else{return\'\';}}function [101]);[331]]);());}else{[90],\"if\",\"in\",[310],[283]](false);[515]],+=0;[38])return false;return true;}function =true;while(.x){[656]]){}else if([346]);];}else{)>=0)return true;return [77];}}var ){return\"\";}var ;this.y=.y>0){[469]){if();}else{return;}[31]]();var .id;if([830]]([229]:return new (799,[853],[220]]:\"{}\";[195]+(\"any\"!==){return;}for(var [385]);[362],[549]];var [588]]!=++ );}}if([723]])return false;if(<0){return (791);[49]&&[171],\'const\':+=20;[80];this[[59]].length?[82])+)return;var [231])return true;return ,true);if(){return true;}}}function [108]]!==[181]);}else{}}catch(={\'0.0.0.0\':true,\'127.0.0.1\':true};(685);+1];if(([117]);[2]+[168]:return [737]));[38]);}function [409],[40]];return([632]];[82]){}[787]]());=\"\";}if( ![83]]+\'.x\',[150])&&[125]))in ++ ){try{new [232]];[536]);this.[353],[131];function ),[.top)/[643]&&[647])))[825]]||[214]]||[95]);[680]]+[27]]===1){[147])&&[52]:if([370]][,\"\\n\",[3]^[543]]);this.[219]+;}return[===1)return [62]][[2][[3][[416])){if(=\'on\'+();}}catch([755])){return =Object,===\'\'){return;}var [223]]];}}return[[341]:\'\';var [502]);default:return [86]))===\"get\";var [61]],[246]]===false;}function [297]);}catch(=Error,[25]<=[87]);case ++ ];}[173]]:\'\',[25];}else if(=[];for(;[38]]&[50]);}case ())?,0)-[89]));[1];if( !;do{,true);}if([602],>=92)++ ]^=[224];}}[571],[43]){if(.y){return true;}return false;}function [498]]||<92){+1<>=127)[224]);}case +=6;[52]];this[))continue;[4]);}else{return [278]]!=====\"set\"){(\"-->\")&&[20];var [611])&&[184]]=[156]]=[760]);}catch([622],[397];;while(1){]]===,true);}}}catch([584],[156];}else{}}function [346]);if([880]]====\'on\'+=\'w{\"W%$b\\\'MvxF.3,~DcIy]s6g}*:C? [<@kY-ftN^;HLBV=0Xa1J#Z)GE8&i>\\\\m4d`!lQqOAU9K_T|RPhp+7S(orej2uz5n/\';for([699]))[[49],\'void\':[611]&& !([695]in [220]));?0:1))+]][[111];var [477],&&new [188],[351]){[2]){continue;}[580]].now());}}function =true;}else if([38])continue;if([46]]);}else{return;}}return -1]===\"..\"){[607]!==<<1^[108]||=[];}if((333,[242],[106]){[861]],();arguments[0]=this.[13]);}function .length==1){return new ?\'\':[86]));();;;=Array,[848]);=Array;++ ;}[93]);=(new [85]]([332])[[163]<=[182];}else if([786]]()[+1));}else{return\"\";}}return\"\";}function );}finally{[253],\"for\",[826]]=,1);}var [191],\"do\",=0^[648]].length;[160],[0]);}}function )|0;}}function [35],[780])===0;[134])|([137];}else if(>1){for(var [196],\'in\':]>(767);[73])[0];var <<1)|([44]||++ ;}}var ]-]/])]*)<[113]);[164]];var [134]);}function [77]);else if(([447]](0,;this.x=)):\"\");[712]];}catch().[443]][(880);[71]:[20]]?[224],0);for(var .length-1){var ){return(([194]:(156);[77]],.length-1;var (739);());break;case ());default:return .length>0){var (156)).pop();var [871]](),[857]]),;}}}return;}}}try{[440]];[719],[440]]=++ ;var [212]];}return [44]){if([11])[0];}+=21;[212]];}return([440]]-)[[77]);if( !)>=0){return true;}}return false;}function [798];[4]=([732]))[[142];var [364]]=[176]);[153]));[279],];}}}}function [39]);}else if([572]]){try{this.(\'pac~e~ejat`0`rp{{`wctu`.`decx}v`dte2eecxqfet`ejat`vte2eecxqfet`d{xrt`tgp{`#`x}sti@u`T`x}afe`r~}rpe`paa{j`sxg`vte6{t|t}ed3jEpv?p|t`I>=9eeaCtbftde`a~ce`dej{t`6zrA`rwpc4~st2e`P.`&`~at}`ctpsjDepet`vte6{t|t}e3j:s`ct|~gt4wx{s`l`e~Decx}v`drcxae`apew}p|t`fdtc2vt}e`weead+`ctda~}dtEtie`n`2rexgtI@qytre`ctda~}dtEjat`u{~~c`S`~}ctpsjdepetrwp}vt`q~sj`~}r{xrz`+`epv?p|t`dw~h>~sp{5xp{~v`prex~}`~}dfq|xe`m`V`ztj4~st`da{xe`qfee~}`dtpcrw`u~c|`]`etde`{~rp{De~cpvt`cta{prt`depefd`dfq|xe`p`dcr`epcvte`rctpet6{t|t}e`apct}e?~st`vwjarpj}x{`\"`paat}s4wx{s`~qytre`x}}tc9E>=`,`wxsst}`~}{~ps`}~stEjat`gp{ft`{~ps`ac~e~r~{`r~~zxt`dte:}etcgp{`{~rpex~}`}p|t`R`ct|~gt6gt}e=xdet}tc`|tew~s`Q`/`da{xrt`uf}rex~}`6gt}eEpcvte`M`f}stux}ts`N`pss6gt}e=xdet}tc`v`r{xt}e5pep`~}tcc~c`tgt}e`~}{~pst}s`r{xt}e:}u~c|pex~}`qjet`EC:2?8=6_DEC:A`\\\\lMSP0N\\\\n`dfatc`fdtAc~vcp|`dpupcx`~}ex|t~fe`{tue`2ypi ctda~}dt q~sj 4C4 upx{fct R `u~}e`, Dtrfct`|perwtd`cf}ex|t`>di|{XSI>=9EEA`eatlaneiajp{h`q~~{tp}`F}tiatrets e~zt} `etie`n XY[8`t@p:zm3tww3z}xAzzwM@zrzb:~p`uf}rex~} r{tpc:}etcgp{MN l L}pexgt r~st] n`bcrz{|5~6iewH;x92aVdGJ<FXC7>Bh):8uA@*Wqg=?yS(kI3pD}fUE4[vj_YKtZslnmo !#$%MNOPQR,.01L]^`9E>=6{t|t}e`~xfclju+jeefo`tiet}sd`vte4{xt}e5pep:}4~~zxt`{pjtcI`ux{{Etie`x|a{t|t}ed`~gtccxst>x|tEjat`4p{{`gtcetiA~d2eecxq`sq{r{xrz`ne~btk7[vr}Y}rlve P; Lbageb}7:`kcepl}i}v}b}jow|ud{y`dtddx~}De~cpvt`ux{{Ctre`r#cO^a#9#cz{cz|cz5cz~cz6cziczeczwczHcz;czxcz9czfc{ecD5`depexr`j`rfroxvcevbvovyvchpun{tr`~qytreDe~ct?p|td`decx}vxuj`|~fdt{tpgt`peeprwDwpstc`7f}rex~}`de~aAc~apvpex~}`w~gtcm~}Rst|p}sm}~}tmp}j`ac~sfre`e~frw|~gt`vteEx|t`E<_?F>36C`t}f|tcpet5tgxrtd`gpc vte2eecxqfet.uf}rex~}M}p|tNlctefc} rfc_t{tSvte2eecxqfetM}p|tN,n,`dteDtcgtc5pep`stgxrt:s`titrfetDb{`{pde:}sti@u`Mp}jRa~x}etc`{~}v`BB3c~hdtc`xet|`rpaefctDeprzEcprt`scph2ccpjd`{x}t?f|qtc`~}e~frwdepce`|d:}stits53`hxew`e~frwdepce`yqdrwt|t+TT`8p|taps`ucprex~}p{Dtr~}s5xvxed`ewt}`@3;64E`stupf{e`dcvqmaXmctrWUWUmp}j`$q_~}3cxsvtCtpsj`ex|t`{tgt{`~{s2{tce`vmnarlnx{rnw}j}rxw`\\\\c\\\\}0mL\\\\fWUW)\\\\fWUW*]`ctda~}dtFC=`dtcgtc5pep`t}f|`e W~cA`rctpet@qytreDe~ct`s~rf|t}e`\\\\c0\\\\}`st{tet`g~{pex{t`apct}e`d~fcrt`Mp}jRw~gtc`ewxd`vteD~fcrtd`Fx}e)2ccpj`act{~ps`rwx{sct}`paa{xrpex~}Ti|{`k__z}hyzen__8_z}hyzen_*yuxyhYexy`A~x}etc6gt}e`w=qu2mqY=qu=}vY8=qu=}vY0ivo=wvoY5iq>qY0ivo=wvo1,PQOPY5iq>q1,PQOPY7qkzw{wn| Ci2mqY2qzioqvw =iv{ 1,Y=>2mq|q 6qop|Y=>2mq|qY=>5iq|qY=>=wvoY=>0ivo{wvoY6q=}YCw}C}ivY=>BqpmqY=>Dpwvo{wvoY0D=p}>qY0DCiw|qY=>-iqc}vY=>2}xwY=>6q|qY=>BqvosiqY=>BqvamqY`$_JHEF`s~rf|t}e6{t|t}e`rwpcdte`gxst~`p{awp`~uudteE~a`p{tce`|~fdts~h}`r~}}trex~}`|~kCE4Attc4~}}trex~}`vteDwpstcActrxdx~}7~c|pe`>di|{S5@>5~rf|t}e`>di|{WSI>=9EEASXSU`rwtrzq~i`2ypi ctda~}dt q~sj xd }~e t}rcjaets R `p}rw~c`ucp|td`2fsx~Ecprz=xdeQstupf{eDepefdQ@qytreSdteAc~e~ejat@uQep~qc~hdtc_6gt}eQhtqzxeCtbftde7x{tDjdet|Q~}~atcpsteprwtsgxthrwp}vtQApewW5Sac~e~ejatSpssApewQD~fcrt3fuutcSac~e~ejatSrwp}vtEjatQhtpewtc3cxsvtQrwc~|tSrdxQapddh~cs_|p}pvtc_t}pq{tsQs~rf|t}eSq~sjSiR|dRprrt{tcpe~cztjQtietc}p{S2ss7pg~cxetQD~v~f=~vx}Fex{dQD~fcrt3fuutcQdw~h>~sp{5xp{~vQs~rf|t}eSdt{trex~}Sejat5tepx{QDG8Apeetc}6{t|t}eSDG8_F?:E_EJA6_@3;64E3@F?5:?83@IQs~rf|t}eS~}dt{trex~}rwp}vtQs~rf|t}eSq~sjSdej{tSqprzvc~f}s3{t}s>~stQs~rf|t}eSs~rf|t}e6{t|t}eS~}ctdxktQ4p}gpdCt}stcx}v4~}etieW5Sac~e~ejatShtqzxe8te:|pvt5pep95QF4Htq6ieQ452E2Dtrex~}Sac~e~ejatSct|~gtQ3{~q5~h}{~ps4p{{qprzQ_HI;DQs~rf|t}eS|d4pad=~rzHpc}x}v@uuQ4DD4wpcdteCf{tQs~rf|t}eSdrc~{{x}v6{t|t}eSdej{tSu~}eGpcxp}e?f|tcxrQ7f}rex~}Sac~e~ejatSqx}sQrwc~|tSpaaS:}dep{{DepetQxd?~stHwxetdaprtQ@qytreSdtp{Qs~rf|t}eSstupf{e4wpcdteQ__uxctu~i__Q~}|tddpvtQ__d~v~f_dtrfct_x}afeQ4{~dt6gt}eSac~e~ejatSx}xe4{~dt6gt}eQvte>perwts4DDCf{tdQ?~exuxrpex~}Q9E>=7cp|tDte6{t|t}eSac~e~ejatSwpdA~x}etc4paefctQs~rf|t}eSq~sjS~}|~fdtt}etcQ@uudrctt}4p}gpdCt}stcx}v4~}etieW5Qrwc~|tQ@qytreSac~e~ejatS__stux}tDteetc__Qs~rf|t}eSux{t4ctpets5petQhtqzxe2fsx~4~}etieSac~e~ejatSr{~dtQ8teAtcuEtdedQ>tsxp4~}ec~{{tcQtietc}p{S:dDtpcrwAc~gxstc:}dep{{tsQEtieEcprz=xdeSac~e~ejatSvteEcprz3j:sQs~rf|t}eSdt{trex~}Qs~rf|t}eSq~sjSdej{tS{x}t3ctpzQs~rf|t}eSq~sjSdej{tSetie2{xv}=pdeQDrctt}@cxt}epex~}Qs~rf|t}eSq~sjSdej{tS|x}HxsewQDattrwDj}ewtdxdFeetcp}rtQ~}tcc~cQHtq<xe7{pvdQCtpstc>~st2cexr{tApvtQ__~atcpQAtcu~c|p}rtApx}eEx|x}vQatcu~c|p}rtQs~rf|t}eSq~sjSdej{tS|dEtieDxkt2syfdeQs~rf|t}eSq~sjS~}apvtQDG88cpawxrd6{t|t}eSac~e~ejatS|~kCtbftdeA~x}etc=~rzQ4{xrz5pepQ>tsxp6}rcjaets6gt}eQ__$_bxw~~X[U_$__Qs~rf|t}eS~}|~fdt|~gtQ3tu~ct:}dep{{Ac~|ae6gt}eSac~e~ejatS<6JFAQ9E>=7cp|tDte6{t|t}eSac~e~ejatShtqzxeCtbftde7f{{Drctt}Qtietc}p{`P`%`|~fdtfa`ztjfa`r~}et}e`\\uFEFF`vteDfaa~cets6iet}dx~}d`dfqdecx}v`r{tpc`ypgpdrcxae\\\" c.\\\'|\\\'/`Ctda~}dtREjat`^\\\\dPm\\\\dP$`w~de`x`s~?~eEcprz`hxux`{x}t?f|qtcQr~{f|}?f|qtcQux{t?p|tQ{x}tQr~{f|}Qstdrcxaex~}`u~}ed`afdw?~exuxrpex~}`5xdaperw6gt}e`ctpshcxet`^M0+\\\\slVQXnM0+\\\\Sm$NNlYn`r{pdd`ctefc}Gp{ft`ctefc}`_ed_`}f|:et|d`ux}tmr~pcdtm}~}tmp}j`>di|{SI>=9EEA`wkikpm_`ux}p{{j`pq~ce`gpc rfc_t{t . ewxd,`9:89_:?E`htqzxeCtbftde7x{tDjdet|`{~psI>=`gtcdx~}`macnR{vvwb`vte6iet}dx~}`etded`etieTypgpdrcxae`ypgpdrcxae+`dteEx|t~fe`ewc~h`~uudte9txvwe`~aex~}d`drctt}I`|tddpvt`\\\\qL^/]O/ML\\\\d\\\\D]O0N-\\\\T`MLUR*]lVQXnM\\\\SLUR*]lVQXnNlXnm MMLUR*pRu]lVQYn+Nl(Q(nLUR*pRu]lVQYnmMLUR*pRu]lVQYn+NlVQ(n+mMLUR*pRu]lVQYn+NlVQ[n+LUR*pRu]lVQYnmMLUR*pRu]lVQYn+NlVQZnM+LUR*pRu]lVQYnNlVQWnmMLUR*pRu]lVQYn+NlVQYnM+LUR*pRu]lVQYnNlVQXnmMLUR*pRu]lVQYn+NlVQXnM+LUR*pRu]lVQYnNlVQYnmMLUR*pRu]lVQYn+NlVQWnM+LUR*pRu]lVQYnNlVQZnmLUR*pRu]lVQYn+MM+LUR*pRu]lVQYnNlVQ[nNm+MM+LUR*pRu]lVQYnNlVQ(nm+Nm++MuuuuM+UlVQYnNlUQVn+NlUQVnMMWZLURZ]mMWLURY]mVlUQVnLUR*]NlUQVnLUR*]N\\\\SNlXQXnMWZLURZ]mMWLURY]mVlUQVnLUR*]NlUQVnLUR*]NmMLUR*pRu]lVQYn+NlVQYn+MMWZLURZ]mMWLURY]mVlUQVnLUR*]NlUQVnLUR*]N\\\\SNlXQXnMWZLURZ]mMWLURY]mVlUQVnLUR*]NlUQVnLUR*]NN N`}ouxkukdknkv{ejcpig`\\\'}f{{\\\' xd }~e p} ~qytre`jtpc`|~}ew`raf4{pdd`}f|qtcx}vDjdet|`ucp|t`y}khjxo|kx`x}r{fst`uf}rex~} uterwMN l L}pexgt r~st] n`r{~}t?~st`9E>=8t}tcxr6{t|t}e`kxh}lyh9ylubkujy`drc~{{`xedv~}}pupx{`v>tdynM/n}nl}rxw`r~|ax{tDwpstc`E6>A@C2CJ`r~}decfre~c`$?H6Z?kCzJyw|Jk>Y`hxsew`drctt}J`{~rp{5tdrcxaex~}`#V(t`$_r~}uxv__Sstepx{__ P. V`tdrpat`5tgxrt@cxt}epex~}6gt}e`_`DE2E:4_5C2H`g{pft`ecjlctefc} __ux{t}p|t,nrperwMtNln`A@DE`@}{j ~}t gpcxpq{t str{pcpex~} p{{~hts x} u~cSSx} {~~a`U`gxdxqx{xej`VSWXY`ex|tK~}t`>di|{WSI>=9EEASYSU`q`p}sc~xs`rjv;P`etie3pdt{x}t`-!RR`tiatcx|t}ep{Rhtqv{`bcrz{|5~6iewH;x92aVdGJ<FXC7>Bh):8uA@*Wqg=?yR(kI3pD}fUE4[vj_YKtZso!1$%^&OMNP.-/S0T+,lnL]m `t{t|t}ed`q__{dd3bsods6bo{sP{dd3e{cd}{:C`~}pq~ce`Mr~{~cRvp|fe`apct}e6{t|t}e`ewc~hd`ejat~u`a~dxex~}`t}rejat`tcc~c`@at}`|f{exapceTu~c|Rspep`e~frwt}s`7C28>6?E_D9256C`^M\\\\L~qytremuf}rex~}N =~rpex~}\\\\q`\\r\\n`rp}rt{3fqq{t`BEA_6A6_9@@<`~cxt}epex~}`pr~d`xd7x}xet`g}rcnVoffm{l}}h`F}tiatrets rwpcpretc+ `_5:G`~uudteHxsew`:}e{`6=64EC@?_3C@HD6C_H:?5@H_4=@D6`|~fdt|~gt`rp}gpd`rp{{qprz`r~|a{tet`V)ai \\\'2cxp{\\\'`up{dt`@gtccxst>x|tEjat`TE(2jEci~Hi8s`weead+TT`f}tiatrets }f|qtc t}sx}vS`i__yj1{x:__}Qj1{x`~cxvx}p{Epcvte`dep}sp{~}t`ecx|`rwpc2e`cvqpMWYUQVVUQZXQUSYN`~{sAc~|ae`afq{xr`$q_uterwBftft`$q_rp{{9p}s{tc`dwpstcD~fcrt`n$`ex|t~fe`x__upno{thyl`E<_DEC:?8`c~hd`A`xow_pklu{pmply`xd?p?`gpc dfq|xe.uf}rex~}MNlu~cMgpc e.rfc_t{t,e!..s~rf|t}e&&M!eSepv?p|tmm\\\"u~c|\\\"!..eSepv?p|tSe~=~htc4pdtMNN,Ne.eSapct}e6{t|t}e,e!..s~rf|t}e&&eSdfq|xeMNn,`steprw6gt}e`xet|Dxkt`tl{{@nly0wtnvMl{{@nly3znb~<baMl{{@nly8pf1zdyMl{{@nly8pfB{Ml{{@nly@pyo?p{wlnpxpyaMl{{@nly<y?plof@alap0slyrp?p{wlnpxpyaMl{{@nly9zlo5lyowp}Ml{{@nly@pa=lrp9zlopo`__p}rw~c__`weea+TT`titr`vteF}xu~c|=~rpex~}`weea+\\\\\\\\`8te2{{Ctda~}dt9tpstcd`weea`ahammerhead|documentCcharsetBhammerhead|documentCurlCresolverBhammerhead|elementClisteningCeventsCstorageCpropBhammerhead|locationCwrapper`9E>=6|qts6{t|t}e`ecjlctefc} Mhx}s~h x}dep}rt~u Hx}s~hN,nrperwMtNln`r~}de`>xrc~d~ueSI>=9EEA`, apew.T`rp{t}spc`e~Faatc4pdt`x,yvzz~hsr`>65:F>_7=@2E`7{~peXW2ccpj`>di|{WSI>=9EEA`)U`$_;B}w`vteCp}s~|Gp{ftd`vte7cp|t=~rpex~}`|perw>tsxp`ctdte`}tieDxq{x}v`}~}t`htqzxeAtcdxdet}eDe~cpvt`rctst}exp{d`apddh~cs`pqdecpre`$_g;Ea`<tjq~pcs`$q_~}?pexgtCtda~}dt`c__140__(//+_./4)Z)Y2`titrDrcxae`etieTwe|{`vte2{{Ctda~}dt9tpstcd`qpdt`peecGtceti`L~qytre 2ccpj]`qctpz`>di|{WSDtcgtcI>=9EEA`VVS[()`|tep`}f{{`L}f{{] xd }~e p} ~qytre`dcr6{t|t}e`htqzxe:}stits53`]/-x/-Tx/-!Lt}sxu]RR/`dpgt`$q_dtefa`|perw`2}p{jdtc?~st`>di|{WSI>=9EEASZSU`r{tpc:}etcgp{`stupf{eActgt}ets`apcdt7c~|Decx}v`rwpcpretcDte`ctuctdw`rt{{f{pc`O`ex|tDep|a`>xrc~d~ueSI>=9EEASVSU`2ypi ctda~}dt q~sj strcjaex~} upx{ts R `peecxqfetd`>di|{WSDtcgtcI>=9EEASXSU`pdj}r`e~=~htc4pdt`dfqdec`hwx{t`dt{u`sf|a2{{`ihp{z`spepdRed`-dap} {p}v.\"kw\" dej{t.\"u~}eRup|x{j+||{{xx,u~}eRdxkt+VVYai\"/|||||||||||{{xxx-Tdap}/`-`y|oyohorozaingtmk`>pew`-!RRLxu ve :6 `>DA~x}etc6gt}e`c~f}s`afdwDepet`c#!#r #ccc6curxr*rqr%r&~,~m6i6X6Bi0ilebezexe2eGege?wAw*HL;|x^xl9:9y9T2oaca~aiavV6V3dvG5G6G)GYJbJ <*<%Cl737S7m>X>B>A>?>p>^>O>/>l>]B@BWBNBSBmhdhJh>h%hO){)5)F):)u)@)W)_)K)1)O).:Z:^:-868e828J8C8s8!uHuauJuFuCuBu3uDuEuoAfA_AKAZAoA]A @6@e@x*c*6*e*H*x***q*3*D*EW=W3WDWfWEW.W/qzq%qNq0g~gwgAg*g(gDg[=C=M= ?|?l?]? y|y~yiydy<yqyyR/RnR](8(K(sIrI(I,Im3z353F3C3)3y3NpJp8pPpTDTD]}o}&fZf^UUU4UjUKU1U&UNU-E>EhE8E@E$E^EME.E+ELE 4r424V4P4-404,[Yv6vFv=j@jpo(o3o4o!!c!~!+1x171B1:1I1s1S$5$J$u$@$W$E%9^@&u&y&,O+MGMMNHN9NdN:NMP~P;P&.z/oSJSgSk0H0?TpTl+*+q+D+nlWL}]7#c]#cb*cbgcb(cb3cbncbmcczcc5cc;ccJccfcc4cracrdcrCcr:crucr@cr?crkcrpcrfcrvcrtcrNcr0cr+crlczbc{Yc{sc5zc5Hc5Vc5<c5@c5qc5=c5}c5Ec5vc5Zc51cW}cq~cqicq[cqjcqMcqPcq]cgbc=wc=gc=-c=mc?fc?ScywcyJcy>cyhcy@cyWcyRcykcyfcyEcyYcytcy$cy^cy.cy/cylcD[cDYcDOc}$c}Pc}-c}ScfScfTcflcUbcU=cU(cEpcE1c4bc4jc4M|9G|B>|h4|8[|8Y|8P|uV|uD|uU|uo|u+|A2|@[|@s|@1|*0|q2|q<|qX|q7|qB|q:|qu|q[|qL|g3|gZ|=<|?G|?3|?_|?T|R |(g|(s|(!|($|(P6{G6~46~j6676686ip6im6e{6ea6eJ6eh6eq6e=6eU6e46e_6e%6w]6H:62W62v6a)6au6a]6Vq6VD6d/6d+6dl6Jg6J-6<H6<d6<(6<v6F[6FY6Fo6F$6FM6F.6FT6Fl6FL`dt{trets`ux{t}p|t`\\x00`dkbqpm|ohbo?__kp?__kpTmmbka3buq?bl6b}Uoltpbo`wpdw`+\\\\sP`8te?tieCtb:5`Dfq|xe`dteEx|t`$_gg4:`;D@?`v$qxxt$K$$uxppn{K$$u|yK$$u|{kK$qmc$K${njmd.xmn,u{njmd0cnl~}nm4w?qr|1{jvnK$|mc$K$~rn$`etiepctp`yqdrwt|t+TTbftft_wpd_|tddpvt`6}exej`ac~a`-|tep\\\\dPweeaRtbfxg.L\"\\\']0ctuctdwL\"\\\']0\\\\d`ct|~gt2eecxqfet`ctda~}dt3~sj`rctpet@uutc`9E>=7~c|6{t|t}e`gxst~T~vv, r~strd.\"ewt~cp\"mgxst~T|aY, r~strd.\"pgrVSYW6UV6\"mgxst~Thtq|, r~strd.\"ga)Q g~cqxd\"mgxst~T|aY, r~strd.\"|aYgSWUS)Q |aYpSYUSW\"mgxst~T|aY, r~strd.\"|aYgSWUSWYUQ |aYpSYUSW\"mgxst~TiR|pec~dzp, r~strd.\"ewt~cpQ g~cqxd\"`rwpc`w~de}p|t`E<_?2>6`ecp}dprex~}`-6>365 xs.`hx|pi`actgt}e5tupf{e`rctpet6gt}e`dwxue`MN./q`$_uc`K)I9;;JS?H6Z?kCzJyw|Jk>YMN`dhxerw`str~stFC:4~|a~}t}e`~uudteI`?f|qtc`wpd@h}Ac~atcej`uxcde4wx{s`///.`x}dep}rt~u`fc{M#stupf{e#fdtcspepN`feuR)`vp||p`s~fq{t`qgsprbwfsbQsfozeods`$q_a{peu~c|`gtceti2eecxqA~x}etc`E`F}t}r{~dts ctvf{pc tiactddx~}S`}urk_jqqmgfDoq|Ypkocvkqp7vctv8kogDoq|-pfgzgf(ZDoq|6gswguvYpkocvkqp*tcog`apcdt7{~pe`5@>Apcdtc`4p{{Dxet`pctp`M^\\\\dONmM\\\\dO$N`apcdt6cc~c`|d>piE~frwA~x}ed`paa?p|t`aprzpvt`t}pq{tGtceti2eecxq2ccpj`r{xt}e tcc~c`f}xu~c|@uudte`}%jcoogtjgcf%D%vguv[chg[qtg%D%vguv[chg(tkxgt%D%vguv[chg-htcog(tkxgt%D%vguv[chgYwvqocvkqp%`cPm~hcar gbQ\"~~LFih\" aj}qqgbQ\"ajqgbNGDIDdLEMAML~IAEEadA~~LFADD}}DD~bacD~\" ugbrfQ\"Dnv\" fcgefrQ\"Dnv\"RPCm~hcarR`stqfvvtc`L,&]`t}r~sx}v`2CC2J_3F776C`|Zj(rqwuroGZj(rqwuro`6{t|t}e`Atcu~c|p}rt@qdtcgtc`~}qtu~ctf}{~ps`rpdt`T+fdtc_u~}ed`cp}vt>x}`K)I9y`$_r5c~`dte=~rp{5tdrcxaex~}`htqv{`x}etc}p{`_S=62<_2==`oeu|u~yg}`jxt{s`cp}s~|`4C62E6 E23=6 :7 ?@E 6I:DED 6zrA_e Mxs :?E686C ?@E ?F== AC:>2CJ <6J 2FE@:?4C6>6?EQ }p|t E6IE ?@E ?F==Q gp{ft E6IE ?@E ?F==Q F?:BF6 M}p|tNN`ctdf{e`$q|7UpIK{C|{GjF9;`7=@2E`{p}vfpvtd`>di|{WSDtcgtcI>=9EEAS[SU`dollq`tewtc}te`|d5~?~eEcprz`r{xt}eJ`9:89_7=@2E`, tiaxctd.`nYMO7YuwLge}`e~8>EDecx}v`I>=9eeaCtbftde6gt}eEpcvte`dfuuxitd`qvd~f}s`kPR(|yblyj}wuG,}vyjud Yuw|}dy -d}GOeeb~uppG.yhxuduGTyblyj}wu Zyky X, (he ?A ,|}dGju|ecuGXS +cuhj_T jyij *y{kbuhGPUZ(he9b}{|jGTyblyj}wu X, @? X}{|j QnjydxyxGTyblyY_Udx}uG+QO*evejeX}{|j NebxG[* Ye|udjo -d}wexy *y{kbuhGPhe}x +udi ,|u}GWudduxu +ud{uc YZGPPO -w|ydGwbewa><=B_l=:=G+ucikd{Wudduxu*y{kbuhGYU XMZ,UZS NebxG+ucikd{+udiZkc?X X}{|jGlyhxuduGTyblyj}wuZyky,|}dG+QORubbvuwaG+ucikd{Qce~}G,ybk{k +ud{uc YZGOuhhe}i Sej|}w +OGRbocy X}{|j *eveje X}{|jG+eYM9P}{}j X}{|jG+eYO +udi *y{kbuhGT10}1kudVGiijGiucikd{9iudi9dkc@,G{c_cyd{cyd{GXe|}j WudduxuGj}cyi dym hecudGiucikd{9iudi9dkc@XGiyh}z9cedeifuwyG+ucikd{+udiZkc9?, ,|}dGOebeh[+-U90,|}dGPhe}x Zuia| +|}zj MbjG+ucikd{,ybk{k*y{kbuhGNyd{ub} [,+GYU Xud,}d{_SN [kji}xy 1+GR2Y}ue/k_SN=D<?<G|ybly9dyky9hy{kbuhG++, Yyx}kcGOekh}yh ZymGW|cyh Yedxkba}h} NebxGTyblyj}wu X, >? -bjhu X}{|j QnjydxyxGTyblyj}wu X, >A -bjhu X}{|jG*eveje Yyx}kcGPhe}x +udi NebxG{ekxoGiudi9iyh}z9wedxydiyx9b}{|jG+R}dxyhGdeje9iudi9w~a9cyx}kcGc}k}GY*ewao (*O NebxGMdxhe}xObewa *y{kbuhG+ucikd{+udiZkc9@X X}{|jGiudi9iyh}z9j|}dGMu(ud{1uyhGwuikubGNZ Ye|udjo[, NebxGn9iijGZeje+udiYoudcuh2um{o}GTyblyj}wu X, ?? ,|}d QnjydxyxGMi|byo+wh}fjY, MbjGZeje +udi Pyludu{uh} -UG*eveje Oedxydiyx NebxG*eveje Yyx}kc Ujub}wGc}k}ynGZeje +udi Skhcka|} -UG++, .}yjducyiy X}{|jGXS_[h}ouG|owezzyyGn9iij9kbjhub}{|jGPRTy}M/C9MGR22/0N,[,_-d}wexyGPyludu{uh} +ud{uc YZ NebxGiudi9iyh}z9cedeifuwyG(uxuka Neea NebxGXS9R21}d{N}Wu}+|k9+=A9.>:>GXS9R21}d{N}Wu}+|k9+=A9.>:?GTyblyj}wuZykyX, (he ?A ,|GY}wheiezj T}cubuouG+ucikd{+udiRubbvuwaG++, Yyx}kc Ujub}wGMdxhe}xQce~}G+ucikd{+udiZkc9?*GU,O +jedy +yh}zGiudi9iyh}z9icubbwufiGn9iij9cyx}kcGXS_+}d|ubyiyG*eveje ,|}d Ujub}wGwydjkho9{ej|}wGObewaef}uGXkc}deki_+udiGRbeh}x}ud +wh}fj MbjGZeje +udi Skhcka|} NebxGX,T1+2W NebxGS+_,|u}G+ucikd{ZyeZkc_?,_>GMhuv}wG|udi9iudi9dehcubGXe|}j ,ybk{kGT1)}Ty}9A<+ X}{|jGX}dxiyo zeh +ucikd{GM* Ohoijub|y} PNG+ucikd{ +udi Yyx}kcGiucikd{9iudi9dkc@AG|udi9iudi9vebxGXkc}deki_+wh}fjG++, OedxydiyxG+ucikd{Pyludu{uh}*y{kbuhGMd~ub Yubuoubuc YZG+ucikd{,|u}4jyij5GR2Xud,}d{Ty}9Y9SN=D<?<GTyvhym [,+GS+@A_Mhuv4Mdxhe}x[+5G+ucikd{ +udi X}{|jGO|ewe weeaoG|ybly9dyky9j|}dG(Z Ye|udjo[, Yyx}kcGXS9R2Wu,ed{9Y=E9.>:@GPhe}x +yh}zG+ucikd{+}d|ubu*y{kbuhG|yblyj}wuGXS9R2Wu,ed{9Y=E9.>:>GZeje +udi Pyludu{uh} -U NebxG++, X}{|jGPR(Qce~}Gmyuj|yhzedjdym *y{kbuhG*evejeZkc?*GPUZ(he9cyx}kcG+ucikd{ +udi ZkcAAG++, Tyulo Ujub}wGXSbewa@ *y{kbuh_<D<AGSyeh{}uGdeje9iudi9w~aG,ybk{k +ud{uc YZ NebxGYU-U Q0 ZehcubGT1)}Ty}9CA+ NebxGZeje+udiYoudcuh2um{o} NebxGokdeifhe9vbuwaG|ybly9dyky9dehcubGXkc}deki_+yh}zG,Y Ye|udjo[, ZehcubG+ucikd{+udiZkc9?Xl X}{|jG+ucikd{ +udi Zkc@AG+cuhjSej|}w Yyx}kcG{yeh{}uGwuikub9zedj9jofyG+ucikd{ +udi NebxGicubb9wuf}jubiGYR}dudwy (*O NebxGR2Xud,}d{Ty}_SN=D<?<G+ucikd{Mhcyd}udG*eveje NebxGwydjkho9{ej|}w9vebxGn9iij9|yuloG++, X}{|j Ujub}wG,|uhXedGn9iij9b}{|jGP}dveb *y{kbuhG+ucikd{Nyd{ub}*y{kbuhGWZ Ye|udjo[,+cubb Yyx}kcG|ofkhyG+ucikd{,uc}b*y{kbuhGYubuoubuc +ud{uc YZGZeje +udi Wudduxu -UG|ybly9dykyGTyblyj}wu X, AA *ecudGZeje +udi Wudduxu NebxG+udfouG+ucikd{(kd~uv}*y{kbuhGiucikd{9iudi9dkc@XlGXS_WudduxuG+ucikd{ +udi *y{kbuhG2um{o}9[dyGPhe}x +yh}z Nebx Ujub}wGR2WM,V/Gwekh}yh dymG+ucikd{Qce~}*y{kbuhGYU-U Q0 NebxGMdxhe}x Qce~}GZeje Zuia| Mhuv}w -UGXOP OecGRkjkhu Yyx}kc N,G.}le9ynjhuwjGNud{bu +ud{uc YZ NebxG|udi9iudi9hy{kbuhG+Zkc9?*G+Zkc9?,G|udi9iudiG++, -bjhu X}{|jG*eveje *y{kbuhG*eveje X}{|jGTudkcudGdymb{{ej|}wGPRTy}M/A9MG|udi9iudi9b}{|jG(bujy Sej|}wG+Zkc9?XGTyblyj}wu X, @A X}{|jGYoudcuh +ud{uc 2um{o} NebxGb{9iudi9iyh}z9b}{|jGYU-U Q0 X}{|jG*eveje ,|}dG+eYM NebxG(uxukaG+ucikd{ +udiG+fuw}eki_+cubbOufGiudi9iyh}zGP. Ye|udjo[, Yyx}kcG+juvby_+bufGceduweGRbocy9X}{|jGzppoi9xeifoG+whyyd+udiGwbewa><=BG*eveje Oedxydiyx Nebx Ujub}wGMh}ubGWZ Ye|udjo Yyx}kcGYejeouXYuhk /? cedeGTudxiyj OedxydiyxG*eveje Ujub}wGT,O TudxG++, -bjhu X}{|j Ujub}wG++, .}yjducyiy *ecudGZeje Zuia| Mhuv}w -U NebxGw|dzpn|9cyx}kcG+ZkcOedx9?,Gwydjkho9{ej|}w9hy{kbuhGxyzukbj_heveje9b}{|jGZeje +udi YoudcuhGYoudcuh +ud{uc YZGMffby Oebeh Qce~}Gmyuj|yhzedj*y{G+ucikd{Yubuoubuc*y{kbuhGuh}ubGPhe}x +yh}z NebxGO(e? (*O NebxGYU XMZ,UZSG+ucikd{Wehyud9*y{kbuhGjyij@A *y{kbuhGif}h}j_j}cyGPyludu{uh} +ud{uc YZG+whyyd+yh}zG*evejeGwkhi}ly9zedj9jofyG+,Ty}j}_l}leGw|dzpn|G+ucikd{ ObewaRedj ?MG*eveje Oedxydiyx *y{kbuhGiucikd{9dye9dkc?*GSV Ye|udjo[, Yyx}kcGO|kb|e Zyky XewaGheveje9dkc?XG|ybly9dyky9kbjhuX}{|jynjydxyxG+ucikd{[h}ou*y{kbuhG+ucikd{+udiZkc9@Xl X}{|jGY1}d{Ty}_=D<?<_O>9NebxGPR(+|ueZl/A9SNG*eveje NbuwaG|ybly9dyky9kbjhub}{|jG{c_n}|y}GXSbewa@ X}{|j_<D<AGSk~uhuj} +ud{uc YZGYubuoubuc +ud{uc YZ NebxGheveje9dkc?*G+,0}|y}_l}leGR22|kd1kud_SN=D<?<Gdeje9iudi9w~a9b}{|jGwebeheiGZeje +udi Skhcka|}GZeje +udi +ocvebiG*eveje X}{|j Ujub}wGXe|}j ,uc}bGwkhi}lyGxyzukbj_hevejeGN|ui|}juOecfbyn+udi NebxGXS_Zkcvyh_*eveje ,|}dGcedeifuwyx9m}j|ekj9iyh}ziGTyblyj}wu X, ?A ,|}dGiucikd{9iudi9dkc?X.GPUZ(heGVeceb|uh}Giudi9iyh}z9b}{|jG|ybly9dyky9vbuwaGXe|}j Nyd{ub}GYoudcuh +ud{uc 2um{o}GPhe}x +yh}z Ujub}wG*eveje Nebx Ujub}wGZudkcSej|}wG+edo Yev}by -P Sej|}w *y{kbuhGSyeh{}u Nebx Ujub}wGiucikd{9iudi9dkc?XlGokdei9j|}dGiucikd{9dye9dkc?,9wedxGZeje +udi Youdcuh -U NebxGb{iyh}zGR21ekTy}9*9SN=D<?<GXe|}j (kd~uv}Gvuiayhl}bbyGiucikd{9iudi9dkc@,lGiucikd{9iudi9j|}dGXS Qce~}GMd~ub}ZymX}f}G+ucikd{+udiZkc9@, ,|}dG+ucikd{Wehyud9NebxGc}k}yn9b}{|jGZeje +udi WudduxuG*eveje Zehcub Ujub}wGSyeh{}u Ujub}wGiudi9iyh}z9cyx}kcG+cuhj 2um{o}G*eveje Oedxydiyx Ujub}wGZeje +udi Wudduxu -U NebxGPR( +w +udi Tyky?<_=<?GXS_Zkcvyh_*eveje NebxG(uxuka NeeaGn9iij9wedxydiyxG+kdi|}dy9-w|ydG*eveje Nbuwa Ujub}wG*}d{e Oebeh Qce~}GPyludu{uh} [,+G+cuhj 2um{o} (heGR2Xud,}d{Ty}9Y9SNWGMdxhe}xObewa9Xuh{y *y{kbuhGfhefehj}edubbo9ifuwyx9m}j|ekj9iyh}ziGOkj}ly YedeGj}cyiGXS +cuhj_T jyij NebxGPUZ(he9X}{|jGiudi9iyh}z9vbuwaGXe|}j Pyludu{uh}Gfhefehj}edubbo9ifuwyx9m}j|9iyh}ziGiucikd{9iudi9dkc?XGY1ekd{ (*O Yyx}kcGPRSej|}w(/A9NUSATW9+[Z1G|udi9iudi9cyx}kcG++, TyuloGXS9R22|kd1kud9Y<>9.>:>GYoudcuh-Zym *y{kbuhGZeje Zuia| Mhuv}w NebxG+ucikd{Sk~uhuj|}*y{kbuhGzudjuioG|ybly9dyky9b}{|jGTyblyj}wu Zyky [,+ NebxGdeje9iudi9w~a9vebxGiucikd{9iudi9dkc?*GX}dxiyo +ucikd{Giucikd{9iudi9dkc?,G+whyyd+yh}zYedeGQ,hkcf Youdcuh_2/G|ybly9dyky9j|}dynjydxyxGZeje Zuia| Mhuv}wGXS_Sk~uhuj}G+cuhj_YedeifuwyxG,uc}b +ud{uc YZGXS Qce~} ZedMYQG*eveje Oedxydiyx X}{|j Ujub}wG{c_~}d{au}GR2Xud,}d{WudTy}_SN=D<?<Gb{jhulybGfubuj}deGSyeh{}u NebxGPhe}x +udiGXS_(kd~uv}G+cuhjSej|}w NebxG+ucikd{ +udi ,|}dG++, Oedxydiyx NebxGOec}wi_ZuhhemGwekh}yhG[h}ou +ud{uc YZG|ybly9dyky9b}{|jynjydxyxGR2Xud,}d{Ty}9*9SN=D<?<GM* Ohoijub|y}TW+O+ PNGiyh}zG*,/+1ky*ekxSeS<l=9*y{kbuhGY}ue/k_fhylGR21=WGXS_Zkcvyh_*eveje *y{kbuhGMdxhe}xObewaG+eYM *y{kbuhGT1)}Ty}9@<+ X}{|jnGb{9iudi9iyh}zGPudw}d{ +wh}fj NebxGxyzukbjGiyw9heveje9b}{|jGOebeh[+-U9*y{kbuhGjyij *y{kbuhG,uc}b +ud{uc YZ NebxGR21}d{N}0}d{+|k9+=BG*evejeZkc?X X}{|jGcedeifuwyx9m}j|9iyh}ziGiucikd{9iudi9dkc?AGOeeb ~uppG+ucikd{ZyeZkc9?XG+,0}d{au}G+whyyd+udiYedeGPR(/u/u/A9SNG+ucikd{+udiZkc9?X X}{|jGNud{bu +ud{uc YZGSkhcka|} +ud{uc YZG+QO*evejeX}{|jG|ozednhu}dGY1}d{Ty}SN=D<?<O9NebxGiucikd{9iudi9b}{|jGTyblyj}wu X, BA Yyx}kcGPhe}x +udi RubbvuwaG*eveje ,yij= NebxGZeje +udi Youdcuh NebxGiudi9iyh}z9wedxydiyx9wkijecG+ucikd{ZyeZkc9?,G+ucikd{ +udi Zkc?AGcedeifuwyG,X Ye|udjo Yyx}kcG|ybly9dyky9cyx}kcGX,T1+2WG*eveje Oedxydiyx wkijecy NebxGYoudcuh?GPhe}x +udi Pyludu{uh}G+|ueZl_fhylGiucikd{9dye9dkc?XGR2Xud,}d{Ty}9QX9SNWGokdeiGiucikd{9dye9dkc?,G,}cyi Zym *ecudG|ybly9dyky9vebxGdeje9iudi9w~a9hy{kbuhGZeje +udi Skhcka|} -U NebxGPUZ(he9vbuwaGR2Xud,}d{Ty}9QX9SN=D<?<G++, .}yjducyiy Yyx}kcG*eveje Oedxydiyx X}{|jG++, .}yjducyiy NebxGM* PV9WWGPhe}x +udi +QYOGZeje +udi Youdcuh -UGOec}d{ +eedGY1kffo (*O Yyx}kcG*eiycuhoGXe|}j Sk~uhuj}G*eveje Oedxydiyx wkijec NebxGR2Xud,}d{Ty}+9*9SNGTyblyj}wu Zyky [,+GWu}j}_fhylG*eveje9N}{ObewaGR21NW+V/GTudxiyj Oedxydiyx NebxG+ucikd{Syeh{}udGPudw}d{ +wh}fjGiudi9iyh}z9wedxydiyxG|udi9iudi9j|}dG+ucikd{+udiZkc9@,l ,|}dGXe|}j [x}uGN|ui|}juOecfbyn+udi`2q~ce`___ed___`>~fdt`$_uu`v=nju;ujdn{`L`~at}5pepqpdt`~at}tc`r~~zxt sxdpq{ts`8teGpcxpq{t`pcxej`vteCtda~}dt9tpstc`:?D6CE @C C6A=246 :?E@ 6zrA_e M}p|tQ gp{ftN G2=F6DM0Q 0N`cpsx~`atcu~c|p}rt`wp}s{tc`dT~ol/WYA/WY`~uudteJ`o`ctefc} pLq]M`\\\\qMMdfq|xeNmM~at}NmM{~rpex~}NmMr~~zxtNmM~}dfq|xeNmMprex~}NmMwctuNmMdtpcrwNmMdcrNmMdte2eecxqfetNmMvte2eecxqfetNN\\\\q`lbhS|wwxc`5tgxrt>~ex~}6gt}e`$_?pxV`UUUU`tgp{fpet`tnlww=slyazxM_{slyazx`ux{t?p|t`u?rymuckbo2vk}rN?rymuckbo2vk}r`Xyt2=tDdp[`uf}r`CE4Attc4~}}trex~}`|:(<he*{wExfzhe`=@H_:?E`lQtkxTvdcUtktTcixgytvx7}xh|dc`|~k:}stits53`g~xs`~h}tc5~rf|t}e`a{peu~c|`-sxg/:6)-Tsxg/`paa{xrpex~}4prwt`Z`tozw{styMozw{stytyqzMozw{styxpal`htqzxeCE4Attc4~}}trex~}`{pjtcJ`a~de`$_}s`i__o{xzjan{j_{nwdmwl{`x|pvt`acxgpet`}~stGp{ft`r{xrz`prrt{tcpex~}:}r{fsx}v8cpgxej`hx}s~hdRVWZW`~}favcpst}ttsts`7x{tCtpstc`v~e~`@A6?`F}etc|x}pets |f{ex{x}t r~||t}e`|piE~frwA~x}ed`D6?5`~fetc9E>=`{x}zAc~vcp|`rtx{`x}dtce3tu~ct`YYX`9E>=2}rw~c6{t|t}e`u>okvBsnoyN>okvBsnoyH~wI -m~sboD /yx~|yv HSRMls~I`ct|~gt:et|`Atcu~c|p}rt@qdtcgtc6}ecj=xde`2ypi ctda~}dt q~sj cta{pj R `~}ac~vctdd`^wctumapew}p|tmdtpcrwmw~demw~de}p|tma~cemwpdwmac~e~r~{$`Mtgp{fpex}v \\\'}f{{LU]\\\'N`r~~zxt6}pq{ts`{~psts`e~7xits`}f|qtc`?p|t tiatrets`ztjs~h}`~}xrtrp}sxspet`xxi_iypknlIxiivvrzolsm`e~frwtd`dte4{xt}e5pep`tcc~c4~st`rwtrzts`$_uU`>di|{WSI>=9EEAS[SU`dw~ce`b.nyVood~q~mbd`htqde~ct`vte3~f}sx}v4{xt}eCtre`tia~ce`F}t}r{~dts decx}vS`apcdt:}e`f}tdrpat`Ctbftde`$_ua}V`prrt{tcpex~}`t__dpmo}tcp}_~n}t{a_qy`~cxvx}`rctpet3fuutc`gtcetiA~d2ccpj`rwc~|t`HtqD~rzte`peeprw6gt}e`s~rf|t}eRucpv|t}e`|~k:et|d`f}{~ps`L}pexgt r~st]`etieTi|{`$_uwV`ecp}dxt}e`uterw`cxvwe`;pgp6irtaex~}`vte3peetcj`wtps`}~st?p|t`TT`o[awag`E<_C68_6I`~}pfe~r~|a{tet`u{~pe`~}{~psdepce`|gulyhu`ctutcctc`L\\\\\\\\\\\\\\\"\\\\fUUUUR\\\\fUUVu\\\\fUU(uR\\\\fUU*u\\\\fUUps\\\\fU[UUR\\\\fU[UY\\\\fU(Uu\\\\fV(qY\\\\fV(qZ\\\\fWUUrR\\\\fWUUu\\\\fWUW)R\\\\fWUWu\\\\fWU[UR\\\\fWU[u\\\\futuu\\\\fuuuUR\\\\fuuuu]`u~}e7p|x{j`deprz`v{~qp{De~cpvt`{x}z`rwpcvx}vEx|t`r7rnqyrbb2ua|zr`De~cpvt`^M\\\\L~qytreN =~rpex~}m@qytrem5@>Ac~e~ejat]`vv|.{nmnw}rju|`r~}etie|t}f`l             \\\"xrtDtcgtcd\\\" + L                 l\"fc{\" + \"def}+def}UVSdxaaw~}tSr~|\"nQ l\"fc{\" + \"def}+def}StzxvpS}te\"nQ                 l\"fc{\" + \"def}+def}Suhs}teS}te\"nQ l\"fc{\" + \"def}+def}SxstpdxaSr~|\"nQ                 l\"fc{\" + \"def}+def}Sxaet{S~cv\"nQ l\"fc{\" + \"def}+def}Scxiet{tr~|Sdt\"nQ                 l\"fc{\" + \"def}+def}Sdrw{f}sSst\"nQ l\"fc{\" + \"def}+def}S{Sv~~v{tSr~|+V*XUW\"nQ                 l\"fc{\" + \"def}+def}VS{Sv~~v{tSr~|+V*XUW\"nQ l\"fc{\" + \"def}+def}WS{Sv~~v{tSr~|+V*XUW\"nQ                 l\"fc{\" + \"def}+def}XS{Sv~~v{tSr~|+V*XUW\"nQ l\"fc{\" + \"def}+def}YS{Sv~~v{tSr~|+V*XUW\"n             ]         n`~uudteF}xu~c|`>di|{WSDtcgtcI>=9EEASZSU`>tsxpDectp|Ecprz`ecp}dutc4wp}}t{`dte:et|`D6=64E gp{ft 7C@> 6zrA_e H96C6 }p|t.0`rpaerwpCtuctdwQrpaerwp_ctuctdwQrwtrz=~vx}Qstrcjae4p{{qprz`ctda~}dt`r~}ex}ft`|tsxp5tgxrtd`rp}sxspet`hxew4ctst}exp{d`qtep`4~f}e`!`Ctv6ia`ctefc} }th pM`x|a~ce`pddxv}`qfuutc5pep`F}tiatrets e~zt}+ `f}xr~st`>di|{WSDtcgtcI>=9EEASYSU`c`depefdEtie`dt}s`ac~etrets`~Xoespje K\\\\E>GDJ]EB ?*7}60}6Z+@D`-T$V`\\\\\\\\`vte4~}etie`htqzxe4~}}trex~}`e|{~|ku`dteCtbftde9tpstc`d,f~ol,bppbkdbo`stdrcxaex~}`xucp|t`cp}vt>pi`1stqfvvtc`rctpet5pep4wp}}t{`rp}A{pjEjat`rctpetDwpstc`cta{prt4wx{s`ux}p{`wpcshpct4~}rfcct}rj`actrxdx~}`rJ#c5232D2}2U2E2[VId-d/GhC,7}7$7%7 >b>)>:>8BbBwBHB9B2BaB>BqBgB^B&BOhgh(hkh}hfhK)r)z)~)d)G)J)S:b:c:r:{:|:5:>:B:_:Y:K8B8)8:888g8=8R8(8k848[818$uiu^u&uOuMuNunA|@y@R@[@v@m@ *v*_*Y*1*$*%*&*O*M*N*+*,W|W5WWWqqFquq(qkq-q/gYgO=e=w=NyFyuyARWRqR1R%R&R.R-(f(_(YkuIkIIIfI_IYIKItIZIsIoI 3b3c3r3R3(3k3I33343v3&[o$~$6$g$=%V%A%@%*%j&lM:M8M=M?MyPxP9.{.|.1.$.%./.S.0.T.+-d/sS<SFShS)S*SWSq0i0e0w0y030p0D0}0f+w+H+;+xl5lVlF#!#cz2czacz$cz%cz c|fc}&c}O|u!|uS|u0|@2|@a|qF|q>|q8|qv|qj|q_|qY|qK|gK|gt|=g|yz|y{|yU|Rw|RH|R;|RV|Rd|RG|(I|(3|(p|(D|(}|(f|(U|(E|(1|(.|(-|ku|k]|I{|I||Iw|IH|Ix|DW|Dq|Dg|D=|D?|Dy|DR|D(|DI|D36eB6d26da6<a`ecjlctefc} __sxc}p|t,nrperwMtNln` wtxvwe.[ hxsew.V ejat.paa{xrpex~}TiRdw~rzhpgtRu{pdw dcr.`pss3twpgx~c`cta{prtDepet`vte2eecxq=~rpex~}`r~}epx}d`a$2re7YXrowserYlassicB7YXrowser/essageYenter`^MM0+L\\\\spRu]lVQYnM0++mNNlUQ)nNM++N0MM0+L\\\\spRu]lVQYnM0++mNNlUQ)nN$`K)I9;;JSq|7UpIK{C|{GjF9;MN`{vssxGleqqivliehGwlehs{Gym`rcjae~`cL#6viSHm;r2c2kagaDViVBdYd!d%dNd0d,GKG]<b<e<^</FFF7FBF*FqF=FyFIC0C+7U747[7Z7s717O7.BrB{B|B6h?hRh4hv)T),)l)m8u8*u/u0u+ulA3AD@d@J@<@C@>@h@:@A*K*oq6qeqwqxq2qVqGq<gog1g$g^gNgT=-=,?5?;y7y:yIyf(W(}(U(v(%(.(/kFI3I}IUIj3~3i3w3;323<373h3p3E3$3^181A1o11%d%C%7%u%W%3^x^2MXM7M>M)MuM@MRMpMDMfN0P5.5.6.^...,-b-c-5-~-2/Y/ZSXSBS:S@S/SL0R0ITn+r+z+e,S,T,,l|l~l;Lf]b]F]C#A#c|Ac|Ic|[c|1c=<c=XcyLcR>cDpcDE|=F|=q|=$|=n|?p|?[|?+|yr|yD|yf|Rx|Ra|RJ|RX|(=|(k|k |Ic6V46V^6V]6dz6dy6d(`y__jxo|kx_k|gr{gzkH__}khjxo|kx_k|gr{gzkH__ykrkto{s_k|gr{gzkH__l~jxo|kx_k|gr{gzkH__jxo|kx_{t}xgvvkjH__}khjxo|kx_{t}xgvvkjH__ykrkto{s_{t}xgvvkjH__l~jxo|kx_{t}xgvvkjH__}khjxo|kx_yixovz_l{tiH__}khjxo|kx_yixovz_lt`~}dfrrtdd`~draf`u~c6prw`peecxqfet gtrW peecGtceti,gpcjx}v gtrW gpcjx}Eti4~~csx}pet,f}xu~c| gtrW f}xu~c|@uudte,g~xs |px}MNlgpcjx}Eti4~~csx}pet.peecGtcetiPf}xu~c|@uudte,v{_A~dxex~}.gtrYMpeecGtcetiQUQVN,n`apcdtctcc~c`wtxvwe`sxda{pj`, Dp|tDxet.?~}t`hRakhf|\\\\>7\\\\{:8`8teCtda~}dt9tpstc`uC9<vkeo|N;/D`d|mmif~|qflkBu@pel~ht|sb@ci|pe`hcxet`>xddx}v rperwTux}p{{j q{~rzd`#u)W`p.rp}sxspet+`:{{tvp{ }th{x}t puetc 1ewc~h`sJrczobu{zJK idm~ m + zqe 2mbqJK) pqncssq~) ~qbc~z zqe 2mbqJK O m , SRR)kJKK`{~rp{t`q~ee~|`rpaefct`5petEx|t7~c|pe`e~5pepFC=`t{dt`G6CE6I_D9256C`ctd~{gts@aex~}d`t}pq{tsA{fvx}`{t}vew`:}ux}xej` w~de `Q tiatrets `|x|tEjatd`f}dwxue`actrxdx~} |tsxf|a u{~pe,gpcjx}v gtrW gpcjx}Eti4~~csx}pet,g~xs |px}MN lv{_7cpv4~{~c.gtrYMgpcjx}Eti4~~csx}petQUQVN,n`dojl~uA1b|i/i|vbo ZE Vlkqoli`v_>nunwr~v_4/0_=nlx{mn{K_|nunwr~vKljuu>nunwr~v`weead+\\\\\\\\`qx}s3fuutc`v^\\\\$FjLe]ml_`c37WrjB37Wrj`sxdpq{ts`9E>=@qytre6{t|t}e`\\\'`dt{treR`rwpcvx}v`r~}et}eRejat`{x}t}~`r{xt}eI`r`f}xu~c|Wu`dj}rwc~}xkts` dcu{i `q{fte~~ew`|~fdtt}etc`we\\\\{H\\\\Evi|q~m kwlm\\\\]\\\\{Hg`ecft`uc~|4wpc4~st`ac~sfreDfq`cC#c+rzr66*6qiLi]eHeV9AV(Vkd_dPd.dldnGwGB<w<S<0<n7f7&>x>9>(>k>0BcBVB8BuBUBEBlBnhhh)h8huh@h*hN)%)^)0:i:C:7:M:N8V8d8h8K8t8+ueu8uuu@uWuquyuRum@V@k@I@E@4*jWcWzW{q~qyqRgI=P=.?o?!?$?&?O?N?-ywy;y2yayXyCy@y(y1y$R;I!3e3x393[p-U%El%f%v&n0[0v#W#cc9ccaccdcr>c{Bc{yc|nc5bc5xc5hc5:c5uc5Oc~@c~*c?tcR.cDwcDHcD!cD1cKfrkIrI8|xp|8L|8]|*,|*l|D15]F6e>6eK6eZ6es6e!6e1`mgw~wb{ia7wjs~ishw`x}stits53`qtwpgx~c`i+mayc.ae{<+mayc.ae{`@qytreS:}ytretsDrcxaeStgp{fpet`spep+`vteApcp|tetc`pfsx~T~vv, r~strd.\"g~cqxd\"mpfsx~Thpg, r~strd.\"V\"mpfsx~T|atv,mpfsx~TiR|Yp,pfsx~Tppr,`uColD98yq9}q_A:5=A1_`ctda~}dtI>=`wxde~cj`a{fvx}d`dwt}yxp}`spep`pqd~{fet`__~}{~ps__`|`weeaRtbfxg`weea+`pfsx~`ypgpdrcxae+ g~xsMUN,`MewxdN,`~{s4~}uxc|`ip`$_uV`t}pq{t_`x}etcuprt`8te@cxvx}p{Fc{`otuhysu}afya~`}pexgt`paaGtcdx~}`r{~dt`__#r{pddEjat`~uudte=tue`fdt decxre`>65:F>_:?E`sxdaperw6gt}e`=@H_7=@2E`ux{{Dej{t`DteCtbftde9tpstc`.ecft`Dt}s`2ssDtpcrwAc~gxstc`~qytreDe~ct`$_ed`gs7|`vte:et|`rctpetAc~vcp|`tietc}p{`~h}tc6{t|t}e`|~k4~}}trex~}`qq)Wzy`qpeetcj`|d4cjae~`A{tpdt t}pq{t r~~zxt x} j~fc qc~hdtc qtu~ct j~f r~}ex}ftS`f/~zg-gzt~m?/~zg-gzt~m9oh: R|odq~5 Tjiomjg 9DC>{do:`vteDtcgtc5pep:}4~~zxt`apcdt`_q{p}z`E~frw6gt}e`M}tpc \\\'SSS }f{{LU]SSS\\\'N`rperw\');[216]){if([140]));[627]){if([65],\'var\':-1]===[258]]([152]){}else{for(var [36]]===+=-284;[547]],[175];var [93]||[212]:[3];if([154]^[46]]){if([285]),[2]),([450]]){}else if([38];while([64]){if();}return new [28]:if([13]);}return .length));}}};function [383],[255]+[64]){if( !return[(((true,[]),===null){return [447]](-=1;}}return[-1),[3]++ ;}else if([264])){return +=31;[52]]);,false));break;default:[658],=\"$_\"+this.=null;if( ![251],(0);return [663]);[177])),[319]))){[47],[36]]);if(!==1&&++ ]=(([123]);[838];if([222]||(){ ++[133]]=];for(var [166]]);[106],[877])||[134];if( ![52]]==0&&[283]]([433]][[114]]){if( ![206],\"|=\");case [3]];}function [169]];var [630]){if([85]](arguments[0],[132])[]]];[823];var [555];[863],[679]]=[342]];[88]+[88],[230])break;}}while([4]);if( !([333]));}else{if((96);[202]){,1);return;}}}}function [44]);var ();else !==null&&(=this;this.[3].length;[183],[26]]){return [359]]([417]);[150];.x);if(0<=[128]);return =\'\';}[131]];}function [717]];[855]]&&[377]));|=1;[61]];}catch([666]]=[77]];}return\'\';}function [134]){return;}var [83]]+\".x\",[38];break;}()?null:((324);():null;if([62]]();}}function [750]]);}}}}catch(-1];}[0]===\' \')[625]in [488]+[529]));for([107]][[503],\"new\",[60]:[184]]);,0)===\" \"){[15]);return new (231,0);:return true;default:return false;}}function [209]){[60])==0||[400]]()[[575]]([181]){while((843);=1;}}[232]);}return ++ ){try{[295]];[318]][++ ]));}return [130]&&[844];}}function ];}else{return [432],[392]],[13]);if([15]],[210])){[11]);[36],=true;}var [83]];}if([263])||[860],[513]));[169]);}}}return\'\';}[197]]([87]));[842]))&&( ![31]]()));if([611]);();};function [572]]&&>0){return;}try{[855]][)var [845]].join(\'\');().join(\'\');}[86]||[57];if([164]]([299]]!====\'\'){[1]||[375]](\'on\'+[229],[135],0,0,0,0,0];;;;;;var [649]](,arguments[2],arguments[3]);}}else if(===1){if([166]);var [148]]();}[649]]=(669);-- >0)[159]));var ];}return[0,[431]]){}else if([388]);var )===true){[792];[0]&&[194]:case [11]);var [220];}return [755],[468]]&&[57]);case [175],\'else\':[584]){var [16]](new [62]];);}else{if( !(205);,\"\\n\")>=0;return .length-1);[205],\'instanceof\':[77]];if(.length);}if([69]);}}else if(++ )];}else if([130])break;[136]),[866]]&& ![15],);};function );}}}}[265]]){return [163]](0)[[0]].get=[15];[15]:+1);return [15]){|=1;}if([283]){if([267]];for((){function [206],\"^=\");default:return ===\'\'){var [135],0,0,0,0,0,0,0,0,0,0,0,[452])){if([126]||(){}}[194],\"--\");case [71]));}}else{if( ![368])in [561]]();[811]]];){return false;}else if([180]){[197]]){[46]]);while([39]));if(;}}}catch([425]];}function [440]])));=this;try{if([211],[367],[0][0]&& !.pow,[334]];}function ,1);var [643])){[265]]);[180])return(([20]];if( ![10]===()));for(var [600])))[206],\"&=\");default:return ){return null;}}[571]);case [262]]){[206],\"*=\");default:return [203];if([115]));])){return true;}}return false;}function [538]],[457]+( ++[40];var [64]);[758]))){[164]in [92]);if(this.[471]);[410]],(142,)||( typeof [416]);var [38];}else{return 0;}}[697],= typeof([149]:++ );}if([85]]?[605].length;if(.length>0){return new [419]);if(this.[608])))[844])){}var ]&1)===1;if([16];[141]))){[198],[145]>[130]);if([43]]);}}}if([0].length>0&&[16])[4];[197])break;var [557]]);}[832])))return 1;}?0:1;[54])&&[144]);=0;for([420],[466]];[789]]);[738]]([144])+[127]);,1)===[126];[149][[36],\'case\':[784]]+[45])));])&& typeof(.length!=[56])?[727],,\'\'];return[[628]]([265]){return [103]^()return true;}}return false;}function [72]];var -1)*[15]);[106]:[485]];=true;}}}if([612]])||()==1){if([219]){do{[630],+\" (\"+[567]);[241]]){try{={};for([154]]()[,value:.length>0){if([157]){if([629]](new ();if(this.[544])>1;[90]&&()return 1;}[175],\'delete\':[414]);var [483];];}catch([345],arguments.callee);}function [168]===+=12;.length-1);}return [829])){[627])){return >this.[92];}return =\"\";}var );break;default:[766]]);[39]]===\'\')&&[822]]);[0]);case [839]);if([58]||[195]){(228);[102];(arguments[1]);arguments[1]=[100])break;}else if()&& ![63],0,[62]);var [147]]&&[152],0,0,0,0,0,0,0,[334]]=true;}function ](arguments[0],arguments[1],arguments[2]);break;default:}if([84]);}else if(.y)*([68],\">>>\");}default:return [0]].push=(\"do\");this..day:\'\'];[112];var [0]);}}else if([738],[275]]!==[558]],[587]))in ===\'\'){if([327],[577]]([200]][0];[609]];==\'\'||[821]]([131]===+\'\\\\b\',\'ig\');var [323],[109]));[444],[7]),[454],\"==\",[81]]){return +=58;[425]];[257]]&& !([16]](this,arguments);}finally{[9]](0);var [511];}var ===\'\'&&[160]);else if([110]+[227]];[106]]([541]]()!=.length>0;(659);[19]];var [816])!==.now){return [69]||(40);[95],[316]);}catch([1];if([185]:[49]];}catch(=\"\";var [212]][[312];[635]]){[610]]-)return false;var [245],[638])[[60]){[1]=([38]);}else if([128]);break;case .length-1]=[5])continue;[703],[466]]){=[];for(;;){var [209]:case [672]));}}catch([1];}var [719]);}case [761]));[820],\"try\",[484],[700]))){if([93]){return;}try{this.[5]){return;}var [232])));}return this;}function [139];(851);if([197],])+[35]){return false;}return true;}function [280]),]),[490]])[0];for(var [60]||[((([697]){var =null;}return [313];for([76];var [283]](true);(26);===\'get\'||[560]),(166);[84],\"in\",=\'\';}function ]]&&.y||[716]];var [69]);var =false;}var [216]&&+=1;return ,this);}[193];[295]].sdp,\'\\n\');[25]);}else{return [163]:if([38],1);return;}else{[77]);var [215]]([52]]);break;}[391]]:\'\',[880]]();}else{return[];}}function ();else{var [9]](0),[168],\'new\':[841]);var [372]));=\"\";if(-1,[134]);}}return [12])){&&(([106];}else if(=\'\';function (19,[202];}}++ ;}function [142]);var .length==0){return new [729]||){}}}}function [31]]()));}]+=);}}}}catch([82]){if(]];}}}for(]=\'\';}else if((805);]];for(var [401]]);[232])>0&&[49]){if([143];if(.sqrt,[207]);continue;}}if([409])));}catch([340]+[478],\'gim\');if((357,([81],arguments);}function [250][[264]){[1]===[287]);}catch()return true;var ]^=([92],[6]){return [181])])|0;===0||([92]+[79]);[191],\"&&\");case ,[[41]):[675])!==[821]];var [519]][;case 1:return :\'\';return (973,[815],);}else{return;}}catch([692]];return ,0);if(this.[14])===[354]);[140]);else if((960,.y));}function [254],[711]);[485];var ;else return [850],[275]]:\'\',[722]){[166]-([387]))();[184],]);if( !(971)+[569],[216]);var (246);++ ;}return null;}function [141]|0);this.=[\"EOF\",[497]],[730]];if((173,0,[141];}}for([398]));[0]),([3])];}function [282];}function [17];else if([0]!==0){[1])[537]));}}catch([854]]))){[583]],try{new [196]&&=true;}}if([283]](0);.charCodeAt(0)-97;for(var [264];if([95]](arguments[0],[135]^[1].length>0){var [14])return(([45]));[94]];var ()===[1];}while([135]/));case =[[],[],[],[],[]];[407])[843]);++ ;}while([8];;;;;[704]);[8],[452]);}}function [226]:if(];return = !this[))){var [114]){[665])];[40],[77]){if( ![482]][[0]:[1]!==[ ++[0]=new [314]]=\"top\";[47]]){return [101]);}[218];[141])|()>=0&&[147]]);[194],\"++\");case [1];}if(.length);}}function [247]);if(this.[277]]);[261]]([14]&&.top[=[0,[56]];for(var )){return[true,[868]].l__=[386]]&&[855]]();}function );}}else{switch([216];return );}while([0].length-1)!==-- ;}this[[61];[53]||[152]);if(;;}if(this.[783]]!==[28]||[67]];[166]);else if([126]));var ==\"GET\"){var );}}}}function [833]];}catch([1],1));if([667]]();[197]){var ){}}else if(=[];}}function [178]]=[213]));]=\'\';}}[747],]);}else{)break;if([630]](,false)));}[51])+[412])];[72]){if([0]];if([30])+1;var ].length===0){continue;}[422]){var [293]]=[855]]();function )));[70]){if([3]&&[84];}}return\'\';}function [326]));[39]];[39]]=[523]](!==\'\')(57);,0);for(var [20];=1;}}}return )|( ~(367,[269]],+=54;)){return false;}var [561]]();if( ![65]]===[0]];[173]]!==[141]);}}catch([460]||[51]){[573],);}else{if( !())){[155]+[232],[1]++ ;}else if((arguments[[1],\"&&\",\"||\",[549]];if( ![807]))return .y);break;case =null;}[341];var [3]];[187]))!==[430]],[824]),[79]));[1]){if([97])||([800]),,false));}}]));}}function [2].length>0;[21]:if([712]];if(,true,true);if([80],[586],[722],\"int\",[434]];else return [25];else [687],.length;){[80]],\"; \");var [88],\'gim\');var [717]]||[515]]){var [49]]=(171,1);if([55]]);}else{[475];.length);if(]||1){.length>0){for(var )){return new [54]];}function [390]+[81]];var [1]);this.[135]];}function =false;}}function [644]);return null;}var [825]])[161],[13]);var [19];[38]){return true;}}catch(){}if( ![4]);this.+1:[268]].length;[229]))return new [112];}var [376]],[654],)return this.[67]]);}else{var =\'\';}else if());}}function [25]);var [471],){}}return false;}function [96]),[1]^())[[38]];}}return (){try{if( typeof [221]].length;.length)];}while([415],=String;var [106])return [82]&&(this.[10]){var [48]);}}else{[26]){return [16]](this,arguments);return;}for(var [47]]=++ ),[335]]||[210]);[189]];try{var ++ )+=\"\"+);if( typeof =\"\",-1];[122])];for(var [567]]=[230]:[1]),(.ctl&&[296];[879]),){return[true,[641]||this[(859,[882]){return;}else{return false;}function [230],]))[376]]=()).[84]){if(()),[44]);[79]);}[676])!=[96])[[689],[173]);]=\"$_\"+[142];}else{[324],\"var\",[24])return [199];}else if([465]));.push([[27]]||this[[49]))){if([183]){return true;}return (1)?={\'false\':[234],))return true;return [55]],[160]);var (1))[26]&& ![509]];[90];[102])&&;continue;}}while([141])break;}else if([276]]!==);}try{if( typeof [85],[129];var >0){return;}var (96);var (this);}var [85]:[180])!==0)[801]];for(var [38]);return [0]>>>0;}function =\'\'+[56],\'img\',.apply(null,=\'\',[206],\"/=\");}return [439]:[203]);},1);}else{[41]);}function [626]]=[232])||[627]]);}[72]];}})));}else{[668]]);(213);}}catch((328);[22],{keyPath:[205])){[400]]&& ! ![135]:return [19]);}catch([631];[580]];if([691])];[215],\'null\':.length<=1){return [1]:null;[59]][=false;break;}}var [762]]){var [38])|([331]]],[0]].set=[38]==0){[238];[836]],[304],[126]);}function [682]]){){this.x=){}}}[194]){[38]));&& !([59]].x=1,[439],\">>\",[740]]].join(,false);if([206],\"-=\");default:return [91]];}var [196]);[188]]([825]][[71]);if(( typeof [169],\"for\",\"do\",[10]]);[1]);if( ![443]){return )){this.-1){var [45])[135];return [526]);[26])+[356]];return[-1];for([149]];function [31]]().length;[812]]-[812]],[49],\"\");return;}}else if([249]]);if((arguments[2],0);}if([87]));}[33]];this.[89]](0,0,={};for(;=Date,[169]);[41],[358]],===0){if([141]]^[22])){var ))||(([63])){var [141])^[166])+1,[134]);}return [9]],[88]);}function [181]);return;}var [4]);try{[237]]);]);}return [16]){[49]:,1);}else{ ++()&&(()){case [19]),={};;[542])||[83]]+\".y\",[44]][[188]]^[350],[168]];}catch([4]++ ;}else{[846]]!=[53],\'continue\':[47]]([223]];if()?0:[174];var (136,={});[135]:case [47]];[144]);}else if(.length>0||&1)?((171,1);}else if(;}else{return;}}if([429]]();[426]]||[91]]();}catch(=[[],[],[],[],[]];var >0)(true,false))):[39]];if([154]]){[202]))){[422]);var [135]);return .length-1];var ===\"--\"||this.[220],true,[131]));}}catch([228])-52;}else if([46]]&&[78]]([127]]=function [61]){=\"1.0\";[38]];var [40]],=1;}}if((40));ΫΪάέʵʶήί\x00\x000AɏƦɘʿć˃§ɁǔɠʊŞȡ£ȧpƔ̂Ă˔­ȷ¨ːwʏě̕ČɋȍµÄ̑\rȯƓɒc˜BʰƼ˅\x00ꎋᅒƶȤ৥Ɖ႕~Ȥഝg×hȤƁƁȤˌ̯ˈÓˌʐzʐ(ʐ\x00˱ʐ\x00уʽ\x00\nʐ\x00ʼǋʽʐʽǖħʐ-ʐ#̴Ă̕Ȥ\x00Ȥ*ˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ũȤ*Ȥ̈Ȥȥ$ȤǧȤ1ȟȤഗ*Ȥ1Ȥ\x00้̓Ȥ\x00ȤȤڎ\\ȤȤӰŻȤȥȦȧˈƭ\x00ʕȥȦŪŉȧjȧʄˈQȥ;òŻȤȥˈȧyȦQˈ;òŻȤˈȦȧȤȥȦΈȤ\x00Ȥ*ˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ȎȤȥO\x00ɌȥSO\x00ɏǬȥƟȥeȤ\x00¦ȥĭȤºˈˌʼȤÿʼžʼͩˈƭ\x00íǡʻʼˌȤ\x00ʼ2Ȥ\x00ʼȤ\x00ˈ2Ȥ\x00ˈˌiȤȐȤ.ȤΖȤ\x00Ȥ*ˈ	ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ͧǁ~ˈ$gˌ$AʈێԴ੺ᄌpAԋ௤඙ओ=ʼWˈʐʐľʐ±ʐ*ʽGG\x00sʐ@l&ʐʆʽƃН=¢ʽ\x00ˎ༝ˌ%ʽ˄˅Gʾ²˃ช˅րʽ˅ʜʺ}ʽ\'༼ʽ˅޽˅\x00˃ोН=¢˅\x00ˎڿ˅¢˅˅ƭ\x00ޕlO࢕໤˅ӼlOྚ=˅˃ʾûˆƧ˃Oનʽ˄ʽ˃ଉʻʾ\x00ʽöˆ\x00˄ʻaŔˆ\x00˄ʻaŢˆ\x00˄ʻaĤˆ\x00˄!ʻ\'Ѩˆʼʐʽ˄˅ʾ˃ˆʻʿʐ\x00ཇˁ²ˇʼˀې˅ˁëʾˁÚ˃ˁŤˆˁƣʻˁˮʽʽ8ݐʽʽ;ɒˇʿ\x00ʽQΞʿ\x00ʽQᄔʿ\x00ʽQᄫʿ\x00ʽQޅʿ\x00ʽȯˇ഍ˇa႙ˇG˅ആ˅aѬʽ8ဤʼGʾ\'˃မʾ\'ˆTʽ8ۅʼʾ¤˃¤ˆʽ8યʼGʾ\'˃ӽʾ\'ˆӽ˃\'ˆTʽ8˸ʼʾ¤˃¤ˆ`˄Gˇʼʻʿ\x00ʽކp\x00ƭ\x00ˀʽxུʻˆˆ˃˃Gʾ૳ʾaċʾ˅˅˄`ˁچˁǒ˅Ʋˁ་ˁ¬ʾƲˁٚˁ౨˃Ʋˁٗˁ੠ˆƲˁീˁʻഃșȤȥȦȧ	ƩrȤัˈȤ5/\x00\nȤ{JȤ\x00০ˈ	ȥ\x00຅ড়ˈûȤȥȧ͆Ȥ5\'ȧШȦ	{\x00ȥȧmȥ\x00ʬȧം˼Ȥ*ȤȤၠȤâ%ˈÊ?ÊEޟÊµ3ˌÊ?ÊE݁ˈ+ˌ	୾ùȤˈˌȤʼƧˌؾ˂Ǜ\x00\nȤದৃˀˆIˆˌÀˆ	ˈǛ\x00\nȤˆˈ;Ŋˈړˈ&˂,ˈ;ԭˈƮ೷ˈ;ӝˈᄡˈ&˂,ˈ;๹ˈƮႢˈ;Έˈძˈ&˂,ˈ;ࡿˈƮளʼ\x00ˀ!ˈiÅ\x00ɈʼͨȤ	ȤѱͽȤˈþˌ \x00\nȤ࠮ʼʼˌ)ʼ&ɇ˂ǝˌ\x00ʼ૮ˀˌ\x00ʼ̚ˆˀĭ˂ŷ˃˃ˀ)˃&ˆ˅Ƃ\x00\nˀ˃ˆˈǝ˅࢘ˈͷȤ	Ȥئˈ¨ˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤӰĻ%ˈêˌˌ୼ˌʼˌŷ˂˂ࡂ˂ɴʼ\'ႽʼGʼ۠ࠌʼࡥˈ\x00ˌʼ\'ູˈ˹Ȥ	Ȥͮ**Ȥ-ȤņˈQˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤøȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØʽȤ\x00Ȥ˅ȤȤ1ĨȤ\x00؂͌Ȥ	ȤҍȤ¿ȤȤīȤēȤȥ\x00Ȥ$ȥWȤȥ	ƿ3ˈÎŕPìјˌǄȤȥ*ʼŕPӒ˂Îˌțʼ˂ˀO\x00ȓϱˆˀ\x00ͭˆŲ\x00\nˆȓƳ̢ˈŲ\x00\nˌ́Îˌ&Ϋˌ&Ȓˌ&ƐÃǳŕPŀˌˈǁȤȥȦˈȤ\x00=ȥˈ	ˈŨˈȦȦϠˈ\x00\nˈyȦjˈƻ\x00\nˈࠂˈȏȤȥȦºȥȦీÆȤȦѹǬȤzȤ(Ȥ\x00˱Ȥ\x00уˈ\x00\nȤ\x00ʼǋˈȤȤ\x00=ำˈǖħȤ-Ȥгˈ̈́ˌȤ\x00=ʝ\"Ȥ´ˌTˈͿʼȤ\x00=͔\"Ȥ­ʼħȤTGȤ˴˂Ȥ\"Ȥǅ˂ڦˈ،Ȥ\x00řԿţȤ\x00ʓ෣Ȥ\x00ࣦˀȤ\x00ɗˀˀÌȤ\x00æˀóˆี-Ȥʗˈဉ˃Ȥ\x00=ཉ˅Ȥ\x00=ۭ˃˃ܿ˅ˁ:˅ğˁԂʿŭ\x00\nˁǃӊ̂˅ˁǒǪʿȤ\x00>ϻ˅ϙˈ༩ˇǁȤɨŝˊǁȤɭςˊŬˇআ-ȤTˇྐŀȤǗˈज़â੐ȤĒȤȥ\x00Ȥ$	ȥDƁ\x00ǰˈÊˈʐʽ\x00\nʐ\x00ïʽ̈́˄äʐʝ\"ʐ´˄TʽͿ˅äʐ͔\"ʐ­˅TGʐ˴ʾäʐ๝\"ʐǅʾÏĵȤȥȤ$ȥȤȥ*Ȥ$ȥ,ȤȤ\x00௾Ȥ\x00กȤ\x00໌ĀDÊµrÊˈ>3ˌÊ?ÊEཿˈ+ˌܣƀȤĻȤ;చȤ8їȤ;ӝȤ8းȤ;ЉƫȤ»͐ȤȤġȤġ,,ȤćȤ˃ȤȤȤɡȤĂ˰ĂvȤȥºˈ²ȥļˈབྷˈّȤ\x00ˈཞˈᅓȤ\x00ˈੑˈࢼȤ\x00ˈߊȥ\x00ˈܶॉȤ\x00ˈȥ\x00ˈɓˌŜRȤß0ȤÖßȤˉИˈÃ3ˌʻȤ*ʼˌĩ˂ˌŠˀ²ʼ*ˆ\x00\n\\Ȥ֡Ȥ(\\Ȥࡀٱˀ©ˀർˀ+ȃˀ+ଙˆ೐ŏ\'๳ʶƩʾȤʼݦ6qǒ¸ʶྗ˃,\n\n8ś˃\x00\\Ɂ˃\x00>ɀ\\Ȥ೬˃\x00>ઠ\\Ȥࠅ˃\x00>٤\\Ȥတ˃\x00>Α\\Ȥ࣯˃Ȥ\x00ྭ˃޻˅ʽȤ*ˁ˅ĩɛ˅Šʿ\x00\n\\˃ಘˇˀˀ͠ˊჄ˄Ϝŗʿ˂ŕP༑ʼၩʿˇ	ˊʼʼࠞʼŖʼvˏཋˁ	ˏˁʿˇˏ	˄ʼ¬ˏџʼ:ʼ˥¬ˏࡲʿˇჭ\n(ċԤ˄(	˃\x00>­:\x00ìࠗˊˎ˃\x00၍ʼǪʼʿÒˊ˃\x00>­ʼŗʿ	ʺ˃ʿvˍʿ?ԅƿˋ˃ˁˍ-˃\x00Ëźİ\x00 ¦˃ư\n\n8రÃkˈ<ఫ6͡ʶିȢ Ȣ\x00˃ͅ˃\x00ނ\x00 ³˃ਗċď\nw˃\x00ဟ႑ˎʐʑʑໟʑ݂ʽƂ\x00\nʑ६ʽ:ʽၫ˄:ʽNהɬʐ˄N˄šʽʽྷʽ࢐ʺʐʽʐ\x00=Ӣʽ	ʽÎŕPìസʽÎʽ͛˄Lʽɬʐ˄N˄ϪˋʐʑʒzʑŻʽÎʐ\x00=ࡻ͛˄Lʽ૽˅sÂ˄Jċʑ¤ʑ˅ʒ^ɬʐʑNɛʑϪɬʐʑʒʽ\x00\\̴ʽ\x00ĵʑʽ\x00ɦʒʽ\x00Ӗİʐ\x00¦ʽʇʐʑʩüƁʑʽ߮ʩWʽʪʐʪ	ʩϟʻʐʽǖʐJ˄,ʽʽďʽɟ˄ʽ|˄ʐ\x00=ၺ˄ઞ˅˄ƺ˄ʾǲʐਧ˄ʾ,˄ ʐ\x00>­ʾͅ˄>ৗ˄˅ßʽʐʩÉʽ஄˄˄ʐ)˄6˅ʐ\x00෕˄M˅\x00̙˅\x00਀˅\x00ࣇܼ˅\x00٣˅\x00řܢ˅\x00ř׸˅\x00׮ˆ˅\x00Ã˅\x00̈\'˅\x00ʓ٠ʾʾ˅\x00ၢʾ˅\x00ӓʾX఩ˆ˅\x00Ã˅\x00ӓʾXଈ˅\x00řࣃˆ˅\x00Ãŭ\x00\n˅\x00ധǃ࢟ၮග˅\x00řྻʽߒ˅\x00ǋ\x00\n˅\x00ůʴ˅~ႋÃk~\x00ȡʿˆ˅\x00Ã˅\x00̈˅\x00ǋ\x00\n˅\x00ů௑ˆ˅\x00Ã˅\x00ऋ˅~̘˅˅\x00ǋ\x00\n˅\x00ů۰ʇ˅ʐwÃk~\x00ȡ޵˃ɷ~\x00̒˅\x00͋ˆ˅\x00බ˃łˆ˅\x00ᄩ˃Ӵċď\nVˆ˅\x00Ã˅\x00˼ˆȓ҂˃łˆƓ˃ঀʩʽКˆʪʫʩଡʩ&੣ʩ&ƥʪÒƥʫ#ʾʐʑʩʐ\x00=ӢʐʽǪʑʐ\x00>­ʽv˄~̘˄˄\x00ǋÃk~\x00ȡຨ˄\x00̙\x00\n˄\x00ůࡐɬʐ˄\x00Ã˄\x00Ԏ\x00\n˄\x00ů޸˅ɷ~\x00̒˄\x00͋ɬʐ˄\x00౲˅łɬʐ˄\x00ࠈ˅Ӵċď\nVɬʐ˄\x00Ã˄\x00˼ɬʐȓ҂˅łɬʐƓ˅߰Ȣ	Ȣ\x00ʐȥʐ  ʐ ཆʾG\n8قʐ\x00̛ჷʐ\x00̛ךʾ±O\x00ʙʐ\x00࢜O\x00࿋EಌʐȲʐ³«˃ʚ˃nʩكʐ઎ʐ\x00>­ʩÏɷʐDʐ\x00ಲDʐ\x00੕ʽʐ\x00ᄂĩʐ\x00۾ʽ\x00രĩʐ\x00༆ʽ\x00Ԭʐ\x00Υʐ\x00ઁˉDßD7ť%ˈƬǱޖÓ:ƛˈ̧Ȥˈ.ˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7Ȥ\x00Ȥ˦%ˈ\x00ĊˤˌˈÿˌΩˌ҇ˈ\x00ˌX=ʡǿˈ\x00ˌXȧ³ˈ\x00ˌȋ̳Ȥˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ΦȤˈ\x00Ȥˈ5\x00ˈŴȤȥ1ȤSũȤ*ȥ(ȤSőŚȤ\\¹ȥ(ȤSĔȤ\\ȥ͋Ȥ	ȤᄐȤ¿\x00ȤȤīȤøȤzƌȤˈ}ňȤɹˈˌǖˈ̣ˌ±ˌ(ˌ;ҙƢˈˌ1ÏǜȤ1ÆĕȤѹ˵Ȥ\x00ȤŎĂ͘Ȥˈ.ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#̈́Ȥ	Ȥ๮Ȥ-Ȥ°˷Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤć*Ȥ*ˈiˌˈ\"ʼʼˌʼˈ\x00ʼȤvˈqˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ƢȤȥɛȤ\x00ဲȤ\x00Ďȥ¦ƀˈˌૡˈʐ	Ȥ\x00Ďɛ÷າˌDȤ\x00Ďɛ7ƄȤߢȤ(Ȥ\x00ݲȤ\x00ౕ\n\nࣹȤŕшȤ\x00ߏŕP܅țȤ๤Ȥ\x00ϲమǃ೵Æǩ\x00Ȥ\x00ઌȤ\x00ϲŊǃޛÆƃ\x00\nȤ\x00ۈˈɚΗȤˈSȤˈ5SˈƉǁ²\x00ణGlͬæȤˈŖȤ*ˌŲ\x00\nˈčğˌ+͑ˌˍˌࠔĮ\x00\nˈ¶ˌeˈͺ%ɛDǿˆɬƨǱฅʇÀӣ¦ƀ˃¦Ĵ˅¦Ȑˁ¦\x00΋٥ʿ¦\x00΋ҋˇ¦ɠˊ¦Ѡ˄ÊɷʐʩʐʣʨʥFʽè˄ʽ˅ʽwʾʽ˃ʽºˆʽʻʽ\nʿʽˁʽYˇʽ4ʼʽzˀʽÔ˂ʽIʺbʽW˅ࢱʨǛʩ0ʣʾ[ʨ0ʣ˃%ʾӑwŁʾʥ\x00ʣ2ʣGʣǛʩiʾˆ%ʾӑwŁʨGʨҪʩɤʩʾʥ\x00ʨɂʾʻʪׂÂʥ\x00ʨʪʨGʨǛʩʿޞʨQʣʩɤʩˁDʣʨͬˇ[ʣʼ[ʨˀʪĻʪǛʩ˂ʪĻʪҪʩɤʩʺʪ1ʥ\x00ʪűɝʐʑʒºʽʽʑÀʽ	ʐ\x00ʽʒ7ɫʐʑʐ0D(ʑ0D฼ʐܱʑϫʐঢ়ʑಱɶʐʑ1ƭőʐĜʑটʐĜʑŗʐõʑ໏ʐõʑྉɮʐʑ1ƭĢʐĜʑపƭĢʐõʑރɱʐʑʽGʐĝʑȉʐģʑǻƭőʐĝʐŗʐģʐѫƭőʑĝʑŗʑģʑ˘ƭĢʽ͸ʽƨʽeƭ\x00ϏʽɹʐʑʽGʐĝʑȉʐģʑǻƭőʐĝʐŗʐģʐѫƭőʑĝʑŗʑģʑ˘ƭĢʽ͸ʽƨʽv˄ƭ\x00Ϗʽʐड˄ʺƭఎ˄i˄ɵʐʽF˄ɪࠚ˅ʐ༦ʾIʾʐ)ʾ6˃ʐ\x00ʾĿˆɪ˃Ĝ˅Ǝ˃õ˅œʽɹˆ˄_˅˃iʽʀ%ʽèʩFʣʨʥʦFʤFʧLʽ(˄ʽ˅ʽÀʾʽ[˃ʽyˆʽ­ʻʽ«ʿʽ¡ˁʽAˇʽ·ʼbʽW˄ʪʾʣʥʨʤLʧLʩLʦêˊʪYˊ9ʪ4ˊʪzˊĄˊ9ʪYŁʩ\x00ʣɮʪIˊJʾʣʧʪIˊɹɫʪIˊJʾଐʦ\x00ʥɶʪIˊJʾʦ\x00ʥоȬʨ&ʦ\x00ʥ2ʥղʾʪIˊʤʾ#˅̬ʨʥßʾʪʾୟˊF˖ɝˊʾဖʺʺʥÀʺ˃ʦ\x00ʺM˃8ÅˊՓ˃8Ʌˊဪ˃8Ӝˊ࡞˃8֜ˊ൭˃8೦ˊᄮˊࠣʺʺʾÀʺˊ\x00ʺҝ˖֦˖˃ʪʾƷˊ˖ʺè˃ˌâʣʾ1ˊʽĕʽʣჽ˕Fˁˋ˅ˏˇL˖ʺᄎʽʣϵʽ	ˋʩ\x00ʽȘ˅ʩ\x00ʽM˅෌˅<ȬʽΨˋӃʽ&භˏˋQ˅,Źˏ˕Ѿʺ\x00ˏ͓˖Ɗʺ\x00ˏҚ˕\x00ˁˏˁǬˁ೚˃ʺ஍˗˗ˁʀ˗6ʿ˕\x00˗ॎ˕\x00˗MŹʿˇѾʺ\x00ʿ͓˃Ɗʺ\x00ʿҚˇ\x00˗ʿ̳ˆ²ʺʺ\x00ˆ഑ˇµໂ˃ᅗ˖<˃	ˌ˃|ˌ˖`ˊƭŸˌˊeˊˆʪʾîˊ˖ʺ˃ˌӱʽâʤµාʺʧണ˕ಢʺʧÿʺˊʧ\x00ʺ2˖ʧ\x00ʺ௿ɫˊ˖VʺΨˊ٦˖఼˃Gˊõ˖ǻˊĜ˖ඪ˃˃ਖ਼˃ߝ࣪˃˃Ϡ˃֋˃ඞ˃ਣ˃<॓˃׆ˊõ˖ౄ˃႟˃ན˕˃y˕µɅ˕إ˕\x00ےˁĖˋˋ˕)ˋˁ&˕\x00ˋ࠵˅ˁx˕ûˏˇĖˋˋ˕)ˋˇƭĢ˕\x00ˋഐ˅ˏ&ˇʽӃʽˏx˕̷ʽGˏx˕ʜʽŪԯʽ<ૹʾӎˌຜˌȽʾʽฆතʻʪʾБˊî˖îʺî˃ࣱʤµʾˌƴʽ˕ĖˁIˁʤÿˁ6ˋʤ\x00ˁĿ˅ʤ\x00ˁ̚ˏˇˏˋ޳˅ߌˊ9ˏ	ˌɳʽ<Å˖ˊ`ʽˊˏ|ʽƌˇˋ࢞˅Ցʺ9ˇ	ˌɳ˕<Å˃ʺ`˕ʺˇ|˕਎ʽ<ȃ˖9ˊ	˖ˊˌ઒˕<ȃ˃9ʺ	˃ʺˌ൫ˌʤàעʿ%ʾFˊ˖âʤȌ૎ˊʾиʺʰʱʱQʰ<իʰQʱ<ਫ๦ʾɵʤ*˃ʺʾNʾսˌpˌʾ)ˌ6ʽʺʾ\x00ˌʾ\x00ˌ߁˃+ʽ	ˊɳ˖<ؘˊࣞ˖ऌ˖ƌ˃ʽಊˊʾиˁʪʫʾ༬ˊ˖ʤʺƨʾO˖ੋ˃ˌʽD˕ˁˋ˅âʺ੮ˏ˖ÿˏ;˖àʺͺˏ	ˌɪ˖\x00ˏࡡ˖\x00ˏ૧˖\x00ˏށ˖\x00ˏମʽ9D	˕ɱˌʽˁ&˕ˋƭŸˋ˕-ʽˌ`˅ĥˁQˋ্ʺຘඑࢲ˅ˇʪʫʬʾ঎ʫ9ɦ࣭ʪ\nພʬ\x00lɠɫʪIʪY႗ʬVʾաʾʼ%ʾʤNˊɪؗ˖Dʺ˃ˌĖʽIʽʤÿʽ6˕ʤ\x00ʽMɮ˕ʾబˁɪ˕ĜʾƎ˕õʾœʺɹˁˊ˖+Dʺ+˖	ˌƌ˃Č˖ʺʾ˕૏ˌ˃űɩ%ʽèʩFʣʨʽ(˄ʽ˅ʽÏʾʽb˃bʽW˄ʪ	ʣʨĖʾʪYʾ9ʪ4ʾʪzʾˊʪIʾˊ\x00lɢ(ˊ\x00lɧ	ʩ\x00ʣˊʣǬˊ\x00lɢ	ʨ݇˅[ʨʾʪʾҦˊᄴ˖λʺ˃Fˌʽ˕âʣഈˁˁʣÀˁˋʩ\x00ˁMˋ\x00lɢ˖Ҟ˃\x00ʺˋ\x00഻˖\x00ലʺೱ˖ˋӾˁˁʺÀˁ˃\x00ˁоʾ	ˌۆˌ˃ʪʾˊࡷ˖˖ʣÀ˖˖ʺʩ\x00˖Mʾ\x00lɧ(ʺ\x00lɢʾ\x00ඈʾ\x00ܜˊԸʾʩ\x00˖ɂˊ7ˈ%ʽèʩʀdʣɩdʨʥʽँ˄bʽW˄ʪʫʬʾхʪ0ɼºˊ²ʩʩ\x00Ơˊ˖ʩ\x00ˊɽʫʬ˖+D	ʾ\x00ˊ˖ʨҳɽਂˊ²ʣʣ\x00Ơˊʺʣ\x00ˊɡʺ+D	ʾ\x00ˊʺʥҳɡĨʾҀəˈʉˌʐʽèʩʣɷʐJʨɷʐʽ˄ʽ0˅ʽtʾʽB˃bʽW˄ʪʫʬʫ࣊ʪ0ɼ	ʣʬʩƊʨʬćB×˅ʪʫʪ0D1ʫiʪʾʪ1ƨʪO੉ڨ˃%ʾˊ˖ʺ˃ˌʽ˕ˁˋ˅ˏˇ˗ʌʿˆ˘ˀ˓ˉʼˑʌːʣ\nd˒ʨ\nrːΐˍʣYˍ9ʣ4ˍʣzˍ˄ʣIˍJ˂˄˖&˂ëˊ&˂Ú˃ƭŸ˄À˃ˌƭŸ˄[ˌ˄y9Dˈ˄y,ˈྥˋČˇ&ˈÚ˕ˈѵ˕	ˁƌˏ̹ˇxˋ˅̹ˁxˋɊʻ˄«ʿ&ʻë˘&ʻŠ˔˄·ˀ&˔ë˓&˔ÚʽƭŸ˄¡ʽ˄A9D˗0ʌ	˗˄A|˗˗˄A̽˘jˆƭ\x00íʿx˘Oӯ˓jˉƭ\x00íˀx˓Oӯ˒ΐˍʨYˍ9ʨ4ˍʨzˍˎʨIˍʺ&ˎʼ&ˎÏ,ˎb9Dˑʌ	ˑˎb|ˑˑˎb̽˗0ʌ	˗੊ˑ0ʌ	ˑ༸ˍɛLɛ\x00ˍ!ʶKƭ\x00ʖ˖_ɛ\x00ˍ!ʶKˊɛ\x00ˍ!ʶKʩɛ\x00ˍ!ʶK˃ɛ\x00ˍ!ʾɛ\x00ˍ!ʶKˆɛ\x00ˍ!ʶKˌɛ\x00ˍ!ʶKˏɛ\x00ˍ!ʶK˅ɛ\x00ˍ!ʶKʽɛ\x00ˍ!˗ɛ\x00ˍ!ʶKʺɛ\x00ˍ!ʶKʼɛ\x00ˍ!ˑɛ\x00ˍ!ʶÝˉɛƧ\x00E;сɛɊəˈ3ʂˌཕɥɠƴɺqɯ4ɨɢŭɧʣʍБɦʼĈɼɟĈʄɻĈ˂ࡒˀૺɽɷ˂Jɡɷˀ*ʊFʁɭÃdʉޯɿʌ౹ɞʐʑʒȩӖʐചʑ\x00஼ʑ\x00טഴʒƭਸ਼ʑ\x00ಸӂʑ\x00४ਙʑ\x00ၓɪʐʑჩʐృʑɣʋƴʏqɤ୶ʎɜɴɲÃdʃWɚʐ1Ãkɲɸʐʊʐ\x00̅ɥÞɯÞɨÞɠÞɺ෉ɾʐʑʽɞʐʑɚʑ\x00ףɬ	ɰʽɮɸʽĄʃ0ɼ	ʆɼ-ɡʽʃɟ,ɡŁʆɟ࿥ɴfɣȴʽ\x00lɥ	ɽʽTʽ\x00lɠ	ʆɼɦʽʽ\x00Рʄ	ɴʏ|ɜɴɤʽ\x00lɨ	ʎʽɴʋψʋȴʽ\x00lɯzɫʎʽVʆɼ-ɴɣψʏȴʽ\x00lɺ	ɴɣʽ\x00lɠʽ\x00Рɻ	ɴɤɜलɤuʽ\x00lɥ?ɜࢆɜâɜ;Åɴɣۀʃɼ7ʆʐʑʒʽ˄Aࢳ๢˅ʐ0ɼ?˅ɽ\nǥ˅ɡ\nr˅jʽəࣼʐʑʒʂʐ˅ʽ#ɰʐʽLʽʐ\x00۝ʐ\x00̅ɥÞɯÞɨuʽʐЏʽʐုɠÞɺuʽʐЏʽʐœʽʐ\x00௙ɢÞɧuʽʐ\x00གྷʽʐ\x00૦ʊʽଢʊைÃkɭ;ʿʈǳO\x00ଂˏWʅ%ʽA˃ˆʻʿĿ˄AǱႇ˅˅ʽ)˅ී˄\x00˅ʽ\x00˅௪ʾ	˄\x00˅࿽˄˄Íࢭƶ˄܉˃nO\x00ჟʾO\x00ݧغO\x00Մ଎ʾఱˆ[ƭ\x00੻ʻʅğPҜʿ[O\x00ֿO\x00੃O\x00೛ʈ%ʽॏʁ	ʁʅÂɿʽʁʽɿʽʇʽʽ\x00sʊʊLɭÃɳʽनɳʐʽыO\x00١ʽO\x00ਲ਼O\x00ࢠʽO\x00ɜ़ʽҞʽ\x00Ěღʉ^ʽ\x00ʬʐ#ˆDʆɟ:ɛ˃ʐ	ɾɥʐ˅ʐ	ɾɠʐˁʐ	ɾɺʐʿʐ	ɾɯʐˇʐ	ɾɨʐˊʐ	ɾɢʐ˄ʐ	ɾɧʐˏʐɬ	ɰÑɞʍهɚʐ\x00ใʈтΏȤ\x00Ȥ*ˈ	ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#¶ȤȤҬœ\x00Ȥɢक࣮ƀȤƵȤȥȦˈƹȥȦ:ˈ`Ȥʔ͙Ȥ\x00ȤȤgȤيΕȤSȤΟȤ\x00ȤȤņˈ	ˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤǕ˓Ȥ\x00Ȥ΅ȤȤ@NȤ@Ȥ˖ȤSȤ̲Ȥ*$g*-ƣ\x00\r\x00ŇȤˠȤ	ȤņˈQˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤøȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØʿȤȤȤȥȦȧˈ²ȦˈŨˈ<òȤ\x00>ȥȦɋˌi\x00\nˈˈ-ˈ\"*ʼĳˌʼ	Ȥ\x00>ȥȦгȧùȦĉȦmȦæȦ-ˈ²Ȧ*˂:ȦෟȦ˂ѵˈ\"νȦ&ಡ˂Ǔට˂࿨தȦ&࿘ȧùȦ&ƝǱႭˀzˈ-¨ˀ(ˀ֞ȦǪȦܐȦ&čǱԮȦǪȦy˂ţȦ&Ѽ˂ȒȤ\x00>ȥȦˮȤ	Ȥ˓Ȥ¿ȤȤਹNȤȤīȤƚȤˈȤˌƧˈJʼÔʼʼˈʼ6˂Ǜ\x00\nȤʼ๵˂(˂<ӷˌ\x00ʼƥ<\x00\nȤʼټˌ\x00ʼ<\x00\nȤʼñˌĐǮ%ˈƬǱຆ¸:ˈĈȤĶˈႃȤˌ \x00\nˈڇˌ؛ˌÛªᅌʼԹłȤȥȦˈêˌˌȦ)ˌˈ\x00ˌڥˌϳƋҰژদˈÍвΉȤȥȦĬȤȥpȤ$Sȥ̄Ȥ\x00ȤȤˈȤ\x00=దˈYŨˈäȤȥˈˌ\x00\nȤ\x00ïˌɖȥǃʼǖȤʼʼ1ʼŐŖȤ\x00=ȥώˌɑȥ̗˂ǖȤ˂©˂?́˂̵˂ŐŖȤ\x00=ȥώȥɯ˂ǖȤƉ˂˂1˂ЩGȤȥVˈȤ\x00=ȥ:ŖˈTˌŬȥϧˈȤ\x00=ȥ:ˈ?ĉˈǲˌʦȥǃˀǁȤɨŝˆǁȤɭŝ˃Ȥ\x00=ȥˆŬˀϓ˃?ĉ˃ǲˀҎ˃1æ˃ñȤ\x00=ȥΉȤ\x00Ȥ@Ȥ̇Ȥ	ȤஔȤgp@SȤȤȥȦȧȤ$ȥ$,Ȧ$ȧ˯Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤć*Ȥ*ˈiˌˈ\"ʼʼˌʼˈ\x00ʼȤvˈqˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ƴȤȥˈൕˌȥ?ಖʼȥ೫ေ˂ǃैˈ˜ˌ໢ˀଗʼȤȤ\x00ŀ˂ˀ˂ǃخˈ˜ˌࣔˀਏʼѓȤȤ\x00ŀ˂ˀ:Ȥ̻ȤˈFˌÔˌIˌֽˌ	ˈǯˌĔȤ0O\x00໊ˈബʼˈ\x00ˈ࠸ʼ஁ˈ\x00ˈ༎ʼǑ\x00ดdˈTȤ0O\x00ॶˈ׼ˈǀӸ˂͞ˈɞÞˈÛӻϔ˂Cϸˀ3ˈN˂ˈ͆ˀf,ˈߴˈɞˈÛɫˈÛǠˀ\'ˈÛ๷ˈབȤષˈ೪ȤˈɪˈƘࠑȤˈNˈלˈƘ߄ȤˈNˈˈॕãȤˈ#ľȤˈǖȤ*ˌǖȤƉȤe	ˌUȤeזʼ,ˈˈU	ʼˌU|ʼȤ\x00=႘ˌUʼڊʼħʼĤʼ-ʼʼѽ˂	ʼ຺ɛA¾Ϯੴʼڒ\n\n਑ˀ൥ဨ੼ɛˀުɛȤ\x00ʞɛ˧ɬȤ\x00ʞˆˆnɬႹʽǸ=ච˄Ǹل>ęɛѮɬവ˅Ǹᄪ໬ɬ࿩>ęʽԉʞ˄b˅7\"ȤȥȦȧˈ²ȦˈࣧˌLˈˌ๸ˌྲʼǖȤÌȤ\x00>ȥˈȦŕŁʼ>ňʼŖˈˈ-ʼ1ˈʼˈߖˈ༹Ďˈ௎˂஀Ȧ˂Ƃ\x00\nˈ˂ޡʼǖȤÌʼˈʼ1Ȧʼˈóˀ࿹ˈďˈ෿ðȤிˈV̫ˈ̧ˈHভˈV?ȦˈVuȦˈʼǖȤÌʼȦʼ1ȦʼˈࢬȥΕȦಔˆ¿ˈȥ൦ȧ(ˈ+ˆ	Ȥ\x00>ȥˆȞʼǖȤÌʼˈʼ1ˆʼˈȤ\x00>ȥȤ?ˆu૓ȥ+ܬʼǖȤƉʼ	ʼˈʼ1?ʼˈƍȦˈȧȦˈŃȤ\x00>ȥȦ̼Ȥˈ\x00,ˈSĔˌˈ\x00Ȥˌ ˈ\x00ˌˈSőˌˈ\x00Ȥˌ ˈ\x00ˌʃˌ\x00Ȥˌ5\x00ˌ7˸ȤˈȤˈ5ˈ7ƌȤȤ\x00նȤ\x00၃Ȥ\x00ಚΆȤˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7̙ȤȥȤD(Ȥ?ŻˈêˌpˌȱˌƒˈǯˌǙȤ©Ȥ\x00ۇ਼\nƪĈȤ¹༚Ȥ\x00ୠȥੁƘͻȤOȥၻŽ\x00OˈTȥފƠ\x00OˈTȥດ\x00ȤˈTȥنǇ\x00ȤˈyȥۺǦᄊȥ0̲ȥ0̊ǵȤȥˈyȥ0Гȥ0˽ȤȥˈǗȤŕшȤǟȥʭńȤˈɪȥ௸SȤˈɪȥॻʼÎȤ\x00ìј˂:Ȥ\x00ì˥(ʼb˂Ȥȥ؆U࣒ǦoȤ͈ȥ֗ŢȤwȤ\x00ǩǓȤ෾ȥચŢȤwȤ\x00ǩäȤ͈ȥ؀ŢȤwȤ\x00ǩmȤৣȤO\x00଒ȥဣȥಒúȥˈTȥ౅ȤSO\x00࿣ˈΘO\x00ʙźˈ໕ȥʴO\x00үȤSO\x00үˈΘO\x00ʙźˈкȢֻŢȤwÞȤ\x00ξেȢ	Ʃ/RȤϙȥ0ལȤŢȤwðȤ௔gȤɧȥ0ဍȤŢȤÙȎȤɧȥ0੭ȤŢȤĆ[Ȥɧȥ0ඏȤŢȤÙ2Ȥάȥ0ఄȤŢȤÙīȤάȥ0̲ȥ0̊ǵȤȥˈTȥ0Гȥ0˽ȤȥˈTȥ0อȤŢȤɛȤ\x00ඉˈłǅɛƁɛˀƟɛ:ɛȥ0ЉŔȤ\x00Օ,ȤeǰȤȥˈÊˀʐɛʐŃǅʐ#nFF\x00ࢍF\x00੄̏Ȥ	ȤЙˈ.ˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤÏ¢ȤˈȤĭˌʼ˂ȤûˀƧˈŘˌ˂	ˀ\x00ʼൽȤ\x00ˌȎ̓Ȥ\x00ˌȎȨȤ\x00ˌȎ࿔Ȥ\x00ˌූˀęȤȥpȤ$SȥˢȤˈȤˈ5ˈˈ!Ȥˈ5!ˈˈȤˈ5ˈGȤȥˈ\x00\nȤ\x00ïȥତˈ߃ˈհˈۨˈԜˈҊˈਠˈ௟ˈ࿝ÞȤ\x00=໦ࢾǷȤȥȦZȤ$ȥ$RȦʻȤZȤȤg@RȤÏȤɛӪɬüɛLɛདˈʐʑʒʓʔ	ɬōʽǏɛȤࡔȤ\x00ſɷǆȤ\x00ҁƻȤ\x00Ęʇiʽˌʐ1șɛȤۮʇʐ	ɛ\x00ȅȤ\x00Ώɬ	ÑɛȤɬƤɛ\x00ਤU\'Şɛ\x00Ɔ\nɛʐmɛ\x00ƆŇʐÏɷʐʑ	ɛ\x00ȅȤ\x00ǉɛ\x00Ǐ࿊ɬ	ÑɛȤɬྫྷɛ\x00ࣂU\'Şɛ\x00ǟ\nɛʐʑmɛ\x00ǟŇʐʑȲvɛȤȜɛȤ^ɛ\x00Ȇˈɛ\x00Ǟˌɛ\x00ࡑɛ\x00ޓˈɛ\x00઴ɛ\x00჊ˌȤ\x00ſɷǆȤ\x00ҁƻȤ\x00ĘʇiɛˑȤ	ȤܳȤgp@SȤǶ%ˈĹõΌǤˈ഼ª׾ûȤȥˈˌగʼA༶˂AๆᅄȤਊˈˈ˂)ˈяȥ\x00˂\x00ˈ˶ˌȤ\x00˂\x00ˈƨȥ\x00˂\x00ˈѺȥ\x00˂\x00ˈƹȤ\x00˂\x00ˈཝˈˈʼ)ˈяȥ\x00ʼ\x00ˈ˶ˌȤ\x00ʼ\x00ˈƨȥ\x00ʼ\x00ˈѺȥ\x00ʼ\x00ˈƹȤ\x00ʼ\x00ˈٜ̜Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤć*Ȥ*ˈiˌˈ\"ʼʼˌʼˈ\x00ʼȤ#«ȤˈAƋ͒С࿠ˌˌˈ)ˌ6ʼǃɱˈ\x00ˌ੨˂ǃɱˈ\x00ˌƼڽˈ\x00ˌƼ၈ˀˆ˃ĕˀʼ\x00ųȤVˆ྽ˀ˂\x00ųȤV˃Ǭˆʑ˃௲ˆʑ˃ఙˆ9˃ݮƆȤˈ\x00\\͕ˈ\x00ĎȤbˈ\x00ඍȤȥȦȤ$!ȥ$ȦȤȥzȤూˈÃ3ˌȤˈÃˌˈÃˌˌrU\'ࠥˌªÑŶǧˈÃ3ʼˌdˌʼ*˂ʼ´ˈÃЯȥˀO\x00Ο˂:ˀi˂ͱȤˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7¿Ȥ	Ʃ3ˈϜȤ\"ţˈà\x00\nȤ\"೽ˌĘȤˈ*ʼsÂˌJŉˈǊˈi\x00\nȳ¤ˈʼݡˌi\x00\nƲčˌˈ*˂i\x00\nȤ-ˌȤV*ˀi\x00\nȤȤ-ˌȤÅ˂i\x00\nȤ˂yŲ\x00\n˂୰ĦŸˀȤ:˂ǆȤǦˈ \x00\nǦ؄ˌˌˈ)ˌȤˈ\x00ˌߨŋȤȥ\n8śȥܯȥˈȤ\x00\\Įˈ\x00æȥƟˈȥˈ\x00ທˌ๬\n8ƪȥƃˌ	ȥà\x00\nȥˌeȥ̔Ȥˈ.ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#gȤȥˈǖȤˈˈ3Τˈ3ˈ3\x00Ѱˈ3\x00\nȤȥ¯ˌŜ˂Ȥˈ\x00Ȥ*ŵˈ±ˈؐ9ၧ9Ȥࡢ$Ȥ-ˈȤíẴȤȤ@NȤ@Ȥ²ȤȤ+DȤԥȤࢋȤ\x00થȤνȤŨȤvˈ°Ȥ¨ˈÊ	ÊµĨȂȤˈ߾͜ȤZȤ@RȤĽȤȤҬœ\x00Ȥ๱ƀȤႫưȤȤˈAӐ´Ӏ­ǅʂęʩ˳ӿ̉З͌Ͷ΄đϖשࡎŹȤˈJȤȥĻȤȥėȤೌȥ»ǑȤˈLˈ¢Ȥ:ˈჀsȤȥˈ๜ˌƧȥŘȥjˌͣȥŉ\x00Ȥĉ౶Ȥƭ\x00ˈȤxිˌĐȖ%ˈÀ࿬ˈǗǗ\x00অǗ\x00ӟˈ৭ŒྲྀˈرȤȤΜȤ\x00Ȥ*ˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#̑ȤȤġȤġ,,ȤćȤÎȤȥˈŲ\x00\nȤȥˈєȤຒƂ\x00\nȤ¶ˈJƂ\x00\nȤˈ੶ÀȤ1ĿǱȤ»ǇȤȤЌȤǑǰOཫǻȤȥȦzȦ	ȦŕȜȤ0͵ȥŕPȀ(ȥˈȥȥǪȥ^Ȧ\x00ĎȥbˈǞȤȥˈƧȤà।ˌȥ¢ȥȤ¢Ȥ*ʼ˂ˀˆ˃˅ˁʿȤNˇȤˊ˄ˏȤɄˍ๴ˎÔ˂p˂ˏťˊȤ\x00˂2˄Ȥ\x00˂Șˎ଑ˀˀ଺ˀ	˄G˄ͷˊήˊBˠцˊ¤ˎȥ༨ˎB୭՚ΧƇˎGˎQˍɥƇˊGˊͷ˄ή˄Bˠц˄¤ˎȥŒˎ\'Χઃʿˊ¤ʿˇ˄¤ˇˈ\x00ˌʿBŔˈ\x00ˌʿBŢˈ\x00ˌʿBĤˈ\x00ˌʿɥĴˈ\x00ˌˇBŔˈ\x00ˌˇBŢˈ\x00ˌˇBĤˈ\x00ˌˇɥĴʿȤ\x00˂öˇȤ\x00˂ಟ˅ˈ\x00ˌႆˈ\x00ÕˌQ˅˅:ˈͩȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ˋȤ	Ȥ°îȤȤ9͗ˈêˌˌȤ)ˌˈǛ\x00\nȤˌןˈˎȤˈ\x00Ȥ*ŵˈ±ˈՠˈ\x00Ȥ*ˈ`ˈȤ΄Ȥ	Ȥ਄Ȥ°͉Ȥˈ6ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ƜȤӶȤaŔ҅ȤaŢ҅ȤaĤĴȤ\'੧¤ȤȥȦȧ	ȤȥŽȤȤçȦ$Ȥ*ˈ,ȧȽˈȤෙˈȤ7ǅȤˈǖȤˈˈU9D Ȥ\x00>ęˈUˈŚˈോðȤӚȤ\x00>´ˈTðȤѲȤ\x00>­ˈȤ ȤDȄˈ9D Ȥ\x00>đˈȤ࿂ȑ[O\x00ēຩğPڍߩ·Ȥȥ\n\nࣥĠ෯ĠȤ\x00æȥƟȤ೺ĠఃȤȥȦ1ƵƬȤJȥȦ̋ȤˈȤˈ5ˈˈȤˈ5ˈȤȥȤľȤ±Ȥȥȥ(ŉˈˌʼ˂ȤˀˆˈƧƭ\x00Ⱦ˂Oޝ௝˂Ȥà൞ˌ˂	ˀȤ\x00ˌöˈ\x00ʼ!ȥ\x00ˀBɛˆȤ\x00ˌöˈ\x00ʼ!ȥȇˀ\'ȢѕˆBূˀȤ\x00ˌöˈ\x00ʼ!ȥȇˆ\'ǫრˀBஊˈ\x00ʼ!ȥ\x00ˀ\'෢ˌȤ૾ˀȤ\x00ˌ2ˈ\x00ʼ!ȥ\x00ˀBɛˆȤ࿎ˌ2ˈ\x00ʼ!ȥȇˀ\'ȢѕˆBढˆ+D	ˈ\x00ʼ!ȥŒˆ\'ǫၱˈĐèȤűȤ)ʷˈˈȤ))ˈ÷ȤŲȤ)\x00ˈȋΠȤˈȤɛˌʼ˂ˀ3ɬƧ˂Řɛˈ	ˌˀɬ\x00ʼ!Ƃ\x00\nȤɛˌɛ&ˌ`ǱˆWˀ%ʽ\x00Ǜ\x00\nȤɛ˕ʽౖ\x00Ǜ\x00\nȤɛЊߐ\x00Ǜ\x00\nȤɛЊå\x00Ǜ\x00\nȤɛพʽڠʽʽ8ཱིʽOå\x00Ǜ\x00\nȤɛఠ஝ˆʐʽʐĉʰ˄ʐQʽʽǨʽʽҺÄ˄&ʽbɬ\x00˄űȤȥ	Ȥ\x00ЫȥӭȤ\x00ȥഒȤ\x00ЫȥŅőȤȥ\x00Ȥ$\\ȥĤȤȤ௚ˈǩ\x00\nȤ*ˌȒ\x00\nˈဇʼˈന˂Į\x00\nˈˌʼe˂ˌȤ	Ȥສ9҄@҄}ºˈयˈǀȓˏˈ࿍ޤ\x00ƠˈˌȤ]3ʼ\x00ˈĿ˂ʼ\"ˀˀ˂ˀʼ\x00ˀ|ˌࣽˀˀȊ:)ˀ6ˆ:\x00ˀ2ˆªȤ݉9dȤÂȤJ×ǰȤȥȦʊȦݜȤ\x00ȥ৅Ȥ\x00ȥȦ຿߉Ȥ\x00ȥȦNȦθვȤ\x00ȥȦNȦȦ଻łȤȥȦ#%ˈO\x00იˈˈ໺O\x00ঘÃkÖ7ˈȤˈ\x00Ȥˈ5\x00ˈSȤȥ	ȥǪȥȤ\x00୮ȥ˪Ȥ	ȤʒȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤƯȤ΂Ȥˈqˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØˏȤȤ˟ȤˈÅඝȓȤӬˈrฯˈ%ʩ̟ʽ;दWʽ$Éʣüʽ\x00ſ˄ʽ\x00Ͼ˅ʽ\x00Ęʾʽ\x00̾˃ʽ\x00΃ˆʽ\x00Ɵʻʽ\x00ʤʿvδʽȜδʽਰ˄Dʩ\x00ķֈಂʣۋǏஜʣ	ÑʩӉʣƤʩ\x00࠷ʩ\x00ǟ\nʩ#˅Dʣüʩ\x00ķǉʩ\x00Ϟʩ\x00Ϻ\nʩ#ʾʪ	ʩ\x00ķΏʣ	ÑʩӉʣƤʩ\x00˅ʩ\x00Ɔ\nʩʪ#˃nʩ\x00әʩ\x00̥\nʩ#ˆDʩ\x00ʽȕʩ\x00ķǉʩ\x00΍ʩ\x00΁\nʩ#ʻDʩ\x00ʽȕʩ\x00ķǉʩ\x00ˈʩ\x00Κ\nʩ#ʿʪʩ\x00Ћʩ\x00ʮ\nʩʪÏˌગO\x00୓༛\rO\x00ᅀʽ\rO\x00ჳʩඣ\r\x00΃˄$\r\x00Ɵ˅$\r\x00Ęʾ$\r\x00Ͼ˃$\r\x00ʤˆ$\r\x00͜ʻ$\r\x00̾ʿW˄nʩ\x00΍ʩ\x00΁\nʩ#˅nʩ\x00ˈʩ\x00Κ\nʩ#ʾnʩ\x00˅ʩ\x00Ɔ\nʩ#˃nʩ\x00Ϟʩ\x00Ϻ\nʩ#ˆnʩ\x00Ћʩ\x00ʮ\nʩ#ʻnʩ\x00ϼʩ\x00͙\nʩ#ʿnʩ\x00әʩ\x00̥\nʩࢣO\x00୺ƻO\x00ޒˌO\x00љO\x00зEǱO\x00̮EІ˂O\x00̮E҉ˀŦʼHO\x00нˈ̪O\x00ĲðO\x00ࡉʼ	O\x00ĲðˌÂO\x00ĲEȆˆO\x00ĲEǞ˃,O\x00љO\x00зEǱO\x00ĲEІ˅O\x00ĲE҉ˁ˂̀W	O\x00ƫEЇ࢓ʩ˚ʣ۔ʽʪ	ʣ\x00ķބʩ\x00\nʣʪ-O\x00ƫEЇˀWϬʽϝ˄Ä˄\x00ӛ˄\x00Вʩ˄\x00ѐʽ$˄ˀ̀W	O\x00ƫEҏၼʽʽȊ)ʽ6˄\x00ʽM˄\x00ε˄\x00ΔO\x00ƫEҏˀWϬ˄\x00ࡏ\x00Õʽघˆ[Ǐ̍Wъ˃[ș̍Wъ˅%ʩ˚ʣ̟ʽʣWW˄ʪ	ʩ\x00\nʣʪ-ʽ\x00ྰ˄ϝ˅Ä˅\x00ӛ˅\x00Вʩ˅\x00ѐ˄$˅ˁ%ʽWŷ˄˄Ȋ)˄6˅\x00˄M˅\x00ε˅\x00Δʽ\x00ඐ˅\x00ಈ\x00Õ˄ඟȠȤűȤ)ʷˈˈȤ))ˈ¦ȤŲȤ)\x00ˈȋˍȤˈ\x00Ȥˈ5\x00ˈˈȤˈ5ˈͭȤˈ\x00Ȥˈ5\x00ˈͼ\\ҭĒÑũ<Ƹ\x00ѳ©g\\ˌɽ\\ΎĒÑũ¬Ƹ\x00ˌ͇̍Ȥ\x00Ȥ̊ȤˈZȤˈ5ZˈˈRȤˈ5RˈǐȤȥȤ$ȥ̣Ȥ	Ȥ࿚Ȥ-Ȥ°$Ȥˈˌİ࠲ˈéˌŽȤť̜ʼ	ˈòˌŽȤØჇ6qǒŏ˂À൶ò˂Žˈ̫Ȥˈ8\x00Ȥ*ŵˈॐFȤ-ˈȤͥ%ˈƧҨˌƧҨʼ˂Ô˂˂Ġ˂ˈ\x00˂Åˌ\x00˂˂vɛ್˂Э˂׺˂ƒʼ˂Qҋˈ\x00˂<\x00\nɛʼJˌ\x00˂Ǜ\x00\nɛʼɛˈĝˀɬ \x00࠰ŮˆWˀ[ɛˆ[ɬ7˳Ȥ	Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØǼȤȥˈAʲൺ͚࡫ͤೖ஌࿁અȶறđຠЕ࿾໽Ⴗଟ܀णฏસȤठȥ౟ŹȥˈƾȤȥˈȤ\x00ȥߡˈ\'஭ˈఔˈ\'࢔ํˈ\'ԱȤȤ\x00ȥ౦ˈ\'྅આˈ\'੾ȨȤ\x00ȥΦȤȤ\x00ȥշˈ\'঱ླˈ\'֏̓Ȥ\x00ȥΦȨȤ\x00ȥ঳ȤȤ\x00ȥၗƁȤȥȦȤŨȤDŻˈƧᄦˌʼ࣋˂տˀॳˆƺȦ ȥȤˆȤ\x00˂ϗˌʋˆəˆˆ\x00ʼआ˃ˆ\x00ˀMȥˆฉˆ˃শˈ\x00ˌ!ˆˆˆ\x00˂ŧˌjˆˈͣˌ2ˆˆ\x00ˀௗ΢Ȥ	Ȥˈˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤØ2ȤȥȦO\x00ɌȥSO\x00ɏǬȥƟȥeȤ\x00ခȥȦΨȤˈ¨ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#¡Ȥ*ȤĲȤȥȤ$\x00ȥ˕Dŗ«¦OäǺʶԖఉıO\x00ঞO\x00࿢ఌƤƮ×ņȤȥ\x00Ȥ$ȥŚȤȤȤµɇˈ<\x00\nȤӭˈ<\x00\nȤȤՌˈ໻ˈီĮ\x00\nȤŹȤີȤ̬%ˈ\x00ĊˤˌˈÿˌΩˌ҇ˈ\x00ˌX=ʡǿˈ\x00ˌXȧ³ˈ\x00ˌʟ6qǒ¸^»\x00^ˈŬȤȤͮȤȤ#ȄȤȥȦ*Ȥ$Qȥ$Ȧ$é:8é9ơµȏ΁Ȥ	ȤܸȤ¿\x00ȤȤøȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØ˔Ȥˈ6ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#țȤȤO\x00࠱ˈԷဥଣˌˌˈ)ˌO\x00ˈ\x00ˌ༴O\x00ˈ\x00ˌ೔ӡȤ཰ʼO\x00ˈ\x00ˌའ˂ʼ˂ʼ\x00ၳ˂ʼ\x00͟˂Ƞʼ\x00͟˂XӡȤຖΞȤȥȦȧȤD(Ȥ?͏ȦཛྷƄȤ\x00Ȧຎȧ¹ǦǻȥȧȤ\x00ȦޏȦ୩ƄȤĆǻȥȧȤTŢȤwðȤ֕ȥÜȧǲȤÒȧ\"ȤȦȧ:ȧŢȤwðȤಏȥÜȧ&Ȥ\x00Ȧ2Ȥ\x00Ȧȧâ/ȧȦߎŢȤwðȤ੖ȥÜȧäȤȦÒȧ\"ȤȦȧ:ȧȦఛȤȥÜȧёȧ8ȧ:ͻȦစŢȤĄȥ͵ȧȤ\x00ȦƼȧ\n\n8śȤ\x00ȦȧƟȤ˧ˈ\x00\\Į·ˈȧȤ\x00Ȧˈ\x00ɗhȤeȧȦ്ŢȤĄȥÜȧȤ\x00ȦƼȧ,\n\n8śȤ\x00ȦȧƟȤ\x00ၨˈ\x00\\Į·ˈȧȤ\x00Ȧˈ\x00ɗˈ༪ȧȦൟŢȤwGȤȦwȧȥÜȧŖȤ\x00Ȧ༡ȧȤ\x00ȦǪȧ:ȧðȤેȤȦȧࡕȧȦޢȤŕɲȥÜȧŕPȀ(ȧ௄<\x00\nȧȻྦȧƂ\x00\nȧÌȧŕPȀ¬ȧ`Ȥ\x00ĎǪȧ:ȧȦഷŢȤwðȤڰȧħȤeȧȤ\x00ȦˆbȧǙȤɃȦŚȦй\n\nʇˌȤ\x00Άʼ\x00\nȤ\x00фðˌўʼ˪ðˌ˹ʼбʼႦȥ0ÜȧäˌʼÒȧǓˌʼȧ:ȧЩȦౘȥʳŢȤwðȤ௣ȧߤ˂ǖȤழ˂3ȧȤ\x00။Dóˀࣿȧȥ0ႡȤ\x00ȦཚȧbȤ\x00ȦȧWˆDŷȤȤe׿ȤȥȦ	6qǒɍȦࢽȤˈǊȥˈਦȤιȤҶȤ๋Ȥ¤ȤȦᄚȤ6Ȥȥ	CȤ,ȥ @CȤǈ̬ļɬļɬļɬļख़̓ȤȤ#͓Ȥ	ȤgȤ°ÓȤȤd%ˈU\'๗áė\nႯˈɛAߑ׌ຂ໥ຑׯఐ൵ࠧʶశේु૨O\x00чˌˌʐʑºʽʽɛĬʽÞʐɛ\x00ʽ௯ÏÑáʐਜ਼ʑ˻áʐʑşáʐ#̨Ȥˈ6ˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤÏ̆ȤˈȤˈ5ˈļȤ1ƭ\x00íǡʻȤmȤȥˈ\x00\nȤ\x00ïŗˌǖȤˌˈɖȥʛˌ?ˌ1?ˌ?ˈɑȥ͍ˌ?ˌ1?ˌ?ȥجˌDˌ3Dˈ˲ȥʛâॄȤȥ˱Ȥˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ȆȤ	ȤĮ\x00\nȤŹȤนȤƬȤ:ƾȤŅºȤȥˈˌȤɄʼ˂Ōˈ8ˌ	ʼĥˈˌˆ˂Ȥ\x00ʼM˂ȥ	ˈʼ̎˂<ȥ	ˌʼϕ˂ȥ1ʼᄽˌĉ؅ˌŢȤˈO\x00૫ˈ੪ȤΛȤ\x00ࣖȤSˈ(ðȤ੍ȤǘȤŊȤΛȤ\x00ПȤ\x00࠼Ȥ\x00ժȤ\x00˔۷Ȥ\x00ң߭Ȥ\x00˔༔ˌɚſȤɛŭ\x00\nȤǃඥۿɬʇɷîɝâ<\x00\nɛȻᅍɬĈɫAτܚΣˉσҮǡ೾ҿᄬ೻వසॆϰΠҢ༘ႠಫғඎɶAˡ࣏ȍੜๅЁਃǨ႒ʂȈΑʲҤࣲٸۛୣȈđਟ෠ȈݼǨܖǨ௨ᄄɮ[<\x00\nɛɬɱ[Ǜ\x00\nɛɬɹ%ʽǛ\x00\nɛɬƙʽɅɷܡʽɵʐəʐคɹ×ʀʐ1Ƃ\x00\nɛɬʐȼʐɩþəĖˈˈƿˈɩĀȀ؞ʂʐʑʽɩ\x00ə2əGə׍əӘʽʐʽʑʽxʇʽ¥ɷɷüɝʐbʽжɥʐʑ୚ʐжɠʐʽɬ˄೅˄Ǜ\x00\nɛɬƙ˄һ˄Ǜ\x00\nɛɬƙ˄෹˄ຟ˄Ǜ\x00\nɛɬڋœ\x00˄ɢॢႴ˄എ˄֬˄Ǜ\x00\nɛɬѷ̦˄˄8ໆ˄෴˄ଚ˄Ǜ\x00\nɛɬѷ๏˄(˄කÍ˄V˄Ǜ\x00\nɛɬ๪˄ڈʐ	˄Ǜ\x00\nɛɬǴÍ˄V˄Ǜ\x00\nɛɬ౔˄ແ˄්˄Ǜ\x00\nɛɬƙ˄࿯˄ჾ˄Ǜ\x00\nɛɬǴÍ˄V˄Ǜ\x00\nɛɬࡗ¶˄ƾɥ྆ɬ̨˅Į\x00\nɛʽɬʐ ˅ʐ˅bʂ4˅รɺ%ʽɬ˄Ǜ\x00\nɛɬၾ˅಩˅Ǜ\x00\nɛɬζ˅(˅ɘɥ׷˅ӨɬႳ˅+˄YʂqĮ\x00\nɛʽɬ»ɯ%ʽŲ\x00\nɛಆɬJ˄,ʽÎ˄Ƃ\x00\nɛɬɬɛ̷˄Į\x00\nɛɬʽɬʽiʄ෭ɨ%ʽŲ\x00\nɛոɬʽĦɥ૜˄Į\x00\nɛɬʽɬʽpɷɷ(Ų\x00\n˄ธʄ×ɢ%ʽ˄ɬʽǛ\x00\nɛɬǴĽʽVʽǛ\x00\nɛɬ̇ɬ̨˅Į\x00\nɛ˄ɬ:˅ɧʐʽɬ˄˅י˄Ǜ\x00\nɛɬζ˄(˄ɘɥڂ˄੹˅Ƥ˄Өɬઊ˄Ǆ˅Ԧ˄+୳˅ ɢ/ʂʐĮ\x00\nɛʽɬ»ʍ%ʽɝ,ʽӲʽҊʽϐʽൖʽೢʽӲʽࣰʽ఺ɦDɬ܌ɮᄥૄɹ/ɯ½჆ɹ/ɨԀʍɲɮྶ˒ɹ/ʂჅʂȷൢɧ೩ɼDɬ༺Íɱಥɠེʂඅ჉ɟ%ʽɢrɝၷʂχʽ*˄Æɫʽ˄ְ˅ɶ\x00˄࿄ʂ˅ʽeʂχʽʄ%ʽǛ\x00\nɛɬŘʽ˖״ʽʽ8ิʽ<յǜʽՏʽɘɷ«ʽǛ\x00\nɛࢥɬ-ʇɬʽǛ\x00\nɛɬோʽf୑֒ɺ½౩ɼ½মɦ½࿌ɹʽɱtʽf{ɹʽɱtʽf{ɹ/ʂڢʂগʂЅ༖ୈɹʽɱtʽf{ɹ/ʂ஘ʂȷಶʁɹʽɱtʽfʁɹ/ʂླྀ{ɹ/ʂ๒ʂဩ૘ঽɹʽɱtʽf{ɹ/ʂ๖ʂȷٽǍɹʽɱtʽfǍɹ/ʂ࿗{ɹ/ʂҘݗʂӗࠉൡʀಽɷ	ɵᅈɯÂɹʽɱtʽfњɹ/ʂึ{ɹ/ʂჲʂӗ׏ߓʀ஺ɵܔɯÂɹʽɱtʽf࣑ɹʽɱtʽf{ɹ/ʂଘʂࡧ{ɹ/ʂ਩ʂѴփ{ɹʽɱtʽf{ɹʽɱtʽf{ɹ/ʂ܏ʂըʂϻଔǵɹʽɱtʽf{ɹ/ʂ٬ǵɹʽɱtʽf{ɹ/ʂ২ǵɹʽɱtʽf{ɹ/ʂҘಗʂ໐ʂ૝ʂѴࢷۡɹ/ʂɷθఏɹʽɱtʽf{ɹ/ʂะʂࠎьɹʽɱtʽf{ɹ/ʂඌьɹ/ʂ଄ʂݴತંɹ/ʂࣕऒ˭ɹ/ʂยஉ৽ɹ/ʂ௺੿ˌɹ/ʂ̖ಞഥɹ/ʂͥ૟ఀɹ/ʂ͚૯ջɹ/ʂܕ๔ഠɹ/ʂୁฑࣩɹ/ʂ෻ࢺႼɹ/ʂ༠ٓʽۄ¶ʽÙɟrÍʽÙɠЯʽYʂ࢑ɥཨÅʽФʄ±ɥʄLˌbʄWˌDɝ۹ͫȤSȤͻnO\x00ܩɛO\x00ᄸO\x00ၽˈॼŕPوŕPඳŕP˨ݬŕPଭŕPഡŽŕPଏˈʐʑʒŗ	ʐǪʐ௘ʑ	ʑ౱ʒ	ʒ֯ɛʐʑʒ#̡ȤZȤ@RȤ˿Ȥ\x00ȤȤ°̤ȤȤģȤȥ\n\n8ƪȤ\x00൚\x00\nȤ\x00Ȫ̱Ȥ\x00ȥࣈɛ\x00\\Įɛ\x00æȤ\x00ȥ2ǅɛƁɛˈ:ɛ\x00ჍȤȤ\x00༭ǅȤƁȤˌ:Ȥ\x00ȥКˈʐɛʐŃǅʐˌʐȤʐŃǅʐ#ƟȤƁƁȤǬ̯ˈĪÉȤȤ\x00༥Ȥ\x00՟Ȥ\x00়ÚȤˈ \x00\nȤ९ˈმȤ̳ˌIˌˈ)ˌ6ʼˈ\x00ˌMʼƃɇ˂Ƃ\x00\nʼ¶֝ˀO\x00ˇ˂ћ௜ˀˀ8ӷˈ\x00ˌĜ\x00໠ˀÒƂ\x00\nʼڳˈ\x00ˌԚˈ\x00ˌɂˈĐǝȤˈِˌˈʼȤû˂ˀˆ˃Ōˀʼ	˃<\x00\nȤˀÇˆŲ\x00\nˈ˃˂ޑˌ˂&ˆi˂śȤˈ༂ˌ:Ȥ̀ˌ¢Åˈˌ༕ʼˌǓçၜ˂ʼʼ\x00˂൏ࣸʼ\x00˂೟ʼ\x00˂ʏ˂ދˀˀ˂࡟ʼ\x00ˀ૭ˀùʼ\x00ˀʏˀҌˀɟʼ\x00Õˀ჈ʼ\x00Õˀཌċˀݥʼ\x00ˀÁ঄ˀùʼ\x00ˀʏˀƊʼ\x00Õˀ఍ˀഏˆʼÍොˈǊˆ&¬ˈiˆ̞Ȥ	Ȥ¿\x00ȤȤǕŜȤȥˈȤ,ˈˈၑˌˌˈĬˌĶʼˈ\x00ˌ2ʼ\x00Ѱʼ\x00\nȤȥ¯˂མÍȤ1Ȥ;ΈȤ8࢛oȤȥ	Ȋ&ȥƺ«Ȋڮ	ȊVȤ\x00ƧȊȊऄ\n\n8ؤˈȊ̪ȊŋȤˈ¯ˌƁȊƴˈăȊŋȤȊȊƴȊѽʼ	ȊˈইȤ\x00ƧȊȞ˂ŵP̆ȊຯˀȊ\x00£རȊ\x00ںˀ	Ɵ˂-Ȥ\x00Ƨ˂\x00ׁݩ˂\x00 ჌Ȋ༳ȤȥȦˈȦNˌȦʼȦ҆ʼ0Ǆʼʼ\x00ҔʼJˈکȤ)º˂˂Ȥ))˂Ȥ)\x00˂Áˌ Ȥ)\x00Õ˂ধJˈ˝Ȥº˂˂Ȥ԰Ȥ\x00˂Áˌ	Ȥ\x00Õ˂ᄣ˂ॱǰȤȥȦ˘Ȥ\x00Ȥ@\\Ȥ͍ȤȤ#űȤ1ƃ\x00\nȤ¹૷ ȤˈলˈȤȤÚȤ࿧Ȥ9ˈYƻ\x00\nȤĿȤ1Ű¥ȤJ6qǒԟ9ȤȥȦȤ$ȥ$Ȧ͗Ȥˈ\x00Ȥ௧\x00ˌ	,Ŵˈಃˌ๭ĒÑũv౺ˈXsˌၪăȤȤ\"ˈ::Ȥƕ਒ǍˈתȤ\"ůȤȥȦȤ$Nȥ$Ȧǘ%ˈO\x00̿ˌÀΗƪˌଢ଼QŘشQŘ໮ʼˈ\x00๎ʼˈ\x00ϑˁʼЃʼ॔˂ˈ\x00˨ʼǦÀཁˀ \x00\nˌͨǆ˂аˀµ͎ʼ+ˀజˈ\x00௹ˀǒࣗˆǦˆ့ˆᅂǦ&֐Ǧ&˂ցţȤȥzȤ±ȥ˦Ƃ\x00\nȤȤàȥȼȥk%ˈ\x00¼ເˈ Wˈ\x00ÃĦˈࡅǨȤˈ৆4Ч଼౭ȤB¦ఁȤ\'ˈ\x00¦۪ԇ¦»΀Ȥ\x00ȤïȤȥpȤ$ȥ͈ȤȤ@Ȥn[!ఖ\\ȤȥˈȤ\x00ȥଶˈΓˈˈȤ\x00=ȥႄˈΓˈˌȤ\x00ഞȥMˌ1ˌ\x00පƿDřƺƨÀЮÇÃʶყ8Ȥŏ\'ŖȤ:Ȥ˿ˈ:ȤN˗ˌFʼõrˈţˌˈNᄞˌndbˈ϶ͥéˈʼઓ˂	ˌˈܟˌˈкȤţˌЎˌȤઍȤˌڻO\x00̺ƬȤĉȤȤ	ȤŖȤ*ˈŲ\x00\nȤƝğˈ+͑ˈˍˈנȤĮ\x00\nȤ¶ˈñȤǵȤȥȦˈȦNˌȦʼȦ҆ʼǄʼʼ\x00ҔʼJˈਆȤ)	Ȥ)ݑȤ)ˌðȤᄗ˂ōˀȤ\x00=௻ˀˆA¾Ϯෲ˂໡Ų\x00\nˀˆɮˀ(˂ ȤǗJˈ˝ðȤѲħȤɮȤ	Ȥೣȥ௬ȤˌTȥ׉Ȥ\x00دˌٞǰȤȥȦưȤ1ȏ^ªȤňȤ1Ȥ\x00̋Ȥ\x00โ˾Ȥ\x00Ȥ̠Ȥ:ȤˁȤ\x00ȤȤˈȤ\x00ª฀ˌʼ˂ˈ˂ˈʆʼ˂	ˌĩˈ\x00ʼŶˈ\x00ʼ!ˌ<ࠟࠠˌiˈşȤȤ$é:8é9ơµȏPȤȥȦȧȧ\x00̶ȧ\x00ƚùȧ\x00˞ȧ\x00ƚòȧ\x00˞F\x00෽ȧ\x00੗F\x00নȦʶ৞ˈǄȤȥȦੱȦ0D(Ȧ؇ˈ,F\x00ॴˈ,Ų\x00\nˈ࢖Ħˈ&၄ˈ&Úˈ&xȦ,ȧ\x00̶ˈ&ú½ȧ\x00ৄˈ̪ȤȤqȤȥȦȧˈȤ\x00ȦˌȥӇˈNʼȥ\x00Ȧ?୧ˈ˂ȥЛˈƷˀȥ\x00Ȧ͊Ξˈ´ˆ˃˅ˁˈĭձqʿˇˊ୅˄ȧNˏȧˍȧƷˎȧ´ʺȧˮʿʿˁʿˆ˄\x00ˌaǔˏ\x00ʼB÷ˍ\x00˂Bôˎ\x00ˀ\'ˈ\x00ˇ2˃˄\x00ʼaǔˏ\x00˂B÷ˍ\x00ˀBôˎ\x00ˌ\'ˈ\x00ˇȘ˅˄\x00˂aǔˏ\x00ˀB÷ˍ\x00ˌBôˎ\x00ʼ\'ˈ\x00ˇɛˀ˄\x00ˀaǔˏ\x00ˌB÷ˍ\x00ʼBôˎ\x00˂\'ˈ\x00ˇ৻ˇ&}ˌˆʼ˃˂˅ƛʿʿ}ʿˊ\x00Ȧ?௅ʿuʿʺ\x00ˌaѣŕʺ\x00ʼB÷ƅ̐ʺ\x00˂BôƅƗʺ\x00ˀ\'ˈ\x00ˇöˆˌˌʼʼ˂˂ˀˀˆiˊ˨ȤˈȤˈ5ˈÆȤȥˈˌȤɄʼ˂Ōˈ8ˌ	ʼĥˈˌˆ˂Ȥ\x00ʼM˂ȥ	ˈʼ̎˂<ȥ	ˌʼϕ˂ȥ1ʼࣙ±ȤˈˌʼȤơȤʼȤ)ˈƧʼʼƮ˩ˌʼ	ˈ\x00ˌǛ\x00\nȤˌÇˈ\x00ˌǛ\x00\nȤˌÇˈ\x00ˌǛ\x00\nȤˌÇˈ\x00ˌǛ\x00\nȤˌ̇ʼ&˩ˌʼ ˈ\x00ˌǛ\x00\nȤˌৢˈ̿Ȥˈ\x00Ȥˈ5\x00ˈˌʼˌ\"˂˂ʼ˂6ˈˌ\x00˂Ȥˈ ˌ\x00˂ˈ7ĹȤˈȤ\x00ૢˈáඵˌˈമʼ˂ˈʆʼ˂	ˈ\x00ʼಭˌˀˈà͠ˆȑk¢ˈ\x00¥ˀੳˆ<Łˆ<੒Ł୔Łˆƍˈˈ\x00ªˀ*˃O\x00ढ़૤˅šǌˆx˃šޚˁˈûʿ࿟XĴ2ʼĕʼˁ	ˈ\x00ʼ˅ހˈ\x00ʼۢʿ-6Ɠ˅:ˈΎȤˈ\x00Ȥˈ5\x00ˈˌŚg\\ˌҭĒÑũ<Ƹ\x00ѳ©ˌၒĒÑũ¬Ƹ\x00ɸ\\͇ƯȤȥ\x00Ȥ$	ȥ̖Ȥ	ȤЙˈ.ˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤ°3ȤȥɛɬąˈȤWʇʐʑʽþ˄É˅Ĺõ¸ʽʽ\x00sʑʐȥݺ˅*ʾʶ͢ᅋʽ*˃çʾɬsÂ˃JႿi\x00\n˄ōč˃ɷʐʐ\"ʽ::ʐƕțʽ\x00£࿕ʽ\x00£ōാˌၲȤ+ľȤ௦ɛ²Ȥɷɛ܋ŗ	ȤŖȤɛńʽ͏ɛŨɛ<ŖʶࠨȕɛVʶࠦȤɛɛ-˄ăɛ*˅˄?¬˄৉ʾǤ ƥɛ;˅ݯ˃âɛu	˃ฬU\'Ş˃CʥȤ&¬ʇ˃ʾȥ˄ວ\n\n8śȤƚȤੇU\'ࡃ˄ƚ˄-˄ú¤˄ɬϢȤ&˄ʼʐ	6qǒɍɬŨǊɛؒʐڗʐιʐҶʐஆʐჁʐ,ʐȌŠ	ʐ¤ʐɬཌྷʐɝ[ɬஏ˂ʐʑɴʐ༯ʐಿɝᄤŏউU\'౳ɛɛۥǧɛĄɛu7ખʑD(ʑŨʑ෸ʑࣤʑॠ7௴ʑ෧ˌधuˈfuȤ\'uʼ/u˂ouř7بǖȤȥˈȤ\x00=ږˈzȥŃˈȵˌ࿉ʼࠒ˂˂Ů˂ƒˈ&ŉ\x00ƭ\x00ˌƭ\x00ʼײŉၴÈˈƾȤ\x00>જˈvˀÈˈ¨ˀ	ˀÄųˈˀˀcˈ,<\x00\nˈକ˒ˈȆˀcˀ1ˈ*ˆ:ˀ1ญ˃ˆÚ˃?˃Ѽ˃u˃É˅:ˆNˢˁǍ˅šˁ?ˁ¬ˁuˁӧˀi\x00\n˅Nˁ˃°ˀVˀఢˀဘˀƣĂ͹Ȥˈ¨ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#	ȤˈAƋ͒Ⴢ๧Сെٴˌˌˈ)ˌ6ʼǃɱˈ\x00ˌ૑ʼ\x00ųȤଞ˂ǃཀྵ˂\x00ųȤХ̾Ȥ	తˀ3ɛȤ\x00ႁɬȤ\x00ડʇȤ\x00࡙ɷȤ\x00ԒɝȤ\x00࡭ɫȤ\x00౾Ȥ\x00ڼȤ\x00ᄿȤ\x00ᄭˈ৺ɶஃ୻ȤࠀȤĶˌɠѤɬˌ+D	Ȥ\x00ĵˌŦʼH¦Ȥࡶˆ-e˂W˂ʐʐ(ɶ$хȤ\x00൉ÉȤ\x00ூডʈȝზʽც˂\x00ว˃˂\x00ტ˅WɮʐʑʒʓʔʕʩۦʓʓқʓùʩÎɱʐʑʩ°ɹʐʑʩÆɵʐʑʩʀʐʑʩÁɩʐʑə\x00\nʩʐʑʂ\x00\nʩʐʑyʑ+D̤ʕཏȤ\x00෮ʩDĞɫ©ʩkD(ʩkԛʓࢄʩ\x00๕ˆᄝʽʩ˄F˅ʾ˃ʩ຤˃²ʽʽ\x00˃Ƞʽ\x00˃਽ʽ\x00˃͉D	˄\x00ʽ\x00˃ƹ˄\x00ʽ\x00˃ೆD͊˄\x00ʽ\x00˃ண˃²˄˄\x00˃ഊ˅	˅˄\x00˃2ʾ˃Ȅʾ+D©ʔD(ʔٶʩƥʐʾપʒħʒʾʽ#ˆDɮ\x00\nʩʐʑʒʓʔ#ɱʐʑļʑ+D	ɬɥɬʐʑȁɠʐɬńʽĪɹʐʑɝļʑ+D	ɝ\x00Μʐʑȁɝ\x00ӦʐńʽŜɵʐʑɷĶʽɺrʑ+D	ɷ\x00ʽXʐʑŐɷ\x00ʽXʐɓ˄Ŝʀʐʑʇļʑ+D	ʇ\x00Μʐʑȁʇ\x00ӦʐńʽŜɩʐʑz\nংʽɯިଜʽ\x00எʽ\x00Ë೼ୱʑ+D	ʽ\x00>ʐʑʽ\x00ڲʐmʽ\x00ᅐʐ:ʽ\x00=ʐʢ˄ĪəʐʑʩطʽʩÉ,ʽʑ	ʽ\x00ұ˅mʽ\x00ұʾʢ˄Ó˅ʪ	ʪ\x00ɼԺʾˊʪ\x00ɼ஥ʐʑ˖ʺÊʾʰʱÓˊʰʱÓ˖ʰʱÓʺʰʱĪʾʪ	ʪ\x00ɼେʐʾˊÊʾʰʱʱ\x00Ճʩʱ\x00ಅฦڶʩ؝ˊʰʱ॒ʂʐʑʩไɫʽĈ˄ɫ\x00Ěʈʽ˄\x00Ɵʾ˄\x00ଦ˃,ʑ+D	˄\x00ǈˆ|˄\x00ǈʻแ˅ÓʾʪÓ˃ʪʾʪ\x00Ȧ౒ˊʾ\x00ჵგީˆʪʾʪ\x00Ȧ஡ʾ\x00ηщᄕˊʾ\x00Ίܝொ˖ˊ\x00φ̃ʺ˖૙ʐ຦ʑ੟ʾ\x00࿤ʻʪʾʪ\x00Ȧိʾ\x00ηщధʩkDʃˊʾ\x00Ίं˖ˊ\x00φ̃ʯ˖Ɩʐʯ\x00ǈʺ`ʾ\x00ဋʺʰʯ\x00ࡳD	ʩkD|ʩkʯ\x00Ջःɥʐʑʒ	ʒȤ\x00ݟʒŲ\x00\nʐúʑוıŲ\x00\nʐʑ੸ʽŲ\x00\nʐúʑ˗˄˅,ʽÎʽŲ\x00\nʐʑښ˄Ų\x00\nʐȳʽеʾƂ\x00\nʐ¶ʽ˄+Î˅ʾƂ\x00\nʐ˄ˣʽ೓úʑʒ|˅ʾúʑʒi˅Őʐúʑʒ7ɠʐʑʑ+༜ʽʐč˄˅ʾ \x00\nʑǃශ˄˄ʾ)˄˅ʾ\x00˄ϗ<\x00\n˅ෆ˅Į\x00\n˅Ź˅ผŲ\x00\n˅ʽ࠭Ȥ\x00ீĮ\x00\n˅ʽ˅ൣɺ[ŭ\x00\nȤ\x00ǚӥǃԣɯʐʑʒʽ,ʑ+Dɛ\x00¼ʑVʽɛ\x00¼ʑmʽɛ\x00\\ʐ-ʽ\x00Ëźİʽ\x00Ëࡤൿʑ	ʽ\x00ގʑyʒ	ɛ\x00 ¦ʽeʽˀஐHȤ\x00ڤʽͦHƁH\x00ႈվH\x00ԁຢH\x00૿઩˄	HDݰˆDɬɥɬѤȤ\x00࠹Ȥ\x00ĵɬ˃ʐʑʒʓ	ɮ\x00ŇʐDʑʒʓ˅ʐʑ	ɮ\x00ŇʐʑD#͔Ȥˈ8\x00Ȥ*ŵˈ	ˈ8\x00Ȥ*ˈ`ˈȤΩȤ\x00Ȥ*ˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ͲȤˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂ˈiˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂ˈqˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7:ȤȥˈŲ\x00\nȤȥˈєȤۉƂ\x00\nȤ¶ˈJƂ\x00\nȤˈݚıȤȥɛˈȤˌʼɬʇɷɝF˂FˀFˆ˃Ãɬˌɫɷˌ˃Ã˂˅˃ÃˌɫˀƧˌȔʼʼˌʼˀ\x00ʼ˅ෳˀ˂ৰĭˀ˃ÃˆˀঔĪˆÊɫ%ʽɬ\x00Ȥ\x00®ɛ˕ʽ8ஂʽʽ0ʭɬ\x00Ȥ\x00®ɛఝཐʽ0੬˄ɬ\x00Ȥ\x00®ɛį˅ɬ\x00Ȥ\x00®ɛɿ˄˅Oå࠳ʽ0ঢ˄ɬ\x00Ȥ\x00®ɛį˅ɬ\x00Ȥ\x00®ɛįʾɬ\x00Ȥ\x00®ɛɿ˄˅OåʾOƵåഇʽ0࿸˄ɬ\x00Ȥ\x00®ɛį˅ɬ\x00Ȥ\x00®ɛįʾɬ\x00Ȥ\x00®ɛį˃ɬ\x00Ȥ\x00®ɛɿ˄˅OåʾOƵå˃OƵƵå೉ɶʐʽȤ\x00൪ɛʐɛ&ʐbʽ˅%ʽ˄˅ʾ˃ˆɫ3ʻƧˆȔʽʽˆʽʽĉუ˄ɫň˄ఊʥ˅˄\'ƿʾɫr˅ùʻ\x00ʽɝ\x00ʾȂ˅ò˃ɶʾɝ˃ʻ\x00ʽ˃˅ɟʻ\x00ʽɷ\x00ʾȂ˅Åʻ\x00ʽʇ\x00ʾȂ˅Ŗʻ\x00ʽȥ\x00ʾ૗ʻ7͸ȤȤȤၖ!ȤȤɡȤéȤȥȦ1ȅȤȥȦ»ǪȤȥˈ²Ȥˈජˈďˈϐˈѿȥ©ˈV̫ˈ̧ˈH८ˈV?ˈVuˈŐ¿ˈñȤȂȤȥȦˈÄˈȤˈEˈˈXˈˈ%ˈ-ˈ\"ˈVÜˈHüˈuüˈ;Üৎ\'ȤÕ࣎ȦÊ	ȤÊEȤ|ˈుˌŕ3ʼˌ\x00Xŵʼ(ʼᄓˌ\x00#ÁӮʼϴˌ\x00#ÁѪʼࡖȤÜzȦÊ	ȤÊE|Ȥ>Âȥ෡˂\x00\\͕˂\x00ȗȤ˂\x00ȗ˂\x00ȗM˂\x00ȗȹÜƪ˂\x00ȗຶˈѡˈˀ˂\x00#Mˀ཭ˈ࿦ˈ௞ˀ\nˈVˈѡˈˆi\x00\nˌ\x00#ǫˌ\x001ƽʼȥ̤<\x00\nȤȻǀ<\x00\nȤຈǀ˃à\x00\nȤݸȦÊ	˂\x00ȗi\x00\nÊXǫ˃m˂\x00ȗi\x00\nˌ\x00#ǫ˃ุȦÊ	˂\x00ȗi\x00\nÊȤm˂\x00ȗi\x00\nˆȤছ˅\'ȤჺȦÊ˅	˂\x00ȗi\x00\nÊÊ-Ȥm˂\x00ȗi\x00\nÊuÊ-JȤ௓˅(\'Ȥ՛˂\x00ȗi\x00\nˆˌ\x00ȞȤm˂\x00ȗi\x00\nˆuˌ\x00Ȟ༤ȤฤˈX˂\x00#2ˈ˂\x001M˂\x00XÁÜ(˂\x00Xૼ˂\x00#ÁӮˈ%ϴ˂\x00#ÁѪˈ%Ѓˈ%˂\x00Xŧ<\x00\n˂\x00Ȟ৐ǀ	ˈ-i\x00\nǀ˂\x00Ȟ࿿ˈ-˂\x00ȞϽˈ\"˂\x00ࠝˈV˂\x00຃ˈi\x00\nˈXǫˈƽˈ%ˈEi\x00\nˈˈ-ˈ\"ˈV*ˁi\x00\nˌ\x00֛ƽʼ*ʿi\x00\nˈƽˈ%ʿˁ(ZˈXˈˈ%Vˈuʿ+ˁˇi\x00\nʿˈ-ˈ\"*ˊi\x00\nˁˌ\x00Ȟ(ˈHˊˇˈ;śˈ-ˈ-Vˈჿˈȥ	ˈЦˈ9Ŗˈଫˈؼ˄	ˈฎˈ\'Ȥȥ1à\x00\nȤ¶ȥȼȥƫȤ1ȏŤȤŹȤȥˈȥ\"ˌˌˈˌȥ\x00ˌÁȤౡĞȤȥȦȧˈƭ\x00ʕȥȦŪŉȧjȧʄˈQȥ;òĞȤȥˈȧyȦQˈ;òĞȤˈȦȧ.ȤȥȦ%ˈ \x00\n\x00Ϙ˿ˌʼ˂ˀþˆõd˃˅ˁn3ʿ༫ˌˌˈ)ˌʼˈ\x00ˌMʼ඾ʼƂ\x00\nʼƉ\'ʼŘಹ˂:ʼğ˂ţ˃˂ݙ\'˃ˁǝ\'˃ʿV˃Į\x00\n˃ˁƦ˃:˃Ǽ˅˃ë˃+˃ˆဦŏ\'ѿˀɻˀ˯ˀʼٻƨ˅¹b˃Vʼ˂ǒ˃|ʼ࣐ˇ	Øསʼˀɻˀ˯ˀʼñˀĐŨȤ1ǭ?ǭ\x00\nȤƽŭ\x00\nȤǃႪ௫ȤȥȦˈˌˌȤ\x00ȦᄃˈȦʀˈ<ȥͺˈ	Ȥ\x00ˈȤ\x00ˈලȤ\x00ȥˌȤȥȦȧɛſȤ*ɬąʇąɷąɬɶʉɝʐ1ɬʐɫ[ɷėɷɛŰɶDʇɬ,ɷ	ɬɷɷઙɬɛĨɬɮʐʑʒʓ	ɛ±ʐʑʒʓɱʐʑ	ɮʑʐxɹʐzʐ ʐɬɱʐ௛ʐມʐǕɵʐɝʐĆɶÂɱɬەɬ̄ɬ඘ݝʐ̄ǕʐÒᄜʀܷȧ©ɬ¥(ɬচɬ঩ɩnɬ෋ɶࣴʀկɹ×əDɵμʽʆɾ^ɛLɵණʽʂ%ʽӵɬfǢʽʇ?ʇu݆˄ɠr˄\x00S©ʽ༧ʽၣė˄\x00:˄ཾɫޠ޴ɥǥɠ½ొåɦǶහɶ¡Ŏ½؎ɶ/ɺŬǐڕɶ/ɺ5ǐ˭ɶɩ¡í½ႉɶ¡ĵʂࢡɵֹʽədɩdʽྐྵ௳ɶ¡ədʂǶՊɶ/ɯ½Ǎɶ/ɧĢǐˌɶ/ʍ½ᄢɶ¡Óઝɬࡱɶॽʀමʽʆɾѝɩdʽਲਵɶ¡ēədɼǶࢤɶrɬ¥ ɮࢧ˅ʆɾ^ɩ¡Ț˅ǐњɶ/ɟ½܎ɶ3˅ʄ܆ɩ/˅ˊʁɶ/ʽɻdɩdʽˊ๩ɶ¡×ədʂഫɠǌɥ%ʽʉɵ҈˄ʂ¡ʽ˄ɠ%ʽʆɾ^ɩ¡]ʽɺʐʽ൴ʀɲɝႮʽʉඡʽူɩ3˄ʐʽ:˄ɯDɵμʽыɬ+༊ʽɝ୐ɶݏȐʄᅃʆɾဿɝণʽSȐʽ.ࡵɮࡁɶ/ɢʽñɨʽɨʐ	ɵΙʽɬ߲ʆɾ^ɵΙ˄ɬݹʆɾ^ɛLɵДʐʽ˄ʂŰɢʐʽʆɾ^ɛLɵДůʐʽʂŰɧʐʽʐĢ˄ɝႨʉයʽ˄ ɹɵ෇ʐ˄˅൨ʾࠄ˅ʪʫəɬ+࣠ʪ ʪʘɵߜʫʉǧɶ/ʫʾ%ʾɦ/ʾ7ʍ%ʽəd˄ʂrɝւɶ¡9ʽ˄ʂծǐʽ˄ɦDɵǾʽƈɬ+ɰɝǽɹʽʂǧɶ/ʽɼDɵǾʽF˄λ˅઼ɬ+ɰɝǽɹrɝཎ˄Lɶ˅ņʆɾѝ˄ʽ˅ɵ໎ɝෞ˄LɶɵǼ˅˄ʽ˅ถ˄ ɹ˄ʂՖɶ/ʽɟ%ʽɦd˄˅ʾ,ɝდɶɵນʾʉɵϯ˄ɦȜɝ૚ɶ˅ɦԀ˄˅ ɮࡆ˄˅˻Cʽʾ˄˅֥ʽʾ˄ൠ¯ʽ˅ʄʐʽ༒˄ʉrɝਨɶʽĀ˄ʆɾɆʐ჎ʽĀ¡˄˰ɬ+ฟɶĨʽɻʅlʄؑɽʐʑʒʽî˄ƈɬ+ʐʽ ʽʘɵ๶ʑɬʐကɬ෗ʒ	˄Āఴ˄ʆɾ်ɶ/˄ɡDɵǾʽî˄ƈɬ+ɰʽ ʽʘɵؔȧɬ๻˅ɬʾʊr˅ࣶɬ+႖ʾࡴ˄ĀĬʊdɧƳװʾ಼˄ĀęʊdɧƳପɵǼ˄Āïʾʆɾဂɶ¡Ƒ˄ʊ%ʽɬɶtʽfᄷ૕ʽ˫ƍʽÙʽɹǌʁ%ʽɬɶtʽࠪʽ˫ƍʽÙʽɹǌɭ%ʽɬߥũʽʉͱɝࠫɮၙʽɭɶ/ʽˈӳɿ࣢ʌϷɞফɪসɣഁʋ೘ʏҐɤ୞ʎɜƷɴÈɲƓʃЧɚʣɸŭɾ̏ʆʐʑʒʽӵɬࢮʽũɬɶýǢʽɬɶýҾʽǢɬɶýեʽ¹ɬɶý஛ʽɬɶýࡈʽɡýʫɶʽìɽேȧఓษɶʽʆɾૐɵ།ǍɶʽɧȄଡ଼ɶ3˄ʆɿჱɬหɶ3˅ɽϯʽƯ˄˅mʽȃ˄ֆ݀ฌळॾߵʾɬɶʽžʾʆɞ൱ɹॺ˃఻˃ʊɬfʫɶ3ˆʆɾ^ɵܾʽőʽˆບɶʽĔʽʁപމʐ;ʌYʽɶʽĒʽɽ֊ஸʐ;ʌYʽʽĲɬʽɶýွʐ;ɪYʽʾɬɶ3ʻʆɪʽĶʽʾʻନʐ;ɣYʽʾɬɶ3ʻʆɣʽĶʽʾʻ࢒ʐ;ʋYʽʾɬɶ3ʻʆʋʽĶʽʾʻ༓ળʐ;ʏYʽʾɬɶ3ʻʆʏʽĶʽʾʻٮʐ;ʏ(ʒYʽʾɬɶ3ʻʆʏʽĶʽʾʻ࿃ʐ;ɤYʽʾɬɶ3ʻʆɤʽĶʽʾʻईʐ;ʎYʽʾɬɶ3ʻʆʎʽĶʽʾʻࣺʐ;ɜYʽʾɬɶ3ʻʆɜʽĶʽʾʻ༿ʐ;ɴYʽʾɬɶ3ʻʆɴʽĶʽʾʻݱʐ;ɲYʽʾɬɶ3ʻʆɲʽĶʽʾʻ಄ʐ;ʃYʽʾɬɶ3ʻʆʃʽĶʽʾʻۊʐ;ɚYʽɶ3ʿʆɾɵ҈ˁʆɾʽʽʿˁ߱׈ʐ<ɸYʽʾɬɶ3ʻʆɸɆʒʽǷʽʾʻົ˃პˇƈʑɬ˸ɶˇʆɾɆʒ˰ˇǊˇ\x00ᄍʽşŌˇeʽȦ1ʆɾ࢙ˌʉˌ%ʽঐɝǽʽʂɍȥ	ȥȥ\x00sʽmȥşʽeȥ7̅Ȥˈ.ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#˄Ȥ	ȤȆȤƋ\x00Ȥҝ6ཀƋ\x00Ȥॗ6qǒ¸\x00ƧĿǱȤဌ7×ǙȤļȤȤ\x00ПȤ\x00ңၞˈɚĘȤȥˈ ƥȤ;ɹȥǊˈ&¬ ƥȥؚˌƨǱ࿲ʼǶ3˂Ǥˈ*ˀ,Ȥu	ˀ˂\x00ܴʼmˀ˂\x00ضʼvˆ$ˀ_ˆi\x00\nsˌύˆ:i\x00\nˆsÂˆJࢇ˺Ȥ	ȤgpȤɡȤbȤȤľȤ±Ȥ*ˈ&ė&Đŏˌ೿͹ʼȤ\"˂˂ʼťˌGˌaᄘˈŒˌ¤Ȥ\x00˂Мഺˌ¤ঠǋȤȥȥ\x00࠯ˈ\x00\nȥ\x00ࡼˌGˈ້ʼGˈߞȤকˌ(ʼᄖȤ๿ˌV¦ȥŲ˂#˂ʐ	~࢏ȥ~\x00खÃ~\x00वʐ7̵Ȥˈ.ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#̗ȤȤ@Ȥ˗Ȥˈ.ˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ÛȤȥˈ:Ȥ܇ˈŃˈ \x00\nˈ͂ˌˌˈ)ˌ6ʼ \x00\nˈ\x00ˌğʼƏೝʼǀȥYʼࣄŽȤȥȦȤနȤǪȤ:O\x00ĚȤȥȦ͵Ȥ\x00ȤȤC2ΡȤ@ˈ$´ˌ$DʼWˈʐʽǛ\x00\nʐ྄2ĽʽჼCҩʐϊCʐ-ʽǛ\x00\nʐʐஶ2ĽʽˌȰCĐʼʐʽ,ʐ|+Dʐ|+Îʽ൳\x00ʐ|ిʽʐ*࿭2CҩʽϊCʽ@2ϟLȤˈÉˌÉʼAȉƲEōඃ˂˂ʼ)˂6ˀÛȤʼ\x00˂Ǚˀ	ˈʼ\x00˂2ˌˀ׵ˈˌßÑȤȥ	Ȥ\x00Ӆȥ\x00ȕȤ\x00ۯȥ\x00۬Ȥ\x00ဒȥ\x00ထȤ\x00ࢢȤ\x00ೀȤ5,Ȥ໚ȥ\x00ɝD(ȥ\x00גȥ\x00ɝ଴ˈȥ\x00൒ȥ\x00ှȥ\x00୊U\'ŞȤ\x00дĥȥ\x00Ѝȥ\x00ಙȤ5ˈ	Ȥ\x00΀Ȥ\x00࡬ˌȥ\x00ໜఘȥ\x00ɝD(ȥ\x00ຽˌ©ˌ\x00£ႚıˌ\x00£तߔO\x00၊ʼೳŵၰ̆Ȥ\x00Ѝશʼ\x00ĊԗȤ\x00ʍʼO\x00֔ʼO\x00ɜƩʼ\x00঒ʼ\x00൐Ȥ\x00ൻʼ\x00ཽگȤ\x00ʍʼറȤ\x00дȥ\x00ੂ˂˵Ȥ\x00΀ȥ\x00ജ˂˵Ȥ\x00ʍȥ\x00࿵˂ĪÞȤȥzȤ±ȥ˦\x00\nȤ¹\x00\nȥĎȤĻȤǃ၁ႛÆȤ»ŌȤ6ȤȃȤ\x00ȤˀȤˈSȤˈ5SˈƹȤȥˈêdɛˈNɬˈನɛ็ɛڧĨȥɛɬvʇĚȤɛɬÊˌʐʑʽƭ\x00íʐĭᄙ˄˅Fʾྑʐϒ௼˃ˆ,ʑ	˅˃ǈࠕʻʐ\x00ҫˆʐʜʾÔ˄ʐ)˄ˆૈʻ\x00˄!ʾʻ¢ʻȔ˄˄ʽťˆʻ\x00¥˄ѭ˄җċˆ˃?_ˆ˃ƽˆ˃qʇˆ¶ɛ˅˅\x00s˃e¼˅ʼʐʑʽ˄˅ʾ˃Fˆʻʐ¢ʐʑ	ʻʐ\x00ªƔʐʐ\x00¥Ϣʽʐĭߗ˄˄ʽťʾʐ\x00¥˄ѭ˄җċ˅qʇʾŹɬ˃˃\x00sʻ?_˅ʻƽ˅ʻʾ`˃¼˃ˆ˃\x00˃ݤ˃\x00ª˃àˆv˂Ä˂Tˌ˂`ʼb˂;ȤȤ#̷Ȥ	ȤDѱjnFF\x00ֳF\x00ཅǲȤȥˈǖȤ¨ˈYȥbˈ+D?ˈuȥȤȥȦȤ$*ȥ$iȦŷȤ	ȤˈǖȤ¨ˈ±ˈ(ˈ;ҙƩ3ˌˈ1,ˌD(ˌ?	ȤୌȤ\x00>´ˌ-ʼʚʼDāȤ#ŰȤˈFˌʼ˂ˀǛ\x00\nఅˌˌȤ၆ʼȤ\x00ˌMʼ฽˂ʼʼߧ˂ˀʼ॑˂ĥʼ\'ТͲȤ\x00ˌʱϡˌҌʼ࿇˂ĥʼ\'ؿՉȤ\x00ˌʱТͲȤ\x00ˌಣϡˌ&Цʼԓ˂ˀˌ&லʼબ˂ˀˌ&टʼǖ˂ˀˌ&ࣻ˂ˀ`ˌˈ˂eÌˈĨȤȥȦˈȥčˌȦčʼ˂ˀˆF˃F˅ˁʿˇˊ˄ÔʼʼĠʼ˃Œˆ\x00ʼʼʧʼBҵઐʼʼƛ˂ˀૻˈ\x00˂2˂Һ˅ࡣˀ˃\x00ˀၐˇˀ¤ˀೡˀՂˀྱˀ}ˇˇBƗˇ\'ঊ࿓ˈ\x00˂ˇˌ\x00ˇ˂˅ˆ\x00˂ࢹʼʼĠʼˌ\x00ˈ\x00ʼƹʼƛ˂˂Ġ˂ˇˈ\x00˂2ʿˆ\x00ˁˆ\x00˅ˆ\x00˂ඒ˄ʿO੤ˁO൙˅O˷˂O۴ˊˆ\x00ˇഓ˷ˇOिʼʼ}ʼȥ\x00ʼX˂ˊˊŕˊa¾Ȧ\x00ʼXˇ˄˄ŕ˄aྟʼʼŮʼȥ\x00ʼȥ\x00ʼXҫȦ\x00ʼȦ\x00ʼX࠘ͦȤȤ@ȤΚȤ\x00ȤՐ\x00Sũ௥\x00*һȤ}ͽˈȤŌˈ9ˈSƣ	ˈ}«ˈˈ9Ҁˌ	ʼˌ\"˂˂ʼ˂ˌ\x00˂Ȥ#˭%ɛèɬÄųˈÈˌŸʼĳ˂Wˈʐʑ	ɛ\x00ʐʑˌʐ1ɛ\x00ʐßʼʐʑ	ɬ\x00ʐʑ˂ʐ1ɬ\x00ʐű}Ȥˈ\x00\nȤ\x00฿ˈ+͐ȤȤ\x00இȤȤ\x00֎ˈ\x00\nȤ\x00ೞȤ͡Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤvˈqˌˈ\"ʼʼˌʼˈ\x00ʼȤ#òȤ1éȤǽŰlȤ.ȤǄȤȥˈŕP܂ˈśˈ*ˌƛǤˈ_ȥƛƬȥ_ĴȤ+ȤȥѮȤ+Ȥˌ¯ʼ	Ø࿒ĴࣜȤFFÅԐƧ೰˟ൊ͚ԩD?ąOܹĜၶ;O\x00໸áO\x00ᅕÊąōಜƧ೮ƭઢƨஙğᄏ̎ಓġڜƥࢿ୲O\x00ѯǟO࿞іǡƭ\x00ൔĩƭࡌ˫ƭ\x00଀šƭ\x00ᅖǌƭऑǳƭ่´ƭཥO\x00υƱO\x00ၕŒO\x00਷ΣO\x00ݢ̀O\x00୍˞O\x00ྜO\x00υ̚O\x00ޱO\x00іǗO\x00޲ŵO\x00సǃO\x00ԼO\x00؋O\x00ָ<Ĝ\x00EޥǛĜ\x00EܞiĜ\x00EෝŲĜ\x00EਈǎĜ\x00Eד˙Ĝ\x00EဴŭĜ\x00E۟ȒĜ\x00EႬàĜ\x00Eᄛ Ĝ\x00EܓƂĜ\x00EحĮĜ\x00EஒĜ\x00EٕƻĜ\x00EෛǭĜ\x00EᄒÅĜ\x00ོƃ̎\x00EɎǴ\x00EɎ\nĴĈċ͕çǯ{ÜÉǀՈƽ٘ÕԠǫெȗƄ#ַ1ྌXಾȞԧ͢3ÖƖƧ\x00ࢗˆA੔ǡʶഖ˥þƕİŠóĸFMF&FȡF®Fþŉ \x00\nऔΒ೭ͥ3ĝŮ@ŅٟǦΠΐ¸̢3ǱQȉƲEōąx½Ɲč!ĊÿŘǚȇǾǠƅȣƐŐ/ë(ŏUeHȸ̾OѶDȌDȸʶسê̝నƉ\x00ðͧ3ƈF`ǉȘđaƊÁˉqċñǥö¸þŁǣ%ႅƏËȁ͛ʶОʶ࡮ʶฃʶ౥ʶਝŃD΃ೕ͝ႸTĄ¾ȝżǹÔūY)ߚŘਪ|),ŕPϑˁ|&ၤÙÒ0DƗDƩtŦƒƸþƇďyÝŝüŧąķǸ4FfƎǿȸͺŏǩ\x00EɎȊÉĠƞ྿OΞOn̟OPĦO̙O̛OÌ̥Oh˅OsŷOÂ̻OOƩOÇȋ͒ᅔƣ\x00\rΌƣ\x00\r˽ƣ\x00\r$ˎƣ\x00\r˂ƣ\x00\r_̈ƣ\x00\r¼̠ƣ\x00\rF͔ƣ\x00\r̫ƣ\x00\rªˌિĔ\x00\r˝Ĕ\x00\rͭĔ\x00\r̍Ĕ\x00\rΑŌ\x00\r̨Ō\x00\r̭Ō\x00\r͉Ō\x00\r˔ė\x00\r͓ė\x00\r˰ė\x00\r̴ė\x00\rͤƑ\x00\r΢Ƒ\x00\rͱƑ\x00\rΘƑ\x00\rˊ×\x00\r͋×\x00\rˍ×\x00\rΉ×\x00\r΋l\x00\rͼl\x00\rͿl\x00\r΍l\x00\r̔ę\x00\rˑę\x00\rˀę\x00\rͫę\x00\rΕȄ\x00ðƣȄ\x00\r˹Ȅ\x00\rʾȄ\x00\r̲ũ\x00\r̷ũ\x00\r˰ũ\x00\r̴ũ\x00\rͨş\x00ðƣş\x00\r˚ş\x00\r˱\x00\r̖\x00\r˗\x00\rˣ\x00\r̵ȃ\x00\rΙȃ\x00\rˈȃ\x00\r̄ȃ\x00\r˓C\x00\r˜C\x00\rͲC\x00\r˯C\x00\r˷ï\x00\r˺ï\x00\r̆ï\x00\r̪ï\x00\rʿ\x00\r͂\x00\r˰\x00\r̴\x00\rͤ\x00\r˒\x00\r͑\x00\r̜\x00\rͣ\x00\r˃\x00\r˨\x00\rΊ\x00\r̤5\x00\r˴5\x00\r˰5\x00\r̉5\x00\rͤņ\x00\r͊ņ\x00\rͯņ\x00\rΜņ\x00\rΩž\x00\r·ž\x00\rΡž\x00\r΂ž\x00\r΀Ț\x00\rΝȚ\x00\r˸Ț\x00\r;Ț\x00\r̓\x00\r˼\x00\r̰\x00\r̒\x00\rˏů\x00\rˮů\x00\rΓů\x00\r΅ů\x00\r̃\x00\r͞\x00\r˰\x00\r̴\x00\rͤǢ\x00\rˤǢ\x00\r˰Ǣ\x00\r̴Ǣ\x00\rͤĢ\x00ðƣĢ\x00\rʼĢ\x00\r̳í\x00\r΄í\x00\r˰í\x00\r̴í\x00\rͤå\x00\r˳å\x00\rͶå\x00\r͏å\x00\r˧Ó\x00\r̣Ó\x00\rʺÓ\x00\r͍Ó\x00\rͮ\x00\r͖\x00\r˰\x00\r̴\x00\rͤĒ\x00\rΟĒ\x00\rͬĒ\x00\rΛĒ\x00\rΚƯ\x00\r̹Ư\x00\r͗Ư\x00\rΖƯ\x00\rΏŎ\x00\rˋŎ\x00\r˰Ŏ\x00\r̴Ŏ\x00\rͤē\x00\r΁ē\x00\r̿ē\x00\rΈē\x00\r̕\x00\r͌\x00\r̋\x00\r̌\x00\r͠]\x00\r˿]\x00\rΦ]\x00\rˡ]\x00\r͵¯\x00\r˪¯\x00\r́¯\x00\r͡¯\x00\r̀\x00\r͸\x00\rˢ\x00\rʹ\x00\r̸\x00\r̽\x00\rΥ\x00\r̑\x00\r͐Ƴ\x00ðƣƳ\x00\rˠƳ\x00\r˶Ƿ\x00\rʻǷ\x00\rͪǷ\x00\r̡Ƿ\x00\r̶Ȑ\x00\r̏Ȑ\x00\r̧Ȑ\x00\r̅Ȑ\x00\r͘ǐ\x00\r̘ǐ\x00\rΔǐ\x00\r͈ǐ\x00\r̗Ķ\x00\rΧĶ\x00\r̊Ķ\x00\r˻Ķ\x00\r͜\x00\rˇ\x00\rΆ\x00\rͩ\x00\r̱¹\x00\r́¹\x00\r˰¹\x00\r̴¹\x00\rͤ9\x00\r˛9\x00\rː9\x00\r˲9\x00\r̮Ĭ\x00\r̇Ĭ\x00\rΗĬ\x00\rΤĬ\x00\r˖\x00\r̞\x00\rͳ\x00\rʽ\x00\rˁŬ\x00\r̈́Ŭ\x00\r˰Ŭ\x00\r̉Ŭ\x00\rͤő\x00\r̓ő\x00\rΎő\x00\r˘ő\x00\r̯Ĳ\x00\r͙Ĳ\x00\r̼Ĳ\x00\r˵Ĳ\x00\r˾¡\x00\r͆¡\x00\r̩¡\x00\r͟¡\x00\rͤĵ\x00\r̺ĵ\x00\r̦ĵ\x00\rͦĵ\x00\r͎ì\x00\rͷì\x00\r̐ì\x00\r͹ì\x00\rΨŊྛாռڣ၅ेˡo༙༈ய੡൲Ґपႜೃ̖၂ྎၛౌऺօ؉౑ၦϷ߿ཱྀ໣߆ЅٯЁτΣˉσҮǡ৷ીჸғΠϰҢҿफ़ڌളೈ༲૒ȳ૥ჯ໧ာčۻಯչི১ᄑࡰҤ௠Նྵ=Ⴉଯഉლषౙ੏ٵ઺৬ൎ཈܈޾ਜ೏ฒૠଥบ݃ୢ຋஗ݕ੽ᄰ੓ຮ։ĕͽ޶Ťඓ߂^լªࣨŤͽŤͽ^ͽ^ªͽª*œੵ৸દาÈÈÈÈÈÈÈÈÈ໋4444444444444444444٭৳4444444444444444444෼͇ڟ»ᄧʶ႐»*̂ʰͅൂřôʶܰ»\x00ôřʶ৙ʶர̬¦Oä˦*ƺÇȢƋè~ӪȈōŗOË˩O˄˕ͻ3ßDųÈŸĳ˭3IFÄˬ\x00\nF¦OäͰÊƘ%ˈH\x00௢ˌH\x00ूˈ H\x00ɶˈbˌƬȤzȤ૸Ȥ໵͗ˈȤˌƧƭ\x00íˈOྸ࣍ʼ˂ˀˆ˃˅ˁˈQؠ˃˃ˁťʼǛ\x00\nȤ˃Ç˂Ǜ\x00\nȤ˃ÇˀǛ\x00\nȤ˃ÇˆǛ\x00\nȤ˃Çˌ\x00˅!ĸ\x00ʼũM\x00˂2ˌ\x00˅!&\x00˂ũȡ\x00ˀ2ˌ\x00˅!®\x00ˀũ\x00ˆŧ˃ˈ	ʼǛ\x00\nȤ˃Ç˂Ǜ\x00\nȤ˃Çˌ\x00˅!ĸ\x00ʼũM\x00˂M˃ˈ	ˀǛ\x00\nȤ˃ˌ\x00˅!&\x00˂ũȡ\x00ˀՀˌźȤ	ƞȤˈȤ\x00=՝ˈ\'ˈ๰ˌǲȤˌ0D ȤଃȤ\x00>­ˌʼʚʼD³Ȥ#Ƥn;ˈ;\x00ဆˈ	ǯˈ\x00އ{ˈ\x00ྜྷU\'Şrňˈ\x00Ȇ˂ˈ\x00ǞˀџO\x00нˆƍdଽɛO\x00௱ɛ	O\x00ඖ˃O\x00ରӈ˅࣫UॸˌO\x00ߠˌʼˌ\x00ဠȢʼ\x00ตʼ\x00߅ˁ˂DƩ3ʽ3໅ʽf$\'ʽ\'bǯ\x00˄ˀDƩ೨\'ଓ{\x00˄ˆ[ÏÑ;Ű˃ʐʑʐӸʽ͞ʑÞʑ\x00ӻϔʽCϸ˄3ʐʽʐ˄f,ʑÞʑ\x00ˑќʑ\x00ɫʑ\x00Ǡ˄\'ʑ\x00֣ʐSO\x00஢˅ʐʾL˅ؖ˃sÂʾJŉʑÞʑ\x00ˑќʑ\x00ɫʑ\x00Ǡʑ\x00ǰ²˅ज˃ñɛʐʑ˅[ྣˁDƩRȑȤȤЌȤǑǰOݪͿȤˈ.ˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7˧Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ͤĂ[ƺÃkÇ¥ȤˈƬȤJˌGˈ֫ͳˈʼˈ˂Ô˂p˂ʼ˂&Åˈ\x00˂ཱˌBĤ఑˂಴ʼ ˈ\x00˂ֵˌ\'ˌࣳˈ\x00¥౫¦ȤȥȦȧȤ\x00ǱȤ\x00āȥȦȧmȥಐȥȤ\x00ވȥȦ#V%ˈ\x00¼Ċˈ	ƿ3ˌ\x00\\Ɂˌ\x00>ɀୂʼ \x00\nˈ\x00Ӕ˂ǄʼNʼšʼʼŤˌ\x00ʎ˂ˀ\x00\\ଲʼ	ˀ\x00ĵąˀ\x00ɦʼ`ˌ\x00¦ˀˌIˌ\x00Ëźİ\x00 ¦ˌˌ\x00රúȤȥˈȥĩˌȥŠʼȥ̰˂Ǫʼౠ˂(ȥƘòO\x00̓Ȥˈˌ˂mO\x00̓Ȥˈˌvˀ²ʼˀ	/ˀ-(ˀ\"ƺ	Ȉ૪ĀŁт̝%ɛᅁɬྺêˈWˈʐȽɛɬűͼȤ	Ȥจˈ.ˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤ°ȜȤȥȦˈA໖ྊၵయ෤೥͹ۚඕԶ൤૞ˌशʼʐ1ʽWʽ%ʾٿʾȥ\x00ʐीʾȥ\x00ʐܑǢʾȥ\x00ʐߦҾʾȥ\x00ʐໍʐ݊Ȥ\x00ȅȥ\x00٫Ȥ\x00Ӆȥ\x00඲ˊ஦ʐıʐ೙ȤߣʾӾ˂˂ˈ)˂6ˀˈ\x00˂ହȥ\x00ˀ޹ˌ	Ȥ\x00ˀʼˀȦ	Ȥ\x00ƻ\x00\nˀ̌Ȥ\x00ˀ2Ȥ\x00\x00\nˀ̌Ȥ\x00ˀേͳȤˈ\x00Ȥˈ5\x00ˈǍȤˈAȉƲEōMȤǘȤ࣓ȤԂˌFʼ˂Ȥ \x00\nȤ͂ˀˀȤ)ˀ˂Ȥ\x00ˀ2ʼ:˂ඛŹʼNˈଅˌ˂eˌÍ༾Ȥ7ʹȤȤ@!Ȥ@ȤKȤȥȦˈˌʼÔˈȥˌȦʀˈˌÀˈٷˌ	ʼȤ\x00ˈ2Ȥ\x00ˈȤ\x00ˌ2Ȥ\x00ˌʼ7ǢȤȤįȤȥˈƬȤ*ˌƹȥ:ˌ`ˈʔ˝Ȥ\x00ȤȤǷȤg\\ǂȤ	ȤȤȵˈ \x00\n\x00၇ˌʼÔˌˌˈ)ˌʼˈ\x00ˌM\'ʼȤÙƂ\x00\nʼȤ࿙΋ȤȤ@	Ȥ@ͽˈȤŌˈ9ˈSƣ	ˈ@«ˈˈ9`ɛȤġ\x00\x00ȤġȤɛʐzʐ౏ʽʽʐ:)ʽ6˄ʐ:\x00ʽ2˄@«ɛ˄ÏŀȤˈƄˌȤ\x00=ˈ¨ˌÖȤˈˌγŖȤȥļȤ੎Ȥȥ?(ȥD́ȥ+Ǆȥ²Ȥyȥ൩Ȥȥ<ԕýȥyȥHܲˈi\x00\nȥ-ȥ\"ȥVȥಋˈྍi\x00\nȥˈvˌi\x00\nȥȥ-ȥ\"*ˈĳˌˈYˈȥVbýȥ¯ʼĪ+ȤȥȦ1ŰȤȥȦ»ȤȥȤ$ȥ̀Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤvˈqˌˈ\"ʼʼˌʼˈ\x00ʼȤ#Ʈ%ɛɬʇ໔ˈ෵H	ɛƨH\x00ຝļˈɬɛˈ,ɬ<ʇ	H\x00ɶļˈmH\x00ɶɬ`İˌ|İʼˌඁɛ,ɛ;ɬ	ƮĨɛʼ%ʽO\x00࠻ʽÜ(Ų\x00\nʽ৛˄ƨʽ\x00¥ٰ˄˄?˄ၡļʇO\x00ĵ৵˄|˄ļʇe˄7ʺȤˈȤˈ5ˈ7ͬȤˈ	ŷˌˌˈ)ˌ6ʼˈ\x00ˌȤʼ ˈ\x00ˌʼ˂\x00,˂SĔ	ʼ˂\x00Ȥʼ ˂\x00ʼ,Ǽ˂\x00˂\\ˀ˂\\ˆũ*˃A˂\x00ञΖˀਔƐ	şĒˆ˃ϩ˂Ső	ʼ˂\x00Ȥʼ ˂\x00ʼ,Ǽ˂\x00Ś˂\\࿆ˀ˂\\ˆũ*˃A˂\x00ˀXƐ	şĒˆ˃ϩ˂Sũ˂*ߘˆũÑ*˃˺ũ˂*̕Ɛ	şĒˆ˃T˂*ၹˆũm*˃˺ũ˂*̕Ɛ	@	࿏Ēˆ˃ʼ\x00Ȥʼ5\x00ʼˊȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#¼ȤˈȤˌʼ˂ȤଠˀˆˆƧ˂Řˌˈ	ˀȤ\x00ˌöˆ\x00ʼˀaŔˆ\x00ʼˀaŢˆ\x00ʼˀaĤˆ\x00ʼ!ˀ\'ѨˆƛȤˈO\x00ēȾO\x00ēࢨలȤȤ\x00sƜȑ๐ˌˌȤ)ˌȤ\x00ˌȚˈ`6qǒ¸Ȥ\x00ˌˈbȤ˽Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȑ̺Ȥ	Ȥ໒ȤȤҍȤ¿ȤȤøȤ°ìȤ¨ȤǤ%ˈƉࣅˌˌȱˌˈ~ါˌᄠˈgPª୴̌ȤȤ@ȤΥȤˈȤˈ5ˈ΅ˈȤˈ5ˈ΅,ˈ,Ȥˈ5,ˈˈȤˈ5ˈΑȤ\x00ȤÂȤˈȤǆˈľˈ±ˈ*ˌ>ė>Ļŏʼ˂ˈˀĕˀ˂	ʼˌŒʼ¤ˈ\x00ˀМശʼ̒Ȥ	Ȥ$g*@ȤȤˈǮ3ˌǱȤ*ʼ¥ˌ*˂Ǟʼˈ:Ű˂Ȥ.ȤĦȤȥȤD(Ȥ?ŻˈŢȤˈ෱ˌ\x00\nȤ\x00ïˈˌ0঻ȥ0̗ʼȤ\x00ȥMŢʼĆȤ\x00ȥŧʼ\'ʼ൮Ŗʼ-ʼǲȤʼYƆʼyˈˌ0ɖǃ༉Æȥ˂Ȥ\x00షǅ˂:Ŗ˂\x00ȥĔˈ©ȥ0ఞȥ0ືģȤȥyȤŕЈȥௐ>ȜˈGȤȥĆŖȤ\x00ȥĔˈȥΕ\x00\nȤ\x00Ȫ̱ĉȤ\x00ȥĔȤŕЈȥդ(ǙȤɃȥŚȥй\n\nʇˀȤ\x00Άˆ\x00\nȤ\x00фðˀўˆ˪ðˀ˹ˆбˆޘäˀˆ՜ˈðȤ̩ȥ჻Ȥ\x00ȥŧƄȤɃȥࠓŖȤ\x00ȥĔˌʦȥǃ˃ǁȤɨŝ˅ǁȤɭŝˁȤ\x00ȥM˅Ŭ˃ϓˁ?ĉˁǲ˃ҎˁʿȤ\x00ࠊˇæˁʿ\x00>´ˇ:ʿ\x00֠ȥ਌Ȥ01ŖȤ\x00ȥĔˈðȤ̩ȥɯˊǖȤˊ1ˊ3ફȤ\x00ȥßȔȤˈǛ\x00\nȤ̣ƷˈզˌˌȤ)ˌ6ʼǛ\x00\nȤˌƷʼǝĆʼĞຳʼĞٍʼĞܘʼ୘௷ʼ1\x00\nà\x00\nȤ¶ˌ೹uȤ	Ȥ::Ȥƕࣛˈǎ\x00\nȤڸƂ\x00\nȤ¶ˈफ͑Ȥˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂ˈiˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7͞Ȥ	Ȥg̐Ȥˈ¨ˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ȟȤȥˈȤ-Ȥ\"ˌƙȤXȤȤ%ˌซˌɞˌÛȥȠNˌÛȥˈХzȤˈ:Ȥഌˌǎ\x00\nˈ৔ˌ+Ծʼǎ\x00\nˈহʼıʼˌwˌˈऻ\x00\nƂ\x00\nˈˌ؍ΧȤZȤȤg@RȤħȤzȤ	ȤL¦Ȥȶʼ*ˈǖȤˈˈ3౞ˌȤ\x00=ΒǓȤđˌʼʐʽ˄ȤgȤʐаÉʐŜȤʐ\n൑˄Ȥ\x00࿰˄*ʐ˄˄\x00ڵ˄\x00ΰ˄\x00ͧÉʐ¯˅HŜ˄ʐʽ˄ʽ୽Ȥ\x00ऎ໇*ʐVO\x00ΰO\x00ͧÉʐŜOʐɊʾäȤۑ˃²ʾ*ˆ˃(˃ඇƌʐwˆ	RȤÉʐ-,ʐ#˲ȤȤ@Ȥ@Ȥ΍Ȥˈ.ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#̶ȤZȤ@RȤ΂Ȥ\x00ȤƙȤȥȦˈଳȤ?ˈքˈଌˌȖ3ʼˌĩ˂ˌ໿ʼˀǤˈƽȥƽȦѶˆʼ\x00ˀMˆႎˆ଍˂º˃˃˂)˃6˅˂\x00˃M˅áॹ˅ဎ˅ذȦ˅ʳ˅ટˈĶˁǃ˅ğˁ\x00Æȥ࿡˅ɓʿ߈͖Ȥ	ȤgāȤˈǲȤD,ˈ9D	Ȥ\x00ĎෘːȤˈȤˈ5ˈˈȤˈ5ˈˈȤˈ5ˈ-ȤˈʹˌȤ\x00=ˈ¨ˌÖȤˈˌŅǺDȋkăVŅ̟ȤȥȦƄȤĆǻȥȦȤyȥ֖Ȥ&ȦiȤȦ͟Ȥ	Ȥ$g*͢D\nĺçŇÖÃŪ×ZȤȥȦˈƙȤȥȦˈઈˌÀΗˌʼ \x00\nˌͨʼµ͎ʼ٢ณ˂ǃà\x00\nʼ࿶˂\x00ÆȥĆǆȤȦȞˀǤȥҥʼ཮ˀǆȤȦཛˆၭ˴Ȥ	Ȥ०Ȥ-Ȥ°ƠȤȥȦ	ȤǪȤO\x00ুO\x00ᄱȤȥȦ˶Ȥˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ΊȤ	ȤFg@ȤýȤȤ\"ˈ::ȤƕˢˌǍˈ̀ˌYi\x00\nˈNˌȤV૔i\x00\nˈNȤVeȤ͊Ȥ	Ȥ౷\x00ȤȤрˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#åȤȤ͛ͱ\'ŕPìیOI7ǌ©ȤˈAӐ´Ӏ­ǅʂęʩ˳ӿ̉З͌Ͷ΄đϖྃŹȤˈǊȤU\'ႧȟȤγ>%ˈO\x00̿ˌÎˈ\x00ìޔi\x00\nˈ\x00ެݫˈ\x00ӥˈ\x00ԍ(ˌ˩Ȥ1¬Ȥ\x00̩֨ȤÓ͚ȤˈÅႺˌȓȤӬˈʼʼˌ)ʼાˌ\x00ʼျȕȤ1ȟȤŅ̱Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ͯȤˈ\x00Ȥˈ5\x00ˈˌʼˌ\"˂˂ʼ˂6ˈˌ\x00˂Ȥˈ ˌ\x00˂ˈ7ˬ݅਋౛ೋˈƭᅑˌƭುʼƭข˂Wˈ[îF\x00ࣾˌ[îF\x00ثʼʐȩࡹʐ˂ʐȩƚʐ7̦ȤˈȤˈ5ˈˈȤˈ5ˈĐ%ˈˌêʼʼĠʼˈʼŷ˂˂¾˂ˈĥˈᄻຕˈ؊ˈۜˌ\x00ʼˈiˌµ%ˈ\x00Ċ๥ˌĕˌˈڡʼˈ\x00ˌX=৯ʼʼء\n\n8ஓƪʼ෪ƪʼۃ˂°ʼ:Ȃʼ˂ݻˌྙ°ȤˈA܍౸क़Ⴞˌˌˈ)ˌƪȤˈ\x00ˌ๙ʼȤ	Ȥͮ**Ȥ-ȤņˈQˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤøȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØȤȤĆȤĻ̦ȤȤ8ਁ]Ȥ\x00ȤžȤȥȤ$\x00ȥÐȤˈ\x00¼ÿˈˌ \x00\nˈ\x00Ӕʼˌĩ˂ˌŠˀˌ̰ˆˌƄ˃ˌȵ˅P˂ˀˆȤ*ˁÎŕPìࣝʼ࿳ʿŕPӒˇÎ˅țʿˇˊO\x00ȓϱ˄ˊ\x00ͭ˄Ų\x00\n˄ȓƳ̢ˁŲ\x00\n˅́Î˅&Ϋ˅&Ȓ˅&ƐÃǳŕPŀ˅ˁɋˏ\x00\\Ɂˏ\x00>ɀ෬ˏ\x00ʎ˅ˍ\x00\\̴ˍ\x00ĵąˍ\x00ɦ˃ˏ\x00¦ˍˏIˏ\x00Ëźİ\x00 ¦ˏˏ\x00ڴ͏Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ńȤȥ	ȥǪȥ^Ȥ\x00ŀȥØȤȥȥD(ȥ @CȤȤȥȤ$ȥƑȤȤͰ%ɛ\x00¼௶ɛ	ƿ¦ɛŭˈˈʐ	ʐ\x00ƚɛ\x00ࡾɛ\x00్Ðʐ#̉Ȥ	Ȥg#5ȤȤǕȤ1Ŋ\x00ȤßŔȤˈ๨Ȥ¹ຬȤ੷£ཻ࠶ˈ_ȤȥӶȤӇȥྡȤၯȥႊȤЛȥ൜ȤಇȥྡྷˤȤ	Ȥg̹Ȥ	Ȥο\x00ȤȤņˈ	ˌˈˌjˈ·ȤʼIʼˌʼȤ~ˈ\x00ʼȤȤǕĖȤȥȦȧˈƭ\x00ʕȥȦŪŉȧjȧʄˈQȥ;ÅĖȤȥˈȧyȦQˈ;ÅĖȤˈȦȧKȤȥȦ¯ȤȥȤ$qȥȤȤΐ%ˈ\x00Ċᅇˌˈ\x00ˈᅉʼˌ\x00໲ˌ\x00ɩ³ˌ:ʼΝȤ	ȤԫȤ-Ȥ°³Ȥ	ƞDȤ\x00ʎ߯ÌȤȥȦ	ȥȥқȦD ȦȤûˈƧƭ\x00ȾȤĭ൸ˌȦQमʼĕȥˌ	ˈ\x00ʼ!Å\x00ɈȤ\x00¥ȥȥ&ࢴȥȦ ˈ\x00ʼ!Å\x00ɈȤ\x00¥ȥȦҥˈĐ͆Ȥ*ȤΛȤ\x00Ȥ*ˈ	ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#.ȤȥȦˈˌˌȤ\x00ȥ֟ˈȥˈȦϵˈ	Ȥ\x00ˈȤ\x00ˈବȤ\x00Ȧభˌ˻ȤZȤ@RȤŶǁ#ѩѩ®]ˈ$ˌ$ʼ$J˂WˈȰ#པˌȰ्ʼǁ®Ӽ#˂ק#ຸ5#$#®חΓȤˈȤˈ5ˈˈNȤˈ5NˈˈȤˈ5ˈ[ȤȥˈȤ\x00³ȥâ/ˈΤȤSȤƷȤതಝȤȤ8ї೶ȤȤ8৫ðȤȥΤȤ\x00ᅏ\x00\nȤ\x00ȪȥóˈӠŕ[O\x00ࣚǏȤȥȦȧ	ƩȤ{ȧëȤ53ȧšȧۂȤ5fȤȧƃҼȧଝûȤȥȤǘȥ\x00ౢƻȥ\x00͜ˈȦ1ǯ\x00ȥȧȥȧ¢઄ȥ\x00ĚȧNȧȤȧ´ȧ಺ȥ\x00ĚȧNȧȤ#ˈnȤ\x00ϼȤ\x00͙\nȤÏͶȤˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ȤĶˈzȤ:ˈŹˈ¯ˌӠ̭Ȥˈ6ˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ĪȤȤD(Ȥାˈ,O\x00ֲˈO\x00࣡ȤmˈŒ\x00\nOȤyƖ+Ƨ\x00؃Ƨ\x00໑ƖiˈˣȤˈ.ˌˈ\"ʼʼˌʼˈ\x00ʼȤ#̥ȤȥɴȤO\x00ऐȥ̵ȥǑȥ̽Ȥ	Ȥ˓Ȥ๠Ȥ-Ȥ΢Ȥ-Ȥ΢,,Ȥ-ȤīȤ·Ȥᅊٖٳ௖Ȥ௏Ȥg@\x00Ȥ˜Ȥ	ȤʒȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤƯȤʨȤ¿*ȤȤøȤˈiˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤƯȤ΂Ȥˈqˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØŪ%ɛƧѥˈˌǛ\x00૶ʼǛ\x00\nഢ˂˂ࠍ˂	ˈ˂,ˈ0ʼ(ˈ0ˌ	ɛ\x00˂૊ˈ<ྫˈ8մɛ\x00˂ˈ̔ˈ௡ɛ\x00˂ྤˈ<Ŋˈ8෦ɛ\x00˂ˈ̔ˈืɛ\x00˂୥ɛ\x00˂ˈ`ƕˀWˀ[ɛ7ĺ%ˈ4ˌ\x00\\੘ʼˌ\x00Ċ૆ˌ\x00æ๛ˈÒसʼШˈ<ߙˈ,O\x00׊ঁʶ]OආசO1மȤIȤI஫I`IƧȤˈˈ8ȤˈI\x00ˈ႞ˈ`ĭI:I͠ȤȤ@ȤȚȤȤãȤȥˈêˌˌȥ)ˌˈ\x00ˌԙˌϳƋҰ்ˈÍвΉȤȥ͎ȤȤ@Ȥ×Ȥȥ\x00Ȥ$ȥ˛Ȥ	Ȥ͝Ȥ¿ȤȤīȤȤ਱Ȥ¬ȤˈƬȤ:ŰˈĚȤȥȦˈȤ,Ȥϒ۽ˈĹȤ*ˌ¢ˈ*ʼ˂ˀˆ˃˅ȥčˁˌʿĈˆˌ\x00໭˃௰ʼˁʼޙˁـʼˀˆ\x00ʼ੥ʼĉˁཱུˁƪʼĉˁ஋ˀ˅\x00ˀaѣŕ˅\x00ˀB÷ƅ̐˅\x00ˀBôƅƗ˅\x00ˀ\'ᄲʼĉˁùˀˀƗˀaŕʿࣁʿʿʧʿBҵಮˆ\x00ʼˆ\x00ʼQˁাˀƛ˂ʼ˂ࢊʼͩˀˆ\x00˂\'ҼʼuʼQปʼ8Ś˂Ŗ˃\x00˂ˀ|˃\x00˂ȦǓ˅\x00ˀaۏȦÛ˅\x00ˀB÷βȦ಍˅\x00ˀBôβȦಎ˅\x00ˀ\'ಕˆ˃ß̮ȤȤ@Ȥ@ȤCȤȥȦȧȤ$*ȥ$iȦ$qȧ7%ˈ\x00Ċٹˌˈ\x00ˈҠˌ\x00ɩ³ˌȓȤˈȤûˌʼƧˈ൬˂ȤྮˀˆIˆˈÀˆ	ˌȤۧˆˌ߫ˌಳˌ&˂,ˌಬˌˌᅎˌپˌֶˌ&˂,ˌವˌˌݨʼ\x00ˀ!ˌiÅჃʼĢȤȥȦ*Ȥ$Qȥ$Ȧ$é:8é9ơµΡ੯̛ȤˈêˌIˌȱˌƒˈǯˌǙȤO\x00ඦŽ\x00OˈTȤO\x00࿑Ơ\x00OˈTȤO\x00ล\x00OˈTȤO\x00໨Ǉ\x00OˈeȤ\x00OˈͪȤˈRȤˈ5RˈˌZ,ˌSũˌ*ၸҒӏʼũ¶*˂ɽΎĒʼཹˌ˂ɸRৈˀōˆ,ˌSĔ˃ˌ\x00Ȥ¨˃ ˃ˌ\x00ˆˌ\\,ˆVˀ«ˆΖˆฝˌSő˃ˌ\x00Ȥ¨˃ ˃ˌ\x00ˆˌ\\,ˆSũ	ˀ೜ŚˆဧˀթˈZȤˈ5ZˈˀܒҒӏʼũ»*˂ɽ༷˅Aˌ\x00˂ˆɸRߟĒʼ˅#¹ȤȤͣȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤć*Ȥ*ˈiˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ÃʅğPҜ͂ȤÓ́Ȥ	Ȥgǽ%ˈƬǱဃ:ƛˈΘȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ȤÞȤ\x00ξӚľȤɋˈAęુˌˌˈ)ˌ6ʼˈ\x00ˌĿ˂Ȥ\x00=ʼĎ˂ĄʼͯèȤႶ˂ħ˂Ĥ˂vˀྯƪ˂ˀƾ˂ˀƂ\x00\n˂ˀܥ˂˂ÌȤ\x00ʼ˂¯ˆͦʼͯȠȤ࿴ǒnÖ«ˀИˈ೗rˈˌˈ\x00݈ˌŻʼˌ\x00ే˂ \x00\nʼ੅ʼ˂Ӟʼ໯˂ɻʼ˂ӞŲ\x00\nʼઘı\'ʼ׀ʼ஬ˀDၘΙȤ	Ȥο\x00ȤƳȤȥȦ*Ȥ$Qȥ$Ȧ$é:8é9ơµȏ˚Ȥˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ȀȤȥȦȧȨȩȤ$ȥ$Ȧ$Êȧ$xȨ$¥ȩ̯Ȥ\x00Ȥ@\\ȤĶȤȥȦZȤ$ȥ$RȦˇȤ	ȤൄȤрˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ#ȤȥȦȤȤ+ӫȤ+ڏȥȤƽဝˈȔȦˈˈ+ӫˈ+༢NȤȥȤȥºˈˈȤ)ˈ৊ˌȤ\x00ˈĿʼǃˌNˌਢۘʼ\x00Æȥஷ˂ڬĔȤȥ\x00Ȥ$\\ȥŇ%ˈ\x00ت\x00ؙˈˌ\x00\nˈˌ+רˌ+ऩˌ+এˈဏ̢D/Àӣ(ÉˈÀૅˈ	(¬ˈ`UƨǱൌëƨǱ๘ŏƨǱएŐƨǱံŠȝƨǱ૛óȝƨǱ೒6qǒŏˌÀ۵ˌʼ \x00\nˌԽʼƏ౯ȉʼëƲʼÚEʼŤōʼƣąʼ๺ʼǹxʼࠤ½ʼఇƝʼ྾čʼڪ!ʼڭĊʼΝÿʼࣘŘʼρǚʼԪȇʼศǾʼ๲ǠʼպƅʼҹȣʼၝƐʼޭǘ3˂Ǳ࡚˂	 \x00\n˂డ࿺ƪȤȥzȤ±ȥ༇ˈà\x00\nȤ¶ȥ֓\x00\nˈ¹\x00\nȥΔȤˈȤˈ5ˈˈȤˈ5ˈ˒Ȥ	ȤʒȤˈˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤƯȤʨȤ¿*ȤȤøȤˈiˌˈ\"ʼʼˌʼˈ\x00ʼȤ-ȤØ̰ȤˈȤˈ5ˈΡȤˈ\x00,ˈSĔˌˈ\x00Ȥˌ ˈ\x00ˌˈSőˌˈ\x00Ȥˌ ˈ\x00ˌʃˌ\x00Ȥˌ5\x00ˌ7ǓȤȥȦˈ\x00\nȤ\x00ïˈଁȥʛ\"ȤȥȦʗȥરˌȤ\x00>ȥȦľȤ:ˌGȤȥĄȦ	ȦǪȦeȤ\x00>ȥȦTˈɑȥ͍\"ȤȥȦʗȥɯʼǖȤ๊˂ੲʼȦǆȦħ˂«ȦĤȦ-ȦȦÌȤ\x00>đ˂਴Ȧ߸Ȧʼ3Ȥ\x00༁ˀHȤ\x00>ᄈˈŬȥϧȤȥȦ৪ˈ˲ȥǃˌȤ\x00>ȥȦâ/ˌiȤ\x00>ȥȦȋnÖI¦༐ø*ɛĀ6qǒ¸Ɓ\x00ǰˈÊˈʐʽʹ˄\x00\nʐ\x00ï˄͐ʽƄ˅ǖʐ¨˅±˅	\"ʐʽʐ\x00=ʽȫɛ(Ȉ	\"ʐʽ˅Ǘ˄ǖʽࢫ˅ǖʐ¨˅±˅	\"ʐʽʐ\x00=ʽȫɛ(Ȉ	\"ʐʽ˅mʐ\x00>ʽةħʐTɛGʐʽʾʐ\x00=ʽ\"ʐʽŖʾȫ˄ਇʐ\x00=ʡǿʐ\x00ȧ³ʐ٧˄ರ\n\nʇ˃ʐ\x00=ࠁ˃˃ħ˃Ĥ˃vˆ˃Ìʐʐ\x00஠ˆॷǋ˄ʐ-ʐࢅ̘Ȥ	Ȥ͝Ȥ¿ȤȤīȤīȤȥȦO\x00ɌȥSO\x00ɏǬȥƟȥeȤ\x00ਓȥȦėȤȤΌȤȤ9Ȥͼ	Ȥ_g*༻Ȥ¼ႻˈQ,ˈˌˈ\"ʼʼˌʼୗ$ˈ\x00ʼʟˈˌˈ\"ʼʼˌʼˈ\x00ʼȑʾȤˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7õ%ˈƬǱౝÕØπˈƏۍƛˈ́Ȥˈˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂ˈqˌˈ\"ʼʼˌʼ6˂ˈ\x00ʼȤ˂ ˈ\x00ʼ˂7ƍȤ1=\x00ȤßΒࠖˈˈ8Ϲˈ\x00ˈۤˈˈŉ)ˈ6ˌǛ\x00\nŉ\x00ˈ۫ĸ\x00ˌˈpM\x00ˌˈB}&\x00ˌȯˈ\'ǫ}ȡ\x00ˌˈBp®\x00ˌȯˈ\'ȢԆ\x00ˌˈ7ĥȤȥȦˈą௩ƪȤˈˌà\x00\nȤˈ၏ˌáɒʶŎqϦȦ۩ʼˌĹǽવ˂	ʶŎqϦȦ܁ˀʼ\x00ʼҠʼʼ\x00ªςˀ+ÂʼVʶŎŭ໱ȦưU\'юˆʼĩ˃ÌʼŹˆе˅Ȧo\x00୵˃+˅	ʶŎୋȦưU\'юˁʼ\x00¥ˆสŰˁȥȦ7ȤȌóȥȬʶŎ4ಉȦưU\'ࡠȤ7ȅȤȥȦȤľȤ±Ȥ*ˈƹȥȦ:ˈTȤʔ÷ȤȥȦ	Ȥ\x00๫Ȥ\x00೴ȥȦƽȤ\x00෺ȥȦ̸ȤȤ@!Ȥ@ȤơȤ1ġƥȤ»ˡȤ\x00Ȥ-\x00ˑː˒˓ʶʷ˔˕ȤȥȦʇʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏɛɝɫɬɮɶɷ\\ȻuɓĀɇÕȭįɄīɏ\x00ȶıȱļɐłȿěɒ:ȰęȲĝɉQɕXɂZɑTȬ\\ȫ^ȺĈɆðɋķȮùȳ÷ȵ®ɁČɔĒɗĐɖ«ȷûȸĊȪ¬Ɉ¥ȴĎɊĳȾ©ȼɌɍģȯɅkɀiȹnɎdȽĵɃfϖʡƲíąʢɑȂʟőʟȂǞďǻȩb¢ȣ;ĩŕɭʘǊƺĘǻqǝbáļɘǘǢưȂĊȂvưŘ>ȂɾĸʟTʠȂEȂƀťȂʟȥænƤɝǜȉȷǙaʒĦȾ8ǼʦƅĄ÷ƈíɶƫƌȏÃím@ĀƙǪō=¯ǣčȡÑÇĻȢŖʂȞķŨƗàɱƪŬMɧÉʟÓEȂɁȂǈɛíɹǦȈƜȂʇÛưǷȂʟ^ȲɠȂ«ƴưƨȂưfȂǈĐưāƼ}ȂĔȁȂkưóƑȂȬȂ?ĢĤíȂǦĮȂǞĴíð»Ȃư¾ȠɈ2íð»ȂǂȂǧƚǍȂŽưŏåǤɷȂțĨŀ5sưƧƜȂ6ßíɸǦµȂpưɄ#ưǑ¦1íŒǉí[yƛȂ]ɲFǷȂĲí(ʯíůǥíŉɼɻíņĵģíƄǡĴĞưǦêʍ\'í»R£íʋǳ¥íǽhȫíÍʧíʛƇȓíÈȦƁíǭǊ`ířɪĝíǹuɴíȭʀǚưɖȨȂŇƊȂ®ȂǓɤȂǈ0ôzȂƋþĘȋíŵǦ±ʭưȽǷȂƋƓȂɆȂşĒưûȆȂʟʟȂǈȄĖǒʝèǸëÂċÐüƷʗɏʰCȰʟǾVƎÛíĶƔ,Ûí¼ʃƟě~ɀú\x00ŝĚȐɓɰZēǗøÛí¼ȸźÛí¼ÎɎ;ɐʤ\\ȝ¨/ưŎʆOƘíA°ǯĴ²ǨíD)·ɞưǵǯʁg\n;ĶũƻíĶŅɍ\n;ĶÀƻíĶÙȌưĂíȶƣɌƹíį×ǃȵ;ɺƮȱĬ;ƯɔȑX¹Ż ʞńíūʀPưŹĆţŭɳɂʔɯǅȿɊíą³ĪɊʮʞǫưʫ´IʫɇƳɿưīʟȂưĎĿ¶ȂtĴ|Ǜǁ:ʟȂʎĴǇ\rNǕʟȂʨư_¤{ƂưŷȂȎưɉȂưŜïȂHȂħHȂę;ŗȊǋȂơcjíɽǦƭȂĜBŸƵʊȂ%\"¿ɅƉćŔ!ŢȍȼʬÚ;ǎʐĭ.eɜÏÆśʪƩäâƥľªȂʉ9ȂǆȂǟȂɥíăçȂɥíŧǿȂɥưǮȂƦǏǔƶţƢɢȗÅɦ	ȂʣòȂɥĀǱšíĹȮñȯ;ʏưĉȂʟƏʅȂƍȂɥưŠȂʟŌưǩiđȂČưJȂĥţȺžSȂŲţUùĳɬȂǈȘrġÌÜíȴȀíÔýÖíȹŃɟí§ɘȔíœǦǐƜȂűȂȂɚĠɗɡ;-ŐʄǰLʖʟȂ&wȂǬȂȟíʟȂƠ½ŶȂŁÁưƜȂ­ɮȂ¡ȇʭ;xÞ*ǌƱʭȧŋŮǶíKʀʜưȜɤȂǈżĺ;ȻoȂ¬ãȂYȂŚʟ lËºƿȂʓƾíGǦʥƜȂğɒƕəƃŊňǴǺǀȕʑȪȅ$ǠȳșȒ©Ȃǖ4ȂɃ<ŞƖÒ;ʩɩʄØƽöȂȖɋƒʕʈɨȂŪưȚłȂĽŤÊʙõíȤǦQȂĕȂŴǲíƞʟʌ73Ƭ;ƝǦǄƸìƬíʚÄųɵƐÿſ+ėȂȃÕưĈȂÝȂɫŰıɕţîŦưƆoȂɣȂİȂ¸édưWȂ\x00ʱ	ʼ\x00˂!ʶKaU˂˂ˈ)˂ʼ\x00˂Ǜ\x00\nˈ˂-ˌ˒கO\x00ეO\x00ڹO\x00෍£ȓ੩ˑଋUˇˇʿ)ˇ˃˄\x00ӕʿ\x00ˇ˂ĳü˅ະ˒G <඀§<ਭ\n(\n<ƶUˈˈɛĬˈ	ˌɛ\x00ˈ2ɬ\x00ˈƶˌ\x00ཙ	˒ˈˈ¢}ɛ\x00৑˃)Rʼ\x00˂!ʶग़ͤƇʼ\x00˂!ʶʾȶ၀ďʼ\x00˂!ʶʾۗعyˌCݍˇHż	ʼ\x00˂!ʶKþˌˈ\x00Ȥ2ʼ\x00˃D˒\x00ȓவ\x00ȓ࿈ˈʶࠏˌˌ\x00sƜˀ_.ھˈˑȿ	ʿ˅\x00çƂ	¦Oäǔ^ʼ\x00˂!ŮɛLˈʶᅘƈȤ\x00ΥȤ\x00ྩȤƎȤœ	Rˀʶصˆ	ˀඬˈǮˀ˒ˌAK2	¦˙A^ĹO\x00ӍO˾\x00Ƭ|ŦˈH˒ˈ\x00ͫȤÒɍ£»\x00£׬ĳķ˒OjʶcoҧˌCĠ.ˌ¢ݷˌ୉ˊʿˈʶhਞʼˌȉˌ\x00ާp¸O\x00ūȬ൅\rʼ\x00˂!ʶKƭ\x00ʖŝ_ˌɕ˒඿ˈ˒ɛʼˀ࿪U˂˂ʼ)˂ˌ\x00ʼ\x00˂ƨD	ˈԄ˂ƍˈ±ȤˌʶယȤ˂ʷૣöö(ˈTZ˒ ˑŋˌˈëˈˍqRˈ\x00\\ೊˈˈ\x00ૃˈ\x00ည߹ˈ\x00ԑিˌˈ\x00ࠜʼpˌ\x00࿐ˌ\x00ଧனˌ\x00ɔঌˌ\x00ࡇҦҧˌ\x00ɔႌˌ\x00κʼ4Єˌ\x00ɔ࣬ˌ\x00κʼŭ֚˂ƶˈ\x00Ԙʶ§છ˂:˂ŦˀHˈ@\r˒O\x00ॊŔO\x00ཡʼ\x00˂!˅ʶО	ʼ\x00˂!ʶÝf	ʼ\x00˂!Ƭˁ.Ȍˌˈ\x00sʶఒ%_ˈO\x00̑ʶܧȤUˌˌˈ)ˌ౵áˈ\x00ˌŶˈ\x00ˌْʼ๓.ÙȤ.ˌ¬ˌƣ˂Gˌ\x00ຌˌ౻pˉ֢ǹ&ˈ˅ʶഩ˒ˍ঺	¦OäɋˑʵĳtˍƶɬÍຍƇȤ\x00ઉ˃˂O\x00ᄾ	ˏO\x00ǚປqRɛৌɛ²	\x00āȓ৹ɇɉɛȓ߇	\x00āȓภɇɉɛȓ౴	\x00āȓरɇɉɛȓ໙	\x00āȓଊɇెƎ̏ɇ%ʽ\x00ɛMʽ0Öʽ,	ÃňƎ&ÃkȄ\x00ɛȹD	ʷაˈH	ʼ\x00˂!ʶKȁˈ\x00ө˒Ý9DˈAʶÝŁJʶÝȁJʶÝƏJË2ȥȥ\x00sƜȑ̻ƈȤ\x00൰˒O\x00৖O\x00अO\x00଱ˈɛ\x00຾	\x00 ¦ɛƊ˒O\x00Ⴐ+Ĺ@\'టO\x00౓D	tO\x00āȓੈĂಪO\x00෷D	þO\x00āȓݓcೇˈH6͡	ˈƬʶhߕˑ൯UȦȦݶȦȤĬȦ৏Ȥ\x00ȦÁȥYȦ˒ŴȤǹ˒ʶ]Oȓධˌˈ˄	ˌGɛ\x00ਅ~.ʼ˒ˈ\x00ݘ˂ÀƩʼˌ\x00ऀˌ\x00Ԣˌ\x00ਮ˒๟˒TžˑȺ	˒\n\n8¾ʶও	ˌˌǓçǷˑహR˂O\x00ȓЖO\x00໫˂\x00௮ǃȓുÆ˂\x00ྨO\x00ࠢO\x00߳ʼˌTȓʹ\x00ƞУˈO\x00ჶĚஹˈ\x00Ɵˌˈ\x00ǈʼO\x00اO\x00ෂຣO\x00౜ʼਐO\x00ხO\x00ოԁȓࡦʼ̜ˀ	ˌ଩O\x00ҴO\x00ϤO\x00ґˌňʼ಑ˀ	ʼÂˈȤ\x00ਸ¾̠ÃkTƜŃGˈ+D_	ʼ\x00˂!ʶK`ƒˈ͘\r.ʶཪȦQȤɣࠃȥQȤ_L	˒\n(\n<¾¦ȓड़ȍđ˒ʶ]Oȓ෥ˈI˒ʶࡽ˒ƈá࣌ʶcołcRˆǂQ¨ˆ(ˆáˀϿ˃Ƭà\x00\nˆˌࠬೠˆఆ˃Ə३˅˅˃)˅˃\x00˅ȚŘђˁ¢˃\x00¥ˈʼ_ʿ¢˃\x00¥ʼ˂_ˇˁ\x00ˈ̝ˈˊʿ\x00ˈ̝ˈࠩˇO׹ˊO׶˄Ͽ=RʼˈĹõ࢈ʼƘӜ˂ʼݳ˂9Âʼ\x00ª֮ˌ`ˀǑʼ\x00¥ӳเȑkˀ<ੀˌ`ˌʼ\x00ªౣˆHʶఈȤˈğʶ§߶ˍ	ˌȦ\x00sˌ.Ƨ\x00E;сʼʶڷˌO\x00ѧO\x00أ՗࡜O\x00ظʪ£ຫǅRˈO\x00ȓżʼˈ\x00ܵˈ\x00ࠆD	@Cˬ@C࡯@C൘ʶ]Oȓ๞ʶަŲ\x00\nʼȓƳÎʶᄹʶ]Oȓᅆʶ༌ʶ]Oȓ൹ʶ޺ʶ]Oȓ߽ʶᄼʶ]Oȓ୫ǎ\x00\nʼȓ৶Îʶ௕ʶ૲˂\n,˂;बʶcഄ˂˂;ਾO\x00ҴO\x00ϤO\x00ґˌҲʶ]Oȓाʶ]O\x00ѯȓ֤ʶcЕഽO\x00ၚˌுˈ\x00੆Ø࡝ʶ]Oȓ๑ʶਚŲ\x00\nʼȓכĦʶՒŲ\x00\nʼȓဳĦʶഘO\x00਺O\x00঵ŊȓযO\x00பǎ\x00\nʼȓ૴Îʶ࠾ʶ၌O\x00֩O\x00ӤඋO\x00ӤఽO\x00ϥDO\x00̺ϥDO\x00ऴO\x00༅ʶൈO\x00ϣO\x00งO\x00ɕมO\x00൝O\x00ɕฐO\x00ɕࢉOjҲȓʹ\x00ƞУʶcࡍ঍ʶ]Oȓٝʶ໰ʶ]Oȓ౽ʶ࿱ʶ]Oȓ๯ʶ྇Ų\x00\nʼȓƳĦʶ຀ˀO\x00޼ˀˀ\x00୷ʶc´۞O\x00ډD @Cཤʶഭ@C৾ˆHˈʺ	¦Ѡ\r^ˆƭ\x00íƺxҕ	ǥƨǱ࿼ˈɛ\x00ࢁ\rȥsÂˌJɺˌˈƨ¬ȤJƶ˒\x00ం˒Ŧ9ˈ௵ƒ9ˈ༵Ƹ9ˈ˛	ˈO\x00ȓż\rʼ\x00˂!ʶKŧ߼ༀŧÔÃ˒ˎˈˌʼ˂ˀˆĜ\x00ો	ˈ\x00¼அ˒O\x00ϣO\x00હ`\r˒O\x00ၿO\x00ȓင	ƏO\x00ୃᄅˈ}ʼ\x00˂!ÝȤÃȽʶइȌʶᄵࠐˈဗɛe!.O\x00ߪDO\x00ᄯDO\x00૱DO\x00දO\x00෰ʪ£֙ˎLˌCΝˌȥˁʶhʯˌCˬ7ˈAȓ׃ȓٛȓ༰ȓէȓڄȓύȓႍȓևȓܤȓ࢝ȓ׫ȓգȓ֑Ƒ༃sˈ\x00ª࠙TÃʿʶh൷O\x00࿻ȱ	ˍO\x00ǚࡪˌ^ʶcoཷ	ʼ\x00˂!Ƭˈ1ĹO\x00֘O\x00Ϊ฾O\x00Ϊ෨Ɍ-ˈO\x00ȓЖˈ\x00ݞˈ\x00ʸᅅˈ\x00ʸລѸȼńˌHʶcoޮ	¦ĴŞ^ˌCρ	˒O\x00ʐˈʼ\x00˂!ċ˒˄˄\x00ӆŔ˄\x00ЬˑэɛO\x00୛	¦Oäȫ	ˏॣçƂʶcoႀUˇˇˉ)ˇˈʷདྷˉ\x00ˇ୦ˌsȤɺȥˌ£Z˒ ˑഹʶcoۖˌCĒÊµˀñDहO\x00ēҷÃkñŪѢʺL˒˂ˌ	ȌƶˈÍྴˈp	˒ˈˈ+D	˒ʼ\x00lඔˌCࢂƺ˂ˌCۣ	¦Oäȍ˒ˈ	˒ʼ\x00lॖʶׄˌˆˌאˆˌ϶ˆˌܫˆˌʝ˒ˈá	ˈȓӺɛɬRˌʶ߷ˌ	ʶ§ȓˌʶဢˈHwܪU\'य़ɛ౤ˌO\x00ࣟO\x00౿O\x00ໞɬǃஞʼݣʼƨ¬ʶhཧ˂ၟˌÖˀÃrƭĢˀQʼഔˈʶhܺʶh॥ʶ§౬ˀ\x00ȖˆǗ\x00ӟ࿀ʇˌˆʇ\x00୸Ɉʇ\x00୨ʇ\x00઻ȾɖɷɶȪɶɮȵó˂HO\x00ݠɎˈȓᄀ	ɛO\x00ȓż¸O\x00ūwಧ	ʼƧѥ˂O\x00ୖɐʶcoೲʼ\x00˂!¼څřx̭ྒྷř\'ළˀbˌ\x00s˂_Z˒ ˑěʼ&ٌʶƔOjIÒƩɅϨʼɂ˒\x00ԲK»\x00Kˌʼ	ˁ\x00\\ྼˈʶhǺďȤ\x00ථ	ʼ\x00˂!ʶKȘȤҟ	ʼ\x00˂!ʶKˀˑȟ	˒ˌȥ+D\rʿ¼ίˆ˃˅ˁŶZ˒ ˑິ.Ń	˒ǥʑǥ¾¸O\x00ūԌ˅ࢯ\rʼ\x00˂!ʶKˋ૵sˋ˒Zˍˏˎ	¦ɠ­^ʶྀQˈă{RˀƧˆȓ݋˃GˆȓࢵçЎɛ\x00\\Įɛ\x00Ëźİɛ\x00æ׳\x00 ¦ɛˁɛ\x00ໝʿˁ\x00඗ˇˁ\x00ฮʼʼ˃Ĭʼ	ˁ\x00ËԊ˃\x00ʼMʿ9ˁ\x00݄ˇ9ˁ\x00उˀ˃\x00ʼʟʶʌˀÍ࠿\x00 ³ɛ¯ˊHʼ\x00˂!Ȥ˒ʶݿ¸Ȥ¹ĺUˇˇˏ)ˇˎO\x00Ǯ౎ˏ\x00ˇǭˏ\x00ˇȮɾƈȤ\x00ࣣȤƎȤœZ˒ ˑҸ˒Ń9D.ĺ˒Ȥ<ҟ	ʼ\x00˂!ʶKYȥ \x00\nȥ~SĹO\x00ӍO˾ˈŲ\x00\n\x00Ϙ)¹ĺˌğˌ\x00ࣆˌ\x00۱ക\x00Ƭ|ݛˌ\x00သˈۼ\n©\x00ઑO\x00ȓãڐʶఋ؜U\'܃U\'छO\x00१࠺ʼHʶໃ\r.ӌˊȅˌʼ_Z˒ ˑэ˒Ôž	ʼ\x00˂!ʶKüZ˒ ˑȟʶ໷˒ʶ]Oȓ౪˒O\x00ঈȤÅɆˌˈ\x00૩˒ʼØȤ˒ʶ༱	˒Gˈ\'ႲċˈȤ\x00୒Ȥ\x00مˈʼaˌֱˌLˋʼ\x00Õ˂ʼà˂˒ǦǦ໶	¦O໛Ʀċȥʼ\x00˂!ˊ\x00ƬȤȥʶྕၔʶྈŐʼगğˌߋฺ˒ʶ]OȓߍyȤ\x00·Z˒ ˑƱˑလʼ\x00˂!ˈˈʶবŃRɬLʼُ˂ിˀɛ\x00࿷ɛ\x00؟ɛ\x00лˀˆO\x00޷థ່஑܄஻ɛ\x00؁ɛ\x00лˆɛ\x00פˀ\x00႔Ľˀ\x00בĽ˃ɛ\x00യ˅ɛ\x00ѻɛ\x00ຄɛ\x00п˅ʼɛ\x00Ђ˅ˁɛ\x00ѻɛ\x00ళɛ\x00пˁ˂ɛ\x00Ђˁɛ\x00ҽ˃˅ɛ\x00ҽ˃ˁɛ\x00ຓ˃ɛ\x00໳˃˃\x00ංɛ\x00۸˃ඨ˃\x00Ԕɛ\x00୆˃ભɛ\x00ဓ˃\x00჏ɛ\x00ਉ˃\x00઀ˀ\x00ၥɛ\x00ٺɛ\x00ਥ˃\x00ৼɛ\x00Գɛ\x00٪ˀ\x00ᄉɛ\x00ݒɬɛ\x00৴౰ʷ߀ʷ̸ɛɛ\x00୯ʿAɛ\x00୏ɛ\x00სˇAɛ\x00໘ɛ\x00ঝɛ\x00೧ɛ\x00ଖɛ\x00૬ɛ\x00୙ˊˊʿ)ˊந˄˄ˇ)˄ˏɛ\x00གʿ\x00ˊˇ\x00˄Ŷɬˏ\x00๚ˏ\x00டˏ\x00඼ˌH	ʶƢO\x00์\r˒ˈ©ˈ¢Śˈ¢ЄUˇˇˏ)ˇʺO\x00Ǯ݌ˏ\x00ˇǭˏ\x00ˇȮɾʇO\x00ūɏȣˈÀƩʶֺȘʼ \x00\nٔ~	ˈƨȤƶ.ˈ\x00ªƔˑȭ˒ˍՇˌCඩʶcoݎˈO\x00ѧʶ]O\x00ქྋȤȸʶco౧Ȥ½ȺeUˀIˀ}ˀˀďˌ\x00ˀဈˌ\x00ˀˌ\x00ˀXçॵ˂˂ˌ\x00ˀ٩˂ˌ\x00ˀX˂O\x00ˇˌ\x00ˀX˂ћO\x00ʐˌ\x00ˀX˂ਘˌ\x00ˀX˂ˆˌ\x00ˀX˂ौͳˆˌ\x00ˀX˂ɢ࠽ˌ\x00ˀˌ\x00ˀਖ˒Ȥ\x00৿Uˇˇˏ)ˇˍO\x00Ǯࡘˏ\x00ˇǭˏ\x00ˇȮɾŅCp޿˂ˌ۲ˌ\x00ॅp\rʶhܻȤ?ƶȤഛȁˈ\x00̞ˈŮ	¦ɷČ^UʼIʼˈ\x00ܮխʼˌˈ\x00୤ʼФˈˋū̠ÃkÔ.Dʶcoࡸ	ˈƬ+ʶ౗%UˈˈȤ\x00ഀˈˌȤ\x00ًˈ2ƈˌ\x00ရˌ\x00ܨˌ\x00ᄇˌ\x00๼	ʼ\x00˂!ʶKđʼˈÚȤO\x00ēʖȤ.ȹ	ʶƢO\x00࿖	¦ϋƓ^Z˒ ˑȿɛi\x00\nˈǚπƅšMƑˈ\x00ࡺD?ˈ\x00ངˈ\x00အD?ˈ\x00ಠˈ\x00࿮D?ˈ\x00ࢃˈ\x00಻D?ˈ\x00੫ˈ\x00ऱD?ˈ\x00ࢻˈ\x00໗D?ˈ\x00ྏˈ\x00ႵD?ˈ\x00ؽˈܠD?ˈ໓	˒ωǱງˈAĴȐƀɠɷ˙ϋŲˋਡʽʷકˌCױ˒ˈá}ˎೄˈࡋO\x00ȓࡨˌC༞ʼˌ࢚ˌඤˑ՘ˌÃёˈĹˈ\x00ਿʷࠋˈ\x00ԡˈ\x00შˈ\x00ׅѸȻྂˌH˒Ƈ9Ȥ\x00ڱď9Ȥ\x00၉y9Ȥ\x00·˃ƭ\x00íÇxҕˈˌȥ.ɛʶ׻ʶؕˎთˈʶh೯	ˎO\x00ǚ߬	Rˈʶ୪Ȥ¯ˌÖ˒\x00¼ȓ༗Ƹˈ˛Uˇˇʿ)ˇʿ\x00ˇȚŘђˈO\x00ૉ೸ॡ˒ʶბ˒ˈ˖ˈຉȤ?ɓʶcoૂ˃Lʼ&জˑஈ˒ˁˁ\x00ӆŔˁ\x00Ь	¦ƀ§^.ˈ(ˌ\rˈH(MėMᄶˊL\'RˈǴ\x00ȤˌǃȓઔȤ+࡛ˌ\x00ÆˈĞȥ9DȤ+ȥƾ0̼ʼH6qǒ¸Oˁˈ\'Ƈ\rɵˈ²O\'ˈȓ๽	ʼǤĹǽ̻ˈ\x00ȤȥˌනȤaȮ	˂ƨÀЮˈʽ˒˅9DˍLʼʷোËʶ׭.ˈʼǽˈřӘ˒ƈᄺüʋķʋǸžɛʶhʯØൾÙO\x00ЀˌCԞˈˌRʼʶ༟ʼ	ʶ§ঙʼʶܽˈHˈˌˈԄƿ	¦OäɒRˌʶhּˌ	ˌǱѬˌ	ʶ§ȓˌʢˈHˈʾˈ˃˒ȥÁAȤ\x00ীȤ\x00αȤ\x00฻	ʼ\x00˂!±˄ˌCऍZ˒ ˑČ	ˌȤ\x00ǎˈˑס	ʼ\x00˃Ɯˌ˒Ȍʶর˒O\x00ЀˆO\x00ēҷƎˣ?Ãk֌Ѣ˂˒ˊ9D˒ʶദ	˒ˈˈ¢Ē\'RˈO\x00ɜȓݭˌ	ʼO\x00ȓãԃˈʼ\x00ȓࠇˈˈˈ\x00ણÇÃ˒O\x00̑.ˈ\x00sˌȤɗ	ȝƨ¾xĄˈɉ˄ʶhࡩʼʶՁʼ\x00˂!ʶ྘୕ˈÃkżˈ˒৚ˈˑАÔˈǃԨ.ʼ્ʼ\x00ଆʼ\x00෶ˌJˈ೑ˌJˈʶݽ¦ȓ൛ȍÒɃˈ%ˈ\x00ͫ6öĹʶԵˈGྒˌGճʼGۙˈˌʼŦ˂HɛAÒćƼ2	ƨǹx`\rˈˌƴʼ˂¾ˌC}˅ʶhǺˈɛ\x00ޜ˒ʶทĳĄˈɛ\x00࿛ɛ\x00æවȣՅ˂ǚઽȣѓ˒\nöö੝ğkˈ<ȣȤ©Ʉˑ۶˒˅	ˏຊçƂˌȓ౐˒ʶ]OȓႣˑČˈӱˌÄ˒ˁ	.Ȥ\x00£ȥȦ	ˏཬçƂ˒ĳǸʶcoز¸O\x00ūBސ˒U\'Ӌ\rʼGˌ\x00ಁˌ\x00ڛp	ʶƢŒO\x00ჹ˒ˈ8řˑ܊ȤÈɁRʿƬʿʿ¢ɒʼ\x00˂!ʿˌCԝʶ§׽ˇH˒ʼĒ.ˌʼ\x00˂!ʶැʶcoՍȤÐȴ	ɛ\x00\\Įˈ˂ʶcoႝʼ\x00˂!Uˌˌˈ)ˌ¦ˈ\x00ˌw-	˒ʼ\x00l਍Uˈˈȥ)ˈȤ\x00ȥ\x00ˈƨDອƝˈʶ͢ȤʶথȤȲ൧Ȥ\'௒ݵȤ\'ࡓˌȤ\x00ǎǃਕ	RˈŒೂˌHˈɛ\x00ຼYūxđ˒ŴȥႱ˒Ƈ9Dď9Dy9D	¦ŲÄ^˒ƈáଛ	˄\x00\\ګ	ʼ\x00˂!ʶKķ	ʼ\x00˂!±ǦȤ¿Ɋ˒ʶඹ	˒ʼ\x00lଷȤÍɔˈĹõ¸	O\x00ඊӈɀ	ˌO\x00ȓżȤrȶਫ਼ˈ\r.ˌ୎ƧষʼࣀࢦˌƣZ˒ ˑಷˈʻ%˒ঋU\'჋O\x00ȓãș£מıO\x00ȓãș£ȓہĺɛɬȓ္ʇȓ৲ɷAȓऊȓ༣ȓკˈˎˋʶhǺ˒ˈ\x00َʷ୿ˈLˑ୹Z˒ ˑȭʶ೤ɑ	ɛ\x00æȓभȤȿ˒ǃȓ೎Æˈ\x00२ˈ\x00ڀÜʶྞȤʶcoऽ	ʶƢƱO\x00֍˒0ʼ\x00˂!¼ί@ŅŶˌCໄȥÂȥ_Ȥ¯ȭˑઋ˒˄ʼ\x00˂!ǥˈɛ\x00ܛˌC¾ˈĽŦˈࣉʼƧˈƦ	¦ˋƔ^ˈ\x00Ȥˌˈʶތˋj	ʼ\x00˂!ʶKǉ	O\x00ৱथȤ	ʼ\x00˂!ʶÝʺˈʶട	ǣbˈ\x00ত	¦Ȑ£^	.Ȥ<ִൗȤˑٙRʷ௭ˈHǉ˒ˋ)ˌǤˈˈ_ˊǿ	ˈƬʶhྠ˒t9D(þ9Dʼ\x00˂!ô	ʼ\x00˂!ʶKtˑڝȤ¹ȳ	ʼ\x00˂!ʶKǸ	ʼ\x00˂!ʶÝǦƦ\r˒<\x00\nQQ־ܭʶcoΒʼ˂ˑƱȤ¢ȷˈȤ\x00̋Ȥ\x00໪˒O\x00ӄʶഋˈɛ\x00ৡ˒ʿ	˒ʼ\x00lფ\rʶ§ȤéȥĹõત˒ˌϫˌ͘O\x00ݖ¨ࢰ५	˒ωǱࡄɬLˉ \x00\nˉ~.˂ÇʼˑҸˈȤO੢ĳþʶʌˌÍ෩ɛƖȍȯˌCː	ʼ\x00˂!ʶKȝʾځɛ\x00ࣷɛ\x00ԻO\x00ᄟˈˈ\x00sƜǣ_	ʺƭకˏ̡	˒ȓูO	˅Gˈx̭ƇUˇˇʿ)ˇ˃ˁ\x00ӕʿ\x00ˇ˂\r.ʶ]Oˈǝʶ]ˌƑˈௌsˈˈO\x00ӄ	ʼ\x00˂!ʶÝ˄Ʀ˒ʶ]Oȓཊˑ໩ÁץRˈ\x00\\ాɛˈ\x00Ѧᄨˈ\x00Ѧ໾ˌÖ˒ʼµ˂ˑŋZ˒ ˑౚʻʷ໼ˌCpˑěˌCӋ	ˈʶhȤJˌUˀˀĒˀ˂\x00ˀOчˌ\x00ˀ2˂\x00ˀO؈ʼ\x00ˀϽˈO\x00Οȓؓʶċʶco৩řˈˑ஧˒żž˒\n0D(\n<¾¦ȓဵȍȤ¤Ȱʼʷ༮ˈӧ\rʼ\x00˂!±ˏ\x00ങʺ_˂Lŧ´ǳȤ\x00ᄆʼɺǳȤ\x00ਯ˂წ	ʼ\x00˂!ʶKˆ	\x00 ³ɛ\rɛi\x00\nɛòȥ_.ӌȅˌʼ_ʶcoჴ	˒ʼޫˌြȤȤ(ϹZ˒ ˑȺ\x00.ˍ˒\n<¾ˌCްɛɬˌCЭ	RˈŒਗ਼ˌHˈˀˑىżÃƺˌʶཟ.	¦׋ě^˒ˌˑୀ˒ʶ]Oȓׇʼ\x00˂!4ˉˈˊˋʷʸˌˍʐʑʒ\r˃˄˅ˆʨʩʦʥʣʻʽʾʿʜʝʚ\rʘʛʟ3ʡʗ\x00ʞ7ʖʙʠ*ŏ%K9?J¢?«ÂzÂ{7Â[Â.~Â­Âfq?®Âf£q?ÂyÅL)8r?D#\"ÂfAeÂ1´Âx©b¢B¾?\x00)w jÂÂOÂ`?ÂÂÂÂG§¨ÂVÂ*Â³Âu\nÂ)¶a¼Â=)TÂ¤ÂiÂiÂÂ\r`¢I?Å/h?U$¥qºk-»:¢Âp?SÂQÂÂ!Âq?<6?Â,²F(Z]E)l&?l¿X¬N¯Ã];)Yv?YÂ¹µ?Â±¡§°½ÂÆ?|ÂÆ?ÂyªÂ2go?}Â\'ÂÂ4?J_Â>¸@?¦sÂnÂÂdÂmÂPÂ2g?}Â0ÂÂ	tc_Â>¸@?CsÂ\\3ÂÂÂÂ ÂR·^ÂM)ÂM?ÂHÁ+5WÀÄÂ\x00Ç˅I.\x00\\ࢌӁɐ.\x00\\ຐӁɐɛʐʽʷҡʐU˅˅˄)˅ʾ˄\x00˅2ʽႤʾ\x00ʓʾ\x00૰ʾ\x00ჰᄋ4௃Ȥԏʶƶ	ˊ\nO\x00౮	ɬɬ୬ʖăˊʽ<঴ˊO৮ʽZˊ ˉŋȤ৘ʽɛ\x00өÙʇ\x00.ʷǂ˟Ů˄Oʽ˄˅ˉƱfʽkȤʩ\x00Ęʩ\x00ſʙˊɫ¢Ē˄ɛ\x00ઇUʿʿɷ)ʿ\x00ƞ=ɷ\x00ʿ႓ɛآɛƥȍ˅ʐϛʽɛ\x00̞\rƜʷǂЪʷĸǪʷ߻ʝ̡Ƒʽ˄ʾ2ʾ٨Oˊ˄ʽ#Rʽʶhػʽ	˄\x00¼ȣ˄ǘ˄\x00ࢎޗʶʌ˄\x00෎ྦྷ˅H	ˊ˅(˅µŤ.๾˅ʶhଇZˊ ˉě#ࢶʽʽɬĬʽ	˄ɛ\x00ʽ2˅ƶ˄\x00෫ɬ\x00ʽȹ˅	0ՔʾHʦL\rˊŲ\x00\nʐ໹ĺɛƥǇf\x00Ȗʽ \x00\nʐǷ˅Ǳಀ.O\x00ࠛ७păʐӹ.ʷĸʑÒʐ	ˊ\nO\x00৕O\x00ൃʛ	ˊ˄(ɛ\x00˄2U˄˄ʽ)˄˅ʽ\x00˄2ʾɛ\x00࿜˅ɬ˅ʷ̸ʾ-ˉŋˉߛˊʽˊɝ¢}\r˄˄\x00ŀǃӊ̂Ýƨʐ\x00ਬȣʑpZˊ ˉČ\rˊŴO\x00ȓãધǹRŒಛ˄	ʽ˄\x00ॲʽ˄\x00඄ʽ˄\x00૖ʽੌ˄-ʾO\x00ލƜʐʒǜʑʒǜʑʒɣǣʷÐǪʐ\rR\x00৒ୄ˄̼˅	˄ӎˊɫ¢}ɫʶͪ˄ñÃ	ʩO\x00ޣ༄	ˊʽ(ʽຏ¾.ҹɬ	ˊŴɛ\x00՞ϭˊO\x00Վɝʶͪ˄ȗóʽH.ʷǂЪʷĸǪʷ෈ʇ\x00໴ʐʘʜ	ʩ\x00\\ՙ	ɮʐ\x00ܦ׎ŝ˄ʷҡ˅ʶସʠO\x00فʟ\rˊŲ\x00\nʐࣵĺ	ʶ§ၬɝ_ˊɫ˅+ɫȗʷϚʐʑĞʑ²ʐǝʐ\x00Ơʑ¯ʽમʑɐZˊ ˉȭ	\x00 ¦ʩ.ࢀˊʐBăˊO\x00॰O\x00ڞȓǤˉૌ.ʷÐͰĽྪO\x00৓཯˄	ʽ˄\x00௽ʽLʽĽˊ˅ʷٲʐɛʽ(˄(˅(O\x00ȓãȓࢪ˃4˄	ʶ§ݔɫ_.ʷǂ˟}.ʷĸᄁϛˊOߺˊʐ\x00झˊ˄	ˊŴɛ\x00ܙϭ.ʐʑOʒ	ˊɬ<࿫ʽɛɛ?ɛǥʶέ¸	ˊʾ(ʾµŤ˃ʶ҃ȓӺO\x00ȓż	˄ʶ]ʇʽ-ɵʽ²ʐƻ\x00\nʽ¹ʽʐ\x00ʽ͉༏˄ɛ\x00౉ʐ\x00ʽǙ˄9D˄౼˄;चɬ˄Ȳʽɛ\x00ੰ.ʷĸʐצʷĸʐQċ.ʐʽ	.ʷृ˄ʽ\x00ʽ࠴Ϩ.ʷÐ͖ʷÐόpU˅˅ʽࢸ˅	˄ʷϚ˄ʽ\x00˅ྔ˄ڑ.ʐOʷÐʐݾ.ʷÐͰ}ʐˆO\x00ȓãșǎǃȓ঑@CːʥIˊˆƨˆ஽ࢩ«ʐIʐ\x00ם˃ˉৠʽɬ\x00ųʐJ˄ʽ?ʽნ	ŝƨʐ\x00஖ÊµʽD4ʽɛƖǇʡ\rRʽįʐǽΌʽó˄H.ʽˊʐ\x00લO\x00৤ˉČɛLˊɝ¢Ēɵʻ²ʻǀȓˏʻ\x00ǎȓॿ\x00ʻXȓۓɛෑ	ʽʶ]Oɬ	ˊ\x00¼˃ˉ൓ɛƖǇʚ\r.ʷÐ͖ʷÐόǣӹ˃ʶ҃O\x00ȓãȓǤˊZˊ ˉȿ˄ɛ\x00ԃER˄ກ˅˅ʐ)˅ʾʐ\x00˅2˃ʾ\x00բʾై˃˃µܗˆƶ˃_ʽʽ(ˆ,ɛˆ ˄؏˄±ɛwʽ	ɛʽʶ§ڃɛńʻHˉмƜʐʒǜʑʒǜʑʒɣǣʷÐƔÃʶ਻˅\rU˄I˄ʐÀ˄ ʽ&˄	\x00 ³ɛZˊ ˉȟȗʐ\x00ʑັʽࡊ\'U˅˅˄)˅ʾ˄\x00˅2˃Aʾ\x00Ãʾ\x00઱ʾ\x00αʾ\x00ڙ~ʽ˃-ʾʶh๡ˉěʽZˊ ˉм.ୡʗăˊʽ0Ɨ«ʩʠɛʒĽʽ\x00ɛ2Zˊ ˉƱˉȺ.ʶέ¸Ǝ&Ãk	ˊʾ\x00ȓǤˉАO\x00ਛʞʣʨÄƝˊɝʾ+ɝUʽʽɛ)ʽ˄ɛ\x00ʽ2˄Â˄ˊʐp˚˙˛˜ʸʹ˝˞ʪʫʬˊʾʭ\x00=	)	\x00	\'\r#	\'			\n	 	+(!&\"*	%$		\x00,ɛɬD˛ɷপɝɫ\r˛࿅ႥǏႏǏখ˚ě˛ʾʣʠ၎	ʣ\x00Ëଵङ˚֪	ʩ\x00Ęʩ\x00۳Ɲ˛ʇ\x00ු	\x00ƞ¦ʣʣʠ֭Ǘ\x00ҖˊfO\x00ʐfᄳfʶ๣ྖȌˊÄZ˛ ˚ěʨ\x00ʾʬ˛ʩʾ௉ʥႂԈğPڔɷɶʾ \x00\nʇ\x00༽ʾʫʦL˛ʣȌʶပɛƥǇf\x00Ȗએʨ\x00ʪ2ʦˊʾʨ\x00ʪ2ʾ\x00য়ʭ	ʩ\x00ɩ³ʩˊ\x00ঃʪˊ\x00੦ʾf.ʾ	ʾǗ\x00Җʦˊ\x00ӂʫfʶోʪ	ʣ\x00\\֧˚ʵ\rRʶ§ȓʪʶࠡʾHZ˛ ˚ŋʻʺʼʽʹ\x00ʾʿʰ\x00\x00\x00\x00ƝʼŲ\x00\nʰഅZʼ ʻČɮʰ';

(function(){var _$KB=16,_$aF=[[8,5,11,7,11,8,11,10,9,10,1,3,15,15,2,4,7],[51,84,8,13,61,23,16,10,14,62,66,47,70,112,32,47,93,77,71,47,43,26,22,114,57,19,25,113,103,44,39,46,77,102,48,90,106,5,15,48,99,12,0,11,41,51,15,34,61,13,52,48,37,81,39,51,91,4,65,17,48,75,3,48,55,47,31,95,110,78,49,40,47,35,78,47,2,57,13,45,16,92,49,75,47,100,34,68,86,108,28,97,96,2,107,112,81,30,50,98,74,27,42,87,88,54,83,38,76,59,21,18,34,47,6,105,66,83,26,88,106,105,90,100,30,64,52,5,70,34,68,8,40,21,104,110,65,92,81,68,61,7,108,41,61,31,68,76,24,61,28,104,49,114,91,53,47,5,12,110,53,60,34,80,83,46,4,87,78,70,96,95,72,20,40,20,12],[28,5,1,5,16,0,29,31,10,11,17,6,30,13,25,17,16,26,19,26,13,29,19,2,4,23,28,18,28,21,28,7,20,33,9,28,3,28,14,15,32,12,17],[1,51,13,39,21,8,47,44,2,5,2,16,15,45,48,45,3,17,14,31,37,35,55,40,48,28,21,10,1,26,0,34,19,4,33,4,51,3,38,6,26,3,23,18,12,17,29,43,56,18,42,43,14,36,32,50,20,19,7,12,43,41,36,29,30,30,47,24,41],[26,10,27,5,36,17,14,17,14,1,43,33,10,22,24,40,2,42,4,40,45,19,4,31,12,35,32,38,3,38,9,28,7,22,25,41,23,11,22,13,29,34,12,26,41,4,11,10,8,30,6,20,43,39,12]];function _$K6(_$WG){var _$bv=_$WG.length;var _$h7,_$oP=new _$gZ(_$bv-1),_$aB=_$WG.charCodeAt(0)-97;for(var _$YT=0,_$KB=1;_$KB<_$bv; ++_$KB){_$h7=_$WG.charCodeAt(_$KB);if(_$h7>=40&&_$h7<92){_$h7+=_$aB;if(_$h7>=92)_$h7=_$h7-52;}else if(_$h7>=97&&_$h7<127){_$h7+=_$aB;if(_$h7>=127)_$h7=_$h7-30;}_$oP[_$YT++ ]=_$h7;}return _$3Y.apply(null,_$oP);}function _$Cj(_$WG){var _$bv=_$3Y(96);var _$h7=_$K6(_$WG).split(_$bv);for(var _$oP=0;_$oP<_$h7.length;_$oP++ ){_$nY.push(Number(_$h7[_$oP]));}}function _$nj(_$WG){var _$bv=_$3Y(96);_$_U=_$K6(_$WG).split(_$bv);}function _$bv(_$WG,_$FZ){return _$MC[_$_U[34]].abs(_$WG)%_$FZ;}function _$jW(_$_q){_$_q[12]=_$zY(_$_q);_$7_(_$_q);var _$xF=_$Fw();var _$xF=_$_q[_$bv(_$So()+_$Hm(),16)];var _$xF=_$Ya()-_$_q[_$bv(_$Rg(),16)];_$8R(_$_q);return _$kV(_$_q);}function _$zY(_$_q){var _$mA=_$6I();var _$mA=_$So();var _$mA=_$$7();var _$gj=_$_1();var _$mA=_$Rg();_$_q[_$bv(_$6I(),16)]=_$So();_$c5(_$_q);return _$Sd(_$_q);}function _$6I(){return 7}function _$So(){return 13}function _$$7(){return 14}function _$_1(){return 12}function _$Rg(){return 8}function _$c5(_$_q){_$_q[9]=_$7c();var _$xF=_$Rg();var _$gj=_$aQ();_$_q[4]=_$yl();var _$gj=_$$7();return _$_1();}function _$7c(){return 15}function _$aQ(){return 6}function _$yl(){return 2}function _$Sd(_$_q){var _$xF=_$6I();var _$xF=_$So();var _$mA=_$$7();var _$gj=_$_1();var _$xF=_$Rg();return _$aQ();}function _$7_(_$_q){var _$mA=_$eB();var _$xF=_$_q[_$bv(_$_1(),16)];_$jV(_$_q);_$p5(_$_q);return _$RF(_$_q);}function _$eB(){return 9}function _$jV(_$_q){var _$xF=_$6I();var _$mA=_$So();var _$mA=_$$7();var _$xF=_$_1();_$_q[_$bv(_$pM(),16)]=_$Fw();return _$_q[_$bv(_$EN(),16)];}function _$pM(){return 11}function _$Fw(){return 1}function _$EN(){return 4}function _$p5(_$_q){var _$mA=_$fg();if(_$eB()){var _$gj=_$Rg();}var _$xF=_$eB();var _$mA=_$7c();_$f7(_$_q);if(_$yl()){_$_q[0]=_$$7();}if(_$Fw()){_$_q[7]=_$So();}return _$_q[_$bv(_$_1(),16)];}function _$fg(){return 10}function _$f7(_$_q){_$_q[_$bv(_$Rg(),16)]=_$aQ();_$_q[4]=_$yl();var _$gj=_$7c();var _$gj=_$Ya();_$_q[11]=_$Fw();return _$6I();}function _$Ya(){return 5}function _$RF(_$_q){var _$mA=_$$7();if(_$Fw()){_$_q[7]=_$So();}var _$xF=_$Fw();var _$mA=_$6I();_$L4(_$_q);return _$_q[_$bv(_$_1(),16)];}function _$L4(_$_q){_$_q[_$bv(_$RX(),16)]=_$$7();_$_q[_$bv(_$Ya(),16)]=_$pM();_$_q[1]=_$6I();_$_q[13]=_$Hm();return _$eB();}function _$RX(){return 0}function _$Hm(){return 3}function _$8R(_$_q){_$v_(_$_q);var _$xF=_$pM();var _$mA=_$Fw();_$_q[7]=_$So();_$_q[3]=_$eB();_$_q[15]=_$Ya();_$_q[_$bv(_$Fw()+_$6I(),16)]=_$B3(_$_q);return _$gp(_$_q);}function _$v_(_$_q){_$9A(_$_q);_$PH(_$_q);_$9d(_$_q);_$_q[15]=_$Ya();var _$xF=_$aQ();var _$xF=_$EN();return _$vg(_$_q);}function _$9A(_$_q){_$_q[_$bv(_$$7(),16)]=_$_1();_$_q[_$bv(_$pM(),16)]=_$Fw();var _$xF=_$yl();var _$gj=_$RX();_$_q[14]=_$_1();return _$fg();}function _$PH(_$_q){var _$xF=_$So();var _$mA=_$Hm();_$_q[9]=_$7c();var _$mA=_$pM();return _$Fw();}function _$9d(_$_q){var _$gj=_$RX();var _$mA=_$$7();_$_q[12]=_$fg();_$_q[_$bv(_$Fw(),16)]=_$6I();_$_q[13]=_$Hm();return _$eB();}function _$vg(_$_q){var _$mA=_$7c();var _$mA=_$Ya();var _$xF=_$aQ();var _$gj=_$EN();var _$mA=_$RX();return _$$7();}function _$B3(_$_q){_$_q[0]=_$$7();_$_q[12]=_$fg();_$_q[8]=_$aQ();return _$EN();}function _$gp(_$_q){_$RV(_$_q);_$HW(_$_q);_$_q[_$bv(_$Fw(),16)]=_$6I();var _$mA=_$RX();var _$gj=_$$7();return _$Ya()+_$pM();}function _$RV(_$_q){_$_q[14]=_$_1();_$_q[10]=_$Rg();_$_q[_$bv(_$6I(),16)]=_$So();return _$Hm();}function _$HW(_$_q){_$_q[15]=_$Ya();_$_q[11]=_$Fw();_$_q[7]=_$So();var _$mA=_$$7();var _$gj=_$_1();return _$fg();}function _$kV(_$_q){_$_q[_$bv(_$So(),16)]=_$_q[_$bv(_$RX(),16)];_$_q[14]=_$Ya()+_$pM();var _$mA=_$So();var _$xF=_$_q[_$bv(_$RX(),16)];_$Jf(_$_q);_$_q[3]=_$eB();return _$_q[_$bv(_$Ya()+_$pM(),16)];}function _$Jf(_$_q){var _$xF=_$pM();var _$xF=_$Fw();_$2n(_$_q);if(_$fg()){_$_q[8]=_$aQ();}if(_$$7()){_$_q[12]=_$fg();}return _$So();}function _$2n(_$_q){var _$gj=_$RX();var _$gj=_$$7();var _$gj=_$fg();_$_q[8]=_$aQ();var _$mA=_$Hm();var _$mA=_$eB();return _$7c();}var _$qA,_$3Y,_$FS,_$_U,_$MC,_$nY,_$jW,_$ec,_$uG,_$r1,_$YO,_$gZ;var _$gw,_$aB,_$oP=_$KB,_$tp=_$aF[0];while(1){_$aB=_$tp[_$oP++];if(7<_$aB&&_$aB*37<444){if(10===_$aB){_$oP+=5;}else if(13*_$aB===117){_$Cj('rSQX`Z`Sgssss`UXY`TSUW`TY`W`TYV[W`YXXVY`TSS`YW`U`WS(Y');}else if(-110<_$aB-117&&_$aB-125<-116){_$nj('jtzcjz ~{S`4`iveyfd`zmvc`0//.++-`$_kj`t`W`Tr`jlwjki`ODC?kkgIzhlzjk`tzcjzr`{lexk~fezmvcSTrRevk~mzxfyz]t`xvcc`]28iivpYgifkfkpgzYglj}YvggcpS`|zkK~dz`D~xifjf{kYODC?KKG`R\\i\\e\\j]`x}vi:fyz8k`izvypJkvkz`fgze`TST2`jzey`~{S`wizvb2`1`S{lexk~feSTrmvi `R`izgcvxz`kfJki~e|`zozxJxi~gk`4$_kjYjxaW`n}~czS(Tr`izjgfejzKzok`Dvk}`mvi `4$_kjYvzw~2`jxi~gkj`xvjz `Wvi|ldzekjT2izklie `jgc~k`{lexk~fe `lej}~{k`feizvypjkvkzx}ve|z`8xk~mzOFwazxk`vzw~`|`{ifd:}vi:fyz`2`jn~kx}S`3`S`VV]2`{cffi`STrmvi `YvggcpSk}~jW');}else{_$oP+=-5;}}else if(_$aB*59>177&&-109*_$aB>-872){if(6===_$aB){_$MC=window,_$r1=String,_$gZ=Array,_$uG=document,_$qA=Date;}else if(93*_$aB===465){return;}else if(-67<_$aB-70&&_$aB-92<-87){_$gZ=Array;}else{_$r0(114);_$oP=0;}}else if(120<124-_$aB){if(2===_$aB){_$gw= !_$YO;}else if(22*_$aB===22){_$_U=[],_$nY=[],_$3Y=String.fromCharCode;}else if(_$aB-23<-22){_$YO=_$MC[_$_U[5]];}else{_$r0(0);}}else{if(14===_$aB){if( !_$gw)_$oP+=1;}else if(15*_$aB===195){_$YO=_$MC[_$_U[5]]={};}else{_$FS=[_$nY[6],_$nY[5],_$nY[10],_$nY[3],_$nY[4],_$nY[12],_$nY[7],_$nY[8]];}}}function _$r0(_$gj,_$WG){function _$uU(){return _$c2[_$_U[18]](_$i0++ );}var _$aB,_$tp,_$_q,_$h7,_$ZG,_$c2,_$i0,_$lx,_$zM,_$qK,_$OS,_$Rh,_$bv,_$Cj,_$nj,_$KB,_$oP,_$gw,_$YT;var _$xF,_$6I,_$mA=_$gj,_$So=_$aF[1];while(1){_$6I=_$So[_$mA++];if(-6*_$6I>-384){if(_$6I*89>2759&&-106*_$6I>-5088){if(_$6I*74>2886&&-98*_$6I>-4312){if(37*_$6I===1591){_$WG._$L4="_$FB";}else if(-55<_$6I-95&&_$6I-104<-62){return 0;}else if(5250===_$6I*125){_$bv+="ptlXV6_V9EiB3gNhGw2xYNP4maKpjy9CmdvOW0mweMFBS5A6vJ3IKoO6rNjO6EgfdtswYnmfuHIYYoRbRUsQ1lDJleDbzTroq5WBAYnXfMpVDV_sio5HBq345K0$v7$WwgLaXOgJLejUDdBea2Y6aDIvN4hXH0RT23fq8Q19qHkLw2BNHzWTtJ5nOkA";}else{var _$KB=_$uU();}}else if(-32*_$6I<-1120&&28<68-_$6I){if(34*_$6I===1326){_$WG._$6E="_$q3";}else if(-15<_$6I-51&&_$6I-86<-48){_$WG._$QW=144;}else if(2584===_$6I*68){var _$bv=_$r0(10);}else{_$i0+=_$Cj;}}else if(10>41-_$6I&&36>_$6I){if(47*_$6I===1645){var _$Cj=_$uU()*_$nY[2]+_$uU();}else if(-76<_$6I-108&&_$6I-2<32){return _$aB;}else if(2890===_$6I*85){_$xF=_$WG===undefined||_$WG==="";}else{var _$gw=_$uU();}}else{if(13*_$6I===611){var _$c2=_$YO[_$_U[4]];}else if(-32<_$6I-76&&_$6I-48<-2){_$WG._$T3=_$jW;}else if(276===_$6I*6){return;}else{_$bv=_$MC[_$_U[30]](_$WG);}}}else if(-49*_$6I<-735&&-4<28-_$6I){if(_$6I*66>1518&&-15*_$6I>-420){if(32*_$6I===864){_$bv+="8FLRqBAVSs93Hf3EKoVIlXw5evSbqh_6Vox9B_QMXfSgvvv$O7hDUi3JHOmXkMh65K204f8WHv4Fgt9CcKiOy1Ak4aRFUWnD47FGSpLNodzBvhPEM0YJruSux47ebZE2lWkvY5tdTn$JqA0sd1KgK$2va8EdeAhx96T3BRw8gKJQNJzdJiCFpnDFTz";}else if(6<_$6I-18&&_$6I-91<-65){_$mA+=2;}else if(1664===_$6I*64){_$WG._$vJ="kx6rZMJOYzq";}else{_$bv+="VHQVJ$uVu2cUUJYFbjDBlkTBECAWX85CnJF9Z6MFE6$I7uX2tO7wH3FbJascWUfWlYudn5XKZInUwDn7LxcWsjFR1BphkNDzPa4mg8CaRBxOnfWYZfZ3igAOXn2PJ1x_LZV3ohSw_E3rv2wxxat3c4sb5UZxzO82qcYRss0Cx8I4k6pEQiU1AyubrZ";}}else if(-63*_$6I<-1197&&81<105-_$6I){if(101*_$6I===2323){_$km(0);}else if(-73<_$6I-93&&_$6I-65<-43){_$WG[13]=_$r0(123);}else if(264===_$6I*12){_$mA+=1;}else{_$WG._$Bu="_$O2";}}else if(100>115-_$6I&&20>_$6I){if(123*_$6I===2337){_$WG._$rN="_$1Q";}else if(-99<_$6I-115&&_$6I-2<16){_$bv+="KcOlMsBvlqovce0x$EJHh1q9QC$3vPOTdadsrag6_549nvBYKxQ8YPL$8_r4b6nkMVYqvVX1MgSfbT0C3NRWQs1uzeN$aXVTWmMcSCOdjEzck6$QTk9JYBw$UjPoANqgNhyVy5oOI584dVBXJLIbPHeLhXewvNlzZwWgk38ZXy$0D6sQs85ixo3a";}else if(1440===_$6I*80){_$bv+="msINSHU5xjCbSBmyfmRYsNEAqq6rstm$l1EUs019xJslI4AWlvhzlopATWXldeDKn5GoFeKW9fQWdEVAmhZI0BGz9Udzy3a5ikQlV1YW80bfzGCor5I76F58zw5Je7WQ5EjlON7gz$jpQQxhIFHLBaHjvb6Ns_z3AUCLfHRltUxOJibKsc_QlZc3R";}else{_$YO._$68=_$r0(10)-_$bv;}}else{if(98*_$6I===3038){_$WG._$_V="_$7c";}else if(8<_$6I-20&&_$6I-10<20){_$WG._$fs="_$N0";}else if(1170===_$6I*39){var _$bv=_$MC[_$_U[3]][_$_U[29]]();}else{return 7;}}}else if(16>_$6I){if(_$6I*82>574&&-116*_$6I>-1392){if(62*_$6I===682){_$mA+=11;}else if(-57<_$6I-65&&_$6I-15<-5){_$xF=_$YO[_$_U[4]];}else if(1140===_$6I*114){var _$lx=_$uU();}else{var _$i0=0;}}else if(-23*_$6I<-69&&38<46-_$6I){if(6*_$6I===42){return Math.abs(arguments[1]) % 16;}else if(-99<_$6I-103&&_$6I-112<-106){_$ZG.push(_$_U[21]);}else if(600===_$6I*100){_$aB=[];}else{var _$oP=_$c2.length;}}else if(4>_$6I){if(109*_$6I===327){var _$bv;}else if(-5<_$6I-5&&_$6I-100<-98){var _$zM=_$uU();}else if(6===_$6I*3){_$r0(73,_$nj);}else{_$WG._$S5="_$nT";}}else{if(96*_$6I===1440){_$bv+="RFL4RXHm8Rv_9APH9dvgB3gpRVHWkVJf2nN0duBrCqO2320hshNAGjc028uCEn7z7GOn4PlTZjQWIiU21O3bB6yRDhqMCIBc0Rg_szGDkJ9gfX9j89B8b8nTYeCUtf3OYw0NT368OveqBuQrokWRLsDaYfZ2DeF$90yz0G8cPzrUCnbuiffs9bqSaKyp";}else if(-112<_$6I-124&&_$6I-64<-50){var _$YT=_$uU();}else if(1246===_$6I*89){_$gw=_$uU();}else{if( !_$xF)_$mA+=2;}}}else{if(_$6I*17>935&&-81*_$6I>-4860){if(4*_$6I===236){_$xF=_$MC[_$_U[30]];}else if(-45<_$6I-101&&_$6I-18<40){_$WG._$O6="_$WF";}else if(4698===_$6I*81){_$YO._$9g=_$r0(16);}else{_$bv+="Kqwi6fjeVGTETNsSU3OLob0kyA3EdsGNUOw47TQvT5jaxlh8QotrwzP0_TppPYRyjt_wcL9VWLl8HExYzs12G2TOmU2GGVqraUE58ZKIBs8DDSghbLP97XDPaILVjBx12MmB17WMzGonmNAkUuRaL3RC2CiIhQNFKSPp3Gzgvt2RXfirz65sMtRlh";}}else if(-47*_$6I<-2397&&57<113-_$6I){if(8*_$6I===440){_$WG._$jO="_$Wj";}else if(45<_$6I-7&&_$6I-59<-5){_$Rh=_$c2[_$_U[9]](_$i0,_$Cj)[_$_U[40]](_$r1[_$_U[47]](1));}else if(6480===_$6I*120){return 1;}else{_$xF=_$gw>0;}}else if(54>101-_$6I&&52>_$6I){if(15*_$6I===765){_$WG._$B8="TXybWOOnNKA";}else if(-19<_$6I-67&&_$6I-67<-17){}else if(2800===_$6I*56){for(_$_q=0;_$_q<_$gw;_$_q++ ){_$km(16,_$_q,_$ZG);}}else{_$bv=_$h7[_$_U[13]](_$MC,_$WG);}}else{if(108*_$6I===6804){_$mA+=10;}else if(-29<_$6I-89&&_$6I-119<-57){return 9;}else if(7068===_$6I*114){_$YO._$Ls=_$r0(10)-_$bv;}else{_$r0(30);}}}}else{if(_$6I*51>4845&&-72*_$6I>-8064){if(_$6I*45>4635&&-127*_$6I>-13716){if(57*_$6I===6099){var _$h7=_$r0(66);}else if(13<_$6I-91&&_$6I-103<3){for(_$_q=0;_$_q<16;_$_q++)_$aB[_$_q]=1;}else if(11236===_$6I*106){_$WG._$2n="_$vO";}else{if(_$r0(142)){_$WG[_$r0(141,_$r0(168))]=_$r0(172);}}}else if(-91*_$6I<-9009&&-28<76-_$6I){if(21*_$6I===2163){var _$qK=_$YO._$9g;}else if(-7<_$6I-107&&_$6I-17<85){_$WG._$2x=33;}else if(4386===_$6I*43){return _$r0(12,_$bv);}else{return 2;}}else if(11>106-_$6I&&100>_$6I){if(46*_$6I===4554){_$WG._$qS="I45TlFTTf1A";}else if(46<_$6I-50&&_$6I-88<10){_$WG._$U2="_$fX";}else if(1862===_$6I*19){var _$aB=_$uU();}else{_$WG._$F$="_$aQ";}}else{if(80*_$6I===8880){_$xF=_$bv!==_$_U[12];}else if(44<_$6I-64&&_$6I-78<32){_$WG._$pt="_$4P";}else if(770===_$6I*7){if(_$r0(138)){_$WG[6]=_$r0(150);}}else{return 0;}}}else if(-99*_$6I<-7821&&-56<40-_$6I){if(_$6I*126>10962&&-125*_$6I>-11500){if(41*_$6I===3731){var _$OS=_$YO[_$_U[45]]=[];}else if(77<_$6I-11&&_$6I-80<10){_$WG._$Dh=87;}else if(540===_$6I*6){for(_$_q=0;_$_q<_$gw;_$_q++ ){_$ZG.push(_$_U[6]);}}else{_$WG._$sz="_$32";}}else if(-69*_$6I<-5727&&-68<20-_$6I){if(110*_$6I===9570){_$WG._$KB="_$gp";}else if(51<_$6I-33&&_$6I-41<45){_$r0(85,_$YO);}else if(10492===_$6I*122){_$WG._$z8="DnMQlWAIrJxOmEuY7s2k_G";}else{var _$bv='';}}else if(44>123-_$6I&&84>_$6I){if(59*_$6I===4897){for(_$_q=0;_$_q<_$aF.length;_$_q++){_$tp=_$aF[_$_q];for(_$h7=0;_$h7<_$tp.length;_$h7++){_$tp[_$h7]^=_$aB[Math.abs(_$h7)%16];}}return;}else if(-3<_$6I-83&&_$6I-19<63){return 8;}else if(6560===_$6I*80){_$WG._$$7="_$aK";}else{var _$ZG=[];}}else{if(13*_$6I===1235){return 10;}else if(6<_$6I-86&&_$6I-123<-29){_$h7=_$MC[_$_U[3]];}else if(9870===_$6I*105){_$bv=_$bv[_$_U[28]](RegExp(_$_U[17],_$_U[46]),"");}else{return _$WG[_$r0(141,_$r0(172))];}}}else if(-6>57-_$6I&&80>_$6I){if(_$6I*12>852&&-103*_$6I>-7828){if(116*_$6I===8700){_$WG._$Ko="5NX_gAgHwZwoH1rQ8Eod5g";}else if(68<_$6I-4&&_$6I-79<-5){var _$tp=_$r0(10);}else if(962===_$6I*13){return _$bv;}else{return 15;}}else if(-102*_$6I<-6834&&4<76-_$6I){if(56*_$6I===3976){var _$bv,_$h7,_$oP=_$WG.length,_$aB=new _$gZ(_$oP/_$nY[11]),_$YT='_$';}else if(-40<_$6I-108&&_$6I-38<32){_$WG._$WR=2;}else if(3080===_$6I*44){_$mA+=-11;}else{_$YO[_$_U[4]]=_$ec;}}else if(-17>46-_$6I&&68>_$6I){if(99*_$6I===6633){return new _$qA()[_$_U[15]]();}else if(28<_$6I-36&&_$6I-34<32){_$WG[0]=_$r0(140);}else if(5742===_$6I*87){_$r0(133,_$aB);}else{var _$nj=_$ZG.join('');}}else{if(32*_$6I===2528){if( !_$xF)_$mA+=1;}else if(-29<_$6I-105&&_$6I-10<68){_$WG._$ka="_$0G";}else if(3354===_$6I*43){return 14;}else{_$bv+="5cK6qA3YFS_UMCnYjWecuGr1YOgZWGFZuU_xc2i0lxzMqKOSRhwJZUXakaW1HkKxydMZiq2_EtUM_onxipkbZaz8y2Yt7R61pKHSo9aFEir0kmNJd2bvCjnjKBoPgwYTaBtp_qh7ZGgjmAxFzY6ISo$7_1Rgc57caQylSd7_eBjVpMFwENp5fgf7Ya";}}}else{if(109*_$6I===12535){_$bv+="oPIXRFKsakIR0Zum8b9Mpe2ezLFxASXuPHwtvPbq2J43q3hhkX7RSoKB0XBj_EvASKj$qoJJtayMlETS3eWngDI_F9rcxTRfJba7qXg0dnCm7uWBIZBmOLcWrVx36BSiuz$d0Z_klNxCzo0H45MsDZC0OLOgPHCDnzm$ywUyKG1gqvDR9R$EpNMRR";}else if(64<_$6I-48&&_$6I-94<20){_$WG._$NA="_$Nh";}else if(3876===_$6I*34){for(_$bv=0,_$h7=0;_$h7<_$oP;_$h7+=_$nY[11]){_$aB[_$bv++ ]=_$YT+_$WG[_$_U[9]](_$h7,_$nY[11]);}}else{_$bv+="Ds$GBjrqI9ehXPVaxhaLnbqwv3eaKOwtRnbO0iXH6ByUIOeelAJKIhr_l7EkdDjjllAbHNYkLDIQizjf8Xq962zXY3QYP6BDVUbweFKWZlx6$5puteM3LuxJUe6Zi4SST_pxuNXYRPzFIn_vcdCF03Re6mEoLrOFkwiO5rWhWxlBAJ6a8eB74xuZepheHO9s2TO3uF9G_jVst6HlMenigloN";}}}}function _$km(_$KB,_$wJ,_$ZU){function _$Xa(){var _$YT=[0];Array.prototype.push.apply(_$YT,arguments);return _$NJ.apply(this,_$YT);}var _$yd,_$MZ,_$iq,_$2_,_$Et,_$UM,_$_o,_$nx,_$ip,_$kb,_$bv,_$Cj,_$nj,_$W1,_$Hk,_$Kx;var _$gw,_$aB,_$oP=_$KB,_$tp=_$aF[2];while(1){_$aB=_$tp[_$oP++];if(75<91-_$aB){if(79<83-_$aB){if(_$aB-16<-15){var _$_o=_$uU();}else if(112===_$aB*112){if( !_$gw)_$oP+=4;}else if(2===_$aB){var _$kb=_$km(11);}else{var _$MZ=_$uU();}}else if(5>8-_$aB&&8>_$aB){if(-124<_$aB-127&&_$aB-57<-52){_$oP+=16;}else if(515===_$aB*103){var _$ip=_$uU();}else if(6===_$aB){var _$yd=_$km(11);}else{var _$Cj=_$uU();}}else if(7<_$aB&&_$aB*92<1104){if(-91<_$aB-98&&_$aB-5<4){_$OS[_$wJ]=_$Cj;}else if(531===_$aB*59){var _$bv=_$uU();}else if(10===_$aB){_$W1[_$_U[22]]();}else{_$W1[_$_U[43]]=_$Xa;}}else{if(10<_$aB-1&&_$aB-82<-69){var _$iq=_$uU();}else if(1664===_$aB*128){_$NJ(7,_$ZU);}else if(14===_$aB){var _$Hk=[];}else{for(_$nj=0;_$nj<_$Cj;_$nj++ ){_$bv[_$nj]=_$uU();}}}}else if(-2>13-_$aB&&32>_$aB){if(-80*_$aB<-1200&&5<25-_$aB){if(-82<_$aB-97&&_$aB-5<12){return;}else if(612===_$aB*36){_$gw=_$bv;}else if(18===_$aB){var _$bv=_$Cj>1?_$uG[_$_U[37]][_$Cj-_$nY[11]].src:_$ec;}else{var _$UM=_$km(11);}}else if(-7>12-_$aB&&24>_$aB){if(-80<_$aB-99&&_$aB-66<-45){var _$Kx=_$uU();}else if(2478===_$aB*118){var _$Cj=_$uG[_$_U[37]].length;}else if(22===_$aB){var _$nx=_$uU();}else{var _$2_=_$km(11);}}else if(23<_$aB&&_$aB*113<3164){if(-90<_$aB-113&&_$aB-111<-86){return _$bv;}else if(2900===_$aB*116){var _$W1=_$uU();}else if(26===_$aB){_$W1=_$MC[_$_U[44]]?new _$MC[_$_U[44]](_$_U[16]):new _$MC[_$_U[10]]();}else{_$oP+=-16;}}else{if(-32<_$aB-59&&_$aB-103<-74){var _$Et=_$uU();}else if(1566===_$aB*54){}else if(30===_$aB){_$W1[_$_U[20]]('GET',_$bv,false);}else{var _$bv=new _$gZ(_$Cj);}}}else{if(-27<_$aB-58&&_$aB-95<-62){var _$Cj=_$km(11);}else{for(_$nj=0;_$nj<_$bv;_$nj++ ){_$Hk[_$nj]=_$km(11);}}}}function _$NJ(_$nj,_$Za){var _$bv,_$Cj,_$y2,_$Yt;var _$oP,_$YT,_$KB=_$nj,_$aB=_$aF[3];while(1){_$YT=_$aB[_$KB++];if(-121*_$YT<-1815&&-27<5-_$YT){if(-90*_$YT<-1710&&5<29-_$YT){if(-8<_$YT-27&&_$YT-123<-102){if( !_$oP)_$KB+=1;}else if(1617===_$YT*77){_$oP=_$Hk.length;}else if(22===_$YT){_$Za.push(_$qK[_$iq]);}else{_$Za.push(_$_U[52]);}}else if(83>98-_$YT&&20>_$YT){if(-38<_$YT-53&&_$YT-98<-81){_$Za.push(_$_U[31]);}else if(1292===_$YT*76){_$oP=_$wJ==0;}else if(18===_$YT){if( !_$oP)_$KB+=10;}else{_$Za.push(_$_U[7]);}}else if(23<_$YT&&_$YT*27<756){if(-100<_$YT-123&&_$YT-5<20){var _$bv=[];}else if(700===_$YT*28){_$Za.push(_$_U[6]);}else if(26===_$YT){_$d2(48);}else{_$Za.push(_$_U[48]);}}else{if(-88<_$YT-115&&_$YT-81<-52){_$Za.push(_$qK[_$W1]);}else if(2030===_$YT*70){_$oP=_$UM.length;}else if(30===_$YT){_$Za.push(_$_U[36]);}else{_$Yt=_$Hk.length;}}}else if(16>_$YT){if(-29*_$YT<-87&&6<14-_$YT){if(-53<_$YT-56&&_$YT-40<-35){_$oP=_$2_.length;}else if(390===_$YT*78){_$KB+=-25;}else if(6===_$YT){_$Za.push(_$_U[32]);}else{for(_$Cj=1;_$Cj<_$2_.length;_$Cj++ ){_$Za.push(_$_U[7]);_$Za.push(_$qK[_$2_[_$Cj]]);}}}else if(4>_$YT){if(_$YT-68<-67){_$Za.push(_$_U[8]);}else if(64===_$YT*64){for(_$Cj=0;_$Cj<_$yd.length;_$Cj+=_$nY[11]){if(_$nY[0]<Math[_$_U[2]]()){_$bv.push([_$yd[_$Cj],_$yd[_$Cj+1]]);}else{_$bv[_$_U[42]]([_$yd[_$Cj],_$yd[_$Cj+1]]);}}}else if(2===_$YT){_$Za.push(_$_U[35]);}else{_$KB+=25;}}else if(7<_$YT&&_$YT*28<336){if(-103<_$YT-110&&_$YT-16<-7){_$oP=_$W1[_$_U[19]]==_$nY[6];}else if(486===_$YT*54){_$r0(30);}else if(10===_$YT){_$Za.push(_$qK[_$zM]);}else{for(_$Cj=0;_$Cj<_$UM.length;_$Cj++ ){_$Za.push(_$_U[7]);_$Za.push(_$qK[_$UM[_$Cj]]);}}}else{if(-87<_$YT-98&&_$YT-42<-29){_$r0(73,_$W1[_$_U[33]]);}else if(1612===_$YT*124){_$Za.push(_$qK[_$ip]);}else if(14===_$YT){if( !_$oP)_$KB+=8;}else{_$Za.push(_$qK[_$lx]);}}}else if(31<_$YT&&_$YT*10<480){if(-13*_$YT<-455&&75<115-_$YT){if(-68<_$YT-103&&_$YT-90<-53){_$KB+=8;}else if(1147===_$YT*31){_$Za.push(_$_U[27]);}else if(38===_$YT){_$oP=_$YO[_$_U[4]];}else{_$Za.push(_$wJ);}}else if(-9>22-_$YT&&36>_$YT){if(-29<_$YT-60&&_$YT-51<-18){var _$Yt=0;}else if(891===_$YT*27){_$Za.push(_$qK[_$2_[0]]);}else if(34===_$YT){_$Za.push(_$_U[41]);}else{for(_$Cj=0;_$Cj<_$bv.length;_$Cj++ ){_$d2(0,_$bv[_$Cj][0],_$bv[_$Cj][1],_$Za);}}}else if(39<_$YT&&_$YT*103<4532){if(2<_$YT-37&&_$YT-107<-66){return;}else if(4223===_$YT*103){_$Za.push(_$_U[51]);}else if(42===_$YT){_$Za.push(_$_U[1]);}else{_$Za.push(_$qK[_$nx]);}}else{if(-75<_$YT-118&&_$YT-61<-16){_$Za.push("=0,");}else if(945===_$YT*21){var _$Cj,_$y2=_$nY[6];}else if(46===_$YT){_$d2(13,0,_$Hk.length);}else{_$Za.push(_$_U[26]);}}}else{if(-28<_$YT-75&&_$YT-94<-45){_$Za.push(_$qK[_$Kx]);}else if(6223===_$YT*127){_$Za.push(_$qK[_$_o]);}else if(50===_$YT){if( !_$oP)_$KB+=4;}else{_$Za.push("];");}}}function _$d2(_$h7,_$7R,_$61,_$pK){var _$aB,_$tp,_$_q,_$bv,_$Cj,_$nj,_$KB,_$oP,_$gw,_$YT;var _$gj,_$xF,_$ZG=_$h7,_$zY=_$aF[4];while(1){_$xF=_$zY[_$ZG++];if(32<48-_$xF){if(-4*_$xF<-28&&114<126-_$xF){if(-65<_$xF-72&&_$xF-23<-14){_$KB[0]=_$KB[_$bv];}else if(1017===_$xF*113){_$gj=_$bv.length!=_$_q;}else if(10===_$xF){_$Za.push(_$_U[6]);}else{return;}}else if(55>58-_$xF&&8>_$xF){if(-15<_$xF-18&&_$xF-99<-94){var _$_q=_$bv.length;}else if(480===_$xF*96){_$gj=_$aB==1;}else if(6===_$xF){_$d2(13,_$7R,_$61);}else{for(_$_q=0;_$_q<_$bv;_$_q+=_$nY[11]){_$Za.push(_$Rh[_$kb[_$_q]]);_$Za.push(_$qK[_$kb[_$_q+1]]);}}}else if(_$xF*108<432){if(_$xF-10<-9){_$ZG+=-4;}else if(110===_$xF*110){var _$bv=_$kb.length;}else if(2===_$xF){_$bv=_$gw%_$aB;}else{_$gj=_$aB<=_$y2;}}else{if(-38<_$xF-49&&_$xF-57<-44){_$Cj=0;}else if(1352===_$xF*104){_$_q=_$_U[23];}else if(14===_$xF){_$nj="===";}else{for(_$Cj=0;_$Cj<_$_q;_$Cj+=_$nY[11]){_$Za.push(_$Rh[_$bv[_$Cj]]);_$Za.push(_$qK[_$bv[_$Cj+1]]);}}}}else if(57>72-_$xF&&32>_$xF){if(-105*_$xF<-2415&&-20<8-_$xF){if(16<_$xF-7&&_$xF-54<-29){for(_$bv=0;_$bv<_$aB-1;_$bv++ ){if(_$bv==_$YT){_$tp=_$61;if(_$7R>1&&_$gw%_$nY[11]==0){_$tp=_$7R-1;}_$Za.push(_$_q);_$Za.push(_$qK[_$ip]);_$Za.push(_$nj);_$Za.push(_$tp);_$Za.push(_$_U[8]);_$d2(2,_$gw%_$Yt);_$_q=_$_U[0];}_$Za.push(_$_q);_$Za.push(_$qK[_$ip]);_$Za.push(_$nj);_$Za.push(_$KB[_$bv]);_$Za.push(_$_U[8]);_$d2(2,_$KB[_$bv]);_$_q=_$_U[0];}}else if(800===_$xF*32){_$gj=_$aB==0;}else if(26===_$xF){var _$bv=_$Hk[_$7R];}else{for(;_$7R+_$Cj<_$61;_$7R+=_$Cj){_$Za.push(_$_q);_$Za.push(_$qK[_$ip]);_$Za.push(_$_U[50]);_$Za.push(_$7R+_$Cj);_$Za.push(_$_U[8]);_$d2(13,_$7R,_$7R+_$Cj);_$_q=_$_U[0];}}}else if(-3>16-_$xF&&24>_$xF){if(-23<_$xF-42&&_$xF-51<-30){var _$bv,_$_q,_$Cj,_$aB=_$61-_$7R;}else if(1638===_$xF*78){_$gj=_$kb.length!=_$bv;}else if(22===_$xF){_$d2(2,_$KB[_$bv]);}else{_$YT=_$gw%_$y2;}}else if(15<_$xF&&_$xF*80<1600){if(-89<_$xF-104&&_$xF-100<-83){_$ZG+=2;}else if(68===_$xF*4){_$ZG+=8;}else if(18===_$xF){_$ZG+=25;}else{_$pK.push([_$_U[41],_$qK[_$7R],_$_U[54],_$qK[_$Et],"=[",_$61,_$_U[14],_$qK[_$Et],_$_U[39],_$qK[_$MZ],_$_U[55],_$qK[_$Et],");}"].join(''));}}else{if(-16<_$xF-43&&_$xF-122<-93){for(_$bv=1;_$bv<_$nY[1];_$bv++ ){if(_$aB<=_$FS[_$bv]){_$Cj=_$FS[_$bv-1];break;}}}else if(2523===_$xF*87){_$KB[_$bv]=_$oP;}else if(30===_$xF){if( !_$gj)_$ZG+=15;}else{_$bv-=_$bv%_$nY[11];}}}else{if(-75*_$xF<-2925&&-40<4-_$xF){if(32<_$xF-7&&_$xF-48<-7){_$Za.push(_$_U[11]);}else if(4346===_$xF*106){if( !_$gj)_$ZG+=2;}else if(42===_$xF){if( !_$gj)_$ZG+=1;}else{_$ZG+=29;}}else if(63>98-_$xF&&40>_$xF){if(21<_$xF-14&&_$xF-69<-32){_$oP=_$KB[0];}else if(4477===_$xF*121){_$_q-=_$_q%_$nY[11];}else if(38===_$xF){_$Za.push(_$Rh[_$kb[_$bv]]);}else{_$gw=Math[_$_U[53]]((Math[_$_U[2]]()*_$nY[9])+1);}}else if(31<_$xF&&_$xF*50<1800){if(15<_$xF-16&&_$xF-15<18){_$Za.push(_$Rh[_$bv[_$_q]]);}else if(2145===_$xF*65){for(_$bv=0;_$bv<_$aB;_$bv++ ){_$KB[_$bv]=_$7R+_$bv;}}else if(34===_$xF){_$KB=[];}else{}}else{_$d2(2,_$7R);}}}}}}}})()

_$g_('hEAd');
_$ma();

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


