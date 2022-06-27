WebGLRenderingContext = function WebGLRenderingContext() {
    globalMy.error("Illegal constructor", `"TypeError: Illegal constructor
    at snippet:///%E8%84%9A%E6%9C%AC%E4%BB%A3%E7%A0%81%E6%AE%B5%20%2332:2:6"`);
}

globalMy.functionprotect(WebGLRenderingContext)
globalMy.rename(WebGLRenderingContext.prototype, "WebGLRenderingContext")

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'canvas', {}, true, undefined, undefined, function canvas() {
        debugger;
        var foundName = globalMy.foundName(this);
        return globalMy.value[foundName]['canvas'];
    }
    , undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebGLRenderingContext.prototype).canvas.get, 'get');

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawingBufferWidth', 300, true, undefined, undefined, function drawingBufferWidth() {
    debugger;
    return globalMy.value.WebGLRenderingContext_drawingBufferWidth;
}, undefined);
globalMy.functionprotect(Object.getOwnPropertyDescriptors(WebGLRenderingContext.prototype).drawingBufferWidth.get, 'get');
globalMy.value.WebGLRenderingContext_drawingBufferWidth = 300;
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawingBufferHeight', 150, true, undefined, undefined, function drawingBufferHeight() {
    debugger;
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
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.activeTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'attachShader', function attachShader() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.attachShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindAttribLocation', function bindAttribLocation() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindAttribLocation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindRenderbuffer', function bindRenderbuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendColor', function blendColor() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendColor);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendEquation', function blendEquation() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendEquation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendEquationSeparate', function blendEquationSeparate() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendEquationSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendFunc', function blendFunc() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendFunc);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'blendFuncSeparate', function blendFuncSeparate() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.blendFuncSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bufferData', function bufferData() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bufferData);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bufferSubData', function bufferSubData() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bufferSubData);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'checkFramebufferStatus', function checkFramebufferStatus() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.checkFramebufferStatus);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'compileShader', function compileShader() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.compileShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'compressedTexImage2D', function compressedTexImage2D() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.compressedTexImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'compressedTexSubImage2D', function compressedTexSubImage2D() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.compressedTexSubImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'copyTexImage2D', function copyTexImage2D() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.copyTexImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'copyTexSubImage2D', function copyTexSubImage2D() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.copyTexSubImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createBuffer', function createBuffer() {
    debugger;
    var buf = {}
    Object.setPrototypeOf(buf, WebGLBuffer.prototype)
    return buf

}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createBuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createFramebuffer', function createFramebuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createProgram', function createProgram() {
    debugger;
    var webGLProgram = {}
    Object.setPrototypeOf(webGLProgram, WebGLProgram.prototype)
    return webGLProgram
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createRenderbuffer', function createRenderbuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createShader', function createShader() {
    debugger;
    var webGLShader = {}
    Object.setPrototypeOf(webGLShader, WebGLShader.prototype)
    return webGLShader
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'createTexture', function createTexture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.createTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'cullFace', function cullFace() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.cullFace);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteBuffer', function deleteBuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteBuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteFramebuffer', function deleteFramebuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteProgram', function deleteProgram() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteRenderbuffer', function deleteRenderbuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteShader', function deleteShader() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'deleteTexture', function deleteTexture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.deleteTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'depthFunc', function depthFunc() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.depthFunc);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'depthMask', function depthMask() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.depthMask);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'depthRange', function depthRange() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.depthRange);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'detachShader', function detachShader() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.detachShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'disable', function disable() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.disable);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'enable', function enable() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.enable);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'finish', function finish() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.finish);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'flush', function flush() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.flush);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'framebufferRenderbuffer', function framebufferRenderbuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.framebufferRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'framebufferTexture2D', function framebufferTexture2D() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.framebufferTexture2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'frontFace', function frontFace() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.frontFace);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'generateMipmap', function generateMipmap() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.generateMipmap);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getActiveAttrib', function getActiveAttrib() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getActiveAttrib);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getActiveUniform', function getActiveUniform() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getActiveUniform);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getAttachedShaders', function getAttachedShaders() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getAttachedShaders);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getAttribLocation', function getAttribLocation(webGLProgram, pattern) {
    debugger;
//attrVertex
    return 0
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getAttribLocation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getBufferParameter', function getBufferParameter() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getBufferParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getContextAttributes', function getContextAttributes() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getContextAttributes);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getError', function getError() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getError);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getExtension', function getExtension() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getExtension);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getFramebufferAttachmentParameter', function getFramebufferAttachmentParameter() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getFramebufferAttachmentParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getParameter', function getParameter() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getProgramInfoLog', function getProgramInfoLog() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getProgramInfoLog);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getProgramParameter', function getProgramParameter() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getProgramParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getRenderbufferParameter', function getRenderbufferParameter() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getRenderbufferParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getShaderInfoLog', function getShaderInfoLog() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getShaderInfoLog);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getShaderParameter', function getShaderParameter() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getShaderParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getShaderPrecisionFormat', function getShaderPrecisionFormat(number1, number2) {
    debugger;
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
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getShaderSource);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getSupportedExtensions', function getSupportedExtensions() {
    debugger;
    return ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth", "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB", "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc", "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture", "WEBGL_draw_buffers", "WEBGL_lose_context", "WEBKIT_WEBGL_lose_context", "WEBGL_multi_draw"]
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getSupportedExtensions);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getTexParameter', function getTexParameter() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getTexParameter);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getUniform', function getUniform() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getUniform);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getUniformLocation', function getUniformLocation(webGLProgram, pattern) {
    debugger;
//uniformOffset
    var webGLUniformLocation = {}
    Object.setPrototypeOf(webGLUniformLocation, WebGLUniformLocation.prototype);
    return webGLUniformLocation;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getUniformLocation);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getVertexAttrib', function getVertexAttrib() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getVertexAttrib);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'getVertexAttribOffset', function getVertexAttribOffset() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.getVertexAttribOffset);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'hint', function hint() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.hint);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isBuffer', function isBuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isBuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isContextLost', function isContextLost() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isContextLost);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isEnabled', function isEnabled() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isEnabled);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isFramebuffer', function isFramebuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isProgram', function isProgram() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isRenderbuffer', function isRenderbuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isRenderbuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isShader', function isShader() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isShader);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'isTexture', function isTexture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.isTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'lineWidth', function lineWidth() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.lineWidth);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'linkProgram', function linkProgram() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.linkProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'pixelStorei', function pixelStorei() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.pixelStorei);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'polygonOffset', function polygonOffset() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.polygonOffset);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'readPixels', function readPixels() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.readPixels);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'renderbufferStorage', function renderbufferStorage() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.renderbufferStorage);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'sampleCoverage', function sampleCoverage() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.sampleCoverage);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'shaderSource', function shaderSource() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.shaderSource);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilFunc', function stencilFunc() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilFunc);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilFuncSeparate', function stencilFuncSeparate() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilFuncSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilMask', function stencilMask() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilMask);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilMaskSeparate', function stencilMaskSeparate() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilMaskSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilOp', function stencilOp() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilOp);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'stencilOpSeparate', function stencilOpSeparate() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.stencilOpSeparate);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texImage2D', function texImage2D() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texParameterf', function texParameterf() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texParameterf);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texParameteri', function texParameteri() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texParameteri);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'texSubImage2D', function texSubImage2D() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.texSubImage2D);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'useProgram', function useProgram() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.useProgram);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'validateProgram', function validateProgram() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.validateProgram);

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindBuffer', function bindBuffer() {
    debugger;

}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindBuffer);

globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindFramebuffer', function bindFramebuffer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindFramebuffer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'bindTexture', function bindTexture() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.bindTexture);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clear', function clear() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clear);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clearColor', function clearColor() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clearColor);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clearDepth', function clearDepth() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clearDepth);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'clearStencil', function clearStencil() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.clearStencil);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'colorMask', function colorMask() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.colorMask);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'disableVertexAttribArray', function disableVertexAttribArray() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.disableVertexAttribArray);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawArrays', function drawArrays() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.drawArrays);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'drawElements', function drawElements() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.drawElements);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'enableVertexAttribArray', function enableVertexAttribArray() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.enableVertexAttribArray);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'scissor', function scissor() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.scissor);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1f', function uniform1f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1fv', function uniform1fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1i', function uniform1i() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform1iv', function uniform1iv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform1iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2f', function uniform2f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2fv', function uniform2fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2i', function uniform2i() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform2iv', function uniform2iv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform2iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3f', function uniform3f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3fv', function uniform3fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3i', function uniform3i() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform3iv', function uniform3iv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform3iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4f', function uniform4f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4fv', function uniform4fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4i', function uniform4i() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4i);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniform4iv', function uniform4iv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniform4iv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniformMatrix2fv', function uniformMatrix2fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniformMatrix2fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniformMatrix3fv', function uniformMatrix3fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniformMatrix3fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'uniformMatrix4fv', function uniformMatrix4fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.uniformMatrix4fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib1f', function vertexAttrib1f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib1f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib1fv', function vertexAttrib1fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib1fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib2f', function vertexAttrib2f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib2f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib2fv', function vertexAttrib2fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib2fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib3f', function vertexAttrib3f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib3f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib3fv', function vertexAttrib3fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib3fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib4f', function vertexAttrib4f() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib4f);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttrib4fv', function vertexAttrib4fv() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttrib4fv);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'vertexAttribPointer', function vertexAttribPointer() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.vertexAttribPointer);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'viewport', function viewport() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.viewport);
globalMy.mydefineProperty(WebGLRenderingContext.prototype, 'makeXRCompatible', function makeXRCompatible() {
    debugger;
}, true, undefined, true);
globalMy.functionprotect(WebGLRenderingContext.prototype.makeXRCompatible);
