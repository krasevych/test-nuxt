import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import ButtonWhite from 'src/components/buttons/ButtonWhite/ButtonWhite.vue';

@Component({
  components: {
    ButtonWhite
  }
})
class Home extends Vue {
}

export default Home;
