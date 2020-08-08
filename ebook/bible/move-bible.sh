#!/bin/bash

NFD_APP_DIR='/Users/julius.reade/Code/PER/nfd-app'

if [[ -d $NFD_APP_DIR ]]; then
  # EPUB
  cp \
  $(pwd)/ebook/bible/neverfap-deluxe-bible.epub \
  $(pwd)/themes/deluxe_theme/static/ebooks/neverfap-deluxe-bible.epub

  cp \
  $(pwd)/ebook/bible/neverfap-deluxe-bible.epub \
  $NFD_APP_DIR/assets/static/ebooks/neverfap-deluxe-bible.epub

  # PDF
  cp \
  $(pwd)/ebook/bible/neverfap-deluxe-bible.pdf \
  $(pwd)/themes/deluxe_theme/static/ebooks/neverfap-deluxe-bible.pdf

  cp \
  $(pwd)/ebook/bible/neverfap-deluxe-bible.pdf \
  $NFD_APP_DIR/assets/static/ebooks/neverfap-deluxe-bible.pdf

else
  echo "$NFD_APP_DIR does not exist"
fi
