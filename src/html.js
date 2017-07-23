import React from 'react';
import PropTypes from 'prop-types';

import { colors } from './css/variables';
import favicon from './favicon.png';

function HTML(props) {
    return (
        <html lang="en">
            <head>
                <link href={favicon} rel="shortcut icon" />
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content={colors.bg} name="theme-color" />
                <meta
                    content="width=device-width, initial-scale=1.0"
                    name="viewport" />
                {props.headComponents}
            </head>
            <body>
                <div
                    dangerouslySetInnerHTML={{ __html: props.body }}
                    id="___gatsby" />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    body: PropTypes.string,
    headComponents: PropTypes.any,
    postBodyComponents: PropTypes.any
};

export default HTML;
