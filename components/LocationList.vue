<template>
    <div class="location-list">
        <div v-for="location in locations" :key="location.id" class="location-card"
            :class="{ highlighted: selectedLocation && selectedLocation.id === location.id }" :data-id="location.id"
            ref="locationCards" @click="handleLocationClick(location)">
            <div class="card-header">
                <img v-if="location.image" :src="location.image" alt="location image" class="location-image" />
                <div class="location-info">
                    <h3 class="location-title">{{ location.title }}</h3>
                    <p class="location-category">{{ location.category }}</p>
                    <!--<div class="location-rating">
                        <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= location.rating }">&#9733;</span>
                    </div>-->
                </div>
            </div>
            <p class="location-description">{{ location.description }}</p>
            <p class="location-address">{{ location.address }}</p>
            <!--<div class="location-notes">
                <p><strong>Notes:</strong> {{ location.notes }}</p>
            </div>-->
        </div>
    </div>
</template>
<script>
import { nextTick, defineComponent } from 'vue';

export default defineComponent({
    props: {
        locations: {
            type: Array,
            required: true,
        },
        selectedLocation: {
            require: false
        }
    },
    data() {
        return {
            locationCards: [] 
        };
    },
    updated() {
        if (this.selectedLocation) {
            const highlightedCard = this.locationCards.find(card => card.dataset.id === this.selectedLocation.id.toString());
            if (highlightedCard) {
                highlightedCard.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    watch: {
        selectedLocation: {
            immediate: true,
            handler(newValue) {
                if (newValue) {
                    this.scrollToLocation(newValue.id);
                }
            },
        },
    },
    emits: ['location-click'],
    methods: {
        handleLocationClick(location) {
            this.$emit('location-click', location);
        },
        scrollToLocation(id) {
            nextTick(() => {
                const highlightedCard = Array.from(this.$refs.locationCards).find(card => card.dataset.id === id.toString());
                if (highlightedCard) {
                    highlightedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        },
    }
});
</script>
<style scoped>
.location-list {
    height: 100%;
    overflow-y: auto;
    /* Makes the location list scrollable */
    padding: 20px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.location-card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #3e3c3c81;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    cursor: pointer;
}

.location-card:hover {
    transform: scaleY(1.05) scaleX(1.01);
}

.card-header {
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: center;
}

.location-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
    object-fit: cover;
}

.location-info {
    text-align: center;
}

.location-title {
    font-size: 1.5em;
    margin: 0;
}

.location-category {
    font-size: 1em;
    margin: 5px 0;
    color: #555;
}

.location-rating .star {
    font-size: 1.2em;
    color: #ddd;
}

.location-rating .star.filled {
    color: #f39c12;
}

.location-description,
.location-address {
    margin: 10px 0;
    text-align: center;
}

.location-notes {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

/* Media query for larger screens */
@media (min-width: 768px) {
    .card-header {
        flex-direction: row;
        align-items: flex-start;
    }

    .location-image {
        margin-bottom: 0;
        margin-right: 20px;
    }

    .location-info,
    .location-description,
    .location-address,
    .location-notes {
        text-align: left;
    }
}

.highlighted {
    background-color: rgba(157, 221, 221, 0.551);
    transition: background-color 0.3s;
}
</style>
