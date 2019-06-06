const getHead = (fileContents) => {
  const headRegex = new RegExp(/---(.|[\r\n])+---/);
  return {
    head: fileContents.match(headRegex)[0],
    content: fileContents.split('---')[2],
  }
}

const extractHeadContents = (headContents) => {
  const titleRegex = new RegExp(/title: .+/);
  const dateRegex = new RegExp(/date: .+/);

  return {
    title: headContents.match(titleRegex)[0],
    date: headContents.match(dateRegex)[0],
  }
}

const extractData = (file) => {
  const { head, content } = getHead(file);
  console.log(head)
  const { title, date } = extractHeadContents(head);
  return {
    newListItem: { head, content, title, date },
    newStringItem: `# ${title}\n${date}\n${content}\n`,
  }
}

module.exports = {
  extractData,
};
