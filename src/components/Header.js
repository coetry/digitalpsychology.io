import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

function Header() {
    const Root = styled.header`
        border-right: 1px solid ${colors.border};
        display: flex;flex: 0 0 auto;
        padding: 2rem;
        height: 100vh;
        width: 100px;
    `;

    const Title = styled.h1`
        font-size: 1rem;
        letter-spacing: 1px;
        transform: rotate(-90deg) translateX(-100%);
        transform-origin: top left;
        white-space: nowrap;
    `;

    return (
        <Root>
            <Link to="/">
                <Title>
                    {`Digital Psychology`}
                </Title>
            </Link>
        </Root>
    );
}

export default Header;
