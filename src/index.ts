import { AppPortal } from './modules/app-portal/app-portal';

export class Convoy {
	public embedAppPortal;

	constructor() {
		this.embedAppPortal = new AppPortal();
	}
}
