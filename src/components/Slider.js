import React from 'react'

import { ReactComponent as IconSliderNext } from '../icons/icon-arrow-right.svg'
import { ReactComponent as IconSliderPrev } from '../icons/icon-arrow-left.svg'

export function SliderNextButton(props) {
    const { className, onClick } = props

    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
            aria-label="Next slide"
        >
            <IconSliderNext aria-hidden="true" focusable="false" />
        </button>
    )
}

export function SliderPrevButton(props) {
    const { className, onClick } = props

    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
            aria-label="Previous slide"
        >
            <IconSliderPrev aria-hidden="true" focusable="false" />
        </button>
    )
}
