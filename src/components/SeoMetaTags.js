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
        { property: 'og:image', content: props.image.url },
        { property: 'og:title', content: props.title },
        { property: 'og:type', content: props.type },
        { property: 'og:url', content: props.url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: twitterHandle },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:title', content: props.title },
        { name: 'twitter:description', content: props.description },
        { name: 'twitter:image', content: props.image.url }
    ];

    const schemaOrg = {
        article: {
            '@context': 'http://schema.org',
            '@type': 'Article',
            mainEntityOfPage: props.url,
            headline: props.title,
            image: {
                '@type': 'ImageObject',
                ...props.image
            },
            publisher: {
                '@type': 'Organization',
                name: props.publisher,
                logo: {
                    '@type': 'ImageObject',
                    ...props.logo
                }
            },
            author: {
                '@type': 'Person',
                name: props.author
            },
            description: props.description,
            datePublished: props.datePublished
        },
        website: {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            url: props.url,
            logo: props.logo.url
        }
    };

    return (
        <Helmet title={props.title}>
            {tags.map((tag, index) =>
                <meta {...tag} key={index} />
            )}

            <link href={props.url} rel="canonical" />

            {schemaOrg[props.type] && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrg[props.type])}
                </script>
            )}
        </Helmet>
    );
}

SeoMetaTags.propTypes = {
    author: PropTypes.string,
    dateModified: PropTypes.string,
    datePublished: PropTypes.string,
    description: PropTypes.string,
    facebookAppId: PropTypes.string,
    image: PropTypes.shape({
        url: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
    }),
    logo: PropTypes.shape({
        url: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number
    }),
    publisher: PropTypes.string,
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
