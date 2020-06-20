import React, { useState } from 'react';
import { Collapse, Grid } from '@material-ui/core'
import { Work, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

import './../style.css'

export default props => {
    const [open, setOpen] = useState(true)

    return (
        <div className="formCurriculum2">
            <div className={`academics-infos ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                <div className="accordion-title">
                    <Work />
                    <div>Experiências Profissionais</div>
                </div>
                {open ? <KeyboardArrowUp style={{ margin: 5 }} /> : <KeyboardArrowDown style={{ margin: 5 }} />}
            </div>
            <Collapse in={open} style={{ width: '100.2%' }}>
                <div className="accordion-content">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div><b>Empresa: </b>MKM ServiceCom.</div>
                            <div><b>Site: </b><a href="https://www.mkmservice.com/" target="_blanl">https://www.mkmservice.com/</a></div>
                            <div><b>Cargo: </b>Desenvolvedor Front-End Pleno.</div>
                            <div><b>Período: </b>de 02/2019 à atualmente.</div>
                            <div><b>Atividades: </b>Desenvolvimento de novos recursos e manutenção da plataforma web utilizando tecnologias como ReactJS, Redux, Saga e Api REST, Material-UI, NodeJS.</div>
                        </Grid>
                        <Grid item xs={12}>
                            <div><b>Empresa: </b>RFX Tecnologia (TWx).</div>
                            <div><b>Site: </b><a href="https://twx.com.br/" target="_blanl">https://twx.com.br/</a></div>
                            <div><b>Cargo: </b>Desenvolvedor FullStack.</div>
                            <div><b>Período: </b>de 06/2016 à 02/2019.</div>
                            <div><b>Atividades: </b>Desenvolvimento de novos recursos e manutenção da plataforma web utilizando tecnologias como PHP, Jquery, SQL, MySQ e Android.</div>
                        </Grid>
                        <Grid item xs={12}>
                            <div><b>Empresa: </b>JBS S/A.</div>
                            <div><b>Site: </b><a href="https://jbs.com.br/" target="_blanl">https://jbs.com.br/</a></div>
                            <div><b>Cargo: </b>Jovem Aprendiz (Suporte Técnico).</div>
                            <div><b>Período: </b>de 10/2014 à 10/2015.</div>
                            <div><b>Atividades: </b>Suporte Nv1 para usuários dos sistemas internos da empresa, manutenção de equipamentos de informática e infraestrutura.</div>
                        </Grid>
                        <Grid item xs={12}>
                            <div><b>Empresa: </b>Caixa Econômica Federal.</div>
                            <div><b>Site: </b><a href="http://www.caixa.gov.br/" target="_blanl">http://www.caixa.gov.br/</a></div>
                            <div><b>Cargo: </b>Jovem Aprendiz (CIEE).</div>
                            <div><b>Período: </b>de 08/2012 à 08/2014.</div>
                            <div><b>Atividades: </b>Gerenciamento de arquivos, atendimento ao público, processos de contas e empréstimos pessoa física e pessoa jurídica.</div>
                        </Grid>
                    </Grid>
                </div>
            </Collapse>

        </div>
    )
}