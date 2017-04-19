import { Component, Inject, Model, Prop, Watch } from 'vue-property-decorator';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'asyncData',
  'fetch',
  'middleware',
  'layout',
  'transition',
  'scrollToTop',
]);

export { Component, Inject, Model, Prop, Watch };
