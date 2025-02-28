<template>
	<div class="footer-navigation">
		<div class="footer-navigation__item">
			<p class="footer-navigation__item__title">
				Покупателям
			</p>
			<ul class="footer-navigation__item__list">
				<li><a href="#">Наша почта</a></li>
				<li><a href="#">Оплата и доставка</a></li>
				<li><a href="#">Вопросы и ответы</a></li>
			</ul>
		</div>
		<div class="footer-navigation__item">
			<p class="footer-navigation__item__title">
				Издательство
			</p>
			<ul class="footer-navigation__item__list">
				<li><a href="#">О компании</a></li>
				<li><a href="#">Авторам</a></li>
				<li><a href="#">Вакансии</a></li>
				<li><a href="#">Контакты</a></li>
			</ul>
		</div>
		<div class="footer-navigation__item">
			<p class="footer-navigation__item__title">
				Книги
			</p>
			<ul class="footer-navigation__item__list">
				<li><a href="#">Все категории</a></li>
				<li><a href="#">Бестселлеры</a></li>
				<li><a href="#">Новинки</a></li>
				<li><a href="#">Скидки и акции</a></li>
			</ul>
		</div>
		<div class="footer-navigation__item">
			<p class="footer-navigation__item__title">
				Прайс-лист
			</p>
			<ul class="footer-navigation__item__list">
				<li>
					<a
						href="#"
						class="donwload-price-list__link"
					>
						<img
							src="/images/Footer/file.svg"
							alt="Скачать прайс-лист"
						>
						<span>
							Скачать прайс лист
							<span>PDF, 12 Mb</span>
						</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="footer-navigation__item__mobile">
			<a href="#">Политика конфиденциальности</a>
			<a href="#">Договор оферты</a>
		</div>
		<div class="footer-navigation__item">
			<p class="footer-navigation__item__title">
				Телефон и Email
			</p>
			<ul class="footer-navigation__item__list">
				<li>
					<a href="mailto:market@estatut.ru">
						<img
							src="/images/Header/mail.svg"
							alt="market@estatut.ru"
						>
						market@estatut.ru</a>
				</li>
				<li>
					<a href="tel:89686606550">
						<img
							src="/images/Header/phone.svg"
							alt="89686606550"
						>
						8 (968) 660-65-50</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="footer-contacts">
		<div class="footer-contacts__info">
			<p class="footer-contacts__info__copyright">
				© 2020 Издательство «Статут»
			</p>
			<p>
				<img
					class="geolocation-icon__mobile"
					src="/images/Header/geolocation.svg"
					alt="ул. Лобачевского, 92, корп. 2 119454, г. Москва"
				>
				ул. Лобачевского, 92, корп. 2 119454, г. Москва
			</p>
		</div>
		<div class="footer-contacts__links">
			<a href="#">Политика конфиденциальности</a>
			<a href="#">Договор оферты</a>
		</div>
	</div>
</template>

<script></script>

<style lang='scss'>
.footer-navigation {
  display: flex;
  column-gap: 30px;
  padding: 45px 113px;
  max-width: 1366px;
  margin: 0 auto;

	@media (max-width: $mobile) {
		padding: 0;
		flex-direction: column;

		& > :last-child &__item {

			&__title {
				display: none;
			}

			&__list {
				display: flex;
				margin: 0;

				li {
					width: calc(100% + 20px);
					margin-top: 2px;
					margin-left: -15px;

					a {
						width: 100%;
						padding: 0 0 21px 20px;
						border-bottom: 1px solid #2A3D4826;
					}

					&:first-child {
						order: 1;
					}
				}
			}
		}

		& > :nth-last-child(3)  {
			border-bottom: 0;
		}

	}

  &__item {
    font-size: 14px;

		@media (max-width: $mobile) {
			padding: 20px 0;
			margin: 0 20px;
			border-bottom: 1px solid #2A3D4826;

			&:hover &__list {
				display: flex;
				margin-left: 15px;
			}

			&:hover &__list:last-child {
				margin-left: 0;
			}

			&:last-child {
				padding-bottom: 0;
				border-bottom: 0;
			}
		}

    &__title {
      font-weight: 500;
      color: #1C294D;

			@media (max-width: $mobile) {
				position: relative;
				letter-spacing: 1px;
				line-height: 20px;

				&::before {
				position: absolute;
				content: '';
				width: 10px;
				height: 10px;
				top: 5px;
				right: 5px;
				transform: rotate(90deg);
				background-image: url(/images/Main/Slider/chevron-arrow.svg);
				background-size: contain;
				background-position: center center;
				background-repeat: no-repeat;
			}
			}
    }

    &__list {
      margin-top: 22px;
      display: flex;
      flex-direction: column;
      row-gap: 15px;

			@media (max-width: $mobile) {
				display: none;
			}

      li {
        color: #282F36CC;
        width: 165px;

        &:first-child {margin-top: 0;}

        &:hover {text-decoration: underline;}

        a {
          display: flex;
          column-gap: 8px;
          line-height: 20px;
        }

        .donwload-price-list__link {
          margin-left: 4px;

          span{
              span{
              font-size: 12px;
              color: #282F3680;
            }
          }
        }
      }
    }

		&__mobile {
			display: none;

			@media (max-width: $mobile) {
				display: flex;
				flex-direction: column;
				padding: 10px 0;
				border-bottom: 1px solid #2A3D4826;
				border-top: 1px solid #2A3D4826;

				a {
					font-size: 14px;
					line-height: 20px;
					color: #1C294D80;
					padding: 10px 20px;

					&:last-child {
						padding-top: 0;
					}
				}
			}
		}
  }
}

.footer-contacts {
  padding: 40px 0 45px 0;
  border-top: 1px solid #282F3626;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #1C294DCC;

	@media (max-width: $mobile) {
		border-top: 0;
		padding: 0;
	}

  .footer-contacts__info {
    display: flex;
    justify-content: space-between;
    column-gap: 208px;

		p {
			img {
					display: none;
			}
		}

		@media (max-width: $mobile) {
			flex-direction: column;

			p {
				line-height: 20px;
				letter-spacing: -.2px;
				border-bottom: 1px solid #2A3D4826;
				padding: 20px;
				display: flex;
				column-gap: 10px;

				img {
					display: block;
				}
			}
		}

    &__copyright {
      color: #1C294D80;

			@media (max-width: $mobile) {
				order: 1;
			}
    }
  }

  &__links {
    display: flex;
    column-gap: 31px;

		@media (max-width: $mobile) {
			display: none;
		}

  }
}
</style>
