import React,{useState} from "react";


function FormularioCadastro(props) {

    const noteUser = {
        nome: '',
        description: '',
        phone: '',
        email: '',
    }

    const { values, setValues } = useState(noteUser);
    
    function manipuladorInput(e) {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    function manipularnvio(e) {
        e.preventDefault()
        props.addEdite(values)
    }
    return (
        <form onSubmit={manipularnvio} autoComplete="off">
            <div className="form-group input-group ">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control"
                    placeholder="Nome Completo"
                    name="nome" value={values.nome}
                    onChange={manipuladorInput}
                />
            </div>

            <div className="row">
                <div className="form-group input-group col-md-12">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-info"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Descrição" name="description" value={values.description}
                        onChange={manipuladorInput} />
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Telefone" name="phone" value={values.phone}
                        onChange={manipuladorInput} />

                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" value={values.email}
                        onChange={manipuladorInput} />

                </div>
            </div>
            <div className="form-group">
                <input type='submit' value='Salvar' className="btn btn-primary btn-lg btn-block"/>
            </div>
        </form>
    )
}
export default FormularioCadastro;