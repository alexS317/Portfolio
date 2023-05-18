<script setup>
const props = defineProps({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
});
</script>

<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100">
      <img
        class="card-img-top"
        :src="`/images/thumbnail_${props.image}.png`"
        alt=""
      />
      <div class="card-body">
        <h4 class="card-title">{{ props.title }}</h4>
        <p class="card-text">
          {{ props.description }}
          <a
            v-if="props.link"
            :href="`${props.link}`"
            target="_blank"
            rel="noopener noreferrer"
            >Play it here!</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  color: black;
}
</style>
