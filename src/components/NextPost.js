import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { linkStyle, sizes } from '../css/variables';

const Root = styled.div`
    padding: 0 2rem ${sizes.l};

    @media (min-width: 500px) {
        padding: 0 ${sizes.xl} ${sizes.l};
    }
`;

const Anchor = styled(Link)`
    ${linkStyle}
`;

function NextPost(props) {
    if (!props.to) return null;

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
