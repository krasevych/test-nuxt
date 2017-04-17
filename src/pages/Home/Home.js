import { FULLNAME, CHANGE_NAME } from 'src/store/modules/user';

export default {
  fetch({ store }) {
    console.log(333);
    return new Promise((resolve) => {
      setTimeout(() => {
        store.commit(CHANGE_NAME, 'VoVa');
        resolve({
          a: 'Hello',
        });
      }, 1000);
    });
  },
  asyncData({ store }) {
    console.log(111, store);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          m: 'Hello',
        });
      }, 1000);
    });
  },
  data() {
    return {
      t: 1,
      username: 'test',
    };
  },
  computed: {
    fullName() {
      return this.$store.getters[FULLNAME];
    },
  },
  components: {},
  methods: {
    changeName() {
      this.$store.commit(CHANGE_NAME, this.$data.username);
    },
  },
  created() {
    console.log(555, this.$store);
  },
};
