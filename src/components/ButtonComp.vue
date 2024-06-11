<template>
    <button :class="`${color === '1' && 'bg-[#7b6e5e] hover:bg-[#9c9286]'} ${
    color === '2' && 'bg-[#ff9f0c] hover:bg-[#dd890d]'
		} ${
			color === '3' && 'bg-[#9c9286] hover:bg-[#b2a9a0]'
		} ${
    label === '0' ? 'col-[1/3] pl-0' : 'px-6 py-5'
		}`" @click="handleClick">
        {{ label }}
    </button>
</template>

<script setup>
	import { defineProps, defineEmits } from "vue";
	const props = defineProps({
        label: String,
        
        color: String
	});

	const emits = defineEmits(["click"]);


	const handleClick = () => {
        emits('click', props.value)
	};
</script>
