function bokusen(content:string) {
    const text = "\u250c" + "\u2500".repeat(content.length + 2) + "\u2510\n\u2502 "  + content + " \u2502\n\u2514" + "\u2500".repeat(content.length + 2) + "\u2518";
    console.log(text);
}

bokusen("hello world")