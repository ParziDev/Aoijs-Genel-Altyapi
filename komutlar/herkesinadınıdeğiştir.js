module.exports = {
  name: "herkesin-adını-değiştir",
  code: `
  $channelSendMessage[$channelID;{description:Herkesin adı **$message** olarak değiştiriliyo}{footer:Neden böyle bir komutum varki?}{color:$getServerVar[hex]}]
  $forEachMember[annen]
  $onlyIf[$charCount[$message]<=32;:x: | 32'den fazla karakter giremezsin]
  $onlyIf[$message[1]!=;:x: | **Bir nick yazmalısın**]
  $onlyIf[$authorID==$ownerID;:x: | **Bunun komut için __SUNUCU SAHİBİ__ olmalısın.**]
  `
};
//harbi neden böyle bir komut var
