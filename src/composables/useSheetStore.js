import { reactive, computed } from 'vue'

const STORAGE_KEY = 'fallout_character_v10'
const statNames = ['STR', 'AGI', 'END', 'INT', 'CHA']
const negNames = ['Hunger', 'Thirst', 'Fatigue', 'Rads', 'Injury']
const armorTypes = ['Physical', 'Energy', 'Explosive', 'Radiation']

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function initState() {
  const loaded = load()
  if (loaded) return loaded

  return {
    name: '',
    skillName: '',
    level: '',
    caps: 0,
    hp: '20/20',
    stats: Object.fromEntries(statNames.map((s) => [s, ''])),
    starredStats: Object.fromEntries(statNames.map((s) => [s, false])),
    specialStats: Object.fromEntries(statNames.map((s) => [s, false])),
    armor: { Physical: '0', Energy: '0', Explosive: '0', Radiation: '0' },
    neg: Object.fromEntries(negNames.map((n) => [n, 0])),
    inventory: Array.from({ length: 12 }, () => ({
      name: '',
      heavy: false,
      dropdown: false,
      counters: [
        { title: '', value: 0 },
        { title: '', value: 0 },
        { title: '', value: 0 },
      ],
    })),
    uses: { skill: true, luck: true, resist: true },
    addiction: false,
    withdraw1: false,
    withdraw2: false,
    perks: {},
    perkSections: {},
    notes: '',
    showTakenOnly: false,
  }
}

const state = reactive(initState())

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

// HP helpers
function parseHP() {
  const [curRaw, maxRaw] = String(state.hp).split('/')
  const cur = parseInt(curRaw) || 0
  const max = parseInt(maxRaw) || cur
  return { cur, max }
}

const hpPct = computed(() => {
  const { cur, max } = parseHP()
  return max ? cur / max : 0
})

function chgHP(d) {
  const { cur, max } = parseHP()
  const next = Math.max(0, Math.min(max, cur + d))
  state.hp = `${next}/${max}`
  save()
}

function chgHP10() {
  const { cur, max } = parseHP()
  const inc = Math.ceil(max * 0.1)
  const next = Math.min(max, cur + inc)
  state.hp = `${next}/${max}`
  save()
}

// Armor damage
function applyArmorDamage(raw) {
  const match = raw
    .trim()
    .toUpperCase()
    .match(/^(\d+)([PNXR])$/)
  if (!match) return
  const amount = parseInt(match[1])
  const type = match[2]
  const map = { P: 'Physical', N: 'Energy', X: 'Explosive', R: 'Radiation' }
  const key = map[type]
  const armorVal = parseInt(state.armor[key]) || 0
  let damage = amount - armorVal
  if (damage < 0) damage = 0
  const { cur, max } = parseHP()
  const next = Math.max(0, cur - damage)
  state.hp = `${next}/${max}`
  save()
}

// Negatives
function chgNeg(n, d) {
  state.neg[n] = Math.max(0, state.neg[n] + d)
  save()
}

// Uses
function toggleUse(k) {
  state.uses[k] = !state.uses[k]
  save()
}

// Inventory
function toggleHeavy(i) {
  state.inventory[i].heavy = !state.inventory[i].heavy
  save()
}
function toggleDropdown(i) {
  state.inventory[i].dropdown = !state.inventory[i].dropdown
  save()
}
function chgCounter(i, c, d) {
  const val = state.inventory[i].counters[c].value + d
  state.inventory[i].counters[c].value = Math.max(0, val)
  save()
}

// Caps
function evaluateCapsExpression(expr, currentTotal) {
  let cleaned = expr.replace(/,/g, '').trim()
  if (!cleaned) return null
  cleaned = cleaned.replace(/\s+/g, '')

  if (/^\d+[+-]$/.test(cleaned)) {
    const amt = parseInt(cleaned.slice(0, -1), 10)
    const op = cleaned.slice(-1)
    return currentTotal + (op === '+' ? amt : -amt)
  }
  if (/^[+-]\d+$/.test(cleaned)) return currentTotal + parseInt(cleaned, 10)

  const opMatch = cleaned.match(/^(\d+)([+-])(\d+)$/)
  if (opMatch) {
    const base = parseInt(opMatch[1], 10)
    const op = opMatch[2]
    const addend = parseInt(opMatch[3], 10)
    return op === '+' ? base + addend : base - addend
  }
  if (/^\d+$/.test(cleaned)) return parseInt(cleaned, 10)
  return null
}

function setCapsByExpr(expr) {
  const res = evaluateCapsExpression(expr, state.caps)
  if (res === null) return false
  state.caps = res
  save()
  return true
}

// Exports
export function useSheetStore() {
  return {
    state,
    statNames,
    negNames,
    armorTypes,

    save,

    // HP
    parseHP,
    hpPct,
    chgHP,
    chgHP10,
    applyArmorDamage,

    // Negatives
    chgNeg,

    // Uses
    toggleUse,

    // Inventory
    toggleHeavy,
    toggleDropdown,
    chgCounter,

    // Caps
    setCapsByExpr,
  }
}
