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

const { 
  generatePage,
  generateContent,
  generatePageChildren } = require('./util');

const generateBible = async () => {

  const [
    // INTRO
    about,

    // GUIDES
    summary,
    guide,

    // CONTENT
    articles,
    practices,

    // LEGAL
    disclaimer,
    privacy,
    terms_and_conditions,
  ] = await Promise.all([ 
    // INTRO
    generatePageChildren(about_folder),

    // GUIDES
    generatePageChildren(summary_folder),
    generatePageChildren(guide_folder),

    // CONTENT
    generateContent(articles_folder),
    generateContent(practices_folder),

    // LEGAL
    // generatePage(disclaimer_folder),
    // generatePage(privacy_folder),
    // generatePage(terms_and_conditions_folder),
  ]);

  const website_content_array = [
    // INTRO
    about.string,

    // GUIDES
    summary.string,
    guide.string,

    // CONTENT
    articles.string,
    practices.string,

    // LEGAL
    // disclaimer.string,
    // privacy.string,
    // terms_and_conditions.string,
  ];

  let final_string = '';
  for (const final_string_section of website_content_array) {
    final_string += final_string_section;
  }

  fse.outputFileSync(`ebook/bible/bible.md`, final_string);
};

generateBible();
