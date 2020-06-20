import React from 'react';

import './style.css'

export default props => (
    <div class="home">
        <div className="card">
            <div className="avatar-photo" />
            <div className="avatar-name">Hércules Maranhão</div>
            <div className="infos">
                <div>Desenvolvedor Web</div>
                <div>Nascimento 26/04/1997</div>
            </div>
            <div className="apresentation">
            <div className="paragraph">
                Trabalho à {new Date().getUTCFullYear() - 2016} anos como desenvolvedor web, e já tive
                diversas experiências no mercado de trabalho.
            </div>
            <div className="paragraph">
                Já trabalhei em empresas de diversos ramos, e pude ter contato com diversas tecnologias como
                PHP, .Net, SQL, MYSQL, Ruby, ReactJs, mas tenho me especializado mais com o JavaScript. Atualmente trabalho
                com Node.js e React.js.
            </div>
            <div className="paragraph">
                Aqui você poderá me conhecer e ver um pouco da minha carreira e alguns projetos
                pessoais que realizei, espero sinceramente que goste e se divirta vendo tudo que tenho à apresentar. ^^
            </div>
            </div>
        </div>

    </div>
)