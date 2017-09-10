import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SeoMetaTags from '../components/SeoMetaTags';
import config from '../../gatsby-config';
import '../css/global';
import image from './seo-image.png';

function Template(props) {
    const Root = styled.div`
        display: flex;
        flex-direction: column;
        height: 100vh;

        @media (min-width: 700px) {
            flex-direction: row;
        }
    `;

    const Main = styled.div`
        flex: 1;
        overflow: auto;
    `;

    return (
        <Root>
            <SeoMetaTags
                description={config.siteMetadata.description}
                facebookAppId={config.siteMetadata.facebookAppId}
                image={config.siteMetadata.baseUrl + image}
                title={config.siteMetadata.title}
                twitterHandle={config.siteMetadata.twitterHandle}
                type="website"
                url={config.siteMetadata.baseUrl} />
            <Header />
            <Main>
                {props.children()}
                <Footer twitterHandle={config.siteMetadata.twitterHandle} />
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
