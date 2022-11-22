alert("Bizning fermamizga xush kelibsiz");
alert("Saytimizdan foydalanishingiz uchun shaxsiy malumotlaringizni kiriting");
var ismingiz = prompt("Ismingizni kiriting? ");
console.log("Ismi:" + ismingiz);
var yoshingiz = prompt("Yoshingizni kiriting? ");
console.log("Yosh:" + yoshingiz);
prompt("Qayerga bormoqchisiz");
let som = +prompt("Mablag'izni kiriting");
let pulingiz = 1260 * 11170;
if (som >= pulingiz) {
  alert("Sizga yoqimli xordiq tilaymiz");
} else if (som < pulingiz) {
  alert(
    Math.floor(Math.random() * 27) +3+
      "  kundan so'ng qayta saytimizdan foydalanishingiz mumkin "
  );
} else {
  alert("Iltimos mablag'ingizni raqam shaklida kiriting");
}
