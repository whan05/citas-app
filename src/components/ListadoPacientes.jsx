import { Paciente } from "./Paciente"


export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
  
      {pacientes.map( paciente => {
          return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}

              />
          )
      })}
      </>

      ) : (

        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">Comienza agregando pacientes <span className="text-indigo-600 font-bold">y apareceran en este lugar</span></p>
        </>

      )}
    </div>
      
  )
}
