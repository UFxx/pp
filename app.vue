<script setup>
import Header from './components/ui-kit/Header/Header.vue';
import Footer from './components/ui-kit/Footer/Footer.vue';
</script>

<template>
	<div>
		<Header />
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Footer />
	</div>
</template>
