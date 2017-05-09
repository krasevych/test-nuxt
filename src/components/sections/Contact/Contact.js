import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import BgIPad from 'src/components/BgIPad/BgIPad.vue';

@Component({
  components: {
    'kr-bg-ipad': BgIPad,
  },
})
class Contact extends Vue {}

export default Contact;
