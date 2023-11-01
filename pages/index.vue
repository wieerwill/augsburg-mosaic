<template>
    <Header />
    <div class="container">
        <div class="sidebar" :class="{ 'is-mobile': isMobile }">
            <Filter :locations="locations" @update-filter="updateFilteredLocations" />
            <div class="location-list-container">
                <LocationList :locations="filteredLocations" :selectedLocation="selectedLocation"
                    @location-click="handleLocationClick" />
            </div>
        </div>
        <div class="map-container" v-if="!isMobile">
            <Map :center="mapCenter" :zoom="mapZoom" :maxBounds="maxBounds" :locations="filteredLocations"
                @marker-click="handleMarkerClick" :selectedLocation="selectedLocation" ref="map" />
        </div>
    </div>
    <Footer />
</template>

<script>
import locationsData from '~/assets/locations.json';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Filter from '~/components/Filter.vue';
import LocationList from '~/components/LocationList.vue';
import Map from '~/components/Map.vue';

export default {
    data() {
        return {
            isMobile: false,
            maxBounds: [
                [48.2, 10.6], // Southwest coordinates
                [48.6, 11.2]  // Northeast coordinates
            ],
            mapCenter: [48.3689, 10.8979],
            mapZoom: 12,
            selectedLocation: null,
            filteredLocations: [],
            locations: locationsData
        }
    },
    components: {
        Header,
        Footer,
        Filter,
        LocationList,
        Map
    },
    created() {
        this.filteredLocations = [...this.locations].sort((a, b) => a.title.localeCompare(b.title))
    },
    mounted() {
        this.$nextTick(this.updateHeaderFooterHeight);
        window.addEventListener('resize', this.updateHeaderFooterHeight);

        this.$nextTick(this.updateLocationListHeight);
        window.addEventListener('resize', this.updateLocationListHeight);

        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateHeaderFooterHeight);
        window.removeEventListener('resize', this.updateLocationListHeight);
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        updateFilteredLocations(filteredLocations) {
            this.filteredLocations = filteredLocations;
        },
        handleLocationClick(location) {
            this.selectedLocation = location;
            this.mapCenter = location.coordinates;
            this.mapZoom = 16;
        },
        handleMarkerClick(location) {
            this.selectedLocation = location;
            this.mapCenter = location.coordinates;
        },
        handleResize() {
            this.isMobile = window.innerWidth <= 768;
        },
        updateHeaderFooterHeight() {
            const headerHeight = document.querySelector('header').offsetHeight;
            const footerHeight = document.querySelector('footer').offsetHeight;
            const totalHeight = headerHeight + footerHeight;
            document.documentElement.style.setProperty('--header-footer-height', `${totalHeight}px`);
        },
        updateLocationListHeight() {
            const filterHeight = document.querySelector('.filter-container').offsetHeight;
            const containerHeight = document.querySelector('.container').clientHeight;
            const newHeight = containerHeight - filterHeight - 45
            const locationListElement = document.querySelector('.location-list');
            locationListElement.style.height = `${newHeight}px`;
        }
    }
}
</script>

<style scoped>
.header {
    background-color: #e0f7fa;
    padding: 20px;
    margin: 0;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: row;
    height: calc(100vh - var(--header-footer-height));
}

.sidebar {
    flex: 1;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    border: 1px solid #434343
}

.location-list-container {
    overflow-y: auto;
    flex-grow: 1;
}

.map-container {
    flex: 1;
    transition: flex 0.3s;
    min-width: 10rem;
    min-height: 10rem;
    height: 100%;
}

.is-mobile {
    flex: 3;
}

.is-mobile .map-container {
    display: none;
}

.title {
    color: #2c3e50;
}

.description {
    color: #2c3e50;
}

/* Mosaic style background for body */
body {
    background-color: #ffffff;
    background-image:
        linear-gradient(45deg, #f06, #f06 25%, transparent 25%, transparent 75%, #f06 75%, #f06),
        linear-gradient(45deg, #f06, #f06 25%, transparent 25%, transparent 75%, #f06 75%, #f06);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
}
</style>
