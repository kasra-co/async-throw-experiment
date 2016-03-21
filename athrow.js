async function test() {
	try {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				throw new Error("Can't touch this!");
			}, 1);
		});
	} catch (e) {
		throw new Error("fail to win ftw");
	}
}

test();
