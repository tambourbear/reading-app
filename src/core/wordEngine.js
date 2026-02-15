export function createWordEngine(words) {
    let currentIndex = 0;

    function next() {
        currentIndex = Math.floor(Math.random() * words.length);
        return words[currentIndex];
    }

    function current() {
        return words[currentIndex];
    }

    return { next, current };
}
