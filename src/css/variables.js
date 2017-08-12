export const colors = {
    bg: '#fff',
    border: '#e8e8e8',
    heading: '#000',
    highlight: '#f6f6f6',
    text: '#666',
    textWeak: '#ccc'
};

export const fonts = {
    heading: `'Roboto mono', monospace`,
    text: `'Roboto', sans-serif`
};

export const linkStyle = `
    border-bottom: 1px dotted ${colors.heading};
    color: ${colors.heading};

    &:hover {
        background-color: ${colors.heading};
        color: #fff;
    }
`;