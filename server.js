const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');


app.use(bodyParser.json());

let data = {
	homeLogo: "cowboys",
	homeColor: "#04254f",
	awayLogo: "chiefs",
	awayColor: "#e41a37"
}


app.get('/', (req, res)=>{
	res.json(data)
});



port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('listening....');
});
