const generateSevenDayKickstarter = async () => {

  // Introduction

  // Summary
  const summary_list = fs.readdirSync(summary_folder);
  let new_summary_list = [];
  let new_summary_string = '';
  try {
    for (const summary_file_name of summary_list) {
      const file = await fse.readFile(`${summary_folder}/${summary_file_name}`, 'utf8');
      const { new_list_item, new_string_item } = extractData(file, "page_children");
      new_summary_list.push(new_list_item);
      new_summary_string += new_string_item;
    }
  } catch (error) {
    throw new Error(error);
  }

  // TODO
  // Generate eBook Index
  

  const final_string_array = [new_summary_string, new_articles_string, new_practices_string, new_disclaimer_string, new_privacy_string, new_termsAndConditions_string]
  let final_string = '';
  for (const final_string_section of final_string_array) {
    final_string += final_string_section;
  }

  console.log(final_string)
  fse.outputFileSync(`compiled_text/seven_day_kickstarter.md`, final_string);
};

generateSevenDayKickstarter();
