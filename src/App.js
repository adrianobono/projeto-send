import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';


import MainForm from './components/mainForm'
class App extends Component {

  constructor(props, context) {
    super(props, context);


    this.state = {
      nome: '',
      snome: '',
      email: '',
      tel: '',
      display: false,
      show: false,
      getId: 0,
      isOpen: 'false',
      data1: '',
      data2: '',
      data3: '',
      data4: '',
      view1: 'none',
      view2: 'none',
      view3: 'block',
      view4: 'block',
      view5: 'none',
      view6: 'block',
      msgs: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }



  onChange(e) {

  }


  changeDisplay() {
    this.setState({ display: !this.state.display })
  }

  changeShow() {
    this.setState({ show: !this.state.show })

  }



  onClickHandler = () => {
    this.setState(prev => ({ showResults: !prev.showResults }));
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value

    })
  }



  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      nome: this.state.nome,
      snome: this.state.snome,
      email: this.state.email,
      tel: this.state.tel,
      msgs: []
    }

    this.setState({
      nome: '',
      snome: '',
      email: '',
      tel: ''


    });
    this.props.createContact(contact);
    document.getElementById("form1").reset()
  }

  listView(data, index) {

    return (

      <div className="row p-2" key={index} style={{ display: this.state.view4 }} >

        <div className="col-md-5 float-left">
          <li style={pd1} onClick={(e) => { if (this.props.contacts[this.state.getId].msgs.length > 0) this.setState({ view5: 'block' }); this.setState({ view6: 'none' }); this.setState({ view4: 'none' }); this.setState({ data3: this.props.contacts[index].email }); this.setState({ data4: this.props.contacts[index].tel }); this.setState({ data1: this.props.contacts[index].nome }); this.setState({ data2: this.props.contacts[index].snome }); this.setState({ getId: index }); this.setState({ view2: 'none' }); this.setState({ view3: 'none' }); this.setState({ view1: 'block' }) }} className="list-group-item clearfix">
            {data.nome + ' ' + data.snome}
          </li>
        </div>
        <div className="col-md-2 float-left">
          <button onClick={(e) => { this.setState({ view1: 'none' }); this.deleteContact(e, index); }} className="btn btn-danger btn-sm">
            X
        </button>
        </div>
      </div>
    )
  }


  listView2(data, index) {

    console.log(data)
    if (!this.props.contacts[index].msgs.length > 0) return null

    else {
      return (
        this.props.contacts[this.state.getId].msgs.map(function (msg, i) {
          console.log(msg)
          return (

            <div key={i} >
              <br />
              <div className="float-left p-1">
                <li className="list-group-item p-1">
                  <span style={pd2}> Contato: {msg.User}</span>
                  <br />
                  <span style={pd2}>Mensagem:<br />{msg.mensagem}</span>
                </li>
              </div>

            </div>
          )

        })
      )



    }


  }
  deleteContact(e, index) {
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {
    return (
      <div className="container z-depth-5 ">
        <h4>Agenda</h4>
        <hr />
        <div>

          <button style={{ display: this.state.view3 }} className="btn btn-info btn-sm" onClick={() => { this.setState({ view2: 'block', view3: 'none' }) }} >
            Inserir Contato
        </button>
          <MainForm display={this.state.view2} handleChange={this.handleChange} handleSubmit={this.handleSubmit} btnCancel={() => { this.setState({ view2: 'none', view3: 'block' }) }} />
          <hr />
          <h5 className="col-md-12 ml-0" style={{ display: this.state.view6 }} >Lista de Contatos:</h5>
          <br />
          <div style={{ display: this.state.view1 }}>
            <span className="col-sm-6 float-right">
              <input type="button" className="btn btn-info float-right mb-3 mr-1" value="X" onClick={(e) => { this.setState({ view3: 'block' }); this.setState({ view4: 'block' }); this.setState({ view1: 'none' }); }} />
            </span>
            <br />
            <div id="div" style={viewer}>
              <div id="fullName" className="row  p-3 mb-4 ">
                <label className="col-md-12">Nome:</label>

                <input id="data1" style={inputs} name="data1" type="text" onChange={this.handleChange} className="col-md-5 form-control-sm" value={this.state.data1} />
                <input id="data2" style={inputs} name="data2" type="text" onChange={this.handleChange} className="col-md-5 form-control-sm" value={this.state.data2} />

                <label style={{ marginTop: '5px' }} className="col-md-12">E-mail:</label>
                <input id="data3" style={inputs} name="data3" type="text" onChange={this.handleChange} className="col-md-5 form-control-sm" value={this.state.data3} />
                <label style={{ marginTop: '5px' }} className="col-md-12">Telefone:</label>
                <input id="data4" style={inputs} name="data4" type="text" onChange={this.handleChange} className="col-md-5 form-control-sm" value={this.state.data4} />

              </div>
              <span className="row ">
                <span className="col-sm-6 ml-2">
                  <input type="button" style={vcenter} className="btn btn-success" value="Salvar" onClick={(e) => { this.props.contacts[this.state.getId].nome = this.state.data1; this.props.contacts[this.state.getId].snome = this.state.data2; this.props.contacts[this.state.getId].email = this.state.data3; this.props.contacts[this.state.getId].tel = this.state.data4; this.forceUpdate(); }} />
                </span>

              </span>


              <div className="mt-5" id="mensagens">
                <l5> Mensagens: </l5>

                {<ul className="list-group" >
                  {
                    this.props.contacts.map((contact, i) => this.listView2(contact, i))}
                </ul>}


              </div>
            </div>

            <div style={rdc} >
              <div className="form-group">
                <label className="row ml-2" >Mensagem:</label>
                <center>
                  <textarea id="message" rows="5" cols="45" ></textarea>
                </center>
                <input type="button" style={vcenter} className=" row btn btn-success float-right mr-2" value="Enviar" onClick={(e) => { if (document.getElementById('message').value !== '') { this.props.contacts[this.state.getId].msgs.push({ "User": names[Math.floor(Math.random() * names.length)], "mensagem": document.getElementById('message').value }); document.getElementById('message').value = ''; this.setState({ view5: 'block' }); } console.log(this.props); this.props.contacts[this.state.getId].nome = this.state.data1; this.props.contacts[this.state.getId].snome = this.state.data2; this.props.contacts[this.state.getId].email = this.state.data3; this.props.contacts[this.state.getId].tel = this.state.data4; this.forceUpdate(); }} />
                <br /><br /><br />
                <div>
                </div>
              </div>

            </div>


          </div>

          {<ul className="list-group" >
            {
              this.props.contacts.map((contact, i) => this.listView(contact, i))}
          </ul>}
        </div>

      </div>





    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};



const pd1 = {
  padding: '3px 5px'
}

const pd2 = {
  width: '300px',
  padding: '3px 5px'
}
const rdc = {
  float: 'right',
  width: '400px',
  height: '320px',
  backgroundColor: '#eee'
}


const vcenter = {
  float: 'none',
  display: 'inline-block',
  verticalAlign: 'middle',
}

const inputs = {
  border: 0,
  borderBottom: '1px solid #00cc00',
  outline: 0,
  borderRadius: 0,
  marginLeft: '10px'
}

const viewer = {
  backgroundColor: '#fff',
  width: 500 + 'px',
  height: 320 + 'px',
  display: 'block-inline',
  float: 'left',
  borderStyle: 'solid',
  borderColor: '#eee',
  borderWidth: '2px 0px 2px 2px'

}

const names = ['Alan', 'Claudia', 'Pedro', 'Thales', 'Victor', 'Gabriel', 'Jane']


const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
