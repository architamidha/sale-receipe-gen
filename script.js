/* ══════════════════════════════════════════════
   MISE EN PLACE — Smart Recipe Generator
   script.js
══════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════
   RECIPE DATABASE — 22 Recipes
════════════════════════════════════════════════════════ */
const RECIPES = [
  {
    id: 1,
    emoji: '🍝',
    title: 'Spaghetti Aglio e Olio',
    cuisine: 'Italian',
    difficulty: 'Easy',
    time: 20,
    dietary: ['vegan'],
    ingredients: ['spaghetti', 'garlic', 'olive oil', 'chili flakes', 'parsley'],
    nutrition: { calories: 480, protein: 14, carbs: 72, fat: 16 },
    steps: [
      'Boil salted water, cook spaghetti al dente.',
      'Thinly slice garlic and sauté in olive oil with chili flakes until golden.',
      'Toss drained pasta in the pan with pasta water to emulsify.',
      'Finish with fresh parsley and serve immediately.'
    ],
    substitutions: {
      'spaghetti': 'linguine or bucatini',
      'chili flakes': 'black pepper + a pinch of cayenne',
      'parsley': 'basil or chives'
    },
    servings: 4,
    bg: '#F5E6D3'
  },
  {
    id: 2,
    emoji: '🥗',
    title: 'Greek Salad with Feta',
    cuisine: 'Mediterranean',
    difficulty: 'Easy',
    time: 10,
    dietary: ['vegetarian', 'gluten-free'],
    ingredients: ['tomato', 'cucumber', 'feta cheese', 'olives', 'red onion', 'olive oil', 'oregano'],
    nutrition: { calories: 280, protein: 9, carbs: 12, fat: 22 },
    steps: [
      'Chop tomatoes and cucumber into chunks.',
      'Slice red onion thinly.',
      'Combine all vegetables and olives.',
      'Top with feta, drizzle olive oil, sprinkle oregano.'
    ],
    substitutions: {
      'feta cheese': 'ricotta salata or halloumi',
      'olives': 'capers',
      'red onion': 'shallot'
    },
    servings: 4,
    bg: '#E8F0E8'
  },
  {
    id: 3,
    emoji: '🍛',
    title: 'Chicken Tikka Masala',
    cuisine: 'Indian',
    difficulty: 'Medium',
    time: 45,
    dietary: ['gluten-free'],
    ingredients: ['chicken breast', 'tomato', 'onion', 'garlic', 'ginger', 'heavy cream', 'garam masala', 'cumin', 'coriander', 'turmeric'],
    nutrition: { calories: 520, protein: 38, carbs: 18, fat: 30 },
    steps: [
      'Marinate chicken in yogurt and spices for 30 min.',
      'Cook chicken in a hot pan until charred.',
      'Sauté onion, garlic, ginger then add spices.',
      'Add tomatoes, simmer 15 min, blend if desired.',
      'Add cream and chicken, simmer 10 min.'
    ],
    substitutions: {
      'chicken breast': 'chickpeas (vegan version)',
      'heavy cream': 'coconut milk',
      'garam masala': 'curry powder'
    },
    servings: 4,
    bg: '#F5E8D5'
  },
  {
    id: 4,
    emoji: '🌮',
    title: 'Fish Tacos with Lime Slaw',
    cuisine: 'Mexican',
    difficulty: 'Medium',
    time: 25,
    dietary: [],
    ingredients: ['white fish', 'cabbage', 'lime', 'corn tortillas', 'cilantro', 'jalapeño', 'sour cream', 'cumin', 'garlic powder'],
    nutrition: { calories: 390, protein: 28, carbs: 42, fat: 12 },
    steps: [
      'Season fish with cumin and garlic powder, pan-fry.',
      'Shred cabbage, toss with lime juice and salt.',
      'Warm tortillas on a dry pan.',
      'Assemble: fish, slaw, cilantro, jalapeño, sour cream.'
    ],
    substitutions: {
      'white fish': 'shrimp or tofu',
      'sour cream': 'Greek yogurt',
      'corn tortillas': 'flour tortillas'
    },
    servings: 4,
    bg: '#FFF0E0'
  },
  {
    id: 5,
    emoji: '🍜',
    title: 'Thai Basil Fried Rice',
    cuisine: 'Asian',
    difficulty: 'Easy',
    time: 20,
    dietary: ['gluten-free'],
    ingredients: ['jasmine rice', 'egg', 'garlic', 'thai basil', 'fish sauce', 'soy sauce', 'chili', 'vegetable oil'],
    nutrition: { calories: 420, protein: 16, carbs: 65, fat: 10 },
    steps: [
      'Heat oil in wok on high heat.',
      'Add garlic and chili, stir-fry 30 sec.',
      'Push aside, scramble eggs.',
      'Add cold rice, break up clumps, toss well.',
      'Season with fish sauce and soy sauce, add basil.'
    ],
    substitutions: {
      'jasmine rice': 'brown rice or cauliflower rice',
      'fish sauce': 'soy sauce',
      'thai basil': 'Italian basil'
    },
    servings: 2,
    bg: '#E8F5E8'
  },
  {
    id: 6,
    emoji: '🥘',
    title: 'French Onion Soup',
    cuisine: 'French',
    difficulty: 'Medium',
    time: 60,
    dietary: ['vegetarian'],
    ingredients: ['onion', 'beef broth', 'butter', 'gruyere cheese', 'baguette', 'thyme', 'bay leaf', 'white wine'],
    nutrition: { calories: 380, protein: 14, carbs: 35, fat: 20 },
    steps: [
      'Caramelize onions in butter over low heat, 40 min.',
      'Add wine, reduce by half.',
      'Add broth, thyme, bay leaf. Simmer 15 min.',
      'Ladle into oven-safe bowls, top with baguette and cheese.',
      'Broil until cheese is bubbly and golden.'
    ],
    substitutions: {
      'gruyere cheese': 'swiss or comté cheese',
      'white wine': 'apple cider vinegar + water',
      'beef broth': 'vegetable broth'
    },
    servings: 4,
    bg: '#F5EDD5'
  },
  {
    id: 7,
    emoji: '🥑',
    title: 'Avocado Toast with Poached Egg',
    cuisine: 'American',
    difficulty: 'Easy',
    time: 15,
    dietary: ['vegetarian'],
    ingredients: ['sourdough bread', 'avocado', 'egg', 'lemon', 'chili flakes', 'salt'],
    nutrition: { calories: 320, protein: 13, carbs: 28, fat: 18 },
    steps: [
      'Toast the bread until golden.',
      'Mash avocado with lemon juice, salt.',
      'Poach egg in simmering water with a splash of vinegar, 3 min.',
      'Spread avo on toast, top with egg, chili flakes.'
    ],
    substitutions: {
      'sourdough bread': 'whole wheat or gluten-free bread',
      'egg': 'smoked salmon',
      'avocado': 'hummus'
    },
    servings: 1,
    bg: '#EEF5E8'
  },
  {
    id: 8,
    emoji: '🍲',
    title: 'Lentil Dal',
    cuisine: 'Indian',
    difficulty: 'Easy',
    time: 35,
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['red lentils', 'tomato', 'onion', 'garlic', 'ginger', 'turmeric', 'cumin', 'coconut oil', 'cilantro'],
    nutrition: { calories: 310, protein: 18, carbs: 48, fat: 6 },
    steps: [
      'Rinse lentils. Sauté onion in coconut oil.',
      'Add garlic, ginger, spices. Cook 1 min.',
      'Add tomatoes and lentils, cover with water.',
      'Simmer 25 min until lentils are soft.',
      'Finish with fresh cilantro.'
    ],
    substitutions: {
      'red lentils': 'yellow split peas',
      'coconut oil': 'vegetable oil',
      'cilantro': 'parsley'
    },
    servings: 4,
    bg: '#F5E8D0'
  },
  {
    id: 9,
    emoji: '🫕',
    title: 'Shakshuka',
    cuisine: 'Mediterranean',
    difficulty: 'Easy',
    time: 30,
    dietary: ['vegetarian', 'gluten-free'],
    ingredients: ['egg', 'tomato', 'bell pepper', 'onion', 'garlic', 'cumin', 'paprika', 'feta cheese', 'olive oil'],
    nutrition: { calories: 280, protein: 16, carbs: 14, fat: 18 },
    steps: [
      'Sauté onion and pepper in olive oil.',
      'Add garlic, cumin, paprika. Cook 1 min.',
      'Add crushed tomatoes, simmer 10 min.',
      'Make wells, crack in eggs.',
      'Cover and cook until whites are set.',
      'Top with feta and serve.'
    ],
    substitutions: {
      'egg': 'silken tofu (vegan)',
      'feta cheese': 'goat cheese',
      'bell pepper': 'zucchini'
    },
    servings: 4,
    bg: '#F5E0D8'
  },
  {
    id: 10,
    emoji: '🍗',
    title: 'Lemon Herb Roast Chicken',
    cuisine: 'French',
    difficulty: 'Hard',
    time: 90,
    dietary: ['gluten-free'],
    ingredients: ['whole chicken', 'lemon', 'garlic', 'rosemary', 'thyme', 'butter', 'olive oil', 'salt'],
    nutrition: { calories: 580, protein: 48, carbs: 2, fat: 42 },
    steps: [
      'Pat chicken dry, rub with butter mixture.',
      'Stuff cavity with lemon halves, garlic, herbs.',
      'Roast at 200°C/400°F for 70-80 min.',
      'Rest 10 min before carving.'
    ],
    substitutions: {
      'whole chicken': 'chicken thighs',
      'rosemary': 'sage',
      'butter': 'olive oil only'
    },
    servings: 4,
    bg: '#F5EBD5'
  },
  {
    id: 11,
    emoji: '🥙',
    title: 'Falafel Wrap',
    cuisine: 'Mediterranean',
    difficulty: 'Medium',
    time: 40,
    dietary: ['vegan'],
    ingredients: ['chickpeas', 'garlic', 'onion', 'cumin', 'coriander', 'parsley', 'flour', 'flatbread', 'tahini', 'lemon'],
    nutrition: { calories: 420, protein: 16, carbs: 58, fat: 14 },
    steps: [
      'Blend chickpeas with herbs, spices, garlic.',
      'Form into balls, chill 30 min.',
      'Fry in hot oil until golden.',
      'Make tahini sauce with lemon and garlic.',
      'Assemble wraps with falafel and sauce.'
    ],
    substitutions: {
      'chickpeas': 'white beans',
      'flatbread': 'pita or lettuce wrap',
      'tahini': 'nut butter + lemon'
    },
    servings: 4,
    bg: '#EDF5E8'
  },
  {
    id: 12,
    emoji: '🍕',
    title: 'Margherita Pizza',
    cuisine: 'Italian',
    difficulty: 'Medium',
    time: 50,
    dietary: ['vegetarian'],
    ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'fresh basil', 'olive oil'],
    nutrition: { calories: 540, protein: 22, carbs: 68, fat: 20 },
    steps: [
      'Stretch dough on floured surface.',
      'Spread tomato sauce leaving a border.',
      'Top with torn mozzarella.',
      'Bake at 240°C/475°F for 10-12 min.',
      'Top with fresh basil and olive oil.'
    ],
    substitutions: {
      'mozzarella': 'burrata or vegan cheese',
      'pizza dough': 'cauliflower crust',
      'tomato sauce': 'pesto'
    },
    servings: 2,
    bg: '#F5ECE8'
  },
  {
    id: 13,
    emoji: '🍣',
    title: 'Salmon Teriyaki Bowl',
    cuisine: 'Asian',
    difficulty: 'Easy',
    time: 25,
    dietary: ['gluten-free'],
    ingredients: ['salmon fillet', 'soy sauce', 'mirin', 'sake', 'sugar', 'jasmine rice', 'sesame seeds', 'green onion'],
    nutrition: { calories: 560, protein: 42, carbs: 58, fat: 16 },
    steps: [
      'Cook rice.',
      'Combine soy, mirin, sake, sugar for sauce.',
      'Sear salmon skin-down 3 min, flip, glaze.',
      'Cook until caramelized, 4-5 min more.',
      'Serve over rice with seeds and onion.'
    ],
    substitutions: {
      'salmon': 'tofu or chicken',
      'mirin': 'sweet sherry',
      'soy sauce': 'tamari (GF)'
    },
    servings: 2,
    bg: '#E8F0F5'
  },
  {
    id: 14,
    emoji: '🌯',
    title: 'Chicken Caesar Wrap',
    cuisine: 'American',
    difficulty: 'Easy',
    time: 20,
    dietary: [],
    ingredients: ['chicken breast', 'romaine lettuce', 'parmesan', 'caesar dressing', 'flour tortilla', 'croutons'],
    nutrition: { calories: 480, protein: 36, carbs: 38, fat: 18 },
    steps: [
      'Grill or pan-sear chicken, slice.',
      'Toss lettuce with caesar dressing.',
      'Warm tortilla, add lettuce, chicken, parmesan, croutons.',
      'Roll tightly and slice diagonally.'
    ],
    substitutions: {
      'caesar dressing': 'tahini lemon dressing',
      'chicken': 'shrimp or tofu',
      'flour tortilla': 'whole wheat wrap'
    },
    servings: 2,
    bg: '#EEEEEE'
  },
  {
    id: 15,
    emoji: '🥣',
    title: 'Açaí Smoothie Bowl',
    cuisine: 'American',
    difficulty: 'Easy',
    time: 10,
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['acai puree', 'banana', 'almond milk', 'granola', 'blueberries', 'chia seeds', 'honey', 'coconut flakes'],
    nutrition: { calories: 380, protein: 8, carbs: 62, fat: 12 },
    steps: [
      'Blend acai, banana, almond milk until thick.',
      'Pour into a bowl.',
      'Top with granola, berries, chia, coconut.',
      'Drizzle with honey.'
    ],
    substitutions: {
      'acai puree': 'mixed berries',
      'almond milk': 'oat milk',
      'granola': 'toasted oats'
    },
    servings: 1,
    bg: '#EDE8F5'
  },
  {
    id: 16,
    emoji: '🧆',
    title: 'Vegetable Stir Fry with Tofu',
    cuisine: 'Asian',
    difficulty: 'Easy',
    time: 20,
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['tofu', 'broccoli', 'bell pepper', 'carrot', 'garlic', 'ginger', 'soy sauce', 'sesame oil', 'cornstarch'],
    nutrition: { calories: 280, protein: 18, carbs: 24, fat: 12 },
    steps: [
      'Press and cube tofu. Coat in cornstarch.',
      'Fry tofu until golden, set aside.',
      'Sauté garlic and ginger.',
      'Add vegetables, stir-fry on high 4 min.',
      'Add tofu and sauce, toss and serve.'
    ],
    substitutions: {
      'tofu': 'tempeh or edamame',
      'broccoli': 'bok choy',
      'sesame oil': 'avocado oil'
    },
    servings: 3,
    bg: '#E8F5EE'
  },
  {
    id: 17,
    emoji: '🥞',
    title: 'Fluffy Buttermilk Pancakes',
    cuisine: 'American',
    difficulty: 'Easy',
    time: 20,
    dietary: ['vegetarian'],
    ingredients: ['flour', 'buttermilk', 'egg', 'butter', 'baking powder', 'baking soda', 'sugar', 'vanilla', 'salt', 'maple syrup'],
    nutrition: { calories: 420, protein: 10, carbs: 65, fat: 14 },
    steps: [
      'Whisk dry ingredients together.',
      'Beat wet ingredients separately.',
      "Fold wet into dry — don't overmix!",
      'Cook on buttered griddle until bubbles appear, flip once.',
      'Serve with maple syrup and butter.'
    ],
    substitutions: {
      'buttermilk': 'milk + 1 tbsp vinegar',
      'butter': 'coconut oil',
      'flour': 'gluten-free blend'
    },
    servings: 4,
    bg: '#F5EEE0'
  },
  {
    id: 18,
    emoji: '🐟',
    title: 'Pan-Seared Cod with Capers',
    cuisine: 'Mediterranean',
    difficulty: 'Medium',
    time: 25,
    dietary: ['gluten-free'],
    ingredients: ['cod fillet', 'capers', 'lemon', 'butter', 'garlic', 'olive oil', 'parsley', 'salt'],
    nutrition: { calories: 320, protein: 38, carbs: 4, fat: 16 },
    steps: [
      'Pat cod dry and season with salt.',
      'Sear in olive oil 3-4 min per side.',
      'In same pan, melt butter with garlic.',
      'Add capers and lemon juice, simmer 1 min.',
      'Pour over cod, garnish with parsley.'
    ],
    substitutions: {
      'cod': 'halibut or tilapia',
      'capers': 'olives',
      'butter': 'olive oil only'
    },
    servings: 2,
    bg: '#E8EEF5'
  },
  {
    id: 19,
    emoji: '🫘',
    title: 'Black Bean Tacos',
    cuisine: 'Mexican',
    difficulty: 'Easy',
    time: 15,
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['black beans', 'corn tortillas', 'avocado', 'salsa', 'lime', 'cumin', 'garlic powder', 'cilantro'],
    nutrition: { calories: 340, protein: 14, carbs: 56, fat: 8 },
    steps: [
      'Warm beans with cumin and garlic powder.',
      'Warm tortillas.',
      'Slice avocado.',
      'Assemble: beans, avocado, salsa, cilantro, lime.'
    ],
    substitutions: {
      'black beans': 'pinto beans',
      'corn tortillas': 'lettuce cups',
      'avocado': 'hummus'
    },
    servings: 4,
    bg: '#E8EEE8'
  },
  {
    id: 20,
    emoji: '🍮',
    title: 'Classic Crème Brûlée',
    cuisine: 'French',
    difficulty: 'Hard',
    time: 60,
    dietary: ['vegetarian', 'gluten-free'],
    ingredients: ['heavy cream', 'egg yolk', 'sugar', 'vanilla bean'],
    nutrition: { calories: 480, protein: 6, carbs: 38, fat: 34 },
    steps: [
      'Heat cream with vanilla until steaming.',
      'Whisk yolks and sugar until pale.',
      'Temper cream into yolks slowly.',
      'Strain into ramekins, bake in water bath 35 min at 160°C.',
      'Chill, then caramelize sugar with a torch.'
    ],
    substitutions: {
      'heavy cream': 'coconut cream',
      'vanilla bean': '1 tsp vanilla extract'
    },
    servings: 4,
    bg: '#F5EDD5'
  },
  {
    id: 21,
    emoji: '🥩',
    title: 'Beef Bulgogi Bowl',
    cuisine: 'Asian',
    difficulty: 'Medium',
    time: 35,
    dietary: [],
    ingredients: ['beef sirloin', 'soy sauce', 'sesame oil', 'pear', 'garlic', 'ginger', 'green onion', 'rice', 'sesame seeds'],
    nutrition: { calories: 580, protein: 44, carbs: 52, fat: 20 },
    steps: [
      'Slice beef thinly against the grain.',
      'Blend pear, soy, sesame oil, garlic, ginger for marinade.',
      'Marinate beef at least 30 min.',
      'Cook on high heat in batches for best caramelization.',
      'Serve over rice, topped with green onion and sesame.'
    ],
    substitutions: {
      'beef': 'pork or mushrooms',
      'pear': 'apple or kiwi',
      'soy sauce': 'tamari (GF)'
    },
    servings: 4,
    bg: '#F0E8E0'
  },
  {
    id: 22,
    emoji: '🫙',
    title: 'Gazpacho',
    cuisine: 'Mediterranean',
    difficulty: 'Easy',
    time: 15,
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['tomato', 'cucumber', 'bell pepper', 'garlic', 'olive oil', 'sherry vinegar', 'salt', 'stale bread'],
    nutrition: { calories: 180, protein: 4, carbs: 22, fat: 8 },
    steps: [
      'Roughly chop all vegetables.',
      'Blend with bread, oil, vinegar, garlic until smooth.',
      'Season generously with salt.',
      'Chill at least 2 hours.',
      'Serve cold with a drizzle of olive oil.'
    ],
    substitutions: {
      'sherry vinegar': 'red wine vinegar',
      'stale bread': 'cucumber (gluten-free)',
      'bell pepper': 'roasted red pepper'
    },
    servings: 4,
    bg: '#F5E8E0'
  }
];

/* ════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════ */
let ingredients = [];
let favorites = JSON.parse(localStorage.getItem('mep_favs') || '[]');
let ratings = JSON.parse(localStorage.getItem('mep_ratings') || '{}');
let currentModal = null;
let modalServings = 4;
const dietFilters = new Set();

const QUICK_ITEMS = ['chicken', 'egg', 'pasta', 'rice', 'tomato', 'garlic', 'onion', 'lemon', 'cheese', 'beans'];

/* ════════════════════════════════════════════════════════
   INITIALIZATION
════════════════════════════════════════════════════════ */
function init() {
  renderQuickIngredients();
  findRecipes();
}

/* ════════════════════════════════════════════════════════
   QUICK INGREDIENTS
════════════════════════════════════════════════════════ */
function renderQuickIngredients() {
  const wrap = document.getElementById('quick-ings');
  wrap.innerHTML = QUICK_ITEMS.map(q =>
    `<button class="quick-ing" onclick="addQuick('${q}')">${q}</button>`
  ).join('');
}

/* ════════════════════════════════════════════════════════
   INGREDIENT MANAGEMENT
════════════════════════════════════════════════════════ */
function handleIngKey(e) {
  if (e.key === 'Enter') addIngredient();
}

function addIngredient() {
  const input = document.getElementById('ing-input');
  const val = input.value.trim().toLowerCase();
  if (!val || ingredients.includes(val)) {
    input.value = '';
    return;
  }
  ingredients.push(val);
  input.value = '';
  renderTags();
}

function addQuick(item) {
  if (!ingredients.includes(item)) {
    ingredients.push(item);
    renderTags();
  }
}

function removeIngredient(item) {
  ingredients = ingredients.filter(i => i !== item);
  renderTags();
}

function clearIngredients() {
  ingredients = [];
  renderTags();
}

function renderTags() {
  const wrap = document.getElementById('tags-wrap');
  wrap.innerHTML = ingredients.map(i =>
    `<span class="tag">${i}<button class="tag-remove" onclick="removeIngredient('${i}')">×</button></span>`
  ).join('');
}

/* ════════════════════════════════════════════════════════
   TABS
════════════════════════════════════════════════════════ */
function switchTab(id, btnEl) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btnEl.classList.add('active');
}

/* ════════════════════════════════════════════════════════
   FILTERS
════════════════════════════════════════════════════════ */
function toggleDiet(el) {
  const val = el.dataset.val;
  el.classList.toggle('active');
  if (dietFilters.has(val)) {
    dietFilters.delete(val);
  } else {
    dietFilters.add(val);
  }
}

/* ════════════════════════════════════════════════════════
   IMAGE / PHOTO RECOGNITION (Simulated AI)
════════════════════════════════════════════════════════ */
function handleImage(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    const preview = document.getElementById('img-preview');
    preview.src = ev.target.result;
    preview.style.display = 'block';
    simulateAIRecognition();
  };
  reader.readAsDataURL(file);
}

function simulateAIRecognition() {
  const status = document.getElementById('ai-status');
  status.innerHTML = `
    <div class="ai-analyzing">
      <div class="ai-dot"></div>
      <div class="ai-dot"></div>
      <div class="ai-dot"></div>
      &nbsp;Analyzing image…
    </div>`;

  setTimeout(() => {
    // Simulate detecting common ingredients from photo
    const detected = ['tomato', 'garlic', 'olive oil', 'basil'];
    detected.forEach(d => {
      if (!ingredients.includes(d)) ingredients.push(d);
    });
    renderTags();
    status.innerHTML = `<div style="color:var(--olive);font-size:0.82rem;margin-top:0.5rem">✓ Detected: ${detected.join(', ')}</div>`;
    showToast('✓ Ingredients detected from photo!');
  }, 1800);
}

/* ════════════════════════════════════════════════════════
   RECIPE MATCHING ALGORITHM
════════════════════════════════════════════════════════ */
function matchScore(recipe) {
  if (!ingredients.length) return 100;
  const have = ingredients.map(i => i.toLowerCase());
  const needed = recipe.ingredients.map(i => i.toLowerCase());
  const matched = have.filter(h =>
    needed.some(n => n.includes(h) || h.includes(n))
  );
  return Math.round((matched.length / needed.length) * 100);
}

function findRecipes() {
  const diff = document.getElementById('filter-difficulty').value;
  const maxTime = document.getElementById('filter-time').value;
  const cuisine = document.getElementById('filter-cuisine').value;

  setLoading(true);

  setTimeout(() => {
    let results = RECIPES.map(r => ({ ...r, score: matchScore(r) }));

    // Apply filters
    if (diff) results = results.filter(r => r.difficulty === diff);
    if (maxTime) results = results.filter(r => r.time <= parseInt(maxTime));
    if (cuisine) results = results.filter(r => r.cuisine === cuisine);
    if (dietFilters.size > 0) {
      results = results.filter(r =>
        [...dietFilters].every(d => r.dietary.includes(d))
      );
    }

    // Sort by match score when ingredients are provided
    if (ingredients.length) {
      results.sort((a, b) => b.score - a.score);
    }

    setLoading(false);
    renderGrid(results, 'recipe-grid');
    document.getElementById('results-section').style.display = 'block';
    document.getElementById('result-count').textContent = `${results.length} recipes`;
  }, 600);
}

function setLoading(show) {
  const loader = document.getElementById('loading');
  const messages = ['Matching recipes…', 'Checking your pantry…', 'Finding the best matches…'];
  document.getElementById('loading-text').textContent =
    messages[Math.floor(Math.random() * messages.length)];
  loader.classList.toggle('show', show);
  if (show) document.getElementById('results-section').style.display = 'none';
}

/* ════════════════════════════════════════════════════════
   RENDER RECIPE CARDS
════════════════════════════════════════════════════════ */
function renderGrid(recipes, gridId) {
  const grid = document.getElementById(gridId);
  if (!recipes.length) {
    grid.innerHTML = '';
    return;
  }
  grid.innerHTML = recipes.map((r, i) => buildRecipeCard(r, i * 50)).join('');
}

function buildRecipeCard(r, delay = 0) {
  const isFav = favorites.includes(r.id);
  const rating = ratings[r.id] || 0;
  const stars = [1, 2, 3, 4, 5].map(s =>
    `<span class="star" style="opacity:${s <= rating ? 1 : 0.25}">★</span>`
  ).join('');
  const match = (r.score !== undefined) ? r.score : matchScore(r);

  return `
    <div class="recipe-card" style="animation-delay:${delay}ms" onclick="openModal(${r.id})">
      <div class="card-image" style="background:${r.bg}">
        ${r.emoji}
        <span class="card-badge">${r.difficulty}</span>
        ${(match < 100 && ingredients.length)
          ? `<span class="match-badge">${match}% match</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-cuisine">${r.cuisine}</div>
        <div class="card-title">${r.title}</div>
        <div class="card-meta">
          <span class="meta-item">⏱ ${r.time} min</span>
          <span class="meta-item">👤 ${r.servings} servings</span>
          ${r.dietary.length
            ? `<span class="meta-item" style="color:var(--olive)">✦ ${r.dietary[0]}</span>` : ''}
        </div>
        <div class="card-nutrition">
          <div class="nutr-item">
            <div class="nutr-val">${r.nutrition.calories}</div>
            <div class="nutr-label">kcal</div>
          </div>
          <div class="nutr-item">
            <div class="nutr-val">${r.nutrition.protein}g</div>
            <div class="nutr-label">protein</div>
          </div>
          <div class="nutr-item">
            <div class="nutr-val">${r.nutrition.carbs}g</div>
            <div class="nutr-label">carbs</div>
          </div>
          <div class="nutr-item">
            <div class="nutr-val">${r.nutrition.fat}g</div>
            <div class="nutr-label">fat</div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn-save ${isFav ? 'saved' : ''}"
            onclick="event.stopPropagation(); toggleFav(${r.id}, this)"
            title="Save recipe">
            ${isFav ? '♥' : '♡'}
          </button>
          <div class="star-rating" onclick="event.stopPropagation()">
            ${stars}
          </div>
          <button class="btn-view" onclick="event.stopPropagation(); openModal(${r.id})">View →</button>
        </div>
      </div>
    </div>`;
}

/* ════════════════════════════════════════════════════════
   MODAL
════════════════════════════════════════════════════════ */
function openModal(id) {
  const r = RECIPES.find(x => x.id === id);
  currentModal = r;
  modalServings = r.servings;

  // Header
  document.getElementById('m-cuisine').textContent = r.cuisine;
  document.getElementById('m-title').textContent = `${r.emoji} ${r.title}`;
  document.getElementById('m-serving').textContent = modalServings;

  // Meta
  document.getElementById('m-meta').innerHTML = `
    <span class="meta-item">⏱ ${r.time} min</span>
    <span class="meta-item">📊 ${r.difficulty}</span>
    ${r.dietary.map(d => `<span class="meta-item" style="color:var(--olive)">✦ ${d}</span>`).join('')}
  `;

  // Content
  renderModalNutrition(1);
  renderModalIngredients();
  renderSubstitutions(r);

  // Steps
  document.getElementById('m-steps').innerHTML =
    r.steps.map(s => `<li>${s}</li>`).join('');

  // Stars
  const rating = ratings[r.id] || 0;
  document.getElementById('m-stars').innerHTML = [1, 2, 3, 4, 5].map(s =>
    `<span class="star" onclick="rateRecipe(${id}, ${s})"
      style="opacity:${s <= rating ? 1 : 0.3}; font-size:1.3rem">★</span>`
  ).join('');

  document.getElementById('modal-overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function renderModalNutrition(multiplier) {
  const m = currentModal.nutrition;
  document.getElementById('m-nutrition').innerHTML = `
    <div class="nutr-box">
      <div class="val">${Math.round(m.calories * multiplier)}</div>
      <div class="lbl">Calories</div>
    </div>
    <div class="nutr-box">
      <div class="val">${Math.round(m.protein * multiplier)}g</div>
      <div class="lbl">Protein</div>
    </div>
    <div class="nutr-box">
      <div class="val">${Math.round(m.carbs * multiplier)}g</div>
      <div class="lbl">Carbs</div>
    </div>
    <div class="nutr-box">
      <div class="val">${Math.round(m.fat * multiplier)}g</div>
      <div class="lbl">Fat</div>
    </div>
  `;
}

function renderModalIngredients() {
  const r = currentModal;
  const have = ingredients.map(i => i.toLowerCase());
  document.getElementById('m-ingredients').innerHTML = r.ingredients.map(ing => {
    const owned = !ingredients.length || have.some(h =>
      ing.toLowerCase().includes(h) || h.includes(ing.toLowerCase())
    );
    const icon = !ingredients.length ? '•' : (owned ? '✓' : '✗');
    return `<li class="${owned ? '' : 'missing'}">${icon} ${ing}</li>`;
  }).join('');
}

function renderSubstitutions(r) {
  const subs = r.substitutions || {};
  const keys = Object.keys(subs);
  if (!keys.length) {
    document.getElementById('m-substitutions').innerHTML =
      '<p style="color:var(--muted);font-size:0.85rem">No substitutions listed.</p>';
    return;
  }
  document.getElementById('m-substitutions').innerHTML = `
    <div class="sub-box">
      <h4>🔄 Ingredient Swaps</h4>
      ${keys.map(k => `<div class="sub-item"><strong>${k}</strong> → ${subs[k]}</div>`).join('')}
    </div>`;
}

function changeServing(delta) {
  modalServings = Math.max(1, modalServings + delta);
  document.getElementById('m-serving').textContent = modalServings;
  const ratio = modalServings / currentModal.servings;
  renderModalNutrition(ratio);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('show');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

/* ════════════════════════════════════════════════════════
   FAVORITES
════════════════════════════════════════════════════════ */
function toggleFav(id, btn) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(x => x !== id);
    btn.innerHTML = '♡';
    btn.classList.remove('saved');
    showToast('Removed from saved recipes');
  } else {
    favorites.push(id);
    btn.innerHTML = '♥';
    btn.classList.add('saved');
    showToast('♥ Recipe saved!');
  }
  localStorage.setItem('mep_favs', JSON.stringify(favorites));
}

/* ════════════════════════════════════════════════════════
   RATINGS
════════════════════════════════════════════════════════ */
function rateRecipe(id, score) {
  ratings[id] = score;
  localStorage.setItem('mep_ratings', JSON.stringify(ratings));

  // Update modal stars
  document.getElementById('m-stars').innerHTML = [1, 2, 3, 4, 5].map(s =>
    `<span class="star" onclick="rateRecipe(${id}, ${s})"
      style="opacity:${s <= score ? 1 : 0.3}; font-size:1.3rem">★</span>`
  ).join('');

  showToast(`Rated ${score} ★ — thanks!`);
}

/* ════════════════════════════════════════════════════════
   PAGE NAVIGATION
════════════════════════════════════════════════════════ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');

  if (id === 'favorites') renderFavorites();
  if (id === 'suggestions') renderSuggestions();
}

function renderFavorites() {
  const grid = document.getElementById('favorites-grid');
  const empty = document.getElementById('fav-empty');
  const favRecipes = RECIPES.filter(r => favorites.includes(r.id));

  if (!favRecipes.length) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  renderGrid(favRecipes, 'favorites-grid');
}

function renderSuggestions() {
  const grid = document.getElementById('suggestions-grid');
  const empty = document.getElementById('sug-empty');
  const ratedIds = Object.keys(ratings).map(Number);

  if (!ratedIds.length) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  // Find top-rated cuisines (4+ stars)
  const topCuisines = {};
  ratedIds.forEach(id => {
    const r = RECIPES.find(x => x.id === id);
    if (r && ratings[id] >= 4) {
      topCuisines[r.cuisine] = (topCuisines[r.cuisine] || 0) + 1;
    }
  });

  // Suggest unrated recipes from preferred cuisines
  let suggested = RECIPES.filter(r =>
    !ratedIds.includes(r.id) && Object.keys(topCuisines).includes(r.cuisine)
  );

  // Fallback: just show unrated recipes
  if (suggested.length < 4) {
    suggested = RECIPES.filter(r => !ratedIds.includes(r.id)).slice(0, 6);
  }

  renderGrid(suggested, 'suggestions-grid');
}

/* ════════════════════════════════════════════════════════
   TOAST NOTIFICATION
════════════════════════════════════════════════════════ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ════════════════════════════════════════════════════════
   START
════════════════════════════════════════════════════════ */
init();