const fse = require('fs-extra');
const fs = require('fs');

const {
  homeFolder,
  guideFolder,
  summaryFolder,
  // post_relapse_academyFolder,
  // emergencyFolder,

  articlesFolder,
  practicesFolder,
  // coursesFolder,
  // podcastsFolder,
  // quotesFolder,
  // meditationsFolder,
  // blogsFolder,
  // updatesFolder,

  seven_day_kickstarterFolder,

  aboutFolder,
  accountabilityFolder,
  coachingFolder,
  donationsFolder,
  reddit_guidelinesFolder,
  promote_neverfap_deluxeFolder,
  helpful_neverfappers_academyFolder,
  neverfap_deluxe_leagueFolder,
  communityFolder,

  mobile_appFolder,
  desktop_appFolder,
  chrome_extensionFolder,

  disclaimerFolder,
  privacyFolder,
  terms_and_conditionsFolder,

  // everythingFolder,
  // never_fapFolder,
  // neverfap_deluxe_bibleFolder,
  // contactFolder,
} = require('./generateBibleConst');

const { extractData } = require('./generateBibleUtil');

// Think in terms of sections.

// Homepage

// Summary
// Guide

// Articles

// EMAIL CAMPAIGNS

const generateBible = () => {
  const articlesList = fs.readdirSync(articlesFolder);
  const practicesList = fs.readdirSync(practicesFolder);

  let newArticlesList = [], newPracticesList = [];
  let newArticlesString = '', newPracticesString = '';

  // Introduction


  // Homepage


  // Articles
  try {
    for (const articleFileName of articlesList) {
      const file = await fs.readFile(`${articlesFolder}/${articleFileName}`, 'utf8');
      const { newListItem, newStringItem } = extractData(file, newArticlesList, newArticlesString);
      newArticlesList.push(newListItem);
      newArticlesString += newStringItem;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Practices
  try {
    for (const articleFileName of articlesList) {
      const file = await fs.readFile(`${articlesFolder}/${articleFileName}`, 'utf8');
      const { newListItem, newStringItem } = extractData(file, newArticlesList, newArticlesString);
      newArticlesList.push(newListItem);
      newArticlesString += newStringItem;
    }
  } catch (error) {
    throw new Error(error);
  }
};


generateBible();