//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import './styles.css'
import{Form, Label, GrupoInput, Input, Error, IconoValido, ContTerminos, ContBoton, Boton} from './Formularios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faCheckCircle, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
      <main>
        <Form action=''>
          <div>
            <Label htmlFor=''>Nombre</Label>
            <GrupoInput>
              <Input type="text" placeholder='Nombre' id="nombre"/>
              <IconoValido icon={faCheckCircle}/>
            </GrupoInput>
            <Error>Lorem ipsum dolor sit amet</Error>
          </div>
          <ContTerminos>
            <Label>
              <input type="checkbox" name="tereminos" id="terminos">Acepto los Terminos y condiciones</input>
            </Label>
          </ContTerminos>
          <div>
            <p>
             <FontAwesomeIcon icon={faExclamationTriangle}/>
              <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
          </div>
          <ContBoton>
            <Boton type="submit">Enviar</Boton>
            <p>Formulario enviado exitosamente</p>
          </ContBoton>
        </Form>
    </main>
  );
}
 

export default App;
