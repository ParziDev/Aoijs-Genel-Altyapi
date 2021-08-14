module.exports = ({
name:"mute",//knk yardım menüsüne emoji koyakmı Zero Two da
code:`$if[$getServerVar[modlog]==]
$else
$channelSendMessage[$getServerVar[modlog];{description:Susturulan kişi: \`$usertag[$mentioned[1]]\`
Susturan yetkili: \`$usertag\`
Sebebi: $replaceText[\`$noMentionMessage\`;\`\`;\`Hiç bir sebep belirtilmemiş.\`]}{color:$getServerVar[hex]}]
$endif
$giveRole[$mentioned[1];$getServerVar[mrol]]
$description[
Susturulan kişi: \`$usertag[$mentioned[1]]\`
Susturan yetkili: \`$usertag\`
Sebebi: $replaceText[\`$noMentionMessage\`;\`\`;\`Hiç bir sebep belirtilmemiş.\`]
]
$color[$getServerVar[hex]]
$argsCheck[>1;:x: | Birini etiketlemelisin.]
$onlyIf[$hasRole[$authorID;$getServerVar[myetkili]]!=false;:x: | $roleName[$getServerVar[myetkili]] rolün yok.]
$onlyIf[$hasPerms[$clientID;manageroles]!=false;:x: | Rolleri yönet yetkim yok.]
$onlyIf[$getServerVar[mrol]!=;:x: | Mute rol ayarlanmamış.]
$onlyIf[$getServerVar[myetkili]!=;:x: | Mute yetkili rol ayarlanmamış.]
`})
