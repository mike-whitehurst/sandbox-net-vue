<template>
  <div class="composition-component">
    <h2>Composition</h2>

    <IconCard name="Exclam" icon="!" />
    <IconCard name="At" icon="@" />
    <IconCard name="Hash" icon="#" />
  </div>
</template>

<script lang="js">
  import IconCard from './IconCard/IconCard.vue';

  export default {
    components: {
      IconCard
    }
  }
</script>

<style scoped>
</style>
