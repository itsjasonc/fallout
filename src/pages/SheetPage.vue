<template>
  <div
    class="sheet-wrapper"
    style="
      max-width: 900px;
      margin: auto;
      padding: 12px;
      background: var(--pip-panel);
      box-shadow: 0 0 20px #0f0;
    "
  >
    <div
      class="title-bar"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <h2 style="color: #7cff7c; text-shadow: 0 0 6px #0f0; margin: 0 0 0 16px">
        FALLOUT CHARACTER SHEET
      </h2>
      <button class="pip-btn" @click="exportSheet">SAVE</button>
      <button class="pip-btn" @click="importSheet">LOAD</button>
    </div>

    <CharacterHeader />

    <SpecialStats />

    <ArmorPanel />

    <HitPoints />

    <UsesPanel />

    <StatusesPanel />

    <InventoryList />
  </div>
</template>

<script setup>
import CharacterHeader from '../components/CharacterHeader.vue'
import SpecialStats from '../components/SpecialStats.vue'
import ArmorPanel from '../components/ArmorPanel.vue'
import HitPoints from '../components/HitPoints.vue'
import UsesPanel from '../components/UsesPanel.vue'
import StatusesPanel from '../components/StatusesPanel.vue'
import InventoryList from '../components/InventoryList.vue'
import { useSheetStore } from '../composables/useSheetStore'

const { state, save } = useSheetStore()

// export/import stay here (DM tools can move later)
function exportSheet() {
  const baseName =
    (state.name || 'fallout-character')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'fallout-character'

  const today = new Date()
  const dateStr =
    today.getFullYear() +
    String(today.getMonth() + 1).padStart(2, '0') +
    String(today.getDate()).padStart(2, '0')

  const suggested = `${baseName}${dateStr}.json`
  const finalName = suggested.endsWith('.json') ? suggested : suggested + '.json'

  const data = JSON.stringify(state, null, 2)
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = finalName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function importSheet() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'application/json'
  input.onchange = () => {
    const file = input.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const loaded = JSON.parse(reader.result)
        Object.assign(state, loaded)
        save()
        alert('Sheet loaded successfully!')
      } catch {
        alert('Invalid or corrupted file.')
      }
    }
    reader.readAsText(file)
  }
  input.click()
}
</script>
