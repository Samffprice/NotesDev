

function convertParagraphsToJson(paragraphs, pageId) {
    const result = [];

    // Split paragraphs by fully blank lines
    const paragraphArray = paragraphs.split('\n\n');

    for (const para of paragraphArray) {
        const lines = para.split('\n');
        const heading = lines[0];
        const text = lines.slice(1).join('\n'); // Join remaining lines as text

        // Create the JSON structure
        const jsonEntry = {
            parent: { page_id: pageId },
            properties: {
                title: {
                    title: [{ type: 'text', text: { content: heading } }],
                },
            },
            children: [
                {
                    object: 'block',
                    type: 'paragraph',
                    paragraph: {
                        rich_text: [{ type: 'text', text: { content: text } }],
                    },
                },
            ],
        };

        result.push(jsonEntry);
    }

    return result;
}

module.exports = {
    convertParagraphsToJson,
};