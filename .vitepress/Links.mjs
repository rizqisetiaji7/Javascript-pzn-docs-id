export const SIDEBAR_LINKS = {
	'/oop/': {
		text: 'JavaScript OOP',
		items: [
			{ text: 'Agenda Belajar', link: '/oop/' },
			{ text: 'Pengenalan OOP', link: '/oop/pengenalan-oop' },
			{ text: 'Membuat Object', link: '/oop/create-object' },
			{
				text: 'Constructor',
				collapsed: false,
				items: [
					{ text: 'Constructor Function', link: '/oop/constructor-function' },
					{ text: 'Const. Function Param', link: '/oop/constructor-function-param' },
					{ text: 'Constructor Inheritance', link: '/oop/constructor-inheritance' },
				]
			},
			{ text: 'Prototype', link: '/oop/prototype' },
			{ text: 'Prototype Inheritance', link: '/oop/prototype-inheritance' },
			{
				text: 'Class',
				collapsed: false,
				items: [
					{ text: 'Class Keyword', link: '/oop/class-keyword' },
					{ text: 'Class Constructor', link: '/oop/class-constructor' },
					{ text: 'Class Property', link: '/oop/class-property' },
					{ text: 'Class Method', link: '/oop/class-method' },
					{ text: 'Class Inheritance', link: '/oop/class-inheritance' },
					{ text: 'Class Super Constructor', link: '/oop/class-super-constructor' },
					{ text: 'Class Super Method', link: '/oop/class-super-method' },
					{ text: 'Class Getter Setter', link: '/oop/class-getter-setter' },
					{ text: 'Class Public Field', link: '/oop/class-public-field' },
					{ text: 'Class Private Field', link: '/oop/class-private-field' },
					{ text: 'Class Private Method', link: '/oop/class-private-method' },
				]
			},
			{ text: 'Operator Instanceof', link: '/oop/operator-instanceof' },
			{ text: 'Static Field', link: '/oop/static-field' },
			{ text: 'Static method', link: '/oop/static-method' },
			{ text: 'Error', link: '/oop/error' },
			{ text: 'Error Handling', link: '/oop/error-handling' },
			{ text: 'Class Error Manual', link: '/oop/class-error-manual' },
			{ text: 'Iterable & Iterator', link: '/oop/iterable-iterator' },
		]
	},

	'/standard-library/': {
		text: 'JavaScript Standard Library',
		items: [
			{ text: 'Agenda', link: '/standard-library/' },
			{ 
				text: 'Number', 
				collapsed: false,
				items: [
					{ text: 'Intro: Number', link: '/standard-library/number' },
					{ text: 'Number Static Property', link: '/standard-library/number-static-property' },
					{ text: 'Number Static Method', link: '/standard-library/number-static-method' },
					{ text: 'Number Instance Method', link: '/standard-library/number-instance-method' },
				] 
			},
			{
				text: 'String',
				collapsed: false,
				items: [
					{ text: 'Intro: String', link: '/standard-library/string' },
					{ text: 'Instance Method & Property', link: '/standard-library/string-instance-method-and-property' },
				]
			},
			{ 
				text: 'Array', 
				collapsed: false,
				items: [
					{ text: 'Intro: Array', link: '/standard-library/array' },
					{ text: 'Array Loop', link: '/standard-library/array-loop' },
					{ text: 'Array Queue', link: '/standard-library/array-queue' },
					{ text: 'Array Stack', link: '/standard-library/array-stack' },
					{ text: 'Array Search', link: '/standard-library/array-search' },
					{ text: 'Array Filter', link: '/standard-library/array-filter' },
					{ text: 'Array Transform', link: '/standard-library/array-transform' },
				] 
			},
			{
				text: 'Object',
				collapsed: false,
				items: [
					{ text: 'Intro: Object', link: '/standard-library/object' },
					{ text: 'Object Freeze & Seal', link: '/standard-library/object-freeze-and-seal' },
					{ text: 'Object Assign', link: '/standard-library/object-assign' },
					{ text: 'Object Property Name & Value', link: '/standard-library/object-property-name-and-value' },
				]
			},
			{
				text: 'JavaSript Object Notation',
				collapsed: false,
				items: [
					{ text: 'Intro: JSON', link: '/standard-library/json-intro' },
					{ text: 'JSON', link: '/standard-library/json' },
				]
			},
			{
				text: 'Date',
				collapsed: false,
				items: [
					{ text: 'Intro: Date', link: '/standard-library/date' },
					{ text: 'Epoch & UNIX Timestamp', link: '/standard-library/epoch-unix-timestamp' },
					{ text: 'Date Parsing', link: '/standard-library/date-parsing' },
					{ text: 'Date Getter & Setter', link: '/standard-library/date-getter-and-setter' },
				]
			},
			{ text: 'BigInt', link: '/standard-library/bigint' },
			{ text: 'Math', link: '/standard-library/math' },
			{ text: 'Boolean', link: '/standard-library/boolean' },
			{ text: 'Map', link: '/standard-library/map' },
			{ text: 'Set', link: '/standard-library/set' },
			{ text: 'Symbol', link: '/standard-library/symbol' },
			{ text: 'RegExp', link: '/standard-library/regexp' },
			{ text: 'Proxy', link: '/standard-library/proxy' },
			{ text: 'Reflect', link: '/standard-library/reflect' },
			{ text: 'Encode', link: '/standard-library/encode' },
			{ text: 'Base64', link: '/standard-library/base64' },
			{ text: 'Eval', link: '/standard-library/eval' },
		]
	},

	'/javascript-modules/': {
		text: 'JavaScript Modules',
		items: [
			{ text: 'Agenda', link: '/javascript-modules/' },
		]
	},

	'/dom/': {
		text: 'JavaScript DOM',
		items: [
			{ text: 'Intro', link: '/dom/' },
			{ text: 'Document Object Model', link: '/dom/document-object-model' },
			{ text: 'Document',  link: '/dom/document' },
			{ text: 'Node',  link: '/dom/node' },
			{ text: 'Element',  link: '/dom/element' },
			{ text: 'Create Element',  link: '/dom/create-element' },
			{ text: 'NodeList',  link: '/dom/nodelist' },
			{ text: 'Attribute',  link: '/dom/attribute' },
			{ text: 'NamedNodeMap',  link: '/dom/named-node-map' },
			{ text: 'Text Node',  link: '/dom/text-node' },
			{ text: 'Event Handler', link: '/dom/event-handler' },
			{ text: 'Event Target', link: '/dom/event-target' },
			{ text: 'Global Event Handler', link: '/dom/global-event-handler' },
			{ text: 'Event', link: '/dom/event' },
			{ text: 'Style', link: '/dom/style' },
			{ text: 'InnerText', link: '/dom/inner-text' },
			{ text: 'InnerHTML', link: '/dom/inner-html' },
			{ text: 'Window', link: '/dom/window' },
			{ text: 'QuerySelector', link: '/dom/queryselector' },
			{ text: 'Node Type', link: '/dom/node-type' },
			{ text: 'HTML Element', link: '/dom/html-element' },
			{ text: 'HTML Form Element', link: '/dom/html-form-element' },
			{ text: 'HTML Form Name', link: '/dom/html-form-name' },
			{ text: 'HTML Table Element', link: '/dom/html-table-element' },
		]
	},
	
	'/async/': {
		text: 'JavaScript Async',
		items: [
			{
				text: 'Intro',
				items: [
					{ text: 'Agenda Belajar', link: '/async/' },
					{ text: 'Pengenalan Async', link: '/async/intro/async-introduction' },
					{ text: 'Async method setTimeout()', link: '/async/intro/settimeout' },
					{ text: 'Async method setInterval()', link: '/async/intro/setinterval' },
				]
			},
			{
				text: 'AJAX',
				collapsed: false,
				items: [
					{ text: 'Definisi AJAX', link: '/async/ajax/definisi-ajax' },
					{ text: 'Response Status', link: '/async/ajax/response-status' },
					{ text: 'AJAX State', link: '/async/ajax/state' },
					{ text: 'Mengirim Data', link: '/async/ajax/send-data' },
					{ text: 'URL Search Params', link: '/async/ajax/url-search-params' },
					{ text: 'Form Data', link: '/async/ajax/form-data' },
					{ text: 'Upload File', link: '/async/ajax/upload-file' },
				]
			},
			{
				text: 'Promise',
				collapsed: false,
				items: [
					{ text: 'Definisi Promise', link: '/async/promise/definisi-promise' },
					{ text: 'Promise Method', link: '/async/promise/promise-method' },
					{ text: 'Promise Static Method', link: '/async/promise/static-method' },
				]
			},
			{
				text: 'Fetch API',
				collapsed: false,
				items: [
					{ text: 'Definisi Fetch API', link: '/async/fetch-api/definisi-fetch-api' },
					{ text: 'Request Object', link: '/async/fetch-api/request' },
					{ text: 'Response Object', link: '/async/fetch-api/response' },
				]
			},
			{
				text: 'Async Await',
				collapsed: false,
				items: [
					{ text: 'Definisi Async Await', link: '/async/async-await/definisi-async-await' },
					{ text: 'Async', link: '/async/async-await/async' },
					{ text: 'Await', link: '/async/async-await/await' },
					{ text: 'Error Handling', link: '/async/async-await/error-handling' },
				]
			},
			{
				text: 'Web Worker',
				collapsed: false,
				items: [
					{ text: 'Javascript Thread', link: '/async/web-worker/thread' },
					{ text: 'Definisi Web Worker', link: '/async/web-worker/definisi-web-worker' },
					{ text: 'Worker Object', link: '/async/web-worker/worker-object' },
				]
			},
		]
	},
	'/references/': [
		{
			text: 'Referensi',
			link: '/references/'
		}
	]
}


export const NAV_LINKS = [
	{ text: 'Web API', link: 'https://developer.mozilla.org/en-US/docs/Web/API' },
	{ text: 'Docs', link: '/docs' },
	{ 
		text: 'Materi', 
		items: [
			{ text: 'JavaScript OOP', link: '/oop/' },
			{ text: 'JavaScript Std. Library', link: '/standard-library/' },
			{ text: 'JavaScript Modules', link: '/js-modules/' },
			{ text: 'JavaScript DOM', link: '/dom/' },
			{ text: 'JavaScript Async', link: '/async/' },
		],
	},
	{ text: 'Referensi', link: '/references' }
]

export const SOCIAL_LINKS = [
	{ icon: 'github', link: 'https://github.com/rizqisetiaji7/Javascript-pzn-docs-id' }
]