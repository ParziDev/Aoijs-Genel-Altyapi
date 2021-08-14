module.exports = ({
name:"ban",
code:`$if[$getServerVar[modlog]==]
$else
$channelSendMessage[$getServerVar[modlog];{description:Banlanan üye: : \`$usertag[$replaceText[$replaceText[$replaceText[$replaceText[$message;<;;-1];@;;-1];>;;-1];!;;]]\`
Banlayan yetkili: \`$usertag\`
Sebebi: \`$replaceText[$noMentionMessage;;Sebep Belirtilmemiş;-1]\`}{color:$getServerVar[hex]}]
$endif
$ban[$replaceText[$replaceText[$replaceText[$replaceText[$message;<;;-1];@;;-1];>;;-1];!;;];$replaceText[$noMentionMessage;;Sebep Belirtilmemiş;-1]]
$description[
Banlanan üye: \`$usertag[$replaceText[$replaceText[$replaceText[$replaceText[$message;<;;-1];@;;-1];>;;-1];!;;]]\`
Banlayan yetkili: \`$usertag\`
Sebebi: \`$replaceText[$noMentionMessage;;Sebep Belirtilmemiş;-1]\`]
$color[$getServerVar[hex]]
$argsCheck[>1;:x: | Birini etiketlemelisin.]
$onlyPerms[ban;:x: | **Bu komut için __Üyeleri Yasakla__ yetkin olması lazım.**]
$onlyBotPerms[ban;:x: | **Bu komut için __Üyeleri Yasakla__ yetkimin olması lazım.**]
$suppressErrors`})
