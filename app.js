var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");

var app = express();
var server = http.createServer(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "index.html")));
app.use(express.static("page"));

// Routing
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/send_email", function (req, res) {
  const { from, subject, message } = req.body;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nehemiedaanon28@gmail.com", // Your email
      pass: "owdnhdexxyyzgxzx", // App password (NOT your email password)
    },
  });

  var mailOptions = {
    from: from, // Sender email from form
    to: "nehemiedaanon28@gmail.com", // Your email (receiver)
    subject: subject, // Email subject from form
    text: `From: ${from}\n\nMessage: ${message}`, // Message body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ message: "Email sent successfully!" });
    }
  });
});

// Initialize Web Server
server.listen(port, function () {
  console.log("Server listening on port " + port);
});
