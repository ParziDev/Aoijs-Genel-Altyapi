module.exports = ({
name:"myetkili",
code:`
$if[$message[1]==ayarla]
$setServerVar[myetkili;$mentionedRoles[1]]
$description[Mute yetkili rolü <@&$mentionedRoles[1]> olarak ayarlandı.]
$color[$getServerVar[hex]]
$onlyIf[$mentionedRoles[1]!=;:x: | Bir rol etiketlemelisin]
$endif
$if[$message[1]==sıfırla]
$setServerVar[myetkili;]
$description[Mute yetkili rolü sıfırlandı.]
$color[$getServerVar[hex]]
$endif
$onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
`})
