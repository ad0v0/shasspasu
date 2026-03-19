import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import { ReactComponent as IconHeart } from '../icons/icon-heart.svg'
import '../styles/components/pet-parent.css'
import '../styles/components/adoption-process.css'
import Contacts from '../components/Contacts'
import BecomePetParentImage from '../assets/images/image-01.png'
import AdoptionProcessImage from '../assets/images/image-02.png'

import { ReactComponent as ListIconHeart } from '../icons/icon-01.svg'
import { ReactComponent as ListIconPaw } from '../icons/icon-02.svg'
import { ReactComponent as ListIconBug } from '../icons/icon-03.svg'
import { ReactComponent as ListIconPatch } from '../icons/icon-04.svg'
import { ReactComponent as ListIconDog } from '../icons/icon-05.svg'
import { ReactComponent as IconInstagram } from '../icons/icon-instagram.svg'
import { ReactComponent as AdoptionListIconStep01 } from '../icons/icon-step01.svg'
import { ReactComponent as AdoptionListIconStep02 } from '../icons/icon-step02.svg'
import { ReactComponent as AdoptionListIconStep03 } from '../icons/icon-step03.svg'
import { ReactComponent as AdoptionListIconStep04 } from '../icons/icon-step04.svg'

const BecomePetParentView = () => {
    const { t } = useTranslation()

    return (
        <div className="container page-content-wrapper">
            <section className="intro">
                <h2 className="reset-text intro-title">
                    <Trans
                        i18nKey="becomePetParent.intro.title"
                        components={{
                            span: <span className="text-accent" />
                        }}
                    />
                </h2>

                <p className="reset-text intro-description">
                    <Trans
                        i18nKey="becomePetParent.intro.description"
                        components={{
                            heartIcon: <IconHeart />
                        }}
                    />
                </p>
            </section>

            <section className="pet-parent">
                <div className="pet-parent-text-wrapper">
                    <h3 className="reset-text text-accent pet-parent-title">
                        {t('becomePetParent.petParent.title')}
                    </h3>

                    <ul className="pet-parent-list reset-list">
                        <li>
                            <ListIconHeart />
                            <p className="reset-text">
                                {t('becomePetParent.petParent.list.attitude')}
                            </p>
                        </li>
                        <li>
                            <ListIconPaw />
                            <p className="reset-text">
                                {t('becomePetParent.petParent.list.feeding')}
                            </p>
                        </li>
                        <li>
                            <ListIconBug />
                            <p className="reset-text">
                                {t('becomePetParent.petParent.list.treatment')}
                            </p>
                        </li>
                        <li>
                            <ListIconPatch />
                            <p className="reset-text">
                                {t('becomePetParent.petParent.list.health')}
                            </p>
                        </li>
                        <li>
                            <ListIconDog />
                            <p className="reset-text">
                                {t('becomePetParent.petParent.list.care')}
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="pet-parent-image-wrapper">
                    <img src={BecomePetParentImage} width="374" height="auto" alt="" />

                    <div className="pet-parent-description-wrapper">
                        <p className="reset-text">
                            {t('becomePetParent.petParent.description.text')}
                        </p>

                        <Trans
                            i18nKey="becomePetParent.petParent.description.link"
                            components={{
                                span: <span className="text-accent" />,
                                instagramLink: (
                                    <a
                                        href="https://www.instagram.com/shasspasu/"
                                        target="_blank"
                                        rel="noreferrer nofollow"
                                    >
                                        instagram
                                    </a>
                                ),
                                iconInstagram: <IconInstagram />
                            }}
                        />
                    </div>
                </div>
            </section>

            <section className="adoption-process">
                <div className="adoption-process-image-wrapper">
                    <img src={AdoptionProcessImage} width="368" height="auto" alt="" />
                </div>

                <div className="adoption-process-text-wrapper">
                    <h3 className="reset-text text-accent adoption-process-title">
                        {t('becomePetParent.adoptionProcess.title')}
                    </h3>

                    <ul className="adoption-process-list reset-list">
                        <li>
                            <AdoptionListIconStep01 />
                            <p className="reset-text">
                                {t('becomePetParent.adoptionProcess.list.contact')}
                            </p>
                        </li>
                        <li>
                            <AdoptionListIconStep02 />
                            <p className="reset-text">
                                {t('becomePetParent.adoptionProcess.list.details')}
                            </p>
                        </li>
                        <li>
                            <AdoptionListIconStep03 />
                            <p className="reset-text">
                                {t('becomePetParent.adoptionProcess.list.choice')}
                            </p>
                        </li>
                        <li>
                            <AdoptionListIconStep04 />
                            <p
                                className="reset-text"
                                dangerouslySetInnerHTML={{ __html: t('becomePetParent.adoptionProcess.list.event')}}
                            />
                        </li>
                    </ul>
                </div>
            </section>

            <Contacts />
        </div>
    )
}

export default BecomePetParentView
