const {
  kickstarter_folder
} = require('./const');

const generateKickstarter = async () => {
  // Kickstarter
  const kickstarter_list = fs.readdirSync(kickstarter_folder);
  let new_kickstarter_list = [];
  let new_kickstarter_string = '';
  try {
    for (const kickstarter_file_name of kickstarter_list) {
      const file = await fse.readFile(`${kickstarter_folder}/${kickstarter_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page_children");
      new_kickstarter_list.push(new_list_item);
      new_kickstarter_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  const final_string_array = [new_kickstarter_string]
  let final_string = '';
  for (const final_string_section of final_string_array) {
    final_string += final_string_section;
  }

  console.log(final_string);
  fse.outputFileSync(`ebook/kickstarter/seven_day_kickstarter.md`, final_string);
};

generateKickstarter();
