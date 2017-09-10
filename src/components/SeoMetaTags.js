import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

function SeoMetaTags(props) {
    const twitterHandle = props.twitterHandle[0] === '@'
        ? props.twitterHandle
        : `@${props.twitterHandle}`;

    const tags = [
        { property: 'fb:app_id', content: props.facebookAppId },
        { property: 'og:description', content: props.description },
        { property: 'og:image', content: props.image },
        { property: 'og:title', content: props.title },
        { property: 'og:type', content: props.type },
        { property: 'og:url', content: props.url },
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

            <link href={props.url} rel="canonical" />
        </Helmet>
    );
}

SeoMetaTags.propTypes = {
    description: PropTypes.string,
    facebookAppId: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    twitterHandle: PropTypes.string,
    type: PropTypes.oneOf([
        'article', 'book', 'music.album', 'music.playlist', 'music.song',
        'profile', 'video.episode', 'video.movie', 'video.other', 'video.tv_show',
        'website'
    ]),
    url: PropTypes.string
};

export default SeoMetaTags;
