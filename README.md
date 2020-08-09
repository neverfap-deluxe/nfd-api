# NeverFap Deluxe API

Website: https://neverfapdeluxe.netlify.com/

This is where the content API is hosted for all our NeverFap Deluxe applications which take advantage of all the written content for NeverFap Deluxe!

It is also where the eBook content is generated from.

Released under the [GNU GPLv3 licence](https://github.com/neverfap-deluxe/nfd-api/blob/master/LICENSE).


For the PDFs, Tahoma or Verdana work best.

% Trigger ToC creation in LaTeX
\renewcommand{\baselinestretch}{0.7}\normalsize
\tableofcontents
\renewcommand{\baselinestretch}{1.2}\normalsize


## Tech

Backend: Hugo
Deployment: Netlify, Pandoc, KindleGen


## Local Setup

- Download Hugo version 0.53 to your computer (later version may possibly work, not sure)
- In order to run the application run `hugo server -DF` in the root folder and it should serve the application ont `localhost:1313`


## Util Helpers

- `util/generateBible.js` will help generate an eBook version of the website.
- `util/generateQuoteMD.js` will help generate quote meta-data for images placed within `content/quotes`.


## How It Works

Ultimately there are two kinds of content you can create:

- Pages - standalone page i.e. `https://neverfapdeluxe.com/about`
- Content - standalone page with a lot of subpages i.e. `https://neverfapdeluxe.com/articles` + `https://neverfapdeluxe.com/articles/this-is-an-article`

In order to create a Page you go into `/content` and then you create the page name you want with a _index.md file i.e. `/content/page_name/_index.md`.

Example:

```
---
  title: "NeverFap Deluxe Blog"
  description: "NeverFap Deluxe Blog. Read more about other users' experiences with the NeverFap Deluxe Method of overcoming porn addiction."
  date: 2019-05-30
  draft: false
  tags: [ "porn addiction", "porn recovery", "addiction recovery", "addiction", "awareness", "nofap", "neverfap", "neverfap deluxe" ]
  categories: [ "" ]
  slug: "blog"

  pageId: "1838f786-d4ea-4b02-92be-1f171582283a"
---

Here is where the content will go
```

Then in `/themes/deluxe_theme/layouts/_default` you create the json endpoint i.e. `/themes/deluxe_theme/layouts/_default/page_name.json.json`.

(NOTE: It is supposed to be `json.json`. Also please keep in mind that some pages also have children JSON for more modular content)

```
{{ define "response" }}
{
  "title": {{ .Title | jsonify }}, "page_id": {{ .Params.PageId | jsonify }},
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

```

(NOTE: You can define as many custom parameters as you want.)

It will then serve your JSON on this endpoint: https://neverfapdeluxe.netlify.com/page_name/index.json

And that's all there is to it!

In order to create Content, it's a slightly different. However, please checkout `/content/articles` and `/themes/deluxe_theme/layouts/articles` to get the basic gist of it.
