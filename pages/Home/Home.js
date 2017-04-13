import { FULLNAME, CHANGE_NAME } from '../../store/user';

export default {
  data () {
    return {
      t: 1,
      username: 'test'
    }
  },
  computed: {
    fullName () {
      console.log(555, this.$store)
      return this.$store.getters[FULLNAME]
    }
  },
  methods: {
    changeName () {
      this.$store.commit(CHANGE_NAME, this.$data.username)
    }
  }
}
