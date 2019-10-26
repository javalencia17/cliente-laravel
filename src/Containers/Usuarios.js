import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Usuario from '../Components/Usuario';

class Usuarios extends Component {

    state = {
        usuarios: []
    }

    async componentDidMount (){
        try {
            const res = await axios.get('http://localhost/prueba-laravel/server/public/usuarios')
            this.setState({
                usuarios: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        console.log(this.state)
        const { usuarios } = this.state
        return (
            <div className="container">
                <div className="row mr-5">
                    <Link to={`/nuevoUsuario`}
                        className="btn btn-info">
                         Nuevo
                    </Link>
                </div>
                <div className="row align-items-center">
                    <Usuario 
                        usuarios={usuarios}     
                    />
                </div>
            </div>
        )

    }

}

export default Usuarios