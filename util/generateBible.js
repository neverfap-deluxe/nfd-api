const fse = require('fs-extra');
const fs = require('fs');

const {
  home_folder,
  guide_folder,
  summary_folder,
  // post_relapse_academy_folder,
  // emergency_folder,

  articles_folder,
  practices_folder,
  // courses_folder,
  // podcasts_folder,
  // quotes_folder,
  // meditations_folder,
  // blogs_folder,
  // updates_folder,

  seven_day_kickstarter_folder,

  about_folder,
  accountability_folder,
  coaching_folder,
  donations_folder,
  reddit_guidelines_folder,
  neverfap_deluxe_league_folder,
  community_folder,

  mobile_app_folder,
  desktop_app_folder,
  chrome_extension_folder,

  disclaimer_folder,
  privacy_folder,
  terms_and_conditions_folder,

  // everything_folder,
  // never_fap_folder,
  // neverfap_deluxe_bible_folder,
  // contact_folder,
} = require('./generateBibleConst');

const { extractData } = require('./generateBibleUtil');

const generateBible = async () => {
  // Introduction

  // Summary
  const summary_list = fs.readdirSync(summary_folder);
  let new_summary_list = [];
  let new_summary_string = '';
  try {
    for (const summary_file_name of summary_list) {
      const file = await fse.readFile(`${summary_folder}/${summary_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page_children");
      new_summary_list.push(new_list_item);
      new_summary_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Guide


  // Articles
  const articles_list = fs.readdirSync(articles_folder);
  let new_articles_list = [];
  let new_articles_string = '';
  try {
    for (const article_file_name of articles_list) {
      const file = await fse.readFile(`${articles_folder}/${article_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page");
      new_articles_list.push(new_list_item);
      new_articles_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Practices
  const practices_list = fs.readdirSync(practices_folder);
  let new_practices_list = [];
  let new_practices_string = '';
  try {
    for (const practice_file_name of practices_list) {
      const file = await fse.readFile(`${practices_folder}/${practice_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page");
      new_practices_list.push(new_list_item);
      new_practices_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }
  
  // Seven Day Kickstarter 
  const seven_day_kickstarter_list = fs.readdirSync(seven_day_kickstarter_folder);
  let new_seven_day_kickstarter_list = [];
  let new_seven_day_kickstarter_string = '';
  try {
    for (const practice_file_name of practices_list) {
      const file = await fse.readFile(`${practices_folder}/${practice_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page");
      new_seven_day_kickstarter_list.push(new_list_item);
      new_seven_day_kickstarter_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Legal
  const disclaimerFile = await fse.readFile(`${disclaimer_folder}/_index.md`, 'utf8');
  let new_disclaimer_string = '';
  if (disclaimerFile) {
    const { new_list_item, new_string_item } = extractData(disclaimerFile, "page");
    new_disclaimer_string += new_string_item;
  }
  const privacyFile = await fse.readFile(`${privacy_folder}/_index.md`, 'utf8');
  let new_privacy_string = '';
  if (privacyFile) {
    const { new_list_item, new_string_item } = extractData(privacyFile, "page");
    new_privacy_string += new_string_item;
  }
  const terms_and_conditionsFile = await fse.readFile(`${terms_and_conditions_folder}/_index.md`, 'utf8');
  let new_termsAndConditions_string = '';
  if (terms_and_conditionsFile) {
    const { new_list_item, new_string_item } = extractData(terms_and_conditionsFile, "page");
    new_termsAndConditions_string += new_string_item;
  }

  // TODO
  // Generate eBook Index

  const final_string_array = [new_summary_string, new_articles_string, new_practices_string, new_disclaimer_string, new_privacy_string, new_termsAndConditions_string]
  let final_string = '';
  for (const final_string_section of final_string_array) {
    final_string += final_string_section;
  }

  console.log(final_string)
  fse.outputFileSync(`compiled_text/bible.md`, final_string);
};

generateBible();
