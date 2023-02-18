const cards = [
	{
		number: 0,
		name: 'The Fool',
		descripiton: 'The Fool is returned to the beginning of their journey by a lucky shot.',
		effectParagraphs: [
			"All of the victim's Cyberware is rendered inoperable for one hour. Cyberlimbs that are rendered inoperable act as their meat counterparts do when they have been dismembered, but they still hang loosely. Should this leave a target without any ability to sense an opponent, any Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness.",
			'If the victim has no Cyberware they instead suffer the Foreign Object Critical Injury and experience 3d6 Humanity Loss.'
		],
		image: 'fool.png'
	},
	{
		number: 1,
		name: 'The Magician',
		descripiton: 'A battery sparks fire through The Magician’s power.',
		effectParagraphs: [
			"The GM selects one of the victim's pieces of cyberware. That piece of cyberware is destroyed (although not beyond repair). Additionally, the victim is now Deadly On Fire (CP:R page 180).",
			'If the victim has no Cyberware, they are now Deadly on Fire, and one of their worn or held weapons malfunctions, requiring an Action to reverse the malfunction before it can be used again.'
		],
		image: 'magician.png'
	},
	{
		number: 2,
		name: 'The High Priestess',
		descripiton: 'The High Priestess guards the secret of poisoning from shrapnel.',
		effectParagraphs: [
			'The victim suffers the Foreign Object Critical Injury, except instead of re-suffering Bonus Damage whenever they move further than 4 m/yds on foot in a Turn, they must instead beat a DV 15 Resist Torture/Drugs Skill Check or suffer 3d6 damage directly to their Hit Points.'
		],
		image: 'high-priestess.png'
	},
	{
		number: 3,
		name: 'The Empress',
		descripiton: 'The Empress spreads blessings evenly amongst her childrens’ attacks.',
		effectParagraphs: [
			'The music swells. The next three successful Attack Checks made against a single opponent in this combat are guaranteed to inflict Critical Injuries, no matter what the damage dice say.',
			'This applies to Light Melee Weapons but not Biotoxins, Poisons, Stun Batons, and other weapons normally incapable of causing a Critical Injury.'
		],
		image: 'empress.png'
	},
	{
		number: 4,
		name: 'The Emperor',
		descripiton: 'The Emperor grants a Player the authority to shape the narrative.',
		effectParagraphs: [
			'The GM selects a Player to choose one Critical Injury from the Head table (CP:R page 188), and one from the Body table (CP:R page 187). The victim suffers both of those Critical Injuries.'
		],
		image: 'emperor.png'
	},
	{
		number: 5,
		name: 'The Hierophant',
		descripiton: 'The Hierophant brings gifts, but requires a sacrifice to tradition.',
		effectParagraphs: [
			'The Attack deals twice the amount of damage it would have done, after armor and any multipliers are taken into account. However, if it was made by a weapon, that weapon is destroyed beyond repair.'
		],
		image: 'hierophant.png'
	},
	{
		number: 6,
		name: 'The Lovers',
		descripiton: 'The Lovers bring the combatants even closer together.',
		effectParagraphs: [
			'This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, if it was a Melee Attack that drew The Lovers, the victim is now considered to be defender in a grapple with the attacker.'
		],
		image: 'lovers.png'
	},
	{
		number: 7,
		name: 'The Chariot',
		descripiton: 'The Chariot offers the control required to strike true.',
		effectParagraphs: [
			"The Attack finds a fortuitous flaw in the target's armor, which forms a gaping hole. The victim's armor in the damaged location is ablated by an additional 5 points, even if it was not penetrated by the Attack."
		],
		image: 'chariot.png'
	},
	{
		number: 8,
		name: 'Strength',
		descripiton: 'Strength empowers an attack with overwhelming force.',
		effectParagraphs: [
			'The Attack deals an additional 25 damage. This additional damage is added to the rolled damage before armor SP is subtracted and/or any multipliers are calculated.'
		],
		image: 'strength.png'
	},
	{
		number: 9,
		name: 'The Hermit',
		descripiton: 'The Hermit forcibly invites you on a journey inward.',
		effectParagraphs: [
			'The victim suffers the Lost Eye Critical Injury twice, although the penalty for the injury is only applied once. Should this leave a target without any ability to sense an opponent, any Skill Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness.'
		],
		image: 'hermit.png'
	},
	{
		number: 10,
		name: 'Wheel of Fortune',
		descripiton: 'Wheel of Fortune twists with forces outside of human control.',
		effectParagraphs: [
			'The Attack goes wild. If it was a Ranged Attack, the GM randomly determines a new target to replace the intended target. If it was a Melee Attack, the person who caused Wheel of Fortune to be drawn immediately falls prone, and the Attack is considered a miss instead of a hit. Either way, any weapon used to make the Attack malfunctions, requiring an Action to reverse the malfunction before it can be used again.'
		],
		image: 'wheel-of-fortune.png'
	},
	{
		number: 11,
		name: 'Justice',
		descripiton: 'Justice arrives to deliver piercing clarity and truth directly to the gut.',
		effectParagraphs: [
			'The Attack knocks the wind out of the victim. For the next minute they suffer a -5 penalty to Evasion Skill Checks when attempting to avoid a Melee Attack and they cannot dodge Ranged Attacks at all.'
		],
		image: 'justice.png'
	},
	{
		number: 12,
		name: 'The Hanged Man',
		descripiton: 'The Hanged Man means sacrifice.',
		effectParagraphs: [
			'The victim is knocked prone and suffers the Spinal Injury and Whiplash Critical Injuries.'
		],
		image: 'hanged-man.png'
	},
	{
		number: 13,
		name: 'Death',
		descripiton: 'Death is ever present, sudden, inevitable, and eternally transformative.',
		effectParagraphs: [
			'The victim must immediately roll a single Death Save. If they fail, they are reduced to 0 HP and are knocked unconscious for one minute. Upon regaining consciousness, the victim regains 3d6 Humanity Points (up to their maximum Humanity) from the experience.'
		],
		image: 'death.png'
	},
	{
		number: 14,
		name: 'Temperance',
		descripiton: 'Temperance requires a choice for which you’ll find your own meaning.',
		effectParagraphs: [
			'The victim must choose one of their limbs to suffer a Dismembered Critical Injury, and then must choose a different one of their limbs to suffer a Broken Critical Injury.'
		],
		image: 'temperance.png'
	},
	{
		number: 15,
		name: 'The Devil',
		descripiton: 'The Devil exists to represent and punish your fear and excess.',
		effectParagraphs: [
			'This Attack now hits the head, even if it was originally aimed elsewhere. Additionally, the victim suffers the Brain Injury and Lost Ear Critical Injuries.'
		],
		image: 'devil.png'
	},
	{
		number: 16,
		name: 'The Tower',
		descripiton: 'The Tower is a disaster that reveals hidden resilience when it falls.',
		effectParagraphs: [
			'The victim suffers the Cracked Skull, Crushed Windpipe, and Whiplash Critical Injuries. These Injuries deal no Bonus Damage. For one hour, the victim cannot feel pain and can ignore the effects of the Seriously Wounded Wound State.'
		],
		image: 'tower.png'
	},
	{
		number: 17,
		name: 'The Star',
		descripiton: 'The Star represents an attack you can have faith in.',
		effectParagraphs: [
			'If the Star was drawn due to a Ranged Attack, it hits the first target, passes through, and ricochets into a second enemy within 20 m/yards, chosen by the GM. If there is no additional enemy, the ricochet instead hits the original target a second time. This ricochet Attack always hits and does so in the body. Roll new damage dice for the ricochet Attack.',
			'If The Star was drawn due to a Melee Attack, the victim suffers the Broken Ribs and Collapsed Lung Critical Injuries.'
		],
		image: 'star.png'
	},
	{
		number: 18,
		name: 'The Moon',
		descripiton: 'The Moon shines over a vicious attack born of primal instinct.',
		effectParagraphs: [
			"The victim suffers the Foreign Object Critical Injury twice, once in the body and once in the head. If The Moon was drawn by a Melee Attack made using a melee weapon, that weapon is now stuck in the victim's body, and the attacker is disarmed."
		],
		image: 'moon.png'
	},
	{
		number: 19,
		name: 'The Sun',
		descripiton: 'The Sun is a celebration of carnage that overcomes all obstacles.',
		effectParagraphs: [
			"If the victim is carrying any grenades or other explosives, the GM chooses one of them to explode immediately. If they weren't carrying any grenades, the GM chooses a non-weapon piece of equipment on the victim to destroy beyond repair."
		],
		image: 'sun.png'
	},
	{
		number: 20,
		name: 'Judgement',
		descripiton: 'Judgement is a painful awakening you might not walk away from.',
		effectParagraphs: [
			'The victim suffers the Crushed Fingers Critical Injury on one of their hands, and the Dismembered Hand Critical Injury on another hand.'
		],
		image: 'judgement.png'
	},
	{
		number: 21,
		name: 'The World',
		descripiton: 'The World puts everything in perspective in a moment of understanding.',
		effectParagraphs: [
			'The character who caused The World to be drawn may take an additional Turn after this one. During this additional Turn they receive a +5 to any Skill Check, ignore the negative effects of all Wound States, and do not have to make a Death Save if Mortally Wounded.'
		],
		image: 'world.png'
	}
];

export default cards;
