<template>
  <a-table :dataSource="dataSource" :columns="columns" >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'options'">
        <router-link :to="{ name: routeName, params: { id: record.key } }">
          Go to User Details
        </router-link>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { USER_NAME_ROUTES } from './constants';

@Options({
  props: {
    dataSource: Array,
    columns: Array,
  }
})
export default class Table extends Vue {
    dataSource!: Array<any>
    columns!: Array<any>

    data(){
      return {
        routeName: USER_NAME_ROUTES.USER_DETAIL
      }
    }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>