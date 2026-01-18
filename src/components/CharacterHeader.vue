<template>
  <div
    class="pip-card"
    style="display: grid; gap: 8px; grid-template-columns: 75% 23%; margin-top: 10px"
  >
    <input class="pip-input" v-model="state.name" placeholder="CHARACTER NAME" @input="save()" />
    <input class="pip-input" v-model="state.skillName" placeholder="LEVEL" @input="save()" />
    <input class="pip-input" v-model="state.level" placeholder="SKILL" @input="save()" />
    <input
      class="pip-input"
      :value="capsDisplay"
      placeholder="CAPS"
      @input="onCapsInput"
      @keydown.enter.prevent="commitCaps"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useSheetStore } from '../composables/useSheetStore'
const { state, save, setCapsByExpr } = useSheetStore()

const internalCaps = ref('')

const capsDisplay = computed(() => internalCaps.value || (state.caps ? String(state.caps) : ''))
watch(
  () => state.caps,
  () => {
    if (!internalCaps.value) internalCaps.value = ''
  },
)

function onCapsInput(e) {
  internalCaps.value = e.target.value
}
function commitCaps() {
  const ok = setCapsByExpr(internalCaps.value.trim())
  internalCaps.value = ''
  if (!ok) {
    // invalid → keep display as current caps
    internalCaps.value = ''
  }
}
</script>
