const data = require("./db.js");
const axios = require('axios');
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const fs = require('fs')
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.listen(port);

// setInterval(() => {
//     let data = JSON.stringify({
//         "pass": "xd"
//       });
      
//       let config = {
//               method: 'get',
//               url: 'https://moonbox-api.vercel.app/mugs/2',
//               headers: { 
//                       'Content-Type': 'application/json'
//               },
//               data : data
//       };
      
//       axios(config)
//       .then((response) => {
//         const today = new Date().toLocaleString();
//               console.log("Conected " + today);
//       })
//       .catch((error) => {
//               console.log(error);
//       });
      
// }, 60000);

server.get('/mugs/reset', (req, res) => {
    let dbBackup = [
        {
          "id": 1,
          "name": "Dragon Ball Super",
          "sub_name": "Goku Ultra Instict",
          "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
          "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
          "type": "Magic",
          "price": 6.25
        },
        {
          "id": 2,
          "name": "Dragon Ball Super",
          "sub_name": "Goku Ultra Instict",
          "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
          "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
          "type": "Magic",
          "price": 6.25
        },
        {
          "id": 3,
          "name": "Dragon Ball Super",
          "sub_name": "Goku Ultra Instict",
          "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
          "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
          "type": "Magic",
          "price": 6.25
        },
        {
          "id": 4,
          "name": "Dragon Ball Super",
          "sub_name": "Goku Ultra Instict",
          "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
          "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
          "type": "Magic",
          "price": 6.25
        }
      ];
    
    const pass = req.query.pass;
    res.status(200).json("BD reset...");
    // if (true) {
    //     dbBackup = JSON.stringify(dbBackup);
    //     fs.writeFileSync('./data/mugs.json', dbBackup);
    //     res.status(200).json("BD reset...");
    // } else {
    //     res.status(400).json("error in admin pass...");
    // }
})
