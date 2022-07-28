import { Client } from '../client';
import { BatchResend } from '../models';
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

	async deliveryAttempts(id: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/${id}/deliveryattempts`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async deliveryAttempt(id: string, attemptId: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/${id}/deliveryattempts/${attemptId}`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async getDeliveryAttempt(id: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/${id}/deliveryattempts`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async resend(id: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/${id}/resend`, query, method: 'put' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async batchResend(attributes: BatchResend, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/batchretry`, method: 'put', body: attributes, query });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async batchResendEventsCount(query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/eventdeliveries/countbatchretryevents`, method: 'get', query });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}
}
