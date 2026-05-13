function includes(text, numbers) {
    if (numbers.length > text.length) return false;

    const countNumbers = {};
    for (let number of numbers) {