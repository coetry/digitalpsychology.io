import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function Header(props) {
    const Root = styled.header`
        padding: 40vh 10vw 10vw;
    `;

    const H1 = styled.h1`
        font-size: 2rem;
        line-height: 1.4em;
        margin: 0;

        @media (min-width: 500px) {
            font-size: 2.2rem;
        }

        @media (min-width: 700px) {
            font-size: 2.4rem;
        }
    `;

    return (
        <Root>
            <H1>{props.title}</H1>
            {props.children}
        </Root>
    );
}

Header.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};

export default Header;
