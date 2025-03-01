<template>
	<div class="benefit-container">
		<img
			:src="benefit.image"
			:alt="benefit.title"
		>
		<div class="benefit__info">
			<p class="benefit__info__title">
				{{ benefit.title }}
			</p>
			<p class="benefit__info__description">
				{{ benefit.description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		benefit: {
			type: {
				image: {
					type: String,
				},
				title: {
					type: String,
				},
				description: {
					type: String,
				},
			},
			required: true,
		},
	},
};
</script>

<style lang='scss'>
.benefit-container {
  display: flex;
  align-items: center;
  padding: 35px 20px;
  background-color: white;
  margin-top: 30px;
  border-radius: 5px;

  @media (max-width: $mobile) {
    padding: 40px 20px;

    &:nth-child(2) {
      order: 2;
    }
  }

  img {
    width: 110px;
    height: 75px;
    margin-left: -20px;

    @media (max-width: $mobile) {
      width: 125px;
      height: 90px;
      margin-left: -10px;
      margin-top: -21px;
    }
  }

  .benefit__info {
    p {
      width: 160px;
      margin-left: -20px;

      @media (max-width: $mobile) {
        margin-left: -10px;
        line-height: 20px;
        width: 220px;
        font-size: 14px !important;
      }
    }

    &__title {
      font-size: 16px;
      font-weight: 700;
      width: 200px;

      @media (max-width: $mobile) {
        letter-spacing: 1px;
        margin-top: -16px;
      }
    }

    &__description {
      margin-top: 5px;
      font-size: 12px;
      color: #727272;
    }
  }
}
</style>
