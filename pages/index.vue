<script setup>
import ProductCard from '~/components/ui-kit/Slider/ProductCard.vue';
import NewsCard from '~/components/ui-kit/Slider/NewsCard.vue';
import Banner from '~/components/ui-kit/Banner/Banner.vue';
import Slider from '~/components/ui-kit/Slider/Slider.vue';
import Subscribe from '~/components/ui-kit/Subscribe/Subscribe.vue';
import Benefits from '~/components/ui-kit/Benefits/Benefits.vue';
</script>

<template>
	<main>
		<div class="content">
			<Banner />
			<Slider
				title="Новые постуления"
				:slides-length="products.length"
			>
				<ProductCard
					v-for="product in products"
					:key="product.id"
					:product="product"
				/>
			</Slider>
			<Subscribe />
			<Slider
				title="Готовятся к выходу"
				:slides-length="products.length"
			>
				<ProductCard
					v-for="product in products"
					:key="product.id"
					:product="product"
				/>
			</Slider>
			<Benefits />
			<Slider
				title="Новости"
				:slides-length="news.length"
			>
				<NewsCard
					v-for="newsItem in news"
					:key="newsItem.id"
					:news="newsItem"
				/>
			</Slider>
		</div>
	</main>
</template>

<script>
export default {
	data()
	{
		return {
			products: [
				{
					id: 1,
					image: '/images/Main/ProductsSlider/product-1.png',
					category: 'Корпоративное право',
					name: 'Инвестирование: способы, риски, субъекты : монография',
					author: 'Майфат А.В.',
					price: 4450,
					rating: 4.9,
					recomendedPercent: 89,
					isBestseller: true,
					isNovelty: false,
					isAction: true,
					isSale: false,
				},
				{
					id: 2,
					image: '/images/Main/ProductsSlider/product-2.png',
					category: 'Договорное право',
					name: 'Договор коммерческой концессии (франчайзинг). Гражданское',
					author: 'Багдасарян А.Ф.',
					price: 372,
					rating: 4.9,
					recomendedPercent: 89,
					isBestseller: false,
					isNovelty: true,
					isAction: false,
					isSale: false,
				},
				{
					id: 3,
					image: '/images/Main/ProductsSlider/product-3.png',
					category: 'Конкурентное право',
					name: 'Договор коммерческой концессии (франчайзинг). Гражданское',
					author: 'Башлаков-Николаев И.В.',
					price: 984,
					oldPrice: 1284,
					rating: 4.9,
					recomendedPercent: 89,
					isBestseller: false,
					isNovelty: false,
					isAction: false,
					isSale: true,
				},
				{
					id: 4,
					image: '/images/Main/ProductsSlider/product-1.png',
					category: 'Копоративное право',
					name: 'Инвестирование: способы, риски, субъекты : монография',
					author: 'Майфат А.В.',
					price: 450,
					oldPrice: 0,
					rating: 4.9,
					recomendedPercent: 89,
					isBestseller: true,
					isNovelty: false,
					isAction: true,
					isSale: false,
				},
				{
					id: 5,
					image: '/images/Main/ProductsSlider/product-1.png',
					category: 'Копоративное право',
					name: 'Инвестирование: способы, риски, субъекты : монография',
					author: 'Майфат А.В.',
					price: 450,
					oldPrice: 0,
					rating: 4.9,
					recomendedPercent: 89,
					isBestseller: true,
					isNovelty: false,
					isAction: true,
					isSale: false,
				},
			],
			news: [
				{
					id: 1,
					image: '/images/Main/NewsSlider/news-1.png',
					date: '16 июня 2020',
					title: 'Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в росccc',
					description: '18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроченное',
				},
				{
					id: 2,
					image: '/images/Main/NewsSlider/news-2.png',
					date: '16 июня 2020',
					title: 'Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в росccc',
					description: '18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроченное',
				},
				{
					id: 3,
					image: '/images/Main/NewsSlider/news-3.png',
					date: '16 июня 2020',
					title: 'Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в росccc',
					description: '18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроченное',
				},
				{
					id: 4,
					image: '/images/Main/NewsSlider/news-1.png',
					date: '16 июня 2020',
					title: 'Бесплатный онлайн-семинар. Доктрина stare decisis: борьба за прецедент в росccc',
					description: '18 июня в «Клубе цивилистов» пройдет бесплатный онлайн-семинар по проблематике судебного прецедента. Мероприятие приуроченное',
				},
			],
			windowWidth: window.innerWidth,
		};
	},
	created()
	{
		window.addEventListener('resize', this.myEventHandler);
	},
	unmounted()
	{
		window.removeEventListener('resize', this.myEventHandler);
	},
	methods: {
		myEventHandler()
		{
			this.windowWidth = window.innerWidth;
		},
	},
};
</script>

<style lang="scss">
main {
	background-color: #F9F9FA;
	padding: 30px 113px 20px 113px;
	.content {
		max-width: 1140px;
		margin: 0 auto;
	}

	@media (max-width: $mobile) {
		padding: 10px 10px 20px 10px;

		.content {
			max-width: 375px;
			margin: 0 auto;
		}
	}
}
</style>
