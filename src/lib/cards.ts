const cards = [
	{
		number: 0,
		name: 'The Fool',
		descripiton: 'The Fool is returned to the beginning of their journey by a lucky shot.',
		effectParagraphs: [
			"All of the victim's Cyberware is rendered inoperable for one hour. Cyberlimbs that are rendered inoper- able act as their meat counterparts do when they have been dismembered, but they still hang loosely. Should this leave a target without any ability to sense an opponent, any Check they make suffers an additional -4 modifier, as if obscured by smoke or darkness.",
			'If the victim has no Cyberware they instead suffer the Foreign Object Critical Injury and experience 3d6 Humanity Loss.'
		],
		image: 'fool.png'
	},
	{
		number: 1,
		name: 'The Magician',
		descripiton: 'A battery sparks fire through The Magician’s power.',
		effectParagraphs: [
			"The GM selects one of the vic- tim's pieces of cyberware. That piece of cyberware is destroyed (although not beyond repair). Additionally, the victim is now Deadly On Fire (CP:R page 180).",
			'If the victim has no Cyberware, they are now Deadly on Fire, and one of their worn or held weapons malfunctions, requiring an Action to reverse the malfunction before it can be used again.'
		],
		image: 'magician.png'
	},
	{
		number: 2,
		name: 'The High Priestess',
		descripiton: 'The High Priestess guards the secret of poisoning from shrapnel.',
		effectParagraphs: [
			'The victim suffers the Foreign Object Critical Injury, except instead of re-suffering Bonus Damage whenever they move further than 4 m/yds on foot in a Turn, they mustinstead beat a DV 15 Resist Torture/Drugs Skill Check or suffer 3d6 damage directly to their Hit Points.'
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
			'This Attack now hits the head, even if it was originally aimed else- where. Additionally, if it was a Melee Attack that drew The Lovers, the victim is now considered to be defender in a grapple with the attacker.'
		],
		image: 'lovers.png'
	}
];

export default cards;
