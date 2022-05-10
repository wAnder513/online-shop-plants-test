<template>
    <header class="main-page_header">
            <img :src="ecoGreenLogo" alt="EcoGreen">
        <div class="main-page_nav">
            <div class="main-page_loupe"></div>
            <div class="main-page_font-size"></div>
            <div class="main-page_bars" @click="changeValueNavMenu"></div>
        </div>
    </header>

    <div v-if="isOpenNavMenu" class="main-page_navigation">
        <div class="main-page_navigation-login">
            <div class="main-page_navigation-icon"></div>
            <div class="main-page_navigation-text">Sign Up or Log in</div>
        </div>

        <router-link to="/plants">
            <div class="main-page_category">Plants and flowers</div>
        </router-link>
        <hr class="main-page_hr"/>

        <div class="main-page_category">Plant care</div>
        <hr class="main-page_hr"/>

        <div class="main-page_category">News</div>
        <hr class="main-page_hr"/>
    </div>

    <div class="main-page_recommended">
        <main-page-recommended></main-page-recommended>
    </div>

    <div class="main-page_plants">
        <main-page-plants-and-fowers></main-page-plants-and-fowers>
    </div>

    <div class="main-page_care">
        <main-page-care></main-page-care>
    </div>

    <div class="main-page_news">
        <main-page-news></main-page-news>
    </div>

    <footer class="main-page_footer">
        <div class="main-page_age"></div>
        <div class="main-page_description">Our website is intended for informational purposes only and is not an advertisement. ©&nbsp;2018&nbsp;-&nbsp;2021</div>
    </footer>
</template>

<script>
import ecoGreenLogo from '../assets/images/eco-green-logo-header.svg'
import MainPageRecommended from './MainPageRecommended.vue'
import MainPagePlantsAndFowers from './MainPagePlantsAndFowers.vue'
import MainPageCare from './MainPageCare.vue'
import MainPageNews from './MainPageNews.vue'

export default {
    components: {
        MainPageRecommended,
        MainPagePlantsAndFowers,
        MainPageCare,
        MainPageNews,
    },
    data() {
        return {
            isOpenNavMenu: false
        }
    },
    computed: {
        ecoGreenLogo() {
            return ecoGreenLogo
        }
    },
    methods: {
        changeValueNavMenu() {
            this.isOpenNavMenu = !this.isOpenNavMenu
        }
    }
};
</script>

<style scoped>
.main-page_header {
    height: 72px;
    padding: 0 8px;
    margin: 0 -8px;
    background: #111827;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.main-page_nav {
    display: flex;
    align-items: center;
}

.main-page_loupe {
    width: 16px;
    height: 16px;
    margin-right: 28px;
    background-image: url(../assets/icons/magnifying-glass.svg);
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
}

.main-page_font-size {
    width: 22px;
    height: 16px;
    margin-right: 28px;
    background-image: url(../assets/icons/EN.svg);
    background-repeat: no-repeat;
    background-position: center;
    flex-shrink: 0;
}

.main-page_bars {
    width: 14px;
    height: 12px;
    margin-right: 20px;
    background-image: url(../assets/icons/bars.svg);
    background-position: center;
    cursor: pointer;    
    flex-shrink: 0;
}

.main-page_recommended {
    margin-bottom: 32px;
}

.main-page_plants {
    margin-bottom: 16px;
}

.main-page_navigation {
    position: absolute;
    top: 72px;
    width: 100%;
    z-index: 999;
    height: 100%;
    background-color: #111827;
    margin: 0 -8px;
    padding: 0 8px;
}

.main-page_navigation-login {
    display: flex;
    justify-content: center;
    background-color: #1F2937;
    color: #fff;
    padding: 10px 0;
    border-radius: 8px;
    margin-bottom: 36px;
}

.main-page_navigation-icon {
    width: 16px;
    height: 20px;
    margin-right: 8px;
    background-position: center;
    background-image: url(../assets/icons/circle-user.svg);
    background-repeat: no-repeat;
}

.main-page_category {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px;
    cursor: pointer;
}

.main-page_hr {
    margin-bottom: 20px;
}

.main-page_care {
    margin-bottom: 32px;
}

.main-page_news {
    margin-bottom: 24px;
}

.main-page_footer {
    background: #111827;
    color: #6B7280;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    margin: 0 -8px;
}

.main-page_age {
    width: 48px;
    height: 48px;
    background-image: url(../assets/icons/age-restriction.svg);
    background-repeat: no-repeat;
    flex-shrink: 0;
    margin-right: 16px;
}

.main-page_description {
    font-size: 16px;
    line-height: 20px;
}
</style>