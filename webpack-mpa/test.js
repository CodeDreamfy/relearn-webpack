const fs = require("fs");
const path = require("path");
const pagesRoot = "./src/pages";
const pageEntry = {};

function generateEntry() {
  const pages = fs.readdirSync(pagesRoot);
  pages.forEach((name, index) => {
    const url = path.join(__dirname, name);
    if (fs.statSync(url).isDirectory()) {
      pageEntry[name] = `${pagesRoot}/${name}`;
    }
  });
}
generateEntry();
