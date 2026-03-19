import React from 'react'
import { useTranslation } from 'react-i18next'

import './Footer.css'
import { ReactComponent as IconInsta } from '../icons/icon-inst.svg'
import { ReactComponent as IconFacebook } from '../icons/icon-fb.svg'

const FooterComponent = () => {
    const { t } = useTranslation()

    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="page-footer">
            <div className="container page-footer-wrapper">
                <p className="reset-text copyright">
                    &copy; {currentYear} Copyright &nbsp;
                    <span className="text-accent">#ЩасСпасу</span>
                </p>

                <ul className="reset-list social">
                    <li>
                        <a
                            href="https://www.instagram.com/shasspasu/"
                            target="_blank"
                            rel="noreferrer nofollow"
                            aria-label={`${t('footer.social.instagram')}. ${t('footer.socialTooltip')}`}
                        >
                            <span className="visually-hidden">Instagram</span>
                            <IconInsta />
                        </a>

                        <div className="tooltip">{t('footer.socialTooltip')}</div>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/shasspasu/"
                            target="_blank"
                            rel="noreferrer nofollow"
                            aria-label={`${t('footer.social.facebook')}. ${t('footer.socialTooltip')}`}
                        >
                            <span className="visually-hidden">Facebook</span>
                            <IconFacebook />
                        </a>

                        <div className="tooltip">{t('footer.socialTooltip')}</div>
                    </li>
                </ul>

                <button className="reset-button button button-scroll-to-top" type="button" onClick={scrollToTop}>
                    <span className="visually-hidden">{t('footer.scrollToTop')}</span>
                </button>
            </div>
        </footer>
    )
}

export default FooterComponent
