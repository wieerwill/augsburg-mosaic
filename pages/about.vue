<template>
    <div class="about-container">
        <h1 class="about-title">Augsburg Mosaic</h1>
        <p class="about-description">
            Welcome to Augsburg Mosaic, a delightful endeavor crafted by the creative mind <a href="https://wieerwill.de" class="external-link">WieErWill</a>. 
            This project blossomed from a genuine fondness for the city of Augsburg, aiming to unfold its hidden gems and notable locales to both visitors and residents alike.
        </p>
        <p class="about-detail">
            Augsburg Mosaic serves as a digital guide, offering a curated list of places categorized as Attractions, Food spots, Cultural hubs, Nature retreats, and Others.
            Through an interactive map and a user-friendly list, one can explore, filter, and learn more about each location.
            Utilizing technologies such as Vue.js, Nuxt.js, Leaflet.js for map rendering, and Pinia for state management, this project embodies a seamless blend of design and functionality,
            all while being a purely static site optimized for SEO. This also means, i don't use cookies or any other data, especially not yours in any way.
        </p>
        <p class="about-note">
            This endeavor is purely a hobby, unfunded yet rich in spirit. Feel free to traverse through the mosaic of Augsburg, 
            all I hope is for it to bring joy and not to cause harm. The icons embellishing this site are courtesy of FontAwesome, 
            while the images are captured through my lens.
        </p>
        <a href="/" class="back-link"><strong>Back to Map</strong></a>
    </div>
</template>
<style scoped>
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: auto;
    max-width: 800px;
    background-color: #f7f4f4;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 16px 16px rgba(0, 0, 0, 0.2);
    margin-top: 3rem;
}

.about-title {
    font-size: 36px;
    margin-bottom: 20px;
}

.about-description,
.about-detail,
.about-note {
    text-align: left;
    margin-bottom: 20px;
    line-height: 1.6;
}

.external-link,
.back-link {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s;
}

.external-link:hover,
.back-link:hover {
    color: #2c3e50;
}

.back-link {
    margin-top: 20px;
    padding: 10px 20px;
    border: 1px solid #3498db;
    border-radius: 5px;
    text-align: center;
}
</style>
