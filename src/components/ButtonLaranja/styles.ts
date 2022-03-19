import styled from "styled-components";

interface PropsButton {
    heightButton: string;
    widthButton: string;
}
export const Button = styled.button<PropsButton>`
    width: ${(props) => props.widthButton};
    height: ${(props) => props.heightButton};
    background: #FF4E25;
    border: none;

    text-transform: uppercase;
    color: #fff;
    border-radius: 12px;
    font-weight: 700;
    letter-spacing: 1px;

` 