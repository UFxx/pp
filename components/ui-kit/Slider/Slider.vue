<template>
	<div class="slider">
		<div class="slider-header">
			<h3>{{ title }}</h3>
			<div class="slider-buttons">
				<div
					class="slider-button__container"
					@click="(e) => incrementSliderOffset(e)"
				>
					<img
						src="/images/Main/Slider/slider-arrow.svg"
						alt="Предыдущий слайд"
					>
				</div>
				<div
					class="slider-button__container"
					@click="decrementSliderOffset"
				>
					<img
						src="/images/Main/Slider/slider-arrow.svg"
						alt="Следующий слайд"
					>
				</div>
			</div>
		</div>
		<div class="slider-content">
			<div
				ref="slider"
				class="slider-line"
				:style="{ marginLeft: sliderOffset + 'px' }"
			>
				<slot></slot>
			</div>
		</div>
		<a
			v-if="windowWidth <= 375 || title !== 'Новости'"
			class="slider__show-more__link"
			href="#"
		>
			{{ `Показать все ${windowWidth <= 375 ? title === 'Новости' ? 'новости' : 'книги' : 'книги раздела'}` }} </a>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		slidesLength: {
			type: Number,
			required: true,
		},
	},
	data()
	{
		return {
			windowWidth: window.innerWidth,
			sliderOffset: 0,
			slideWidth: 0,
		};
	},
	created()
	{
		window.addEventListener('resize', this.setWindowWidth);
	},
	mounted()
	{
		this.slideWidth = this.$refs.slider.children[1].clientWidth;
	},
	unmounted()
	{
		window.removeEventListener('resize', this.setWindowWidth);
	},
	methods: {
		incrementSliderOffset()
		{
			if (this.sliderOffset >= 0)
			{
				return;
			}
			else this.sliderOffset += this.slideWidth;
		},
		decrementSliderOffset()
		{
			const visibleSlides = Math.round(this.$refs.slider.clientWidth / this.slideWidth);
			const maxOffset = (this.slidesLength - visibleSlides + 1) * this.slideWidth;

			if (this.sliderOffset <= -maxOffset)
			{
				return;
			}
			else this.sliderOffset += -this.slideWidth;
		},
		setWindowWidth()
		{
			this.windowWidth = window.innerWidth;
		},
	},
};
</script>

<style lang="scss" scoped>
.slider {
	background-color: white;
	border-radius: 5px;

	&-header {
		display: flex;
		justify-content: space-between;
		padding: 15px 25px;
		border-bottom: 1px solid $border-color;

		h3 {
			font-size: 20px;
			font-weight: 700;
			letter-spacing: -0.4px;
			margin-top: -2px;
		}

		@media (max-width: $mobile) {
			padding: 15px 10px;
		}
	}

	&-buttons {
		display: flex;
		border: 1px solid $border-color;
		border-radius: 5px;
		overflow: hidden;

		.slider-button__container {
			padding: 11px 13px;
			cursor: pointer;

			img {
				width: 3.33px;
				height: 5.83px;
				border-radius: 5px;
			}

			&:hover {
				background-color: #1c294d10;
			}
		}

		.slider-button__container:first-child {
			border-right: 1px solid $border-color;

			img {
				transform: rotateY(-180deg);
			}
		}
		}

	&-content {
		overflow: hidden;
	}

	&-line {
		display: flex;
		transition: .3s ease margin-left;
	}

	&__show-more__link {
		padding: 10px 0;
		display: flex;
		justify-content: center;
		font-size: 14px;
		font-weight: 500;
		border-radius: 0 0 5px 5px;
		border-top: 1px solid $border-color;
	}
}
</style>
