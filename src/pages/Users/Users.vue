<template>
  <main-layout>
    <a-breadcrumb>
      <a-breadcrumb-item>Tables</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Dashboard</a></a-breadcrumb-item>
    </a-breadcrumb>
    <users-table :dataSource="users" :columns="columns" />
  </main-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { USER_STORE, USER_TABLE_COLUMNS } from './constants';
import MainLayout from '@/layout/MainLayout.vue';
import UsersTable from '@/pages/Users/Table.vue';
import { fakeFetchData } from '@/utils/utils';
import { mapState } from 'vuex';

@Options({
  components: {
    MainLayout,
    UsersTable
  },
  computed: {
    ...mapState([USER_STORE.state.users]),
  }
})
export default class Users extends Vue {

    async mounted(){
        const users = await fakeFetchData({ url: '/users' });
        this.$store.commit(USER_STORE.mutations.setUser, users);
    }


    data() {
        return {
            columns: USER_TABLE_COLUMNS,
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>