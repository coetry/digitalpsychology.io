import { injectGlobal } from 'styled-components';

import { colors } from './variables';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300');

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        line-height: 1.6;

        @media (min-width: 500px) {
            font-size: 16px;
        }

        @media (min-width: 700px) {
            font-size: 18px;
        }
    }

    body {
        background-color: ${colors.bg};
        color: ${colors.text};
        margin: 0;
        padding: 0;
    }

    h1, h2, h3 {
        color: ${colors.heading};
        font-family: 'Roboto Mono', monospace;
        letter-spacing: 1px;
        line-height: 1;
        margin: 0 0 0.5em;
    }

    h1 {
        font-size: 3rem;
    }

    p {
        margin: 1rem 0;
    }

    a {
        color: #000;
        text-decoration: none;
        transition: color .25s ease;
    }

    ::selection {
        background-color: rgba(142, 253, 174, .99);
        color: ${colors.bg};
    }
`;
