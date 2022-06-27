export default {
  pages: ['pages/index/index', 'pages/noauth/index'],
  subPackages: [
    {
      root: 'customPackages',
      pages: [
        'add/index',
        'editBase/index',
        'editExtra/index',
        'search/index',
        'detail/index',
      ],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
    backgroundColor: '#f9f9f9',
  },
};
