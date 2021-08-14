module.exports = ({
  name:"trump",
  code:`
  $color[$getServerVar[hex]]
  $deletecommand
 $title[Trump Tweet]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]]
$footer[Kullanıcı:$username[$authorID]#$discriminator[$authorID]]
$argsCheck[>1;Lütfen en az bir kelime yazın]
  $onlyIf[$message!=;❎ | Bir Şeyler Yaz.]`
})
