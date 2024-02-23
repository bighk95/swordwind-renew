import React from 'react';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';
import MockData from './mock';

/**
 * matchInfo
 * {
 *  현규: {
 *      score: 100,
 *  },
 *  ...
 * }
 */

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    background: linear-gradient(#FFDBDF,#fff);
    border: 1px solid #E2E2E2;
    border-radius: 20px;

    background: ${props => 
        props.matchfinalresult === 'win' ? 'linear-gradient(#d6ecfa,#fff)':'linear-gradient(#FFE0E3,#fff)'}


    `

const ShowMatchDetails = styled.button`
    width: 100px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;

    background: ${props => 
        props.matchfinalresult === 'win' ? 'linear-gradient(#d6ecfa,#fff)':'linear-gradient(#FFE0E3,#fff)'}
`

const MatchResultRow = ({ matchInfo }) => {
    const matchFinalResult = Object.values(matchInfo)[0].matchFinalResult

    const ShowMatchDetailsButton = () => {
        alert(
            `딜량 : ${Object.values(matchInfo)[0].deal}
탱량 : ${Object.values(matchInfo)[0].tank}
힐량 : ${Object.values(matchInfo)[0].heal}`
        )
    }

    return (
        <Container matchfinalresult={matchFinalResult}>
            {Object.entries(matchInfo).map(([key, value]) => 
                <PlayerCard 
                    key={key} 
                    name={key} 
                    score={value.score}
                    matchfinalresult={value.matchFinalResult}
                />
            )}
            <ShowMatchDetails 
                className='showMatchDetails' 
                matchfinalresult={matchFinalResult}
                onClick={ShowMatchDetailsButton}
                >
                상세보기
            </ShowMatchDetails>
        </Container>
    );
};

export default MatchResultRow;