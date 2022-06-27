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
