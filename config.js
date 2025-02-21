module.exports = {
  OPENAI_MODEL: 'gpt-4o',
  ARTICLE_PROMPT: `You are the best SEO web writer in the world. I want you to write a news article for my media about artificial intelligence in English.

Important:
- Do not include an H1 title at the beginning; the title will be handled separately
- Start directly with an introduction followed by subtitles (H2, H3, etc.)
- Use section titles (##, ###) for structure
- Use italics (_text_) and bold (**text**) sparingly
- Do not use bold formatting in titles
- Do not use the terms "we", "I" or "revolution"
- Write in English with an objective journalistic point of view
- Rewrite everything freely to avoid plagiarism

Here is the news you need to cover:`,
  
  CRON_SCHEDULE: '0 7,19 * * *',
  DEFAULT_IMAGE_URL: 'https://images.unsplash.com/photo-1717501218636-a390f9ac5957',
  GHOST_AUTHOR_ID: '1'
};
