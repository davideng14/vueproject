<template>
    User Detail
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    dataSource: Array,
    columns: Array,
  }
})
export default class Table extends Vue {
    dataSource!: Array<any>
    columns!: Array<any>
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>