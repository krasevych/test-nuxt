import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import ImageSlider from 'src/components/ImageSlider/ImageSlider.vue';
import range from 'lodash/range';

@Component({
  components: {
    ImageSlider,
  },
})
class BgImage extends Vue {
  images = range(1,5).map(num => `/images/bg-image/slider${num}.jpg`);
}

export default BgImage;
