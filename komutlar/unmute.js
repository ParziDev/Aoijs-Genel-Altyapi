module.exports = ({
name:"unmute",
code:`$if[$getServerVar[modlog]==]
$else
$channelSendMessage[$getServerVar[modlog];{description:Susturulması kaldırılan kişi: \`$usertag[$mentioned[1]]\`
Susturmayı kaldıran yetkili: \`$usertag\`}{color:$getServerVar[hex]}]
$endif

$takeRole[$mentioned[1];$getServerVar[mrol]]
$description[Susturulması kaldırılan kişi: \`$usertag[$mentioned[1]]\`
Susturmayı kaldıran yetkili: \`$usertag\`
]
$color[$getServerVar[hex]]
$onlyIf[$mentioned[1]!=;:x: | Birini etiketlemelisin]
$argsCheck[>1;:x: | Birini etiketlemelisin.]
$onlyIf[$hasRole[$authorID;$getServerVar[myetkili]]!=false;:x: | $roleName[$getServerVar[myetkili]] rolün yok.]
$onlyIf[$hasPerms[$clientID;manageroles]!=false;:x: | Rolleri yönet yetkim yok.]
$onlyIf[$getServerVar[mrol]!=;Mute rol ayarlanmamış.]
$onlyIf[$getServerVar[myetkili]!=;:x: | Mute yetkili rol ayarlanmamış.]
`})
