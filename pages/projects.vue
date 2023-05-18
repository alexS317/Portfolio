<script setup>
import Navigation from "@/components/Navigation.vue";
import InfoBanner from "@/components/InfoBanner.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

import uniItems from "@/data/uniCardItems.js";
import personalItems from "@/data/personalCardItems.js";

const uniList = ref([]);
const personalList = ref([]);

uniItems.forEach((item) => {
  uniList.value.push({
    image: item.image,
    title: item.title,
    description: item.description,
    link: item.link,
  });
});

personalItems.forEach((item) => {
  personalList.value.push({
    image: item.image,
    title: item.title,
    description: item.description,
  });
});
</script>

<template>
  <InfoBanner />

  <Navigation />

  <div class="banner">
    <div class="banner-inside">
      <h1>Alexandra Fontner</h1>
      <h3>My Projects</h3>
      <p>
        Here I want to showcase a few of the projects I did so far, to show you
        what kind of work I am capable of and also enjoy doing. Hopefully more
        will be added over time as I continue learning.
      </p>
      <p>
        If you want to see more of my projects, or gain a more in-depth look into
        some of the those shown here, you are also welcome to take a look at my
        profiles on Artstation and GitHub:
      </p>

      <a
        href="https://www.artstation.com/alexs317"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-artstation fa-3x" aria-hidden="true"></i>
      </a>

      <a
        href="https://github.com/alexS317"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-github fa-3x" aria-hidden="true"></i>
      </a>
    </div>
  </div>

  <section class="container">
    <h3>University</h3>
    <p>
      Some of my bigger university projects, most of them were final projects
      for a specific course. They were very valuable learning experiences for
      me. Even though I have gained a lot more experience since I made the first
      few, I am still proud of my accomplishments.
    </p>

    <div class="row g-3">
      <Card
        v-for="card in uniList"
        :image="card.image"
        :title="card.title"
        :description="card.description"
        :link="card.link"
      />
    </div>
  </section>

  <section class="container">
    <h3>Personal</h3>
    <p>
      A few of my personal projects (including this website itself, which I made
      with Nuxt). At the moment I have mainly 3D modelling practice works to
      show, but I would love to also get more into sculpting and
      texture-painting in the future, as well as maybe some personal coding
      projects.
    </p>
    <p>
      Please note: The examples currently shown here are all older projects. I
      think I have improved considerably since then, however I was not able to
      work on a lot of new personal projects due to lack of time. I am also
      currently in the process of updating my portfolio, so hopefully I will be
      able to show you more up-to-date projects here soon.
    </p>

    <div class="row g-3">
      <Card
        v-for="card in personalList"
        :image="card.image"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </section>

  <Footer />
</template>
