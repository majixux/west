// Listado de productos MUJER de la pagina //




const productosArray = [
    //abrigos//
    {
        id : "abrigo-00",
        nombre: "Tapado oversize",
        imagen: "./IMG_WOMAN/abrigo.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 25000
    },
    {
        id : "abrigo-01",
        nombre: "Campera cuadrille",
        imagen: "./IMG_WOMAN/abrigo2.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 17000
    },
    {
        id : "abrigo-02",
        nombre: "Campera corderito black",
        imagen: "./IMG_WOMAN/abrigo3.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 15000
    },
    {
        id : "abrigo-03",
        nombre: "Chaleco puffer",
        imagen: "./IMG_WOMAN/abrigo4.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 8000
    },
    //tops//
    {
        id : "top-00",
        nombre: "Top corset",
        imagen: "./IMG_WOMAN/top.jpg",
        categoria: {
            nombre: "Top",
            id: "top"
        },
        precio: 3500
    },
    {
        id : "top-01",
        nombre: "Top pilot",
        imagen: "./IMG_WOMAN/top2.jpg",
        categoria: {
            nombre: "Top",
            id: "top"
        },
        precio: 5000
    },
    {
        id : "top-03",
        nombre: "Top nude",
        imagen: "./IMG_WOMAN/top3.jpg",
        categoria: {
            nombre: "Top",
            id: "top"
        },
        precio: 2500
    },
    {
        id : "top-4",
        nombre: "Top cyan",
        imagen: "./IMG_WOMAN/top4.jpg",
        categoria: {
            nombre: "Top",
            id: "top"
        },
        precio: 3500
    },
    //zapatos//
    {
        id : "calzado-00",
        nombre: "Zapatillas red",
        imagen: "./IMG_WOMAN/OEEEES.jpg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 18000
    },
    {
        id : "calzado-01",
        nombre: "Borcegos black",
        imagen: "./IMG_WOMAN/SHOES.jpg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 20000
    },
    {
        id : "calzado-02",
        nombre: "Zapatillas zebra",
        imagen: "./IMG_WOMAN/SHOESSS.jpg",
        categoria: {
            nombre: "Calzado",
            id: "calzado"
        },
        precio: 10000
    },

]


const contenedorProductos = document.querySelector("#contenedor-productos");

// funcion para mostrar las cards totales desde js //
function cargarProductos() {
    productos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                        <div class="img_contenido">
                        <img id="img" src="${card.imagen}" alt="">
                        </div>
                        <div class="contenido_descripcion">
                            <h3>${card.nombre}</h3>
                            <p>${card.precio}</p>
                            <button id="${card.id}">Comprar</button>
                        </div>
        `;
            contenedorProductos.append(div);
        })
}

cargarProductos();
//no puedo cargar productos desde js, me dice que cargarProductos() no esta definido//