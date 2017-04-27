import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    images: Array,
  },
})
class ImageSlider extends Vue {
  currentNumber = 0;

  start(imgIndex = this.currentNumber) {
    this.currentNumber = imgIndex;
    const nextIndex = imgIndex < this.images.length - 1 ? imgIndex + 1 : 0;
    setTimeout(() => this.start(nextIndex), 5000);
  }

  mounted() {
    this.start();
  }
}

export default ImageSlider;
