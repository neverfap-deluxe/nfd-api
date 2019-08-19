const fse = require('fs-extra');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

// ex. npm run create "Hovering" content_hovering "Description"

const generateResponseTemplate = () =>
`{{ define "response" }}
{
  "title": {{ .Title | jsonify }},
  "page_id": {{ .Params.PageId | jsonify }},
  "description": {{ .Description | jsonify }},
  "content": {{ .Content | jsonify }},
  "date": {{ .Date.Format "2006-01-02" | jsonify }},
  "draft": {{ .Draft | jsonify }},
  "slug": {{ .Params.Slug | jsonify }},
  "categories": {{ .Params.Categories | jsonify }},
  "tags": {{ .Params.Tags | jsonify }},
  "permalink" : {{ .Permalink | jsonify }},
  "section": {{ .Section | jsonify }}
}
{{ end }}
`

const generateTemplate = (title, slug, description) =>
`---
  title: "${title}"
  description: "${description}"
  date: ${generateCurrentDate()}
  draft: false
  tags: [ "misc" ]
  categories: [ "index" ]

  slug: "${slug}"

  pageId: "${uuidv4()}"
---

${title} yeeehawwww
`;

const generateCurrentDate = () => {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const createLink = () => {
  // ex. npm run create "Blogs" content_blogs
  const fullTitle = process.argv[2];
  const fullSlug = process.argv[3];
  const fullDescription = process.argv[4];
  // console.log(fullTitle, fullSlug, fullDescription)

  // Create /content directory
  const contentDirectory = `content/${fullSlug}`;
  if (!fs.existsSync(contentDirectory)){
    fs.mkdirSync(contentDirectory);

    // Create /content file
    const contentFile = `${contentDirectory}/_index.md`;
    if (!fs.existsSync(contentFile)){
      const template = generateTemplate(fullTitle, fullSlug, fullDescription);
      fse.outputFileSync(contentFile, template);
    }

    // Create Json file
    const themeFile = `themes/deluxe_theme/layouts/_default/${fullSlug}.json.json`;
    if (!fs.existsSync(themeFile)){
      fse.outputFileSync(themeFile, generateResponseTemplate());
    }
  }
};

createLink();
