## database 포트
## database 이름 자동으로 생성됨
## admin 계정 - > admin 계정만 가능

module.exports = ({ env }) => ({
	defaultConnection: 'default',
	connections: {
		default: {
			connector: 'mongoose',
			settings: {
				client: 'mongo',
	host: env('DATABASE_HOST', 'localhost'),
	port: env.int('DATABASE_PORT', 27017),
	database: env('DATABASE_NAME', 'cms'),
	username: env('DATABASE_USERNAME', 'admin'),
	password: env('DATABASE_PASSWORD', 'chao0116'),
	}.
	options: {
		authenticationDatabase: env('AUTHENTICATION_DATABASE'),
		ssl: env('DATABASE_SSL'),
		},
	},
},
});
