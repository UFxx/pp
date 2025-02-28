<template>
	<div class="action__items-container">
		<div class="action__item">
			<p class="action__item__text">
				<span>Бесплатно</span> доставим ваш заказ при покупке от 2000 ₽
			</p>
			<img
				src="/images/Main/Promotions/promotion-img-1.svg"
				alt="Бесплатно доставим ваш заказ при покупке от 2000 ₽"
			>
		</div>
		<div class="action__item">
			<p class="action__item__text">
				Скидка<br> при регистрации до <span>15%</span>
			</p>
			<img
				src="/images/Main/Promotions/promotion-img-2.svg"
				alt="Скидка при регистрации до 15%"
			>
		</div>
	</div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.action__items-container {
	grid-area: 3 / 1 / 4 / 3;
	display: flex;
	column-gap: 30px;

	@media (max-width: $mobile) {
		flex-direction: column;
		row-gap: 10px;
	}

	.action__item {
		width: 355px;
		height: 140px;
		border-radius: 5px;
		color: white;
		padding: 20px 25px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&__text {
			width: 200px;
			font-family: 'Gosha Sans';
			font-size: 20px;
			line-height: 25px;
		}

		@media (max-width: $mobile) {
			padding: 20px 20px 20px 19px;
		}
	}

	& .action__item:first-child {
		background-color: #6D378F;

		p {
			z-index: 1;

			span {
				position: relative;

				&::before {
					position: absolute;
					content: '';
					left: -10px;
					width: 120px;
					height: 30px;
					background-image: url(/images/Main/Promotions/promotion-1-line.svg);
					background-repeat: no-repeat;
					z-index: -1;
				}
			}
		}
	}

	& .action__item:last-child {
		background-color: #FFD8EF;
		color: #1C294DCC;

		p {
			width: 162px;
			z-index: 1;
		}

		span {
			position: relative;

			&::before {
				position: absolute;
				content: '';
				top: -1px;
				left: -13px;
				width: 68px;
				height: 30px;
				background-image: url(/images/Main/Promotions/promotion-2-line.svg);
				background-repeat: no-repeat;
				background-size: contain;
				z-index: -1;
			}
		}
	}
}
</style>
