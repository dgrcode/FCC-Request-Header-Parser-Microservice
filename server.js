//"use strict";
const express = require("express");

const app = express();

app.get('/api/whoami', (req, res) => {
    //console.dir(req.headers);
    let ipaddress = req.ip.split(':');
    ipaddress = ipaddress[ipaddress.length - 1];
    let language = req.headers["accept-language"].split(',')[0];
    let software = req.headers["user-agent"];
    software = software.match(/\(([^()]*)\)/)[1];

    let result = {
        ipaddress,
        language,
        software
    };

    res.end(JSON.stringify(result));
});

app.listen(process.env.PORT);
console.log('App listening on port ' + process.env.PORT);

module.exports = app; // for testing