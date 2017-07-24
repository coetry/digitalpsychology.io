import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

function Grid(props) {
    const Root = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
    `;

    const Item = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: #f6f6f6;
        padding: 4vw;
        font-family: 'Zilla Slab', serif;
        font-weight: 400;
        font-size: 1rem;
        color: #000;
        letter-spacing: 1px;
        text-align: center;
        transition: all .35s ease;

        img {
            width: 6vw;
            height: 6vw;
            margin-bottom: 1.5vw;
            transform: translateY(0);
            transition: all .35s ease;
        }

        &:hover {
            background-color: #fafafa;
        }

        &:hover img {
            transform: scale(1.1);
        }
    `;

    return (
        <Root>
            {props.items.map((item, index) => (
                <Item key={index} to={item.path}>
                    <img src={`${__PATH_PREFIX__}/${item.slug}.svg`} />
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
