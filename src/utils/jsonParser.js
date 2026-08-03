function parseJson(text) {
    let cleaned = text.trim();

    // 移除 Markdown JSON 標記
    cleaned = cleaned
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/```$/i, "");

    return JSON.parse(cleaned);
}

module.exports = {
    parseJson,
};