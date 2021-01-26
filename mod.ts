function bokusen(content: string) {
  const { columns } = Deno.consoleSize(Deno.stdout.rid);
  let text: string;
  if (content.length > columns - 4) {
    const re = `(?![^\n]{1,${columns - 4}}$)([^\n]{1,${columns - 4}})`;
    const wrapped = content.match(RegExp(re, "g"))?.join(" \u2502\n\u2502 ");
    text = "\u250c" + "\u2500".repeat(columns - 2) +
      "\u2510\n\u2502 " + wrapped + " \u2502\n\u2514" +
      "\u2500".repeat(columns - 2) + "\u2518";
  } else {
    text = "\u250c" + "\u2500".repeat(content.length + 2) +
      "\u2510\n\u2502 " + content + " \u2502\n\u2514" +
      "\u2500".repeat(content.length + 2) + "\u2518";
  }
  console.log(text);
}

bokusen("hello world");

export default bokusen;
