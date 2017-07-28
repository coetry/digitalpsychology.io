import React from 'react';
import styled from 'styled-components';

function Raster(props) {
    const size = props.size;
    const grid = [];

    for (let i = 1; i <= (size * size); i++) {
        grid.push(props.points.includes(i) ? 1 : 0);
    }

    const Root = styled.div`
        display: grid;
        grid-template-columns: repeat(${size}, 1fr);
        grid-gap: 1px;
        width: 50vh;
        height: 50vh;
    `;

    const Point = styled.div`
        background-color: ${(props) => {
            return props.active ? '#ddd' : 'transparent';
        }};
    `;

    return (
        <Root>
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
