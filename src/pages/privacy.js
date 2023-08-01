import React from 'react'
import styled from 'styled-components'
const game_center_agreement = "https://www.apple.com/legal/privacy/data/en/game-center/#:~:text=Game%20Center%20retains%20the%20information,with%20your%20Game%20Center%20account.&text=We%20collect%20personal%20data%20to,other%20Apple%20apps%20and%20services.";

export default function Privacy() {
    return <Outer>
        <Title>Privacy</Title>
        <Body>
            By playing Trapped In Here With Me on iOS, you have the option to log in with Apple Game Center and participate in the global leaderboard.
            <br/><br/>
            In doing so, you agree to the <Link href={game_center_agreement}>Apple Game Center privacy agreement.</Link>
            <br/><br/>
            I, James Korin, the developer of Trapped In Here With Me, do not collect or store any information about you, the user/player.
        </Body>
    </Outer>;
}

const Outer = styled.div`
    background: #FAFAFA;
    min-height: 100vh;
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 100px 20px;
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
`;
const Body = styled.div`
    max-width: 500px;
    margin: 20px 0px 0px 0px;
    font-size: 16px;
`;
const Link = styled.a`
    color: #347EF6;
    cursor: pointer;
    text-decoration: underline;
`;