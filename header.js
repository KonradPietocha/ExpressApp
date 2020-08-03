const header1 = (text, style) => {
    return `<h1 style=${style}>${text}</h1>`;
};

const headerCenter2 = text => {
    return `<h2 style="text-align:center">${text}</h2>`;
};

module.exports = {
    header1,
    headerCenter2
};