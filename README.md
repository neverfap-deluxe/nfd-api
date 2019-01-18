## TODO

### 3rd party

- formspree plugin
- comments plugin

## Hugo Config

- Change generated URLs
- Images in posts (incorporation images into post Icons)

## app build

- create categories/tags
- related posts
- popular posts
- Maybe a white to fade in when you go on a page.
- Contact Form placeholder styling.

## Types of categories

- popular

Google Analytics
Google Search Console
formspree
Fix up css logic into composable things.
Netlify stuff

{{ range .Pages.ByDate }}
{{ range (.Pages.ByParam "author.last_name") }}

{{ range first 3 (where .Site.Pages "Params.tags" "Review") }}
{{ .Render "featured" }}
{{ end }}

{{ range .Site.Pages }}
{{ if in .Params.tags "mytag" }}
{{ .Title }}
{{ end }}
{{ end }}

{{ range first 1 .Site.Taxonomies.categories.sport }}

      <h2><a href="{{ .Page.Permalink }}">{{ .Page.Title }}</a></h2>
      <p>
        {{ .Page.Summary }}
      </p>

{{ end }}

<ul>
  {{ range .Site.Taxonomies.tags.CHANGEIT }}
    <li><a href="{{ .Page.URL }}">{{ .Page.Title }}</a></li>
  {{ end }}
</ul>

{{ range where .Data.Pages.ByDate "Section" "articles }}
{{ if in .Params.tags "home" }}
<li class="blog-tile">
{{ partial "blog-tile.html" . .Section }}
</li> <!-- /.blog-title -->
{{ end }}
{{ end }}
