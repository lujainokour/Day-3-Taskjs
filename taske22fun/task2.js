// اختيار النص وعناصر التحكم
let text = document.getElementById("text");
let fontType = document.getElementById("fontType");
let fontSize = document.getElementById("fontSize");

let italic = document.getElementById("italic");
let bold = document.getElementById("bold");
let underline = document.getElementById("underline");


// تغيير نوع الخط
function changeFont() {
    text.style.fontFamily = fontType.value;
}


// تغيير حجم الخط
function changeSize() {
    text.style.fontSize = fontSize.value;
}


// تفعيل أو إلغاء الخط المائل
function changeItalic() {
    if (italic.checked) {
        text.style.fontStyle = "italic";
    } else {
        text.style.fontStyle = "normal";
    }
}


// تفعيل أو إلغاء الخط العريض
function changeBold() {
    if (bold.checked) {
        text.style.fontWeight = "bold";
    } else {
        text.style.fontWeight = "normal";
    }
}


// تفعيل أو إلغاء الخط تحت النص
function changeUnderline() {
    if (underline.checked) {
        text.style.textDecoration = "underline";
    } else {
        text.style.textDecoration = "none";
    }
}