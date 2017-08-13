export const colors = {
    bg: '#fff',
    border: '#eaeaea',
    heading: '#000',
    highlight: '#f9f9f9',
    text: '#666',
    textWeak: '#ccc'
};

export const fonts = {
    heading: `'Roboto mono', monospace`,
    text: `'Roboto', sans-serif`
};

export const sizes = {
    xl: '15vw',
    l: '12vw'
};

export const linkStyle = `
    border-bottom: 1px dotted ${colors.heading};
    color: ${colors.heading};

    &:hover {
        background-color: ${colors.heading};
        color: #fff;
    }
`;