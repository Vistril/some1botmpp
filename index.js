var Client = require('./Client.js');
var gClient = new Client();
gClient.setChannel('lobby');
gClient.start();
gClient.send = (msg) => {
    gClient.sendArray([
        {
            m: 'a',
            message: msg,
        },
    ]);
};
gClient.on('hi', msg => {
    console.log('Connected.');
});
gClient.on('a', msg => {
	const usernames = Object.keys(gClient.ppl).map(
		key => gClient.ppl[key].name
	);
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	const cmdChar = 's-';
	const faces = [
		'( ͡° ͜ʖ ͡°)',
		'(⌐■_■)',
		'¯\\_ツ_/¯',
		'ʢ◉ᴥ◉ʡ',
		'^‿^',
		'(づ◔ ͜ʖ◔)づ',
		'⤜(ʘ_ʘ)⤏',
		'☞   ͜ʖ  ☞',
		'ᗒ ͟ʖᗕ',
		'└[•⏏•]┘',
		'¯\\_$ل͜$_/¯',
		'乁(  ᴥ  )ㄏ',
		"̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿̿з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿",
		'▄︻̷̿┻̿═━一',
		'¯\\_(ツ)_/¯',
		'( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)',
		'(▀̿Ĺ̯▀̿ ̿)',
		'ʕ•ᴥ•ʔ',
		'(づ｡◕‿‿◕｡)づ',
		'(ﾉ◕ヮ◕)ﾉ :･ﾟ✧ ✧ﾟ･:  ヽ(◕ヮ◕ヽ)',
		'ಠ_ಠ',
		"﴾͡๏̯͡๏﴿ O'RLY?",
		'(ﾉ◕ヮ◕)ﾉ :･ﾟ✧',
		'(╯°□°)╯︵ ʞooqǝɔɐɟ',
		'(╯°□°）╯︵ ┻━┻',
		' (◕‿◕✿)',
		'(∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿',
		'（✿ ͡◕ ᴗ◕)つ━━✫・o。',
		'(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. o ･ ｡ﾟ',
	];
	getRandFace = () => {
		return '(' + faces[Math.floor(Math.random() * faces.length)] + ')';
	};
	getRandUser = () => {
		return '(' + usernames[Math.floor(Math.random() * usernames.length)] + ')';
	};
	var args = msg.a.split(' ');
	var cmd2 = args[0].substr(1);
	var oof = '@someone';
	var newInput = msg.a
		.substr(oof.length, 200)
		.replace(/@someone/, '   ' + getRandUser() + '   ')
		.replace(/-face/, '  ' + getRandFace() + '  ');
	if (msg.a.startsWith('@someone')) {
		try {
			console.log(`${msg.p.name} used command.`);
			gClient.send(
				`${msg.p.name},   ${faces[
					Math.floor(Math.random() * faces.length)
				]}      (${usernames[
					Math.floor(Math.random() * usernames.length)
				]})    ${newInput.replace(/@someone/g, '').replace(/-face/g, '')}`
			);
		} catch (e) {
			gClient.send('@someone ent gone nuts - tell bistril he numba one ' + e);
		}
	}

	if (cmd == cmdChar + 'someone') {
		try {
			gClient.send(
				`${msg.p.name},    ${faces[
					Math.floor(Math.random() * faces.length)
				]}      (${usernames[
					Math.floor(Math.random() * usernames.length)
				]})    ${newInput.replace(/@someone/g, '').replace(/-face/g, '')}`
			);
		} catch (e) {
			gClient.send('@someone ent gone nuts - tell bistril he numba one' + e);
		}
	}
	var ifInput = msg.a.slice('if @someone'.length, 200);
	if (msg.a.startsWith('if @someone')) {
		try {
			if (!ifInput) {
				msg.reply('Please include an input!');
			} else {
				gClient.send(
					`${msg.p.name},   ${faces[
						Math.floor(Math.random() * faces.length)
					]}   if    (${usernames[
						Math.floor(Math.random() * usernames.length)
					]})    ${ifInput
						.replace(/@someone/, '   ' + getRandUser() + '   ')
						.replace(/-face/, '  ' + getRandFace() + '  ')}
			`
				);
			}
		} catch (e) {
			gClient.send('@someone ent gone nuts - tell bistril he numba one ' + e);
		}
	}
});
