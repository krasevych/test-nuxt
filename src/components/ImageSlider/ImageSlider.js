import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import KrTransition from 'src/components/KrTransition/KrTransition.vue';

@Component({
  props: {
    images: {
      type: Array,
    },
  },
  components: {
    KrTransition
  }
})
class ImageSlider extends Vue {
  currentNumber = 0;

  mounted() {
    console.log(111, new KrTransition())
    this.start();
  }

  start(imgIndex = this.currentNumber) {
    this.$data.currentNumber = imgIndex;
    const nextIndex = imgIndex < this.$props.images.length - 1
      ? imgIndex + 1
      : 0;

    setTimeout(() => {
      this.start(nextIndex);
    }, 5000);
  }
}

export default ImageSlider;
