<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> | <RouterLink to="/weather">Weather</RouterLink> | <strong>Current route path:</strong> {{ $route.fullPath }}
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script lang="js">
</script>

<style scoped>
</style>
