<template>
  <div class="form-component">
    <h1>Form</h1>
    <p><label>First Name</label>: <input type="text" v-model="person.firstName" /> {{person.firstName}}</p>
    <p><label>Last Name</label>: <input type="text" v-model="person.lastName" /> {{person.lastName}}</p>
    <p><button @click="handleSubmit">Submit</button> <span class="submitted" v-if="displaySubmitted">Submitted</span></p>
  </div>
</template>

<script lang="js">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        person: {
          firstName: '',
          lastName: ''
        },
        displaySubmitted: false,
      };
    },
    methods: {
      async handleSubmit() {
        fetch('api/form/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.person)
        }).then(() => {
            this.displaySubmitted = true;
        });
      }
    },
  });
</script>

<style scoped>
  .submitted {
    color: green;
  }
</style>
