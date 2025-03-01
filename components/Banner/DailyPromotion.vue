<template>
	<div class="daily-promotion">
		<div class="daily-promotion__header">
			<p class="daily-promotion__header__title">
				Книга дня
			</p>
			<div>
				<p class="daily-promotion__header__time">
					08:56:31
				</p>
			</div>
		</div>
		<div class="daily-promotion__image-container">
			<img
				:src="dailyPromotion.image"
				:alt="dailyPromotion.name"
			>
		</div>
		<div class="daily-promotion__description-container">
			<p class="daily-promotion__description__category">
				{{ dailyPromotion.category }}
			</p>
			<p class="daily-promotion__description__name">
				{{ dailyPromotion.name }}
			</p>
			<p class="daily-promotion__description__author">
				{{ dailyPromotion.author }}
			</p>
			<p class="daily-promotion__description__price">
				<span>4 450</span> ₽
			</p>
		</div>
		<div class="daily-promotion__buttons-container">
			<InCartButton />
			<BookmarkButton />
		</div>
	</div>
</template>

<script>
import InCartButton from '../ui-kit/Buttons/InCartButton.vue';
import BookmarkButton from '../ui-kit/Buttons/BookmarkButton.vue';

export default {
	components: {
		InCartButton,
		BookmarkButton,
	},

	props: {
		dailyPromotion: {
			type: {
				image: String,
				name: String,
				category: String,
				author: String,
			},
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.daily-promotion {
  grid-area: 1 / 3 / 4 / 4;
  background-color: white;
  border-radius: 5px;
  padding: 20px 20px 26px 20px;

  @media (max-width: $mobile) {
    & {
      grid-area: 2 / 1 / 3 / 2;
    }
  }

  .daily-promotion__header {
    display: flex;
    justify-content: space-between;

    &__title {
      font-size: 16px;
      font-weight: 500;
    }

    &__time {
      font-size: 12px;
      padding: 5px 10px;
      color: $button-bg;
      background-color: #FF7A0026;
      border-radius: 5px;
    }
  }

  .daily-promotion__image-container {
    display: flex;
    justify-content: center;
    margin-top: 17px;

    img {
      width: 167px;
      height: 250px;

      @media (max-width: $mobile) {
        width: 133px;
        height: 200px;
        border-radius: 5px;
      }
    }
  }

  .daily-promotion__description-container {
    margin-top: 15px;

    p {
      color: #1C294D;
    }

    .daily-promotion__description {
      &__category {
        font-size: 12px;
        color: $text-alpha-50;
      }

      &__name {
        font-size: 14px;
        margin-top: 2px;
      }

      &__author {
        font-size: 12px;
        margin-top: 6px;
      }

      &__price {
        font-size: 18px;
        margin-top: 4px;
        font-weight: 700;
      }
    }
  }

  .daily-promotion__buttons-container {
    margin-top: 7px;
    display: flex;
    column-gap: 10px;
  }
}
</style>
