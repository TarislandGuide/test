// Barbarian Frozen
const talents = [{"id":"BBFZT01","name":"Combat System","description":"Max HP is increased by 5% / 10% / 15%, and the Glancing Effect is increased by 2% / 4% / 6%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF1.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZT02","name":"Storm Protect","description":"After Storm Flying Axe returns, increase the glancing chance by 3.5% / 7% / 10.5%, for 5 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF2.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZT03","name":"Frozen Mastery","description":"Your base Glancing Rate is increased by 1% / 2% / 3%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF3.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"BBFZT04","name":"Piercing Chill","description":"When cast Chill Strike, there is a 100% chance to reduce the remaining cooldown for Storm Flying Axe and Frost Cross by 0.5 / 1 / 1.5 sec, and increase the next respective HP recovery effect and Dmg Reduc effect by 10% / 20% / 30%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF4.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"BBFZT05","name":"Ice Thread Rune","description":"Frost Strike additionally grants 2 / 4 / 6 Frozen Runes, and grants 16.6% / 33.3% / 50% more shield at settlement.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF5.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"BBFZT06","name":"Axe Cyclone","description":"Axe Cyclone deals 5% / 10% / 15% more DMG.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF6.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"BBFZT07","name":"Pain RES","description":"When you are attacked, the Dmg Reduc effect of the next Frost Strike is increased by 3% / 6% / 9%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF7.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":4,"lvl":3},
    {"id":"BBFZT08","name":"Frost Cross","description":"Switch Storm Flying Axe to Frost Cross.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF8.jpg","cooldown":null,"range":null,"speed":"","max":1,"min":9,"preq":null,"lvl":null},
    {"id":"BBFZT09","name":"Rapid Freeze","description":"Frozen Runes obtained is increased by 2 / 4 when casting Chill Strike while Frost Strike is active.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF9.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":9,"preq":null,"lvl":null},
    {"id":"BBFZT10","name":"Quick Throw","description":"Every time [Storm Flying Axe] hits a target, its remaining cooldown is reduced by 1.5 / 3 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF9.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":9,"preq":null,"lvl":null},
    {"id":"BBFZT11","name":"Frost Reaction","description":"When [Frost Cross] is cast beyond the duration of [Frost Strike], the remaining Cooldown of [Frost Strike] is reduced by 1 / 2 / 3 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF10.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":8,"lvl":1},
    {"id":"BBFZT12","name":"Chill Strike+","description":"Chill Strike deals 5% / 10% / 15% more DMG and reduces the DMG of the target's next attack on you by 2% / 4% / 6%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF11.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":null,"lvl":null},
    {"id":"BBFZT13","name":"Frost Strike+","description":"Frost Strike deals 5% / 10% / 15% more DMG. Dmg Reduc is additionally increased by 2.5% / 5% / 7.5%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF12.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":null,"lvl":null},
    {"id":"BBFZT14","name":"Frostbind","description":"Additional DMG Reduc granted by Frost Cross is increased by 50% / 100%. Cooldown is decreased by 1 / 2 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF13.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":15,"preq":11,"lvl":3},
    {"id":"BBFZT15","name":"Storm Flying Axe+","description":"Storm Flying Axe deals 5% / 10% / 15% more DMG. The amount of HP recovered is increased by 60% / 120% / 180%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF14.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":15,"preq":null,"lvl":null},
    {"id":"BBFZT16","name":"Frost Cross+","description":"Frost Cross deals 5% / 10% / 15% more DMG and increases the Dmg Reduc of the next Frost Strike by 4% / 8% / 12% when cast.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF15.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":18,"preq":14,"lvl":2},
    {"id":"BBFZT17","name":"Death Fight+","description":"Death Fight grants 3% / 6% more DMG Immunity. Cooldown is decreased by 2 / 4 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF16.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":18,"preq":null,"lvl":null},
    {"id":"BBFZT18","name":"Frost Spread","description":"For every 9 / 6 / 3 sec in combat, grant 2 Frozen Rune(s) and recover 3% of Max HP.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF17.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":21,"preq":null,"lvl":null},
    {"id":"BBFZT19","name":"Frost Outbreak+","description":"Frost Outbreak grants 40% / 80% more Glancing, Glancing effect, and Physical DEF effect, and makes them last 2 / 4 sec longer.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF18.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"BBFZT20","name":"Instinct Dodge","description":"5% / 10% / 15% of Glancing Level converts into Dodge. Each Dodge will grant 12 / 24 / 32 Frozen Rune(s).","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF19.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":24,"preq":null,"lvl":null},
    {"id":"BBFZT21","name":"Permanent Freeze","description":"All Frozen Runes are obtained 70% / 140% faster during Frost Outbreak.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF20.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":24,"preq":null,"lvl":null},
    {"id":"BBFZP01","name":"Glancing Specialization","description":"Your Glancing Rate is increased by 5% additionally.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF21.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZP02","name":"Frost Guard","description":"Each Glancing during Frost Strike grants 3 additional Frozen Runes.<br><br>Enhanced with Glancing. The number of Frozen Runes returned after Frost Strike is settled increases with it.<br><br>Glancing 16% 5% Frozen Runes are returned.<br>Glancing 25%:10% Frozen Runes are returned.<br>Glancing 34%: 15% Frozen Runes are returned.<br>Glancing 42% 20% Frozen Runes are returned.<br>Glancing 50%: 25% Frozen Runes are returned.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF22.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZP03","name":"Frozen Skin","description":"The Physical DEF bonus granted by Chill Strike is increased by the Omni percentage.<br><br>Enhanced with Omni. The basic Damage Immunity effect granted by Death Fight is also improved.<br><br>Omni 6%: the basic Damage Immunity is increased by 3%.<br>Omni 11.4%: the basic Damage Immunity is increased by 7%.<br>Omni 15.6%: the basic Damage Immunity is increased by 12%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF23.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZP04","name":"Duel Master","description":"When Chill Strike hits a target, there is a chance equal to the Cooldown percentage to reduce the remaining cooldown for Death Fight by 3.5 sec.<br><br>Enhanced with Cooldown. Casting Death Fight reduces the remaining cooldown for Storm Flying Axe and Frost Cross.<br><br>Cooldown 10%: Cooldown is reduced by 1.5 sec.<br>Cooldown 19%: Cooldown is reduced by 3 sec.<br>Cooldown 26%: Cooldown is reduced by 5 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF24.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZP05","name":"Glancing Effect Specialization","description":"Your Glancing Effect is increased by 5% additionally.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF25.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU01","name":"Beast Sprint","description":"Stimulate your beast potential and boost your MoveSpd by ${u.g + info[0] + u.s} for ${u.g + info[1] + u.s} sec.<br><br>Additional PvP Effect<br>Can remove ${u.b + info[2] + u.s}, ${u.b + info[3] + u.s}, and ${u.b+ info[4] + u.s} and grant a ${u.g + info[5] + u.s} Damage Immunity effect for ${u.g + info[6] + u.s}s<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[7] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[8] + u.s}","variable":"70%, 8, Deceleration, Stun, Immobilize, 10%, 1 / 1.5 / 2, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult1.jpg","cooldown":30,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU02","name":"Leap","description":"Jump to the target or a specified location, causing enemies within ${u.g + info[0] + u.s} m of the landing point inflicted by a ${u.g + info[1] + u.s} ${u.b + info[2] + u.s} for ${u.g + info[3] + u.s} sec.<br><br>Additional PvP Effect<br>Inflicts ${u.b + info[4] + u.s} on the enemies in the landing area for ${u.g + info[5] + u.s}s.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[6] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[7] + u.s}","variable":"3, 50%, Deceleration, 5, Immobilize, 2 / 2.5 / 3, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult2.jpg","cooldown":35,"range":16,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU03","name":"Contempt","description":"${u.b + info[0] + u.s} your enemies within ${u.g + info[1] + u.s} m. The effect lasts for ${u.g + info[2] + u.s} sec.<br><br>Additional PvP Effect<br>Can remove all control effects (except ${u.b + info[3] + u.s}) and grant a ${u.g + info[4] + u.s} Damage Immunity for ${u.g + info[5] + u.s}s. The cooldown is reduced to ${u.g + info[6] + u.s}s.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[7] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[8] + u.s}","variable":"Taunt, 8, 6, Paralysis, 30%, 2 / 2.5 / 3, 40, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult3.jpg","cooldown":60,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU04","name":"Mockery","description":"${u.b + info[0] + u.s} targets enemy. The effect lasts for ${u.g + info[1] + u.s} sec.<br><br>Additional PvP Effect<br>Inflicts ${u.b + info[2] + u.s} for ${u.g + info[3] + u.s}s. Continuous control from effects of the same type will diminish.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[4] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[5] + u.s}","variable":"Taunt, 6, Silent, 2 / 2.5 / 3, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult4.jpg","cooldown":15,"range":16,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU05","name":"Break Free","description":"Instantly remove all ${u.b + info[0] + u.s} and ${u.b + info[1] + u.s} effects on you. Certain Boss Skill effects cannot be removed.<br><br>Additional PvP Effect<br>Immune to all controls within ${u.g + info[2] + u.s}s after using [${u.b + info[3] + u.s}]<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[4] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[5] + u.s}","variable":"Root, Control, 2 / 2.5 / 3,Break Free, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult5.jpg","cooldown":60,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU06","name":"Slam","description":"Slam the target to interrupt the skill casting.<br>Some Bosses' skills can't be interrupted.<br><br>Additional PvP Effect<br>Inflicts ${u.b + info[0] + u.s} for ${u.g + info[1] + u.s}s. Continuous control from effects of the same type will diminish.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[2] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[3] + u.s}","variable":"Paralysis, 3 / 4 / 5, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult6.jpg","cooldown":20,"range":4,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU07","name":"Wild Flying Axe","description":"Throws an axe at the target, causing an effect of ${u.g + info[0] + u.s} of ${u.b + info[1] + u.s} for ${u.g + info[2] + u.s} sec.<br><br>Additional PvP Effect<br> Inflicts ${u.b + info[3] + u.s} for ${u.g + info[4] + u.s}s. The effect is removed upon hit.<br>Continuous control from effects of the same type will diminish.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[5] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[6] + u.s}","variable":"70%, Deceleration, 8, Stun, 4 / 5 / 6, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult7.jpg","cooldown":30,"range":8,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU08","name":"Vulnerate","description":"Wound the target, inflicting ${u.g + info[0] + u.s} ${u.b + info[1] + u.s} and ${u.g + info[2] + u.s} ${u.b + info[3] + u.s} on it for ${u.g + info[4] + u.s} sec.<br><br>Additional PvP Effect<br>Inflicts ${u.b + info[5] + u.s} while [Vulnerate] is active, increasing the DMG the target takes from you by ${u.g + info[6] + u.s}<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[7] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[8] + u.s}","variable":"60%, Heal Reduc, 60%, Deceleration, 7, Weak, 10% / 20% / 30%, 2% / 3% / 5%, 5% / 8% / 12%","icon":"./Icons/Barbarian/Frozen/ult8.jpg","cooldown":20,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU09","name":"Slow Suppression","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Decelerated target are increased by ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[1] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT1.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU10","name":"Deadly Strike","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Dazed target are increased by ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT2.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU11","name":"Slow Shield","description":"Additional Effect<br>DMG taken is reduced by ${u.g + info[0 + u.s} when Decelerated<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT3.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU12","name":"Deady RES","description":"Additional Effect<br>DMG taken is reduced by ${u.g + info[0] + u.s} when Dazed<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT4.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU13","name":"Death Sustenance","description":"Additional Effect<br>Can negate lethal DMG once. HP is recovered by ${u.g + info[0] + u.s} of Max HP when triggered<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT5.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU14","name":"Time Control","description":"Additional Effect<br>Cooldown for all Ultimates - ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT6.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU15","name":"Divine Radiance","description":"Additional Effect<br>Disperse a random debuff effect every ${u.g + info[0] + u.s} in battle<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank +  ${u.g + info[1] + u.s}","variable":"40s / 30s / 20s, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT12.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZU16","name":"Rapid Pullback","description":"Additional Effect<br>After being hit, MoveSpd is increased by ${u.g + info[0] + u.s} for 3 sec. Can stack up to 3 times<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT8.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS01","name":"Frost Strike","description":"Obtain 15 Frozen Rune(s), dealing Physical DMG equal to 107% +203 DMG to the target, and granting 5% DMG Reduc to yourself. After 5 sec, an HP Shield equal to 13% of Max HP+ 2744 will be retumed for 10 sec according to the number of Frozen Runes.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk1.png","cooldown":8,"range":4,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS02","name":"Chill Strike","description":"Obtain 5 Frozen Rune(s), deal Physical DMG equal to 76% of your ATK + 140 to the target, and increase Physical DEF by 2.4% +70. Its effect is stackable and can be recharged twice.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk2.png","cooldown":3,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS03","name":"Frost Cross","description":"Condense Chill and obtain 10 Frozen Runes to launch a ranged [Cross Slash], dealing Physical DMG equal to 47% of your ATK + 119 to the target and reducing the DMG equal to the target's next attack against you by 5%. Can be recharged twice.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF8.jpg","cooldown":12,"range":4,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS04","name":"Axe Cylclone","description":"Surround yourself with flying axes, dealing Physical DMG equal to 48% of your ATK + 91 to nearby enemies twice every second,","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk4.png","cooldown":4,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS05","name":"Death Fight","description":"Increase Physical DEF by 203 and gain DMG Immunity effect for 8 sec. The lower the HP, the higher the DMG Immunity.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk5.png","cooldown":90,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS06","name":"Frost Outbreak","description":"Activate frost energy, improving Glancing Chance by 15%, increasing Glancing Effect by 10%, Physical DEF by 70, and Frozen Runes slowly for 8 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk6.png","cooldown":120,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS07","name":"Storm Flying Axe","description":"Obtain 10 Frozen Rune(s) and throw an axe toward the target, dealing Physical DMG equal to 105% of your ATK+ 196 to the enemies along the arc path. The axe will retum to you and recover HP by 3% of your Max HP+791.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk7.png","cooldown":9.9,"range":8,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZS08","name":"Inscribed Stone Skill","description":"Increase the efficiency of gaining Energy for [Chill Strike] for 6 sec, converting the DMG taken into healing.","variable":"","icon":"./Icons/Stone/Skill7.png","cooldown":0,"range":2,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZA01","name":"Frozen Rune","description":"Accumulate Frozen Runes. During the settlement of Frost Strike, all Frozen Runes will be consumed to grant a Shield based on the proportion of the consumed amount.<br><br>Spec Aura: Grant your group an attribute bonus aura of Firmness that increases Physical DEF by 2% during a\nraid.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF22.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBFZC01","name":"Starting","description":"There is a 30% chance to inflict 1 stacks of Echo Recharge in battle. 15 stacks of Energy triggers Echo of Destiny, increasing your Glancing by 525 for 6 sec.","variable":"","icon":"./Icons/Stone/start.png","cooldown":null,"range":null,"speed":"","max":1,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZC02","name":"Core 1","description":"Echo of Destiny lasts 1 / 2 / 3 more sec.<br>Glancing Effect is improved by 4.5%. / 6.8% / 9%<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZC03","name":"Core 2","description":"Echo of Destiny increases your specialization attribute level by 131 / 196 / 262 additionally, increasing Speed Up and MoveSpd by 2.5% / 3.7% / 5% respectively.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZC04","name":"Core 3","description":"Each time you obtain Echo of Destiny, you have a 30% chance to gain 12.5% / 18.5% / 25% Inscribed Stone Energy and recover HP by 2% / 3% / 4% per sec for 5 sec.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI01","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI02","name":"Glancing","description":"Glancing + 52 / 79 / 105<br><br>Increases chance to Glance attacks","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI03","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI04","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Convert Omni into Damage Immunity","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI05","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI06","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI07","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI08","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI09","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI10","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI11","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI12","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI13","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI14","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Convert Omni into Damage Immunity","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI15","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI16","name":"Glancing","description":"Glancing + 52 / 79 / 105<br><br>Increases chance to Glance attacks","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI17","name":"Glancing","description":"Glancing + 52 / 79 / 105<br><br>Increases chance to Glance attacks","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI18","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI19","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI20","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI21","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI22","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI23","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI24","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI25","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI26","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI27","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI28","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI29","name":"Specialization","description":"Glancing Effect + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Glancing Effect","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI30","name":"Glancing","description":"Glancing + 52 / 79 / 105<br><br>Increases chance to Glance attacks","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI31","name":"Specialization","description":"Glancing Effect + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Glancing Effect","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI32","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Convert Omni into Damage Immunity","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI33","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI34","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI35","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI36","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI37","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI38","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI39","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI40","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI41","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI42","name":"Specialization","description":"Glancing Effect + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Glancing Effect","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI43","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI44","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI45","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI46","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI47","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI48","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI49","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI50","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Convert Omni into Damage Immunity","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI51","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI52","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI53","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI54","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI55","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI56","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI57","name":"Specialization","description":"Glancing Effect + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Glancing Effect","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBFZI58","name":"Specialization","description":"Glancing Effect + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Glancing Effect","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null}]
    