<template>

    <!--================ Start Header Area =================-->
	<Header></Header>

	<router-view></router-view>

	<!--================ Start Newsletter Area =================-->
	<Newsletter />
	
	<!--================ End Newsletter Area =================-->

	<!--================Footer Area =================-->
	<Footer />
	<!--================End Footer Area =================-->

</template>

<script>
import Header from '../components/frontend/Header.vue';
import Newsletter from '../components/frontend/Newsletter.vue';
import Footer from '../components/frontend/Footer.vue';
export default {
    name:'Master',
	components: { Header,Newsletter,Footer },
}
</script>

<style>

</style>
