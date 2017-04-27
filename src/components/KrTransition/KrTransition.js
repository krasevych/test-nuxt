import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  functional: true,
})
class KrTransition extends Vue {
  render(h, { data, children }) {
    return <transition {...data}>{children}</transition>;
  }
}

export default KrTransition;
