## 포트번호 설정
module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	admin: {
		auth: {
			secret: env('ADMIN_JWT_SECRET', '9fc2c14f76222866032bcd81bac784e9'),
		},
	},
});
		
