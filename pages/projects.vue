<script setup>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import Card from "@/components/Card.vue";

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
  <Navigation />

  <div class="banner">
    <div class="banner-inside">
      <h1>Alexandra Fontner</h1>
      <h3>My Projects</h3>
      <p>
        Here I want to showcase a few of the projects I did so far, to show you
        what kind of work I am capable of and also enjoy doing. They are not as
        numerous yet as I would wish for, but I hope to change this over time as
        I learn more and more.
      </p>
    </div>
  </div>

  <section class="container">
    <h3>University</h3>
    <p>
      Some of my university projects. They were a very valuable learning
      experience for me and even though I have gained a lot more experience
      since I made the first few, I am still proud of my accomplishments as a
      beginner. More to come soon hopefully.
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
      A few of my personal projects. At the moment I have mainly 3D modelling
      practice works to show, but I would love to also get more into sculpting
      and texture-painting in the future, as well as maybe some personal coding
      projects.
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
