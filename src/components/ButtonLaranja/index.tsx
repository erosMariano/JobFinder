import React from 'react'
import { Button } from "./styles"
interface PropsButton {
    text: string;
    heightButton: string;
    widthButton: string;
}
function ButtonLaranja({ text, heightButton, widthButton }: PropsButton) {
    return (
        <Button heightButton={heightButton} widthButton={widthButton}>{text}</Button>
    )
}

export default ButtonLaranja