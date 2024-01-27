let letra = [ ' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let cript = ['6', 'l','k','j','h','g','n','d','s','8','p','o','3','4','y','t','r','0','w','q','m','f','b','v','c','x','z']

let digito;
let palavraCodificada = '';
let palavraDecodificada = '';
let texto1 = document.getElementById('texto1');
let texto2 = document.getElementById('texto2');
let palavra = '';

function criptografar() {
  palavra = texto1.value;
  for (let i = 0; i <= palavra.length; i++) {
    for (let y = 0; y <= cript.length; y++) {
      digito = palavra.substring(i, i + 1)
      if (digito == letra[y]) {
        palavraCodificada += cript[y];    
      }
    }
  }
  texto2.value = palavraCodificada;
  palavraCodificada = '';
  texto1.value = '';
}

function decriptografar() {
  let palavra2 = texto2.value;
  for (let i = 0; i <= palavra2.length; i++) {
    for (let y = 0; y <= cript.length; y++) {
      digito = palavra2.substring(i, i + 1)
      if (digito == cript[y]) {
        palavraDecodificada += letra[y];    
      }
    }
  }
  texto1.value = palavraDecodificada;
  palavraDecodificada = '';
  texto2.value = '';
}