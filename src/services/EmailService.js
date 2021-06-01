const nodemailer = require('nodemailer');

module.exports = async ({ to, from, subject, output, error, success }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.umbler.com',
      port: 587,
      secure: false,
      auth: {
        user: 'contato@gadonamao.com.br',
        pass: '@contatomictmr21'
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true, // show debug output
      logger: true // log information in console
    });

    const mailOptions = {
      from,
      to,
      subject,
      text: '',
      html: output // Corpo do email
    };

    // verify connection configuration
    transporter.verify(function (err, success) {
      if (err) {
        console.log(err);
        return error({ error: err, status: 401 });
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return error({ error: err, status: 401 });
      }
      console.log('Mensagem enviada: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      return success({
        message: `Email enviado com sucesso ${info.messageId} info ${info}`,
        previewUrl: nodemailer.getTestMessageUrl(info)
      });
    });
  } catch (err) {
    console.log(err);
    return error({ error: err, status: err.status || 500 });
  }
};
