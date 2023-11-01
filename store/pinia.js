import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    isMobile: false,
    selectedLocation: null,
    mapCenter: [48.371, 10.898],
    mapZoom: 13,
  }),
  actions: {
    setIsMobile(value) {
      this.isMobile = value;
    },
    selectLocation(location) {
      this.selectedLocation = location;
      this.mapCenter = location.coordinates;
      this.mapZoom = 15;
    },
  }
});