var ClozeCard = function(text, cloze) {
    this.front = text.replace(cloze, "").trim();
    this.back = cloze;
};

module.exports = ClozeCard;
