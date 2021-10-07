var express = require("express");
var path = require("path");
var app = express();

// 開発環境のエンドポイント基底
const devPath = "/dev";
// 本番環境のエンドポイント基底
const productPath = "/product";

// 開発環境用ファイルパス
const __devDir = "./resources/dev";
// 本番環境用ファイルパス
const __productDir = "./resources/product";

var server = app.listen("3000", function () {
  console.log("Listening to PORT --> " + server.address().port);
});

// dev/test_doc.doc
app.get(`${devPath}/test_doc`, function (req, res, next) {
  res.contentType("application/msword");
  res.sendFile(path.join(__dirname, `${__devDir}/test_doc.doc`));
});

// product/test_doc.doc
app.get(`${productPath}/test_doc`, function (req, res, next) {
  res.contentType("application/msword");
  res.sendFile(path.join(__dirname, `${__productDir}/test_doc.doc`));
});