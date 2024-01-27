let letra = [' ', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', '?', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'á', 'é', 'í', 'ó', 'ú', 'ê', 'ô', '!'];

let cript = ['6', 'F', 'n', 'W', '9', 'l', 'k', 'Q', '!', 'j', 'h', 'J', 'é', 'X', 'g', 'í', 'E', 'K', '.', 'B', 'd', 'I', 's', 'ó', 'C', '8', 'Y', 'p', 'H', 'o', 'G', '3', 'V', 'S', 'R', '4', 'T', 'U', 'y', 'D', 't', 'r',
  'Z', '0', 'L', 'w', 'q', 'P', 'á', 'm', 'M', 'f', 'A', 'b', 'ê', '?', 'v', 'N', 'O', 'c', 'ú', 'x', 'z']

let digito;
let palavraCodificada = '';
let palavraDecodificada = '';
let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let palavra = '';

function criptografar() {
  palavra = texto1.value;
  if (texto1.value != '') {
    for (let i = 0; i < palavra.length; i++) {
      for (let y = 0; y <= cript.length; y++) {
        digito = palavra.substring(i, i + 1);
        if (digito == letra[y]) {
          palavraCodificada += cript[y];
        }
      }
    }
    texto2.value = palavraCodificada;
    palavraCodificada = '';
    texto1.value = '';
  }
}

function decriptografar() {
  let palavra2 = texto2.value;
  if (texto2.value != '') {
    for (let i = 0; i <= palavra2.length; i++) {
      for (let y = 0; y <= cript.length; y++) {
        digito = palavra2.substring(i, i + 1);
        if (digito == cript[y]) {
          palavraDecodificada += letra[y];
        }
      }
    }
    texto1.value = palavraDecodificada;
    palavraDecodificada = '';
    texto2.value = '';
  }
}