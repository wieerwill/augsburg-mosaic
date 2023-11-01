<template>
  <header class="header">
    <h1 class="title">Augsburg Mosaic</h1>
    <p class="description">
      Discover Augsburg through my curated list of notable locations, events, and eateries. Whether you're a visitor
      exploring the city for the first time or a local seeking new experiences, this guide aims to enrich your journey
      through Augsburg.
    </p>
    <p class="hint" v-if="isMobile">
      For an enhanced experience, view this website on a larger screen.
    </p>
  </header>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { useMainStore } from '~/store/pinia';

export default {
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
  head() {
    return {
      title: 'Augsburg Mosaic | Discover the best spots in Augsburg',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore the best spots in Augsburg with Augsburg Mosaic. Discover attractions, food, culture, nature, and more.',
        }
      ]
    };
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.updateIsMobile);
    }
  }
}
</script>
  
<style scoped>
.header {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
}

.title {
  font-size: 2.5em;
  margin: 0;
}

.description {
  color: #555;
  line-height: 1.3;
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
}

.hint {
  color: #888;
  font-size: 0.9em;
}
</style>