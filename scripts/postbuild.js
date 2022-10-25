const fs = require("node:fs");
const package = require("../package.json");

fs.writeFile(
  "package.json",
  JSON.stringify(
    {
      type: "module",
      ...package,
    },
    null,
    2
  ),
  () => {}
);
