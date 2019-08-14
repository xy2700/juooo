const proxy = require('http-proxy-middleware');

module.exports = function (app) {
// http://localhost:3000/login?name=haha&yes=sada
	var userInfo = [];
	app.get("/login", (req, res) => {
		console.log()
		userInfo.push(req.query)
		res.send("OK1");
	})
	// http://localhost:3000/getUserInfo
	app.get("/getUserInfo", (req, res) => {
		res.status(200);
		res.json(userInfo);
	})
	app.use(proxy('/api', {
		target: 'https://api.douban.com',
		changeOrigin: true,
		pathRewrite: {
			'^/api': ''
		}
	}));
};