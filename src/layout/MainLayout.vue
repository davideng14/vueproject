<template>
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    main {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>