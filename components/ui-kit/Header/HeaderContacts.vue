<template>
	<div class="top-header">
		<nav class="top-header__navigation">
			<ul class="top-header__navigation__list">
				<li class="top-header__navigation__item">
					<a
						href="#"
						class="top-header__navigation__link"
					>
						<img
							src="/images/Header/geolocation.svg"
							alt="Москва"
						>
						Москва
					</a>
				</li>
				<li class="top-header__navigation__item">
					<a
						href="#"
						class="top-header__navigation__link"
					>
						<img
							src="/images/Header/delivery.svg"
							alt="Доставка и оплата"
						>
						Доставка и оплата
					</a>
				</li>
				<li class="top-header__navigation__item">
					<a
						href="#"
						class="top-header__navigation__link"
					>
						<img
							src="/images/Header/schedule.svg"
							alt="Адрес и часы работы"
						>
						Адрес и часы работы
					</a>
				</li>
			</ul>
			<div class="top-header__navigation__contacts">
				<ul class="top-header__navigation__list">
					<li class="top-header__navigation__item">
						<a
							href="#"
							class="top-header__navigation__link"
						>
							<img
								src="/images/Header/mail.svg"
								alt="Электронная почта"
							>
							market@estatut.ru
						</a>
					</li>
					<li class="top-header__navigation__item">
						<a
							href="tel:89686606550"
							class="top-header__navigation__link"
						>
							<img
								src="/images/Header/phone.svg"
								alt="Номер телефона"
							>
							8 (968) 660-65-50
							<img
								src="/images/Header/info.svg"
								alt="info icon"
							>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.top-header {
	border-bottom: 1px solid #dfe0e1;

	@media (max-width: $mobile) {
		display: none;
	}

	&__navigation {
		max-width: 1366px;
		padding: 14px 113px 15px 120px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;

		&__list {
			display: flex;
			column-gap: 30px;
		}

		&__link {
			display: flex;
			align-items: center;
			justify-content: center;
			column-gap: 6.67px;
			font-size: 14px;
			color: #1C294DCC;
		}

		&__contacts {
			.top-header__navigation__link {
				font-weight: 500;
			}
		}

	}
}
</style>
