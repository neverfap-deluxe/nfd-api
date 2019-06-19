const {
  challenge_folder,
  stringFromArray,
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

  const final_string = stringFromArray(website_content_array);

  fse.outputFileSync(`ebook/challenge/challenge.md`, final_string);
};

generateChallenge();
