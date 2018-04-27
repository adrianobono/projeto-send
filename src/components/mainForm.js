import React, { Component } from 'react';

class MainForm extends Component {
    constructor(props) {
        super(props)

        this.state = {

            view: 'block'

        }


    }

    render() {
        return (

            <form style={{ display: this.props.display }} id="form1" className="row" onSubmit={this.props.handleSubmit}   >
                <span className="col-lg-12">
                    <br />
                    <label className="col-md-2">Nome:</label>
                    <input id="nome" style={pd1} name="nome" type="text" required onChange={this.props.handleChange} className="col-sm-5 form-control-sm" value={this.props.nome} /><br />

                    <label className="col-md-2">Sobrenome:</label>
                    <input id="snome" style={pd1} name="snome" type="text" required onChange={this.props.handleChange} className="col-sm-5 form-control-sm" value={this.props.snome} /><br />

                    <label className="col-md-2">E-mail:</label>
                    <input id="email" style={pd1} name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required onChange={this.props.handleChange} className="col-sm-5 form-control-sm" value={this.props.email} /><br />

                    <label className="col-md-2">Telefone:</label>
                    <input id="tel" style={pd1} name="tel"  maxLength="15"  type="text" required onChange={this.props.handleChange} className="col-sm-5 form-control-sm" value={this.props.tel} /><br />

                </span>
                <br />
                <span className="row">

                    <span className="col-md-6">
                        <input type="submit" className="btn ml-2 float-left btn-success" value="Inserir" />
                    </span>

                    <span className="col-md-6">
                        <input type="button" className="btn float-right " onClick={this.props.btnCancel} value="Cancelar" />
                    </span >

                </span>
                
            </form>

        )

    }


}


const pd1 = {
    padding: '0px px',
    border: 'solid 1px #ccc'
}
export default MainForm