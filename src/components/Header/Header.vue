<template>
  <header>
      <h2>
        TherapyIQ
      </h2>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        display: flex;
        width: 100%;
        background-color: blue;
        min-height: 2em;
    }

    header h2 {
      padding: 0em 1em;
      color: white;
    }
</style>