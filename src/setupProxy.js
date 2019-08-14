const proxy = require('http-proxy-middleware');

// 所有http请求都会从这个中间件过
module.exports =function (app){
    // http://localhost:3000/login?name=haha&yes=sada
	var userInfo = [{
        username: 'admin',
        password: '123456',
    }];
	app.get("/login", (req, res) => {
        console.log(req.query.data)
        var user=JSON.parse(req.query.data)
        //userInfo.push(req.query)
        userInfo.forEach((item)=>{
            console.log(item.password)
            if(user.username==item.username && user.password==item.password){
                res.send({"msg":"登录成功","data":item});
                return
            }
        })
        res.send({"msg":"登录失败"});
    })
    app.get("/regist", (req, res) => {
        var user=JSON.parse(req.query.data)
        userInfo.forEach((item)=>{
            console.log(item.password)
            if(user.username==item.username){
                res.send({"msg":"该用户已注册"});
                return
            }
        })
        userInfo.push(user)
        res.send({"msg":"注册成功"});
	})
	// http://localhost:3000/getUserInfo
	app.get("/getUserInfo", (req, res) => {
		res.status(200);
		res.json(userInfo);
	})
    app.use(proxy('/apis',{
        // 需要代理的主机
        target: 'https://m.juooo.com',
        // 是否跨域
        changeOrigin: true,
        //代理完成将url复写
        pathRewrite:{
            "^/apis":""
        }
    }))
}

// https://m.juooo.com