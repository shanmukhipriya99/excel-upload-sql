const fs = require('fs'); 
const express = require('express');
const connection = require('../db/db');
const multer = require('multer');
const readXlsxFile = require('read-excel-file/node');
const router = new express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       cb(null, '/uploads/')
    },
    filename: (req, file, cb) => {
       cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
  });

  const upload = multer({storage: storage});

router.post('/upload', upload.single('file'), (req, res) => {
    
});