let pacientes = [];

function guardarPaciente(e){
    console.log("Llego a la funcion");
    const nombreInput = document.getElementById("nombre").value;
    const edadInput = document.getElementById("edad").value;
    const nuevoPaciente = {nombre: nombreInput, edad: edadInput};
    pacientes = JSON.parse(localStorage.getItem("pacientes"));
    if(!pacientes){
        pacientes = [];
    } 
    pacientes.push(nuevoPaciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    verPacientes();
}

function verPacientes(){
    pacientes = JSON.parse(localStorage.getItem("pacientes"));
    if(!pacientes){
        pacientes = [];
    }
    const divListaPacientes = document.getElementById("listaPacientes");
    divListaPacientes.innerHTML = "";
    for (let i = 0; i < pacientes.length; i++) {
        const itemPaciente = document.createElement("li");
        const itemBorrarPaciente = document.createElement("button");
        itemBorrarPaciente.innerText = "🗑"
        itemPaciente.innerHTML = `<span>Nombre:</span> ${pacientes[i].nombre} - <span>Edad: </span> ${pacientes[i].edad}`;
        itemBorrarPaciente.onclick = function (){itemBorrarPaciente(pacientes, pacientes[i].nombre)};
        itemBorrarPaciente.addEventListener('mouseover', ()=>{
            itemBorrarPaciente.style = "background: red";
        });
        itemBorrarPaciente.addEventListener('mouseleave', ()=>{
            itemBorrarPaciente.style = "background: write";
        });
        itemPaciente.appendChild(itemBorrarPaciente);
        divListaPacientes.appendChild(itemPaciente);
    }
}

function borrarPaciente(pacientes, nombrePaciente){
    const nuevaListaPacientes = pacientes.filter((p=> p.nombre != nombrePaciente));
    localStorage.setItem("pacientes", JSON.stringify(nuevaListaPacientes));
    verPacientes();
}

verPacientes();

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    guardarPaciente();
});
