import React from 'react';
import Card from './Card';
import styled from 'styled-components';
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
    margin-bottom: 10px;

`

const MatchResultRow = ({ matchInfo }) => {
    return (
        <Container>
            {Object.entries(matchInfo).map(([key, value]) => <Card name={key} score={value.score}  /> )}
        </Container>
    );
};

export default MatchResultRow;