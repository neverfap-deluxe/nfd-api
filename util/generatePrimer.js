const fse = require('fs-extra');

const {
  stringFromArray,
  generatePage,
  generatePageChildren,
} = require('./util');

const {
  primer_folder,
} = require('./const');

const generatePrimer = async () => {
  const [
    primerIndex,
    primerChildren,
  ] = await Promise.all([
    generatePage(primer_folder),
    generatePageChildren(primer_folder),
  ]);

  const website_content_array = [
    primerIndex.string,
    primerChildren.string,
  ];

  const final_string = stringFromArray(website_content_array);

  fse.outputFileSync(`ebook/primer/primer.md`, final_string);
};

generatePrimer();
