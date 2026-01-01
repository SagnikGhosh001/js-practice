import { htmlToText } from "npm:html-to-text";

const res = await fetch("https://buffer.com/social-media-terms/vlog");

const text = await res.text();
const realText = htmlToText(text, {
  wordWrap: 100,
});

console.log(realText);
