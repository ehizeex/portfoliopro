const router = require('express').Router();
const nodemailer = require('nodemailer');


router.post('/contact',(req,res)=>{
    let data = req.body
    if(data.name.length===0 || data.email.length===0 || data.message.length===0){
        return res.json({msg: "please fill all the fields"})
    }
    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail', /* Gmail */
        port: 465,
        auth: {
            // type: "OAuth2",
            user: 'laya.blue4@gmail.com',
            // pass:'idujapxvnayhhrkj',
            pass:'enlixtlbtsgwgtwz',
//             clientId: process.env.OAUTH_CLIENTID,
//    clientSecret: process.env.OAUTH_CLIENT_SECRET,
//    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    });
    let mailOptions = {
        from: data.email,
        to :'laya.blue4@gmail.com',
        subject:`message from ${data.name}`,
        html: `
        <h3>Informations</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>
        ${data.message}
        </p>
        `
    }
    smtpTransporter.sendMail(mailOptions,(error)=>{
        try{
            if(error)
                return res.status(400).json({msg:"Please fill all the fields"})
            res.status(200).json({msg:"Thank you for contacting Laya"})
        }catch(error){
            if(error) return res.status(500).json({msg:"There is server error"})

        }
    });

})

module.exports = router