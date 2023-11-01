<template>
    <div class="map-component">
        <LMap ref="map" :zoom="zoom" :center="center" :max-bounds="maxBounds">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base" name="OpenStreetMap" />
            <LMarker v-for="location in locations" :key="location.id" :lat-lng="location.coordinates"
                @click="handleMarkerClick(location)" />
        </LMap>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['center', 'zoom', 'maxBounds', 'locations', 'selectedLocation']);

const emit = defineEmits(['marker-click']);

const handleMarkerClick = (location) => {
    emit('marker-click', location);
};
</script>

<style scoped>
.map-component {
    height: 100%;
    width: 100%;
    border: 1px solid #434343
}
</style>
