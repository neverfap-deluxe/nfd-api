const getHead = (fileContents) => {
  const headRegex = new RegExp(/---(.|[\r\n])+---/);
  return {
    head: fileContents.match(headRegex),
    content: fileContents.split('---')[2],
  }
}

const extractHeadContents = (headContents) => {
  const titleRegex = new RegExp(/title: .+/);
  const dateRegex = new RegExp(/date: .+/);

  return {
    title: headContents.match(titleRegex),
    date: headContents.match(dateRegex),
  }
}

const extractData = (file, newList, newString) => {
  const { head, content } = getHead(file);
  const { title, date } = extractHeadContents(head);
  return {
    newListItem: { head, content, title, date },
    newStringItem: `# ${title}\n${date}\n${content}\n`,
  }
}

module.exports = {
  extractData,
};
