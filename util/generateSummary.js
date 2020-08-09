const fse = require('fs-extra');

const {
  summary_folder,
} = require('./const');

const {
  // generatePage,
  generateContent,
  generatePageChildren,
  stringFromArray,
} = require('./util');

const generateSummary = async () => {

  const headerMarkdown = `
---
title: The NeverFap Deluxe Summary
subtitle: A complete collection of guides, articles, and practices.
---
`;

const prefaceMarkdown = `
# NeverFap Deluxe Preface

Thank you for reading The NeverFap Deluxe Bible!

It is a complete collection of guides, articles, and practices on the NeverFap Deluxe Website!

However, it does not contain all the content from the website. Including the excellent homepage explanation of what NeverFap Deluxe is, the various NeverFap Deluxe resource recommendations on the website, as well as the dozens of other pages, links and resources to things such as Hovering Meditation, The NeverFap Deluxe #accountability program etc.

Instead this book is an excellent companion piece to the website, and if you already have the basics of the NeverFap Delue Method down, then this book will serve you well.

For a full view of the NeverFap Deluxe Method of Overcoming Porn Addiction, please proceed to the website.

Because Julius Reade says so ^^

<a href="https://neverfapdeluxe.com/">https://neverfapdeluxe.com/</a>
`;

  const [
    summary,
  ] = await Promise.all([
    generatePageChildren(summary_folder, true),
  ]);

  const website_content_array = [
    // HEADER
    headerMarkdown,

    // PREFACE
    prefaceMarkdown,

    ``,

    summary.string,
  ];

  const final_string = stringFromArray(website_content_array);

  fse.outputFileSync(`ebook/summary/summary.md`, final_string);
  fse.outputFileSync(`server/static/summary.md`, final_string);
};

generateSummary();
