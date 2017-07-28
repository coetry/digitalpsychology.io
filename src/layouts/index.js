import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import config from '../../gatsby-config';
import '../css/global';

function Template(props) {
    const Root = styled.div`
        display: flex;
        height: 100vh;
    `;

    const Main = styled.div`
        flex: 1;
        overflow: auto;
    `;

    return (
        <Root>
            <Helmet title={config.siteMetadata.title} />
            <Header />
            <Main>
                {props.children()}
            </Main>
        </Root>
    );
}

Template.propTypes = {
    // This is not a typo. It has to be a function:
    // https://github.com/gatsbyjs/gatsby/pull/940#issuecomment-300878300
    children: PropTypes.func
};

export default Template;
