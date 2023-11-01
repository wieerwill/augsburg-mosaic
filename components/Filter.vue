<template>
    <div class="filter-container">
        <div class="categories">
            <button v-for="category in categories" :key="category.value"
                :class="{ 'selected': selectedCategories.includes(category.value) }" @click="toggleCategory(category.value)"
                :title="category.label">
                <img :src="`/icons/${category.value}.svg`" :alt="category.label">
            </button>
        </div>
        <div class="search-container">
            <img src="/icons/search.svg" alt="Search Icon" class="search-icon">
            <input type="text" v-model="searchText" @input="updateFilter" placeholder="Search by title or address"
                class="search-input">
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        locations: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            categories: [
                { value: 'attraction', label: 'Attraction' },
                { value: 'food', label: 'Food' },
                { value: 'cultural', label: 'Cultural' },
                { value: 'nature', label: 'Nature' },
                { value: 'other', label: 'Other' },
            ],
            selectedCategories: ['attraction', 'food', 'cultural', 'nature', 'other'],
            searchText: ''
        };
    },
    computed: {
        filteredLocations() {
            const lowerCaseSearchText = this.searchText.toLowerCase();
            const filtered = this.locations.filter(location =>
                this.selectedCategories.includes(location.category) &&
                (location.title.toLowerCase().includes(lowerCaseSearchText) ||
                    location.address.toLowerCase().includes(lowerCaseSearchText))
            );
            return filtered.sort((a, b) => a.title.localeCompare(b.title));
        }
    },
    methods: {
        toggleCategory(category) {
            const index = this.selectedCategories.indexOf(category);
            if (index > -1) {
                this.selectedCategories.splice(index, 1);
            } else {
                this.selectedCategories.push(category);
            }
            this.updateFilter();
        },
        updateFilter() {
            this.$emit('update-filter', this.filteredLocations);
        }
    }
};
</script>
  
<style scoped>
.filter-container {
    display: flex;
    flex-direction: column;
    border: 2px solid #454545;
    border-radius: 8px;
}

.categories {
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    padding: 5px;
}

.categories button {
    flex: 1;
    background: none;
    border: none;
    border-radius: 4px;
    margin: 0 5px;
    padding: 3px;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.categories button img {
    width: 20px;
    height: 20px;
    display: block;
    padding: 3px;
    margin: 0 auto;
}

.categories button.selected {
    background-color: #2dff1ac6;
}

.search-container {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 90%;
    margin: 0 auto 3px auto;
}

.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
}

.search-input {
    padding: 10px;
    padding-left: 35px;
    /* Adjusted padding to account for the icon */
    border: none;
    border-radius: 4px;
    box-shadow: none;
    outline: none;
}
</style>
  