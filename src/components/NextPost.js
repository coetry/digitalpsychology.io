import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { linkStyle } from '../css/variables';

function NextPost(props) {
    if (!props.to) return null;

    const Root = styled.div`
        padding: 0 10vw 7vw;
    `;

    const Anchor = styled(Link)`
        ${linkStyle}
    `;

    return (
        <Root>
            <h3>
                <Anchor to={props.to}>
                    {`Next: ${props.title}`}
                </Anchor>
            </h3>
        </Root>
    );
}

export default NextPost;
