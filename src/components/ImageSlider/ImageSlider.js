import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component({
  props: {
    images: {
      type: Array,
    },
  },
})
class ImageSlider extends Vue {
  currentImage = '';

  mounted() {
    this.changeImage(0);
  }

  changeImage(imgIndex) {
    this.$data.currentImage = this.$props.images[imgIndex];

    console.log(this)
    setTimeout(() => {
      const newImgIndex = imgIndex < this.$props.images.length -1
        ? imgIndex + 1
        : 0;

      this.changeImage(newImgIndex);
    }, 1000);
  }
}

export default ImageSlider;
