module.exports = ({
name:"unban",
code:`$if[$getServerVar[modlog]==]
$else
$channelSendMessage[$getServerVar[modlog];{description:Banı kalkan üye: \`$usertag[$message[1]]\`
Banı kaldıran yetkili: \`$usertag\`}{color:$getServerVar[hex]}]
$endif
$unban[$message[1]]
$description[
Banı kalkan üye: \`$usertag[$message[1]]\`
Banı kaldıran yetkili: \`$usertag\`
]
$color[$getServerVar[hex]]
$onlyIf[$isNumber[$message[1]]!=false;:x: | Maalesef yazdığın şey bir sayı değil.]
$argsCheck[>1;:x: | Banlanan kişinin ID'sini yazmasılın.]
$onlyPerms[ban;:x: | **Bu komut için __Üyeleri Yasakla__ yetkin olması lazım.**]
$onlyBotPerms[ban;:x: | **Bu komut için __Üyeleri Yasakla__ yetkimin olması lazım.**]
$suppressErrors[:x: | Böyle bir ID'li kullanıcı yok.]
`})
