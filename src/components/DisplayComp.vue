<template>
    <!-- <input
		type="text"
		v-model="currentValue"
		class="bg-transparent self-end w-full h-fit text-right outline-none p-2 text-5xl" /> -->

    <div class="bg-transparent self-end w-full h-fit text-right outline-none p-2 text-3xl">{{ displayOperation }}</div>
    <div class="bg-transparent self-end w-full text-right outline-none p-2 text-5xl h-16">{{ displayResult }}</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useStore } from "vuex";

	const store = useStore();
const currentValue = computed(() => store.getters.currentValue);
const previousValue = computed(() => store.getters.previousValue)
const operation = computed(() => store.getters.operation)
const result = computed(() => store.getters.result)

const displayOperation = computed(() => {
    if (previousValue.value === null) {
        return currentValue.value
    } else if (operation.value === null) {
        return previousValue.value
    } else {
        return `${previousValue.value} ${operation.value} ${currentValue.value}`
    }
})

const displayResult = computed(() => {
    if (result.value !== null) {
        return result.value.toString()
    }
    return ''
})
</script>

