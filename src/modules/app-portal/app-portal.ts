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

const appPortal = `<div class="dashboard-page">
    <div class="dashboard--page--head margin-buttom__20px">
        <h3 class="margin-bottom__10px">Endpoints</h3><button class="button button__primary button__small"></button>
    </div>
    <div class="dashboard-page--details">
        <div class="card has-title dashboard-page--endpoints">
            <table class="table table__no-style">
                <thead>
                    <tr class="table--head">
                        <th>Endpoint URL</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Endpoint Events</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="has-border">
                        <td class="has-long-text longer">
                            <div>https://google.com</div>
                        </td>
                        <td>
                            <div>12th May, 2020</div>
                        </td>
                        <td>
                            <div>18th Feb, 2020</div>
                        </td>
                        <td>
                            <div class="flex flex__wrap">
                                <div class="tag">events</div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <div class="tag">active</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="empty-state">
                <p>No endpoints to show here</p>
            </div>
        </div>
    </div>
    <section class="card has-title dashboard--logs">
        <div class="dashboard--logs--tabs">
            <div class="tabs">
                <li><button><span>events</span></button></li>
                <li><button><span>event deliveries</span></button></li>
            </div>
        </div>
        <div class="flex">
            <div class="dashboard--logs--table">
                <div class="table table--container">
                    <table id="events-table">
                        <thead>
                            <tr class="table--head">
                                <th scope="col">Event Type</th>
                                <th scope="col">App Name</th>
                                <th scope="col">Created At</th>
                                <th scope="col"></th>
                            </tr>
                            <tr class="table--date-row">
                                <td>
                                    <div>19th May, 2020</div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div class="tag">payment.success</div>
                                    </div>
                                </td>
                                <td class="has-long-text">
                                    <div>Event Title</div>
                                </td>
                                <td>
                                    <div>12th May, 2020</div>
                                </td>
                                <td>
                                    <div><button class="button button__clear button--has-icon">Deliveries</button></div>
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <div class="table--load-more button--container center"><button class="button button__clear button--has-icon icon-left margin-top__20px margin-bottom__24px flex__justify-center">Load more</button></div>
                </div>
                <div class="empty-state table--container">
                    <p>No event to show here</p>
                </div>
            </div>
            <div class="dashboard--logs--details">
                <h3>Details</h3>
                <ul class="dashboard--logs--details--meta">
                    <li class="list-item-inline">
                        <div class="list-item-inline--label">IP Address</div>
                        <div class="list-item-inline--item color">1234.443.332</div>
                    </li>
                    <li class="list-item-inline">
                        <div class="list-item-inline--label">HTTP Status</div>
                        <div class="list-item-inline--item color">200 OK</div>
                    </li>
                    <li class="list-item-inline">
                        <div class="list-item-inline--label">API Version</div>
                        <div class="list-item-inline--item color">12-02-2020</div>
                    </li>
                    <li class="list-item-inline">
                        <div class="list-item-inline--label">Endpoint</div>
                        <div class="list-item-inline--item color">http://google.com</div>
                    </li>
                    <li class="list-item-inline">
                        <div class="list-item-inline--label">Next Retry</div>
                        <div class="list-item-inline--item color">12-02-2020</div>
                    </li>
                    <li class="list-item-inline">
                        <div class="list-item-inline--label">App Name</div>
                        <div class="list-item-inline--item color">Number One</div>
                    </li>
                </ul>
                <ul class="tabs tabs__logs">
                    <li><button>Event</button></li>
                    <li><button>Response</button></li>
                    <li><button>Request</button></li>
                </ul>
                <div class="dashboard--logs--details--req-res">
                    <div class="dashboard--logs--details--tabs-data">
                        <h4>Event</h4>
                    </div>
                    <div class="dashboard--logs--details--tabs-data">
                        <h4>Header</h4>
                        <h4>Body</h4>
                    </div>
                    <div class="dashboard--logs--details--tabs-data">
                        <h4>Header</h4>
                    </div>
                </div>
                <h4>Deliveries Overview</h4>
                <ul class="dashboard--logs--details--endpoints inline">
                    <li>
                        <div class="tag tag--Success">Success</div>
                        <div class="url">http://google.com</div>
                    </li>
                    <li>
                        <div class="tag tag--Success">Success</div>
                        <div class="url">http://google.com</div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</div>`;
