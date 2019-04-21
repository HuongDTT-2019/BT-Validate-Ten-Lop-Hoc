function validateClassName(str) {
    regexp=/^[CAB][0-9]{4}[GHIKLM]$/;
    if (regexp.test(str)){
        return true
    }
    return false;
}
console.log(validateClassName('C0318G'));
console.log(validateClassName('M0318G'));