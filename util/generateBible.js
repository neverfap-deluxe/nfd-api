const fse = require('fs-extra');

const {
  // home_folder,
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

  // kickstarter_folder,

  about_folder,
  // accountability_folder,
  // coaching_folder,
  // donations_folder,
  // reddit_guidelines_folder,
  // neverfap_deluxe_league_folder,
  // community_folder,

  // mobile_app_folder,
  // desktop_app_folder,
  // chrome_extension_folder,

  // disclaimer_folder,
  // privacy_folder,
  // terms_and_conditions_folder,

  // everything_folder,
  // never_fap_folder,
  // neverfap_deluxe_bible_folder,
  // contact_folder,
} = require('./const');

const {
  // generatePage,
  generateContent,
  generatePageChildren,
  stringFromArray,
} = require('./util');

const generateBible = async () => {

  const headerMarkdown = `
---
title: The NeverFap Deluxe Bible
subtitle: A complete collection of guides, practices and articles.
---
`;

const prefaceMarkdown = `
# NeverFap Deluxe Preface

Thank you for reading The NeverFap Deluxe Bible!

It is a complete collection of guides, practices and articles on the NeverFap Deluxe Website!

However, it does not contain all the content from the website. Including the excellent homepage explanation of what NeverFap Deluxe is, the various NeverFap Deluxe resource recommendations on the website, as well as the dozens of other pages, links and resources to Hovering Meditation etc.

Instead this book is an excellent companion piece to the website, and if you already have the basics of the NeverFap Delue Method down, then this book will serve you well.

For a full view of the NeverFap Deluxe Method of Overcoming Porn Addiction, please proceed to the website.

Because Julius Reade says so ^^

https://neverfapdeluxe.com/


`;

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
    // disclaimer,
    // privacy,
    // terms_and_conditions,
  ] = await Promise.all([
    // INTRO
    generatePageChildren(about_folder, true),

    // GUIDES
    generatePageChildren(guide_folder, true),
    generatePageChildren(summary_folder, true),

    // CONTENT
    generateContent(articles_folder, true),
    generateContent(practices_folder, true),

    // LEGAL
    // generatePage(disclaimer_folder, true),
    // generatePage(privacy_folder, true),
    // generatePage(terms_and_conditions_folder, true),
  ]);

  const website_content_array = [
    // HEADER
    headerMarkdown,

    // PREFACE
    prefaceMarkdown,

    ``,

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

  const final_string = stringFromArray(website_content_array);

  fse.outputFileSync(`ebook/bible/bible.md`, final_string);
  fse.outputFileSync(`server/static/bible.md`, final_string);
};

generateBible();
