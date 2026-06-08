const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const requiredText = ['Origin of Slime', '슬라임의 기원', '번식', '전쟁 중', '최종 개체'];
const requiredIds = [
  'title-screen',
  'game-container',
  'hud',
  'breed-btn',
  'flee-btn',
  'result-content',
  'joystick-dom',
  'stats-toggle',
  's-genotypes',
];
const requiredCode = ['class Individual', 'class Group', 'class Battle', 'class ArenaScene', 'function startGame'];
const requiredNewCode = [
  'const TERRAIN_EVENT_INTERVAL = 10000',
  'terrainEventTick',
  'applyTerrainEvent',
  'TERRAIN_EVENTS',
  'targetTerrain',
  'event.predicate(i)',
  'terrainEventDeaths',
  '붉은 달',
  "getGenotypeLabel(i, 'color') === 'BB'",
  'const FOOD_CAP = 9999',
  'this.keys = this.input.keyboard.addKeys',
  'Keyboard input',
  'if (!joy.active) return',
  'event.target.closest',
  'geneFrequency',
  'food-cap-text',
  'clientX',
  'clientY',
  'updateJoystickDom',
  'hideJoystickDom',
  'getPointerClientPosition',
  'changedTouches',
  'touches',
  'stats-open',
  'toggleStatsPanel',
  '@media (max-width: 520px)',
  'const TARGET_POPULATION = 50',
  'const STARVATION_DEFICIT_DIVISOR = 3',
  'sortStarvationVictims',
  'stats.foodNeed - a.stats.foodNeed',
  'Math.ceil(deficit / STARVATION_DEFICIT_DIVISOR)',
  'Math.ceil(overTarget * 0.5)',
  'const MUTATION_EFFECT_MULTIPLIER = 2.5',
  'const MAX_NEW_MUTATIONS_PER_CHILD = 2',
  'value * MUTATION_EFFECT_MULTIPLIER',
  'mutationRollRate',
  'newMutationCount < MAX_NEW_MUTATIONS_PER_CHILD',
  'mutationRate: 0.08',
  'function makeGamete',
  'function combineAlleles',
  'function getGenotypeLabel',
  'function getPhenotypeLabel',
  'genotypeFrequency',
  'Mendelian segregation',
  'Independent assortment',
  'dominantName',
  'recessiveName',
  'function getBodyColor',
  "color: { alleles: ['R', 'B']",
  'BODY_COLOR_RED',
  'BODY_COLOR_BLUE',
  'BODY_COLOR_PURPLE',
  "genotype === 'RR'",
  "genotype === 'BB'",
  '보라색',
  'this.createCreatureTexture(getBodyColor(individual))',
  'const ESCAPE_FOOD_PENALTY = 0.25',
  'const ESCAPE_DISTANCE = 260',
  'tryFleeBattle',
  'escape(group)',
  'handleFlee',
  '도망',
  'meteorDeathCount',
  'const resultPopulation',
  '운석 사망 개체',
  'this.meteorDeathCount = this.player.count',
  'const meteorDeathBonus',
  'resultPopulation * 2',
  '운석 사망 보너스',
];

for (const text of requiredText) {
  if (!html.includes(text)) throw new Error(`Missing text: ${text}`);
}

for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing id: ${id}`);
}

for (const code of requiredCode) {
  if (!html.includes(code)) throw new Error(`Missing code: ${code}`);
}

for (const code of requiredNewCode) {
  if (!html.includes(code)) throw new Error(`Missing feature code: ${code}`);
}

for (const marker of ['占', '筌', '袁']) {
  if (html.includes(marker)) throw new Error(`Mojibake marker remains: ${marker}`);
}

if (!html.includes("key === 'mutationRate' || key === 'foodNeed'")) {
  throw new Error('foodNeed must not receive random phenotype noise at game start');
}

console.log('smoke-index ok');
