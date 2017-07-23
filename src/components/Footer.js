import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

function Header() {
    const Root = styled.footer`
        padding: 10vw;
    `;

    return (
        <Root>
            {`Built by Daniel Stefanovic`}
        </Root>
    );
}

export default Header;
