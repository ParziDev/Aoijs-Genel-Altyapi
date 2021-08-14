module.exports = ({
name:"kick",
aliases:['at'],
code:`
$channelSendMessage[$getServerVar[modlog];{description:Atılan üye: \`$usertag[$replaceText[$replaceText[$replaceText[$replaceText[$message;<;;-1];@;;-1];>;;-1];!;;]]\`
Atan yetkili: \`$usertag\`
Sebebi: \`$replaceText[$noMentionMessage;;Sebep Belirtilmemiş;-1]\`}{color:$getServerVar[hex]}]

$kick[[$replaceText[$replaceText[$replaceText[$replaceText[$message;<;;-1];@;;-1];>;;-1];!;;]]
$description[
Atılan üye: \`$usertag[$replaceText[$replaceText[$replaceText[$replaceText[$message;<;;-1];@;;-1];>;;-1];!;;]]\`
Atan yetkili: \`$usertag\`
Sebebi: \`$replaceText[$noMentionMessage;;Sebep Belirtilmemiş;-1]\`]
$color[$getServerVar[hex]] 
$argsCheck[>1; :x: | Birini etiketlemelisin.]
$onlyPerms[kick;:x: | **Bu komut için __Üyeleri At__ yetkin olması lazım.**]
$onlyBotPerms[kick;:x: | **Bu komut için __Üyeleri At__ yetkimin olması lazım.**]
$supperssError
`})//knk yardım menüsüne emoji koyakmı Zero Two da
