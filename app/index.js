var sub = require("./sub");
var app = document.createElement("div");
app.innerHTML = "<h1>Hell啊啊o aaa</h1>";
app.appendChild(sub());
document.body.appendChild(app);