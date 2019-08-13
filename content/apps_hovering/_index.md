---
  title: "Hovering"
  description: "Hovering is a meditation techinque which is designed to be easy to understand, simple to practice and accessible to people of all ages."
  date: 2019-08-13
  draft: false
  tags: [ "misc" ]
  categories: [ "index" ]

  slug: "hovering"

  pageId: "0ad874cd-6af1-47c1-8ef5-b7ca9e205962"
---

Hovering is a meditation technique that I created to assist people new to meditation. It significantly helps those who struggle to meditate via traditional means.

It has been designed to be easy to understand, simple to practice, as well as remain acessible to people of all ages.

Unlike traditional meditation, Hovering aims to be highly concrete as opposed to highly abstract so you can have that 'ah-ha' moment of clarity a lot sooner, rather than later.

Essentially how it works is that you hover your cursor over the hover button and you use this as a tool to help ground your mind. 

<div style="display: flex; justify-content: center; align-items: center; margin-top: 3.6rem; margin-bottom: 3.6rem;">
  <div class="circle__container cr">
    <div id="hoverCircleExample" class="circle cri">
      <div id="hoverCircleText" class="circle__text">
        Hover
      </div>
    </div>
  </div>
</div>

<script>
  const hoverCircleExample = document.querySelector('#hoverCircleExample');
  const hoverCircleText = document.querySelector('#hoverCircleText');

  hoverCircleExample.onmouseenter = function() {
    hoverCircleText.classList.add("hover__text__fade");
  }
  hoverCircleExample.onmouseleave = function() {
    hoverCircleText.classList.remove("hover__text__fade");
  }
</script>

Of course, that's just the basics of it. 

It's actually quite a lot more involved. For example, it's important that you keep your hand attached to your cursor while you practice Hovering.

If you would like to learn more about Hovering, I've written an extensive website/guide which explains the concept of Hovering in a lot more detail.


<img src="https://neverfapdeluxe.netlify.com/images/hovering_web.png"/>

<a class="link articles__link" href='https://tryhovering.com/'>Hovering Website</a>

<!-- TODO Attach screenshots of the app. -->

Hovering Meditation is also available as an online Web application.

<img src="https://neverfapdeluxe.netlify.com/images/hovering_app.png"/>

<a class="link articles__link" href='https://hovering.neverfapdeluxe.com/'>Hovering Web App</a>

As well as an Android application.

<img src="https://neverfapdeluxe.netlify.com/images/hovering_mobile.png"/>

<a class="link articles__link" href='https://hovering.neverfapdeluxe.com/'>Hovering Android App</a>
