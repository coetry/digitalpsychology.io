import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

function Header() {
    const Root = styled.header`
        flex: 0 0 auto;
        height: 100vh;
        width: 100px;
        padding: 2rem;
        border-right: 1px solid #ddd;
        display: flex;
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
