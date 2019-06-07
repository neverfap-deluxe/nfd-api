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

  kickstarter_folder,

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
} = require('./const');

const { extractData } = require('./util');

const generateBible = async () => {
  // Introduction

  // Summary
  const summary_list = fs.readdirSync(summary_folder);
  let new_summary_list = [];
  let new_summary_string = '';
  try {
    for (const summary_file_name of summary_list) {
      const file = await fse.readFile(
        `${summary_folder}/${summary_file_name}`,
        'utf8'
      );
      const { new_list_item, new_string_item } = extractData(
        file,
        'page_children'
      );
      new_summary_list.push(new_list_item);
      new_summary_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // About
  const about_list = fs.readdirSync(about_folder);
  let new_about_list = [];
  let new_about_string = '';
  try {
    for (const about_file_name of about_list) {
      const file = await fse.readFile(
        `${about_folder}/${about_file_name}`,
        'utf8'
      );
      const { new_list_item, new_string_item } = extractData(
        file,
        'page_children'
      );
      new_about_list.push(new_list_item);
      new_about_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Guide
  const guide_list = fs.readdirSync(guide_folder);
  let new_guide_list = [];
  let new_guide_string = '';
  try {
    for (const guide_file_name of guide_list) {
      const file = await fse.readFile(
        `${guide_folder}/${guide_file_name}`,
        'utf8'
      );
      const { new_list_item, new_string_item } = extractData(
        file,
        'page_children'
      );
      new_guide_list.push(new_list_item);
      new_guide_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // TODO - organise into categories

  // Articles
  const articles_list = fs.readdirSync(articles_folder);
  let new_articles_list = [];
  let new_articles_string = '';
  try {
    for (const article_file_name of articles_list) {
      const file = await fse.readFile(
        `${articles_folder}/${article_file_name}`,
        'utf8'
      );
      const { new_list_item, new_string_item } = extractData(file, 'page');
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
      const file = await fse.readFile(
        `${practices_folder}/${practice_file_name}`,
        'utf8'
      );
      const { new_list_item, new_string_item } = extractData(file, 'page');
      new_practices_list.push(new_list_item);
      new_practices_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Seven Day Kickstarter
  const seven_day_kickstarter_list = fs.readdirSync(kickstarter_folder);
  let new_seven_day_kickstarter_list = [];
  let new_seven_day_kickstarter_string = '';
  try {
    for (const practice_file_name of practices_list) {
      const file = await fse.readFile(
        `${practices_folder}/${practice_file_name}`,
        'utf8'
      );
      const { new_list_item, new_string_item } = extractData(file, 'page');
      new_seven_day_kickstarter_list.push(new_list_item);
      new_seven_day_kickstarter_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // Legal
  const disclaimer_file = await fse.readFile(
    `${disclaimer_folder}/_index.md`,
    'utf8'
  );
  let new_disclaimer_string = '';
  if (disclaimer_file) {
    const { new_list_item, new_string_item } = extractData(
      disclaimer_file,
      'page'
    );
    new_disclaimer_string += new_string_item;
  }
  const privacy_file = await fse.readFile(
    `${privacy_folder}/_index.md`,
    'utf8'
  );
  let new_privacy_string = '';
  if (privacy_file) {
    const { new_list_item, new_string_item } = extractData(
      privacy_file,
      'page'
    );
    new_privacy_string += new_string_item;
  }
  const terms_and_conditions_file = await fse.readFile(
    `${terms_and_conditions_folder}/_index.md`,
    'utf8'
  );
  let new_terms_and_conditions_string = '';
  if (terms_and_conditions_file) {
    const { new_list_item, new_string_item } = extractData(
      terms_and_conditions_file,
      'page'
    );
    new_terms_and_conditions_string += new_string_item;
  }

  // TODO
  // Generate eBook Index
  // Copyright

  const website_content_array = [
    new_summary_string,
    new_about_string,
    new_guide_string,
    new_articles_string,
    new_practices_string,
    new_seven_day_kickstarter_string,
    new_disclaimer_string,
    new_privacy_string,
    new_terms_and_conditions_string,
  ];
  const final_string_array = website_content_array;

  let final_string = '';
  for (const final_string_section of final_string_array) {
    final_string += final_string_section;
  }

  fse.outputFileSync(`compiled_text/bible.md`, final_string);
};

generateBible();
