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

    background: ${props => props.$backgroundSetting(props.matchfinalresult, props.$isbuttonhovered)}
`

const ShowMatchDetails = styled.button`
    width: 100px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.5s ease;

    background: ${props => props.$backgroundSetting(props.matchfinalresult, props.$isbuttonhovered)}
`

const MatchResultRow = ({ matchInfo }) => {
    const [open, setOpen] = useState(false);
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
        setOpen(prev => !prev);
    }

    return (
        <Container 
        matchfinalresult={matchFinalResult}
        $isbuttonhovered={isButtonHovered}
        $backgroundSetting={backgroundSetting}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        >
            {Object.keys(matchInfo) // ['현규', '인태', '민규'...]
                .sort((a, b) => matchInfo[b].score - matchInfo[a].score) // ['인태', '민규', '현규' ...]
                .map((name, index) =>  // matchInfo 는 Object이기때문에 순서가 없음.
                <PlayerCard 
                key={name} 
                name={name} 
                score={matchInfo[name].score}
                matchfinalresult={matchInfo[name].matchFinalResult}
                rank={index+1+'등'}
                />)
            }
            <ShowMatchDetails 
                className='showMatchDetails'
                matchfinalresult={matchFinalResult}
                $isbuttonhovered={isButtonHovered}
                $backgroundSetting={backgroundSetting}
                onClick={ShowMatchDetailsButton}>
                상세보기
            </ShowMatchDetails>
            {
                open ? <div>빅현규 : </div> : null
            }
        </Container>
    );
};

export default MatchResultRow;