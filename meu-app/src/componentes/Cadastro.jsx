import React from "react";
import FormCad from "./formularioCadastro";
import fileDd from "../dataBase/firebase";


const Cadastro = () => {

    const addEdite = obj => {

        fileDd.child('pacientes').push(
            obj,
            error =>{
                if(error){
                    console.log(error);
                }
            }
        )
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid p-3 mb-2 bg-dark text-white   ">
                <div className="container">
                    <h1 className="display-4 ">Cadastro de usuário</h1>
                    <p className="lead ">Lista de pacientes</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <FormCad addEdite={addEdite} />
                </div>
                <h2 >Lista de paciente</h2>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Cadastro;