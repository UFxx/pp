<template>
	<div class="banner-container">
		<BannerSlider :slides="slides" />
		<Actions />
		<DailyPromotion
			:daily-promotion="dailyPromotion"
		/>
	</div>
</template>

<script>
import DailyPromotion from './DailyPromotion.vue';
import Actions from './Actions.vue';
import BannerSlider from './BannerSlider.vue';

export default {
	components: {
		DailyPromotion, Actions, BannerSlider,
	},
	data()
	{
		return {
			dailyPromotion: {
				image: '/images/Main/daily-promotion-img.png',
				name: 'Инвестирование: способы, риски, субъекты : монография',
				category: 'Корпоративное право',
				author: 'Майфат А. В.',
				price: 4450,
			},
			slides: ['/images/Main/Slider/slide.png', '/images/Main/Slider/slide.png', '/images/Main/Slider/slide.png', '/images/Main/Slider/slide.png'],
		};
	},
};
</script>

<style lang="scss">
.banner-container {
	display: grid;
	grid-template-columns: 1fr 1fr 360px;
	grid-template-rows: 1fr 1fr 140px;
	gap: 30px;
	margin-bottom: 29px;

	@media (max-width: $mobile) {
		grid-template-columns: 355px;
		grid-template-rows: 175px 464px 1fr;
		gap: 10px;
		margin-bottom: 10px;
	}
}
</style>
