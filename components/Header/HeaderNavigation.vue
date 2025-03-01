<template>
	<nav>
		<div class="header-navigation">
			<div class="header-navigation__wrapper">
				<button class="header-navigation__menu-icon__mobile">
					<img
						src="/images/Header/burgerMenu.svg"
						alt="Боковое меню"
					>
				</button>
				<div class="header-navigation__logo">
					<a href="#">
						<img
							src="/images/Header/logo.png"
							alt="logo"
						>
					</a>
				</div>
				<div class="header-navigation__search">
					<input
						class="header-navigation__search-input"
						type="text"
						:placeholder="windowWidth > 375 ? 'Автор, название, ISBN' : 'Что будем искать?'"
					>
					<button
						type="button"
						class="header-navigation__search-button"
					>
						<img
							src="/images/Header/search.svg"
							alt="Искать"
						>
						Искать
					</button>
				</div>
			</div>
			<div class="header-navigation__user-menu">
				<ul class="header-navigation__user-menu__list">
					<li class="header-navigation__user-menu__item">
						<a
							href="#"
							class="header-navigation__user-menu__link"
						>
							<img
								src="/images/Header/bookmark.svg"
								alt="Отложено"
							>
							Отложено
						</a>
					</li>
					<li class="header-navigation__user-menu__item">
						<a
							href="#"
							class="header-navigation__user-menu__link"
						>
							<img
								src="/images/Header/login.svg"
								alt="Войти"
							>
							Войти
						</a>
					</li>
					<li class="header-navigation__user-menu__item">
						<a
							href="#"
							class="header-navigation__user-menu__link"
						>
							<img
								src="/images/Header/cart.svg"
								alt="Корзина"
							>
							<span id="goods-counter">10</span>
							<span id="header__cart-link">Корзина</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="header-navigation__site-menu">
			<ul class="header-navigation__site-menu__list">
				<li class="header-navigation__site-menu__item">
					<a
						href="#"
						class="header-navigation__site-menu__link"
					>
						<img
							src="/images/Header/burgerMenu.svg"
							alt=""
						><span>Каталог</span></a>
				</li>
				<li class="header-navigation__site-menu__item">
					<a
						class="header-navigation__site-menu__link"
						href="#"
					>Авторы</a>
				</li>
				<li class="header-navigation__site-menu__item">
					<a
						class="header-navigation__site-menu__link"
						href="#"
					>Новинки</a>
				</li>
				<li class="header-navigation__site-menu__item">
					<a
						href="#"
						class="header-navigation__site-menu__link"
					>
						<img
							src="/images/Header/sales.svg"
							alt=""
						>
						Скидки</a>
				</li>
				<li class="header-navigation__site-menu__item">
					<a
						class="header-navigation__site-menu__link"
						href="#"
					>Партнёрам</a>
				</li>
				<li class="header-navigation__site-menu__item">
					<a
						class="header-navigation__site-menu__link"
						href="#"
					>Мы</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data()
	{
		return {
			windowWidth: window.innerWidth,
		};
	},
};
</script>

<style lang="scss" scoped>
.header-navigation {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 113px;
	max-width: 1366px;
	margin: 0 auto;

	@media (max-width: $mobile) {
		padding: 13px 10px 15px 15px;
		align-items: center;
		border-bottom: 2px solid $border-color;

		.header-navigation__logo {
			a {
				img {
					width: 43px;
					height: 35px;
					margin-left: 18px;
				}
			}
		}
	}

	&__menu-icon__mobile {
		display: none;

		@media (max-width: $mobile) {
				display: block;

				img {
					margin-left: 8px;
				}
		}
	}

	.header-navigation__search {
		position: relative;
		margin-left: 30px;
		display: flex;
		align-items: center;

		@media (max-width: $mobile) {
			&::before {
				position: absolute;
				content: '';
				width: 20px;
				height: 20px;
				right: 16px;
				top: calc(50%);
				transform: translateY(-50%);
				background-image: url(/images/Header/search-mobile.svg);
				background-repeat: no-repeat;
				background-size: contain;
				z-index: 1;
			}
		}

		&-input {
			padding: 10px 0 10px 15px;
			border: 1px solid $border-color;
			border-radius: 5px 0 0 5px;
			line-height: 20px;
			width: 450px;
			height: 40px;
			border-right: none;

			&::placeholder {
				color: $text-alpha-50;
			}

			@media (max-width: $mobile) {
				position: relative;
				width: 195px;
				background-color: #F7F7F7;
				border-radius: 5px;
				border: none;
				margin-left: -8px;
			}
		}

		&-button {
			padding: 10px 25px;
			background-color: $button-bg;
			border-radius: 0 5px 5px 0;
			height: 40px;
			color: white;
			display: flex;
			justify-content: center;
			align-content: center;
			column-gap: 6.67px;
			font-weight: 500;
			width: 123px;

			&:hover {
				background-color: $button-bg-hover;
			}

			@media (max-width: $mobile) {
				display: none;
			}
		}
	}

	&__wrapper {
		display: flex;
		align-items: center;
	}

	.header-navigation__user-menu {
		display: flex;

		&__list {
			display: flex;
			column-gap: 30px;

			@media (max-width: $mobile) {
				& *:not(:last-of-type):not(#goods-counter) {
					display: none;
				}

				li {
					margin-left: -35px;
					margin-top: -3px;

					img {
						width: 22px;
						height: 20px;
					}

					#goods-counter {
						margin-left: 3px;
						margin-top: -3.5px;
						font-size: 12px;
						padding: 4px 3px;
						font-weight: 500;
					}
				}

				#header__cart-link {
					display: none;
				}
			}

			& :first-child {
				margin-left: 1px;
			}

			li:last-child a {
				position: relative;
			}

			li {
				a {
					display: flex;
					column-gap: 6.67px;
					color: $text-main;
					line-height: 20px;

					span:first-of-type {
						position: absolute;
						background-color: $button-bg;
						border-radius: 100%;
						color: white;
						padding: 2px;
						font-size: 9px;
						font-weight: 500;
						line-height: 10.55px;
						top: -6px;
						left: 12.5px;
					}
				}
			}
		}
	}
}

.header-navigation__site-menu {
	padding: 0 0 20px 117px;
	max-width: 1366px;
	margin: 0 auto;

	@media (max-width: $mobile) {
		display: none;
	}

	&__list {
		display: flex;
		column-gap: 25px;

		@media (max-width: $mobile) {
				display: none;
		}
	}

	&__item {
		display: flex;
	}

	&__link {
		display: flex;
		line-height: 20px;
		column-gap: 6.67px;
		color: $text-main;
	}
}
</style>
