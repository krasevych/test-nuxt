import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component()
class MainHeader extends Vue {
  title = 1;

  get jsx() {
    // h will be injected
    return <div id="foo">bar1</div>;
  }

  render() {
    const hi = () => {
      console.log('hello');
    };

    return <div {...{ on: { click: hi } }}> click me!!! </div>;
  }
}

export default MainHeader;
