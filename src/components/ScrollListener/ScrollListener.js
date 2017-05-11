import Vue from 'vue';
import Component from 'src/plugins/classComponent';

@Component()
class ScrollListener extends Vue {
  handlerScroll() {
    this.$emit('change', document.body.scrollTop);
  }

  handlerScrollBind = this.handlerScroll.bind(this);

  mounted() {
    window.addEventListener('scroll', this.handlerScrollBind);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handlerScrollBind);
  }
}

export default ScrollListener;
