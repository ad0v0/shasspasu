import React, { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'

import '../styles/components/intro.css'
import '../styles/components/video.css'
import '../styles/components/about-us.css'
import { ReactComponent as IconPlay } from '../icons/icon-play.svg'
import VideoPreview from '../assets/images/image-01.png'
import Video from '../assets/videos/intro-video.mp4'

const AboutUsView = () => {
    const { t } = useTranslation()

    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const handleVideoPlay = () => {
        setIsVideoPlaying(true)
        const video = document.getElementById('intro-video')
        video.play()
    }

    return (
        <div className="container page-content-wrapper">
            <section className="intro">
                <h2 className="reset-text intro-title">
                    <Trans
                        i18nKey="aboutUs.intro.title"
                        components={{
                            span: <span className="text-accent" />
                        }}
                    />

                </h2>

                <p className="reset-text intro-description">
                    <Trans i18nKey="aboutUs.intro.description" />
                </p>
            </section>

            <article className="video">
                <h2 className="visually-hidden">
                    {t('aboutUs.video.title')}
                </h2>

                {!isVideoPlaying && (
                    <div className="video-preview" onClick={handleVideoPlay}>
                        <img src={VideoPreview} width="877" height="480" alt="." className="video-thumbnail" />
                        <button className="reset-button video-play-button">
                            <span className="visually-hidden">
                                {t('aboutUs.video.button')}
                            </span>
                            <IconPlay />
                        </button>
                    </div>
                )}
                <video
                    id="intro-video"
                    className="intro-video"
                    src={Video}
                    controls
                    style={{ width: '877px', height: '480px', display: isVideoPlaying ? 'block' : 'none' }}
                />
            </article>

            <section className="about-us">
                <h2 className="reset-text text-accent about-us-title">
                    {t('aboutUs.aboutUsSection.title')}
                </h2>
                <p className="reset-text about-us-description">
                    {t('aboutUs.aboutUsSection.description')}
                </p>
            </section>
        </div>
    )
}

export default AboutUsView