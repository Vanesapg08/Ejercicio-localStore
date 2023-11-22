let doctores = [];

function guardarDoctor(e){
    console.log("Llego a la funcion");
    const nombreInput = document.getElementById("nombre").value;
    const especialidadInput = document.getElementById("especialidad").value;
    const nuevoDoctor = {nombre: nombreInput, especialidad: especialidadInput};
    doctores = JSON.parse(localStorage.getItem("doctores"));
    if(!doctores){
        doctores = [];
    }
    doctores.push(nuevoDoctor);
    localStorage.setItem("doctores", JSON.stringify(doctores));
    verDoctores();
}

function verDoctores(){
    doctores = JSON.parse(localStorage.getItem("doctores"));
    if(!doctores){
        doctores = [];
    }
    const divListaDoctores = document.getElementById("listaDoctores");
    divListaDoctores.innerHTML = "";
    for (let i = 0; i <doctores.length; i++) {
        const itemDoctor = document.createElement("li");
        const itemBorrarDoctor = document.createElement("button");
        itemBorrarDoctor.innerText = "🗑"
        itemDoctor.innerHTML = `<span>Nombre:</span> ${doctores[i].nombre} - <span>Especialidad: </span>${doctores[i].especialidad}`;
        itemBorrarDoctor.onclick = function (){BorrarDoctor(doctores, doctores[i].nombre)};
        itemBorrarDoctor.addEventListener('mouseover',()=>{
            itemBorrarDoctor.style = "background: blue";
        });
        itemBorrarDoctor.addEventListener('mouseleave', ()=>{
            itemBorrarDoctor.style = "background: write";
        });
        itemDoctor.appendChild(itemBorrarDoctor);
        divListaDoctores.appendChild(itemDoctor)
        
    }
}

function BorrarDoctor(doctores, nombreDoctor){
    const nuevaListaDoctores = doctores.filter((p=> p.nombre != nombreDoctor));
    localStorage.setItem("doctores", JSON.stringify(nuevaListaDoctores));
    verDoctores();
}
    verDoctores();

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        guardarDoctor();
    });
