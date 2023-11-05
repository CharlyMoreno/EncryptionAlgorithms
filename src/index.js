const CryptoJS = require("crypto-js");

const mensaje = "Este es un mensaje secreto";
const clave = "ClaveSecreta123";

const mensajeAES = CryptoJS.AES.encrypt(mensaje, clave).toString();
const mensajeDES = CryptoJS.DES.encrypt(mensaje,clave).toString();

console.log('[+] AES - Estandar de Encriptacion Avanzada');
console.log(mensajeAES);
console.log('\n[+] DES - Estándar de Encriptación de Datos');
console.log(mensajeDES);
