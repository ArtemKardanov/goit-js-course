function formatString(string) {
    console.log('string-length: ', string.length)

    if (string.length <= 40) {
        return string

    } else if (string.length > 40) {
        const newString = string.slice(0, 40) + '...';
        return newString;
    }

}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// вернется форматированная строка