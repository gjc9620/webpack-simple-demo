function generateText () {
    var el = document.createElement("h2");
    el.innerHTML = "hello webpack";
    return el;
}

module.exports = generateText;