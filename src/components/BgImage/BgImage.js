import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import ImageSlider from 'src/components/ImageSlider/ImageSlider.vue';

@Component({
  components: {
    ImageSlider,
  },
})
class BgImage extends Vue {
  images = [1,2,3,4,5].map(num => `/images/bg-image/slider${num}.jpg`)
}

export default BgImage;
