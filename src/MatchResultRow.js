import React, { useState } from 'react';
import PlayerDetailsCard from './PlayerDetailsCard';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';

const TotalContainer = styled.div`
`

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    border: 1px solid #E2E2E2;
    border-radius: 20px;
    transition: background 0.5s ease;

    background: ${props => props.$backgroundSetting(props.matchfinalresult, props.$isbuttonhovered)};
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
    const [matchDetailsOpen, setMatchDetailsOpen] = useState(false);
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
        setMatchDetailsOpen(prev => !prev);
    }
    
    return (
        <TotalContainer>
            {
                matchDetailsOpen ? 
                <Container 
                matchfinalresult={matchFinalResult}
                $isbuttonhovered={isButtonHovered}
                $backgroundSetting={backgroundSetting}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                >
                    {Object.keys(matchInfo)
                        .sort((a, b) => matchInfo[b].score - matchInfo[a].score)
                        .map((name, index) =>
                        <PlayerCard 
                        key={name} 
                        name={name} 
                        score={matchInfo[name].score}
                        matchfinalresult={matchInfo[name].matchFinalResult}
                        rank={index+1+'등'}
                        playerchamp={matchInfo[name].champ}
                        />)
                    }
                    {Object.keys(matchInfo)
                        .sort((a, b) => matchInfo[b].score - matchInfo[a].score) 
                        .map((name) => 
                        <PlayerDetailsCard 
                        key={name} 
                        name={name} 
                        deal={matchInfo[name].deal}
                        tank={matchInfo[name].tank}
                        heal={matchInfo[name].heal}
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
                </Container>
                : 
                <Container 
                    matchfinalresult={matchFinalResult}
                    $isbuttonhovered={isButtonHovered}
                    $backgroundSetting={backgroundSetting}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                >
                    {Object.keys(matchInfo) 
                        .sort((a, b) => matchInfo[b].score - matchInfo[a].score) 
                        .map((name, index) =>
                        <PlayerCard 
                        key={name} 
                        name={name} 
                        score={matchInfo[name].score}
                        matchfinalresult={matchInfo[name].matchFinalResult}
                        rank={index+1+'등'}
                        playerchamp={matchInfo[name].champ}
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
                </Container>
            }
        </TotalContainer>
    );
};

export default MatchResultRow;