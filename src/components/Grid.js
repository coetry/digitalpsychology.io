import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

function Grid(props) {
    const Root = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
    `;

    const Item = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 14vw;

        font-family: 'Zilla Slab', serif;
        font-weight: 400;
        font-size: 1rem;
        background-color: ${colors.accent};
        color: #000;
        letter-spacing: 1px;
    `;

    const Image = styled.img`
        width: 75px;
        height: 75px;
        margin-bottom: 2rem;
    `;

    return (
        <Root>
            {props.items.map((item, index) => (
                <Item key={index} to={item.path}>
                    <Image src={`${__PATH_PREFIX__}/${item.slug}.svg`} />
                    {item.title}
                </Item>
            ))}
        </Root>
    );
}

Grid.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};

export default Grid;
