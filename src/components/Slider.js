import React from 'react'

import { ReactComponent as IconSliderNext } from '../icons/icon-arrow-right.svg'
import { ReactComponent as IconSliderPrev } from '../icons/icon-arrow-left.svg'

export function SliderNextButton(props) {
    const { className, onClick } = props

    return (
        <IconSliderNext
            className={className}
            onClick={onClick}
        />
    )
}

export function SliderPrevButton(props) {
    const { className, onClick } = props

    return (
        <IconSliderPrev
            className={className}
            onClick={onClick}
        />
    )
}
