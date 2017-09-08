import React from 'react';
import styled from 'styled-components';

import { colors, fonts, linkStyle, sizes } from '../css/variables';
import Container from './Container';
import OutgoingLink from './OutgoingLink';

function Footer() {
    const Root = styled.div`
        padding: ${sizes.l} ${sizes.xl};
        background-color: ${colors.highlight};
        border-top: 1px solid ${colors.border};

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li + li {
            margin-top: 1rem;
        }

        a {
            ${linkStyle}
        }
    `;

    const Info = styled.div`
        margin-bottom: 2.5rem;
    `;

    const Anchor = styled(OutgoingLink)`
        color: ${colors.heading};
        font-family: ${fonts.heading};
        font-weight: bold;
        letter-spacing: 1px;
    `;

    const tweet = `100+ ways to add psychology to your digital product`;

    return (
        <Root>
            <Container>
                <Info>
                    {`Digital Psychology – a free library of psychological principles
                    and examples for inspiration to enhance customer experience and
                    influence your user's behavior. `}

                    Written by <OutgoingLink to="https://twitter.com/danistefanovic">Daniel Stefanovic</OutgoingLink>.
                </Info>

                <ul>
                    <li>
                        <Anchor to="http://bit.ly/digital-psychology-updates">
                            {`Subscribe to updates`}
                        </Anchor>
                    </li>
                    <li>
                        <Anchor to={`http://twitter.com/share?text=${encodeURIComponent(tweet)}&url=http://digitalpsychology.io`}>
                            {`Share on Twitter`}
                        </Anchor>
                    </li>
                </ul>
            </Container>
        </Root>
    );
}

export default Footer;
