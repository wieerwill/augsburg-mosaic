import { useMainStore } from '~/store/pinia';

const mobileMixin = {
  setup() {
    const store = useMainStore();
    const isMobile = ref(store.isMobile);

    const updateIsMobile = () => {
      isMobile.value = window.innerWidth <= 768;
      store.setIsMobile(isMobile.value);
    };

    onMounted(() => {
      if (process.client) {
        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);
      }
    });

    return {
      isMobile,
      updateIsMobile
    };
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.updateIsMobile);
    }
  }
};

export default mobileMixin