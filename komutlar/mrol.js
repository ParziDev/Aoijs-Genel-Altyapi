module.exports = ({
name:"mrol",
code:`$if[$message[1]==ayarla]
$setServerVar[mrol;$mentionedRoles[1]]
$description[Mute rolü <@&$mentionedRoles[1]> olarak ayarlandı.]
$color[$getServerVar[hex]] 
$onlyIf[$mentionedRoles[1]!=;:x: | Bir rol etiketlemelisin]
$endif
$if[$message[1]==sıfırla]
$setServerVar[mrol;]
$description[Mute rolü sıfırlandı.]
$color[$getServerVar[hex]] 
$endif
$onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
`})
