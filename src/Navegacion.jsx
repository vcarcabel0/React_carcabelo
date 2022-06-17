import React from "react";
import {Link} from "react-router-dom"

export default function Navegacion(){
    return(
        <div>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/formulario">Formulario</Link></li>
            </ul>
        </div>
    )
}