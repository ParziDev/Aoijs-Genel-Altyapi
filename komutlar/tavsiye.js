module.exports = {
name:"tavsiye",
code:`
$channelSendMessage[$getServerVar[tlog];{author:$userTag:$authorAvatar}{description:Tavsiyeyi veren: **$userTag**

Tavsiye: **$message**}{footer:discord.gg/tokyodev:$authorAvatar}{color:RANDOM}{thumbnail:$authorAvatar}]
$channelSendMessage[$channelID;<#$getServerVar[tlog]> Kanalına iletildi]
$deletecommand
$onlyIf[$message!=;⚠️ bir mesaj yaz sinir etme amk]
$onlyIf[$getServerVar[tlog]!=;⚠️ Tavsiye logu ayarlanmamış]
`
}   
