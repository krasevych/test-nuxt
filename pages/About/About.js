import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from '~components/HelloWorld';

@Component({
  components: {
    'hello-world': HelloWorld
  }
})
export default class About extends Vue {
  layout = 'default';
  t = 5;

  get computedMsg () {
    console.log(111, this.$store.getters.fullName);
    return 'computed ' + this.t + this.$store.state.test.a;
  }

  get fullName () {
    return 'h'
    // return this.$state.getters.test.fullName();
  }
}