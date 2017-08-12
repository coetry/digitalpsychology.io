import React from 'react';
import styled from 'styled-components';

import { colors, linkStyle } from '../css/variables';
import Container from './Container';

export default function PostContent(props) {
    const Root = styled(Container)`
        margin: 7vw 10vw;

        img {
            border: 1px solid ${colors.border};
        }

        a {
            ${linkStyle}
        }
    `;

    return (
        <Root>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </Root>
    );

}
