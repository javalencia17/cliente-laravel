import React, { Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class FormUsuario extends Component {

    state = {
        id: '',
        nombres: '',
        apellidos: '',
        cedula: '',
        correo: '',
        telefono: '',
        parametros: false
    }

    async componentDidMount (){
        const { id } = this.props.match.params
        if(id){
            const res  = await axios.get(`http://localhost/prueba-laravel/server/public/usuarios/${id}`)

            const {  nombres, apellidos, cedula, correo, telefono } = res.data

            this.setState({ id, nombres, apellidos, cedula, correo, telefono, parametros: true })

        }
      
    }

    onsubmit = async e => {
        e.preventDefault()

        const  { id, nombres, apellidos, cedula, correo, telefono, parametros } = this.state

        let info = { id, nombres, apellidos, cedula, correo, telefono }

        if(!parametros)
        {
            try {
                const res = await axios.post('http://localhost/prueba-laravel/server/public/usuarios', info)
                res.data  === "ok" ?
                    this.props.history.push('/')
                    :
                    swal ( "Oops" ,  res.data ,  "error" )
            } catch (error) {
                console.log(error)
            }
        }else{
            try {
                await axios.put(`http://localhost/prueba-laravel/server/public/usuarios/${id}`, info)
                this.props.history.push('/')
            } catch (error) {
                console.log(error)
            }
        }

        

    }

    getDatos = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        const  { id, nombres, apellidos, cedula, correo, telefono, parametros } = this.state
        return (
            <div className="container">
               <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label >Nombres</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Ingrese nombre"
                            name='nombres'
                            onChange={this.getDatos} 
                            required 
                            defaultValue={nombres}
                        />
                    </div>
                    <div className="form-group">
                        <label >Apellidos</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Ingrese apellidos"
                            name='apellidos'
                            onChange={this.getDatos}  
                            required
                            defaultValue={apellidos}
                        />
                    </div>
                    <div className="form-group">
                        <label >Cedúla</label>
                        <input 
                            type="number" 
                            className="form-control"
                            placeholder="Ingrese cedula"
                            name='cedula'
                            onChange={this.getDatos}
                            required  
                            defaultValue={cedula}
                        />
                    </div>
                    <div className="form-group">
                        <label >Correo</label>
                        <input 
                            type="email" 
                            className="form-control"
                            placeholder="Ingrese correo electronico"
                            name='correo'
                            onChange={this.getDatos}  
                            required
                            defaultValue={correo}
                        />
                    </div>
                    <div className="form-group">
                        <label >Telefono</label>
                        <input 
                            type="number" 
                            className="form-control"
                            placeholder="Ingrese telefono"
                            name='telefono'
                            onChange={this.getDatos}
                            required 
                            defaultValue={telefono} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">{ parametros ? 'Editar' : 'Guardar' }</button>
                </form>
            </div>
        )

    }

}

export default FormUsuario