const { SlashCommandBuilder, MessageFlagsBitField } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("terraria")
    .setDescription("Terraria weapon randomizer")
    .addStringOption(option =>
      option.setName("progression")
        .setDescription("Choose weapon progression stage")
        .setRequired(true)
        .addChoices(
          { name: "Pre-Boss", value: "pre_boss" },
          { name: "Post Eye of Cthulhu", value: "post_eoc" }, { name: "Post Eater of Worlds/Brain of Cthulhu", value: "post_eow_boc" }, { name: "Post Queen Bee", value: "post_qb" },
          { name: "Post Skeletron", value: "post_skel" },
          { name: "Post Deerclops", value: "post_deer" },
          { name: "Post Wall of Flesh", value: "post_wof" },
          { name: "Post Queen Slime", value: "post_qs" },
          { name: "Post The Twins", value: "post_twins" },
          { name: "Post The Destroyer", value: "post_destroyer" },
          { name: "Post Skeletron Prime", value: "post_sp" },
          { name: "Post All Mech Bosses", value: "post_mech" },
          { name: "Post Mechdusa", value: "post_mechdusa" },
          { name: "Post Plantera", value: "post_plantera" },
          { name: "Post Golem", value: "post_golem" },
          { name: "Post Duke Fishron", value: "post_duke" },
          { name: "Post Empress of Light", value: "post_eol" },
          { name: "Post Lunatic Cultist", value: "post_cult" },
          { name: "Post Moon Lord", value: "post_ml" }
        ))
    .setContexts(0,1,2)
    .setIntegrationTypes(0,1),
  
  async execute(interaction) {
    const pre_boss = {
      "Swords": ["Copper Shortsword", "Tin Shortsword", "Wooden Sword", "Boreal Wood Sword", "Copper Broadsword", "Iron Shortsword", "Palm Wood Sword", "Rich Mahogany Sword", "Cactus Sword", "Lead Shortsword", "Silver Shortsword", "Tin Broadsword", "Ebonwood Sword", "Iron Broadsword", "Shadewood Sword", "Tungsten Shortsword", "Gold Shortsword", "Lead Broadsword", "Silver Broadsword", "Bladed Glove", "Tungsten Broadsword", "Zombie Arm", "Ash Wood Sword", "Gold Broadsword", "Flymeal", "Platinum Shortsword", "Mandible Blade", "Stylish Scissors", "Ruler", "Platinum Broadsword", "Umbrella", "Breathing Reed", "Gladius", "Bone Sword", "Bat Bat", "Tentacle Spike", "Candy Cane Sword", "Katana", "Ice Blade", "Exotic Scimitar", "Starfury", "Enchanted Sword", "Purple Clubberfish", "Falcon Blade", "Blade of Grass", "Terragrim", "Lawnmower"],
      "Yoyos": ["Wooden Yoyo", "Rally", "Malaise", "Artery", "Amazon"],
      "Spears": ["Spear", "Trident", "Storm Spear", "The Rotted Fork", "Swordfish"],
      "Boomerangs": ["Wooden Boomerang", "Enchanted Boomerang", "Fruitcake Chakram", "Bloody Machete", "Shroomerang", "Ice Boomerang", "Thorn Chakram", "Trimarang"],
      "Flails": ["Mace", "Flaming Mace", "Ball O' Hurt", "The Meatball", "Chain Knife"],
      "Bows": ["Wooden Bow", "Boreal Wood Bow", "Copper Bow", "Palm Wood Bow", "Rich Mahogany Bow", "Tin Bow", "Ebonwood Bow", "Iron Bow", "Shadewood Bow", "Lead Bow", "Silver Bow", "Tungsten Bow", "Ash Wood Bow", "Gold Bow", "Platinum Bow", "Demon Bow", "Tendon Bow", "Blood Rain Bow"],
      "Guns": ["Red Ryder", "Flintlock Pistol", "Musket", "The Undertaker", "Revolver", "Minishark", "Boomstick", "Flare Gun"],
      "Throwables": ["Paper Airplane", "White Paper Airplane", "Shuriken", "Throwing Knife", "Poisoned Knife", "Snowball", "Spiky Ball", "Rotten Egg", "Star Anise", "Javelin", "Bone Javelin", "Bone Throwing Knife", "Grenade", "Sticky Grenade", "Bouncy Grenade"],
      "Ranged Other": ["Blowpipe", "Sandgun", "Snowball Cannon", "Paintball Gun", "Harpoon"],
      "Magic Weapons": ["Wand of Sparking", "Wand of Frosting", "Thunder Zapper", "Amethyst Staff", "Topaz Staff", "Sapphire Staff", "Emerald Staff", "Ruby Staff", "Diamond Staff", "Amber Staff", "Vilethorn", "Gray Zapinator", "Demon Scythe", "Crimson Rod"],
      "Minions": ["Finch Staff", "Slime Staff", "Flinx Staff", "Abigail's Flower", "Vampire Frog Staff"]
    };

    const post_eoc = {
      "Swords": ["Copper Shortsword", "Tin Shortsword", "Wooden Sword", "Boreal Wood Sword", "Copper Broadsword", "Iron Shortsword", "Palm Wood Sword", "Rich Mahogany Sword", "Cactus Sword", "Lead Shortsword", "Silver Shortsword", "Tin Broadsword", "Ebonwood Sword", "Iron Broadsword", "Shadewood Sword", "Tungsten Shortsword", "Gold Shortsword", "Lead Broadsword", "Silver Broadsword", "Bladed Glove", "Tungsten Broadsword", "Zombie Arm", "Ash Wood Sword", "Gold Broadsword", "Flymeal", "Platinum Shortsword", "Mandible Blade", "Stylish Scissors", "Ruler", "Platinum Broadsword", "Umbrella", "Breathing Reed", "Gladius", "Bone Sword", "Bat Bat", "Tentacle Spike", "Candy Cane Sword", "Katana", "Ice Blade", "Exotic Scimitar", "Starfury", "Enchanted Sword", "Purple Clubberfish", "Falcon Blade", "Blade of Grass", "Terragrim", "Lawnmower"],
      "Yoyos": ["Wooden Yoyo", "Rally", "Malaise", "Artery", "Amazon", "Code 1"],
      "Spears": ["Spear", "Trident", "Storm Spear", "The Rotted Fork", "Swordfish"],
      "Boomerangs": ["Wooden Boomerang", "Enchanted Boomerang", "Fruitcake Chakram", "Bloody Machete", "Shroomerang", "Ice Boomerang", "Thorn Chakram", "Trimarang"],
      "Flails": ["Mace", "Flaming Mace", "Ball O' Hurt", "The Meatball", "Chain Knife"],
      "Bows": ["Wooden Bow", "Boreal Wood Bow", "Copper Bow", "Palm Wood Bow", "Rich Mahogany Bow", "Tin Bow", "Ebonwood Bow", "Iron Bow", "Shadewood Bow", "Lead Bow", "Silver Bow", "Tungsten Bow", "Ash Wood Bow", "Gold Bow", "Platinum Bow", "Demon Bow", "Tendon Bow", "Blood Rain Bow"],
      "Guns": ["Red Ryder", "Flintlock Pistol", "Musket", "The Undertaker", "Revolver", "Minishark", "Boomstick", "Flare Gun"],
      "Throwables": ["Paper Airplane", "White Paper Airplane", "Shuriken", "Throwing Knife", "Poisoned Knife", "Snowball", "Spiky Ball", "Rotten Egg", "Star Anise", "Javelin", "Bone Javelin", "Bone Throwing Knife", "Grenade", "Sticky Grenade", "Bouncy Grenade", "Unholy Water", "Blood Water"],
      "Ranged Other": ["Blowpipe", "Sandgun", "Snowball Cannon", "Paintball Gun", "Harpoon"],
      "Magic Weapons": ["Wand of Sparking", "Wand of Frosting", "Thunder Zapper", "Amethyst Staff", "Topaz Staff", "Sapphire Staff", "Emerald Staff", "Ruby Staff", "Diamond Staff", "Amber Staff", "Vilethorn", "Gray Zapinator", "Demon Scythe", "Crimson Rod"],
      "Minions": ["Finch Staff", "Slime Staff", "Flinx Staff", "Abigail's Flower", "Vampire Frog Staff"]
    };

    const post_eow_boc = {
      "Swords": ["Copper Shortsword", "Tin Shortsword", "Wooden Sword", "Boreal Wood Sword", "Copper Broadsword", "Iron Shortsword", "Palm Wood Sword", "Rich Mahogany Sword", "Cactus Sword", "Lead Shortsword", "Silver Shortsword", "Tin Broadsword", "Ebonwood Sword", "Iron Broadsword", "Shadewood Sword", "Tungsten Shortsword", "Gold Shortsword", "Lead Broadsword", "Silver Broadsword", "Bladed Glove", "Tungsten Broadsword", "Zombie Arm", "Ash Wood Sword", "Gold Broadsword", "Flymeal", "Platinum Shortsword", "Mandible Blade", "Stylish Scissors", "Ruler", "Platinum Broadsword", "Umbrella", "Breathing Reed", "Gladius", "Bone Sword", "Bat Bat", "Tentacle Spike", "Candy Cane Sword", "Katana", "Ice Blade", "Exotic Scimitar", "Starfury", "Enchanted Sword", "Purple Clubberfish", "Falcon Blade", "Blade of Grass", "Terragrim", "Lawnmower", "Phaseblade", "Volcano"],
      "Yoyos": ["Wooden Yoyo", "Rally", "Malaise", "Artery", "Amazon", "Code 1"],
      "Spears": ["Spear", "Trident", "Storm Spear", "The Rotted Fork", "Swordfish"],
      "Boomerangs": ["Wooden Boomerang", "Enchanted Boomerang", "Fruitcake Chakram", "Bloody Machete", "Shroomerang", "Ice Boomerang", "Thorn Chakram", "Trimarang", "Flamarang"],
      "Flails": ["Mace", "Flaming Mace", "Ball O' Hurt", "The Meatball", "Chain Knife"],
      "Bows": ["Wooden Bow", "Boreal Wood Bow", "Copper Bow", "Palm Wood Bow", "Rich Mahogany Bow", "Tin Bow", "Ebonwood Bow", "Iron Bow", "Shadewood Bow", "Lead Bow", "Silver Bow", "Tungsten Bow", "Ash Wood Bow", "Gold Bow", "Platinum Bow", "Demon Bow", "Tendon Bow", "Blood Rain Bow", "Molten Fury"],
      "Guns": ["Red Ryder", "Flintlock Pistol", "Musket", "The Undertaker", "Revolver", "Minishark", "Boomstick", "Flare Gun"],
      "Throwables": ["Paper Airplane", "White Paper Airplane", "Shuriken", "Throwing Knife", "Poisoned Knife", "Snowball", "Spiky Ball", "Rotten Egg", "Star Anise", "Javelin", "Bone Javelin", "Bone Throwing Knife", "Grenade", "Sticky Grenade", "Bouncy Grenade", "Unholy Water", "Blood Water", "Molotov Cocktail"],
      "Ranged Other": ["Blowpipe", "Sandgun", "Snowball Cannon", "Paintball Gun", "Harpoon", "Ale Tosser", "Star Cannon"],
      "Magic Weapons": ["Wand of Sparking", "Wand of Frosting", "Thunder Zapper", "Amethyst Staff", "Topaz Staff", "Sapphire Staff", "Emerald Staff", "Ruby Staff", "Diamond Staff", "Amber Staff", "Vilethorn", "Gray Zapinator", "Demon Scythe", "Crimson Rod", "Space Gun"],
      "Minions": ["Finch Staff", "Slime Staff", "Flinx Staff", "Abigail's Flower", "Vampire Frog Staff", "Imp Staff"],
      "Sentries": ["Lightning Aura Rod", "Flameburst Rod", "Explosive Trap Rod", "Ballista Rod"]
    };

    const post_qb = {
      "Swords": ["Gold Broadsword", "Flymeal", "Mandible Blade", "Stylish Scissors", "Ruler", "Platinum Broadsword", "Gladius", "Bone Sword", "Bat Bat", "Tentacle Spike", "Katana", "Ice Blade", "Exotic Scimitar", "Starfury", "Enchanted Sword", "Purple Clubberfish", "Falcon Blade", "Blade of Grass", "Terragrim", "Phaseblade", "Volcano", "Beekeeper"],
      "Yoyos": ["Rally", "Malaise", "Artery", "Amazon", "Code 1", "Hive-Five"],
      "Spears": ["Trident", "Storm Spear", "The Rotted Fork", "Swordfish"],
      "Boomerangs": ["Enchanted Boomerang", "Shroomerang", "Ice Boomerang", "Thorn Chakram", "Trimarang", "Flamarang"],
      "Flails": ["Flaming Mace", "Ball O' Hurt", "The Meatball", "Chain Knife"],
      "Bows": ["Silver Bow", "Tungsten Bow", "Ash Wood Bow", "Gold Bow", "Platinum Bow", "Demon Bow", "Tendon Bow", "Blood Rain Bow", "Molten Fury", "The Bee's Knees"],
      "Guns": ["Musket", "The Undertaker", "Revolver", "Minishark", "Boomstick", "Flare Gun"],
      "Throwables": ["Shuriken", "Throwing Knife", "Poisoned Knife", "Spiky Ball", "Javelin", "Bone Javelin", "Bone Throwing Knife", "Grenade", "Sticky Grenade", "Bouncy Grenade", "Unholy Water", "Blood Water", "Molotov Cocktail", "Beenade"],
      "Ranged Other": ["Sandgun", "Snowball Cannon", "Paintball Gun", "Harpoon", "Ale Tosser", "Star Cannon", "Blowgun"],
      "Magic Weapons": ["Wand of Sparking", "Wand of Frosting", "Thunder Zapper", "Emerald Staff", "Ruby Staff", "Diamond Staff", "Amber Staff", "Vilethorn", "Gray Zapinator", "Demon Scythe", "Crimson Rod", "Space Gun", "Bee Gun"],
      "Minions": ["Finch Staff", "Slime Staff", "Flinx Staff", "Abigail's Flower", "Vampire Frog Staff", "Imp Staff", "Hornet Staff"],
      "Sentries": ["Lightning Aura Rod", "Flameburst Rod", "Explosive Trap Rod", "Ballista Rod"]
    };

    const post_skel = {
      "Swords": ["Gold Broadsword", "Flymeal", "Mandible Blade", "Stylish Scissors", "Ruler", "Platinum Broadsword", "Gladius", "Bone Sword", "Bat Bat", "Tentacle Spike", "Katana", "Ice Blade", "Exotic Scimitar", "Starfury", "Enchanted Sword", "Purple Clubberfish", "Falcon Blade", "Blade of Grass", "Terragrim", "Phaseblade", "Volcano", "Beekeeper", "Tragic Umbrella", "Muramasa", "Night's Edge"],
      "Yoyos": ["Malaise", "Artery", "Amazon", "Code 1", "Hive-Five", "Valor", "Cascade"],
      "Spears": ["Storm Spear", "The Rotted Fork", "Swordfish", "Dark Lance"],
      "Boomerangs": ["Thorn Chakram", "Trimarang", "Flamarang", "Combat Wrench"],
      "Flails": ["Ball O' Hurt", "The Meatball", "Chain Knife", "Blue Moon", "Sunfury"],
      "Bows": ["Gold Bow", "Platinum Bow", "Demon Bow", "Tendon Bow", "Blood Rain Bow", "Molten Fury", "The Bee's Knees", "Hellwing Bow"],
      "Guns": ["Revolver", "Minishark", "Boomstick", "Quad-Barrel Shotgun", "Handgun", "Pheonix Blaster"],
      "Throwables": ["Poisoned Knife", "Spiky Ball", "Javelin", "Bone Javelin", "Bone Throwing Knife", "Unholy Water", "Blood Water", "Molotov Cocktail", "Beenade", "Bone", "Happy Grenade"],
      "Ranged Other": ["Sandgun", "Snowball Cannon", "Paintball Gun", "Harpoon", "Ale Tosser", "Star Cannon", "Blowgun"],
      "Magic Weapons": ["Ruby Staff", "Diamond Staff", "Amber Staff", "Gray Zapinator", "Demon Scythe", "Space Gun", "Bee Gun", "Magic Missile", "Aqua Scepter", "Flower of Fire", "Flamelash", "Book of Skulls", "Waterbolt"],
      "Minions": ["Finch Staff", "Slime Staff", "Flinx Staff", "Abigail's Flower", "Vampire Frog Staff", "Imp Staff", "Hornet Staff"],
      "Sentries": ["Lightning Aura Rod", "Flameburst Rod", "Explosive Trap Rod", "Ballista Rod"]
    };

    const post_deer = {
      "Swords": ["Gladius", "Bone Sword", "Bat Bat", "Tentacle Spike", "Ice Blade", "Starfury", "Enchanted Sword", "Purple Clubberfish", "Falcon Blade", "Blade of Grass", "Terragrim", "Phaseblade", "Volcano", "Beekeeper", "Muramasa", "Night's Edge"],
      "Yoyos": ["Amazon", "Code 1", "Hive-Five", "Valor", "Cascade"],
      "Spears": ["Storm Spear", "The Rotted Fork", "Dark Lance"],
      "Boomerangs": ["Thorn Chakram", "Trimarang", "Flamarang", "Combat Wrench"],
      "Flails": ["Ball O' Hurt", "The Meatball", "Chain Knife", "Blue Moon", "Sunfury"],
      "Bows": ["Demon Bow", "Tendon Bow", "Blood Rain Bow", "Molten Fury", "The Bee's Knees", "Hellwing Bow"],
      "Guns": ["Minishark", "Quad-Barrel Shotgun", "Handgun", "Pheonix Blaster", "Pew-matic Horn"],
      "Throwables": ["Spiky Ball", "Bone Javelin", "Bone Throwing Knife", "Unholy Water", "Blood Water", "Molotov Cocktail", "Beenade", "Bone", "Happy Grenade"],
      "Ranged Other": ["Sandgun", "Harpoon", "Ale Tosser", "Star Cannon", "Blowgun"],
      "Magic Weapons": ["Diamond Staff", "Amber Staff", "Gray Zapinator", "Demon Scythe", "Space Gun", "Bee Gun", "Magic Missile", "Aqua Scepter", "Flower of Fire", "Flamelash", "Book of Skulls", "Waterbolt", "Weather Pain"],
      "Minions": ["Slime Staff", "Flinx Staff", "Abigail's Flower", "Vampire Frog Staff", "Imp Staff", "Hornet Staff"],
      "Sentries": ["Lightning Aura Rod", "Flameburst Rod", "Explosive Trap Rod", "Ballista Rod", "Houndius Shootius"]
    };

    const post_wof = {
      "Swords": ["Night's Edge", "Pearlwood Sword", "Classy Cane", "Slap Hand", "Cobalt Sword", "Palladium Sword", "Phasesaber", "Ice Sickle", "Mythril Sword", "Orichalcum Sword", "Breaker Blade", "Cutlass", "Frostbrand", "Adamantite Sword", "Beam Sword", "Titanium Sword", "Fetid Baghnakhs", "Bladetongue", "Ham Bat", "Jousting Lance"],
      "Yoyos": ["Hive-Five", "Cascade", "Format:C", "Gradient", "Chik", "Hel-Fire", "Amarok"],
      "Spears": ["Dark Lance", "Cobalt Naginata", "Palladium Pike", "Mythril Halberd", "Orichalcum Halberd", "Adamantite Glaive", "Titanium Trident", "Obsidian Swordfish"],
      "Boomerangs": ["Flamarang", "Flying Knife", "Sergeant United Shield", "Bananarang"],
      "Flails": ["Sunfury", "Drippler Crippler", "Dao of Pow", "Anchor", "Chain Guillotines", "KO Cannon"],
      "Bows": ["The Bee's Knees", "Hellwing Bow", "Pearlwood Bow", "Marrow", "Ice Bow", "Daedalus Stormbow", "Shadowflame Bow", "Cobalt Repeater", "Palladium Repeater", "Mythril Repeater", "Orichalcum Repeater", "Adamantite Repeater", "Titanium Repeater"],
      "Guns": ["Pheonix Blaster", "Clockwork Assault Rifle", "Gatligator", "Shotgun", "Onyx Blaster", "Uzi"],
      "Ranged Other": ["Star Cannon", "Toxikarp", "Dart Pistol", "Dart Rifle", "Coin Gun"],
      "Wands": ["Flower of Fire", "Flamelash", "Sky Fracture", "Crystal Serpent", "Flower of Frost", "Frost Staff", "Crystal Vile Shard", "Life Drain", "Meteor Staff", "Poison Staff"],
      "Magic Guns and Spell Tomes": ["Demon Scythe", "Laser Rifle", "Orange Zapinator", "Cursed Flames", "Golden Shower", "Crystal Storm"],
      "Magic Other": ["Ice Rod", "Clinger Staff", "Nimbus Rod", "Magic Dagger", "Medusa Head", "Spirit Flame", "Shadowflame Hex Doll", "Blood Thorn"],
      "Minions": ["Abigail's Flower", "Imp Staff", "Spider Staff", "Pirate Staff", "Sanguine Staff"],
      "Sentries": ["Houndius Shootius", "Queen Spider Staff"]
    };

    const post_qs = {
      "Swords": ["Night's Edge", "Cobalt Sword", "Palladium Sword", "Phasesaber", "Ice Sickle", "Mythril Sword", "Orichalcum Sword", "Breaker Blade", "Cutlass", "Frostbrand", "Adamantite Sword", "Beam Sword", "Titanium Sword", "Fetid Baghnakhs", "Bladetongue", "Ham Bat", "Jousting Lance"],
      "Yoyos": ["Hive-Five", "Cascade", "Format:C", "Gradient", "Chik", "Hel-Fire", "Amarok"],
      "Spears": ["Dark Lance", "Cobalt Naginata", "Palladium Pike", "Mythril Halberd", "Orichalcum Halberd", "Adamantite Glaive", "Titanium Trident", "Obsidian Swordfish"],
      "Boomerangs": ["Flying Knife", "Sergeant United Shield", "Bananarang"],
      "Flails": ["Sunfury", "Drippler Crippler", "Dao of Pow", "Anchor", "Chain Guillotines", "KO Cannon"],
      "Bows": ["Marrow", "Ice Bow", "Daedalus Stormbow", "Shadowflame Bow", "Cobalt Repeater", "Palladium Repeater", "Mythril Repeater", "Orichalcum Repeater", "Adamantite Repeater", "Titanium Repeater"],
      "Guns": ["Pheonix Blaster", "Clockwork Assault Rifle", "Gatligator", "Shotgun", "Onyx Blaster", "Uzi"],
      "Ranged Other": ["Star Cannon", "Toxikarp", "Dart Pistol", "Dart Rifle", "Coin Gun"],
      "Wands": ["Sky Fracture", "Crystal Serpent", "Flower of Frost", "Frost Staff", "Crystal Vile Shard", "Life Drain", "Meteor Staff", "Poison Staff"],
      "Magic Guns and Spell Tomes": ["Laser Rifle", "Orange Zapinator", "Cursed Flames", "Golden Shower", "Crystal Storm"],
      "Magic Other": ["Ice Rod", "Clinger Staff", "Nimbus Rod", "Magic Dagger", "Medusa Head", "Spirit Flame", "Shadowflame Hex Doll", "Blood Thorn"],
      "Minions": ["Abigail's Flower", "Spider Staff", "Pirate Staff", "Sanguine Staff", "Blade Staff"],
      "Sentries": ["Houndius Shootius", "Queen Spider Staff"]
    };

    const post_twins = {
      "Swords": ["Night's Edge", "Phasesaber", "Ice Sickle", "Breaker Blade", "Frostbrand", "Adamantite Sword", "Beam Sword", "Titanium Sword", "Fetid Baghnakhs", "Bladetongue", "Jousting Lance", "Brand of the Inferno", "Sleepy Octopod", "Excalibur", "Hallowed Jousting Lance", "Arkhalis"],
      "Yoyos": ["Format:C", "Gradient", "Chik", "Hel-Fire", "Amarok", "Code 2", "Yelets", "Red's Throw", "Valkyrie Yoyo"],
      "Spears": ["Mythril Halberd", "Orichalcum Halberd", "Adamantite Glaive", "Titanium Trident", "Obsidian Swordfish", "Gungnir", "Ghastly Glaive"],
      "Boomerangs": ["Flying Knife", "Sergeant United Shield", "Bananarang"],
      "Flails": ["Drippler Crippler", "Dao of Pow", "Anchor", "Chain Guillotines", "KO Cannon"],
      "Bows": ["Marrow", "Ice Bow", "Daedalus Stormbow", "Shadowflame Bow", "Mythril Repeater", "Orichalcum Repeater", "Adamantite Repeater", "Titanium Repeater", "Phantom Pheonix", "Hallowed Repeater"],
      "Guns": ["Clockwork Assault Rifle", "Gatligator", "Shotgun", "Onyx Blaster", "Uzi"],
      "Ranged Other": ["Star Cannon", "Toxikarp", "Dart Pistol", "Dart Rifle", "Coin Gun", "Super Star Shooter"],
      "Wands": ["Sky Fracture", "Crystal Serpent", "Flower of Frost", "Frost Staff", "Crystal Vile Shard", "Life Drain", "Meteor Staff", "Poison Staff", "Tome of Infinite Wisdom", "Rainbow Rod", "Unholy Trident"],
      "Magic Guns and Spell Tomes": ["Laser Rifle", "Orange Zapinator", "Cursed Flames", "Golden Shower", "Crystal Storm"],
      "Magic Other": ["Ice Rod", "Clinger Staff", "Nimbus Rod", "Magic Dagger", "Medusa Head", "Spirit Flame", "Shadowflame Hex Doll", "Blood Thorn", "Magical Harp"],
      "Minions": ["Spider Staff", "Pirate Staff", "Sanguine Staff", "Blade Staff", "Optic Staff"],
      "Sentries": ["Houndius Shootius", "Queen Spider Staff", "Lightning Aura Cane", "Flameburst Cane", "Explosive Trap Cane", "Ballista Cane"]
    };

    const post_destroyer = {
      "Swords": ["Night's Edge", "Phasesaber", "Ice Sickle", "Breaker Blade", "Frostbrand", "Adamantite Sword", "Beam Sword", "Titanium Sword", "Fetid Baghnakhs", "Bladetongue", "Jousting Lance", "Brand of the Inferno", "Sleepy Octopod", "Excalibur", "Hallowed Jousting Lance", "Arkhalis"],
      "Yoyos": ["Format:C", "Gradient", "Chik", "Hel-Fire", "Amarok", "Code 2", "Yelets", "Red's Throw", "Valkyrie Yoyo"],
      "Spears": ["Mythril Halberd", "Orichalcum Halberd", "Adamantite Glaive", "Titanium Trident", "Obsidian Swordfish", "Gungnir", "Ghastly Glaive"],
      "Boomerangs": ["Flying Knife", "Sergeant United Shield", "Bananarang", "Light Disc"],
      "Flails": ["Drippler Crippler", "Dao of Pow", "Anchor", "Chain Guillotines", "KO Cannon"],
      "Bows": ["Marrow", "Ice Bow", "Daedalus Stormbow", "Shadowflame Bow", "Mythril Repeater", "Orichalcum Repeater", "Adamantite Repeater", "Titanium Repeater", "Phantom Pheonix", "Hallowed Repeater"],
      "Guns": ["Clockwork Assault Rifle", "Gatligator", "Shotgun", "Onyx Blaster", "Uzi", "Megashark"],
      "Ranged Other": ["Star Cannon", "Toxikarp", "Dart Pistol", "Dart Rifle", "Coin Gun", "Super Star Shooter"],
      "Wands": ["Sky Fracture", "Crystal Serpent", "Flower of Frost", "Frost Staff", "Crystal Vile Shard", "Life Drain", "Meteor Staff", "Poison Staff", "Tome of Infinite Wisdom", "Rainbow Rod", "Unholy Trident"],
      "Magic Guns and Spell Tomes": ["Laser Rifle", "Orange Zapinator", "Cursed Flames", "Golden Shower", "Crystal Storm"],
      "Magic Other": ["Ice Rod", "Clinger Staff", "Nimbus Rod", "Magic Dagger", "Medusa Head", "Spirit Flame", "Shadowflame Hex Doll", "Blood Thorn", "Magical Harp"],
      "Minions": ["Spider Staff", "Pirate Staff", "Sanguine Staff", "Blade Staff", "Optic Staff"],
      "Sentries": ["Houndius Shootius", "Queen Spider Staff", "Lightning Aura Cane", "Flameburst Cane", "Explosive Trap Cane", "Ballista Cane"]
    };

    const post_sp = {
      "Swords": ["Night's Edge", "Phasesaber", "Ice Sickle", "Breaker Blade", "Frostbrand", "Adamantite Sword", "Beam Sword", "Titanium Sword", "Fetid Baghnakhs", "Bladetongue", "Jousting Lance", "Brand of the Inferno", "Sleepy Octopod", "Excalibur", "Hallowed Jousting Lance", "Arkhalis"],
      "Yoyos": ["Format:C", "Gradient", "Chik", "Hel-Fire", "Amarok", "Code 2", "Yelets", "Red's Throw", "Valkyrie Yoyo"],
      "Spears": ["Mythril Halberd", "Orichalcum Halberd", "Adamantite Glaive", "Titanium Trident", "Obsidian Swordfish", "Gungnir", "Ghastly Glaive"],
      "Boomerangs": ["Flying Knife", "Sergeant United Shield", "Bananarang", "Light Disc"],
      "Flails": ["Drippler Crippler", "Dao of Pow", "Anchor", "Chain Guillotines", "KO Cannon"],
      "Bows": ["Marrow", "Ice Bow", "Daedalus Stormbow", "Shadowflame Bow", "Mythril Repeater", "Orichalcum Repeater", "Adamantite Repeater", "Titanium Repeater", "Phantom Pheonix", "Hallowed Repeater"],
      "Guns": ["Clockwork Assault Rifle", "Gatligator", "Shotgun", "Onyx Blaster", "Uzi", "Megashark"],
      "Ranged Other": ["Star Cannon", "Toxikarp", "Dart Pistol", "Dart Rifle", "Coin Gun", "Super Star Shooter", "Flamethrower"],
      "Wands": ["Sky Fracture", "Crystal Serpent", "Flower of Frost", "Frost Staff", "Crystal Vile Shard", "Life Drain", "Meteor Staff", "Poison Staff", "Tome of Infinite Wisdom", "Rainbow Rod", "Unholy Trident"],
      "Magic Guns and Spell Tomes": ["Laser Rifle", "Orange Zapinator", "Cursed Flames", "Golden Shower", "Crystal Storm"],
      "Magic Other": ["Ice Rod", "Clinger Staff", "Nimbus Rod", "Magic Dagger", "Medusa Head", "Spirit Flame", "Shadowflame Hex Doll", "Blood Thorn", "Magical Harp"],
      "Minions": ["Spider Staff", "Pirate Staff", "Sanguine Staff", "Blade Staff", "Optic Staff"],
      "Sentries": ["Houndius Shootius", "Queen Spider Staff", "Lightning Aura Cane", "Flameburst Cane", "Explosive Trap Cane", "Ballista Cane"]
    };

    const post_mech = {
      "Swords": ["Frostbrand", "Beam Sword", "Fetid Baghnakhs", "Bladetongue", "Brand of the Inferno", "Sleepy Octopod", "Excalibur", "Hallowed Jousting Lance", "Arkhalis", "True Night's Edge", "True Excalibur", "Death Sickle", "Chlorophyte Claymore"],
      "Yoyos": ["Code 2", "Yelets", "Red's Throw", "Valkyrie Yoyo"],
      "Spears": ["Adamantite Glaive", "Titanium Trident", "Obsidian Swordfish", "Gungnir", "Ghastly Glaive", "Chlorophyte Partisan"],
      "Boomerangs": ["Sergeant United Shield", "Bananarang", "Light Disc"],
      "Flails": ["Drippler Crippler", "Dao of Pow", "Chain Guillotines"],
      "Bows": ["Daedalus Stormbow", "Shadowflame Bow", "Adamantite Repeater", "Titanium Repeater", "Phantom Pheonix", "Hallowed Repeater", "Pulse Bow", "Chlorophyte Shotbow"],
      "Guns": ["Onyx Blaster", "Uzi", "Megashark"],
      "Ranged Other": ["Dart Pistol", "Dart Rifle", "Coin Gun", "Super Star Shooter", "Flamethrower"],
      "Wands": ["Sky Fracture", "Crystal Serpent", "Flower of Frost", "Life Drain", "Meteor Staff", "Poison Staff", "Tome of Infinite Wisdom", "Rainbow Rod", "Unholy Trident", "Venom Staff"],
      "Magic Guns and Spell Tomes": ["Orange Zapinator", "Cursed Flames", "Golden Shower", "Crystal Storm"],
      "Magic Other": ["Magic Dagger", "Medusa Head", "Spirit Flame", "Shadowflame Hex Doll", "Blood Thorn", "Magical Harp"],
      "Minions": ["Sanguine Staff", "Blade Staff", "Optic Staff"],
      "Sentries": ["Queen Spider Staff", "Lightning Aura Cane", "Flameburst Cane", "Explosive Trap Cane", "Ballista Cane"],
    };

    const post_mechdusa = {
      "Swords": ["Frostbrand", "Beam Sword", "Fetid Baghnakhs", "Bladetongue", "Brand of the Inferno", "Sleepy Octopod", "Excalibur", "Hallowed Jousting Lance", "Arkhalis", "True Night's Edge", "True Excalibur", "Death Sickle", "Chlorophyte Claymore", "Waffle's Iron"],
      "Yoyos": ["Code 2", "Yelets", "Red's Throw", "Valkyrie Yoyo"],
      "Spears": ["Adamantite Glaive", "Titanium Trident", "Obsidian Swordfish", "Gungnir", "Ghastly Glaive", "Chlorophyte Partisan"],
      "Boomerangs": ["Sergeant United Shield", "Bananarang", "Light Disc"],
      "Flails": ["Drippler Crippler", "Dao of Pow", "Chain Guillotines"],
      "Bows": ["Daedalus Stormbow", "Shadowflame Bow", "Adamantite Repeater", "Titanium Repeater", "Phantom Pheonix", "Hallowed Repeater", "Pulse Bow", "Chlorophyte Shotbow"],
      "Guns": ["Onyx Blaster", "Uzi", "Megashark"],
      "Ranged Other": ["Dart Pistol", "Dart Rifle", "Coin Gun", "Super Star Shooter", "Flamethrower"],
      "Wands": ["Sky Fracture", "Crystal Serpent", "Flower of Frost", "Life Drain", "Meteor Staff", "Poison Staff", "Tome of Infinite Wisdom", "Rainbow Rod", "Unholy Trident", "Venom Staff"],
      "Magic Guns and Spell Tomes": ["Orange Zapinator", "Cursed Flames", "Golden Shower", "Crystal Storm"],
      "Magic Other": ["Magic Dagger", "Medusa Head", "Spirit Flame", "Shadowflame Hex Doll", "Blood Thorn", "Magical Harp"],
      "Minions": ["Sanguine Staff", "Blade Staff", "Optic Staff"],
      "Sentries": ["Queen Spider Staff", "Lightning Aura Cane", "Flameburst Cane", "Explosive Trap Cane", "Ballista Cane"]
    };

    const post_plantera = {
      "Swords": ["True Night's Edge", "True Excalibur", "Death Sickle", "Chlorophyte Claymore", "Seedler", "The Horseman's Blade", "Keybrand", "Psycho Knife", "Christmas Tree Sword", "Terra Blade", "Scourge of The Corruptor", "Vampire Knives", "Shadow Jousting Lance"],
      "Yoyos": ["Yelets", "Red's Throw", "Valkyrie Yoyo", "Kraken", "The Eye of Cthulhu"],
      "Spears": ["Gungnir", "Ghastly Glaive", "Chlorophyte Partisan", "Mushroom Spear", "North Pole"],
      "Boomerangs": ["Bananarang", "Light Disc", "Paladin's Hammer"],
      "Flails": ["Drippler Crippler", "Flower Pow"],
      "Bows": ["Phantom Pheonix", "Hallowed Repeater", "Pulse Bow", "Chlorophyte Shotbow", "Stake Launcher"],
      "Guns": ["Uzi", "Megashark", "Venus Magnum", "Tactical Shotgun", "Sniper Rifle", "Candy Corn Rifle", "Chain Gun"],
      "Launchers": ["Grenade Launcher", "Proximity Mine Launcher", "Rocket Launcher", "Nail Gun", "Jack 'O Lantern Launcher", "Snowman Cannon", "Celebration"],
      "Ranged Other": ["Coin Gun", "Super Star Shooter", "Flamethrower", "Elf Melter", "Piranha Gun"],
      "Wands": ["Rainbow Rod", "Unholy Trident", "Venom Staff", "Nettle Burst", "Bat Scepter", "Blizzard Staff", "Inferno Fork", "Shadowbeam Staff", "Spectre Staff", "Resonance Scepter", "Razorpine"],
      "Magic Guns and Spell Tomes": ["Orange Zapinator", "Golden Shower", "Wasp Gun", "Leaf Blower", "Rainbow Gun", "Magnet Sphere"],
      "Magic Other": ["Magical Harp", "Toxic Flask"],
      "Minions": ["Sanguine Staff", "Optic Staff", "Pygmy Staff", "Deadly Sphere Staff", "Raven Staff", "Desert Tiger Staff"],
      "Sentries": ["Lightning Aura Cane", "Flameburst Cane", "Explosive Trap Cane", "Ballista Cane", "Staff of The Frost Hydra"]
    };

    const post_golem = {
      "Swords": ["True Night's Edge", "True Excalibur", "Death Sickle", "Chlorophyte Claymore", "Seedler", "The Horseman's Blade", "Psycho Knife", "Christmas Tree Sword", "Terra Blade", "Scourge of The Corruptor", "Vampire Knives", "Shadow Jousting Lance", "Influx Waver", "Flying Dragon", "Sky Dragon's Fury"],
      "Yoyos": ["Kraken", "The Eye of Cthulhu"],
      "Spears": ["Chlorophyte Partisan", "Mushroom Spear", "North Pole"],
      "Boomerangs": ["Light Disc", "Paladin's Hammer", "Possessed Hatchet"],
      "Flails": ["Drippler Crippler", "Flower Pow", "Golem Fist"],
      "Bows": ["Hallowed Repeater", "Pulse Bow", "Chlorophyte Shotbow", "Stake Launcher", "Aerial Bane"],
      "Guns": ["Uzi", "Megashark", "Venus Magnum", "Tactical Shotgun", "Sniper Rifle", "Candy Corn Rifle", "Chain Gun", "Xenopopper"],
      "Launchers": ["Grenade Launcher", "Proximity Mine Launcher", "Rocket Launcher", "Nail Gun", "Jack 'O Lantern Launcher", "Snowman Cannon", "Celebration", "Electrosphere Launcher"],
      "Ranged Other": ["Coin Gun", "Super Star Shooter", "Flamethrower", "Elf Melter", "Piranha Gun"],
      "Wands": ["Rainbow Rod", "Unholy Trident", "Venom Staff", "Nettle Burst", "Bat Scepter", "Blizzard Staff", "Inferno Fork", "Shadowbeam Staff", "Spectre Staff", "Resonance Scepter", "Razorpine", "Staff of Earth", "Betsy's Wrath"],
      "Magic Guns and Spell Tomes": ["Orange Zapinator", "Golden Shower", "Wasp Gun", "Leaf Blower", "Rainbow Gun", "Magnet Sphere", "Heatray", "Laser Machinegun", "Charged Blaster Cannon"],
      "Magic Other": ["Magical Harp", "Toxic Flask"],
      "Minions": ["Pygmy Staff", "Deadly Sphere Staff", "Raven Staff", "Desert Tiger Staff", "Xeno Staff"],
      "Sentries": ["Staff of The Frost Hydra", "Lightning Aura Staff", "Flameburst Staff", "Explosive Trap Staff", "Ballista Staff"],
    };

    const post_duke = {
      "Swords": ["Death Sickle", "Seedler", "The Horseman's Blade", "Christmas Tree Sword", "Terra Blade", "Scourge of The Corruptor", "Vampire Knives", "Influx Waver", "Flying Dragon", "Sky Dragon's Fury"],
      "Yoyos": ["Kraken", "The Eye of Cthulhu"],
      "Spears": ["Chlorophyte Partisan", "North Pole"],
      "Boomerangs": ["Light Disc", "Paladin's Hammer", "Possessed Hatchet"],
      "Flails": ["Flower Pow", "Golem Fist", "Flairon"],
      "Bows": ["Pulse Bow", "Chlorophyte Shotbow", "Stake Launcher", "Aerial Bane", "Tsunami"],
      "Guns": ["Venus Magnum", "Tactical Shotgun", "Sniper Rifle", "Candy Corn Rifle", "Chain Gun", "Xenopopper"],
      "Launchers": ["Proximity Mine Launcher", "Rocket Launcher", "Nail Gun", "Jack 'O Lantern Launcher", "Snowman Cannon", "Celebration", "Electrosphere Launcher"],
      "Ranged Other": ["Coin Gun", "Elf Melter", "Piranha Gun"],
      "Wands": ["Venom Staff", "Nettle Burst", "Bat Scepter", "Blizzard Staff", "Inferno Fork", "Shadowbeam Staff", "Spectre Staff", "Resonance Scepter", "Razorpine", "Staff of Earth", "Betsy's Wrath"],
      "Magic Guns and Spell Tomes": ["Wasp Gun", "Leaf Blower", "Rainbow Gun", "Magnet Sphere", "Heatray", "Laser Machinegun", "Charged Blaster Cannon", "Bubble Gun", "Razorblade Typhoon"],
      "Magic Other": ["Magical Harp", "Toxic Flask"],
      "Minions": ["Deadly Sphere Staff", "Raven Staff", "Desert Tiger Staff", "Xeno Staff", "Tempest Staff"],
      "Sentries": ["Staff of The Frost Hydra", "Lightning Aura Staff", "Flameburst Staff", "Explosive Trap Staff", "Ballista Staff"]
    };
    
    const post_eol = {
      "Swords": ["Seedler", "The Horseman's Blade", "Christmas Tree Sword", "Terra Blade", "Scourge of The Corruptor", "Vampire Knives", "Influx Waver", "Flying Dragon", "Sky Dragon's Fury", "Starlight"],
      "Yoyos": ["Kraken", "The Eye of Cthulhu"],
      "Spears": ["Chlorophyte Partisan", "North Pole"],
      "Boomerangs": ["Light Disc", "Paladin's Hammer", "Possessed Hatchet"],
      "Flails": ["Flower Pow", "Golem Fist", "Flairon"],
      "Bows": ["Pulse Bow", "Chlorophyte Shotbow", "Stake Launcher", "Aerial Bane", "Tsunami", "Eventide"],
      "Guns": ["Venus Magnum", "Tactical Shotgun", "Sniper Rifle", "Candy Corn Rifle", "Chain Gun", "Xenopopper"],
      "Launchers": ["Proximity Mine Launcher", "Rocket Launcher", "Nail Gun", "Jack 'O Lantern Launcher", "Snowman Cannon", "Celebration", "Electrosphere Launcher"],
      "Ranged Other": ["Coin Gun", "Elf Melter", "Piranha Gun"],
      "Wands": ["Venom Staff", "Nettle Burst", "Bat Scepter", "Blizzard Staff", "Inferno Fork", "Shadowbeam Staff", "Spectre Staff", "Resonance Scepter", "Razorpine", "Staff of Earth", "Betsy's Wrath"],
      "Magic Guns and Spell Tomes": ["Wasp Gun", "Leaf Blower", "Rainbow Gun", "Magnet Sphere", "Heatray", "Laser Machinegun", "Charged Blaster Cannon", "Bubble Gun", "Razorblade Typhoon"],
      "Magic Other": ["Toxic Flask", "Nightglow", "Stellar Tune"],
      "Minions": ["Deadly Sphere Staff", "Raven Staff", "Desert Tiger Staff", "Xeno Staff", "Tempest Staff", "Terraprisma"],
      "Sentries": ["Staff of The Frost Hydra", "Lightning Aura Staff", "Flameburst Staff", "Explosive Trap Staff", "Ballista Staff"]
    };

    const post_cult = {
      "Swords": ["Seedler", "The Horseman's Blade", "Christmas Tree Sword", "Terra Blade", "Scourge of The Corruptor", "Vampire Knives", "Influx Waver", "Flying Dragon", "Sky Dragon's Fury", "Starlight"],
      "Yoyos": ["Kraken", "The Eye of Cthulhu"],
      "Spears": ["Chlorophyte Partisan", "North Pole", "Daybreak"],
      "Boomerangs": ["Light Disc", "Paladin's Hammer", "Possessed Hatchet"],
      "Flails": ["Golem Fist", "Flairon", "Solar Eruption"],
      "Bows": ["Chlorophyte Shotbow", "Stake Launcher", "Aerial Bane", "Tsunami", "Eventide", "Phantasm"],
      "Guns": ["Venus Magnum", "Tactical Shotgun", "Sniper Rifle", "Candy Corn Rifle", "Chain Gun", "Xenopopper", "Vortex Beater"],
      "Launchers": ["Proximity Mine Launcher", "Rocket Launcher", "Nail Gun", "Jack 'O Lantern Launcher", "Snowman Cannon", "Celebration", "Electrosphere Launcher"],
      "Ranged Other": ["Coin Gun", "Elf Melter", "Piranha Gun"],
      "Wands": ["Venom Staff", "Nettle Burst", "Bat Scepter", "Blizzard Staff", "Inferno Fork", "Shadowbeam Staff", "Spectre Staff", "Resonance Scepter", "Razorpine", "Staff of Earth", "Betsy's Wrath"],
      "Magic Guns and Spell Tomes": ["Wasp Gun", "Leaf Blower", "Rainbow Gun", "Magnet Sphere", "Heatray", "Laser Machinegun", "Charged Blaster Cannon", "Bubble Gun", "Razorblade Typhoon"],
      "Magic Other": ["Toxic Flask", "Nightglow", "Stellar Tune", "Nebula Arcanum", "Nebula Blaze"],
      "Minions": ["Deadly Sphere Staff", "Raven Staff", "Desert Tiger Staff", "Xeno Staff", "Tempest Staff", "Terraprisma", "Stardust Cell Staff", "Stardust Dragon Staff"],
      "Sentries": ["Staff of The Frost Hydra", "Lightning Aura Staff", "Flameburst Staff", "Explosive Trap Staff", "Ballista Staff"]
    };

    const post_ml = {
      "Congratulations": ["You win!"]
    }
    
    const pre_boss_whips = ["Leather Whip", "Snapthorn"];
    const post_skel_whips = ["Leather Whip", "Snapthorn", "Spinal Tap"]
    const post_wof_whips = ["Spinal Tap", "Firecracker", "Cool Whip"]
    const post_mech_whips = ["Firecracker", "Cool Whip", "Durendal"]
    const post_plantera_whips = ["Firecracker", "Cool Whip", "Durendal", "Morning Star", "Dark Harvest"]
    const post_eol_whips = [ "Durendal", "Morning Star", "Dark Harvest", "Kaleidoscope"]

    const weapon_stages = {
      "pre_boss": { weapons: pre_boss, whips: pre_boss_whips },
      "post_eoc": { weapons: post_eoc, whips: pre_boss_whips },
      "post_eow_boc": { weapons: post_eow_boc, whips: pre_boss_whips },
      "post_qb": { weapons: post_qb, whips: pre_boss_whips },
      "post_skel": { weapons: post_skel, whips: post_skel_whips },
      "post_deer": { weapons: post_deer, whips: post_skel_whips },
      "post_wof": { weapons: post_wof, whips: post_wof_whips },
      "post_qs": { weapons: post_qs, whips: post_wof_whips },
      "post_twins": { weapons: post_twins, whips: post_mech_whips },
      "post_destroyer": { weapons: post_destroyer, whips: post_mech_whips }, 
      "post_sp": { weapons: post_sp, whips: post_mech_whips },
      "post_mech": { weapons: post_mech, whips: post_mech_whips },
      "post_mechdusa": { weapons: post_mechdusa, whips: post_mech_whips },
      "post_plantera": { weapons: post_plantera, whips: post_plantera_whips },
      "post_golem": { weapons: post_golem, whips: post_plantera_whips },
      "post_duke": { weapons: post_duke, whips: post_plantera_whips },
      "post_eol": { weapons: post_eol, whips: post_eol_whips },
      "post_cult": { weapons: post_cult, whips: post_eol_whips },
      "post_ml": { weapons: post_ml, whips: post_eol_whips },
    };

    function randomize_weapons(weapon_data, whip_data) {
      const classes = Object.keys(weapon_data);
      const random_class = classes[Math.floor(Math.random() * classes.length)];
      const weapons = weapon_data[random_class];
      const random_weapon = weapons[Math.floor(Math.random() * weapons.length)];
      
      let content = `**Weapon:** ${random_weapon}`;
      
      if ((random_class === "Minions" || random_class === "Sentries") && whip_data?.length > 0) {
        const random_whip = whip_data[Math.floor(Math.random() * whip_data.length)];
        content += ` + ${random_whip}`;
      }
      
      return content;
    }

    const progression = interaction.options.getString("progression");
    const selected_stage = weapon_stages[progression];
    
    if (!selected_stage) {
      await interaction.reply({
        content: "Invalid progression stage selected!",
        flags: MessageFlagsBitField.Flags.Ephemeral
      });
      return;
    }

    const result = randomize_weapons(selected_stage.weapons, selected_stage.whips);
    const stage_name = 
      progression === "pre_boss" ? "Pre-Boss" : 
      progression === "post_eoc" ? "Post Eye of Cthulhu":
      progression === "post_eow_boc" ? "Post Eater of Worlds/Brain of Cthulhu":
      progression === "post_qb" ? "Post Queen Bee":
      progression === "post_skel" ? "Post Skeletron":
      progression === "post_deer" ? "Post Deerclops":
      progression === "post_wof" ? "Post Wall of Flesh":
      progression === "post_qs" ? "Post Queen Slime":
      progression === "post_twins" ? "Post The Twins":
      progression === "post_destroyer" ? "Post The Destroyer":
      progression === "post_sp" ? "Post Skeletron Prime":
      progression === "post_mech" ? "Post All Mech Bosses":
      progression === "post_mechdusa" ? "Post Mechdusa":
      progression === "post_plantera" ? "Post Plantera":
      progression === "post_golem" ? "Post Golem":
      progression === "post_duke" ? "Post Duke Fishron":
      progression === "post_eol" ? "Post Empress of Light":
      progression === "post_cult" ? "Post Lunatic Cultist":
      "Post Moon Lord";                
    
    await interaction.reply({
      content: `**${stage_name}**\n${result}`
    });
  }
};
