import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    en: {
        translation: {
            "header": {
                "navigation": {
                    "aboutUs": "About us",
                    "becomePetParent": "Become pet parent",
                    "results": "Results"
                },
                "support": "Support"
            },
            "footer": {
                "socialTooltip": "To contact us, please send a direct message",
                "social": {
                    "instagram": "Instagram",
                    "facebook": "Facebook"
                },
                "scrollToTop": "Scroll to top"
            },
            "contacts": {
                "title": "To become a PetParent -<br /> contact the curators of the project:",
                "list": {
                    "person-1": "Olia",
                    "person-2": "Natalia"
                },
                "form": {
                    "text": "or",
                    "link": "Fill the form"
                }
            },
            "aboutUs": {
                "intro": {
                    "title": "Center for <span>#Pets</span>",
                    "description": "We rescue street and abandoned animals, we have almost 200 tails under our care!"
                },
                "video": {
                    "title": "Video presentation of Shasspasu",
                    "button": "Watch video"
                },
                "aboutUsSection": {
                    "title": "#About us",
                    "description": "Shchas Spasu is a volunteer initiative that rescues abandoned and injured animals, gives them shelter, treatment, and daily care, and helps them move from crisis to a safe life in a family. We work thanks to the dedication of curators, volunteers, and people who choose adoption, temporary care, or support for the center."
                }
            },
            "becomePetParent": {
                "intro": {
                    "title": "Become <span>#PetParent</span>",
                    "description": "*that's right, the pet parent, not the owner, because we sincerely believe<br /> that fluffy children are the members of the family, and people are their guardians <heartIcon/>"
                },
                "petParent": {
                    "title": "We expect that petparents:",
                    "list": {
                        "attitude": "Will treat their pet with care and love",
                        "feeding": "Will feed their pet with high-quality food",
                        "treatment": "Will vaccinate and treat their pet against parasites in a timely manner",
                        "health": "Will seek treatment in time when their pet needs medical help",
                        "care": "Will not let their pet roam freely and will take care of the pet's safety"
                    },
                    "description": {
                        "text": "All fluffy children looking for a family are featured on our",
                        "link": "<instagramLink><iconInstagram /><span>instagram</span></instagramLink>"
                    }
                },
                "adoptionProcess": {
                    "title": "The adoption process is very simple:",
                    "list": {
                        "contact": "Call or write to the curator in Viber",
                        "details": "Discuss all the details with the curator and agree on the date and time of meeting the fluffy children",
                        "choice": "Choose a fluffy child that appeals to you and sign the adoption contract",
                        "event": "Congratulations on your new family member!<br /> We are sure that this event will change your life!"
                    }
                },
            },
            "results": {
                "intro": {
                    "title": "<span>#Results</span>",
                    "description":
                        "Up to <span>200 fluffy children</span> are under the care of volunteers from <span>#ЩасСпасу</span> at once <heartIcon/> <br/>" +
                        "Up to <span>100</span> of them live on the grounds of the <span>#ЩасСпасу animal center</span> <br />" +
                        "and the rest stay in other locations across Kyiv and the region." +
                        "<br /> <br />" +
                        "Since <span>2020</span>, we have found loving families for <span>320 cats and dogs</span> <br/>" +
                        "And we don't stop! If you are also ready to bring a fluffy child to your family <br />" +
                        "visit us on " +
                        "<instagramLink><iconInstagram /><span>instagram</span></instagramLink> " +
                        "and choose a friend."
                },
            },
        }
    },
    ua: {
        translation: {
            "header": {
                "navigation": {
                    "aboutUs": "Про нас",
                    "becomePetParent": "Стати петперентом",
                    "results": "Результати"
                },
                "support": "Підтримати хвостиків"
            },
            "footer": {
                "socialTooltip": "Напишіть в дірект щоб звязатись з нами",
                "social": {
                    "instagram": "Інстаграм",
                    "facebook": "Фейсбук"
                },
                "scrollToTop": "Скролити до верху"
            },
            "contacts": {
                "title": "Щоб стати ПетПерентом -<br /> зв'яжіться з кураторами проєкту:",
                "list": {
                    "person-1": "Оля",
                    "person-2": "Наталя"
                },
                "form": {
                    "text": "або",
                    "link": "Заповніть форму"
                }
            },
            "aboutUs": {
                "intro": {
                    "title": "Центр для <span>#Тварин</span>",
                    "description": "Рятуємо вуличних та покинутих тварин, маємо майже 200 хвостиків під опікою!"
                },
                "video": {
                    "title": "Відеопрезентація Щасспасу",
                    "button": "Подивитись відео"
                },
                "aboutUsSection": {
                    "title": "#Про нас",
                    "description": "Щас Спасу - це волонтерська ініціатива, яка рятує покинутих і травмованих тварин, забезпечує їм прихисток, лікування та щоденний догляд, а потім допомагає перейти від кризи до безпечного життя в родині. Ми працюємо завдяки кураторам, волонтерам і людям, які обирають адопцію, тимчасову опіку або підтримку центру."
                }
            },
            "becomePetParent": {
                "intro": {
                    "title": "Стати <span>#ПетПерентом</span>",
                    "description": "*саме так, петперентом, а не господарем, адже ми щиро віримо,<br /> що хвостики - повноправні члени родин, а люди - їхні опікуни <heartIcon />"
                },
                "petParent": {
                    "title": "Ми розраховуємо, що ПетПеренти:",
                    "list": {
                        "attitude": "Дбайливо та з любов'ю ставитимуться до тваринки",
                        "feeding": "Годуватимуть її кормом високої якості",
                        "treatment": "Своєчасно вакцинуватимуть та оброблятимуть від паразитів",
                        "health": "Лікуватимуть хвостика своєчасно у разі потреби",
                        "care": "Не випускатимуть тваринку на самовигул та подбають про її безпеку."
                    },
                    "description": {
                        "text": "Всі хвостики, що шукають родини, розміщені у нашому",
                        "link": "<instagramLink><iconInstagram /><span>instagram</span></instagramLink>"
                    }
                },
                "adoptionProcess": {
                    "title": "Процес адопції дуже простий:",
                    "list": {
                        "contact": "Зателефонуйте куратору або напишіть у вайбер",
                        "details": "Обговоріть з куратором всі деталі та домовтесь про дату та час знайомства з хвостиками",
                        "choice": "Виберіть собі пухнастика до душі та підпишіть договір адопції",
                        "event": "Вітаємо вас із новим членом родини!<br /> Впевнені, що ця подія змінить ваше життя!"
                    }
                },
            },
            "results": {
                "intro": {
                    "title": "<span>#Результати</span>",
                    "description":
                        "Під опікою волонтерів <span>#ЩасСпасу</span> одночасно перебуває до <span>200 хвостиків</span> <heartIcon/> <br/>" +
                        "З них до <span>100</span> проживають на території <span>Центру для тварин #ЩасСпасу</span>, <br />" +
                        "а решта - у інших локаціях Києва та області." +
                        "<br /> <br />" +
                        "З <span>2020</span> року ми знайшли люблячі родини для <span>320 котиків та песиків</span> <br/>" +
                        "І ми не зупиняємось! Якщо ви теж готові подарувати родину пухнастику -<br />" +
                        "переходьте до нас в " +
                        "<instagramLink><iconInstagram /><span>instagram</span></instagramLink> " +
                        "та вибирайте собі друга."
                },
            },
        }
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
