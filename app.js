const express = require('express');
const {AlgebraicCaptcha} = require('algebraic-captcha');
var cors = require('cors')
var svgCaptcha = require('ppfun-captcha');
const app = express();
app.use(cors())

const algebraicCaptcha = new AlgebraicCaptcha({});
  
app.get('/captcha/1', async (req, res) => {
    const {image, answer} = await algebraicCaptcha.generateCaptcha();
    res.status(200).send({
        'image':image,
        'answer':answer
    });
});

app.get('/captcha/2', async (req, res) => {
    const {text, data} = svgCaptcha.create({
        "width":250,
        "height":150
    });
    res.status(200).send({
        'image':data,
        'answer':text
    });
    });
 
app.listen(3001);