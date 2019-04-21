function validateClassName(str) {
    regexp=/^[CAB][0-9]{4}[GHIKLM]$/;
    if (regexp.test(str)){
        return true
    }
    return false;
}
function checkClassNane() {
    let txt_class_name=document.getElementById("inp_class_name").value;
    console.log(validateClassName(txt_class_name));
}
