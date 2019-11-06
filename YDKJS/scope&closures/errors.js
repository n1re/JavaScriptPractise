
function triggerError() {
    return c;
}

try {
    triggerError();
} catch(err) {
    console.log(err); //ReferenceError
}

try {
    const x = null;
    x.property;
} catch(err) {
    console.log(err) //TypeError
}

/**
 * Reference error means that search of variable in scopes failed/
 * TypeError means that variable has been found but
 * u do something wrong with a type of variable
 */