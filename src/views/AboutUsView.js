import React, { useEffect, useRef, useState } from 'react'
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
    const videoRef = useRef(null)

    const handleVideoPlay = () => {
        setIsVideoPlaying(true)
    }

    useEffect(() => {
        if (!isVideoPlaying || !videoRef.current) {
            return
        }

        videoRef.current.play().catch(() => {})
    }, [isVideoPlaying])

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
                    <button
                        type="button"
                        className="reset-button video-preview-button"
                        onClick={handleVideoPlay}
                        aria-label={t('aboutUs.video.button')}
                        aria-controls="intro-video"
                    >
                        <span className="video-preview">
                            <img src={VideoPreview} width="877" height="480" alt="" className="video-thumbnail" />
                            <span className="video-play-button" aria-hidden="true">
                                <IconPlay />
                            </span>
                        </span>
                    </button>
                )}
                <video
                    id="intro-video"
                    ref={videoRef}
                    className="intro-video"
                    src={Video}
                    controls
                    style={{ display: isVideoPlaying ? 'block' : 'none' }}
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
