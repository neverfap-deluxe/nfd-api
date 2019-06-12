const {
  challenge_folder
} = require('./const');

const generateChallenge = async () => {
  const [
    challengeIndex,
    challengeChildren,
  ] = await Promise.all([ 
    generatePage(challenge_folder),
    generatePageChildren(challenge_folder),
  ]);

  const website_content_array = [
    challengeIndex.string,
    challengeChildren.string,
  ];

  let final_string = '';
  for (const final_string_section of website_content_array) {
    final_string += final_string_section;
  }

  fse.outputFileSync(`ebook/challenge/challenge.md`, final_string);
};

generateChallenge();
