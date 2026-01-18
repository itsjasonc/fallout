<template>
  <div
    class="grid negatives"
    style="display: grid; gap: 8px; grid-template-columns: repeat(5, 1fr); margin: 10px 0"
  >
    <div
      v-for="n in negNames"
      :key="n"
      class="pip-card neg-card"
      style="text-align: center; min-width: 0; padding: 4px"
    >
      <b>{{ n.toUpperCase() }}</b>
      <div :style="{ color: tierColor(state.neg[n]), fontSize: '22px' }">{{ state.neg[n] }}</div>
      <div style="display: flex; gap: 10px; justify-content: center">
        <button class="pip-btn" @click="chgNeg(n, -1)">−</button>
        <button class="pip-btn" @click="chgNeg(n, +1)">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSheetStore } from '../composables/useSheetStore'
const { state, negNames, chgNeg } = useSheetStore()

function tierColor(val) {
  if (val >= 8) return '#ff4c4c'
  if (val >= 6) return '#ff7f3f'
  if (val >= 4) return '#ffd84d'
  return '#9fef9f'
}
</script>
