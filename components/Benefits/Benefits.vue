<template>
	<div class="benefits-container">
		<Benefit
			v-for="benefit in benefits"
			:key="benefit.id"
			:benefit="benefit"
		/>
	</div>
</template>

<script setup>
import Benefit from './Benefit.vue';
</script>

<script>
export default {
	data()
	{
		return {
			benefits: [
				{
					id: 1, image: '/images/Main/Benefits/benefit-1-img.png', title: 'Быстрая доставка', description: 'Доставим бесплатно от 2000 ₽ по всей России',
				},
				{
					id: 2, image: '/images/Main/Benefits/benefit-2-img.png', title: 'Безопасная оплата', description: 'Плати безопасно и легко онлайн на нашем сайте.',
				},
				{
					id: 3, image: '/images/Main/Benefits/benefit-3-img.png', title: 'Бонусная программа', description: 'Дополнительная скидка 15% при регистрации',
				},
				{
					id: 4, image: '/images/Main/Benefits/benefit-4-img.png', title: 'Большой выбор', description: 'Ежегодно выходит в свет более 100 книг',
				},
			],
		};
	},
};
</script>

<style lang='scss'>
.benefits-container {
	display: flex;
	column-gap: 30px;
	margin-bottom: 33px;
	justify-content: space-between;

	@media (max-width: $mobile) {
		flex-direction: column;
		margin-bottom: 10px;
	}
}
</style>
