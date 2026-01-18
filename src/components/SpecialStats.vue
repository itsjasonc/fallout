<template>
  <div
    class="grid stats"
    style="display: grid; gap: 8px; grid-template-columns: repeat(5, 1fr); margin: 10px 0"
  >
    <div
      v-for="s in statNames"
      :key="s"
      class="pip-card center"
      style="padding: 6px 0; text-align: center"
    >
      <b
        :class="{ 'stat-starred': state.starredStats[s] }"
        style="
          cursor: pointer;
          font-size: 20px;
          line-height: 1;
          display: inline-block;
          margin: 0 0 2px 0;
        "
        @click="toggleStar(s)"
      >
        {{ s }}
      </b>
      <input
        class="pip-input"
        style="
          border: none;
          text-align: center;
          font-size: 25px;
          padding: 0;
          margin: 0;
          line-height: 1;
          width: 45px;
        "
        :value="state.stats[s]"
        @input="onInput(s, $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { useSheetStore } from '../composables/useSheetStore'
const { state, statNames, save } = useSheetStore()

function onInput(s, val) {
  state.stats[s] = val
  save()
}
function toggleStar(s) {
  state.starredStats[s] = !state.starredStats[s]
  save()
}
</script>

<style scoped>
.center {
  text-align: center;
}
.stat-starred {
  color: #ffd966;
  text-shadow: 0 0 3px #ffd966;
}
</style>
