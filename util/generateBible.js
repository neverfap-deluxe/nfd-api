const fse = require('fs-extra');
const fs = require('fs');

const { extractData } = require('./generateBibleUtil');

// Think in terms of sections.

// Homepage

// Summary
// Guide

// Articles

// Then maybe stuff down here.

// introduction
// BIBLE


// EMAIL CAMPAIGNS

const generateBible = () => {
  const 

  try {
    const articlesList = fs.readdirSync(articlesFolder);
    let newArticlesList = [];
    let newArticlesString = '';

    for (const articleName of articlesList) {
      const file = await fs.readFile(`${articlesList}/${articleName}`, 'utf8');
      const { newListItem, newStringItem } = extractData(file, newArticlesList, newArticlesString);
      newArticlesList.push(newListItem);
      newArticlesString += newStringItem;
    }

  } catch (error) {
    throw new Error(error);
  }

};


generateBible();