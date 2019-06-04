# NeverFap Deluxe API

Website: https://neverfapdeluxe.netlify.com/

This is where the content API is hosted for all our NeverFap Deluxe applications which take advantage of all the written content for NeverFap Deluxe!

Released under the [GNU GPLv3 licence](https://github.com/neverfap-deluxe/nfd-api/blob/master/LICENSE).


## Tech

Backend: Hugo
Deployment: Netlify


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

In order to create a Page you go into `/content` and then you create the page name you want i.e. `/content/page_name` with an `_index.md` file in that folder.

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

Then in `/themes/deluxe_theme/layouts/_default` you create the json endpoint in `/themes/deluxe_theme/layouts/_default` with a json file `page_name.json.json`

(NOTE: There is supposed to be two json endings. Also please keep in mind that some pages also have children JSON for more modular content)

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

It will then serve your JSON on this endpoint: https://neverfapdeluxe.netlify.com/page_name/index.json

And that's all there is to it!

In order to create Content, it's a slightly different. Please checkout `/content/articles` and `/themes/deluxe_theme/layouts/articles` to get the basic gist of it.
