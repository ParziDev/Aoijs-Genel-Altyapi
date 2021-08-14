module.exports = {
name:"tavsiye-log",
code:`
$if[$message[1]==aç]
✔️ Tavsiye logu <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[tlog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;❗ bir kanal etiketlemelisin]
$endif
$if[$message[1]==kapat]
✔️ Tavsiye logu kapatıldı
$setServerVar[tlog;]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;❗ **aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;❗ Bunun için  yetkin yok]
`
}   
