<template>
  <div class="icon-name">
    {{name}}
  </div>
</template>

<script lang="js">
  export default {
    props: ['name'],
  };
</script>

<style scoped>
  .icon-name {
    display: inline-block;
    padding: 5px 5px;
    margin: 5px;
    border: 1px solid blue;
    border-radius: 5px;
    font-family: monospace;
    font-size: 20px;
  }
</style>
