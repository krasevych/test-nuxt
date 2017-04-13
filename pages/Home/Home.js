import { GETTER_FULLNAME, CHANGE_NAME } from '../../store/test/test';

export default {
  data () {
    return {
      t: 1,
      username: 'test'
    }
  },
  computed: {
    test () {
      console.log(333, this.$store)
      return this.$store.state.test.a
    },
    fullName () {
      console.log(555, this.$store)
      return this.$store.getters[GETTER_FULLNAME]
    }
  },
  methods: {
    changeName () {
      this.$store.commit(CHANGE_NAME, this.$data.username)
    }
  }
}
