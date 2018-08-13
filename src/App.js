import React, { Component } from "react";
import Pag from "./components/Pag";
import logoAda from "./images/logo-adalab-80px.png";
import logoAwesome from "./images/awesomecards.svg";
import fotomini from './images/pollito.png';
import foto from './images/pollito.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json:{
        "palette": 1,
        "typography": 2,
<<<<<<< HEAD
        name: "Nombre Apellido",
        job: "Descripción",
        phone: "",
        mail:"",
        linkedin: "",
        github: "",
=======
        "name" : "Nombre Apellido",
        "job": "Descripción",
        "phone": "",
        "mail": "",
        "linkedin": "",
        "github": "",
>>>>>>> ff9fe48478bd9b51a0d915c0f707ffae97a177fe
        "photo": foto,
        "skills": []
      },
      footer: {
        texto: "Awesome profile-cards ©2018",
        image: logoAda,
        href: "http://www.adalab.es"
      },
      form: {
        titulos: {
          nombreDisena: "Diseña",
          nombreRellena: "Rellena",
          nombreComparte: "Comparte"
        }
      },
      skills: []
    };
<<<<<<< HEAD
    this.actualizarName=this.actualizarName.bind(this);
    this.actualizarJob=this.actualizarJob.bind(this);
    this.actualizarMail=this.actualizarMail.bind(this);
    this.actualizarPhone=this.actualizarPhone.bind(this);
    this.actualizarLinkedin=this.actualizarLinkedin.bind(this);
    this.actualizarGithub=this.actualizarGithub.bind(this);
=======
>>>>>>> ff9fe48478bd9b51a0d915c0f707ffae97a177fe

    this.callApi = this.callApi.bind(this);

    this.cambiarsrc=this.cambiarsrc.bind(this);
    this.callApi();
  }

  cambiarsrc(rutafoto){
    this.setState ((prevState) => {
      const j = {
        ...this.state.json,
        photo: rutafoto
      }
    return (
      {json: j}
    )
  });
  }
<<<<<<< HEAD
  actualizarName(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {name: target.value});
    return (
      {json: a}
    )
  });
  }
  actualizarJob(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {job: target.value});
    return (
      {json: a}
    )
  });
  }
  actualizarMail(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {mail: target.value});
    return (
      {json: a
    })
  });
  }
  actualizarPhone(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {phone: target.value});
    return (
      {json: a}
    )
  });
  }
  actualizarLinkedin(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {linkedin: target.value});
    return (
      {json: a}
    )
  });
  }
  actualizarGithub(e){
    const target = e.target;
    this.setState((prevState)=>{
      const a = Object.assign({}, this.state.json, {github: target.value});
    return (
      {json: a}
    )
  });
  }
=======

>>>>>>> ff9fe48478bd9b51a0d915c0f707ffae97a177fe
  callApi() {
    fetch(
      "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
    )
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      const habilidades = json.skills;
      this.setState({
        skills: habilidades
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Pag
          funcionfoto={this.cambiarsrc}
          foto={this.state.json.photo}
          visor={this.state.json}
          copyright={this.state.footer.texto}
          image={this.state.footer.image}
          href={this.state.footer.href}
          titulos={this.state.form.titulos}
          seleccion={this.state.skills}
          logoAwe={logoAwesome}
          handlerGithub={this.actualizarGithub}
          handlerLinkedin={this.actualizarLinkedin}
          handlerPhone={this.actualizarPhone}
          handlerMail={this.actualizarMail}
          handlerName={this.actualizarName}
          handlerJob={this.actualizarJob}
        />
      </div>
    );
  }
}

export default App;
