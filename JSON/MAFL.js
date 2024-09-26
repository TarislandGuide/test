// Mage Flame
const talents = [{"id":"MAFLT01","name":"Searing Sting+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl1.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLT02","name":"Rapid Expansion","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl2.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLT03","name":"Flame Master","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl3.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"MAFLT04","name":"Charged Spur","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl4.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":3,"preq":1,"lvl":3},
    {"id":"MAFLT05","name":"Burn Out","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl5.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"MAFLT06","name":"Fire Tornado+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl6.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"MAFLT07","name":"Blazing Orb+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl7.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"MAFLT08","name":"Skyfire","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl8.jpg","cooldown":null,"range":null,"speed":"","max":1,"min":9,"preq":null,"lvl":null},
    {"id":"MAFLT09","name":"Afterheat","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl9.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":9,"preq":null,"lvl":null},
    {"id":"MAFLT10","name":"Charged Fireball","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl10.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":9,"preq":null,"lvl":null},
    {"id":"MAFLT11","name":"Heat Catalysis","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl11.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":8,"lvl":1},
    {"id":"MAFLT12","name":"Immovable Flame","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl12.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":12,"preq":null,"lvl":null},
    {"id":"MAFLT13","name":"Heat Bomb+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl13.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":null,"lvl":null},
    {"id":"MAFLT14","name":"Solar Flare","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl14.png","cooldown":null,"range":null,"speed":"","max":2,"min":15,"preq":11,"lvl":3},
    {"id":"MAFLT15","name":"Fireball+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl15.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":15,"preq":null,"lvl":null},
    {"id":"MAFLT16","name":"Skyfire+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl16.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":18,"preq":14,"lvl":2},
    {"id":"MAFLT17","name":"Recharge Jewel","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl17.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":18,"preq":null,"lvl":null},
    {"id":"MAFLT18","name":"Precise Blast","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl18.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":21,"preq":null,"lvl":null},
    {"id":"MAFLT19","name":"Flame Rush","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl19.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"MAFLT20","name":"Unstable Explosive","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl20.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":24,"preq":null,"lvl":null},
    {"id":"MAFLT21","name":"Flame Boost+","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl21.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":24,"preq":19,"lvl":2},
    {"id":"MAFLP01","name":"Crit. Specialization","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl22.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLP02","name":"Bicolor Fuse","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl23.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLP03","name":"Blazing Thrust","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl24.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLP04","name":"Fuse","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl25.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLP05","name":"Crit. DMG Specialization","description":"skill information coming soon","variable":"","icon":"./Icons/Mage/Flame/mageFl26.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU01","name":"Dimensional Move","description":"Flash to the designated direction for ${u.g + info[0] + u.s}m.<br><br>Additional PvP Effect<br>Can remove the ${u.b + info[1] + u.s} and ${u.b + info[2] + u.s} effects and grant a ${u.g + info[3] + u.s} Damage Immunity effect for ${u.g + info[4] + u.s}s<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[5] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[5] + u.s}","variable":"10, Stun, Immobilize, 10%, 1 / 1.5 / 2, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult1.jpg","cooldown":30,"range":10,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU02","name":"Pyro Shield","description":"Get a flame shield that negates DMG of ${u.g + info[0] + u.s} of your max HP, and lasts for ${u.g + info[1] + u.s} sec.<br><br>Additional PvP Effect<br>If attacked within ${u.g + info[2] + u.s}s of casting a skill, reflect ${u.g + info[3] + u.s} of the DMG. The cooldown is reduced to ${u.g + info[4] + u.s}s<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[5] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[5] + u.s}","variable":"30%, 30, 4, 20% / 25% / 30%, 40, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult2.jpg","cooldown":60,"range":2,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU03","name":"Flame Shock","description":"Launch a flame wave to ${u.b + info[0] + u.s} enemies within ${u.g + info[1] + u.s}m, distance: ${u.g + info[2] + u.s}m and inflict ${u.g + info[3] + u.s} of ${u.b + info[4] + u.s} on them for ${u.g + info[5] + u.s} sec.<br><br>Additional PvP Effect<br>When cast, recovers HP by ${u.g + info[6] + u.s} of Max HP.<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[7] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[7] + u.s}","variable":"Knockback, 4, 8, 50%, Deceleration, 5, 8% / 10% / 12%, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult3.jpg","cooldown":40,"range":2,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU04","name":"Gravity","description":"Inflict the target with a ${u.g + info[0] + u.s} ${u.b + info[1] + u.s} for ${u.g + info[2] + u.s} sec.<br><br>Additional PvP Effect<br>Inflicts ${u.b + info[3] + u.s} for ${u.g + info[4] + u.s}s. Continuous control from effects of the same type will diminish.<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[5] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[5] + u.s}","variable":"70%, Deceleration, 8, Stun, 2 / 2.5 / 3, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult4.jpg","cooldown":30,"range":16,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU05","name":"Break Free","description":"Instantly remove all ${u.b + info[0] + u.s} and ${u.b + info[1] + u.s} effects on you.<br>Certain Boss Skill effects cannot be removed.<br><br>Additional PvP Effect<br>Immune to all ${u.b + info[2] + u.s} within ${u.g + info[3] + u.s}s after using [Break Free]<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[4] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[4] + u.s}","variable":"Root, Control, Controls, 2 / 2.5 / 3, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult5.jpg","cooldown":60,"range":2,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU06","name":"Spell Disruption","description":"Interrupt target's spellcasting. Some boss skills can't be interrupted.<br><br>Additional PvP Effect<br>Inflicts ${u.g + info[0] + u.s} for ${u.g + info[1] + u.s}s. Continuous control from effects of the same type will diminish.<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[2] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[2] + u.s}","variable":"Silent, 3 / 4 / 5, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult6.jpg","cooldown":24,"range":16,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU07","name":"Spell Restraint","description":"Chant for ${u.g + info[0] + u.s} sec and ${u.b + info[1] + u.s} the target for ${u.g + info[2] + u.s} sec (shorter duration for players). Chance of DMG negation: ${u.g + info[3] + u.s}.<br><br>Additional PvP Effect<br>When the skill effect ends, the DMG dealt to the target will be increased by ${u.g + info[4] + u.s} for ${u.g + info[05] + u.s} sec<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[6] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[6] + u.s}","variable":"2, Confine, 12, 100%, 10% / 20% / 30%, 4, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult7.jpg","cooldown":25,"range":24,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU08","name":"Magic Skin","description":"You will be covered by magic, reducing the DMG you take by ${u.g + info[0] + u.s} and the DMG you deal by${u.g + info[1] + u.s}. The effects will last for ${u.g + info[2] + u.s} sec.<br><br>Additional PvP Effect<br>Grants ${u.b + info[3] + u.s} while the skill effect is active. When triggered, it recovers HP by ${u.g + info[4] + u.s} of Max HP.<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[5] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[5] + u.s}","variable":"80%, 50%, 8, Immortality, 10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Mage/Flame/ult8.jpg","cooldown":40,"range":2,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU09","name":"Slow Suppression","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Decelerated target are increased by ${u.g + info[0] + u.s}<br><br>Additional PVP Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[1] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT1.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU10","name":"Deadly Strike","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Dazed target are increased by ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT2.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU11","name":"Slow Shield","description":"Additional Effect<br>DMG taken is reduced by ${u.g + info[0] + u.s} when Decelerated<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT3.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU12","name":"Deady RES","description":"Additional Effect<br>DMG taken is reduced by ${u.g + info[0] + u.s} when Dazed<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT4.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU13","name":"Death Sustenance","description":"Additional Effect<br>Can negate lethal DMG once. HP is recovered by ${u.g + info[0] + u.s} of Max HP when triggered<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT5.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU14","name":"Time Control","description":"Additional Effect<br>Cooldown for all Ultimates - ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT6.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU15","name":"Divine Radiance","description":"Additional Effect<br>Disperse a random debuff effect every ${u.g + info[0] + u.s} in battle<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank +  ${u.g + info[1] + u.s}","variable":"40s / 30s / 20s, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT12.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLU16","name":"Rapid Pullback","description":"Additional Effect<br>After being hit, MoveSpd is increased by ${u.g + info[0] + u.s} for 3 sec. Can stack up to 3 times<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT8.jpg","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS01","name":"Fireball","description":"Launch a Fireball at the target, dealing Magic DMG equal to 97% of your ATK + 259.","variable":"","icon":"./Icons/Mage/Flame/mageFlsk1.png","cooldown":0,"range":16,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS02","name":"Skyfire","description":"After chanting for 2 sec, you will shoot a huge Fireball at the target, dealing Magic DMG equal to 125% of your ATK + 329, and making the target take Magic DMG equal to 6% of your ATK + 56 per sec for 5 sec.<br>This skill can't be cast while moving (will be interrupted by movements and jumps).<br>While [Heat Bomb] is ignited, the DOT dealt by [Skyfire] provides 2 Heat each time.","variable":"","icon":"./Icons/Mage/Flame/mageFl8.jpg","cooldown":0,"range":16,"speed":"2 sec","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS03","name":"Instant Skyfire","description":"Shoot a huge Fireball at the target, dealing Magic DMG equal to 175% of your ATK + 462, and making the target take Magic DMG equal to 6% of your ATK + 56 per sec for 5 sec.<br>While [Heat Bomb] is ignited, the DOT dealt by [Skyfire] provides 2 Heat each time.","variable":"","icon":"./Icons/Mage/Flame/mageFl8.jpg","cooldown":1,"range":16,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS04","name":"Searing Sting","description":"Detonate Pyro stored in the target and deal Magic DMG equal to 127% of your ATK +336. It also applies a 20% Crit. Rate.","variable":"","icon":"./Icons/Mage/Flame/mageFlsk2.png","cooldown":7,"range":16,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS05","name":"Heat Bomb","description":"Ignite the target with Pyro, dealing Magic DMG equal to 40% of your ATK + 105 on the target per sec. The effect lasts for 5.5 sec.<br>When the effect ends, it will cause an explosion, dealing Magic DMG equal to 17% of your ATK + 119 to the target. The higher the Heat, the greater the explosion DMG.","variable":"","icon":"./Icons/Mage/Flame/mageFlsk5.png","cooldown":15,"range":16,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS06","name":"Blazing Orb","description":"Create a Blazing Orb on the target that explodes after 2.5 sec, dealing Magic DMG equal to 89% of your ATK + 238 to enemies within a 4 m radius.<br>This skill is guaranteed to land a Crit. This skill deals 5% more Crit. DMG for every 10% base Crit. Rate.","variable":"","icon":"./Icons/Mage/Flame/mageFlsk6.png","cooldown":15,"range":16,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS07","name":"Fire Tornado","description":"After chanting for 1.5 sec, you will summon a [Fire Tomado] at the targeted area, dealing Magic DMG equal to 80% of your ATK + 210 to enemies in the range.<br>Every time the skill hits a target, its cooldown will be reduced by 1 sec This skill can be cast in movement (will only be interrupted by jump).","variable":"","icon":"./Icons/Mage/Flame/mageFlsk8.png","cooldown":5,"range":16,"speed":"1.5 sec","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS08","name":"Flame Boost","description":"Trigger the flame power to boost your Crit. rate by 10%, Crit. DMG by 10%, and ATK by 63. The effect lasts for 8 sec.","variable":"","icon":"./Icons/Mage/Flame/ult8.jpg","cooldown":60,"range":2,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLS09","name":"Inscribed Stone Skill","description":"Gain more Heat within 6 sec, and [Searing Sting] will reset the Cooldown of [Heat Bomb] when detonating it.","variable":"","icon":"./Icons/Stone/Skill7.png","cooldown":0,"range":2,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLA01","name":"Explosive Fuse","description":"Every time you cast Heat Bomb, the target will be ignited and a bomb on them will be detonated in 5.5 sec. Meanwhile, every time your Damage Skills deals DMG to any target, you will obtain 1 Heat, up to a max Heat of 40. When your Heat exceeds 39, any damage skill immediately detonates the bomb.<br>When Heat Bomb is detonated, all Heat will be cleared, and every point of Heat will increase the DMG of the explosion by 100%<br><br>Spec Aura: Grant your group bonus aura of Zest attribute that increases Main Attributes by 6% during a raid.","variable":"","icon":"./Icons/Mage/Flame/mageFlsk10.png","cooldown":null,"range":null,"speed":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"MAFLC01","name":"Starting","description":"There is a 30% chance to inflict 1 stacks of Echo Recharge in battle. 15 stacks of Energy triggers Echo of Destiny, increasing your Crit by 525 for 6 sec.","variable":"","icon":"./Icons/Stone/start.png","cooldown":null,"range":null,"speed":"","max":1,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLC02","name":"Core 1","description":"Echo of Destiny lasts 1 / 2 / 3 more sec.<br>Crit DMG is improved by 9%. / 13.5% / 18% additionally<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLC03","name":"Core 2","description":"Echo of Destiny increases your specialization attribute level by 131 / 196 / 262 additionally, increasing Speed Up and MoveSpd by 2.5% / 3.7% / 5% respectively.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLC04","name":"Core 3","description":"Each time you obtain Echo of Destiny, you have a 30% chance to gain 12.5% / 18.5% / 25% Inscribed Stone Energy and recover HP by 2% / 3% / 4% per sec for 5 sec.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI01","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI02","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI03","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI04","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI05","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI06","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI07","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI08","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI09","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI10","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI11","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI12","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI13","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI14","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI15","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI16","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI17","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI18","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI19","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI20","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI21","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI22","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI23","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI24","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI25","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI26","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI27","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI28","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI29","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI30","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI31","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI32","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI33","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI34","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI35","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI36","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI37","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI38","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI39","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI40","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI41","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI42","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI43","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI44","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI45","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI46","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI47","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI48","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI49","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI50","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI51","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI52","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI53","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI54","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI55","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI56","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI57","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"MAFLI58","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null}]
    