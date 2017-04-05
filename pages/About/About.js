import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class About extends Vue {
  layout = 'default';
  t = 5;
  get computedMsg () {
    return 'computed ' + this.t
  }
}