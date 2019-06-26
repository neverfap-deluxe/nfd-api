const {
  primer_folder,
  stringFromArray,
} = require('./util');

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
