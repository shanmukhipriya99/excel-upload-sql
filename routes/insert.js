const express = require('express');
const connection = require('../db/db');
const multer = require('multer');
const readXlsxFile = require('read-excel-file/node');
const router = new express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       cb(null, './uploads') 
    },
    filename: (req, file, cb) => {
       cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
  });

  const upload = multer({storage: storage});

router.post('/upload', upload.single('file'), (req, res) => {
   //  console.log(req.file.path);
    readXlsxFile(req.file.path).then((rows) => {
       rows.shift();
      //  console.log(rows);
       let query = "INSERT INTO customer (sno, name, age) VALUES ?";
       connection.query(query, [rows], (err, result) => {
          if(err) {
            console.log("err");
             res.status(500).send(err);
          } else {
             res.status(201).send("Excel sheet uploaded");
          }
       });
    });
});

module.exports = router;