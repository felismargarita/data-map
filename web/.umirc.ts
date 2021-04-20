import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash:true,
  proxy:{
    '/api': {
      target: 'http://localhost:8080',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    },
  },
  routes: [
    { path: '/login',component:'@/pages/Login'},
    { path: '/', component: '@/pages/index' },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  fastRefresh: {},
});
