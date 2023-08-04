const nodemailer=require("nodemailer")

const sendMail = async options =>{
    //here we create the transporter for forgot password link
    
      const transporter = nodemailer.createTransport({
         service: 'gmail',
        auth: {
          user:process.env.USER,
          pass:process.env.PASS
        }
      });

      //this mailoptions for the which messge want you to send the user

      const mailOptions = {
        from:process.env.USER,
        to: options.email,
        subject: 'Reset the password',
        text: options.message
      };
      //here is the catching error field
      
      transporter.sendMail(mailOptions, (error) => {
        if (error) {

          console.error('The mail doesnot send the user', error);
          return res.status(500).json({ error: 'mail doesnot send successfully' });
        }
        return res.status(200).json({ message: 'Email sent successfully' });
      });
}

module.exports=sendMail;