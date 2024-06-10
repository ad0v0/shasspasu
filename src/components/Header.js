import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './Header.css'
import Logo from '../icons/logo.svg'

const HeaderComponent = () => {
    const { t, i18n } = useTranslation()

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'ua')

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const handleLanguageChange = () => {
        if (currentLanguage === 'en') {
            changeLanguage('ua')
            setCurrentLanguage('ua')
        } else {
            changeLanguage('en')
            setCurrentLanguage('en')
        }
    }

    return (
        <header className="page-header">
            <div className="container page-header-wrapper">
                <nav className="site-navigation">
                    <ul className="reset-list">
                        <li>
                            <Link to="/">{t('header.navigation.aboutUs')}</Link>
                        </li>
                        <li>
                            <Link to="/become-pet-parent">{t('header.navigation.becomePetParent')}</Link>
                        </li>
                        <li>
                            <Link to="/results">{t('header.navigation.results')}</Link>
                        </li>
                    </ul>
                </nav>

                <Link className="page-header-logo-wrapper" to="/">
                    <img src={Logo} width="182" height="35" alt="ЩасСпасу – притулок і допомога для тварин" />
                </Link>

                <div className="page-header-action">
                    <button className="reset-button button button-support">
                        {t('header.support')}
                    </button>

                    <button className="reset-button button button-language-switch" onClick={handleLanguageChange}>
                        {currentLanguage === 'en' ? 'UA' : 'EN'}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
