import PropTypes from 'prop-types';
import React from 'react';

function OutgoingLink(props) {
    return (
        <a
            href={props.to}
            rel="noopener noreferrer"
            target="_blank">

            {props.children}
        </a>
    );
}

OutgoingLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string
};

export default OutgoingLink;
