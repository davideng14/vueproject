const USER_STORE = Object.freeze({
    state: {
        users: 'users',
    },
    mutations: {
        setUser: 'setUser',
    }
});

const USER_NAME_ROUTES = Object.freeze({
    USER_DETAIL: 'userDetail'
});

const USER_TABLE_COLUMNS = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Options',
      dataIndex: 'options',
      key: 'options',
    },
  ] ;

export {
    USER_STORE,
    USER_NAME_ROUTES,
    USER_TABLE_COLUMNS,
}