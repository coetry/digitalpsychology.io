import Link from 'gatsby-link';
import leftPad from 'left-pad';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors, fonts, sizes } from '../css/variables';
import convertRaster from '../utils/convertRaster';
import Raster from './Raster';

const Root = styled.ul`
    padding: 0;
    margin: ${sizes.l} 0;
    list-style: none;
`;

const Item = styled(Link)`
    ${fonts.heading}
    font-size: 1rem;
    line-height: 1.2;
    position: relative;
    display: flex;
    justify-content: flext-start;
    align-items: center;
    flex-direction: row;
    padding: 1rem ${sizes.xl};

    figure {
        position: absolute;
        top: -9vw;
        right: ${sizes.xl};
        margin: 0;
        opacity: 0;
        transition: all .15s ease;
        pointer-events: none;
        opacity: 0;
        z-index: -1;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        color: ${colors.heading};
    }

    &:hover figure {
        opacity: 1;
    }
`;

const Index = styled.span`
    ${fonts.heading}
    color: ${colors.textWeak};
    display: inline-block;
    margin-right: 2rem;
`;

const Title = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

function PatternList(props) {
    return (
        <Root>
            {props.items.map((item, index) => (
                <li key={index}>
                    <Item to={item.path}>
                        <figure>
                            <Raster points={convertRaster(20, item.image)} size={20} />
                        </figure>

                        <Index>{leftPad(index + 1, 3, '0')}</Index>
                        <Title>{item.title}</Title>
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
