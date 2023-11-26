---
layout: default
---

<style>
    /* Common style for both web and mobile */
    .about-container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    .about-text {
        flex: 3;
    }

    .about-image {
        flex: 1;
        text-align: right;
        padding-left: 20px;
    }

    .about-image img {
        /* Smaller profile image for web */
        max-width: 60%; /* Reduced from 70% */
        height: auto;
    }

    /* Mobile specific styles */
    @media screen and (max-width: 768px) {
        .about-container {
            flex-direction: column;
        }

        .about-text, .about-image {
            flex: none;
            width: 100%;
            text-align: center;
            padding: 0;
        }

        .about-image img {
            /* Even smaller profile image for mobile */
            max-width: 50%;
        }
    }

    /* Adjusting the size of the fractal for both web and mobile */
    .fractal-image {
        max-width: 80%; /* Smaller fractal */
        height: auto;
    }

    /* Making the dance collage (DC) larger on mobile */
    @media screen and (max-width: 768px) {
        .dance-collage-image {
            max-width: 110%; /* Larger on mobile */
            height: auto;
        }
    }
</style>

_Last updated: {{ site.time | date: '%Y-%m-%d' }}_

<div class="about-container">
    <div class="about-text">
        <h2>About Me</h2>
        <p>Hi! I’m Julie Steele, MIT '26 from D.C. studying computer science, artificial intelligence, and econ. My current research interests are in machine learning, probabilistic programming, and program synthesis. I'm most passionate about helping the world and mitigating risks that will come with AI. I also love math problems, improv comedy, and all sorts of dancing.</p>
        <p>Welcome to my website. Bit of a diary/tracker/public presence, we'll see! The goal is to accountably push myself, and share random ideas so please reach out if anything resonates.</p>
        <p>I would love if you filled out <a href="https://docs.google.com/forms/d/e/1FAIpQLSddQWnSDbBhDqUNFeZpGEZgj41F8_234N7DYq_GpTAW-dN52g/viewform">my feedback form</a>.</p>
        <p><a href="https://julie-steele.github.io/apply">Contact</a></p>
        <p>Upcoming: accomplishments and failures page, more cs content, and more thoughts posts</p>
    </div>
    <div class="about-image">
        <img src="JuliePhotoBrick.jpg" alt="Profile Image" />
    </div>
</div>

<div style="text-align: center;">
    <img src="ShortDC.jpg" alt="Dance Collage" class="dance-collage-image" />
    <img src="dragoncurve.webp" alt="Dragon" class="fractal-image" />
</div>
