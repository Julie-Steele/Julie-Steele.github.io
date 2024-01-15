---
layout: default
---
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DN4NZN65KT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DN4NZN65KT');
</script>

<style>
    @media screen and (max-width: 768px) {
        .about-container {
            flex-direction: column;
        }

        .about-image, .about-text {
            width: 100%;
            text-align: center;
        }

         .about-image img {
            display: block;
            max-width: 35%; /* Adjust this value as needed */
            height: auto;
            margin-left: auto;
            margin-right: auto;
        }

        .about-text {
            padding: 0 10px; /* Adds padding around the text */
        }
    }
</style>


_Last updated: {{ site.time | date: '%Y-%m-%d' }}_

<div class="about-container" style="display: flex; flex-wrap: wrap; align-items: flex-start;">
    <div class="about-image" style="flex: 1; text-align: right; padding-right: 20px;">
        <img src="JuliePhotoBrick.jpg" alt="Profile Image" style="max-width: 70%; height: auto;" />
    </div>
    <div class="about-text" style="flex: 3;">
        <h2>About Me</h2>

        <p>Hi! I’m Julie Steele, MIT '26 from D.C. studying computer science, artificial intelligence, and econ. This January I've been doing data analysis at Nasdaq during the day and research and rehearsing the musical Chicago at night. My current research interests are in machine learning, probabilistic programming, and program synthesis. I'm most passionate about helping the world and mitigating risks that will come with AI. I also love math problems, improv comedy, and all sorts of dancing.</p>

        <p>Welcome to my website. Bit of a diary/tracker/public presence, we'll see! The goal is to accountably push myself, and share random ideas so please reach out if anything resonates.</p>

        <p>I would love if you filled out <a href="https://docs.google.com/forms/d/e/1FAIpQLSddQWnSDbBhDqUNFeZpGEZgj41F8_234N7DYq_GpTAW-dN52g/viewform">my feedback form</a>.</p>

        <p><a href="https://julie-steele.github.io/apply">Contact</a></p>

        <p>Upcoming: accomplishments and failures page, more cs content, and more thoughts posts</p>
    </div>
    
</div>

<div style="text-align: center;">
    <img src="ShortDC.jpg" alt="Dance Collage" style="max-width: 100%; height: auto;" />
    <img src="dragoncurve.webp" alt="Dragon" style="display: block; max-width: 30%; max-height: 50%; margin-left: auto; margin-right: auto;" />

</div>



Site adapted from [Ankit Sultana](https://github.com/ankitsultana)