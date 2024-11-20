<template>
  <div class="icon-card">
    <IconName :name="name" />
    <Icon :icon="icon" />
  </div>
</template>

<script lang="js">
  import Icon from './Icon.vue';
  import IconName from './IconName.vue';

  export default {
    props: ['name', 'icon'],
    components: {
      Icon,
      IconName
    }
  }
</script>

<style scoped>
  .icon-card {
    display: inline-block;
    padding: 5px 5px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>
