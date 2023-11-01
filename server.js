const express = require("express");
const app = express();
const path = require("path");
const appName = "flutterflow-seo-poc";

app.use(express.static(__dirname + `/dist/${appName}`));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`));
});
app.listen(process.env.PORT || 8080);
