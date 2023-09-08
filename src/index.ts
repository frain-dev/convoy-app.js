import { IConfig } from './models';
import { Client } from './client';
import { EventDelivery } from './modules/event-deliveries';
import { Event } from './modules/events';
import { DeliveryAttempt } from './modules/delivery-attempt';
import { Subscription } from './modules/subscriptions';
import { Endpoint } from './modules/endpoints';

export class Convoy {
	private options: IConfig;
	private client: Client;

	public events;
	public eventDeliveries;
	public subscriptions;
	public deliveryAttempts;
	public endpoints;

	constructor(options: IConfig) {
		this.options = options;
		this.client = new Client(options);

		this.events = new Event(this.client);
		this.eventDeliveries = new EventDelivery(this.client);
		this.subscriptions = new Subscription(this.client);
		this.deliveryAttempts = new DeliveryAttempt(this.client);
		this.endpoints = new Endpoint(this.client);
	}

	public async initAppPortal(domSelector?: string) {
		document.querySelector(domSelector || '#convoy-app').innerHTML = `<iframe src="${this.options.uri}/app/${this.options.api_key}" frameborder="0" style="width: 100%; height: 100vh"></iframe>`;
		return;
	}

	public async createSubscription(domSelector?: string) {
		document.querySelector(
			domSelector || '#convoy-create-sub'
		).innerHTML = `<iframe id="convoy-create-subscription-modal" src="${this.options.uri}/app/${this.options.api_key}/subscriptions/new" frameborder="0" style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; right: 0; bottom: 0;"></iframe>`;
		return;
	}
}

(<any>window).Convoy = Convoy;
