<template>
	<div class="news-card">
		<img
			:src="news.image"
			:alt="news.title"
		>
		<div class="news-card__description">
			<p class="news-card__description__date">
				{{ news.date }}
			</p>
			<p class="news-card__description__title">
				{{ news.title }}
			</p>
			<p class="news-card__description__description">
				{{ news.description }}
			</p>
		</div>
		<button>Читать</button>
	</div>
</template>

<script>
export default {
	props: {
		news: {
			type: {
				id: Number,
				date: String,
				title: String,
				description: String,
			},
		},
	},
};
</script>

<style lang='scss'>
.news-card {
	padding: 26px 35px;
	border-right: 1px solid #1C294D26;

	&:first-child {
		padding: 26px 34px 35px 20px;
	}

	@media (max-width: $mobile) {

		&,
		&:first-child {
			padding: 23px 10px 20px 10px;
		}
	}

	img {
		width: 320px;
		height: 200px;
		border-radius: 5px;

		@media (max-width: $mobile) {
			width: 335px;
			height: 210px;
		}

	}

	.news-card__description {
		width: 320px;

		@media (max-width:$mobile) {
			width: 335px;
		}

		&__date {
			color: #1C294D80;
			font-size: 12px;
			margin-top: 14px;
		}

		&__title {
			font-size: 16px;
			font-weight: 500;
			line-height: 20px;
			margin-top: 2px;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			line-clamp: 2;
			-webkit-line-clamp: 2;
			text-overflow: ellipsis;
			overflow: hidden;

			@media (max-width: $mobile) {
				width: 320px;
			}
		}

		&__description {
			margin-top: 8px;
			font-size: 14px;
			line-height: 20px;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			line-clamp: 3;
			-webkit-line-clamp: 3;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}

	button {
		font-size: 14px;
		font-weight: 500;
		padding: 9px 67px;
		margin-top: 12px;
		border: 1px solid #1C294D26;
		border-radius: 5px;

		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}

		@media (max-width: $mobile) {
				width: 100%;
		}
	}
}
</style>
