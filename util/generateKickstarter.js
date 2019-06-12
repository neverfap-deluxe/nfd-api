const {
  kickstarter_folder
} = require('./const');

const {
  generatePage,
  generatePageChildren,
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

  let final_string = '';
  for (const final_string_section of website_content_array) {
    final_string += final_string_section;
  }

  fse.outputFileSync(`ebook/kickstarter/kickstarter.md`, final_string);
};

generateKickstarter();
