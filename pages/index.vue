<script setup>
import Navigation from "@/components/Navigation.vue";
import Bio from "@/components/Bio.vue";
import SkillList from "@/components/SkillList.vue";
import InfoBanner from "@/components/InfoBanner.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <InfoBanner />

  <Navigation />
  <section class="banner">
    <div class="banner-inside">
      <h1>Alexandra Fontner</h1>
      <h3>Aspiring Developer & Digital Artist</h3>
      <p>
        Hello and welcome to my page, I am happy you found your way here! My
        name is Alexandra, I am a young Austrian student currently on the way to
        get my BSc in Creative Computing. I am interested in various kinds of
        digital technologies, like software development (particularly for games,
        but also web and mobile), 3D art and animation, or visual effects, and
        would love to work in one of those fields in the future. On this page
        here you can find some information about me and my work.
      </p>
      <p>Contact me via Email or LinkedIn:</p>

      <a
        href="mailto:alexandra.fontner@aon.at"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/alexandra-fontner-600544246/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
      </a>
    </div>
  </section>

  <main class="container">
    <h3>About me</h3>
    <div class="row justify-content-center align-items-center g-2">
      <Bio />
      <img class="pfp" src="/images/profilepicture.png" alt="Profile picture" />
    </div>
  </main>

  <section class="container">
    <h3>Professional Experience</h3>
    <ul>
      <li>
        <div style="display: flex">
          <div>Sept. 2023-Jan. 2024 -&nbsp;</div>
          <div>
            <div>Web Development Intern at Digitalsunray Media GmbH</div>
            <div>
              Tasks: Front-End Development, Creative Development (Advertisement
              banners)
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <section class="container">
    <h3>Education</h3>
    <ul>
      <li>
        2021-2024 - Creative Computing (BSc) at the University of Applied
        Sciences St. Pölten
      </li>
      <li>
        2013-2021 - Bundesgymnasium und Bundesrealgymnasium Stockerau (federal
        high school, special focus: languages)
      </li>
      <li>2009-2013 - Volksschule Sierndorf (primary school)</li>
    </ul>
  </section>

  <section class="container">
    <SkillList />
  </section>

  <section class="container">
    <h3>Other Skills and Tools I am interested in</h3>
    <p class="col-8">
      I love learning new skills, so here are a few other things I'd like to
      dive more into in the future, either through study programmes and courses
      or self-study:
    </p>
    <ul>
      <li>Unreal Engine</li>
      <li>C++</li>
      <li>Various common 3D programs (e.g. Maya, ZBrush, Substance Painter)</li>
      <li>Different programs from the Adobe Suite</li>
      <li>React</li>
      <li>Python</li>
      <li>
        ... and probably more :)
      </li>
    </ul>
  </section>

  <Footer />
</template>

<style></style>
