module.exports = {
  name: "herkese-rol-ver",
  code: `
  $channelSendMessage[$channelID;{description:<@&$mentionedRoles[1]> Adlı rol herkese veriliyor}{footer:Ne kadarda üşendirici bir iş}{color:$getServerVar[hex]}]
  $forEachMember[parzi]
  $onlyIf[$mentionedRoles[1]!=;:x: | **Bir rol etiketlemelisin**]
  $onlyIf[$authorID==$ownerID;:x: | **Bunun komut için __SUNUCU SAHİBİ__ olmalısın.**]
  `
};
