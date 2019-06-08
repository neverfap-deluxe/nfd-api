const fse = require('fs-extra');
const fs = require('fs');
const TurndownService = require('turndown')
const turndownService = new TurndownService()

// TODO replace the links within the md file to sections within the ebook itself.
const filterContent = (content) => (
  content
    .replace(/(?=<!--)([\s\S]*?)-->/g, '') // <!-- -->
    .replace(/<\/?a[^>]*>/g, '') // </ a tag references>
    .replace(/{{< hr[23456g] "/g, '\n\n### ')
    .replace(/{{< hr[1] "/g, '\n\n## ')
    .replace(/" >}}/g, '\n\n')
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

const extractData = (file, type) => {
  const { head, content } = getHead(file);
  const { title, date } = extractHeadContents(head);
  const new_list_item = { head, content, title, date };

  switch(type) {
    case "page":
      return {
        new_list_item,
        new_string_item: `# ${title}\n${content}\n\n\n`, // \n${date}
      }
      
    case "page_children":
      return {
        new_list_item,
        new_string_item: file === '_index.md' ? (
          `# ${title}\n\n\n` // \n${date}
        ) : (
          `\n${content}\n\n`
        )
      }

    case "content":
      return {
        new_list_item,
        new_string_item: `# ${title}\n${content}\n\n\n`, // \n${date}
      }
  }
}

const generatePage = async (folder) => {
  try {
    const file = await fse.readFile(`${folder}/_index.md`, 'utf8');
    let new_list = [];
    let new_string = '';
    if (file) {
      const { new_list_item, new_string_item } = extractData(file, 'page');
      new_list.push(new_list_item);
      new_string += new_string_item;
    }  
    return {
      list: new_list,
      string: new_string,
    }
  } catch (error) {
    throw new Error(`generatePage - ${error}`);
  }
}

const generatePageChildren = async (folder_path) => {
  const list = fs.readdirSync(folder_path);
  let new_list = [];
  let new_string = '';
  try {
    for (const file_name of list) {
      const file = await fse.readFile(`${folder_path}/${file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, 'page_children');
      new_list.push(new_list_item);
      new_string += new_string_item;
    }

    return {
      list: new_list,
      string: new_string,
    }
  } catch (error) {
    throw new Error(`generatePageChildren - ${error}`);
  }
}

const generateContent = async (folder) => {
  const list = fs.readdirSync(folder);
  let new_list = [];
  let new_string = '';
  try {
    for (const practice_file_name of list) {
      const file = await fse.readFile(`${folder}/${practice_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, 'content');
      new_list.push(new_list_item);
      new_string += new_string_item;
    }
    return {
      list: new_list,
      string: new_string,
    }
  } catch (error) {
    throw new Error(`generateContent - ${error}`);
  }
}

module.exports = {
  generatePage,
  generateContent,
  generatePageChildren,
};
