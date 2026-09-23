// اختيار الصورة
let photo = document.getElementById("photo");

// تحويل الصورة إلى دائرة
function makeCircle() {
    photo.style.borderRadius = "50%";
}

// تحويل الصورة إلى مربع
function makeSquare() {
    photo.style.borderRadius = "0";
}