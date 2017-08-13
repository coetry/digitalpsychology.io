import React from 'react';

export default function OutgoingLink(props) {
    return (
        <a
            className={props.className}
            href={props.to}
            rel="noopener noreferrer"
            target="_blank">

            {props.children}
        </a>
    );
}
