class Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.imagen = imagen;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getImagen() {
        return this.imagen;
    }

    setComentarios(comentarios) {
        this.comentarios = comentarios;
    }

    getSonido() {
        return this.sonido;
    }
}

export default Animal;