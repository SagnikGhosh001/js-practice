const wc = (fileName) => {
  const contents = Deno.readTextFileSync(fileName);
  const totalChar = contents.split("").length;
  const totalLine = contents.split("\n").length - 1;
  const totalWord = contents.trim().split(" ").length;
  console.log(`\t${totalLine}\t${totalWord}\t${totalChar} ${fileName}`);
};

wc("file.txt");
