import React from 'react'

// Components
import HeaderComponent from './components/HeaderComponent/index'
import InfoSectionComponent from './components/InfoSection/index'
import ThemesSectionComponent from './components/ThemesSection/index'
import TimeLineComponent from './components/Timeline/index'
import AboutSectionComponent from './components/AboutSection/index'
import AwardSectionComponent from './components/AwardSection/index'
import PartnersSection from './components/PartnersSection/index'

import './styles.css'

// Images
import GreenHeart from './assets/Home/greenHeart.svg'

const PublicHomePage = () => {
    return (
        <div id="homePublic-page">
            <div className="homePublic-content">

                {/* Header */}
                <HeaderComponent />

                {/* Primeira Seção */}
                <InfoSectionComponent />

                {/* Segunda Seção */}
                <ThemesSectionComponent />
            
                {/* Terceira Seção */}
                <TimeLineComponent />

                {/* Quarta Seção */}
                <AboutSectionComponent />

                {/* Quinta Seção */}
                <AwardSectionComponent />

                {/* Sexta Seção */}
                <PartnersSection />


                <div className="homePublic-footer">
                    <span>
                        Total de <b>200</b> participantes já cadastrados.
                        <img src={GreenHeart} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PublicHomePage