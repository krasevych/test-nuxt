import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import Logo from 'src/components/Logo/Logo.vue';
import Navigation from 'src/components/Navigation/Navigation.vue';

@Component({
  components: {
    Logo,
    Navigation
  }
})
class Header extends Vue {
  navItems = [
    'Home',
    'Features',
    'Portfolio',
    'About Us'
  ]
}

export default Header;
