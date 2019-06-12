const {
  primer_folder
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

  let final_string = '';
  for (const final_string_section of website_content_array) {
    final_string += final_string_section;
  }

  fse.outputFileSync(`ebook/primer/primer.md`, final_string);
};

generatePrimer();
