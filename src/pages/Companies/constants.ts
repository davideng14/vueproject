const COMPANY_STORE = Object.freeze({
    state: {
        companies: 'companies',
    },
    mutations: {
        setCompanies: 'setCompanies',
    }
});

const COMPANY_NAME_ROUTES = Object.freeze({
    COMPANY_STAFF: 'userStaff'
});

const COMPANY_COLUMNS_TABLE = [
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
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
      title: 'Staff',
      dataIndex: 'staff',
      key: 'staff',
    },
  ];

export {
    COMPANY_NAME_ROUTES,
    COMPANY_STORE,
    COMPANY_COLUMNS_TABLE
}