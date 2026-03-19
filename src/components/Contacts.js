import React from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as IconPhone } from '../icons/icon-phone.svg'
import { ReactComponent as IconContactForm } from '../icons/icon-contactform.svg'
import './Contacts.css'

const Contacts = () => {
    const { t } = useTranslation()

    return (
        <section className="contacts">
            <h3 className="reset-text text-accent contacts-title" dangerouslySetInnerHTML={{ __html: t('contacts.title') }} />

            <ul className="reset-list contact-list">
                <li>
                    <IconPhone />
                    <p className="reset-text">
                        <span className="text-accent">
                            {t('contacts.list.person-1')}&nbsp;
                        </span>
                        <a href="tel:+380994704719">
                            +38 (099) 470 47 19
                        </a>
                    </p>
                </li>
                <li>
                    <IconPhone />
                    <p className="reset-text">
                        <span className="text-accent">
                            {t('contacts.list.person-2')}&nbsp;
                        </span>
                        <a href="tel:+380677278569">
                            +38 (067) 727 85 69
                        </a>
                    </p>
                </li>
                <li>
                    <IconContactForm />
                    <p className="reset-text">
                        <span>
                            {t('contacts.form.text')}&nbsp;
                        </span>
                        <button
                            type="button"
                            className="reset-button text-accent contact-link-disabled"
                            disabled
                            aria-disabled="true"
                        >
                            {t('contacts.form.link')}
                        </button>
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Contacts
