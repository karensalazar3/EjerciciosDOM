console.log(document.title);
//1.Cambiar titulo

const titulo = document.getElementById("gen-1");
console.log(titulo);
titulo.innerHTML =  "Generasión 1 pokimon";//Aqui se cambia el contenido del titulo


//2. Cambia el color de fondo de la primera generación de Pokimon.
const colorFondo = document.querySelectorAll(".infocard-list")
colorFondo[0].style.background = 'pink';



// 3. Imprime por consola la URL de la página.
let pagina
pagina = document.URL
console.log(pagina)


// 4. Imprime por consola el dominio de la página.
const dominio = document.domain; 
console.log(dominio)

// 5. Imprime todos los nodos de imagen.

const nodos = document.querySelectorAll("img")
console.log(nodos);


// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let imagenes = document.querySelectorAll("img");
for (let i = 0; i < imagenes.length; i++) {   //Este es un bucle for que se repite tantas veces como imágenes haya en la lista imagenes
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

// *Premium:*

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

