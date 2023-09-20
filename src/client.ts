import { IConfig } from './models';
const axios = require('axios').default;

export class Client {
	private request;
	public baseUri = 'https://cloud.getconvoy.io';

	constructor(options: IConfig) {
		this.request = axios.create({
			baseURL: (options.uri || this.baseUri) + '/portal-api',
			headers: {
				Authorization: `Bearer ${options.api_key}`,
				'Content-Type': 'application/json'
			}
		});
	}

	public async httpRequest(requestDetails: { path: string; query?: any; method: 'get' | 'post' | 'put' | 'delete'; body?: any }) {
		return this.request[requestDetails.method](this.buildPath(requestDetails.path, requestDetails.query), requestDetails.body || null);
	}

	private buildPath(path: string, query: any) {
		if (this.hasQueryParameters(query)) {
			path = `${path}?${this.buildQueryParams(query)}`;
		}

		return path;
	}

	private buildQueryParams(query: any) {
		return new URLSearchParams(query).toString();
	}

	private hasQueryParameters(query: any): boolean {
		return query && Object.getOwnPropertyNames(query).length > 0;
	}
}
