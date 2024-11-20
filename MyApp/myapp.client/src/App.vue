<template>
  <nav>
    <b>NAV:</b> <RouterLink to="/">Home</RouterLink> | <RouterLink to="/weather">Weather</RouterLink> | <RouterLink to="/form">Form</RouterLink> | <RouterLink to="/composition">Composition</RouterLink>
  </nav>
  <hr />
  <main>
    <RouterView />
    <hr />
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </main>
</template>

<script lang="js">
</script>

<style scoped>
</style>
