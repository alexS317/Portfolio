<script setup>
import Navigation from "@/components/Navigation.vue";
import Bio from "@/components/Bio.vue";
import SkillList from "@/components/SkillList.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <Navigation />
  <section class="banner">
    <div class="banner-inside">
      <h1>Alexandra Fontner</h1>
      <h3>Aspiring Developer & Digital Artist</h3>
      <p>
        Hello and welcome to my page, I am happy you found your way here! My
        name is Alexandra, I am a young Austrian student currently on the way to
        get my BSc in Creative Computing. I am interested in various kinds of
        digital technologies, like software development (particularly for games, but
        also web and mobile), 3D art and animation, or visual effects, and would
        love to work in one of those fields in the future. On this page here you
        can find some information about me and my work.
      </p>
      <p>Contact me via Email or LinkedIn:</p>

      <a
        href="mailto:alexandra.fontner@aon.at"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
          />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/alexandra-fontner-600544246/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
          />
        </svg>
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
    <h3>Skills and Tools I am interested in/would like to learn more about</h3>
    <p class="col-8">
      Unfortunately, my university curriculum cannot include everything that I
      want to learn, but I am trying to get familiar with at least some of them
      via self-study. I have listed a few things here that I am currently in the
      progress of learning or plan to learn soon (words written in
      <i>italics</i> are technologies that I will still get to know in my study
      programme).
    </p>
    <ul>
      <li>Unreal Engine</li>
      <li><i>Unity</i></li>
      <li>C++</li>
      <li><i>C#</i></li>
      <li>
        Various common 3D programs for modelling, sculpting, texturing and
        animation (e.g. <i>Maya</i>, ZBrush, Substance Painter)
      </li>
      <li>Other programs from the Adobe Suite (e.g. <i>After Effects</i>)</li>
      <li>React</li>
      <li>Python</li>
      <li>
        ... and probably more, as I am generally open and excited towards
        learning new things :)
      </li>
    </ul>
  </section>

  <Footer />
</template>

<style></style>
