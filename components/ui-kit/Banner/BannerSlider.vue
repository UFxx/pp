<template>
	<div class="banner-slider">
		<img
			class="banner-slider__button banner-slider__button-right"
			src="/images/Main/Slider/chevron-arrow.svg"
			alt="Слайдер кнопка вправо"
			@click="decrementSliderOffset"
		>
		<div
			class="banner-slider__content"
			:style="{ marginLeft: sliderOffset + 'px' }"
		>
			<img
				v-for="slide in slides"
				:key="slide"
				:src="slide"
				alt=""
			>
			<div class="slider-indicators">
				<div
					v-for="(slide, i) in slidesCount"
					:key="slide"
					:class="[getActiveSliderIndicatorIndex(i) && 'slide-indicator__active', 'slide-indicator']"
					@click="setSlideOffsetBaseOnIndicatorIndex(i)"
				>
				</div>
			</div>
		</div>
		<img
			class="banner-slider__button banner-slider__button-left"
			src="/images/Main/Slider/chevron-arrow.svg"
			alt="Слайдер кнопка влево"
			@click="incrementSliderOffset"
		>
	</div>
</template>

<script>
export default {
	props: {
		slides: {
			type: Array,
			required: true,
		},
	},
	data()
	{
		return {
			sliderOffset: 0,
			slideWidth: 750,
			slidesCount: this.slides.length,
		};
	},
	methods: {
		decrementSliderOffset()
		{
			if (this.sliderOffset <= -(this.slidesCount - 1) * this.slideWidth)
			{
				this.sliderOffset = 0;
			}
			else this.sliderOffset -= this.slideWidth;
		},
		incrementSliderOffset()
		{
			if (this.sliderOffset >= 0)
			{
				this.sliderOffset = -(this.slidesCount - 1) * this.slideWidth;
			}
			else this.sliderOffset += this.slideWidth;
		},
		getActiveSliderIndicatorIndex(slide)
		{
			return slide === (-this.sliderOffset / this.slideWidth);
		},
		setSlideOffsetBaseOnIndicatorIndex(indicatorIndex)
		{
			this.sliderOffset = indicatorIndex * -this.slideWidth;
		},
	},
};
</script>

<style lang="scss" scoped>
.banner-slider {
	position: relative;
	grid-area: 1 / 1 / 3 / 3;
	border-radius: 5px;
	overflow: hidden;

	@media (max-width: $mobile) {
		grid-area: 1 / 1 / 2 / 2;
	}

	.banner-slider__content {
		display: flex;
		transition: .3s ease margin-left;

		@media (max-width: $mobile) {
			img {
				height: 175px;
			}
		}
	}

	.slider-indicators {
		position: absolute;
		display: flex;
		column-gap: 5px;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);

		.slide-indicator {
			width: 25px;
			height: 2px;
			background-color: white;
			border-radius: 2px;
			opacity: .5;
			cursor: pointer;

			&__active {
				opacity: 1;
			}
		}

		@media (max-width: $mobile) {
			bottom: 10px;
		}
	}

	.banner-slider__button {
		position: absolute;
		padding: 13px 16px;
		background-color: #f7ffee;
		border-radius: 5px;
		transform: translateY(-50%);
		cursor: pointer;

		&-left {
			left: 27px;
			top: 44.5%;
			transform: rotate(-180deg);
		}

		&-right {
			right: 27px;
			top: 50%;
		}

		&:hover {
			background-color: #f7ffeeb7;
		}

		@media (max-width: $mobile) {
			display: none;
		}
	}
}
</style>
