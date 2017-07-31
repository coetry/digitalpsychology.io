import React from 'react';
import styled from 'styled-components';

import PostContent from './PostContent';

function Intro() {
    const Root = styled(PostContent)`
        margin: 8vw 10vw 2rem;
    `;

    return (
        <Root>
            {`This is a library of psychological principles and patterns
            which can be applied to digital products and marketing to enhance
            customer experience and influence our behavior. `}

            Written by <a href="http://danielstefanovic.com">Daniel Stefanovic</a>.
        </Root>
    );
}

export default Intro;
