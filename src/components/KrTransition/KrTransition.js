import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  functional: true
})
class KrTransition extends Vue {
  render() {
    return <h1>hello</h1>;
  }
}

export default KrTransition;
