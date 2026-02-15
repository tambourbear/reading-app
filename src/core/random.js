export function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomItemExcept(array, exclude) {
    const filtered = array.filter(item => item !== exclude);
    return randomItem(filtered);
}
