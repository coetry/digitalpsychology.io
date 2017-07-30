import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

function NextPost(props) {
    const Root = styled(Link)`
        position: fixed;
        top: 50vh;
        right: 0;
        margin-top: -1.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid #ddd;
        background-color: #fff;
    `;

    return <Root to={props.to}>{`→`}</Root>;
}

export default NextPost;
