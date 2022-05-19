<template>
  <Header/>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header/Header.vue';

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
  }
</style>
