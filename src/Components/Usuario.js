import React from 'react';
import { Link } from 'react-router-dom';

const Usuario = (props) => {
    const { usuarios } = props

    return(
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Cedula</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map( usuario => (
                <tr key={usuario.id}>
                    <th >{usuario.nombres}</th>
                    <th >{usuario.apellidos}</th>
                    <th >{usuario.cedula}</th>
                    <th >{usuario.correo}</th>
                    <th >{usuario.telefono}</th>
                    <th>
                    <Link to={`/editarUsuario/${usuario.id}`}
                        className="btn btn-danger">
                         Editar
                    </Link>
                    </th>
                </tr>

                ) )}
            </tbody>
        </table>
    )
}

export default Usuario