let medicamentos;

function guardarMedicamento(e){
    console.log("Llego a la funcion");
    const nombreInput = document.getElementById("nombre").value;
    const cantidadInput = document.getElementById("cantidad").value;
    const nuevoMedicamento = {nombre: nombreInput, cantidad: cantidadInput};
    medicamentos = JSON.parse(localStorage.getItem("medicamentos"));
    if(!medicamentos){
        medicamentos = [];
    }
    medicamentos.push(nuevoMedicamento);
    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));
    verMedicamentos();
}

function verMedicamentos(){
    medicamentos = JSON.parse(localStorage.getItem("medicamentos"));
    const divListaMedicamentos = document.getElementById("listaMedicamentos");
    divListaMedicamentos.innerHTML = "";
    for (let i = 0; i < medicamentos.length; i++) {
        const itemMedicamento = document.createElement("li");
        const itemBorrarMedicamento = document.createElement("button");
        itemBorrarMedicamento.innerText = "🗑"
        itemMedicamento.innerHTML = `<span>Nombre:</span> ${medicamentos[i].nombre} - <span>Cantidad: </span>${medicamentos[i].cantidad}`;
        itemBorrarMedicamento.onclick = function (){BorrarMedicamento(medicamentos, medicamentos[i].nombre)};
        itemBorrarMedicamento.addEventListener('mouseover',()=>{
            itemBorrarMedicamento.style = "background: salmon";
        });
        itemBorrarMedicamento.addEventListener('mouseleave', ()=>{
            itemBorrarMedicamento.style = "background: write";
        });
        itemMedicamento.appendChild(itemBorrarMedicamento);
        divListaMedicamentos.appendChild(itemMedicamento)
        
    }
}

function BorrarMedicamento(medicamentos, nombreMedicamento){
    const nuevaListaMedicamentos = medicamentos.filter((p=> p.nombre != nombreMedicamento));
    localStorage.setItem("medicamentos", JSON.stringify(nuevaListaMedicamentos));
    verMedicamentos();
}
    verMedicamentos();

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        guardarMedicamento();
    });
