module.exports = {
name:"emoji-koruma",
code:`
$if[$message[1]==aç]
:white_check_mark: Emoji koruma logu <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[eklog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;:warning: Bir kanal etiketle]
$onlyIf[$getServerVar[eklog]==;:warning: Emoji koruma zaten ayarlanmış]
$endif
$if[$message[1]==kapat]
:white_check_mark: Emoji koruma kapatıldı
$setServerVar[eklog;]
$onlyIf[$getServerVar[eklog]!=;:warning: Emoji koruma zaten ayarlanmamış]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;:warning: **aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;:warning: Bunun için **Yönetici** iznin olmalı]
`
}   


