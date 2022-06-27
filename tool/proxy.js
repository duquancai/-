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
                //     debugger;
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