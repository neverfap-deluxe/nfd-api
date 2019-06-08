const {
  challenge_folder
} = require('./const');

const generateChallenge = async () => {
  // Challenge
  const challenge_list = fs.readdirSync(challenge_folder);
  let new_challenge_list = [];
  let new_challenge_string = '';
  try {
    for (const challenge_file_name of challenge_list) {
      const file = await fse.readFile(`${challenge_folder}/${challenge_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page_children");
      new_challenge_list.push(new_list_item);
      new_challenge_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  const final_string_array = [new_challenge_string]
  let final_string = '';
  for (const final_string_section of final_string_array) {
    final_string += final_string_section;
  }

  console.log(final_string);
  fse.outputFileSync(`ebook/challenge/seven_day_challenge.md`, final_string);
};

generateChallenge();
