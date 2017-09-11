import { injectGlobal } from 'styled-components';

import robotoWoff from './fonts/roboto-latin-300.woff';
import robotoWoff2 from './fonts/roboto-latin-300.woff2';
import robotoMonoWoff from './fonts/roboto-mono-latin-500.woff';
import robotoMonoWoff2 from './fonts/roboto-mono-latin-500.woff2';
import { colors, fonts } from './variables';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        src:
            local('Roboto Light'),
            local('Roboto-Light'),
            url(${robotoWoff2}) format('woff2'),
            url(${robotoWoff}) format('woff');
    }

    @font-face {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 500;
        src:
            local('Roboto Mono Medium'),
            local('RobotoMono-Medium'),
            url(${robotoMonoWoff2}) format('woff2'),
            url(${robotoMonoWoff}) format('woff');
    }

    * {
        box-sizing: border-box;
    }

    html {
        ${fonts.text}
        font-size: 14px;
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
        margin: 0;
        padding: 0;
    }

    h1, h2, h3 {
        ${fonts.heading}
    }

    h1 {
        font-size: 3rem;
        margin: 0 0 2.5rem;
        line-height: 1.2;
    }

    h2 {
        font-size: 1.5rem;
        margin: 2.5rem 0 1rem;
        line-height: 1.6;
    }

    h3 {
        font-size: 1rem;
        margin: 2.5rem 0 1rem;
        line-height: 1.6;
    }

    p {
        margin: 1rem 0;
    }

    a {
        text-decoration: none;
    }

    strong {
        font-weight: bold;
        color: ${colors.heading};
    }

    ::selection {
        background-color: rgba(0, 0, 0, .99);
        color: #fff;
    }
`;
