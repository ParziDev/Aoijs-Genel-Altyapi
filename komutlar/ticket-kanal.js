module.exports = ({
  name:"ticket-kanal",
  code:`
  $if[$message[1]==ayarla]
$setServerVar[ticketk;$mentionedChannels[1]]
$description[Ticket kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
$color[RANDOM]
$onlyIf[$mentionedChannels[1]!=;:x: | Bir kanal etiketlemelisin]
$onlyIf[$hasPerms[$authorID;admin]!=false;:x: | Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$if[$message[1]==sıfırla]
$setServerVar[ticketk;]
$description[Ticket kanalı sıfırlandı.
$color[RANDOM]
$onlyIf[$hasPerms[$authorID;admin]!=false;:x: | Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$onlyIf[$message[1]!=;:x: | \`$getServerVar[prefix]ticket-kanal ayarla | $getServerVar[prefix]ticket-kanal sıfırla\`]
`
  
})
