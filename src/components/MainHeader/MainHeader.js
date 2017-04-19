import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component()
class MainHeader extends Vue {
  title=1;
  get jsx() { // h will be injected
    return <div id="foo">bar1</div>
  }
  render() {
    console.log(111, this.jsx)
    return (<div id="foo">
      tttt: {this.title}

      jsx: {this.jsx.children}
      </div>);
  }
}

export default MainHeader;
