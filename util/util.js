const TurndownService = require('turndown')
const turndownService = new TurndownService()

const filterContent = (content) => (
  content
    .replace(/(?=<!--)([\s\S]*?)-->/g, '') // <!-- -->
    .replace(/<\/?a[^>]*>/g, '') // </ a tag references>
    .replace(/{{< hr[123456] "/g, '#### ')
    .replace(/>}}/g, '')
);

const getHead = (fileContents) => {
  const headRegex = new RegExp(/---(.|[\r\n])+---/);
  const head = fileContents.match(headRegex)[0];

  const rawWithHTMLContent = fileContents.split('---')[2];
  const rawWithMDContent = turndownService.turndown(rawWithHTMLContent);
  const content = filterContent(rawWithMDContent);

  return {
    head,
    content,
  }
}

const extractHeadContents = (headContents) => {
  const titleRegex = new RegExp(/title: .+/);
  const rawTitle = headContents.match(titleRegex)[0];
  const title = rawTitle.split('"')[1].replace('"', '');

  const dateRegex = new RegExp(/date: .+/);
  const rawDate = headContents.match(dateRegex)[0];
  const date = rawDate.split(':')[1];

  return {
    title,
    date,
  }
}

const extractPageData = (file, type) => {
  const { head, content } = getHead(file);
  const { title, date } = extractHeadContents(head);
  return {
    new_list_item: { head, content, title, date },
    new_string_item: `# ${title}\n${date}\n${content}\n\n\n`,
  }
}

const extractPageChildrenData = (file, type) => {
  const { head, content } = getHead(file);
  const { title, date } = extractHeadContents(head);
  if (file === '_index.md') {
    return {
      new_list_item: { head, content, title, date },
      new_string_item: `# ${title}\n${date}\n\n\n`,
    }
  }

  return {
    new_list_item: { head, content, title, date },
    new_string_item: `## ${title}\n${content}\n\n\n`,
  }
}

const extractData = (file, type) => {
  switch(type) {
    case "page": return extractPageData(file, type);
    case "page_children": return extractPageChildrenData(file, type);
  }
}

module.exports = {
  extractData,
};
