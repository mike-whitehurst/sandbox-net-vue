<template>
  <div class="icon">
    {{icon}}
  </div>
</template>

<script lang="js">
  export default {
    props: ['icon'],
  };
</script>

<style scoped>
  .icon {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    padding: 5px 5px;
    margin: 5px;
    border: 1px solid red;
    border-radius: 5px;
    text-align: center;
    line-height: 1rem;
  }
</style>
