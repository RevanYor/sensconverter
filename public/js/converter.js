// Game sensitivity data and conversion factors
const games = {
    'valorant': {
        name: 'VALORANT',
        description: 'Tactical 5v5 shooter by Riot Games',
        baseCM360: 360 / 0.07, // cm/360 at sensitivity 1
    },
    'csgo2': {
        name: 'Counter-Strike 2',
        description: 'Valve\'s iconic tactical shooter',
        baseCM360: 360 / 0.022, // cm/360 at sensitivity 1
    },
    'apex': {
        name: 'Apex Legends',
        description: 'Battle Royale by Respawn Entertainment',
        baseCM360: 360 / 0.022, // Uses Source engine sensitivity
    },
    'overwatch2': {
        name: 'Overwatch 2',
        description: 'Team-based shooter by Blizzard',
        baseCM360: 360 / 0.0066, // cm/360 at sensitivity 1
    },
    'r6siege': {
        name: 'Rainbow Six Siege',
        description: 'Tactical team shooter by Ubisoft',
        baseCM360: 360 / 0.00572, // cm/360 at sensitivity 1
    },
    'fortnite': {
        name: 'Fortnite',
        description: 'Battle Royale by Epic Games',
        baseCM360: 360 / 0.0555, // cm/360 at sensitivity 1
    },
    'warzone': {
        name: 'Call of Duty: Warzone',
        description: 'Battle Royale in the Call of Duty universe',
        baseCM360: 360 / 0.0555, // cm/360 at sensitivity 1
    },
    'battlefield': {
        name: 'Battlefield 2042',
        description: 'Large-scale warfare by DICE',
        baseCM360: 360 / 0.0555, // cm/360 at sensitivity 1
    },
    'pubg': {
        name: 'PUBG: Battlegrounds',
        description: 'Original Battle Royale game',
        baseCM360: 360 / 0.0555, // cm/360 at sensitivity 1
    },
    'destiny2': {
        name: 'Destiny 2',
        description: 'MMO shooter by Bungie',
        baseCM360: 360 / 0.0555, // cm/360 at sensitivity 1
    }
};

console.log('Converter.js loaded');

// DOM Elements
const sourceGameSelect = document.getElementById('sourceGame');
const targetGameSelect = document.getElementById('targetGame');
const sourceSensInput = document.getElementById('sourceSens');
const targetSensInput = document.getElementById('targetSens');
const convertBtn = document.getElementById('convertBtn');
const gameList = document.getElementById('gameList');

console.log('DOM Elements:', {
    sourceGameSelect,
    targetGameSelect,
    sourceSensInput,
    targetSensInput,
    convertBtn,
    gameList
});

// Populate game dropdowns
function populateGameDropdowns() {
    console.log('Populating dropdowns');
    const gameOptions = Object.entries(games).map(([id, game]) => {
        return `<option value="${id}">${game.name}</option>`;
    }).join('');

    sourceGameSelect.innerHTML = '<option value="">Select Game</option>' + gameOptions;
    targetGameSelect.innerHTML = '<option value="">Select Game</option>' + gameOptions;
    console.log('Dropdowns populated');
}

// Populate game list
function populateGameList() {
    console.log('Populating game list');
    gameList.innerHTML = Object.entries(games).map(([id, game]) => `
        <div class="bg-gray-800 p-4 rounded-lg">
            <h3 class="text-xl font-bold text-gaming-blue">${game.name}</h3>
            <p class="text-gray-300 mt-2">${game.description}</p>
        </div>
    `).join('');
    console.log('Game list populated');
}

// Convert sensitivity between games
function convertSensitivity() {
    const sourceGame = sourceGameSelect.value;
    const targetGame = targetGameSelect.value;
    const sourceSens = parseFloat(sourceSensInput.value);

    console.log('Converting sensitivity:', {
        sourceGame,
        targetGame,
        sourceSens
    });

    if (!sourceGame || !targetGame || !sourceSens) {
        alert('Please select both games and enter a valid sensitivity');
        return;
    }

    // Calculate cm/360 for source game
    const sourceCM360 = games[sourceGame].baseCM360 / sourceSens;
    
    // Calculate target sensitivity
    const targetSens = games[targetGame].baseCM360 / sourceCM360;
    
    // Display result rounded to 3 decimal places
    targetSensInput.value = Math.round(targetSens * 1000) / 1000;
    console.log('Conversion complete:', targetSensInput.value);
}

// Event Listeners
convertBtn.addEventListener('click', convertSensitivity);
sourceSensInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertSensitivity();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    populateGameDropdowns();
    populateGameList();
});

// Add input validation
sourceSensInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value < 0) {
        e.target.value = 0;
    }
}); 