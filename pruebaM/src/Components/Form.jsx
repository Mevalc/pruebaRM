import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    obraSocial: "",
    medico: "",
  })

  //para cambiar el estado hago una función onChange (arrow function)
  //la e es de event (contiene todas las propiedades del onchange)
  //... con el spread operator user me traigo todo
  //e.target.value se refiere al valor actual de un elemento del DOM que ha sido activado por un evento.
  //se lo pongo al select porque me interesa que se guarde es el que seleccione el usuario



   const [show, setShow] = useState(false)   //creando un estado nuevo
   const [err, setErr]= useState(false)

   
  //el submit es para poder guardar y le  creo una funcion handleSubmit para que no
  //se borre la info cuando se la ingrese
  //event.preventDefault() para evitar que la página se recargue cuando se envíe el formulario.
//Luego, se comprueba si el objeto user tiene una propiedad nombre de longitud mayor a 8 caracteres y la propiedad medico no está vacía.
// Si se cumple esta condición, la función llama a los métodos setShow(true) y setErr(false) para establecer el estado de los componentes.
//Si la condición no se cumple, la función llama a los métodos setShow(false) y setErr(true) para establecer el estado de los componentes.
 
const handleSubmit = (event) => {
    event.preventDefault()
        if(user.nombre.length >8 && user.medico !== ''){
            setShow(true)
            setErr(false)
        } else{
            setShow(false)
            setErr(true)
        }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Obra social</label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, obraSocial: e.target.value })}
        />

        <select onChange={(e) => setUser({ ...user, medico: e.target.value })}>
          <option value="">Seleccione una respuesta</option>
          <option value="Dermatologo">Dermatologo</option>
          <option value="Otorrino">Otorrino</option>
          <option value="Urologo">Urologo</option>
        </select>
        <button>Enviar</button>

        <h3>
          {user.nombre} va al {user.medico}
        </h3>
        <h3>
          Tu obra social es {user.obraSocial} y tu correo es {user.email}
        </h3>
      </form>

      {err ? 'No ha colocado la info correcta': null}
      {show ? <Card nombre={user.nombre} medico={user.medico} /> : null}
      
    </div>
  );
};



export default Form;
// ese show hace referencia a la función mostrar que creé arriba. Dice, si show
// es false que no muestre nada sino que muestre la card