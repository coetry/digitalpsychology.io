import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

const Root = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.size}, 1fr);
    grid-gap: 1px;
    width: 25vw;
    height: 25vw;
`;

const Point = styled.div`
    background-color: ${(props) => (props.active ? colors.border : 'transparent')};
`;

function Raster(props) {
    const size = props.size;
    const grid = [];

    for (let i = 1; i <= (size * size); i++) {
        grid.push(props.points.includes(i) ? 1 : 0);
    }

    return (
        <Root size={size}>
            {grid.map((active, index) => (
                <Point
                    active={active}
                    index={index}
                    key={index} />
            ))}
        </Root>
    );
}

export default Raster;
