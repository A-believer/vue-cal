// store/index.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    currentValue: '10000',
    previousValue: null,
    operation: null,
    result: null,
  },
  getters: {
    currentValue(state) {
      return state.currentValue
    },
    previousValue(state) {
      return state.previousValue
    },
    operation(state) {
      return state.operation
    },
    result(state) {
      return state.result
    }
  },
  mutations: {
    updateCurrentValue(state, value) {
      state.currentValue = value
    },
    updatePreviousValue(state, value) {
      state.previousValue = value
    },
    updateOperation(state, operation) {
      state.operation = operation
    },
    updateResult(state, result) {
      state.result = result
    },
    clearAll(state) {
      state.currentValue = '0'
      state.previousValue = null
      state.operation = null
      state.result = null
    },
    toggleSign(state) {
      const value = parseFloat(state.currentValue)
      state.currentValue = (-value).toString()
    },
    percent(state) {
      state.currentValue = parseFloat(state.currentValue) / 100
    }
  },
  actions: {
    performOperation({ commit, getters }) {
      if (getters.previousValue !== null && getters.operation !== null) {
        const prev = parseFloat(getters.previousValue)
        const curr = parseFloat(getters.currentValue)
        let result = null
        switch (getters.operation) {
          case '+':
            result = prev + curr
            break
          case '-':
            result = prev - curr
            break
          case '*':
            result = prev * curr
            break
          case '/':
            result = prev / curr
            break
        }
        commit('updateResult', result)
        commit('updatePreviousValue', null)
        commit('updateOperation', null)
        commit('updateCurrentValue', result.toString())
      }
    },
  },
})

export default store