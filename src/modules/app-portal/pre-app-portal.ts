export class AppPortal {
	// private client;

	constructor() {
		// this.client = new Client(options);
		console.log('🚀 ~ file: index.ts ~ line 25 ~ Convoy ~ constructor', 'appPortal');
	}

	embedAppPortal(domSelector?: string) {
		document.querySelector(domSelector).innerHTML = appPortal;
	}
}

const appPortal = `<!-- html code here -->`;
