module.exports = ({
name:"sil",
aliases:['purge' , 'clear'],
code:`$if[$getServerVar[modlog]==]
$else
$channelSendMessage[$getServerVar[modlog];{description:$usertag <#$channelID> kanalında \`$message[1]\` sayıda mesaj sildi.}{color:$getServerVar[hex]}]
$endif
$clear[$sum[1;$message[1]]]
\`\`\`kt
"$message[1]" miktarda mesaj silindi.
\`\`\`
$onlyIf[$hasPerms[$authorID;managemessages]!=false;**Mesajları Yönet** \`yetkin yok.\`]
$onlyIf[$hasPerms[$clientID;managemessages]!=false;**Mesajları Yönet** \`yetkim yok.\`]
$onlyIf[$isNumber[$message[1]]!=false;**$message[1]** \`Bir sayı değil.\`]
$onlyIf[$message[1]!=;\`Bir sayı girin.\`]
$onlyIf[$message[1]>0;\`Girdiğin Rakam\` **1**\`'in Altında Olamaz !\`]
$onlyIf[$message[1]<101;\`Girdiğin Rakam\` **100**\`'ün Üstünde Olamaz !\`]  
$suppressErrors
`})
