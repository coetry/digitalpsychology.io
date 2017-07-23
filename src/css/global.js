import { injectGlobal } from 'styled-components';

import { colors } from './variables';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Rubik:300');
    @import url('https://fonts.googleapis.com/css?family=Zilla+Slab:400,500');

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 14px;
        font-family: 'Rubik', sans-serif;
        font-weight: 300;

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
        font-family: 'Zilla Slab', serif;
        font-weight: 500;
        margin: 0 0 1rem;
    }

    h1 {
        font-size: 2.4rem;
    }

    p {
        line-height: 1.6em;
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
