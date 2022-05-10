<template>
    <div class="plants_title">
        <div class="title-category">Plants and flowers</div>
        <router-link class="link-see-all" to="/plants">See all</router-link>
    </div>

    <div class="plants_cards">
        <div class="plants_card">
            <div class="plants_card-bg flower1"></div>

            <div class="plants_raiting">
                <div class="plants_star"></div>
                <div class="plants_number">8.0</div>
            </div>

            <div class="plants_name">Orchid</div>

            <button class="plants_button">Review</button>
        </div>

        <div class="plants_card">
            <div class="plants_card-bg flower2"></div>
            
            <div class="plants_raiting">
                <div class="plants_star"></div>
                <div class="plants_number">9.0</div>
            </div>

            <div class="plants_name">Pions</div>

            <button class="plants_button">Review</button>
        </div>

        <div class="plants_card">
            <div class="plants_card-bg flower3"></div>
            
            <div class="plants_raiting">
                <div class="plants_star"></div>
                <div class="plants_number">5.6</div>
            </div>

            <div class="plants_name">Aloe</div>

            <button class="plants_button">Review</button>
        </div>

        <div class="plants_card">
            <div class="plants_card-bg flower4"></div>
            
            <div class="plants_raiting">
                <div class="plants_star"></div>
                <div class="plants_number">7.5</div>
            </div>

            <div class="plants_name">Chrysanthemum</div>

            <button class="plants_button">Review</button>
        </div>
    </div>
</template>

<style scoped>
.plants_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.plants_cards {
    display: flex;
    flex-wrap: wrap;
}

.plants_card {
    width: 144px;
    height: 201px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(17, 24, 39, 0.08);
    border-radius: 8px;
    margin-right: 16px;
    margin-bottom: 16px;
    text-align: center;
}

.plants_card:nth-child(even) {
    margin-right: 0;
}

.plants_card-bg {
    height: 88px;
    background-color: #111827;
    border-radius: 8px 8px 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 4px;
}

.flower1 {
    background-image: url(../assets/images/flower1.svg);
}

.flower2 {
    background-image: url(../assets/images/flower2.svg);
}

.flower3 {
    background-image: url(../assets/images/flower3.svg);
}

.flower4 {
    background-image: url(../assets/images/flower4.svg);
}

.plants_name,
.plants_button {
    font-size: 16px;
    font-weight: 500;
}

.plants_name {
    margin-bottom: 28px;
}

.plants_button {
    background-color: #E2FEDB;
    color: #6BA91A;
    padding: 10px 36px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.plants_button:focus,
.plants_button:hover {
    background-color: #cae4c4;
}

.plants_raiting {
    position: relative;
    bottom: 8px;
    left: 50px;
    display: flex;
    width: 44px;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #F59E0B;
    border-radius: 2px;
    padding: 2px 4px;
}

.plants_star {
    width: 13px;
    height: 12px;
    margin-right: 2px;
    background-image: url(../assets/icons/star.svg);
    background-repeat: no-repeat;
}

.plants_number {
    font-size: 12px;    
}
</style>