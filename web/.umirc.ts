import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash:true,
  routes: [
    { path: '/login',component:'@/pages/Login'},
    { path: '/', component: '@/pages/index' },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  fastRefresh: {},
});
