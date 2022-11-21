import React, { useEffect } from 'react'
import { useState } from 'react'

const date = {
    brand:"",
    model:"",
    id:null
}

const Carform = ({createVehicle,updateVehicle,dataToEdit,setDataToEdit}) => {
    const [vehicle, setVehicle] = useState(date)

    useEffect(() => {
        if(dataToEdit){
            setVehicle(dataToEdit)
        }else{
            setVehicle(date)
        }
    },[dataToEdit])

 const handleChange = (e) => {
    setVehicle({
        ...vehicle,
        [e.target.name] : e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();

    if(!vehicle.brand || !vehicle.model){
        alert("datos incompletos");
        return;
    }

    if(vehicle.id === null){
        createVehicle(vehicle)
    }else{
        updateVehicle(vehicle)
    }

    handleReset()
 }


const handleReset = () => {
setVehicle(date)
setDataToEdit(null)
}

  return (
    <div>
        <h3>{dataToEdit ? "Editando el vehiculo" : "Agregue el vehiculo"}</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='brand' 
                placeholder='marca del vehiculo' 
                value={vehicle.brand}
                onChange={handleChange}
            />
            <input 
                type="number" 
                name='model' 
                placeholder='modelo del vehiculo'
                value={vehicle.model} 
                onChange={handleChange}
            />

            <input type="submit" value="enviar"/>
            <input type="reset" value="limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default Carform