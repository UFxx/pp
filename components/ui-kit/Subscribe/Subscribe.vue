<template>
	<div class="subscribe-container">
		<p class="subscribe__text">
			Скидка <span>200 ₽</span> при подписке на рассылку Издательства
		</p>
		<div class="subscribe__wrapper">
			<input
				class="subscribe__input"
				type="email"
				placeholder="Введите ваш Email"
			>
			<button
				class="subscribe__button"
			>
				Подписаться
			</button>
		</div>
	</div>
</template>

<script></script>

<style lang='scss'>
.subscribe-container {
	margin-top: 30px;
	margin-bottom: 33px;
	padding: 30px 45px;
	background-color: #0288D1;
	border-radius: 5px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: $mobile) {
		flex-direction: column;
		padding: 19px 10px;
		margin: 9.5px 0;
		align-items: stretch;
	}

	.subscribe__text {
		font-size: 18px;
		font-weight: 500;
		z-index: 1;

		span {
			position: relative;
			font-weight: 700;

			&::before {
				position: absolute;
				content: '';
				top: -3px;
				left: -10px;
				width: 65px;
				height: 115%;
				background-image: url(/public/images/Main/subscribe-line.svg);
				background-size: cover;
				background-repeat: no-repeat;
				z-index: -1;
			}
		}

		@media (max-width: $mobile) {
			line-height: 25px;
			width: 250px;
		}
	}

	.subscribe__wrapper {
		display: flex;
		column-gap: 10px;

		@media (max-width: $mobile) {
			flex-direction: column;
			row-gap: 10px;
			margin-top: 8px;
			width: 100%;
		}

		.subscribe__button,
		.subscribe__input {
			font-size: 14px;
			border-radius: 5px;
		}

		.subscribe__input {
			width: 418px;
			background-color: white;
			color: $text-alpha-80;
			padding: 10px 0 10px 15px;
			margin-left: 15px;

			&::placeholder {
				color: $text-alpha-80;
			}

			@media (max-width: $mobile) {
				width: 100%;
				margin-left: 0;
			}
		}

		.subscribe__button {
			padding: 10px 25px;
			border: 1px solid white;
			font-weight: 500;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}

}
</style>
