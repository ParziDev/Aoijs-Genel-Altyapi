module.exports = ({
  name:"ticket-kategori",
  code:`
  $if[$message[1]==ayarla]
$setServerVar[ticketk2;$message[2]]
$description[Ticket kategorisi ayarlandı.]
$color[RANDOM]
$onlyIf[$message[2]!=;:x: | Bir kategori idsi girmelisin]
$onlyIf[$hasPerms[$authorID;admin]!=false;:x: | Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$if[$message[1]==sıfırla]
$setServerVar[ticketk2;]
$description[Ticket kanalı sıfırlandı.
$color[RANDOM]
$onlyIf[$hasPerms[$authorID;admin]!=false;:x: |  Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$onlyIf[$message[1]!=;:x: | \`$getServerVar[prefix]ticket-kategori ayarla | $getServerVar[prefix]ticket-kategori sıfırla\`]
`
  
})
