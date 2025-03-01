<template>
	<div class="product-card">
		<div class="  product-card-content">
			<div class="badges-container">
				<div
					v-if="product.isBestseller"
					class="badges-container__item item-badge__bestseller"
				>
					<p class="badges-container__item__text">
						Бестселлер
					</p>
				</div>
				<div
					v-if="product.isNovelty"
					class="badges-container__item item-badge__novelty"
				>
					<p class="badges-container__item__text">
						Новинка
					</p>
				</div>
				<div
					v-if="product.isAction"
					class="badges-container__item item-badge__action"
				>
					<p class="badges-container__item__text">
						1+1=3
					</p>
				</div>
			</div>
			<div class="item-image">
				<a href="#">
					<img
						:src="product.image"
						:alt="product.name"
					>
				</a>
			</div>
			<div class="item-description-container">
				<a
					href="#"
					class="item-description__category"
				>
					{{ product.category }}
				</a>
				<a
					href="#"
					class="item-description__name"
				>
					{{ product.name }}
				</a>
				<a
					href=""
					class="item-description__author"
				>
					{{ product.author }}
				</a>
				<div class="item-description__price">
					<p :class="{ sale: product.isSale }">
						{{ product.price > 999 ? formatPrice(product.price) : product.price }} ₽
					</p>
					<div
						v-if="product.isSale && product.oldPrice > 0"
						class="item-description__price-sale"
					>
						<p class="item-description__price-sale__old-price">
							{{ product.oldPrice > 999 ? formatPrice(product.oldPrice) : product.oldPrice }} ₽
						</p>
						<p class="item-description__price-sale__profit">
							Выгода {{ product.oldPrice - product.price > 999 ? formatPrice(product.oldPrice - product.price) : product.oldPrice - product.price }} ₽
						</p>
					</div>
				</div>
			</div>
			<div class="item-rating__container">
				<div class="item-rating__container__item item-rating__container__item__rating">
					<img
						src="/images/Main/ProductsSlider/rating-icon.svg"
						alt=""
					>
					<p>
						{{ product.rating }}
					</p>
				</div>
				<div class="item-rating__container__item item-rating__container__item__recomended-percent">
					<img
						src="/images/Main/ProductsSlider/like-icon.svg"
						alt=""
					>
					<p>
						{{ product.recomendedPercent }}% рекомендуют
					</p>
				</div>
			</div>
			<div class="item-buttons__container">
				<div class="item-buttons__container__item">
					<InCartButton />
				</div>
				<div class="item-buttons__container__item">
					<BookmarkButton />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import InCartButton from '../ui-kit/Buttons/InCartButton.vue';
import BookmarkButton from '../ui-kit/Buttons/BookmarkButton.vue';

export default {
	components: { InCartButton, BookmarkButton },
	props: {
		product: {
			type: {
				id: Number,
				image: String,
				category: String,
				name: String,
				author: String,
				price: Number,
				rating: Number,
				recomendedPercent: Number,
				isBestseller: Boolean,
				isNovelty: Boolean,
				isAction: Boolean,
				isSale: Boolean,
			},
			required: true,
		},
	},
	methods: {
		formatPrice(price) { return `${price.toString()[0]} ${price.toString().substring(1, price.length)}`; },
	},
};
</script>

<style lang="scss">
  .product-card:first-child {
		padding-left: 0;
    padding-right: 15px;

    @media (max-width: $mobile) {
      padding-right: 0;
    }
  }

  .product-card {
    position: relative;
    padding: 0 13px 0 15px;
    border-right: 1px solid $border-color;

    @media (max-width: $mobile) {
      padding: 0;
      padding-bottom: 14px;
    }

    &-content {
      height: 460px;
      width: 263px;
      padding: 25px 20px;

      @media (max-width: $mobile) {
        width: 177px;
        padding: 20px 0 0 0;
      }

      .item-image img {
        height: 200px;
        margin: 0 auto;

        @media (max-width: $mobile) {
          width: 126px;
          height: 180px;
        }
      }

      .badges-container {
        position: absolute;
        top: 18px;
        display: inline;
        width: 1px;

        @media (max-width: $mobile) {
          top: 13px;
          left: 10px;
        }

        &__item {
          display: inline-block;
          border-radius: 5px;
          margin-top: 10px;

          &:first-child {
            margin: 0;
          }

          &__text {
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
            padding: 5px 10px;
          }
        }

        .item-badge {
          &__bestseller {
            color: #ac8ee3;
            background-color: #eee9f7;
          }

          &__novelty {
            color: #3dc47e;
            background-color: #e2f6ec;
          }

          &__action {
            color: #ff4f52;
            background-color: #ffeeee;
          }
        }
      }

      .item-description-container {
        margin-top: 14px;
        display: flex;
        flex-direction: column;
        row-gap: 1px;

        @media (max-width: $mobile) {
          margin-top: 15px;
          margin-left: 10px;
        }

        p {
          color: $text-main;
        }

        .item-description {
          &__category {
            font-size: 12px;
            color: $text-alpha-50;
          }

          &__name {
            font-weight: 500;
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-clamp: 2;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 19px;
            margin-top: 3px;

            @media (max-width: $mobile) {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              line-clamp: 3;
              -webkit-line-clamp: 3;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }

          &__author {
            font-size: 12px;
            margin-top: 7px;
          }

          &__price {
            display: flex;
            align-items: center;
          }

          &__price-sale {
            display: flex;
            margin-left: 7px;
            margin-top: 2px;

            p {
              font-size: 10px;
            }

            p:first-child {
              position: relative;
              color: $text-alpha-50;

              &::before {
                position: absolute;
                content: '';
                width: 100%;
                height: 1px;
                background-color: #FD3A3A;
                top: 50%;
                left: 0;
                transform: rotate(-5deg);
              }
            }

            p:last-child {
              color: #0DB98C;
              margin-left: 6px;
              letter-spacing: -.2px;
            }
          }
        }

        .item-description__price {
          font-size: 18px;
          font-weight: 700;
          margin-top: 3px;
        }

        .sale {
          color: #FD3A3A;
        }

      }

      .item-rating__container {
        display: flex;
        column-gap: 12px;
        margin-top: 3px;

        @media (max-width: $mobile) {
          flex-direction: column;
          align-items: flex-start;
          row-gap: 8px;
          margin-top: 0;
        }

        &__item {
          display: flex;
          align-items: center;
          border-radius: 5px;

          @media (max-width: $mobile) {
            margin-left: 10px;
            margin-top: -3px;
          }

          p {
            font-size: 12px;
            font-weight: 500;
            display: flex;
            align-items: center;
            border-radius: 5px;
          }

          &__rating {
            background-color: #fbc02d15;
            padding: 5px 8px 5px 9.25px;

            p {
              color: #fbc02d;
              margin-left: 4px;
              margin-top: 2px;
            }
          }

          &__recomended-percent {
            background-color: #7986cb15;
            padding: 4px 10px 2px 9px;

            p {
              color: #7986cb;
              margin-left: 6.25px;

              @media (max-width: $mobile) {
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }

  .item-buttons__container {
    display: flex;
    column-gap: 10px;
    margin-top: 10px;

    @media (max-width: $mobile) {
      margin-top: 11px;
      column-gap: 5px;
      padding-left: 10px;
    }

    &__item {
      button {
        padding: 11px 24px;
        border: 1px solid $border-color;
        border-radius: 5px;
        display: flex;
        align-items: center;
        column-gap: 11.67px;
        font-size: 14px;
        font-weight: 500;
        color: $text-main;
        line-height: 15px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }

        @media (max-width: $mobile) {
          padding: 10px 13px 9.5px 13px;
          column-gap: 6px;
        }
      }

      &:last-child button {
        padding: 11px 15px;

        @media (max-width: $mobile) {
          padding: 8px 12px;
        }
      }
    }
  }
</style>
