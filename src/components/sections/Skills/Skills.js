import Vue from 'vue';
import Component from 'src/plugins/classComponent';
import SectionHeader from 'src/components/SectionHeader/SectionHeader.vue';
import ItemProgress from 'src/components/ItemProgress/ItemProgress.vue';

@Component({
  components: {
    'kr-section-header': SectionHeader,
    'kr-item-progress': ItemProgress,
  },
})
class Skills extends Vue {
  title = 'my skills';
  description = 'Major skills that help me create beautiful websites';
  skills = [
    {
      title: 'JavaScript',
      progress: 80,
    },
    {
      title: 'HTML',
      progress: 99,
    },
    {
      title: 'CSS',
      progress: 95,
    },
    {
      title: 'JavaScript',
      progress: 80,
    },
  ];
}

export default Skills;
