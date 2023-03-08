import React from 'react'

const Card = ({nombre, medico}) => {
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()
    console.log(date)

  return (
    <div>
        <h3>{nombre} tenes turno con el {medico} </h3>
        <h3>para el dia {dia+7}/{mes+1}</h3>
    </div>
  )
}

export default Card


//mes + 1 es porque los meses del años son array entonces 0 es enero, etc