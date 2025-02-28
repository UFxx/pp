<template>
	<footer>
		<FooterSubscribe />
		<FooterContent />
	</footer>
</template>

<script>
import FooterSubscribe from './FooterSubscribe.vue';
import FooterContent from './FooterContent.vue';

export default {
	components: {
		FooterSubscribe, FooterContent,
	},
};
</script>

<style lang='scss'>
</style>
