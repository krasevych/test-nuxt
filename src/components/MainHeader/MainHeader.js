import Vue from 'vue';
import { Component} from 'src/plugins/classComponent';

@Component()
class MainHeader extends Vue {
  title;
  render() {
    return (<div id="foo">{this.title}</div>);
  }
}

export default MainHeader;
