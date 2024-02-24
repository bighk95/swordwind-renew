import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';
import MockData from './mock';

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    border: 1px solid #E2E2E2;
    border-radius: 20px;
    transition: background 0.5s ease;

    background: ${props => props.backgroundSetting(props.matchfinalresult, props.isButtonHovered)}
`

const ShowMatchDetails = styled.button`
    width: 100px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.5s ease;

    background: ${props => props.backgroundSetting(props.matchfinalresult, props.isButtonHovered)}
`

const MatchResultRow = ({ matchInfo }) => {
    const matchFinalResult = Object.values(matchInfo)[0].matchFinalResult
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const backgroundSetting = (matchFinalResult, isButtonHovered) => {
        if(matchFinalResult === 'win'){
            if(isButtonHovered){
                return '#AEDCFA'
            } else {
                return '#D6ECFA'
            }
        } else {
            if(isButtonHovered){
                return '#FFB7BE'
            } else {
                return '#FFE0E3'
            }
        }
    }

    const ShowMatchDetailsButton = () => {
        alert(
            `딜량 : ${Object.values(matchInfo)[0].deal}
탱량 : ${Object.values(matchInfo)[0].tank}
힐량 : ${Object.values(matchInfo)[0].heal}`
        )
    }

    return (
        <Container 
            matchfinalresult={matchFinalResult}
            isButtonHovered={isButtonHovered}
            backgroundSetting={backgroundSetting}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}>
                {Object.entries(matchInfo).map(([key, value]) => 
                    <PlayerCard 
                        key={key} 
                        name={key} 
                        score={value.score}
                        matchfinalresult={value.matchFinalResult}
                    />)
                }
                <ShowMatchDetails 
                    className='showMatchDetails' 
                    matchfinalresult={matchFinalResult}
                    isButtonHovered={isButtonHovered}
                    backgroundSetting={backgroundSetting}
                    onClick={ShowMatchDetailsButton}>
                    상세보기
                </ShowMatchDetails>
        </Container>
    );
};

export default MatchResultRow;