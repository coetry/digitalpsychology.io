/* global __PATH_PREFIX__  */

import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

function PatternList(props) {
    const Root = styled.ul`
        padding: 0;
    `;

    const Item = styled(Link)`
        display: flex;
        justify-content: flext-start;
        align-items: center;
        flex-direction: row;

        padding: 1rem 10vw;
        font-family: 'Zilla Slab', serif;
        font-weight: 400;
        font-size: 2rem;
        line-height: 1;
        color: ${colors.heading};
        letter-spacing: 1px;
        text-align: center;
        transition: all .35s ease;

        img {
            position: fixed;
            top: 23vh;
            right: 10vw;
            width: 50vh;
            height: 50vh;
            opacity: 0;
            transition: all .15s ease;
            pointer-events: none;
        }

        &:hover {
            background-color: ${colors.highlight};
        }

        &:hover img {
            opacity: 1;
        }
    `;

    return (
        <Root>
            {props.items.map((item, index) => (
                <li key={index}>
                    <Item to={item.path}>
                        <img src={`${__PATH_PREFIX__}/${item.slug}.svg`} />

                        {item.title}
                    </Item>
                </li>
            ))}
        </Root>
    );
}

PatternList.propTypes = {
    children: PropTypes.node,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
        slug: PropTypes.string
    }))
};

export default PatternList;
