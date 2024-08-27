// Paladin Justice
const talents = [{"id":"PAJUT01","name":"Glory Strike+","description":"<span class = 'yellow'><b>Glory Strike's</b></span> base damage is increased by  <span class = 'green'><b>4/8/12%</b></span>. For the next  <span class = 'green'><b>6</b></span> seconds, you gain  <span class = 'green'><b>2/4/6%</b></span> haste.","variable":"","icon":"./Icons/Paladin/Justice/palaJ1.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUT02","name":"Justice Thump+","description":"<span class = 'yellow'><b>Justice Thump's</b></span> damage is increased by <span class = 'green'><b>5/10/15%</b></span>. When enhanced, it is increased by <span class = 'green'><b>10/20/30%</b></span> instead.","variable":"","icon":"./Icons/Paladin/Justice/palaJ2.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUT03","name":"Judgement Mastery","description":"Increase your Critical Strike chance by  <span class = 'green'><b>1/2/3%</b></span>","variable":"","icon":"./Icons/Paladin/Justice/palaJ3.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"PAJUT04","name":"Echo","description":"You have a  <span class = 'green'><b>33.3/66.6/100%</b></span> chance to gain 1 level of Power of Glory when you consume a Glory Judgement.","variable":"","icon":"./Icons/Paladin/Justice/palaJ4.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"PAJUT05","name":"Enraged","description":"<span class = 'yellow'><b>Judgement Strike</b></span> increases the damage and critical strike damage of your next skill by  <span class = 'green'><b>5/10/15%</b></span>.","variable":"","icon":"./Icons/Paladin/Justice/palaJ5.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"PAJUT06","name":"Punitive Storm+","description":"Your  <span class = 'yellow'><b>Punishing Storm</b></span> deals  <span class = 'green'><b>5/10/15%</b></span> more damage.","variable":"","icon":"./Icons/Paladin/Justice/palaJ6.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"PAJUT07","name":"Eternal Glory","description":"After you cast  <span class = 'yellow'><b>Earthquake</b></span>, you have a  <span class = 'green'><b>33/66/100%</b></span> to gain a Glory Judgement (prioritizes skills that are not already enhanced.)","variable":"","icon":"./Icons/Paladin/Justice/palaJ7.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"PAJUT08","name":"Power of Justice","description":"<span class = 'yellow'><b>Justice Thump</b></span> can now store  <span class = 'green'><b>2</b></span> charges. When  <span class = 'yellow'><b>Glory Strike</b></span> resets the cooldown of  <span class = 'yellow'><b>Justice Thump</b></span>, it grants a charge instead.","variable":"","icon":"./Icons/Paladin/Justice/palaJ8.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":1,"min":6,"preq":null,"lvl":null},
    {"id":"PAJUT09","name":"Judgement Sword","description":"Replace  <span class = 'yellow'><b>Judgement Strike</b></span> with  <span class = 'yellow'><b>Judgement Sword</b></span>.","variable":"","icon":"./Icons/Paladin/Justice/palaJ9.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":1,"min":9,"preq":null,"lvl":null},
    {"id":"PAJUT10","name":"Dogma","description":"Every 3rd  <span class = 'yellow'><b>Glory Strike</b></span> has a  <span class = 'green'><b>10/20/30%</b></span> increased Critical Strike Chance.","variable":"","icon":"./Icons/Paladin/Justice/palaJ10.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":9,"preq":null,"lvl":null},
    {"id":"PAJUT11","name":"Razor-Sharp","description":"<span class = 'yellow'><b>Judgement Sword</b></span> has a  <span class = 'green'><b>10/20/30%</b></span> to regain a charge and increase the damage of the next  <span class = 'yellow'><b>Judgement Sword</b></span> by  <span class = 'green'><b>4/8/12%</b></span>.","variable":"","icon":"./Icons/Paladin/Justice/palaJ11.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":12,"preq":9,"lvl":1},
    {"id":"PAJUT12","name":"Double Knight","description":"Consecutive Glory Judgements increases your next skill's Critical strike chance by  <span class = 'green'><b>12/24/36%</b></span>. Otherwise, your next skill deals  <span class = 'green'><b>12/24/36%</b></span> increased damage.","variable":"","icon":"./Icons/Paladin/Justice/palaJ12.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":12,"preq":null,"lvl":null},
    {"id":"PAJUT13","name":"Frenzy Strike","description":"Your  <span class = 'yellow'><b>Judgement Strike's</b></span> Critical Strike chance is increased by  <span class = 'green'><b>3/6%</b></span>. When  <span class = 'yellow'><b>Judgement Strike</b></span> critically hits, your next skill deals  <span class = 'green'><b>5/10%</b></span> more damage.","variable":"","icon":"./Icons/Paladin/Justice/palaJ13.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":12,"preq":null,"lvl":null},
    {"id":"PAJUT14","name":"Execution","description":"You deal  <span class = 'green'><b>10/20/30%</b></span> increased critical damage to targets afflicted by  <span class = 'yellow'><b>Judgement Sword's</b></span> damage-over-time effect.","variable":"","icon":"./Icons/Paladin/Justice/palaJ14.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":15,"preq":11,"lvl":3},
    {"id":"PAJUT15","name":"Judgement Strike+","description":"<span class = 'yellow'><b>Judgement Strike</b></span> deals  <span class = 'green'><b>3/6/9%</b></span> more damage.  <span class = 'green'><b>Judgement Strike's</b></span> cooldown is reduced by  <span class = 'green'><b>1/2/3</b></span> seconds when gaining Glory Judgement or critically hitting with Glory Judgement.","variable":"","icon":"./Icons/Paladin/Justice/palaJ15.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":15,"preq":null,"lvl":null},
    {"id":"PAJUT16","name":"Judgement Sword+","description":"<span class = 'yellow'><b>Judgement Sword</b></span> deals  <span class = 'green'><b>10/20/30%</b></span> more damage immediately, and the damage-over-time is increased by  <span class = 'green'><b>30/60/90%</b></span>.","variable":"","icon":"./Icons/Paladin/Justice/palaJ16.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":18,"preq":14,"lvl":2},
    {"id":"PAJUT17","name":"Shattering Slam+","description":"Your  <span class = 'yellow'><b>Earthquake</b></span> deals  <span class = 'green'><b>5/10/15%</b></span> more damage, and you deal  <span class = 'green'><b>10/20/30%</b></span> increased damage to affected targets for  <span class = 'green'><b>4</b></span> seconds.","variable":"","icon":"./Icons/Paladin/Justice/palaJ17.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":18,"preq":null,"lvl":null},
    {"id":"PAJUT18","name":"Field Rage","description":"Your party is affected by  <span class = 'yellow'><b>Trial of Rage</b></span> with  <span class = 'green'><b>50%</b></span> effect.","variable":"","icon":"./Icons/Paladin/Justice/palaJ18.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"PAJUT19","name":"Trial of Rage+","description":"<span class = 'yellow'><b>Trial of Rage</b></span> lasts  <span class = 'green'><b>1.5/3</b></span> seconds longer and its cooldown is reduced by  <span class = 'green'><b>15/30</b></span> seconds.","variable":"","icon":"./Icons/Paladin/Justice/palaJ19.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"PAJUT20","name":"Knight's Glory","description":"Whenever you gain a Glory Judgement from Power of Glory, there is a  <span class = 'green'><b>3.33/6.66/10%</b></span> to gain another Glory Judgement.","variable":"","icon":"./Icons/Paladin/Justice/palaJ20.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":24,"preq":null,"lvl":null},
    {"id":"PAJUT21","name":"Expedition","description":"While  <span class = 'yellow'><b>Trial of Rage</b></span> is active, you gain  <span class = 'green'><b>1/2%</b></span> critical strike chance and haste whenever you cast a damage skill.","variable":"","icon":"./Icons/Paladin/Justice/palaJ21.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":24,"preq":19,"lvl":2},
    {"id":"PAJUP01","name":"Crit. Specialization","description":"You gain  <span class = 'green'><b>5%</b></span> Critical Strike Chance.","variable":"","icon":"./Icons/Paladin/Justice/palaJ22.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUP02","name":"Hammer of Glory","description":"<span class = 'yellow'><b>Glory Strike</b></span> grants an additional Power of Glory on critical hits. When you have  <span class = 'green'><b>16/25/34/42/50%</b></span> Critical Strike chance,  <span class = 'yellow'><b>Glory Strike</b></span> has a  <span class = 'green'><b>3/6/9/12/15%</b></span> to reset the cooldown of  <span class = 'yellow'><b>Justice Thump</b></span> and double its damage.","variable":"","icon":"./Icons/Paladin/Justice/palaJ23.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUP03","name":"Justice Storm","description":"<span class = 'yellow'><b>Justice Thump</b></span> with Glory Judgement deals extra damage equal to  <span class = 'green'><b>50%</b></span> of your Omni stat.  <span class = 'yellow'><b>Justice Thump</b></span> has a  <span class = 'green'><b>40%</b></span> for your next  <span class = 'yellow'><b>Punishing Storm</b></span> to cost  <span class = 'green'><b>0</b></span> Power of Glory and deal  <span class = 'green'><b>60/150/250%</b></span> more damage when you have  <span class = 'green'><b>6/11.4/15.6%</b></span> Omni.","variable":"","icon":"./Icons/Paladin/Justice/palaJ24.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUP04","name":"Aftershock","description":"<span class = 'yellow'><b>Glory Strike</b></span> has a chance equal to your Cooldown to reduce  <span class = 'yellow'><b>Earthquake's</b></span> cooldown by  <span class = 'green'><b>1</b></span> second.  <span class = 'yellow'><b>Earthquake</b></span> reduces  <span class = 'yellow'><b>Justice Thump</b></span> and  <span class = 'yellow'><b>Judgement Strike's</b></span> cooldown by  <span class = 'green'><b>1.5/3/5</b></span> seconds when you have  <span class = 'green'><b>10/19/26%</b></span> Cooldown stat.","variable":"","icon":"./Icons/Paladin/Justice/palaJ25.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUP05","name":"Crit. DMG Specialization","description":"You gain  <span class = 'green'><b>10%</b></span> Critical Strike Damage.","variable":"","icon":"./Icons/Paladin/Justice/palaJ26.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU01","name":"Breakout","description":"Boost your Movement Speed by <span class = 'green'><b>70%</b></span> for <span class = 'green'><b>8</b></span> sec.","variable":"","icon":"./Icons/Paladin/Guard/ult1.jpg","cooldown":20,"range":2.5,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU02","name":"Earth Shattering","description":"Jump to the target location, causing enemies within <span class = 'green'><b>3</b></span> m of the landing point to have their move speed reduced by <span class = 'green'><b>50%</b></span> for <span class = 'green'><b>5</b></span> sec.","variable":"","icon":"./Icons/Paladin/Guard/ult2.jpg","cooldown":35,"range":16,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU03","name":"Divine Might","description":"Divine Might arrives, reducing the DMG you take by <span class = 'green'><b>80%</b></span> and the DMG you deal by <span class = 'green'><b>50%</b></span>. The effect lasts <span class = 'green'><b>8</b></span> sec.","variable":"","icon":"./Icons/Paladin/Justice/ult3.jpg","cooldown":40,"range":0,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU04","name":"Atonement","description":"Force a target to repent and Stun the target for <span class = 'green'><b>6</b></span> sec (shorter duration for players).<br>Chance of negating this effect when taking DMG: <span class = 'green'><b>100%</b></span>.","variable":"","icon":"./Icons/Paladin/Justice/ult4.jpg","cooldown":20,"range":8,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU05","name":"Break Free","description":"Remove all roots and crowd control effects on you. Certain Boss Skill effects cannot be removed.","variable":"","icon":"./Icons/Paladin/Guard/ult5.jpg","cooldown":60,"range":2.5,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU06","name":"Punishment","description":"Interrupt target spell cast. Some Boss Skills cannot be interrupted.","variable":"","icon":"./Icons/Paladin/Guard/ult6.jpg","cooldown":20,"range":4,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU07","name":"Scourge","description":"Stun all enemies within <span class = 'green'><b>5</b></span> m for <span class = 'green'><b>6</b></span> sec (duration is reduced against players).","variable":"","icon":"./Icons/Paladin/Guard/ult7.jpg","cooldown":30,"range":2.5,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUU08","name":"Brilliance","description":"For <span class = 'green'><b>6</b></span> seconds, reduce the move speed of all enemies within <span class = 'green'><b>5</b></span> meters by <span class = 'green'><b>50%</b></span>.","variable":"","icon":"./Icons/Paladin/Guard/ult8.jpg","cooldown":30,"range":0,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS01","name":"Glory Strike","description":"Attack the enemy with the Light of Glory, dealing Physical DMG equal to <span class = 'green'><b>107%</b></span> of your ATK + <span class = 'green'><b>196</b></span>.<br><br>When the skill hits a target, you will gain <span class = 'green'><b>1</b></span> level of Power of Glory.<br>When your Power of Glory reaches <span class = 'green'><b>5</b></span>, you will randomly gain Judgement: Justice or Judgement: Verdict.","variable":"","icon":"./Icons/Paladin/Justice/palaJsk1.png","cooldown":3,"range":2.5,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS02","name":"Justice Thump","description":"Call for Justice Power to attack an enemy, dealing Physical DMG equal to <span class = 'green'><b>142%</b></span> of your ATK + <span class = 'green'><b>260</b></span>. If the target's HP is less than <span class = 'green'><b>25%</b></span>, DMG dealt by the skill will be doubled.<br><br>Judgement Justice Enhancement: A pursuit after hitting (pursuit will also trigger the related Talent of the skill).","variable":"","icon":"./Icons/Paladin/Justice/palaJsk2.png","cooldown":8,"range":16,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS03","name":"Judgement Strike","description":"Attack an enemy with Adjudication Power, dealing Magic DMG equal to <span class = 'green'><b>265%</b></span> of your ATK + <span class = 'green'><b>487</b></span>.<br><br>Judgement Verdict Enhancement: DMG dealt and Crit. DMG + <span class = 'green'><b>15%</b></span>.","variable":"","icon":"./Icons/Paladin/Justice/palaJsk3.png","cooldown":10,"range":2.5,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS04","name":"Judgement Sword","description":"Penalize the target, dealing Physical DMG equal to <span class = 'green'><b>164%</b></span> of your ATK + <span class = 'green'><b>305</b></span>.<br>The skill can be recharged <span class = 'green'><b>2</b></span> times.<br><br>Judgement Verdict Enhancement: After hitting the target, for the next <span class = 'green'><b>6</b></span> sec, the target will take Magic DMG equal to <span class = 'green'><b>21%</b></span> of your ATK per sec.","variable":"","icon":"./Icons/Paladin/Justice/palaJ9.jpg","cooldown":8,"range":2.5,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS05","name":"Shattering Slam","description":"Pour all your power into the Divine Hammer to smash the ground, dealing Physical DMG equal to <span class = 'green'><b>349%</b></span> of your ATK + <span class = 'green'><b>644</b></span> to enemies in a certain area in the target direction.","variable":"","icon":"./Icons/Paladin/Justice/palaJsk5.png","cooldown":30,"range":6,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS06","name":"Discipline Storm","description":"Use Sanction Hammer to smash around, dealing Magic DMG equal to <span class = 'green'><b>4%</b></span> of your ATK + <span class = 'green'><b>38</b></span> to enemies within <span class = 'green'><b>7</b></span> m.<br>For each target hit by the skill, its cooldown is reduced by <span class = 'green'><b>1</b></span> sec.<br>It consumes <span class = 'green'><b>1</b></span> level of Power of Glory to cast this skill. When more than <span class = 'green'><b>3</b></span> targets are hit, <span class = 'green'><b>1</b></span> level of Power of Glory will be returned.","variable":"","icon":"./Icons/Paladin/Justice/palaJsk6.png","cooldown":5,"range":2.5,"speed":"Instant","cost":"Power of Glory 1","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS07","name":"Trial of Rage","description":"Get Trial of Rage, for the next <span class = 'green'><b>15</b></span> sec, your Crit. Rate and Haste effect + <span class = 'green'><b>12%</b></span>.<br>Your ATK will be boosted by <span class = 'green'><b>4%</b></span> + <span class = 'green'><b>44</b></span>.","variable":"","icon":"./Icons/Paladin/Justice/palaJsk7.png","cooldown":120,"range":2.5,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUS08","name":"Inscribed Stone Skill","description":"Increase the efficiency of obtaining Power of Glory within 6 sec. Obtaining any Judgment will reset its cooldown.","variable":"","icon":"./Icons/Stone/Skill7.png","cooldown":0,"range":2,"speed":"Instant","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUA01","name":"Glory Judgement","description":"Your <span class = 'yellow'><b>Glory Strike</b></span> grants tier <span class = 'green'><b>1</b></span> Power of Glory upon hit. When you have Power of Glory, you can randomly select skill enhancement effects.<br><br>When your Power of Glory reaches tier <span class = 'green'><b>5</b></span>, you will receive the selected skill enhancement:<br><br>Judgement: Justice:<br>Your next <span class = 'yellow'><b>Justice Thump</b></span> pursues the target one more time upon hit (this pursuit cannot trigger Talents associated with <span class = 'yellow'><b>Justice Thump</b></span>).<br><br>Judgement: Verdict:<br>Your next <span class = 'yellow'><b>Judgement Strike</b></span> deals <span class = 'green'><b>15%</b></span> more DMG and Crit. DMG.<br>Upon hit, your next <span class = 'yellow'><b>Judgement Sword</b></span> deals Magic DMG equal to <span class = 'green'><b>21%</b></span> of your ATK per sec to the target within the next <span class = 'green'><b>6</b></span> sec. When this effect is overwritten, the untallied DMG is added to the new effect.<br><br>Spec Aura: grant your group bonus Aura of Concentration that increases Combo and Crit. by <span class = 'green'><b>2%</b></span> during a raid.","variable":"","icon":"./Icons/Paladin/Justice/palaJsk8.png","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PAJUC01","name":"Starting","description":"There is a 30% chance to inflict 1 stacks of Echo Recharge in battle. 15 stacks of Energy triggers Echo of Destiny, increasing your Combo by 525 for 6 sec.","variable":"","icon":"./Icons/Stone/start.png","cooldown":null,"range":null,"speed":"","cost":"","max":1,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUC02","name":"Core 1","description":"Echo of Destiny lasts 1 / 2 / 3 more sec.<br>Combo DMG is improved by 9%. / 13.5% / 18% additionally<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUC03","name":"Core 2","description":"Echo of Destiny increases your specialization attribute level by 131 / 196 / 262 additionally, increasing Speed Up and MoveSpd by 2.5% / 3.7% / 5% respectively.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUC04","name":"Core 3","description":"Each time you obtain Echo of Destiny, you have a 30% chance to gain 12.5% / 18.5% / 25% Inscribed Stone Energy and recover HP by 2% / 3% / 4% per sec for 5 sec.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI01","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI02","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI03","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI04","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI05","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI06","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI07","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI08","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI09","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI10","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI11","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI12","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI13","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI14","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI15","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI16","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI17","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI18","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI19","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI20","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI21","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI22","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI23","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI24","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI25","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI26","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI27","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI28","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI29","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI30","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI31","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI32","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI33","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI34","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI35","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI36","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI37","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI38","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI39","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI40","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI41","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI42","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI43","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI44","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI45","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI46","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI47","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI48","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI49","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI50","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI51","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI52","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI53","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI54","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI55","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI56","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI57","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PAJUI58","name":"Specialization","description":"Crit DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null}]
    