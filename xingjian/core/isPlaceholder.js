module.exports = function isPlaceholder(obj) {
    return obj !== null && typeof obj === "object" && obj["isPlaceholder"] === true;
};