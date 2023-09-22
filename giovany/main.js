/*function mostrarDatos() {
   
    var selectedAño = document.getElementById("año").value;
   
    var selectedMes = document.getElementById("mes").value;
    
    var selectedTrimestre = document.getElementById("trimestre").value;
   
    var selectedCompetencia = document.getElementById("competencia").value;

    var selectedRadio = document.querySelector('input[name="fav_language"]:checked').value;
    
    var datosSeleccionados = "Año: " + selectedAño +
    ", Mes: " + selectedMes +
    ", Trimestre: " + selectedTrimestre +
    ", Competencia: " + selectedCompetencia +
    ", Resultado: " + selectedRadio;
    

  
    
    var datosVector = [ `["${selectedMes}", "${selectedAño}", "${selectedTrimestre}", "${selectedCompetencia}", "${selectedRadio}"]`];


document.getElementById("datosSeleccionados").innerText = datosSeleccionados + datosVector;
}
function mostrarDatos(año,mes,trimestre,competencia,radio){
    const datos=( "Mes:"+año+",Año:"+mes+",Trimestre:"+trimestre+",competencia:"+competencia+",radio:"+radio+" "+" "+""+""+"");
    
   
    const objeto={
        meses:mes,
        años:año,
        trimestres:trimestre,
        competencias:competencia,
        radios:radio,
    }
   
    
    document.getElementById('datosSeleccionados').textContent=datos+JSON.stringify(objeto);
    return objeto;
   
}
function mostrarDatos (año,mes,trimestre,competencia,radio,fecha){
const otroarreglo=[año,mes,trimestre,competencia,radio,fecha]
enviar(otroarreglo)    

}
function enviar (otroarreglo){

console.log(otroarreglo)
return
}*/
/*
function mostrarDatos (año,mes,trimestre,competencia,radio,fecha){
    const otroarreglo=[año,mes,trimestre,competencia,radio,fecha]
    enviar(otroarreglo)    
    
    }
    function enviar (otroarreglo){
    
    console.log(otroarreglo)
    return
    }
    let mifecha = otroarreglo[3]
    function mostrarMesDeFecha(fecha) {
        const fechaObj = new Date(fecha);
        const nombreMes = fechaObj.toLocaleString('default', { month: 'long' });
        console.log(nombreMes);
      }
      return mostrarMesDeFecha*/



      
      /*function mostrarDatos(año, mes, trimestre, competencia, radio, fecha) {
        const otroarreglo = [año, mes, trimestre, competencia, radio, fecha];
        otroarreglo[5] = obtenerNombreMes(fecha); // Reemplazar fecha con el nombre del mes.
        enviar(otroarreglo);
      }
      
      function enviar(otroarreglo) {
        console.log(otroarreglo);
      }
      
      function obtenerNombreMes(fecha) {
        const fechaObj = new Date(fecha);
        const nombreMes = fechaObj.toLocaleString('default', { month: 'long' });
        return nombreMes;
      }
      const competenciaInput = document.getElementById("competencia");
      const opcionesDiseno = document.getElementById("opciones-diseno");
      const opcionesAnalisis = document.getElementById("opciones-analisis");
      
      competenciaInput.addEventListener("change", () => {
      const seleccion = competenciaInput.value.toLowerCase();
      
      if (seleccion === "diseño") {
      opcionesDiseno.style.display = "block";
      opcionesAnalisis.style.display = "none";
      } else if (seleccion === "analisis") {
      opcionesDiseno.style.display = "none";
      opcionesAnalisis.style.display = "block";
      } else {
      opcionesDiseno.style.display = "none";
      opcionesAnalisis.style.display = "none";
      }
      });*/

    
    
      // const mostrarcalculo = () => {
      //   const notas1 = parseFloat(document.querySelector('#nota1').value);
      //   const notas2 =parseFloat(document.querySelector('#nota2').value);
      //   const notas3 = parseFloat(document.querySelector('#nota3').value);
             
      //   const arraynotas = [notas1, notas2, notas3];
      //   const midefinitiva = calcular(arraynotas);
      //   console.log(midefinitiva);
      // };
      
      // const calcular = (arraynotas) => {
      //   sumatoria = 0;
      //   for(i=0;i<arraynotas.length;i++){
      //     sumatoria += arraynotas[i];
      //   }
        
      // const notafinal=sumatoria/arraynotas.length;
      // return notafinal;
      // };
     /* const mostrarcalculo = () => {
        const notas1 = parseFloat(document.querySelector('#nota1').value);
        const notas2 = parseFloat(document.querySelector('#nota2').value);
        const notas3 = parseFloat(document.querySelector('#nota3').value);
         
        const arraynotas = [notas1, notas2, notas3];
        const midefinitiva = calcular(arraynotas);
        console.log(midefinitiva);
    };
  
    const calcular = (arraynotas) => {
        /*let sumatoria = 0;*/
        ///una forma
        /*for (let i = 0; i < arraynotas.length; i++) {
            sumatoria += arraynotas[i];
        }*/

        ///otra forma
        /*for (let i of arraynotas){
          sumatoria += i
        }
        const notafinal = sumatoria / arraynotas.length;
        return notafinal;*/

        
      /*};
     ///otra forma

    /* const calcular=(arraynotas)=>(arraynotas[0]+arraynotas[1]+arraynotas[2])/3*/





    //colback
    /*function generar() {
      alert('Mi función');
      lfunction(afunction); // Llamamos a lfunction y pasamos afunction como argumento
  }
  
  function lfunction(bfunction) {
      bfunction(); // Llamamos a la función que se pasó como argumento (bfunction) y esta funcion toma como parametro bfunction
  }
  
  function afunction() {
      alert('Estoy trabajando');
  }






  //anterior ejercicio con colback*/


  

//   const mostrarcalculo = () => {
//     const notas1 = parseFloat(document.querySelector('#nota1').value);
//     const notas2 = parseFloat(document.querySelector('#nota2').value);
//     const notas3 = parseFloat(document.querySelector('#nota3').value);
     
//     arraynotas = [notas1, notas2, notas3];
//       calcular(arraynotas,afunction);
      
  
// };
// calcular = (arraynotas,afunction) => {
//   console.log(afunction(arraynotas))
  
// }

// function afunction(arraynotas) {
//   const n1 = arraynotas[0] * 0.03;
//   const n2 = arraynotas[1] * 0.03;
//   const n3 = arraynotas[2] * 0.03;
  
//   return [n1,n2,n3]
  
 
  
// }
function mostrarDatos(año, mes, trimestre, competencia, radio, fecha) {
  const otroarreglo = [año, mes, trimestre, competencia, radio, fecha];
  otroarreglo[5] = obtenerNombreMes(fecha); 
  enviar(otroarreglo);
}

function enviar(otroarreglo) {
  console.log(otroarreglo);
}

function obtenerNombreMes(fecha) {
  const fechaObj = new Date(fecha);
  const nombreMes = fechaObj.toLocaleString('default', { month: 'long' });
  return nombreMes;
}
const competenciaInput = document.getElementById("competencia");
const opcionesDiseno = document.getElementById("opciones-diseno");
const opcionesAnalisis = document.getElementById("opciones-analisis");

competenciaInput.addEventListener("change", () => {
const seleccion = competenciaInput.value.toLowerCase();

if (seleccion === "diseño") {
opcionesDiseno.style.display = "block";
opcionesAnalisis.style.display = "none";
} else if (seleccion === "analisis") {
opcionesDiseno.style.display = "none";
opcionesAnalisis.style.display = "block";
} else {
opcionesDiseno.style.display = "none";
opcionesAnalisis.style.display = "none";
}
});





///promesas


//  const mostrarcalculo = () => {
//      const notas1 = parseFloat(document.querySelector('#nota1').value);
//        const notas2 = parseFloat(document.querySelector('#nota2').value);
//        const notas3 = parseFloat(document.querySelector('#nota3').value);
       
//        arraynotas = [notas1, notas2, notas3];
//          calcular(arraynotas,afunction);
        
    
//    };
//  calcular = (arraynotas,afunction) => {
//     console.log(afunction(arraynotas))
    
//   }
  
//   function afunction(arraynotas) {
//     return new Promise((resolve, reject) => {
//         const n1 = arraynotas[0] * 0.03;
//         const n2 = arraynotas[1] * 0.03;
//         const n3 = arraynotas[2] * 0.03;

//         const result = [n1, n2, n3];
        
//         resolve(result); 
//     });
// }

const mostrarcalculo = () => {
  const notas1 = parseFloat(document.querySelector('#nota1').value);
  const notas2 = parseFloat(document.querySelector('#nota2').value);
  const notas3 = parseFloat(document.querySelector('#nota3').value);

  const arraynotas = [notas1, notas2, notas3]; 

  calcular(arraynotas, afunction);
};

const calcular = (arraynotas, calcularFunction) => { 
  calcularFunction(arraynotas) 
      .then(resultado => {
          console.log("Resultado:", resultado); 
      });
};

const afunction = arraynotas => { 
  return new Promise((resolve, reject) => {
      const n1 = arraynotas[0] * 0.03;
      const n2 = arraynotas[1] * 0.03;
      const n3 = arraynotas[2] * 0.03;

      const result = [n1, n2, n3];
      
      resolve(result);
  });
};
