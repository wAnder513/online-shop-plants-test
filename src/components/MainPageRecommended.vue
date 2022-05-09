<template>
  <h2 class="recommended_title-category">Recommended for you</h2>

    <div class="recommended_cards-wrapper">
        <div class="recommended_cards">
            <div class="recommended_card-container">
                <div class="recommended_card img-obi"></div>
                <h4 class="recommended_card-logo">ОБИ</h4>
            </div>

            <div class="recommended_card-container">
                <div class="recommended_card img-leroy-merlin"></div>
                <h4 class="recommended_card-logo">Леруа Мерлен</h4>
            </div>

            <div class="recommended_card-container">
                <div class="recommended_card"></div>
                <h4 class="recommended_card-logo">Название</h4>
            </div>
        </div>
    </div>

    <div class="recommended_banner">
        <div class="recommended_left">
            <div class="recommended_banner-title">Rubber-bearing ficus (elastic)</div>
            <div class="recommended_banner-text">Ficus elastica (Ficus elastica), or rubber-bearing ficus...</div>            
        </div>

        <div class="recommended_icon-plant"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.recommended_title-category {
    font-size: 18px;
    margin-bottom: 16px;
}

.recommended_cards-wrapper {
    margin: 0 -8px;
    overflow-y: auto;
}

.recommended_cards {
    display: flex;
    margin: 0 8px 32px;
}

.recommended_cards-wrapper::-webkit-scrollbar {
  display: none;
}

.recommended_card {
    width: 128px;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    margin-bottom: 8px;
    flex: 0 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
}

.recommended_card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
    text-align: center;
}

.recommended_card-container:last-child {
    margin-right: 0;
}

.img-leroy-merlin {
    background-image: url(../assets/images/leroy-merlin-logo.svg);
}

.img-obi {
    background-image: url(../assets/images/obi-logo.svg);
}

.recommended_banner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    color: #fff;
    background: linear-gradient(180deg, #CBD623 0%, #41701E 100%);
    border-radius: 8px;
}

.recommended_left {
    margin-right: 8px;
}

.recommended_icon-plant {
    background-image: url(../assets/images/plant.svg);
    width: 50px;
    height: 84px;
    flex-shrink: 0;
}

.recommended_banner-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
}

.recommended_banner-text {
    font-size: 14px;
    opacity: 0.5;
}
</style>