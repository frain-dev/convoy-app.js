import { Client } from '../client';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class DeliveryAttempt {
	private client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	public async all(eventDeliveryId: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/${eventDeliveryId}/deliveryattempts`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	public async get(eventDeliveryId: string, deliveryAttemptId: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/${eventDeliveryId}/deliveryattempts/${deliveryAttemptId}`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}
}
