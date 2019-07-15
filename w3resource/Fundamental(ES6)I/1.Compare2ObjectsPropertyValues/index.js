const compare = (first, second) => {
    for (let key in first) {

        if (first.hasOwnProperty(key) && first[key] === second[key]) {
            continue;
        } 

        return false;
    }

    return true;
}

module.exports = compare;