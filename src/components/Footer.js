import React from 'react';
import styled from 'styled-components';

function Footer() {
    const Root = styled.footer`
        padding: 10vw;
    `;

    return (
        <Root>
            {`Built by Daniel Stefanovic`}
        </Root>
    );
}

export default Footer;
