const fse = require('fs-extra');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const generateRandomDate = (start, end) => {
  var d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime())),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const generateTemplate = (title, slug, pageId, date) => 
`---
  title: "${title}"
  description: "NeverFap Deluxe Quotes | ${title}"
  date: ${date}
  draft: false
  tags: [ "quotes" ]
  categories: [ "index" ]

  slug: "${slug}"

  pageId: "${pageId}"

  imageUrl: "https://neverfapdeluxe.netlify.com/content_quotes/${slug}.png"
---

some random words to valdate or something.
`;

const quotesFolder = './content/quotes/';

const filteredQuoteList = (list) => (
  list.filter(fileName => {
    const nameWithoutExtension = fileName.split('.')[0];
    return fileName.includes('.png') && !list.find(item => item === `${nameWithoutExtension}.md`);
  })
);
const capitaliseFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const generateFiles = () => {
  const quoteList = fs.readdirSync(quotesFolder);
  const properList = filteredQuoteList(quoteList);

  for (file of properList) {
    const nameWithoutExtension = file.split('.')[0];
    const properTitle = nameWithoutExtension.split('-').map(name => capitaliseFirstLetter(name)).join(' ');
    const pageId = uuidv4();
    const randomDate = generateRandomDate(new Date('2019', '01'), new Date());
    const template = generateTemplate(properTitle, nameWithoutExtension, pageId, randomDate);
    
    fse.outputFileSync(`${quotesFolder}${nameWithoutExtension}.md`, template);
  }
}

generateFiles();

