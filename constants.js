export const armorTable = [
    { roll: 2, text: "Junk armor: +9 def, 60c" },
    { roll: 3, text: "Raider armor: +10 def, 70c" },
    { roll: 4, text: "Leather armor: +11 def, 80c" },
    { roll: 5, text: "Chain armor: +12 def, 90c" },
    { roll: 6, text: "Metal armor: +13 def, 100c" },
    { roll: 7, text: "Synth armor: +14 def, 110c" },
    { roll: 8, text: "Mutant armor: +15 def, 120c" },
    { roll: 9, text: "Rugged armor: +16 def, 130c" },
    { roll: 10, text: "Combat armor: +18 def, 140c" },
    { roll: 11, text: "Infantry armor: +20 def, 150c" },
    { roll: 12, text: "Assault armor: +22 def, 160c" },
    { roll: 13, text: "Ranger armor: +24 def, 170c" },
    { roll: 14, text: "Salvaged power armor: +26 def, 180c" },
    { roll: 15, text: "Power armor: +28 def, +190c" },
    { roll: 16, text: "Advanced power armor: +30 def, 200c" }
];

export /* Note: ammo field uses "-" for no-ammo entries so indexes stay consistent */
    const weapons = {
        E1: [[6, "Pipe Pistol", "5 P", "small rounds", "mid", "AGI", "30c"],
        [8, "Revolver", "6 P", "small rounds", "mid", "AGI", "40c"],
        [10, "Combat Pistol", "7 P", "small rounds", "mid", "AGI", "50c"],
        [12, "Magnum", "8 P", "small rounds", "mid", "AGI", "60c"],
        [14, "Big Iron", "9 P", "small rounds", "mid", "AGI", "70c"],
        [99, "Purifier", "10 P", "small rounds", "mid", "AGI", "80c"]],
        E2: [[6, "Laser Pistol", "6 E", "E-cell", "mid", "INT", "40c"],
        [8, "Plasma Pistol", "7 E", "E-cell", "mid", "INT", "50c"],
        [10, "Sonic Pistol", "8 E", "E-cell", "mid", "INT", "60c"],
        [12, "Tesla Pistol", "9 E", "E-cell", "mid", "INT", "70c"],
        [14, "Gauss Pistol", "10 E", "E-cell", "mid", "INT", "80c"],
        [99, "Valanyr", "11 E", "E-cell", "mid", "INT", "90c"]],
        E3: [[6, "Pipe Rifle", "7 P", "large rounds", "long", "AGI", "50c"],
        [8, "Service Rifle", "8 P", "large rounds", "long", "AGI", "70c"],
        [10, "Hunting Rifle", "9 P", "large rounds", "long", "AGI", "90c"],
        [12, "Combat Rifle", "10 P", "large rounds", "long", "AGI", "110c"],
        [14, "Assault Rifle", "11 P", "large rounds", "long", "AGI", "130c"],
        [99, "Thoridal", "12 P", "large rounds", "long", "AGI", "150c"]],
        E4: [[6, "Laser Rifle", "8 E", "MF-cell", "long", "INT", "60c"],
        [8, "Plasma Rifle", "9 E", "MF-cell", "long", "INT", "80c"],
        [10, "Sonic Rifle", "10 E", "MF-cell", "long", "INT", "100c"],
        [12, "Tesla Rifle", "11 E", "MF-cell", "long", "INT", "120c"],
        [14, "Gauss Rifle", "12 E", "MF-cell", "long", "INT", "140c"],
        [99, "Atiesh", "13 E", "MF-cell", "long", "INT", "160c"]],
        E5: [[6, "Sawed-Off SG", "3x3 P", "small", "short", "AGI", "50c"],
        [8, "Hunting SG", "3x4 P", "small", "short", "AGI", "60c"],
        [10, "Caravan SG", "3x5 P", "small", "short", "AGI", "70c"],
        [12, "Combat SG", "3x6 P", "small", "short", "AGI", "80c"],
        [14, "Riot SG", "3x7 P", "small", "short", "AGI", "90c"],
        [99, "Gorehowl", "3x8 P", "small", "short", "AGI", "100c"]],
        E6: [[6, "Laser Shotgun", "3x4 E", "E-cell", "short", "INT", "60c"],
        [8, "Plasma Shotgun", "3x5 E", "E-cell", "short", "INT", "70c"],
        [10, "Gauss Shotgun", "3x6 E", "E-cell", "short", "INT", "80c"],
        [12, "Gatling Laser", "3x7 E", "E-cell", "short", "INT", "90c"],
        [14, "Tesla Cannon", "3x8 E", "E-cell", "short", "INT", "100c"],
        [99, "Doomhammer", "3x9 E", "E-cell", "short", "INT", "110c"]],
        O1: [[6, "Hand Mortar", "10 X splash X", "fuel", "long", "AGI", "80c"],
        [8, "Nade Launcher", "11 X splash", "fuel", "long", "AGI", "110c"],
        [10, "Nade Cannon", "12 X splash", "fuel", "long", "AGI", "140c"],
        [12, "Missile Launcher", "13 X splash", "fuel", "long", "AGI", "170c"],
        [14, "Fat Man", "14 X splash", "fuel", "long", "AGI", "200c"],
        [99, "Ashbringer", "15 X splash", "fuel", "long", "AGI", "230c"]],
        O2: [[6, "Flamer", "9 X splash+burn", "fuel", "mid", "AGI", "70c"],
        [8, "Napalmer", "10 X splash+burn", "fuel", "mid", "AGI", "100c"],
        [10, "Incinerator", "11 X splash+burn", "fuel", "mid", "AGI", "130c"],
        [12, "Liquifier", "12 X splash+burn", "fuel", "mid", "AGI", "160c"],
        [14, "Hellfire Inc", "13 X splash+burn", "fuel", "mid", "AGI", "190c"],
        [99, "Sulfuras", "14 X splash+burn", "fuel", "short", "AGI", "220c"]],
        O3: [[6, "Weak Melee", "6 P", "-", "melee", "STR", "30c"],
        [8, "Medium Melee", "7 P", "-", "melee", "STR", "50c"],
        [10, "Strong Melee", "8 P", "-", "melee", "STR", "70c"],
        [12, "Powerful Melee", "9 P", "-", "melee", "STR", "90c"],
        [14, "Ultimate Melee", "10 P", "-", "melee", "STR", "110c"],
        [99, "Shadowmourne", "11 P", "-", "melee", "STR", "130c"]],
        O4: [[6, "Brass Knuckles", "2x4 P", "-", "melee", "END", "30c"],
        [8, "Bladed Gauntlet", "2x5 P", "-", "melee", "END", "50c"],
        [10, "Yao Guai Gauntlet", "2x6 P", "-", "melee", "END", "70c"],
        [12, "Power Fist", "2x7 P", "-", "melee", "END", "90c"],
        [14, "Deathclaw Gauntlet", "2x8 P", "-", "melee", "END", "110c"],
        [99, "Godhand", "2x9 P", "-", "melee", "END", "130c"]],
        O5: [[6, "Shock Baton", "2x4 E", "-", "melee", "STR", "50c"],
        [8, "Welding Torch", "2x5 X", "-", "melee", "STR", "70c"],
        [10, "Tesla Coil", "2x6 E", "-", "melee", "STR", "90c"],
        [12, "Thermic Lance", "2x7 X", "-", "melee", "STR", "110c"],
        [14, "Shishkebab", "2x8 E", "-", "melee", "STR", "130c"],
        [99, "Thunderfury", "2x9 X", "-", "melee", "STR", "150c"]],
        O6: [[6, "Shock Glove", "6 E", "-", "melee", "END", "50c"],
        [8, "Whalloper", "7 X", "-", "melee", "END", "70c"],
        [10, "Plasma Glove", "8 E", "-", "melee", "END", "90c"],
        [12, "Kinetic Fist", "9 X", "-", "melee", "END", "110c"],
        [14, "Saturnite Fist", "10 E", "-", "melee", "END", "130c"],
        [99, "Infinity Gauntlet", "11 X", "-", "melee", "END", "150c"]]
    };

export const complications = [
    ["+1/2 Thirst", "END", "Sweating from hot area"],
    ["+1/2 Hunger", "CHA", "Puking from terrible smell"],
    ["+1/2 Thirst", "INT", "Diarrhea from unidentified environmental toxins"],
    ["+1/2 Hunger", "STR", "Burning calories from prolongued heavy lifting"],
    ["+1/2 Thirst", "AGI", "Stuck in an overly dehumidified area"],
    ["+1/2 Hunger", "END", "Burning calories for prolongued cardio"],
    ["Lose 5/10 HP", "CHA", "Witnesses a gruesomely disturbing scene"],
    ["Lose 5/10 HP", "INT", "Chemicals cause hallucination"],
    ["Lose 5/10 HP", "CHA", "An explosion rattles the player"],
    ["Lose 5/10 HP", "AGI", "Fired on by automated defenses"],
    ["Lose 5/10 HP", "INT", "Get lost in a confined space"],
    ["Lose 5/10 HP", "CHA", "Hears sounds of nearby deadly animals"],
    ["+1/2 Fatigue", "STR", "Overexertion from lift/sprint/jump"],
    ["+1/2 Fatigue", "AGI", "Running from defenses"],
    ["+1/2 Fatigue", "INT", "Getting lost in confusing area"],
    ["+1/2 Fatigue", "END", "Exposure to extreme cold"],
    ["+1/2 Fatigue", "END", "Low oxygen area"],
    ["+1/2 Fatigue", "STR", "Exhaustion from clearing obstacles"],
    ["+1/2 Rads", "STR", "Scavenge through heavy toxic waste barrel dump"],
    ["+1/2 Rads", "END", "Treks through irradiated water"],
    ["+1/2 Rads", "AGI", "Long winding paths full of radiation"],
    ["+1/2 Rads", "CHA", "Irradiated shelters full of dead families"],
    ["+1/2 Rads", "END", "Broken technology leaking radiation"],
    ["+1/2 Rads", "INT", "Disable safety system for radioactive source"],
    ["+1/2 Injury", "INT", "Able to hack and disable a security turret"],
    ["+1/2 Injury", "AGI", "Ignites an explosive causing explosion"],
    ["+1/2 Injury", "STR", "Heavy objects fall on you"],
    ["+1/2 Injury", "STR", "A muscle is strained moving something heavy"],
    ["+1/2 Injury", "CHA", "Attacked by roaming security robots"],
    ["+1/2 Injury", "AGI", "Avoid gunfire from defenses"]
];

export const rationTypes = ["Armor/Clean", "Gun/Dirty", "Tech/Irradiated"];

export const medTable = [
    { name: "Bandage", effect: "-1 Injury, +10% HP" },
    { name: "Rad-X", effect: "-1 Rads, +10% HP" },
    { name: "Adrenaline", effect: "-1 Fatigue, +10% HP" },
    { name: "Stimpak", effect: "-2 Injury, +20% HP (Addictive)" },
    { name: "Rad-Away", effect: "-2 Rads, +20% HP (Addictive)" },
    { name: "Addictol", effect: "Removes addictions, +10% HP" }
];

export const chemTable = [
    { name: "Jet", effect: "Next turn take 2 turns with +1 speed & all rolls (Addictive)" },
    { name: "Psycho", effect: "+1 damage for 1 day (Addictive)" },
    { name: "Rocket", effect: "+1 movement distance for 1 day (Addictive)" },
    { name: "Mentats", effect: "+1 INT, +1 AGI for 1 day (Addictive)" },
    { name: "Buffout", effect: "+1 STR, +1 END for 1 day (Addictive)" },
    { name: "Beer", effect: "+1 CHA for 1 day, -1 thirst (Addictive)" }
];

export const ammoTable = [
    { type: "Small rounds", roll: "1d6+4", cost: 5 },
    { type: "E-cell", roll: "1d6+3", cost: 10 },
    { type: "Grenades", roll: "1d6", cost: 0 },
    { type: "Fuel", roll: "1d6", cost: 20 },
    { type: "Large rounds", roll: "1d6+2", cost: 10 },
    { type: "MF-cell", roll: "1d6+1", cost: 15 }
];
export const grenadeTable = [
    { max: 6, name: "Scrap Grenade", dmg: "11 X splash", cost: "15c" },
    { max: 8, name: "Bottlecap Grenade", dmg: "12 X splash", cost: "20c" },
    { max: 10, name: "Frag Grenade", dmg: "13 X splash", cost: "25c" },
    { max: 12, name: "Plasma Grenade", dmg: "14 X splash", cost: "30c" },
    { max: 14, name: "Nuka Grenade", dmg: "15 X splash", cost: "35c" },
    { max: Infinity, name: "Mini Nuke", dmg: "16 X splash", cost: "40c" }
];

export const techTable = [
    { name: "Generator", effect: "Provides temporary power for electronics" },
    { name: "Autojacker", effect: "Portable jack to move heavy objects or jammed doors" },
    { name: "Hammerator", effect: "Hand jackhammer used to expand openings or clear rubble" },
    { name: "Breatherator", effect: "Allows exploration of low oxygen or underwater areas" },
    { name: "Flashlight", effect: "Allows exploration of dark or foggy areas" },
    { name: "Hackerator", effect: "Opens electronic locks and hacks computers" }
];

// Shop types and their corresponding generator functions
export const shopTypes = [
    { name: "Weapons" },
    { name: "Armor" },
    { name: "Meds" },
    { name: "Chems" },
    { name: "Tech" },
    { name: "Food & Water" }
];

// ===== TOWN DESCRIPTORS =====
export const townDescriptors = [
    { roll: 11, name: "Old Fort", desc: "A pre-war military fort repurposed by settlers for defense and shelter, complete with makeshift barracks and watchtowers." },
    { roll: 12, name: "Western Town", desc: "An abandoned western town brought back to life by settlers who have repaired and occupied its buildings." },
    { roll: 13, name: "Mining Camp", desc: "A community built around an old mine, extracting valuable minerals and using them to trade for other necessities." },
    { roll: 14, name: "Train Station", desc: "An old train station turned into a central hub for a small settlement, with train cars repurposed as homes." },
    { roll: 15, name: "Wind Farm", desc: "Settlers have established a community around an old wind farm, using the remaining turbines to generate power." },
    { roll: 16, name: "Abandoned Airport", desc: "The terminal and hangars have been turned into living spaces and workshops by a group of settlers." },

    { roll: 21, name: "Deserted Factory Town", desc: "An old factory complex repurposed into a settlement, with the factory buildings serving as homes and workshops." },
    { roll: 22, name: "Ruined Hotel", desc: "A large, partially collapsed hotel now houses a community, with rooms turned into living quarters." },
    { roll: 23, name: "Fishing Village", desc: "Located near a dried-up lakebed, settlers rely on small-scale farming and trade for survival." },
    { roll: 24, name: "Cliffside Dwellings", desc: "Homes built into the sides of cliffs, offering natural defense and a unique living environment." },
    { roll: 25, name: "Desert Outpost", desc: "A small, fortified settlement built around a well or water source, serving as a rest stop for travelers." },
    { roll: 26, name: "Abandoned Theme Park", desc: "The remains of an old amusement park now house a quirky community that has repurposed the attractions." },

    { roll: 31, name: "Scrap Yard", desc: "A large junkyard turned settlement, with homes and workshops built from scavenged materials." },
    { roll: 32, name: "Power Plant Village", desc: "A small community has formed around the ruins of a power plant, using its resources for energy and shelter." },
    { roll: 33, name: "Desert Monastery", desc: "An old religious site now inhabited by settlers who maintain the buildings and gardens." },
    { roll: 34, name: "Deserted Prison", desc: "The cells and facilities of an old prison now house a community, providing a secure and fortified location." },
    { roll: 35, name: "Abandoned Mall", desc: "The remains of a shopping mall now serve as a large, communal living space for settlers." },
    { roll: 36, name: "Water Tower Town", desc: "A settlement has formed around a large water tower, with homes and farms benefiting from the stored water." },

    { roll: 41, name: "Canyon Settlement", desc: "A community built within a canyon, using the natural formations for defense and shelter." },
    { roll: 42, name: "Deserted School Campus", desc: "An old school repurposed into a settlement, with classrooms and gyms turned into living spaces." },
    { roll: 43, name: "Oil Rig Community", desc: "An old, once ocean-based oil rig now houses a small, industrious settlement." },
    { roll: 44, name: "Ruined Cathedral", desc: "The remains of a large church now serve as a communal living space and meeting hall for settlers." },
    { roll: 45, name: "Old Gas Station", desc: "A small settlement has formed around an old gas station, using its infrastructure for trade and repair." },
    { roll: 46, name: "Desert Market Town", desc: "A town built around a central market square, where traders and settlers gather to exchange goods." },

    { roll: 51, name: "Fallen Bridge Camp", desc: "A settlement has formed beneath the remains of a large collapsed bridge, using the structure for shelter." },
    { roll: 52, name: "Drive-In Theater", desc: "The old projection booth and concession stands have been repurposed into homes and shops for a small community." },
    { roll: 53, name: "Airplane Graveyard", desc: "Settlers have turned old, grounded planes into homes and workshops in a sprawling community." },
    { roll: 54, name: "Shipping Container Village", desc: "A settlement made from repurposed shipping containers, providing sturdy and modular living spaces." },
    { roll: 55, name: "Ruined Observatory", desc: "An old observatory turned into a fortified settlement, using the high ground for defense." },
    { roll: 56, name: "Desert Commune", desc: "A community with an unexploded nuclear bomb in the center." },

    { roll: 61, name: "Small Farmstead", desc: "A group of settlers is attempting to grow crops and raise livestock, using irrigation systems and old farming techniques." },
    { roll: 62, name: "Shanty Town", desc: "A collection of makeshift homes built from scrap metal and other scavenged materials, housing a small community." },
    { roll: 63, name: "Trading Post", desc: "A bustling hub where traders from various parts of the wasteland come to barter goods and services." },
    { roll: 64, name: "Ranch", desc: "A larger-scale farm with fields and animal pens, providing food and supplies for a small settlement." },
    { roll: 65, name: "Ruined Suburb", desc: "An old suburban neighborhood being repurposed by settlers, with houses turned into communal living spaces." },
    { roll: 66, name: "Vault", desc: "A vault that allows visitors and trades with outsiders." }
];
// ===== MAIN QUEST TABLE =====
export const townQuests = [
    { roll: 11, text: `"Rot from Within" – A trusted town member of X faction is secretly poisoning food supplies to ‘thin the weak.’ Expose them, join them, or take their place.` },
    { roll: 12, text: `"Election Day" – An election is being held to decide if they want to continue on their current faction or convert to another after being visited by an envoy.` },
    { roll: 13, text: `Retrieve the Stolen Goods – Thieves from X faction have stolen valuable supplies from the town, and the player must recover them.` },
    { roll: 14, text: `Investigate the Sabotage – Someone from X faction is sabotaging the town's equipment; find and stop them.` },
    { roll: 15, text: `Secure the Power Source – The town's power source is failing; find a new one or repair the existing one involving X faction.` },
    { roll: 16, text: `"The Price of Safety" – A settlement wants a massive wall built, but the only materials are sacred to a nearby X faction settlement.` },

    { roll: 21, text: `Help the Farmers – Crops are failing; determine the cause and fix it.` },
    { roll: 22, text: `Recruit New Settlers – The town needs more people; recruit settlers from other areas.` },
    { roll: 23, text: `Resolve a Dispute – Two important town members are in conflict; mediate a resolution.` },
    { roll: 24, text: `Feed the Hunger – The town hides a secret: they are reluctant cannibals suffering withdrawal.` },
    { roll: 25, text: `"The Hardest Goodbye" – A survivor asks you to put down their feral ghoul spouse… unless they can be saved.` },
    { roll: 26, text: `Escort the Diplomat – Safely escort a diplomat to a neighboring settlement.` },

    { roll: 31, text: `Uprising – A slaver town faces a slave rebellion. Choose a side.` },
    { roll: 32, text: `Establish Trade Routes – Make contact with nearby settlements to open trade.` },
    { roll: 33, text: `Recover Lost Technology – Rumors say a nearby X faction settlement has valuable pre-war tech they arent using. help retrieve it or activate it for the others.` },
    { roll: 34, text: `Stolen GECK" – Raiders from X faction stole a GECK needed to terraform barren fields. Infiltrate and recover, or help them create a new life` },
    { roll: 35, text: `Investigate the Crime – A crime has occurred; find the culprit.` },
    { roll: 36, text: `"The Ghoulfather" – A ghoul crime lord wants one last score against X faction.` },

    { roll: 41, text: `Convince the Skeptics – Some townsfolk doubt an important discovery; win them over.` },
    { roll: 42, text: `Reclaim the Outpost – A nearby outpost has been taken by X enemy; reclaim it.` },
    { roll: 43, text: `"The Guilty Innocent" – A beloved hero is secretly guilty; expose or protect them.` },
    { roll: 44, text: `"Psycho Circus" – A chem dealer’s new formula turns people feral.` },
    { roll: 45, text: `"The Arena" – A raider warband has built a combat arena in town.` },
    { roll: 46, text: `Flesh for Flesh – Nearby X faction needs to trade citizens for genetic diversity, but something isnt quite right.` },

    { roll: 51, text: `"The Price of Freedom" – A nearby town will release captives… for a price.` },
    { roll: 52, text: `Investigate the Ruins – Strange activity reported in nearby ruins, it is currently being looted by X faction who do not want to share.` },
    { roll: 53, text: `"AI Overlord" – An AI controls a town and won’t let workers take breaks or leave. Find a way to stop the AI from ruining the town.` },
    { roll: 54, text: `Quell the Rebellion – A group of townsfolk plan a rebellion; some want to stay with the current leaders and some want to splinter to X faction. Choose a side.` },
    { roll: 55, text: `The Disappearing – Many townsfolk exploring near X faction settlement nearby never come back. find out why. ` },
    { roll: 56, text: `Heal the Injured – Several citizens need medical supplies urgently. There is a nearby settlement of X faction that may be able to help` },

    { roll: 61, text: `Protect the Scavengers – Escort a scavenger party to a nearby ruins inhabited by a difficult enemy.` },
    { roll: 62, text: `"New Gods of the Old World" – The town worships a nuclear bomb that sits unexploded and unstable in the middle of town. It may not be completely dormant...` },
    { roll: 63, text: `Rescue the Captives – X faction kidnapped townsfolk; infiltrate and rescue them.` },
    { roll: 64, text: `Hostile Neighbors – A nearby X faction settlement terrorizes the town; eliminate or negotiate.` },
    { roll: 65, text: `Refugee Crisis - Several refugees have come to the town but are not being accepted in due to lack of resources. resolve the conflict. ` },
    { roll: 66, text: `Find the Missing Civilian – A key figure has gone missing in a maze-like network of sewer tunnels under the town. Find them without getting lost or learn the truth.` }
];
// ===== PROFESSION QUESTS =====
export const professionQuests = {
    Technician: [
        "Dead Signal – Restore a dead radio relay using a salvaged comm tower part.",
        "Gun Show – Upgrade a scavenger’s sentimental weapon.",
        "Cold Steel – Repair one of each: weapon, armor, and tech."
    ],
    Mechanic: [
        "Steel & Silence – Upgrade a stealth merc’s armor.",
        "Harden the Hide – Restore riot gear using ceramic plates.",
        "Overhaul – Reinforce a caravan’s busted armor."
    ],
    Farmer: [
        "Tainted Crop – Cure a fungal infection in irradiated melons.",
        "Dig Deep – Convert an old garden into a viable plot.",
        "The Root Problem – Track mutated vines destroying a well."
    ],
    Chef: [
        "Thirsty Business – Convert meat into fuel for town tech.",
        "Kitchen Sink Science – Recreate a legendary morale‑boosting stew.",
        "Grill Master – Produce exotic‑meat fuel for a merchant."
    ],
    Exterminator: [
        "Rats in the Walls – Clear a mole‑rat infestation.",
        "Big Game Hunt – Kill a mutant alpha predator.",
        "Pest Control – Clear bloatflies from a junkyard."
    ],
    Police: [
        "Gun Balance – Convert small ammo to large for guards.",
        "Hold the Line – Arm and organize a civilian watch.",
        "Order in the Wastes – Retrieve stolen ammo crates."
    ],
    Plumber: [
        "Pipe Dream – Repair a vault’s sludge‑clogged plumbing.",
        "Backflow – Fix upstream contamination of clean water.",
        "Thirst Trap – Purify a dirty desert pool."
    ],
    Doctor: [
        "Wounded Pride – Convert wrong meds into life‑saving ones.",
        "First Do Harm – Replace swapped placebos before riots start.",
        "Curative Measures – Synthesize medicine for a rare plague."
    ],
    Scientist: [
        "Happy Accidents – Combine random chems safely.",
        "Stimulant Shortage – Reclaim hoarded chems from raiders.",
        "Bad Batch – Stabilize an unstable chem supply."
    ],
    Engineer: [
        "Arc Spark – Repair a malfunctioning tech turret.",
        "Linebreaker – Rebuild a settlement’s power fence.",
        "Mind the Gap – Restore a failing bridge lift system."
    ],
    Tailor: [
        "Patch It Up – Craft protective clothing for wasteland kids.",
        "Fashion Statement – Create an outfit to impress a faction.",
        "The Disguise – Make a fake uniform for a spy."
    ],
    Electrician: [
        "Overload – Convert a broken fusion cell into usable energy.",
        "Power Play – Restore power to a Nuka‑Cola billboard.",
        "Mission Impossible – Disable an unstable bomb guarded by threats."
    ]
};

// ===== FACTIONS =====
export const factions = [
    {
        name: "Metallion",
        tag: "Armor",
        desc: "Hoard tech and hate the weak and tickers (mutants), meritocracy, hateful"
    },
    {
        name: "The Institute",
        tag: "Meds",
        desc: "Trying to rebuild society with science, democracy, weary"
    },
    {
        name: "Children of Atom",
        tag: "Water",
        desc: "Simple-life Amish, theocracy, friendly"
    },
    {
        name: "New Country Republic",
        tag: "Weapons",
        desc: "Bureaucratic progressive society, republic, weary"
    },
    {
        name: "The Legion Solis Empire",
        tag: "Chems",
        desc: "Communist monarchy, slavers, hateful"
    },
    {
        name: "Commonwealth",
        tag: "Technology",
        desc: "Small town commune, anarchy, friendly"
    }
];

// ===== NPC TABLE =====
export const npcTable = [
  { roll: 11, name: "Bitter War Veteran", desc: "Gruff, one-eyed, tells long stories of battles no one remembers. Distrusts outsiders." },
  { roll: 12, name: "Cheerful Merchant", desc: "Overly optimistic, insists every item is 'a steal,' even junk." },
  { roll: 13, name: "Paranoid Scavenger", desc: "Constantly scanning the horizon, mutters about being followed." },
  { roll: 14, name: "Wandering Bard", desc: "Plays a battered guitar, trades songs for food. Knows odd rumors." },
  { roll: 15, name: "Cynical Medic", desc: "Skilled healer but mocks patients for getting hurt in the first place." },
  { roll: 16, name: "Soft-Spoken Farmer", desc: "Avoids conflict, loves talking about soil and crops." },

  { roll: 21, name: "Scrap Artist", desc: "Creates sculptures from junk, values beauty over practicality." },
  { roll: 22, name: "Cold Bounty Hunter", desc: "Says little, eyes everyone as a potential target." },
  { roll: 23, name: "Story-Hoarding Elder", desc: "Collects tales like treasure, trades them for supplies." },
  { roll: 24, name: "Outcast Mutant", desc: "Mistrustful but surprisingly gentle; hides disfigurements." },
  { roll: 25, name: "Disgraced Officer", desc: "Still wears a faded uniform, insists on strict protocol." },
  { roll: 26, name: "Gambling Addict", desc: "Always shuffling a deck, willing to bet on anything." },

  { roll: 31, name: "Feral Child", desc: "Skittish and dirty, communicates with whistles and hand signals." },
  { roll: 32, name: "Smooth-Talking Swindler", desc: "Can make junk sound valuable and lies sound sweet." },
  { roll: 33, name: "Inventive Tinkerer", desc: "Constantly fiddling with devices, absent-minded in conversation." },
  { roll: 34, name: "Runaway Cultist", desc: "Avoids eye contact, refuses to talk about their past faith." },
  { roll: 35, name: "Grumpy Fisherman", desc: "Complains about everything except fishing." },
  { roll: 36, name: "Nomadic Trader", desc: "Has goods from distant places, shares strange slang." },

  { roll: 41, name: "Desert Hermit", desc: "Lives alone by choice, mutters about 'the old ways.'" },
  { roll: 42, name: "Overzealous Guard", desc: "Takes rules way too seriously, even in casual conversation." },
  { roll: 43, name: "Scarred Pit Fighter", desc: "Proud of every scar, constantly seeks challenges." },
  { roll: 44, name: "Lovesick Drunk", desc: "Always talking about a lost lover, drinks to remember." },
  { roll: 45, name: "Animal Whisperer", desc: "Talks to animals as if they respond, claims they do." },
  { roll: 46, name: "Irradiated Prophet", desc: "Speaks in riddles, claims visions come from 'the Glow.'" },

  { roll: 51, name: "Hoarder", desc: "Collects anything shiny or unusual, highly territorial." },
  { roll: 52, name: "Traveling Preacher", desc: "Preaches hope in the wasteland but hides deep doubt." },
  { roll: 53, name: "Retired Raider", desc: "Calm now, but still has a dangerous glint in their eye." },
  { roll: 54, name: "Wanderlust Explorer", desc: "Maps everything, constantly seeks 'what’s over that hill.'" },
  { roll: 55, name: "Charismatic Drifter", desc: "Always has a story, usually half true." },
  { roll: 56, name: "Grinning Bodyguard", desc: "Enjoys their work a little too much." },

  { roll: 61, name: "Silent Gunslinger", desc: "Answers with nods, lets their weapon do the talking." },
  { roll: 62, name: "Bitter Widow/Widower", desc: "Blames the wasteland for everything lost." },
  { roll: 63, name: "Scavenger Kid", desc: "Tiny, bold, and far too street-smart for their age." },
  { roll: 64, name: "Flamboyant Trader", desc: "Dresses extravagantly, announces every sale dramatically." },
  { roll: 65, name: "Fortune Teller", desc: "Uses cards, bones, or bottle caps to 'see' the future." },
  { roll: 66, name: "Sleepless Night Watchman", desc: "Stares into the dark like they’re waiting for something awful." }
];

export const statNames = ["STR", "AGI", "END", "INT", "CHA"];

export const armorTypes = [
    ["Physical", "p"],
    ["Energy", "n"],
    ["Explosive", "x"],
    ["Radiation", "r"]
];

export const statAbbrev = {
    STRENGTH: "STR",
    AGILITY: "AGI",
    ENDURANCE: "END",
    INTELLIGENCE: "INT",
    CHARISMA: "CHA"
};

export const negNames = ["Hunger", "Thirst", "Fatigue", "Rads", "Injury"];

// ---------- PERK DATA ----------

export const perkData = {
    STRENGTH: [
        { name: "Big Back", desc: "Gain +1 heavy limit and your limbs cannot be crippled." },
        { name: "Wrecking Ball", desc: "Melee and thrown attacks do +1 damage after moving or sprinting." },
        { name: "Blacksmith", desc: "Repairing a broken item gives it +1 durability." },
        { name: "Conditioning", desc: "Remove 1 injury when you sleep in a settlement." },
        { name: "Karate Kid", desc: "Melee aimed shots can shove or grapple the target instead of crippling." },
        { name: "Carnivore", desc: "Consuming flesh gives an extra -1 hunger and heals 10% HP." },
        { name: "Big Justice", desc: "Splash damage aimed shots splash to short range." },
        { name: "Hidden Gem", desc: "When you scavenge you also find a heavy junk item worth 1d6x10 caps." },
        { name: "Chiropractor", desc: "When you cripple a limb, you can cripple another different limb." },
        { name: "Iron Man", desc: "You are immune to ailments and cannot be shoved or grappled." },
        { name: "Boomer", desc: "Explosive guns do +1 damage and your attacks always detonate explosive tiles." },
        { name: "Heavy Metal", desc: "Gain +1 energy armor for each heavy item slot you have." }
    ],

    AGILITY: [
        { name: "Commando", desc: "Rifles do +1 damage when fired from special terrain." },
        { name: "Gunslinger", desc: "Pistol attacks can spend your movement to do +1 damage." },
        { name: "Adrenaline Rush", desc: "When you use resist on a roll and take a result below a 4, regain resist. " },
        { name: "Gotta Go Fast", desc: "Sprint moves +1 distance and you can also move or sprint when you defend or search." },
        { name: "Ninja", desc: "You can move while sneaking and sneak attack kills do not reveal you." },
        { name: "Guerrilla", desc: "All special terrain counts as cover and your attacks ignore obstructions." },
        { name: "Sniper", desc: "Your attacks ignore cover and long range weapons gain +1 range." },
        { name: "Perfectionist", desc: "Crits restore luck, heal 10% HP, and deal +1 damage if attacking." },
        { name: "Jack of All Trades", desc: "Gain another skill that uses stats different from your skill." },
        { name: "Quantum Clip", desc: "Gain an infinite ammo box that changes ammo types each round." },
        { name: "Rivers of Blood", desc: "Physical damage aimed shots cause the target to bleed." },
        { name: "Gun Fu", desc: "Gain +1 physical armor for each enemy in melee range." }
    ],

    ENDURANCE: [
        { name: "Artisan", desc: "Consume one fewer scrap when you repair an item at 2 durability." },
        { name: "Fast Metabolism", desc: "Gain +10 max HP and addiction withdrawl only lasts 1 day." },
        { name: "Lead Belly", desc: "Treat irradiated food and drink as dirty instead." },
        { name: "Second Wind", desc: "Removing statuses is twice as effective when the status is above 5." },
        { name: "All-nighter", desc: "You can gain +1 fatigue to scavenge a settlement." },
        { name: "Quartermaster", desc: "Stackables can now stack up to 20 before becoming heavy." },
        { name: "Ghoulish", desc: "Heal 10% HP each time you gain one or more rads." },
        { name: "Perseverance", desc: "After rolling with a stat at 0 or 1, restore skill." },
        { name: "Rare Hunter", desc: "You can reroll scavenged crit loot 3 additional times." },
        { name: "Guardian", desc: "You can bring an ally with you when you move and can intercept non aimed shots against allies." },
        { name: "Shotgun Surgeon", desc: "Shotguns do +1 damage against enemies in melee range." },
        { name: "Exposure Therapy", desc: "Rad damage aimed shots poison the target." }
    ],

    INTELLIGENCE: [
        { name: "Scrounger", desc: "Looting killed humans always yields an extra 5 caps." },
        { name: "Substance Enthusiast", desc: "Chems last twice as long and all addictive items heal +10% HP on use." },
        { name: "Hoarder", desc: "You can use broken items but durability loss destroys them." },
        { name: "Discerning Eye", desc: "You can reroll the type of scavenging roll you get once." },
        { name: "Idiot Savant", desc: "You can treat two rolled 1s as a 6." },
        { name: "Green Thumb", desc: "Potted plants have +100% yield if held for the whole level." },
        { name: "Side Hustle", desc: "Gain an additional background." },
        { name: "Test Subject", desc: "Artifacts can convert durability to or from your HP at a 1:10 ratio." },
        { name: "Cold Fusion", desc: "Energy damage aimed shots apply freeze but remove burn." },
        { name: "Overclock", desc: "Energy damage aimed shots apply burn but remove freeze." },
        { name: "Chosen One", desc: "You always understand alien technology and can modify the input and output once each." },
        { name: "Magnetic Field", desc: "Gain +1 rad armor for each unique technology you are holding." }
    ],

    CHARISMA: [
        { name: "Terrifying Presence", desc: "Gain the ability to frighten and command hostile creatures." },
        { name: "Do Not Go Gently", desc: "Luck gives 2 dice to any player rolling with a stat at 0 or 1." },
        { name: "VIP Member", desc: "Sleeping in a settlement is free and twice as effective." },
        { name: "True Grit", desc: "Resist always rolls at least 2 dice and can be used on other players." },
        { name: "Good Karma", desc: "Tag an additional stat. Critical fails now count as regular fails." },
        { name: "Bloody Mess", desc: "Aimed shot kills cause the target to explode for half their max HP." },
        { name: "Vampire", desc: "You can drink the blood of recently deceased creatures." },
        { name: "I Know a Place", desc: "Chosen faction settlements provide free crit loot from their faction shop." },
        { name: "Cyberpunk", desc: "You can have +2 maximum implants and heal +10% HP when you use a technology." },
        { name: "Art of the Deal", desc: "Haggling is twice as effective." },
        { name: "Oh Baby a Triple", desc: "You can treat any rolled triples as a 6." },
        { name: "Cool Guys Don’t Look at Explosions", desc: "Gain +5 explosive armor." }
    ]
};

export const backgroundData = [
    { name: "Technician", desc: "Repairing guns does not require a roll." },
    { name: "Mechanic", desc: "Repairing armor and melee/fist weapons does not require a roll." },
    { name: "Farmer", desc: "You can purify rations 2:1 (irradiated → dirty → clean)." },
    { name: "Chef", desc: "You can convert any 2 flesh into 1 fuel." },
    { name: "Exterminator", desc: "You know when enemies have under 5 HP and can execute them on your turn." },
    { name: "Guard", desc: "You can convert 2 small rounds ↔ 1 large round." },
    { name: "Plumber", desc: "You can purify water 2:1 (irradiated → dirty → clean)." },
    { name: "Doctor", desc: "You can convert any 2 meds into another med." },
    { name: "Scientist", desc: "You can convert any 2 chems into another chem." },
    { name: "Engineer", desc: "Repairing technology does not require a roll." },
    { name: "Tailor", desc: "You can convert any 2 scrap into another scrap." },
    { name: "Electrician", desc: "You can convert 2 E-cells ↔ 1 MF-cell." }
];

export const tileTypes = [
    { name: "Explosive", symbol: "💣", color: "#e25822" },
    { name: "Cover", symbol: "🧱", color: "#888888" },
    { name: "Ruins", symbol: "🪨", color: "#6b4f3a" },
    { name: "Impassible", symbol: "❌", color: "#4a148c" },
    { name: "Special", symbol: "⭐", color: "#e6c200" },
    { name: "Blank", symbol: "", color: "#2b2b2b" }
];

export const rowLabels = ["A", "B", "C", "D", "E"];
export const colLabels = ["1", "2", "3", "4", "5"];
// Fixed equal weights (you can still tweak these numbers if desired)
export const fixedWeights = [1, 2, 2, 1, 3, 6]; // Explosive, Cover, Ruins, Impassible, Special, Blank

// === Zone Table (kept as-is) ===
export const zoneTable = {
    11: "Office: Contains 2 Vending machines with 1d6 Nuka Cola (-1 thirst, -1 fatigue, +10% HP) / Sunset Sarsaparilla (-1 thirst, -1 rads, +10% HP) for 10c each. Autojacker to open.",
    12: "Mall: Scavenging allows choosing one of 2 loot rolls, rerolls apply to both options. ",
    13: "Bunker: Scavenged items have +1 durability. Use Breatherator to add +2 to scavenge roll.",
    14: "Graveyard: Contains map to legendary loot 3 random hexes away. Use Hammerator to add +2 to scavenge roll.",
    15: "School: Contains 3 special rooms instead of 1, each requires a different technology.",
    16: "Factory: Contains a random tech, Use Flashlight to add +2 to scavenge roll.",
    21: "Museum: Contains 1 artifact. Use Hammerator for heavy relic worth 1d6x20c.",
    22: "Prison: +1 enemy. Contains a random military equipment item.",
    23: "Park: Contains a random potted plant. Plants planted here give +100% yield.",
    24: "Railyard: Contains 1d6 flares (20c). Flares reduce enemies by 1 in Ruins.",
    25: "Library: Order a random recipe that arrives on level up",
    26: "Warehouse: Ship yourselves or your items to any cleared hex; Use hackerator for +2 to scavenge roll",
    31: "Casino: Contains a slot machine. Spend 40c to roll 1d6×10c. can luck/resist. Crit = 120c jackpot, 1 = break.",
    32: "Laundromat: Spend 10c to reroll armor values. Use generator to also give it +1 durability",
    33: "Workshop: Has a workbench; repairing items costs 1 less scrap.",
    34: "Missile Silo: Spend 10 tech scrap to fire a nuclear missile at any hex (annihilates towns for -1 morale)",
    35: "Armory: Spend 5 gun scrap to upgrade any gun with +1 damage.",
    36: "Bank: Deposit caps, gain 20% on level up. Withdraw at any bank.",
    41: "Military Base: Scavenging items with durability here gives +1 to rolls with no multi-scavenge penalty.",
    42: "Farm: Contains a brahmin. CHA/AGI(fatigue) to scavenge 1d6 milk/flesh (-2 thirst/hunger, +10% HP, 30c). Crit: 3× yield.",
    43: "Quarry: Use grenades/explosive weapons to excavate heavy ore worth 1d6×20c.",
    44: "Crash Site: Contains a anything -> mutated weapon alien tech, powered by 1D artifact",
    45: "Campsite: Can scavenge for 1d6 flares. Crit: find 3×.",
    46: "Foundry: Spend 5 armor scrap to upgrade any melee/fist weapon with +1 damage",
    51: "Stadium: Generates any faction’s settlement 3 hexes away.",
    52: "Laboratory: Generates a Ruins from 5 choices 3 hexes away.",
    53: "Airport: Generates an adjacent Subway. Contains 1 flare for each Subway.",
    54: "Resort: Generates adjacent irradiated lake (+1 rads each way) with uninhabited island (+3 to scavenging).",
    55: "Subway: Generates another Subway 5 hexes away. You can fast travel between cleared Subways.",
    56: "Greenhouse: Can STR(injury) scavenge for a mutamelon that gives 5x -1 hunger+thirst, heavy.",
    61: "Hospital: When you heal or remove a status, heal +10% or remove 1 extra.",
    62: "Restaurant: Order food (1d6+10 clean rations) that arrives on level up.",
    63: "Hotel: Sleeping here grants 'Well Rested' and refreshes all skill/luck/resist.",
    64: "Construction Yard: Copies the effect of any ruins you have encountered.",
    65: "Supermarket: Scavenging stackables gives +1 to rolls with no multi-scavenge penalty.",
    66: "Church: No battle. Friendly merchant with 2 bodyguards sells 2 random special items."
};

// === Monster Data (unchanged) ===
export const monsterData = {
    E1: {
        label: "Raiders", notes: "special: hidden land mines. Loot: broken equipment, mines, human flesh (-1 hunger, unique addictive)", subs: [
            { name: "Scout", hp: 7, notes: "scaled weapons, 11x mines" }, // 1-6
            { name: "Tweaker", hp: 11, notes: "scaled weapons, 12x mines" }, // 7-8
            { name: "Scavenger", hp: 15, notes: "scaled weapons, 13x mines" }, // 9-10
            { name: "Juicer", hp: 19, notes: "scaled weapons, 14x mines" }, // 11-12
            { name: "Elite", hp: 23, notes: "scaled weapons, 15x mines" }, // 13-14
            { name: "Chemlord", hp: 27, notes: "scaled weapons, 16x mines" } // 15+
        ]
    },
    E2: {
        label: "Beasts", notes: "on death: allies can immediately attack. Loot: animal flesh (-1 hunger, dirty)", subs: [
            { name: "Bloatfly", hp: 6, notes: "6 R mid" },
            { name: "Wild Dog", hp: 10, notes: "7 P melee + poison, grapples on 6" },
            { name: "Radstag", hp: 14, notes: " 8 P melee, shove on 6, +1 spd, +2 dmg if moved 2 distance" },
            { name: "Yao Guai", hp: 18, notes: "2x9 P melee, grapple on 6" },
            { name: "Deathclaw", hp: 22, notes: "2x10 P melee + bleed, +1 spd" },
            { name: "Radragon", hp: 26, notes: "11 X+R splash + poison + burn, short, hovers, -1 mob" }
        ]
    },
    E3: {
        label: "Nesters", notes: "special: eggs, 50% to hatch into swarmers each round. Loot: animal flesh", subs: [
            { name: "Gecko", hp: 5, notes: "6 P + bleed, +1 speed, melee" },
            { name: "Mirelurk", hp: 9, notes: "7 P melee, 2x armor, aim head ignores armor" },
            { name: "Fire Gecko", hp: 13, notes: "8 X + burn, short" },
            { name: "Lakelurk", hp: 17, notes: "9 E + freeze, mid" },
            { name: "Cazadores", hp: 21, notes: "10 P melee + poison+2, hover, +1 spd" },
            { name: "Nightstalker", hp: 25, notes: "2x11 P melee + poison, grapples on 6" }
        ]
    },
    E4: {
        label: "Burrowers", notes: "special: burrow. Loot: animal flesh", subs: [
            { name: "Radroach", hp: 4, notes: "5 P+R melee" },
            { name: "Molerat", hp: 8, notes: "2x7 P melee, grapples on 6" },
            { name: "Radscorpion", hp: 12, notes: "8 P melee + poison" },
            { name: "Fire Ant", hp: 16, notes: "9 X splash + burn, short" },
            { name: "Gulper", hp: 20, notes: "2x10 P + freeze, grapples on 6, +1 spd" },
            { name: "Tunneler", hp: 24, notes: "3x11 P melee + poison" }
        ]
    },
    E5: {
        label: "Robots", notes: "2x HP, each cripple = 1/6 ignore armor., -1 mob. Loot: armor scraps", subs: [
            { name: "Protectron", hp: 8, notes: "9 E melee" },
            { name: "Cyberdog", hp: 12, notes: "10 P melee, +1 spd" },
            { name: "Robobrain", hp: 16, notes: "11 E + freeze, short" },
            { name: "Securitron", hp: 20, notes: "12 X long, 2x hp, " },
            { name: "Sentry Bot", hp: 24, notes: "2x10 P+E mid" },
            { name: "Assaultron", hp: 28, notes: "15 E+R melee, recharge 1, +1 spd" }
        ]
    },
    E6: {
        label: "Synths", notes: "terrain 4-5: hidden pulse mines. Loot: tech scrap", subs: [
            { name: "Sentry", hp: 7, notes: "scaled energy weapons + 11E mines" },
            { name: "Patroller", hp: 11, notes: "scaled energy weapons + 12E mines" },
            { name: "Trooper", hp: 15, notes: "scaled energy weapons + 13E mines" },
            { name: "Eradicator", hp: 19, notes: "scaled energy weapons +14E mines" },
            { name: "Assassin", hp: 23, notes: "scaled energy weapons +15E mines" },
            { name: "Courser", hp: 27, notes: "scaled energy weapons +16E mines" }
        ]
    },
    O1: {
        label: "Cultist", notes: "⅓ to use random artifact. uses mutated weapons (damage converted to radiation) Loot: broken weapons/artifacts, human flesh", subs: [
            { name: "Initiate", hp: 7, notes: "scaled mutated weapons" },
            { name: "Acolyte", hp: 11, notes: "scaled mutated weapons" },
            { name: "Disciple", hp: 15, notes: "scaled mutated weapons" },
            { name: "Priest", hp: 19, notes: "scaled mutated weapons" },
            { name: "Fanatic", hp: 23, notes: "scaled mutated weapons" },
            { name: "Leader", hp: 27, notes: "scaled mutated weapons" }
        ]
    },
    O2: {
        label: "Hoverbots", notes: "all hover; explode end of turn when killed 50% HP X splash, Loot: gun scraps", subs: [
            { name: "Eyebot", hp: 6, notes: "2x5 E, mid" },
            { name: "Mr. Handy", hp: 10, notes: "2x6 P, mid" },
            { name: "Battle Drone", hp: 14, notes: "3x7 X, short" },
            { name: "Mr. Gutsy", hp: 18, notes: "10 X splash, mid" },
            { name: "Think Tank", hp: 22, notes: "2x9 E + freeze, mid" },
            { name: "UFO", hp: 26, notes: "12 R splash+burn, long" }
        ]
    },
    O3: {
        label: "Feral Ghouls", notes: "Xrad (immune to radiation damage), special: hidden bear traps, +1 spd, ignore hazards, +1 mob Loot: mutant flesh (-1 hunger, -1 injury, +1 rads), junk item", subs: [
            { name: "Roamer", hp: 5, notes: "5 P+R melee, grapples on 6" },
            { name: "Stalker", hp: 9, notes: "6 P+R melee, grapples on 6" },
            { name: "Glowing One", hp: 13, notes: "9 R splash, melee" },
            { name: "Reaver", hp: 17, notes: "8 P+R melee, grapples on 6" },
            { name: "Molten One", hp: 21, notes: "11 X splash+burn, short" },
            { name: "Frozen One", hp: 25, notes: "12 E splash+freeze, short" }
        ]
    },
    O4: {
        label: "Aberrations", notes: "Xrad, special: rad pools. Loot: mutant flesh", subs: [
            { name: "Mutant Plant", hp: 5, notes: "7 P melee, immobile" },
            { name: "Centaur", hp: 10, notes: "8 R, short" },
            { name: "Floater", hp: 15, notes: "9 R, melee+freeze, hover, +1 spd" },
            { name: "Putrid Bloat", hp: 20, notes: "10 P melee, explodes 12R splash on death" },
            { name: "Wanamingo", hp: 25, notes: "9 P+R+psn melee, +1 spd" },
            { name: "Cybermutant", hp: 30, notes: "12 E + random ailment, very long, -1 mob" }
        ]
    },
    O5: {
        label: "Super Mutants", notes: "Xrad, special: rad pools, 1 suicider. Loot: broken weapons, mutant flesh", subs: [
            { name: "Skirmisher", hp: 9, notes: "scaled heavy guns, 15 X splash melee suicider" },
            { name: "Brute", hp: 13, notes: "scaled heavy guns, 16 X splash melee suicider" },
            { name: "Enforcer", hp: 17, notes: "scaled heavy guns, 17 X splash melee suicider" },
            { name: "Leader", hp: 21, notes: "scaled heavy guns, 18 X splash melee suicider" },
            { name: "Overlord", hp: 25, notes: "scaled heavy guns, 19 X splash melee suicider" },
            { name: "Mastermind", hp: 29, notes: "scaled heavy guns, 20 X splash melee suicider" }
        ]
    },
    O6: {
        label: "Nightkin", notes: "Xrad, special: hidden bear traps, ½ stealthed, Shove on 6, Loot: mutant flesh", subs: [
            { name: "Rogue", hp: 9, notes: "scaled heavy melee" },
            { name: "Scoundrel", hp: 13, notes: "scaled heavy melee" },
            { name: "Brigand", hp: 17, notes: "scaled heavy melee" },
            { name: "Saboteur", hp: 21, notes: "scaled heavy melee" },
            { name: "Ninja", hp: 25, notes: "scaled heavy melee" },
            { name: "Assassin", hp: 29, notes: "scaled heavy melee" }
        ]
    }
};

// === Bonus Room Data ===
export const bonusRoomData = [
    {
        req: "Use a generator or int save + 5 MF cells.", actions: [
            "Powering Up a Vault Door to enter room",
            "Activating Terminals to open door",
            "Recharging Robot to enter secure room",
            "Running a Water pump to unflood a facility",
            "Operating a Conveyor System to access items",
            "Powering an elevator"
        ]
    },
    {
        req: "Use autojacker or group STR check (mixed/fail=+1 injury)", actions: [
            "Lifting a Collapsed Beam",
            "Raising a Heavy Vehicle",
            "Removing large rocks",
            "Propping Up a Collapsing Structure",
            "Accessing a Supply Cache",
            "Opening a Sealed Crate"
        ]
    },
    {
        req: "Use hackerator or +3 status and INT save", actions: [
            "Bypassing Security Systems (fatigue)",
            "Unlocking door (fatigue)",
            "Dismantling generator (rads)",
            "Disabling defenses (injury)",
            "Reprogramming Robots (injury)",
            "Hacking an irradiated Control Panel (rads)"
        ]
    },
    {
        req: "Use hammerator or group END check (mixed/fail=+1 Fatigue)", actions: [
            "Breaking Through Concrete wall",
            "Excavating Buried Supplies",
            "Clearing a blocked stairwell/elevator",
            "Drilling a drainage hole",
            "Accessing a collapsed tunnel",
            "Clearing obstacles"
        ]
    },
    {
        req: "Use breatherator or +3 status and AGI save.", actions: [
            "Entering a radioactive Area (rads)",
            "Navigating a flooded area (rads)",
            "Exploring a no oxygen area (fatigue)",
            "Investigating an asbestos exposed area (injury)",
            "Investigating a toxic chemical exposed area (injury)",
            "Entering a smoky Area (fatigue)"
        ]
    },
    {
        req: "use flashlight or agi save + spend 5 fuel", actions: [
            "Area has radiation pools",
            "Hazardous area",
            "Finding Hidden Compartments",
            "Navigating a Collapsed Mine",
            "Reading Maps and instructions",
            "Activating generator"
        ]
    }
];

// === Loot Table ===
export const lootTable = [
    // 1-2: ALIEN TECH + ARTIFACT
    {
        type: "ALIEN TECH + ARTIFACT",
        desc: "Alien device that transforms items. Roll 2d6 for categories, INT save to know transformation outcome. Accepts up to 10 stackables of any item from category. Bulky <-> stackable converts at 3 / D. Converted items are based on original items, weapons become mutated. Powered by a random artifact that can be extracted instead of using tech.",
        categories: ["Weapon", "Armor", "Food", "Water", "Scrap", "Ammo"],
        artifact: true
    },
    // Duplicate for 2 (same weight)
    {
        type: "ALIEN TECH + ARTIFACT",
        desc: "Alien device that transforms items. Roll 2d6 for categories, INT save to know transformation outcome. Accepts up to 10 stackables of any item from category. Bulky <-> stackable converts at 3 / D. Converted items are based on original items, weapons become mutated. Powered by a random artifact that can be extracted instead of using tech.",
        categories: ["Weapon", "Armor", "Food", "Water", "Scrap", "Ammo"],
        artifact: true
    },
    // 3-4: PLANTS + RECIPE
    {
        type: "PLANTS + RECIPE",
        desc: "Generates a resource every time you level up, bulky, 100c",
        options: [
            "Potted Sludgeflower: Generates 2 fuel",
            "Potted Fleshroom: Generates 4 clean flesh (-1 hunger)",
            "Potted Mutfruit: Generates 4 water",
            "Potted Radovera: Generates 2 biogel (-2 injury, -2 rads, +40% HP)",
            "Potted Scraptus: Generates 4 omniscrap (counts as any scrap)",
            "Potted Tobacoca: Generates 2 cigar (turn any roll result into a 6)"
        ],
        artifact: false
    },
    // Duplicate for 4
    {
        type: "PLANTS + RECIPE",
        desc: "Generates a resource every time you level up, bulky, 100c",
        options: [
            "Potted Sludgeflower: Generates 2 fuel",
            "Potted Fleshroom: Generates 4 clean flesh (-1 hunger)",
            "Potted Mutfruit: Generates 4 clean water",
            "Potted Radovera: Generates 2 biogel (-2 injury, -2 rads, +40% HP)",
            "Potted Scraptus: Generates 4 omniscrap (counts as any scrap)",
            "Potted Tobacoca: Generates 2 cigar (turn any roll result into a 6)"
        ],
        artifact: false
    },
    // 5-6: EQUIPMENT + RECIPE
    {
        type: "EQUIPMENT + RECIPE",
        desc: "Each player can only benefit from one of each equipment, bulky, 100c",
        options: [
            "Backpack: Can store up to 5 bulky items in this slot",
            "Helmet: +10 max HP",
            "Binoculars: learn weapon+armor of 1 enemy before initiative",
            "Sleeping Bag: +10% HP when sleeping in ruins",
            "Boots: gain 1 shield when rolling initiative",
            "Gloves: Take an additional turn after your first action in initiative"
        ],
        artifact: false
    },
    {
        type: "EQUIPMENT + RECIPE",
        desc: "Each player can only benefit from one of each equipment, bulky, 100c",
        options: [
            "Backpack: Can store up to 5 bulky items in this slot",
            "Helmet: +10 max HP",
            "Binoculars: learn weapon+armor of 1 enemy before initiative",
            "Sleeping Bag: +10% HP when sleeping in ruins",
            "Boots: gain 1 shield when rolling initiative",
            "Gloves: Take an additional turn after your first action in initiative"
        ],
        artifact: false
    }
];

export const artifacts = [
    "Earth: cripple a limb, 3 HP, mid, 100c",
    "Water: clear a tile, 3 HP, mid, 100c",
    "Fire: generate rubble tile, 3 HP, mid, 100c",
    "Dark: generate cover tile, 3 HP, mid, 100c",
    "Wind: move creature 1 space, 3 HP, mid, 100c",
    "Light: give a player defend, 3 HP, mid, 100c"
];
