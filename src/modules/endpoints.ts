import { Client } from '../client';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Endpoint {
	private client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	async all(query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/endpoints`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async get(id: string, query?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/endpoints/${id}`, query, method: 'get' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async delete(id: string) {
		try {
			const { data } = await this.client.httpRequest({ path: `/endpoints/${id}`, method: 'delete' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async create(query?: any, body?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/endpoints/`, query, body, method: 'post' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}

	async update(id: string, body?: any) {
		try {
			const { data } = await this.client.httpRequest({ path: `/endpoints/${id}`, body, method: 'put' });
			return data;
		} catch (error) {
			ResponseHelper.handleErrors(error);
		}
	}
}
