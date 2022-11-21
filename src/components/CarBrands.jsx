import React from 'react'
import { useState } from 'react'
import Carform from './CarForm'
import CarTable from './CarTable'

 const inicialDate = [
    {id:1, brand: "chevrolet-spark", model: 2005},
    {id:2, brand: "renault-simbol", model: 2002},
    {id:3, brand: "toyota-corola", model: 2009},
    {id:4, brand: "ford-fiesta", model: 2003}
 ]

const CarBrands = () => {
    const [dataBase, setDataBase] = useState(inicialDate)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createVehicle = (data) => {
        data.id = Date.now()
        setDataBase([
            ...dataBase,
            data
        ])
    }

    const updateVehicle = (data) => {
        let newDate = dataBase.map(el => el.id === data.id ? data : el)
        setDataBase(newDate)
    }

    const deleteVehicle = (brand,model,id) => {
        let isDelete = window.confirm(`¿Estas seguro eliminar el vehiculo ${brand} modelo ${model}?`)

        if(isDelete){
            let newDate = dataBase.filter(el => el.id !== id)
            setDataBase(newDate)
        }else{
            return;
        }
    }

  return (
    <div>
        <Carform
            createVehicle={createVehicle}
            updateVehicle={updateVehicle}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
        />
        <CarTable 
            data={dataBase}
            setDataToEdit={setDataToEdit}
            deleteVehicle={deleteVehicle}

        />
    </div>
  )
}

export default CarBrands