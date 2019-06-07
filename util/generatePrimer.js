const {
  primer_folder
} = require('./util');

const generatePrimer = async () => {
  // Primer
  const primer_list = fs.readdirSync(primer_folder);
  let new_primer_list = [];
  let new_primer_string = '';
  try {
    for (const primer_file_name of primer_list) {
      const file = await fse.readFile(`${primer_folder}/${primer_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page_children");
      new_primer_list.push(new_list_item);
      new_primer_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  const final_string_array = [new_primer_string]
  let final_string = '';
  for (const final_string_section of final_string_array) {
    final_string += final_string_section;
  }

  console.log(final_string);
  fse.outputFileSync(`compiled_text/seven_day_primer.md`, final_string);
};

generatePrimer();
