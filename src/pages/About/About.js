import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from '~components/HelloWorld';
import { FULLNAME } from 'src/store/modules/user';

@Component({
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {
  layout = 'default';
  t = 5;

  get computedMsg() {
    return this.$store.state.user.firstName;
  }

  get fullName() {
    return this.$store.getters[FULLNAME];
  }
}
