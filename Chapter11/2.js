function parseUserInput(userText) {
    try {
        const userData = JSON.parse(userText);
        return `Success! Name: ${userData.name}`;
    } catch (error) {
        return "Sorry, the text you entered is not valid JSON.";
    }
}

console.log(parseUserInput('{"name":"Rahim"}'));
console.log(parseUserInput('{name: Rahim}'));