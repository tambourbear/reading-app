export function highlightWord(word, patterns) {
    let result = word;

    patterns.forEach(pattern => {
        const regex = new RegExp(pattern, "gi");
        result = result.replace(regex, match => {
            return `<span class="highlight">${match}</span>`;
        });
    });

    return result;
}
