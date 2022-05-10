<template>
    <div class="news_header">
        <div class="title-category">News</div>
        <router-link class="link-see-all" to="/news">See all</router-link>
    </div>

    <div class="news_picture"></div>

    <div class="news_text"></div>

    <div class="news_metrics">
        <div class="news_date">16.06.21</div>
        <div class="news_viewers-icon"></div>
        <div class="news_viewers">16</div>
    </div>
</template>

<style>
.news_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.news_header .link-see-all {
    color: #2563EB;
}

.news_picture {
    width: 100%;
    height: 208px;
    flex-shrink: 0;
    background-image: url(../assets/images/picture-news.svg);
    background-repeat: no-repeat;
    border-radius: 8px;
    margin-bottom: 8px;
}

.news_text {
    color: #111827;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
}

.news_metrics {
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #6B7280;
}

.news_date {
    margin-right: 8px;
}

.news_viewers-icon {
    width: 16px;
    height: 20px;
    background-image: url(../assets/icons/view-icon.svg);
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 2px;
}
</style>