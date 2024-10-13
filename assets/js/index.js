

import data from "./../../animales.json" with {type: "json"};
import Serpiente from "./animales/Serpiente.js";
import Oso from "./animales/Oso.js";
import Aguila from "./animales/Aguila.js";
import Leon from "./animales/Leon.js";
import Lobo from "./animales/Lobo.js";

// Función autoejecutable IIFE
(async () => {
    console.log(data.animales[0].imagen);
})();


document.getElementById("btnRegistrar").addEventListener("click", () => {
    const nombre = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    let animal;
    const animalData = data.animales.find(a => a.name === nombre);

    if (!animalData) {
        console.error("Animal no válido");
        return;
    }

    // Crea instancia del animal 
    if (nombre === "Leon") {
        animal = new Leon(nombre, edad, animalData.imagen, comentarios, animalData.sonido);
    } else if (nombre === "Lobo") {
        animal = new Lobo(nombre, edad, animalData.imagen, comentarios, animalData.sonido);
    } else if (nombre === "Oso") {
        animal = new Oso(nombre, edad, animalData.imagen, comentarios, animalData.sonido);
    } else if (nombre === "Serpiente") {
        animal = new Serpiente(nombre, edad, animalData.imagen, comentarios, animalData.sonido);
    } else if (nombre === "Aguila") {
        animal = new Aguila(nombre, edad, animalData.imagen, comentarios, animalData.sonido);
    }

    // Mostrar en el contenedor los animales registrados
    const contenedorAnimales = document.getElementById("Animales");

    const animalCard = document.createElement("div");
    animalCard.classList.add("card", "m-2", "bg-light", "text-dark");
    animalCard.style.width = "150px";

    const imgElement = document.createElement("img");
    imgElement.src = `./assets/imgs/${animal.imagen}`;
    imgElement.alt = animal.nombre;
    imgElement.classList.add("card-img-top");
    imgElement.style.height = "100px";
    imgElement.style.objectFit = "fill";

    const btnReproducir = document.createElement("button");
    btnReproducir.classList.add("btn", "btn-secondary", "w-100");
    btnReproducir.style.height = "100%";
    btnReproducir.style.fontSize = "10px"; btnReproducir.textContent = "Reproducir sonido";
    btnReproducir.setAttribute("data-sonido", `./assets/sounds/${animal.sonido}`);
    btnReproducir.addEventListener("click", () => {
        reproducirSonido(btnReproducir.getAttribute("data-sonido"));
    });

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "p-2");

    const animalName = document.createElement("h5");
    animalName.classList.add("card-title");
    animalName.textContent = animal.nombre;

    cardBody.appendChild(animalName);
    cardBody.appendChild(btnReproducir);
    animalCard.appendChild(imgElement);
    animalCard.appendChild(cardBody);
    contenedorAnimales.appendChild(animalCard);
});

// Función para reproducir el sonido 
function reproducirSonido(sonido) {
    const audio = new Audio(sonido);
    audio.play();
}

// imagen previa
document.getElementById("animal").addEventListener("change", async (event) => {
    const nombre = event.target.value;
    const vistaPrevia = document.getElementById("preview");
    const img = document.createElement("img");
    let imagen = "";

    try {
        const animalData = data.animales.find(a => a.name === nombre);
        if (!animalData) {
            console.error("Animal no válido");
            return;
        }

        imagen = animalData.imagen;
        img.src = `./assets/imgs/${imagen}`;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "fill";
        vistaPrevia.replaceChildren(img);
    } catch (error) {
        console.error("Error al obtener la imagen:", error);
    }
});
