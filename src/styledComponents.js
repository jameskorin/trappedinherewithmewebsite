import styled, { css } from 'styled-components'

export const Outer = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Inter:400,700&display=swap");
    font-family: "Inter", sans-serif;
    background: #FFFFFF;
    min-height: 100vh;
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 100px 20px;
`;
export const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
`;
export const Body = styled.div`
    max-width: 500px;
    margin: 20px 0px 0px 0px;
    font-size: 16px;
    z-index: 10;

    ${props => props.bg && css`
        background: #FFFFFF;
        border-radius: 100px;
        padding: 3px 15px;
    `}
`;
export const Link = styled.a`
    color: #347EF6;
    cursor: pointer;
    text-decoration: underline;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;

    input {
        background: #FAFAFA;
        border: 1px solid #333333;
        border-radius: 5px;
        margin: 20px 0px 0px 0px;
        padding: 10px;
        font-size: 16px;
        color: #333333;
        width: 100%;
    }

    button {
        background: #347ef6;
        color: #FAFAFA;
        font-weight: 500;
        font-size: 16px;
        margin: 10px 0px 0px 0px;
        border: none;
        border-radius: 5px;
        width: 100%;
        max-width: 200px;
        padding: 10px;
        cursor: pointer;
    }
`;
export const CenteredRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
        margin: 0px 10px 0px 0px;
    }
`;
export const CTA = styled.a`
    font-size: 24px;
    background: #347ef6;
    color: #FFFFFF;
    padding: 10px 15px;
    border-radius: 100px;
    cursor: pointer;
    z-index: 10;
    margin: -20px 0px 0px 0px;
`;
export const BGContainer = styled.div`
    width: 100vw;
    height: 100vw;
    max-height: 571px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const BGVideo = styled.video`
    position: absolute;
    max-width: min(571px, 100vw);
    aspectRatio: auto 1 / 1;
    height: auto;
    zIndex: 1;
    objectFit: cover;
`;