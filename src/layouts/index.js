import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import config from '../../gatsby-config';
import '../css/global';

function Template(props) {
    return (
        <div>
            <Helmet title={config.siteMetadata.title} />
            {props.children()}
        </div>
    );
}

Template.propTypes = {
    // This is not a typo. It has to be a function:
    // https://github.com/gatsbyjs/gatsby/pull/940#issuecomment-300878300
    children: PropTypes.func
};

export default Template;
