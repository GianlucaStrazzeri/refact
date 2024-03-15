import { useState } from 'react'
import { ReactDom } from 'react-dom/client'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import lodearriba from './top'
//import './App.css'


let empleados = [
  { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
  { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
  { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
  { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
  { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
  { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
  { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
  { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
  { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
  { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
  { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
  { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
  { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
  { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
  { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
  { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
  { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
  { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
  { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
  { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
  { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
  { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
  { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
  { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
  { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
  { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
  { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
  { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
  { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
  { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
];

let numero1 = 1 
let numero2 = 2

function App() {
  // const [count, setCount] = useState(0)
  // const [agrupar, sumarMas] = useState(1)
  // const [contabilizar, quitar] = useState(0)

    let resultadoSuma = numero1+numero2 
    
    let arrayEmpleados = [];
    for (let i = 0; i < empleados.length; i++) {
      arrayEmpleados.push(
        <div key={i}>
          <p>Nombre: {empleados[i].name}</p>
          <p>Apellidos: {empleados[i].lastName}</p>
          <p>Hobbies: {empleados[i].hobbies.join(', ')}</p>
          <p>Edad: {empleados[i].age}</p>
        </div>
      );
    }
  return (

    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    <div class="envoltura">
      <input type='number' id='numero1'/>
      <input type='number' id='numero2'/>
      <input type='number' id='operador'/>

      <input type='number' id='result'/>

      <button  id='sumar'>Sumar</button>
      <button  id='resta'>Resta</button>
      <button  id='multiplicar'>Multiplicar</button>
      <button  id='dividir'>Dividir</button>


      {arrayEmpleados}
      {/*<Form>*/ } 
      {/* {suma} --> clacula la suma de los dos elementos que hay en los inputs */}
      {resultadoSuma}
      {/*cocreta*/} 
      {/* ejemplo para cambiar luego patata por el resultado que tengo que guardar en las variables para que haga la suma. Puedo usar las mismas variables para el resto */}
      {/* <button>Aquí tiene que enviar algo para que funcione</button>
      </Form> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
    /* <pie /> */
  )
}

export default App

function calculadora() {
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  const operador = document.getElementById('operador').value;
  
  const btnSum = document.getElementById('sumar').value;
  const btnRestar = document.getElementById('restar').value;
  const btnmultiplicar = document.getElementById('multiplicar').value;
  const btnDividir = document.getElementById('dividir').value;
  
  switch (operador) {
    case '+':
    result = numero1 + numero2;
    break;

    case '-': 
    result = numero1 - numero2;
    break;
    
    case '*':
      result = numero1 * numero2;
      break;
      
    case '/':
      result = numero1 / numero2;
      break;

      if (numero2 !==0 ) {
        result = numero1 / numero2;
      }else{
        result = "no es posible dividir por 0"
      }
      break;
      
    default:
        result = "operador no valido";
}}

document.getElementById('result').textContent = "Resultado" + result;