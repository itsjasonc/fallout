<template>
  <div class="armor" style="display: flex; gap: 8px; flex-wrap: nowrap; margin: 10px 0">
    <div
      v-for="type in armorTypes"
      :key="type"
      class="pip-card"
      style="
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid;
      "
    >
      <b
        class="armor-label"
        style="font-weight: bold; margin-bottom: 0; font-size: clamp(10px, 2.5vw, 16px)"
      >
        {{ type.toUpperCase() }}
      </b>
      <input
        class="pip-input"
        style="
          text-align: center;
          font-weight: bold;
          font-size: clamp(25px, 8vw, 30px);
          width: 55px;
          border: none;
          background: transparent;
        "
        :value="state.armor[type]"
        @input="onArmor(type, $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { useSheetStore } from '../composables/useSheetStore'
const { state, armorTypes, save } = useSheetStore()

function onArmor(type, val) {
  state.armor[type] = val
  save()
}
</script>
