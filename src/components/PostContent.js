import styled from 'styled-components';

import { colors } from '../css/variables';
import Container from './Container';

export default styled(Container)`
    img {
        border: 1px solid ${colors.border};
    }

    a {
        border-bottom: 1px dotted #000;
        color: #000;

        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`;
