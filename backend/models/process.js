const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

function convertParagraphsToNotionBlocks(paragraphs) {
    const result = [];

    // Split paragraphs by fully blank lines
    const paragraphArray = paragraphs.split('\n\n');

    for (const para of paragraphArray) {
        const lines = para.split('\n');
        const heading = lines[0];
        const text = lines.slice(1).join('\n'); // Join remaining lines as text

        // Create the Notion block
        const block = {
            "object": "block",
            "type": "paragraph",
            "paragraph": {
                "rich_text": [{
                    "type": "text", "text": {"content": text}
                }]
            },
            }
        // Add the block to the result
        result.push(block);
    }

    return result;
}


function convertParagraphsToJson(text, pageId) {
    const json ={
        "parent": { "page_id": pageId },
        "properties": {
        "title": {
            "title": [{ "type": "text", "text": { "content": "From API" } }]
        }
    },
        "children": convertParagraphsToNotionBlocks(text)
    }


    return json;
}


module.exports = {
    convertParagraphsToJson,
};