import React from 'react'

const TableRow = ({el,setDataToEdit,deleteVehicle}) => {
    let {brand,model,id} = el
  return (
    <>
         <tr>
            <td>{brand}</td>
            <td>{model}</td>
                <td>
                    <button onClick={() => setDataToEdit(el)}>Editar</button>
                    <button onClick={() => deleteVehicle(brand,model,id)}>Eliminar</button>
                </td>
        </tr>
    </>
  )
}

export default TableRow