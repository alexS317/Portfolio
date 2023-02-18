<script setup></script>

<template>
  <nav class="nav justify-content-end">
    <router-link class="nav-link" to="/">About</router-link>
    <router-link class="nav-link" to="/projects">Projects</router-link>
  </nav>
</template>

<style>
.nav {
  font-size: x-large;
  font-weight: 600;
}

.nav-link {
  color: azure;
  margin: 10px;
  text-decoration: none;
}
.nav-link:hover {
  color: azure;
  text-shadow: 0 0 5px #077fff, 0 0 5px #077fff, 0 0 10px #077fff;
}
.nav-link:focus {
  color: azure;
}

.router-link-active {
  text-shadow: 0 0 5px #077fff, 0 0 10px #077fff;
}
</style>
