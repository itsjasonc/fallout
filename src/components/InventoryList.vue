<template>
  <div
    class="grid inventory"
    style="display: grid; gap: 8px; grid-template-columns: 1fr; margin: 10px 0"
  >
    <div v-for="(it, i) in state.inventory" :key="i" class="pip-card" style="padding: 8px">
      <div
        class="slot-top"
        style="
          display: grid;
          grid-template-columns: 32px 1fr 36px;
          gap: 6px;
          height: 4.5em;
          align-items: stretch;
        "
      >
        <button class="pip-btn" @click="toggleDropdown(i)">{{ it.dropdown ? '▲' : '▼' }}</button>
        <textarea
          class="pip-input"
          rows="3"
          :value="it.name"
          @input="onName(i, $event.target.value)"
          style="
            resize: none;
            font-size: clamp(12px, 3vw, 16px);
            line-height: 1.3em;
            min-height: 3.2em;
          "
        ></textarea>
        <div
          class="heavy-toggle"
          :class="{ 'heavy-on': it.heavy }"
          @click="toggleHeavy(i)"
          style="
            width: 33px;
            border: 1px solid var(--pip-neon);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: #081408;
            position: relative;
          "
        >
          <span style="font-size: 26px; color: rgba(255, 0, 0, 0.25); position: absolute">H</span>
        </div>
      </div>

      <div
        v-show="it.dropdown"
        style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px"
      >
        <div v-for="(c, j) in it.counters" :key="j" class="pip-card" style="padding: 4px">
          <input
            class="pip-input"
            type="text"
            :value="c.title"
            @input="onCounterTitle(i, j, $event.target.value)"
            style="text-align: center; margin-bottom: 4px; font-weight: bold"
          />
          <div style="display: flex; justify-content: center; align-items: center; gap: 6px">
            <button class="pip-btn" @click="chgCounter(i, j, -1)">−</button>
            <div style="font-size: 28px; min-width: 40px; text-align: center">{{ c.value }}</div>
            <button class="pip-btn" @click="chgCounter(i, j, 1)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSheetStore } from '../composables/useSheetStore'
const { state, toggleHeavy, toggleDropdown, chgCounter, save } = useSheetStore()

function onName(i, val) {
  state.inventory[i].name = val
  save()
}
function onCounterTitle(i, j, val) {
  state.inventory[i].counters[j].title = val
  save()
}
</script>

<style scoped>
.heavy-on {
  border-color: #ff3c3c;
  background: #2a0000;
  box-shadow: 0 0 8px #ff3c3c;
}
</style>
