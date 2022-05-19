<template>
  <a-table :dataSource="dataSource" :columns="columns" >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'staff'">
        <router-link :to="{ name: routeName, params: { company_id: record.key } }">
          Go to Staff table
        </router-link>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { COMPANY_NAME_ROUTES } from './constants';

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
        routeName: COMPANY_NAME_ROUTES.COMPANY_STAFF
      }
    }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>