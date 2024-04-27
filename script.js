const mensajes = [
  "¿Estás segura?",
  "¿Segura que estás segura?",
  "¿Estás completamente segura?",
  "Le daré like a tus videos",
  "¿Por favor?",
  "Te quiero 3 millones",
  "Ya pue",
  "¿Ta bien?",
  "¿Estás segura?",
  "¿Segura que estás segura?",
  "¿Estás completamente segura?",
  "Le daré like a tus videos",
  "¿Por favor?",
  "Te quiero 3 millones",
  "Ya pue",
  "¿Por favor?",
  "¿Ya pue favor?",
  "¿Poooooor favor?",
  "¿Ta bien?",
];

const boton_no = document.getElementById("btn-no");
const boton_yes = document.getElementById("btn-yes");
const boton_whatsapp = document.getElementById("btn-whatsapp");

const mensaje = document.getElementById("mensaje");
const resultado = document.getElementById("resultado");

let count = 1;

boton_no.addEventListener("click", function () {
  const randomX = Math.random() * (window.innerWidth - boton_no.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - boton_no.offsetHeight);
  mensaje.innerText = mensajes[count - 1];

  boton_yes.style.height = 8 * count + "%";
  boton_yes.style.width = 10 * count + "%";
  boton_no.style.height = 50 - 7 * count + "px";
  boton_no.style.width = 200 - 10 * count + "px";
  boton_no.style.maxWidth = "100vw";

  boton_no.style.position = "absolute";
  boton_no.style.left = randomX + "px";
  boton_no.style.top = randomY + "px";
  boton_yes.style.position = "absolute";
  boton_yes.style.left = 40 - count * 3.5 + "%";
  boton_yes.style.top = 50 - count * 3 + "%";

  count += 1;
});

boton_yes.addEventListener("click", function () {
  resultado.style.display = "flex";
  resultado.style.flexDirection = "column";
  resultado.style.alignItems = "center";
  resultado.style.position = "absolute";
  resultado.style.zIndex = "50";
});

boton_whatsapp.addEventListener("click", function () {
  var telefono = "1234567890";
  var mensaje = "Hola, te perdoné";
  let url =
    "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url);
});
