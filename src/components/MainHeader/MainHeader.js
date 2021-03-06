import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import Logo from 'src/components/Logo/Logo.vue';

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

    return <div>
      <Logo/>
      <div {...{ on: { click: hi } }}> click me!!!</div>
    </div>;
  }
}

export default MainHeader;
