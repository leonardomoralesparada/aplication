import React from 'react'
import TableRow from './TableRow'

const CarTable = ({data,setDataToEdit,deleteVehicle}) => {
  return (
    <div>
        <h3>Tabla de vehiculos Agregados</h3>
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
               {data.length === 0 ? (
                    <tr>
                        <td colSpan="3">Sin Datos, Por Favor Agreguelos</td>
                    </tr>
                ):(
                    data.map(el => 
                    <TableRow  
                        key={el.id} 
                        el={el} 
                        setDataToEdit={setDataToEdit} 
                        deleteVehicle={deleteVehicle} 
                    />)
                )}
            </tbody>
        </table>
    </div>
  )
}

export default CarTable