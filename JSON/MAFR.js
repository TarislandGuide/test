// Mage Frost
const talents = [{"id":"MAFRT01","name":"Water Bomb+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr1.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRT02","name":"Frost Expertise","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr2.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRT03","name":"Frost Mastery","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr3.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"MAFRT04","name":"Crystal","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr4.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"MAFRT05","name":"Frosty Chill","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr5.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"MAFRT06","name":"Snowstorm+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr6.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"MAFRT07","name":"Ice Knot","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr7.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"MAFRT08","name":"Arctic Icicle","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr8.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":1,"min":9,"preq":null,"lvl":null},
    {"id":"MAFRT09","name":"Element Cluster","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr9.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":9,"preq":null,"lvl":null},
    {"id":"MAFRT10","name":"Ice Storm","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr10.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":9,"preq":null,"lvl":null},
    {"id":"MAFRT11","name":"Cold Energy","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr11.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":12,"preq":8,"lvl":1},
    {"id":"MAFRT12","name":"Drowning","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr12.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":12,"preq":null,"lvl":null},
    {"id":"MAFRT13","name":"Ice Spikeweed+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr13.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":12,"preq":null,"lvl":null},
    {"id":"MAFRT14","name":"Burst Icicle","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr14.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":15,"preq":11,"lvl":3},
    {"id":"MAFRT15","name":"Frostbite","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr6.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":15,"preq":null,"lvl":null},
    {"id":"MAFRT16","name":"Icicle+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr15.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":18,"preq":14,"lvl":2},
    {"id":"MAFRT17","name":"Water Spirit+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr16.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":18,"preq":null,"lvl":null},
    {"id":"MAFRT18","name":"Icicle Storm+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr17.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":18,"preq":null,"lvl":null},
    {"id":"MAFRT19","name":"Ice Increase+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr18.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"MAFRT20","name":"Rapid Freeze","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr19.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":24,"preq":null,"lvl":null},
    {"id":"MAFRT21","name":"Ice Water Bomb","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr20.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":24,"preq":null,"lvl":null},
    {"id":"MAFRP01","name":"Combo Spec.","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr21.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRP02","name":"Water Force","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr22.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRP03","name":"Bitter Cold","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr23.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRP04","name":"Water Companion","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr24.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRP05","name":"Combo DMG Spec.","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr25.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU01","name":"Dimensional Move","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult1.jpg","cooldown":30,"range":10,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU02","name":"Ice Shield","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult2.jpg","cooldown":60,"range":2,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU03","name":"Ice Shock","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult3.jpg","cooldown":40,"range":2,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU04","name":"Gravity","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult4.jpg","cooldown":30,"range":16,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU05","name":"Break Free","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult5.jpg","cooldown":60,"range":2,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU06","name":"Spell Disruption","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult6.jpg","cooldown":24,"range":16,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU07","name":"Spell Restraint","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult7.jpg","cooldown":25,"range":24,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU08","name":"Magic Skin","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/ult8.jpg","cooldown":40,"range":2,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU09","name":"Slow Suppression","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Decelerated target are increased by 10% / 20% / 30%<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT1.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU10","name":"Deadly Strike","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Dazed target are increased by 10% / 20% / 30%<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PVP) gained from Military Rank +  2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT2.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU11","name":"Slow Shield","description":"Additional Effect<br>DMG taken is reduced by 10% / 20% / 30% when Decelerated<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PVP) gained from Military Rank +  2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT3.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU12","name":"Deady RES","description":"Additional Effect<br>DMG taken is reduced by 10% / 20% / 30% when Dazed<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PVP) gained from Military Rank +  2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT4.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU13","name":"Death Sustenance","description":"Additional Effect<br>Can negate lethal DMG once. HP is recovered by 10% / 15% / 20% of Max HP when triggered<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PVP) gained from Military Rank +  2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT5.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU14","name":"Time Control","description":"Additional Effect<br>Cooldown for all Ultimates - 10% / 15% / 20%<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PVP) gained from Military Rank +  2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT6.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU15","name":"Divine Radiance","description":"Additional Effect<br>Disperse a random debuff effect every 40s / 30s / 20s in battle<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PVP) gained from Military Rank +  2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT12.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRU16","name":"Rapid Pullback","description":"Additional Effect<br>After being hit, MoveSpd is increased by 10% / 15% / 20% for 3 sec. Can stack up to 3 times<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PVP) gained from Military Rank +  2% / 3% / 5%","variable":"","icon":"./Icons/Barbarian/Thunder/barbT8.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS01","name":"Water Bomb","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFrsk1.png","cooldown":0,"range":16,"speed":"Instant","cost":"Recover Water Energy 7","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS02","name":"Ice Spikeweed","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFrsk2.png","cooldown":0,"range":16,"speed":"Instant","cost":"Converts Water to Ice","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS03","name":"Icicle Storm","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFrsk3.png","cooldown":0,"range":16,"speed":"Instant","cost":"30 Ice Energy","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS04","name":"Arctic Icicle","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr8.jpg","cooldown":6,"range":16,"speed":"2 sec","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS05","name":"Water Spirit","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFrsk5.png","cooldown":35,"range":16,"speed":"Instant","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS06","name":"Snowstorm","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFr6.jpg","cooldown":0,"range":16,"speed":"Channel 3 sec","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS07","name":"Ice Increase","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFrsk8.png","cooldown":60,"range":2,"speed":"Instant","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRS08","name":"Inscribed Stone Skill","description":"Cast Water Bomb within 6 sec for a massive increase in Water Energy gain. Icicle skills deal additional DMG multiple times.","variable":"","icon":"./Icons/Stone/Skill7.png","cooldown":0,"range":2,"speed":"Instant","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRA01","name":"Icy Chill","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Frost/mageFrsk9.png","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFRC01","name":"Starting","description":"There is a 30% chance to inflict 1 stacks of Echo Recharge in battle. 15 stacks of Energy triggers Echo of Destiny, increasing your Combo by 525 for 6 sec.","variable":"","icon":"./Icons/Stone/start.png","cooldown":null,"range":null,"speed":"","cost":"","max":1,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRC02","name":"Core 1","description":"Echo of Destiny lasts 1 / 2 / 3 more sec.<br>Combo DMG is improved by 9%. / 13.5% / 18% additionally<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRC03","name":"Core 2","description":"Echo of Destiny increases your specialization attribute level by 131 / 196 / 262 additionally, increasing Speed Up and MoveSpd by 2.5% / 3.7% / 5% respectively.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRC04","name":"Core 3","description":"Each time you obtain Echo of Destiny, you have a 30% chance to gain 12.5% / 18.5% / 25% Inscribed Stone Energy and recover HP by 2% / 3% / 4% per sec for 5 sec.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI01","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI02","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI03","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI04","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI05","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI06","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI07","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI08","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI09","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI10","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI11","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI12","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI13","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI14","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI15","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI16","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI17","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI18","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI19","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI20","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI21","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI22","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI23","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI24","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI25","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI26","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI27","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI28","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI29","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI30","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI31","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI32","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI33","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI34","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI35","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI36","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI37","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI38","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI39","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI40","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI41","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI42","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI43","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI44","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI45","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI46","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI47","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI48","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI49","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI50","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI51","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI52","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI53","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI54","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI55","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI56","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI57","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFRI58","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null}]
    