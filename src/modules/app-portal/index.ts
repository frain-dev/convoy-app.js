import { Client } from '../../client';
import { IConfig } from '../../models';

export class AppPortal {
	private client;

	constructor(client: Client) {
		this.client = client;
		// this.renderAppPortal();
	}

	/**
	 * Composes Convoy App Portal DOM HTML string and appends to provided element selector
	 * @param htmlSelector A valid selector of an element in your DOM e.g #convoy-app, .convoy-app. Defaults to #convoy-app is none is passed
	 */
	async renderAppPortal(htmlSelector?: string) {
		const subscriptions = await this.getSubscriptions();
		const { events, eventId } = await this.getEvents();
		const eventDeliveries = await this.getEventDeliveries();
		const sideEventDeliveries = eventId ? await this.getEventEventDeliveries(eventId) : '';

		const html = `
            <div class="page">
                <div class="dashboard--page--head margin-bottom__20px">
                    <h3 class="margin-bottom__10px">Subscriptions</h3>
                    <button class="button button__primary button__small"  onclick="convoy.embedAppPortal.renderAppPortal();">Create Subscription</button>
                </div>
                <div class="dashboard-page--details">
                    <div class="card has-title dashboard-page--endpoints">
                        ${subscriptions}
                    </div>
                </div>

                <section class="card has-title dashboard--logs">
                    <div class="dashboard--logs--tabs">
                        <div class="tabs">
                            <li><button class="active" id="convoy-logs-tab-events-button"><span>events</span></button></li>
                            <li><button id="convoy-logs-tab-eventDels-button"><span>event deliveries</span></button></li>
                        </div>
                    </div>

                    <div class="flex" id="convoy-logs-tab-events-container">
                        <div class="dashboard--logs--table">
                            ${events}
                        </div>

                        <div class="event__details position__relative width__36">
			                <div class="padding-all__16px">
                                <h3>Details</h3>
                                <div class="dashboard--logs--details--req-res">
                                    <div class="dashboard--logs--details--tabs-data show">
                                        <h4>Event</h4>
                                        // <prism language="json" [code]="getCodeSnippetString()"></prism>
                                    </div>
                                </div>

                                <h4>Deliveries Overview</h4>
                                <ul class="dashboard--logs--details--endpoints inline">${sideEventDeliveries}</ul>
                            </div>
                        </div>
                    </div>

	                <div class="event__table width-100" style="display: none;" id="convoy-logs-tab-eventDels-container">
                        ${eventDeliveries}
                    </div>
                </section>
            </div>
        `;

		// document.querySelector(htmlSelector || '#coonvoy-app').innerHTML = html;
		const doc = new DOMParser().parseFromString(html, 'text/xml');
		// console.log('🚀 ~ file: index.ts ~ line 141 ~ AppPortal ~ renderAppPortal ~ html', html);
		console.log('🚀 ~ file: index.ts ~ line 141 ~ AppPortal ~ renderAppPortal ~ doc', doc.documentElement);
		document.querySelector(htmlSelector || '#coonvoy-app').innerHTML = html;

		this.appendScript();
	}

	appendScript() {
		// var head = document.getElementsByTagName('head')[0];
		// var script = document.createElement('script');
		// script.type = 'module';
		// // script.onload = function() {
		// //     callFunctionFromScript();
		// // }
		// script.src = './app-portal-client.js';
		// head.appendChild(script);
	}

	embedAppPortal(domSelector?: string) {
		// document.querySelector(domSelector).innerHTML = appPortal;
	}

	getDate(date: Date) {
		const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		const _date = new Date(date);
		const day = _date.getDate();
		const month = _date.getMonth();
		const year = _date.getFullYear();
		return `${day} ${months[month]}, ${year}`;
	}

	setContentDisplayed(content: { created_at: Date }[]) {
		const dateCreateds = content.map((item: { created_at: Date }) => this.getDate(item.created_at));
		const uniqueDateCreateds = Array.from([new Set(dateCreateds)])[0];
		const displayedItems: any = [];
		uniqueDateCreateds.forEach(itemDate => {
			const filteredItemDate = content.filter((item: { created_at: Date }) => this.getDate(item.created_at) === itemDate);
			const contents = { date: itemDate, content: filteredItemDate };
			displayedItems.push(contents);
		});
		return displayedItems;
	}

	private async getSubscriptions() {
		try {
			const { data } = await this.client.httpRequest({ method: 'get', path: '/portal/subscriptions' });

			if (data.data.content === 0) {
				return `
                <div class="empty-state padding-y__30px">
                    <p>No subscription to show here</p>
                </div>`;
			}

			let html = '';
			data?.data?.content?.forEach((subscription: any) => {
				const eventTypes = this.getEventTypes(subscription.filter_config?.event_types);
				const td = `
                <tr class="has-border">
                    <td>
                        <div class="long-text long-text__300px">${subscription.name}</div>
                    </td>
                    <td>
                        <div class="long-text long-text__300px">${subscription.endpoint_metadata.target_url}</div>
                    </td>
                    <td>
                        <div>${this.getDate(subscription.created_at)}</div>
                    </td>
                    <td>
                        <div>${this.getDate(subscription.updated_at)}</div>
                    </td>
                    <td>
                        <div>${eventTypes}</div>
                    </td>
                    <td>
                        <div>
                            <span class="tag">${subscription.status}</span>
                        </div>
                    </td>
                </tr>`;
				html = html + td;
			});

			const subscriptionsTable = `
            <table class="table table__no-style subscriptions-table">
                <thead>
                    <tr class="table--head">
                        <th>Name</th>
                        <th>Endpoint</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Event Types</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${html}
                </tbody>
            </table>`;
			return subscriptionsTable;
		} catch (error) {
			console.log('🚀 ~ file: index.ts ~ line 20 ~ AppPortal ~ getEndPoints ~ error', error);
		}
	}

	private getEventTypes(eventTypes: string[]) {
		let html = '';
		eventTypes?.forEach(eventType => (html = html + '<span class="tag">' + eventType + '</span>'));
		return html;
	}

	testIt() {
		console.log('Testing');
	}

	private async getEvents(): Promise<{ events: string; eventId: string }> {
		try {
			const { data } = await this.client.httpRequest({ method: 'get', path: '/portal/events' });

			if (data.data.content === 0) {
				const html = `
                <div class="empty-state table--container">
                    <p>No event to show here</p>
                </div>`;
				return { events: html, eventId: '' };
			}

			const displayedData = this.setContentDisplayed(data.data.content);
			let tableItems = '';
			displayedData?.forEach((data: { date: any; content: any[] }, index: number) => {
				const i = index;
				const tdDate = `
                <tr class="table--date-row" id="eventsTableRow">
                    <td>
                        <div>${data.date}</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`;
				tableItems = tableItems + tdDate;

				data.content.forEach((event: any, index: number) => {
					const tdData = `
                    <tr class="${index === data.content.length - 1 ? 'last-item' : ''}" id="${'event' + i}">
                        <td>
                            <div>
                                <div class="tag tag--Neutral">${event.event_type}</div>
                            </div>
                        </td>
                        <td>
                            <div class="long-text long-text__150px">
                                <span class="underline color__primary">${event.app_metadata.name}$</span>
                            </div>
                        </td>
                        <td>
                            <div>${this.getDate(event.created_at)}</div>
                        </td>
                        <td>
                            <div>
                                <button class="button__clear button--has-icon icon-right">
                                    Deliveries
                                    <img src="assets/img/angle-arrow-right-primary.svg" alt="arrow right" />
                                </button>
                            </div>
                        </td>
                    </tr>`;
					tableItems = tableItems + tdData;
				});
			});

			const eventsTable = `
            <div class="table table--container">
                <table id="events-table">
                    <thead>
                        <tr class="table--head">
                            <th scope="col">Event Type</th>
                            <th scope="col">App Name</th>
                            <th scope="col">Time At</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableItems}
                    </tbody>
                </table>
            </div>`;

			return { events: eventsTable, eventId: data.data.content[0].uid };
		} catch (error) {
			console.log('🚀 ~ file: index.ts ~ line 20 ~ AppPortal ~ getEndPoints ~ error', error);
		}
	}

	private async getEventDeliveries() {
		try {
			const { data } = await this.client.httpRequest({ method: 'get', path: '/portal/eventdeliveries' });

			if (data.data.content === 0) {
				return `
                <div class="empty-state table--container">
                    <p>No event to show here</p>
                </div>`;
			}

			const displayedData = this.setContentDisplayed(data.data.content);
			let tableItems = '';
			displayedData?.forEach((data: { date: any; content: any[] }, index: number) => {
				const i = index;
				const tdDate = `
                <tr class="table--date-row">
                    <td>
                        <div>${data.date}</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>`;
				tableItems = tableItems + tdDate;

				data.content.forEach((event: any, index: number) => {
					const tdData = `
                    <tr class="${index === data.content.length - 1 ? 'last-item' : ''}" id="${'eventDel' + i}">
                        <td>
                            <div class="has-retry">
                                ${event.metadata.num_trials > event.metadata.retry_limit ? '<img *ngIf="" src="assets/img/retry-icon.svg" alt="retry icon" title="manually retried" />' : ''}
                                <div class="tag tag--${event.status}">${event.status}</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <div class="tag tag--Neutral">${event?.event_metadata?.event_type}</div>
                            </div>
                        </td>
                        <td>
                            <div>${event.metadata?.num_trials}</div>
                        </td>
                        <td>
                            <div>${event.metadata?.retry_limit}</div>
                        </td>
                        <td>
                            <div>${this.getDate(event.created_at)}</div>
                        </td>
                        <td>
                            <div>
                                <button
                                    disabled="${event.status !== 'Failure' && event.status !== 'Success'}"
                                    class="button__retry button--has-icon icon-left font__12px">
                                    <img src="assets/img/refresh-icon-primary.svg" alt="refresh icon" />
                                    ${event.status === 'Success' ? 'Force Retry' : 'Retry'}
                                </button>
                            </div>
                        </td>
                        <td class="width__5">
                            <div>
                                <button class="button__clear button--has-icon icon-right">
                                    <img src="assets/img/angle-arrow-right-primary.svg" alt="arrow right" />
                                </button>
                            </div>
                        </td>
                    </tr>`;
					tableItems = tableItems + tdData;
				});
			});

			const eventDeliveriesTable = `
            <div class="table table--container">
                <table id="events-table">
                    <thead>
                        <tr class="table--head">
                            <th scope="col">Status</th>
                            <th scope="col">Event Type</th>
                            <th scope="col">Attempts</th>
                            <th scope="col">Max Attempts</th>
                            <th scope="col">Time Created</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableItems}
                    </tbody>
                </table>
            </div>`;
			return eventDeliveriesTable;
		} catch (error) {
			console.log('🚀 ~ file: index.ts ~ line 20 ~ AppPortal ~ getEndPoints ~ error', error);
		}
	}

	private async getEventEventDeliveries(eventId: string) {
		try {
			const { data } = await this.client.httpRequest({ method: 'get', path: `/portal/eventdeliveries?eventId=${eventId}` });
			let htmlString = '';

			data.data.content?.forEach((delivery: any, index: number) => {
				const i = index;
				const listItem = `
                <li class="flex flex__align-items-center margin-top__16px border__bottom padding-bottom__10px">
                    <div class="margin-top__4px tag tag--${delivery.status}">${delivery.status}</div>
                    <div class="font__14px color__black margin-left__16px long-text long-text__300px" title="${delivery?.endpoint_metadata?.target_url}">
                        ${delivery.endpoint_metadata?.target_url}
                    </div>
                </li>`;
				htmlString = htmlString + listItem;
			});
			return htmlString;
		} catch (error) {
			console.log('🚀 ~ file: index.ts ~ line 20 ~ AppPortal ~ getEndPoints ~ error', error);
		}
	}
}
