import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import HelloWorld from 'src/components/HelloWorld';
import Logo from 'src/components/Logo/Logo.vue'
import {FULLNAME} from 'src/store/modules/user';

@Component({
  components: {
    HelloWorld,
    Logo,
  },
})
class About extends Vue {
  layout = 'default';
  t = 7;

  get computedMsg() {
    return this.$store.state.user.firstName;
  }

  get fullName() {
    return this.$store.getters[FULLNAME];
  }
}

export default About;
