import React from 'react';

import Top from './../components/curriculumVitae/top'
import AcademicsInfos from './../components/curriculumVitae/academicsInfos'
import ProfessionalExperiences from './../components/curriculumVitae/professionalExperiences'
import TechnicalKnowledge from './../components/curriculumVitae/technicalKnowledge'
import ButtonDownload from './../components/curriculumVitae/buttonDownload'

export default props => (
    <>
        <Top />
        <AcademicsInfos />
        <ProfessionalExperiences />
        <TechnicalKnowledge />
        <ButtonDownload />
    </>
)