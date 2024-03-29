let tasks = [

    // W1
    ["Engineering Apprenticeship", "Collect both keys in Into the Machine and Fire Down Below in World 1."],
    ["Moolah Museum", "Collect at least 100 coins in High Class Heist in World 1, then collect the key."],
    ["My Lucky Day", "Collect the charm in Prowling the Grounds that triggers Bentley’s dialogue explaining lucky charms and listen to it from start to finish."],
    ["Flat Earth Society", "Destroy all 9 dart guns at least once each disguised as globes in A Cunning Disguise in World 1."],
    ["Sprinting Through the Storm", "Complete any World 1 MTS (Master Thief Sprint)."],
    ["If You Can't Take the Heat","Slam shut all the furnaces in Into the Machine or Fire Down Below at least once each. There are 18 in ITM and 5 in FDB."],
    ["Rave Time","Collect the key in the crabs minigame, Treasure in the Depths, in World 1."],
    ["Where We Droppin'?","Hear Raleigh say “fortnite” (or other language equivalent) in The Gunboat Graveyard in World 1. Listen to the full dialogue from start to finish."],
    ["Shh, This is a Library!","Take the barrel disguise all the way to the key in A Cunning Disguise in World 1."],
    ["Belly Bump Jump (BBJ) in High Class Heist", "Complete at least one successful “Belly Bump Jump” or BBJ in High Class Heist, then collect the key. A successful BBJ is defined as using one of the Walrus guards to proxy Sly across the water in any direction towards the key that allows the player to entirely skip the lily pad platforming"],

    // W2
    ["All Bark, No Bite", "Collect the key and vault in any World 2 level that features guards with guns (aka Vinnie the Pincher) without killing any guards, excluding Murray\’s Big Gamble. (Viable levels: Boneyard Casino, Back Alley Heist)"],
    ["Look Out Below!", "Drop all 5 cars suspended over the edge of the rooftops, the radio tower, and the wrecking ball at least once each in Straight to the Top in World 2."],
    ["Cement Bunny Slippers", "Hear Muggshot call you a “jerk” (or other language equivalent) in Straight to the Top in World 2. Listen to the full dialogue from start to finish."],
    ["Environmentally Unfriendly", "Destroy all 6 neon signs portraying Muggshot’s face and all 5 air conditioning units at least once each in Back Alley Heist in World 2."],
    ["Sprinting Through Utah","Complete any World 2 MTS (Master Thief Sprint)."],
    ["Down, Boy","Defeat all dog enemies in any level in World 2."],
    ["Payday!","Collect the coins from the rotating doghouse in the Boneyard Casino in World 2."],
    ["POGDOGTRACK","Collect the key in At the Dog Track in World 2."],
    ["Hot Date","Watch the “date” cutscene with Carmelita before the chase sequence begins in Two to Tango in World 2."],
    ["Cleetus (any variation) in A Rocky Start", "Complete at least one successful Cleetus launch in A Rocky Start. A successful Cleetus launch is defined as using the first dog enemy, Cleetus, to launch at least across the trash-filled pond, skipping the laser security cutscene and the trailer with the lasers inside. This is the minimum distance, and any distance past this is also allowed. Any method to achieve the proxy is allowed."],

    // W3
    ["Drive-By", "Collect at least 100 coins in A Ghastly Voyage in World 3, then collect the key."],
    ["Spooky Scary Skeletons", "Defeat all skeleton type enemies (aka Pierre Flamenose) at least once each in any applicable level in World 3, then collect the key. There are 6 in A Ghastly Voyage and 2 in Descent Into Danger."],
    ["Grave Defiler", "Destroy all 9 ghost generators at least once each in A Grave Undertaking in World 3."],
    ["Zombie Servitude", "Hear Mz. Ruby call out Sly and threaten him with eternal “zombie servitude” (or other language equivalent) in Descent Into Danger in World 3. Listen to the full dialogue from start to finish."],
    ["Sprinting Through the Bayou","Complete any World 3 MTS (Master Thief Sprint)."],
    ["Pest Control","Defeat all mosquito enemies and/or spider enemies in any level in World 3 at least once each. (Viable levels: The Dread Swamp Path, Lair of the Beast, A Grave Undertaking, Descent Into Danger)."],
    ["Indiana Cooper","Escape the giant snake in Lair of the Beast in World 3 by following the casual route. This is considered complete at the end of the chase sequence once the cutscene for the snake leaving has finished."],
    ["Raccoon Gumbo","Allow the bomb-toting roosters to defeat you after collecting 20 or more chickens in Down Home Cooking in World 3, then collect the key. You must take a full death to the roosters, exhausting all charms and then dying properly."],
    ["Fish Fry","Restart the fish minigame, Piranha Lake in World 3, after lighting 15 or more torches, then collect the key."],
    ["DSJ in Dread Swamp Path", "Complete at least one successful DSJ in Dread Swamp Path. A successful DSJ is defined as jumping from the first sliding vine onto the rock in the waterfall, then jumping and attaching to the sliding vine across the water, then landing safely on the ground below the rat guard."],

    // W4
    ["Smells Like Gunpowder", "Set off all gray and red fireworks in any applicable level in World 4 at least once each. There are 14 in A Perilous Ascent, 6 in The Unseen Foe, 16 in Duel by the Dragon, and 1 in Rapid Fire Assault (this does not include firework elevators)."],
    ["POGICETRACK", "Collect the key in A Desperate Race in World 4."],
    ["Cold Date", "Watch the cutscene with Carmelita before the chase sequence begins in Duel by the Dragon in World 4."],
    ["But It\’s Heavily Guarded", "Defeat all the ape guards (aka General Tso) at least once each in the forested area before the key in A Perilous Ascent in World 4, then collect the key."],
    ["Sprinting Through the Mountains","Complete any World 4 MTS (Master Thief Sprint)."],
    ["You Monster","Witness the Panda King bury an entire village in snow in A Perilous Ascent in World 4. This is considered completed by watching the entire cutscene."],
    ["No More Kung-Fu!","Defeat all the monkey enemies training on balance poles at least once each in Flaming Temple of Flame in World 4."],
    ["Like a Dragon","Collect the key in Duel by the Dragon in World 4."],
    ["I Got You Covered","Protect Murray and collect the key in The King of the Hill in World 4."],
    ["Backwards Gate Jump in A Perilous Ascent", "Go backwards from the end of the level and enter the vault room by performing a jump from the gate while it’s raised. This is considered complete once the player has jumped from the gate going backwards in the level and then lands inside the vault room within the same attempt."],

    // W5
    ["Smashing Through, Again", "Reach the top platform of Sinking Peril in World 5 that has the jet pack, then reload and do it again. (If you accidentally enter the final level A Strange Reunion, you may view map or reload to Sinking Peril and only do it once more as usual)."],
    ["Together at Last!", "Watch the Carmelita cutscene in A Temporary Truce in World 5. This is considered completed by watching the entire cutscene."],
    ["Put a Lid on It", "Destroy all 3 dart guns at least once each in A Daring Rescue in World 5."],
    ["Calling Air Support", "Let a robo-falcon kill you in A Temporary Truce in World 5."],
    ["Cloudy with a Chance of Meatballs","Let the falling rocks kill you in A Hazardous Path in World 5."],
    ["Blue Screen of Death","Restart the slugs minigame, Burning Rubber in World 5, after collecting 25 or more computers, then complete the minigame."],
    ["The Ultimate Disguise","Reach Carmelita\’s prison chamber with the protection of a barrel in A Daring Rescue in World 5."],
    ["Haven't Had to Do This in a While","Complete the hacking minigame in Bentley Comes Through in World 5. This requires fully completing the level all the way through to the end, including the final monologue cutscene."],
    ["Owl Historian","Watch the opening cutscene with Bentley\’s jetpack training and Clockwerk\’s dialogue at the beginning of A Strange Reunion."],
    ["Clockwerk Jump in A Strange Reunion","Complete at least one Clockwerk Jump in A Strange Reunion. This is considered complete by skipping most of the platforming in the final section of the boss fight by jumping and attaching to the pipe by Clockwerk’s head early."],

    // General
    ["Extra, Extra!", "Watch at least one of the “newspaper” cutscenes after defeating a world boss. This is considered complete upon watching the full cutscene either after defeating the boss or in the movie menu in the hideout."],
    ["All Mine!", "Collect the Mine ability from a vault. The run must also end with Mine being available to the runner (no save/load-duping it away)."],
    ["WEE-WOO", "Trigger all alarms (minimum 2) in a level, then collect the key at the end while the alarms are still active. All of the level\’s alarms must be triggered even if the level has more than 2. (Viable levels: High Class Heist, A Cunning Disguise, A Rocky Start, Back Alley Heist, Boneyard Casino, Descent Into Danger, The Unseen Foe, Flaming Temple of Flame)."],
    ["I Have an Announcement", "Listen to all intercom broadcasts from each world boss in their respective levels and hubs. Listen to the full dialogue from start to finish. (Includes levels: Prowling the Grounds, The Gunboat Graveyeard, Muggshot\’s Turf, Straight to the Top, The Swamp\’s Dark Center, Descent Into Danger, Inside the Stronghold, Rapid Fire Assault)."],
    ["Foreshadowing?", "Watch any world intro cutscene in its entirety. This can be completed when entering the world for the first time or from the movie menu in the hideout."],
    ["Foxy Lady","Open the vault in Paris to collect Sly\’s criminal record file from Inspector Carmelita Fox. This is considered completed upon opening the vault under the same rules as in the All Vaults category."],
    ["The Water's Fine","Collect the Dive ability from a vault. The run must also end with Dive being available to the runner (no save/load-duping it away)."],
    ["Rock N' Roll","Collect the Roll ability from a vault. The run must also end with Roll being available to the runner (no save/load-duping it away)."],
    ["Bottle Hoarder","Collect all bottles in any level."],
    ["All Part of the Plan","Collect the Blueprints in any World. This requires opening 3 vaults within the same world."],
    ["1-UP!","Gain an extra life by exceeding the 99-coin maximum while holding a golden lucky charm."],
    ["The Luck of the Irish","Collect all free-standing lucky charms in any level that contains at least two, then use them all before collecting the key at the end of the level. (Viable levels: Two to Tango, Grave Undertaking)."],
    ["Shortcut!","Unlock the gate blocking the second half of any world by collecting three keys and opening the gate. (World 1: Unlock and destroy the generator. World 2: Unlock the car and destroy the boards blocking access to the casino. World 3: Unlock the bone gate with the help of a giant snake. World 4: Unlock the roof hatch with fireworks.)"],
    ["Navigate Like Drake","Enter all levels in any two Worlds (minimum) and show off the fully revealed World maps."],
    ["Some of the Keys", "Collect every key in a minimum of 2 Worlds."]
];

let bosses  =  [
    ["Frog Legs", "Defeat Raleigh the Frog in World 1 and unlock the next world."],
    ["Giving the Dog a Bone","Defeat Muggshot in World 2 and unlock the next world."],
    ["Dance, Dance, Ruby","Defeat Mz. Ruby in World 3 and unlock the next world."],
    ["Pandas Aren't Always Cute","Defeat Panda King in World 4 and unlock the next world."],
    ["Oh No He Didn't","Defeat Clockwerk in World 5 and take back the Thievius Raccoonus!"]
]