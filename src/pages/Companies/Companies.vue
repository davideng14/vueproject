<template>
  <main-layout>
    <a-breadcrumb>
      <a-breadcrumb-item>Tables</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Dashboard</a></a-breadcrumb-item>
    </a-breadcrumb>
    <company-table :dataSource="companies" :columns="columns" />
  </main-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import { mapState } from 'vuex';

import MainLayout from '@/layout/MainLayout.vue';
import { COMPANY_STORE, COMPANY_COLUMNS_TABLE } from './constants';
import CompanyTable from '@/pages/Companies/Table.vue';
import { fakeFetchData } from '@/utils/utils';
import { mapState } from 'vuex';


@Options({
  components: {
    MainLayout,
    CompanyTable,
  },
  computed: {
    ...mapState([COMPANY_STORE.state.companies]),
  }
})
export default class Companies extends Vue {

  async mounted(){
    const companies = await fakeFetchData({ url: '/companies' });
    this.$store.commit(COMPANY_STORE.mutations.setCompanies, companies);
  }

  data() {
    return {
      columns: COMPANY_COLUMNS_TABLE,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>