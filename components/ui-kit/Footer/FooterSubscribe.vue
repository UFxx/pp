<template>
	<div class="footer-subscribe__container">
		<div class="footer-subscribe">
			<div>
				<div class="footer-subscribe__logo">
					<a href="#">
						<img
							src="/images/Header/logo.png"
							alt="logo"
						>
					</a>
				</div>
				<div class="footer-subscribe__content">
					<input
						type="text"
						:placeholder="windowWidth <= 375 ? 'Подписаться на рассылку' : 'Введите свой Email и получите скидку'"
					>
					<button>
						<img
							src="/images/Footer/send-button.svg"
							alt="Кнопка отправить"
						>
					</button>
				</div>
			</div>
			<div class="footer-subscribe__social">
				<div class="footer-subscribe__social__item footer-subscribe__social__item-facebook">
					<picture>
						<source
							srcset="/images/Footer/social-facebook-mobile.svg"
							media="(max-width: 376px)"
						>
						<img
							src="/images/Footer/social-facebook.svg"
							alt="Facebook"
						>
					</picture>
				</div>
				<div class="footer-subscribe__social__item footer-subscribe__social__item-instagram">
					<picture>
						<source
							srcset="/images/Footer/social-instagram-mobile.svg"
							media="(max-width: 376px)"
						>
						<img
							src="/images/Footer/social-instagram.svg"
							alt="instagram"
						>
					</picture>
				</div>
				<div class="footer-subscribe__social__item footer-subscribe__social__item-twitter">
					<picture>
						<source
							srcset="/images/Footer/social-vk-mobile.svg"
							media="(max-width: 376px)"
						>
						<img
							src="/images/Footer/social-twitter.svg"
							alt="Twitter"
						>
					</picture>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data()
	{
		return {
			windowWidth: window.innerWidth,
		};
	},
	created()
	{
		window.addEventListener('resize', this.setWindowWidth);
	},
	unmounted()
	{
		window.removeEventListener('resize', this.setWindowWidth);
	},
	methods: {
		setWindowWidth()
		{
			this.windowWidth = window.innerWidth;
		},
	},
};
</script>

<style lang='scss'>
.footer-subscribe__container {
  background-color: #f1f1f2;
  display: flex;

  .footer-subscribe {
    padding: 25px 113px;
    max-width: 1366px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;

    & > div:first-of-type {
      display: flex;
      column-gap: 200px;

      @media (max-width: $mobile) {
        column-gap: 10px;
      }
    }

    @media (max-width: $mobile) {
      padding: 20px;
      flex-direction: column;

      &__logo {
        a {
          display: block;
          width: 50px;
        }
        img {
          width: 50px;
          height: 40px;
        }
      }

      & > div:first-of-type {
        display: flex;
        padding-top: 20px;
        max-width: 375px;

        input {
          width: 220px;
          margin-left: 5px;
        }
      }
    }

    &__content {
      display: flex;
      align-items: center;

      input {
        font-size: 14px;
        line-height: 20px;
        padding: 9px 0 9px 15px;
        width: 393px;
        border: 1px solid #282F3626;
        border-radius: 5px 0 0 5px;
        border-right: 0;
        margin-left: 100px;

        &::placeholder {color: #282F3680;}
      }

      button {
        padding: 10px 15px 12px 15px;
        background-color: #FF5C00;
        border-radius: 0 5px 5px 0;

        &:hover {background-color: #ff5e00cb;}
      }
    }

    &__social {
      display: flex;
      column-gap: 15px;

      @media (max-width: $mobile) {
        order: -1;
        padding-bottom: 20px;
        border-bottom: 1px solid #1C294D26;
        justify-content: center;
      }

      &__item {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: 1px solid #282F3626;
        cursor: pointer;

        @media (max-width: $mobile) {border: none;}

        &:hover {border: 1px solid #282F36;}

        @media (max-width: $mobile) {
          &-facebook {background-color: #3064CE;}
          &-twitter {
            padding: 0;
            img {
              width: 40px;
              height: 40px
            }
          }
          &-instagram {
            background-color: #E4405F;
            order: 2;
          }
        }
      }
    }
  }
}
</style>
