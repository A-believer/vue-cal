<template>
    <!-- <input
		type="text"
		v-model="displayValue"
		class="bg-transparent self-end w-full h-fit text-right outline-none p-2 text-5xl" /> -->

    <div class="bg-transparent self-end w-full h-fit text-right outline-none p-2 text-5xl">{{ displayValue }}</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useStore } from "vuex";

	const store = useStore();
	const displayValue = computed(() => store.getters.currentValue);
</script>

<style lang="scss" scoped></style>
