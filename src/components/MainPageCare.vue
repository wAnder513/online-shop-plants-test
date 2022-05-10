<template>
    <div class="care_header">
        <div class="title-category">Plant care</div>
        <router-link class="link-see-all" to="/care">See all</router-link>
    </div>

    <div class="care_wrapper">
        <div class="care_cards">
            <div class="care_card">
                <div class="care_picture picture1"></div>
                <div class="care_name">Pots for plants</div>
                <div class="care_description">Flower pot Ingreen ø13 h10. 4 cm v0. 7 L plastic marble</div>
                <button class="care_btn">Go over</button>            
            </div>

            <div class="care_card">
                <div class="care_picture picture1"></div>
                <div class="care_name">Soil source</div>
                <div class="care_description">Geolia soil "For orchids" 2.5 L</div>
                <button class="care_btn">Go over</button>
            </div>
        </div>
    </div>
</template>

<style>
.care_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.care_title {
    font-size: 18px;
    margin-bottom: 16px;
}

.care_wrapper {
    margin: 0 -8px;
    overflow-y: auto;
}

.care_cards {
    display: flex;
}

.care_card {
    width: 240px;
    height: 256px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 8px;
    flex: 0 0 auto;
}

.care_picture {
    width: 224px;
    height: 124px;
    margin-bottom: 8px;
    background-repeat: no-repeat;
}

.picture1 {
    background-image: url(../assets/images/picture-pots.svg);
}

.care_name {
    color: #64A315;
    font-size: 16px;
    margin-bottom: 4px;
}

.care_description {
    font-size: 14px;
    color: #111827;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 8px;
    flex: 1 1 auto;
}

.care_btn {
    background: #64A315;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
}

.care_btn:focus,
.care_btn:hover {
    background: #5d9814;
}
</style>