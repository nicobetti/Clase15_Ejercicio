const boton = document.getElementById("traer_json");

boton.addEventListener("click", e => {
    fetch("persona.json").
        then(response => response.json()).
        then(persona => {
            console.log(persona);

            // Una opcion
            // const contenido = document.getElementById("contenido");
            // contenido.innerHTML = persona;

            // Otra opcion
            document.getElementById("contenido").innerHTML = `Soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`;
        });
    });
        
