import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

const Root = styled.header`
    display: flex;
    flex: 0 0 auto;
    overflow: hidden;
    padding: 2rem;

    @media (max-width: 699px) {
        border-bottom: 1px solid ${colors.border};
    }

    @media (min-width: 700px) {
        border-right: 1px solid ${colors.border};
        height: 100vh;
        width: 100px;
    }
`;

const Title = styled.h1`
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 0;
    transform-origin: top left;
    white-space: nowrap;

    @media (min-width: 700px) {
        transform: rotate(-90deg) translateX(-100%);
    }
`;

const Anchor = styled(Link)`
    color: ${colors.heading}
`;

function Header() {
    return (
        <Root>
            <Title>
                <Anchor to="/">
                    {`Digital Psychology`}
                </Anchor>
            </Title>
        </Root>
    );
}

export default Header;
