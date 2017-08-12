import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

function Pagination(props) {
    const Root = styled.div`
        position: fixed;
        top: 2.5rem;
        right: 2.5rem;
        border: 1px solid ${colors.border};
    `;

    const Anchor = styled(Link)`
        color: ${colors.heading};
        display: inline-block;
        padding: 0.25rem 1rem;
        background-color: #fff;
    `;

    return (
        <Root>
            {props.previous && <Anchor to={props.previous}>{`←`}</Anchor>}
            {props.next && <Anchor to={props.next}>{`→`}</Anchor>}
        </Root>
    );
}

export default Pagination;
