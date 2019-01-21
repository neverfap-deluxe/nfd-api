## TODO

### 3rd party

- formspree plugin
- comments plugin

## app build

- create categories/tags
- Contact Form placeholder styling.

## Types of categories

- popular

- Context
- Practice
- Introduction


Privacy and Disclaimer files


Google Analytics
Google Search Console
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





<!-- 
  <meta name="author" content="{{ .Site.Author.name }}" />
  <meta property="og:url" content="{{ .Permalink }}" />
  <link rel="canonical" href="{{ .Permalink }}" />

  {{ partial "seo" . }}
  {{- if .IsHome -}}
  <title>{{ .Site.Title }}</title>
  <meta property="og:title" content="{{ .Site.Title }}" />
  <meta property="og:type" content="website" />
  <meta name="description" content="{{ .Site.Params.description }}" />
  {{- else -}}
  <title>{{ .Title }} - {{ .Site.Title }}</title>
  <meta property="og:title" content="{{ .Title }} - {{ .Site.Title }}" />
  <meta property="og:type" content="article" />
  <meta name="description" content="{{ default .Summary .Description }}" />
  {{- end }}

  <link rel="stylesheet" href="{{ "css/index.css" | relURL }}">
  <link href="{{ "index.xml" | relURL }}" rel="alternate" type="application/rss+xml" title="{{ .Site.Title }}">
-->
  <!-- quicklink require -->

  <!-- Twitter Card -->
  <!-- <meta name="twitter:card" content="summary" />
  <meta name="twitter:description" content="{{ if .IsHome }}{{ .Site.Params.description }}{{ else }}{{ .Description }}{{ end }}" />
  <meta name="twitter:title" content="{{ .Title }}{{ if .IsHome }} - {{ .Site.Params.Tagline }}{{ else }} - {{ .Site.Title }}{{ end }}" />
  <meta name="twitter:site" content="{{ .Site.Params.twitter }}" />
  <meta name="twitter:creator" content="{{ .Site.Params.twitter }}" /> -->
  <!-- OG data -->
  <!-- <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}" />
  <meta content="{{ .Title }}{{ if .IsHome }} - {{ .Site.Params.Tagline }}{{ else }} - {{ .Site.Title }}{{ end }}" property="og:title">
  <meta content="{{ if .IsHome }}{{ .Site.Params.description }}{{ else }}{{ .Description }}{{ end }}" property="og:description">
  <meta property="og:url" content="{{ .Permalink }}" />
  <meta property="og:site_name" content="{{ .Site.Title }}" />
  {{ range .Params.categories }}<meta property="article:section" content="{{ . }}" />{{ end }}
  {{ if isset .Params "date" }}<meta property="article:published_time" content="{{ time .Date }}" />{{ end }} -->

