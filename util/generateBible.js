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

const generateBible = async () => {

  // Introduction

  // Summary
  const summaryList = fs.readdirSync(summaryFolder);
  let newSummaryList = [];
  let newSummaryString = '';
  try {
    for (const summaryFileName of summaryList) {
      const file = await fse.readFile(`${summaryFolder}/${summaryFileName}`, 'utf8');
      const { newListItem, newStringItem } = extractData(file);
      newSummaryList.push(newListItem);
      newSummaryString += newStringItem;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Guide


  // Articles
  const articlesList = fs.readdirSync(articlesFolder);
  let newArticlesList = [];
  let newArticlesString = '';
  try {
    for (const articleFileName of articlesList) {
      const file = await fse.readFile(`${articlesFolder}/${articleFileName}`, 'utf8');
      const { newListItem, newStringItem } = extractData(file);
      newArticlesList.push(newListItem);
      newArticlesString += newStringItem;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Practices
  const practicesList = fs.readdirSync(practicesFolder);
  let newPracticesList = [];
  let newPracticesString = '';
  try {
    for (const articleFileName of articlesList) {
      const file = await fse.readFile(`${articlesFolder}/${articleFileName}`, 'utf8');
      const { newListItem, newStringItem } = extractData(file);
      newArticlesList.push(newListItem);
      newArticlesString += newStringItem;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Legal
  const disclaimerFile = await fse.readFile(`${disclaimerFolder}/_index.md`, 'utf8');
  let newDisclaimerString = '';
  if (disclaimerFile) {
    const { newListItem, newStringItem } = extractData(disclaimerFile);
    newDisclaimerString += newStringItem;
  }
  const privacyFile = await fse.readFile(`${privacyFolder}/_index.md`, 'utf8');
  let newPrivacyString = '';
  if (privacyFile) {
    const { newListItem, newStringItem } = extractData(privacyFile);
    newPrivacyString += newStringItem;
  }
  const terms_and_conditionsFile = await fse.readFile(`${terms_and_conditionsFolder}/_index.md`, 'utf8');
  let newTermsAndConditionsString = '';
  if (terms_and_conditionsFile) {
    const { newListItem, newStringItem } = extractData(terms_and_conditionsFile);
    newTermsAndConditionsString += newStringItem;
  }

  // TODO
  // Generate eBook Index


  const finalStringArray = [newSummaryString, newArticlesString, newPracticesString, newDisclaimerString, newPrivacyString, newTermsAndConditionsString]
  let finalString = '';
  for (const finalStringSection of finalStringArray) {
    finalString += finalStringSection;
  }

  fse.outputFileSync(`compiled_text/bible.md`, finalString);
};

generateBible();
