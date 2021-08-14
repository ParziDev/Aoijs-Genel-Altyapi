module.exports = {
  name:"modlog",
  code:`$if[$message[1]==ayarla]
  $description[Modlog kanalı ayarlandı. Artık sunucudaki silinen mesajlar, düzeltilen mesajları, oluşturulan kanal ve rolleri <#$mentionedChannels[1]> kanalına atacam.]
  $color[$getServerVar[hex]]
  $setServerVar[modlog;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;:x: | Bir kanal etiketliyiniz.]
  
  $endif
  $if[$message[1]==sıfırla]
    $description[Modlog kanalı sıfırlandı]
  $color[$getServerVar[hex]]
  $setServerVar[modlog;]
  
  $endif
  $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
  `
}
