import { Client } from '../client';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class EventDelivery {
	private client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	async all(query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async get(id: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/${id}`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}
}
