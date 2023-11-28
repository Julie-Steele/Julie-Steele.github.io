---
layout: default
---

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

        <p>Hi! I’m Julie Steele, MIT '26 from D.C. studying computer science, artificial intelligence, and econ. My current research interests are in machine learning, probabilistic programming, and program synthesis. I'm most passionate about helping the world and mitigating risks that will come with AI. I also love math problems, improv comedy, and all sorts of dancing.</p>

        <p>Welcome to my website. Bit of a diary/tracker/public presence, we'll see! The goal is to accountably push myself, and share random ideas so please reach out if anything resonates.</p>

        <p>I would love if you filled out <a href="https://docs.google.com/forms/d/e/1FAIpQLSddQWnSDbBhDqUNFeZpGEZgj41F8_234N7DYq_GpTAW-dN52g/viewform">my feedback form</a>.</p>

        <p><a href="https://julie-steele.github.io/apply">Contact</a></p>

        <p>Upcoming: accomplishments and failures page, more cs content, and more thoughts posts</p>
    </div>
    
</div>

<div style="text-align: center;">
    <img src="ShortDC.jpg" alt="Dance Collage" style="max-width: 100%; height: auto;" />
    

</div>

### Current & Past Accomplishments I'm Most Proud Of


|                                                                                                                                                                  |                                                                                                                                                                 |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - Currently researching probabilistically inferring world models (the sprites and their code logic) from videos of Atari games with the Computational Cognitive Science Lab. | - Was Executive Director of [INTEGIRLS](www.integirls.org), a nonprofit promoting competitive problem solving for girls, scaling up to over 100 staff in 10+ cities. |
|                                                                                                                                                                           | - Competed in math competitions during middle & high school: 8 on AIME, 4-time AIME Qualifier, 1st Place in D.C. for UMD Math Competition, Bronze in USAMTS.          |
| - Member of [MIT AI Alignment club](https://www.mitalignment.org/), discussing machine learning papers weekly and conducting research on adversarial training for image generation. | - Worked at the Abdul Latif Jameel Poverty Action Lab, analyzing data for randomized controlled trials for the Tamil Nadu elderly panel.                             |
| - Worked on a self-reasoning, self-modifying AI program synthesis system in Scheme at Harvard. Involved in various relational and functional programming projects in miniKanren.   |                                                                                                                                                                      |




<img src="dragoncurve.webp" alt="Dragon" style="display: block; max-width: 30%; max-height: 50%; margin-left: auto; margin-right: auto;" />

Site adapted from [Ankit Sultana](https://github.com/ankitsultana)