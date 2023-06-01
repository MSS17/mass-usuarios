import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Card from './components/Card'
function App() {
  //https://randomuser.me/api/?results=
  const [usuarios, setUsuarios] = useState([]);

  // const url = 'https://randomuser.me/api/?gender=female'
  const url = 'https://randomuser.me/api/?results=160'

  const generarUsuario = async () =>{
    const peticion = await fetch(url)  
    const {results} = await peticion.json()
    const nuevoUsuario = {...results[0], activo: true}
    // console.log(nuevoUsuario)
    setUsuarios([nuevoUsuario, ...usuarios])
  }
  // console.log(usuarios)

  const cambiarEstado = (id) => {
    const nuevoUsuario = [...usuarios]
    // console.log(id)
    const cambiarUsuario = nuevoUsuario.find((usuario) =>  usuario.login.uuid === id)
    cambiarUsuario.activo = !cambiarUsuario.activo
    setUsuarios(nuevoUsuario)
  }

  const eliminarUsuario = () => {
    setUsuarios(usuarios.filter((usuario) => usuario.activo))
  }
  return (
    <>
      <h1 className='title' >ejercicio 5 de usuarios random V3</h1>
      <div className="buttons">
        <button className='btn-add btn' onClick={generarUsuario}>Agregar usuario</button>
        <button className='btn-remove btn' onClick={eliminarUsuario}>Eliminar usuario</button>
      </div>
      <div className="container">
        {usuarios.map(({name, login, picture, activo}) => (
          <Card 
            key={login.uuid}
            id={login.uuid}
            name={`${name.first}${name.last}`}
            image={picture.large}
            activo={activo}
            cambiarEstado={cambiarEstado}
          />
        ))}
      </div>
    </>
  )
}

export default App