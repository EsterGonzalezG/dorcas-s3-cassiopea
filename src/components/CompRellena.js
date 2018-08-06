import React from 'react';
const fr= new FileReader();
class CompRellena extends React.Component {
  constructor(props){
    super(props);
this.clickSimulado=this.clickSimulado.bind(this);
    this.clickCargarFoto=this.clickCargarFoto.bind(this);
    this.cambiarsrc2=this.cambiarsrc2.bind(this);
    this.fileInput = React.createRef();
  }
  clickSimulado(){
    document.querySelector('#img-selector').click();

  }
  clickCargarFoto(){


    fr.addEventListener('load',this.cambiarsrc2);
    fr.readAsDataURL(this.fileInput.current.files[0])
    //this.props.funcionfoto(fr.result);
  }

  cambiarsrc2(){
    const url=fr.result;
    this.props.funcionfoto(url);
  }
  render(){
    return (
      <fieldset className="fieldset__rellena div__rellena collapsible fieldset--invisible">
        <div className="fieldset__container--title">
          <span className="fieldset__rellena--keyboard">
            <i className="far fa-keyboard" />
            <h2 className="fieldset__title">{this.props.tituloRellena}</h2>
          </span>
          <span className="fieldset__rellena--arrow collapsible__label">
            <i className="fas fa-angle-up rotate" />
          </span>
        </div>
        <div className=" div__editor--inner">{/* collapsible__content */}
          <div className="formulario">
            <label className="fieldset__rellena--label" htmlFor="editor-name">
              Nombre completo
            </label>
            <input
              className="fieldset__rellena--input fieldset--name"
              type="text"
              name="editor-name"
              id="editor-name"
              placeholder="Ej: Sally Jill"
              data-donde="element-name"
              onChange={this.props.handlerName}
            />
          </div>
          <div className="">
            <label className="fieldset__rellena--label" htmlFor="editor-role">
              Puesto
            </label>
            <input
              className="fieldset__rellena--input fieldset--role"
              type="text"
              name="editor-role"
              id="editor-role"
              placeholder="Ej: Front-end unicorn"
              data-donde="element-role"
              onChange={this.props.handlerJob}
            />
          </div>
          <div className="">
            <label className="fieldset__rellena--label" htmlFor="imagen">
              Imagen de perfil
            </label>
            <div className="div__imagen">
              <div className="añadir">
                <input
                  ref={this.fileInput}
                  type="file"
                  name=""
                  id="img-selector"
                  className="añadir__hiddenField"
                  onChange={this.clickCargarFoto}
                />
                <input onClick={this.clickSimulado} type="button"  className="añadir__upload-btn" />

              </div>

                <img className="mini" alt="foto perfil de tamaño mini" src={this.props.foto} />

            </div>
          </div>
          <div className="contact">
            <div className="">
              <label className="fieldset__rellena--label" htmlFor="email">
                Email
              </label>
              <input
                className="fieldset__rellena--input fieldset__rellena--input-email"
                type="email"
                name="email"
                placeholder="Ej: sally-hill@gmail.com"
                autoComplete="email"
                onChange={this.props.handlerMail}
              />
            </div>
            <div className="">
              <label className="fieldset__rellena--label" htmlFor="telefono">
                Teléfono
              </label>
              <input
                className="fieldset__rellena--input fieldset__rellena--input-mobile"
                type="phone"
                name="telefono"
                placeholder="Ej: +34 555-55-55-55"
                autoComplete="tel-national"
                onChange={this.props.handlerPhone}
              />
            </div>
            <div className="">
              <label className="fieldset__rellena--label" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                className="fieldset__rellena--input fieldset__rellena--input-linkedin"
                type="text"
                name="linkedin"
                placeholder="Ej: linkedin.com/in/Sally.hill"
                onChange={this.props.handlerLinkedin}
              />
            </div>
            <div className="">
              <label className="fieldset__rellena--label" htmlFor="github">
                Github
              </label>
              <input
                className="fieldset__rellena--input fieldset__rellena--input-github"
                type="text"
                name="github"
                placeholder="Ej: sally-hill"
                onChange={this.props.handlerGithub}
              />
            </div>
          </div>
          <div className="">
            <label
              className="fieldset__rellena--label label__habilidades"
              htmlFor="habilidades"
              >
                Habilidades (máximo 3)
              </label>
              <div className="fieldset__div--habilidades">
                <div className="div__habilidades">
                  <select className="select__habilidades select__habilidades1">
                  {this.props.sect.map(function(item){
                    return (
                      <option value={item}>{item}</option>
                    )
                  })}
                  </select>
                  {/* <div className="button__add-select--container">
                    <i className="fas fa-plus button__add-select button__add-select1" /> */}
                  </div>
                </div>
              </div>
              <div className="fieldset__div--habilidades-new" />
            </div>
          {/* </div> */}
        </fieldset>
      );
    }
  }

  export default CompRellena;
