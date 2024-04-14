import React from 'react'

export const AuditorPage = () => {
  return (
    <div className="flex flex-col w-full border-opacity-50 mb-6 mt-6">
      <div className="grid h-40 card border border-sky-700 rounded-box place-items-center bg-cover bg-center"
        style={{ backgroundImage: "url(https://www.shutterstock.com/image-photo/audit-fraud-investigation-auditor-using-260nw-2054709956.jpg)"}}>
        <h1 className='font-bold leading-tight text-base-300 sm:text-xl md:text-3xl lg:text-4xl'>Bienvenido al portal de Auditoría Interna </h1>
      </div>
        <div className="divider"></div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <div className="flex w-full">
          <div className="grid h-20 flex-grow card rounded-box place-items-center">
          
            <button className="btn bg-sky-700 hover:border-teal-700 btn-xs sm:btn-sm md:btn-md">Especialistas</button>

          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">

            <button className="btn bg-sky-700  hover:border-teal-700 btn-xs sm:btn-sm md:btn-md">Pacientes</button>

          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">

            <button className="btn bg-sky-700  hover:border-teal-700 btn-xs sm:btn-sm md:btn-md">Turnos</button>

          </div>
        </div>
            
      </div>
    </div>
  )
}

// export default AuditorPage