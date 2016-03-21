async function test() {
	try {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(new Error("Can't touch this!"));
			}, 1);
		});
	} catch (e) {
		console.log("Failed await");
		throw new Error("fail to win ftw");
	}
}

// Doesn't catch :(
try {
	test();
} catch (e) {
	console.log("Sync catch", e);
}

// Does catch
test().catch(e => {
	console.log("Promise .catch", e);
});
