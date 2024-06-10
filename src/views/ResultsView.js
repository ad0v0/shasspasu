import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Slider from 'react-slick'

import '../styles/components/pet-parent.css'
import '../styles/components/adoption-process.css'
import '../styles/components/slider.css'
import Contacts from '../components/Contacts'
import { ReactComponent as IconHeart } from '../icons/icon-heart.svg'
import { ReactComponent as IconInstagram } from '../icons/icon-instagram.svg'
import SliderImage01 from '../assets/images/image-pets-01.jpg'
import SliderImage02 from '../assets/images/image-pets-02.jpg'
import SliderImage03 from '../assets/images/image-pets-03.jpg'
import SliderImage04 from '../assets/images/image-pets-04.jpg'
import SliderImage05 from '../assets/images/image-pets-05.jpg'
import SliderImage06 from '../assets/images/image-pets-06.jpg'
import SliderImage07 from '../assets/images/image-pets-07.jpg'
import SliderImage08 from '../assets/images/image-pets-08.jpg'
import SliderImage09 from '../assets/images/image-pets-09.jpg'
import SliderImage10 from '../assets/images/image-pets-10.jpg'
import { SliderPrevButton, SliderNextButton } from '../components/Slider'

const ResultsView = () => {
    const { t } = useTranslation()

    const settings = {
        dots: false,
        infinite: true,
        className: "center",
        centerMode: true,
        slidesToShow: 3.8,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        nextArrow: <SliderNextButton />,
        prevArrow: <SliderPrevButton />
    }

    return (
        <div className="container page-content-wrapper">
            <section className="intro">
                <h2 className="reset-text intro-title intro-title-results">
                    <Trans
                        i18nKey="results.intro.title"
                        components={{
                            span: <span className="text-accent" />
                        }}
                    />
                </h2>

                <p className="reset-text intro-description">
                    <Trans
                        i18nKey="results.intro.description"
                        components={{
                            span: <span className="text-accent" />,
                            heartIcon: <IconHeart />,
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
                </p>
            </section>

            <div className="slider slider-container">
                <Slider {...settings}>
                    <div style={{'padding': '5px'}}>
                        <img src={SliderImage01} width="340px" height="auto" alt="." />
                    </div>
                    <div>
                        <img src={SliderImage02} width="340px" height="auto" alt="."/>
                    </div>
                    <div>
                        <img src={SliderImage03} width="340px" height="auto" alt="."/>
                    </div>
                    <div>
                        <img src={SliderImage04} width="340px" height="auto" alt="." />
                    </div>
                    <div>
                        <img src={SliderImage05} width="340px" height="auto" alt="."/>
                    </div>
                    <div>
                        <img src={SliderImage06} width="340px" height="auto" alt="."/>
                    </div>
                    <div>
                        <img src={SliderImage07} width="340px" height="auto" alt="." />
                    </div>
                    <div>
                        <img src={SliderImage08} width="340px" height="auto" alt="."/>
                    </div>
                    <div>
                        <img src={SliderImage09} width="340px" height="auto" alt="."/>
                    </div>
                    <div>
                        <img src={SliderImage10} width="340px" height="auto" alt="."/>
                    </div>
                </Slider>
            </div>

            <Contacts />
        </div>
    )
}

export default ResultsView