const {
  kickstarter_folder,
} = require('./const');

const {
  generatePage,
  generatePageChildren,
  stringFromArray,
} = require('./util');

const generateKickstarter = async () => {
  const [
    kickstarterIndex,
    kickstarterChildren,
  ] = await Promise.all([
    generatePage(kickstarter_folder),
    generatePageChildren(kickstarter_folder),
  ]);

  const website_content_array = [
    kickstarterIndex.string,
    kickstarterChildren.string,
  ];

  const final_string = stringFromArray(website_content_array);

  fse.outputFileSync(`ebook/kickstarter/kickstarter.md`, final_string);
};

generateKickstarter();
