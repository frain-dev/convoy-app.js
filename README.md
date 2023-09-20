# Convoy App Portal JS SDK

This SDK enables you to you to extend visibility from your Convoy dashboard to your customer platform, enabling them to view their subscriptions, create new subscriptions, view events and deliveries, debug event delivery requests and responses, replay events, e.t.c.

Below are examples of to get started.

## Installation

You can install convoy-app.js by running the following command:

```bash
npm i convoy-app.js
```

Or preferrably through a CDN from [jsDelivr](https://www.jsdelivr.com/package/npm/convoy-app.js)

```
https://cdn.jsdelivr.net/npm/convoy-app.js@0.2.7/dist/bundle.js
```

## Usage

Convoy-app.js is compatible with all javascript frameworks and libraries. See instructions below.

Import/link convoy-app to project

```html
<script src="https://cdn.jsdelivr.net/npm/convoy-app.js@0.2.7/dist/bundle.js"></script>
```

Or

```js
import * as Convoy from 'convoy-app.js';
```

Or

```html
<script src="node_modules/convoy-app.js/dist/bundle.js"></script>
```

Now you need to initialize the convoy-app by providing your Convoy instance URL and app portal token (from your backend, [reference here](https://convoy.readme.io/reference/post_security-applications-appid-keys)).

Javascript

```js
const convoy = new Convoy({ uri: 'convoy instance url', api_key: 'app token from your backend' });
```

Typescript

```ts
declare const Convoy: any;

export class ConvoyExample {
	convoy: any;

	constructor() {
		this.convoy = new Convoy({ uri: 'convoy instance url', api_key: 'app token from your backend' });
	}
}
```

Now you can use convoy-app to render Convoy App Portal

```js
convoy.initAppPortal();
// You can optionally pass a DOM selector string, convoy-app uses #convoy-app by default
convoy.initAppPortal('#convoy-app');

// You can also use convoy app to prompt user to create a subscription alone
convoy.createSubscription();
// You can optionally pass a DOM selector string, convoy-app uses #convoy-create-sub by default
convoy.createSubscription('#convoy-create-sub');
```

Lastly, you need to add the repective selector elements to your HTML

```html
<!-- For app portal -->
<div id="convoy-app"></div>

<!-- For create subscription modal -->
<div id="convoy-create-sub"></div>
```

## Complete examples

### Vanilla Javascript

```html
<head>
	<script src="https://cdn.jsdelivr.net/npm/convoy-app.js@0.2.7/dist/bundle.js"></script>
	<!-- or -->
	<script src="node_modules/convoy-app.js/dist/bundle.js"></script>
</head>

<body>
	<!-- For app portal -->
	<div id="convoy-app"></div>

	<!-- For create subscription modal -->
	<div id="convoy-create-sub"></div>
	<body>
		<script>
			const convoy = new Convoy({ uri: 'convoy instance url', api_key: 'app token from your backend' });
			convoy.initAppPortal();
			convoy.createSubscription();
		</script>
	</body>
</body>
```

### Typescript Project

```html
<head>
	<script src="https://cdn.jsdelivr.net/npm/convoy-app.js@0.2.7/dist/bundle.js"></script>
	<!-- or -->
	<script src="node_modules/convoy-app.js/dist/bundle.js"></script>
</head>

<body>
	<!-- For app portal -->
	<div id="convoy-app"></div>

	<!-- For create subscription modal -->
	<div id="convoy-create-sub"></div>
	<body></body>
</body>
```

Your .ts file

```ts
declare const Convoy: any;

export class ConvoyExample {
	convoy: any;

	constructor() {
		this.convoy = new Convoy({ uri: 'convoy instance url', api_key: 'app token from your backend' });

		convoy.initAppPortal();
		convoy.createSubscription();
	}
}
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

-   [Frain](https://github.com/frain-dev)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
