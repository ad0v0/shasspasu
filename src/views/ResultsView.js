import React from 'react'
import { Trans } from 'react-i18next'
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
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        nextArrow: <SliderNextButton />,
        prevArrow: <SliderPrevButton />,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
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
                    <div className="slider-item">
                        <img src={SliderImage01} className="slider-image" alt="" />
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage02} className="slider-image" alt=""/>
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage03} className="slider-image" alt=""/>
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage04} className="slider-image" alt="" />
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage05} className="slider-image" alt=""/>
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage06} className="slider-image" alt=""/>
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage07} className="slider-image" alt="" />
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage08} className="slider-image" alt=""/>
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage09} className="slider-image" alt=""/>
                    </div>
                    <div className="slider-item">
                        <img src={SliderImage10} className="slider-image" alt=""/>
                    </div>
                </Slider>
            </div>

            <Contacts />
        </div>
    )
}

export default ResultsView
