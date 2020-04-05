const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const url = req.url;
    if (url === '' || url === '/') {
        res.write(`
            <div>
            <h1>Home Page!</h1>
                <button onclick="window.location = '/login'">LogOut</button>
            </div>
        `);
        res.end();
    } else if (url === '/login') {
        res.write(`
            <div>
            <h1>Login Page!</h1>
                <button onclick="window.location = '/'">LogIn</button>
            </div>
        `);
        res.end();
    } else {
        res.write(`
            <div>
            <h1>404 Page!</h1>
                <button onclick="window.location = '/'">Take me Home!</button>
            </div>
        `);
        res.end();
    }
}).listen(process.env.PORT, () => console.log('I am running at port ', process.env.PORT));
