module.exports = ({
name:"qr",
code:`$argsCheck[<21;21 Kelimeden Fazla Yazamazsın!]
$title[QR KOD OLUŞTURUCUSU]
$image[https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=000&bgcolor=fff&margin=30&data=$replaceText[$message; ;+;-1]]
$color[FF0000]
$argsCheck[>1;Bir Mesaj Yaz!]
$footer[$username Tarafından İstendi]
$addTimestamp
$deletecommand`
})
