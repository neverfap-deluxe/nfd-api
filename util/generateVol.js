const {
  stringFromArray,
  generatePage,
  generatePageChildren,
} = require('./util');

const {
  vol_1_folder,
  vol_2_folder,
  vol_3_folder,
  vol_4_folder,
} = require('./const');

const generateVol = async () => {

  // VOL 1
  const [
    vol1Index,
    vol1Children,
  ] = await Promise.all([
    generatePage(vol_1_folder),
    generatePageChildren(vol_1_folder),
  ]);

  const vol_1_website_content_array = [
    vol1Index.string,
    vol1Children.string,
  ];

  const vol_1_final_string = stringFromArray(vol_1_website_content_array);

  // VOL 2
  const [
    vol2Index,
    vol2Children,
  ] = await Promise.all([
    generatePage(vol_2_folder),
    generatePageChildren(vol_2_folder),
  ]);

  const vol_2_website_content_array = [
    vol2Index.string,
    vol2Children.string,
  ];

  const vol_2_final_string = stringFromArray(vol_2_website_content_array);

  // VOL 3
  const [
    vol3Index,
    vol3Children,
  ] = await Promise.all([
    generatePage(vol_3_folder),
    generatePageChildren(vol_3_folder),
  ]);

  const vol_3_website_content_array = [
    vol3Index.string,
    vol3Children.string,
  ];

  const vol_3_final_string = stringFromArray(vol_3_website_content_array);

  // VOL 4
  const [
    vol4Index,
    vol4Children,
  ] = await Promise.all([
    generatePage(vol_4_folder),
    generatePageChildren(vol_4_folder),
  ]);

  const vol_4_website_content_array = [
    vol4Index.string,
    vol4Children.string,
  ];

  const vol_4_final_string = stringFromArray(vol_4_website_content_array);

  fse.outputFileSync(`vol-1/vol-1/vol-1.md`, vol_1_final_string);
  fse.outputFileSync(`vol-2/vol-2/vol-2.md`, vol_2_final_string);
  fse.outputFileSync(`vol-3/vol-3/vol-3.md`, vol_3_final_string);
  fse.outputFileSync(`vol-4/vol-4/vol-4.md`, vol_4_final_string);
};

generateVol();
