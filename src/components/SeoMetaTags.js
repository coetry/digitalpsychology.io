import React from 'react';
import Helmet from 'react-helmet';

export default function SeoMetaTags(props) {
    const twitterHandle = props.twitterHandle[0] === '@'
        ? props.twitterHandle
        : `@${props.twitterHandle}`;

    const tags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: twitterHandle },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:title', content: props.title },
        { name: 'twitter:description', content: props.description },
        { name: 'twitter:image', content: props.image }
    ];

    return (
        <Helmet title={props.title}>
            {tags.map((tag, index) =>
                <meta {...tag} key={index} />
            )}
        </Helmet>
    );
}
