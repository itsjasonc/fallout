<template>
  <div
    class="hp-area"
    style="
      display: grid;
      grid-template-columns: 1fr 72px;
      gap: 8px;
      align-items: stretch;
      margin: 10px 0;
    "
  >
    <div
      class="pip-card"
      style="
        position: relative;
        height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 6px;
      "
    >
      <div class="hp-title" style="font-size: 20px; letter-spacing: 2px; margin-bottom: 4px">
        HIT POINTS
      </div>

      <div
        class="hp-center"
        style="
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
        "
      >
        <button
          class="pip-btn"
          style="position: absolute; left: 8px; top: 50%; transform: translateY(-50%)"
          @click="chgHP(-1)"
        >
          −
        </button>
        <input id="hp" class="pip-input" :style="hpStyle" v-model="state.hp" />
        <button
          class="pip-btn"
          style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%)"
          @click="chgHP(1)"
        >
          +
        </button>

        <button
          class="pip-btn"
          style="position: absolute; right: 4px; top: 5%; transform: translateY(-50%)"
          @click="chgHP10"
        >
          +10%
        </button>

        <div
          class="pip-card"
          style="
            position: absolute;
            height: 20px;
            top: 5%;
            left: 4px;
            padding: 0;
            border-color: var(--pip-warn);
            box-shadow: 0 0 6px var(--pip-warn);
            display: flex;
            align-items: center;
          "
        >
          <input
            class="pip-input"
            placeholder="3P"
            v-model="armorInput"
            @input="onArmorDamage"
            style="
              width: 40px;
              background: transparent;
              border: none;
              box-shadow: none;
              padding: 0;
              margin: 0;
              text-align: center;
            "
          />
        </div>
      </div>

      <div
        class="hp-lower-row"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 6px;
        "
      >
        <button class="pip-btn" :class="{ 'use-off': state.addiction }" @click="toggleAddiction">
          ADDICTED
        </button>

        <label class="pip-card" style="display: flex; align-items: center; justify-content: center">
          <input
            type="checkbox"
            :checked="state.withdraw1"
            @change="
              state.withdraw1 = $event.target.checked,
              save()
            "
          />
        </label>
        <label class="pip-card" style="display: flex; align-items: center; justify-content: center">
          <input
            type="checkbox"
            :checked="state.withdraw2"
            @change="
              state.withdraw2 = $event.target.checked,
              save()
            "
          />
        </label>
      </div>
    </div>

    <div
      class="uses"
      style="
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        gap: 6px;
        transform: translateX(-4px);
      "
    >
      <button class="pip-btn" :class="useClass('skill')" @click="toggleUse('skill')">SKILL</button>
      <button class="pip-btn" :class="useClass('luck')" @click="toggleUse('luck')">LUCK</button>
      <button class="pip-btn" :class="useClass('resist')" @click="toggleUse('resist')">
        RESIST
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useSheetStore } from '../composables/useSheetStore'
const { state, hpPct, chgHP, chgHP10, applyArmorDamage, toggleUse, save } = useSheetStore()

const hpStyle = computed(() => {
  const pct = hpPct.value
  let color = '#9fef9f',
    glow = '#9fef9f'
  if (pct <= 0.25) {
    color = '#ff3b3b'
    glow = '#ff3b3b'
  } else if (pct <= 0.5) {
    color = '#ff7f3f'
    glow = '#ff7f3f'
  } else if (pct <= 0.75) {
    color = '#e6ff66'
    glow = '#e6ff66'
  }
  return {
    fontSize: '42px',
    textAlign: 'center',
    width: '160px',
    color,
    textShadow: `0 0 6px ${glow}`,
  }
})

const armorInput = ref('')
function onArmorDamage() {
  const raw = armorInput.value.trim().toUpperCase()
  if (!/^\d+[PNXR]$/.test(raw)) return
  applyArmorDamage(raw)
  armorInput.value = ''
}

function useClass(k) {
  return state.uses[k] ? 'use-on' : 'use-off'
}
function toggleAddiction() {
  state.addiction = !state.addiction
  save()
}
</script>

<style scoped>
.use-on {
  background: #0f2f0f;
  border-color: #2cff2c;
  box-shadow: 0 0 8px #2cff2c;
}
.use-off {
  background: #2a0000;
  border-color: #ff3c3c;
  color: #ff9c9c;
  box-shadow: 0 0 8px #ff3c3c;
}
</style>
