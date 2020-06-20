import React from 'react'

import './style.css'

export default props => {

    return(
        <div className="top">
            <div className="menu">
                {/* <div className="name-site">Hercules Maranhão</div> */}
                <ul className="menu-items">
                    <li onClick={() => window.location = '/#/'}>Início</li>
                    <li onClick={() => window.location = '/#/curriculum'}>Curriculum Vitae</li>
                    <li>Meus Projetos</li>
                    <li onClick={() => window.location = '/#/about-me'}>Sobre Mim</li>
                    <li>Leituras</li>
                </ul>
            </div>
        </div>
    )
}