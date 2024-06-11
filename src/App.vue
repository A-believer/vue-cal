<template>
  <main class="max-w-[600px] mx-auto h-screen flex items-center justify-center">
    <div class="shadow-2xl drop-shadow-2xl text-3xl bg-[rgba(50,30,0,0.8)] text-white p-[2px]">
      <display-comp></display-comp>
      <div class="grid grid-cols-4 w-full gap-[2px]">
        <button-comp color="1" label="AC" @click="handleClear"></button-comp>
        <button-comp color="1" label="±" @click="handleToggleSign"></button-comp>
        <button-comp color="1" label="%"></button-comp>
        <button-comp color="2" label="÷"></button-comp>

        <button-comp color="3" label="7"></button-comp>
        <button-comp color="3" label="8"></button-comp>
        <button-comp color="3" label="9"></button-comp>
        <button-comp color="2" label="&times;"></button-comp>

        <button-comp color="3" label="4"></button-comp>
        <button-comp color="3" label="5"></button-comp>
        <button-comp color="3" label="6"></button-comp>
        <button-comp color="2" label="-"></button-comp>

        <button-comp color="3" label="1"></button-comp>
        <button-comp color="3" label="2"></button-comp>
        <button-comp color="3" label="3"></button-comp>
        <button-comp color="2" label="+"></button-comp>

        <button-comp color="3" label="0"></button-comp>
        <button-comp color="3" label="•"></button-comp>
        <button-comp color="2" label="="></button-comp>
      </div>
    </div>


  </main>
</template>

<script setup>
import DisplayComp from "./components/DisplayComp.vue"
import ButtonComp from "./components/ButtonComp.vue"
import { useStore } from "vuex";
// import { computed } from "vue";

const store = useStore()

// const currentValue = computed(() => store.state.currentValue)

// const handleInput = (value) => {
//   if (currentValue.value === '0' || store.state.result !== null) {
//     store.commit('updateCurrentValue', value)
//     store.commit('updateResult', null)
//   } else {
//     store.commit('updateCurrentValue', currentValue.value + value)
//   }
// }

// const handleOperation = (operation) => {
//   if (store.state.previousValue === null) {
//     store.commit('updatePreviousValue', currentValue.value)
//     store.commit('updateOperation', operation)
//     store.commit('updateCurrentValue', '0')
//   } else {
//     store.dispatch('performOperation')
//     store.commit('updateOperation', operation)
//   }
// }

// const handleEquals = () => {
//   store.dispatch('performOperation')
// }

const handleClear = () => {
  store.commit('clearAll')
}
const handleToggleSign = () => {
  store.commit('toggleSign')
}

// const handleDecimal = () => {
//   if (!currentValue.value.includes('.')) {
//     store.commit('updateCurrentValue', currentValue.value + '.')
//   }
// }



</script>

<style></style>