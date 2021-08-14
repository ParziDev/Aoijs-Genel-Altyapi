module.exports = ({
  name:"rte",
  code:`
  $color[$getServerVar[hex]]
  $deletecommand
  $title[RTE Tweet]
  $image[https://cherrabl.sirv.com/twit.png?text.0.text=$replaceText[$message; ;%20;-1]&text.0.position.gravity=west&text.0.position.x=13%25&text.0.size=60&text.0.color=000000]
  $footer[Kullanıcı:$username[$authorID]#$discriminator[$authorID]]
  $argsCheck[>1;Lütfen en az bir kelime yazın]
   $onlyIf[$message!=;❎ | Bir Şeyler Yaz.]
`
  })
