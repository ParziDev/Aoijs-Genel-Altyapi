module.exports = ({
  name:"biden",
  code:`$argsCheck[>1;Lütfen en az bir kelime yazın]
  $onlyIf[$message!=;❎ | Bir Şeyler Yaz.]
$color[$getServerVar[hex]]
$deletecommand
$title[Biden Tweet]
$image[https://gofaizen.sirv.com/Joe%20Biden%20Tweet.jpeg?w=900&h=900&text.0.text=$replaceText[$message; ;+;-1]&text.0.position.x=-74%25&text.0.position.y=-67%25&text.0.size=24&text.0.color=000000&text.0.font.weight=700]
$footer[Kullanıcı:$username[$authorID]#$discriminator[$authorID]]`
})
