import React from 'react'
import Table from "../Components/Wrappers/Table";
import { useForm } from "react-hook-form";


export const AuditorPage = () => {
  return (
    <div>
      <div
        className="grid h-40 border border-hb place-items-center bg-cover bg-center mt-4 mb-4"
        style={{ backgroundImage: "url(https://i.ibb.co/T8vbdbq/auditor-Portada.png)" }}>
        <h1 className="font-bold leading-tight text-base-300 sm:text-xl md:text-3xl lg:text-4xl">Bienvenido al portal de Auditoría Interna </h1>
      </div>
      <Table />
    </div>
  );
};

export default AuditorPage;
