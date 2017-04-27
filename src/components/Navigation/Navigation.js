import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    items: Array
  }
})
class Navigation extends Vue {
}

export default Navigation;
