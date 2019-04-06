
import HeadSwiper from '../../components/HeadSwiper.vue';
import HomeBodySwiper from '../../components/HomeBodySwiper.vue';

export default {
  name: "home",
  data() {
    return {
      showTop: false
    }
  },
  components: {
    HeadSwiper,
    HomeBodySwiper,
  },
  methods: {
    handleScroll() {
      this.showTop = window.scrollY > 440 ? true : false
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}