module.exports = {
  name:"herkesten-rol-al",
  code:`
  $channelSendMessage[$channelID;{description:<@&$mentionedRoles[1]> adlı rol herkesten alınıyor}{footer:Rolü silsene direk ya uğraştırıyon}{color:$getServerVar[hex]}]
  $forEachMember[zuzia]
   $onlyIf[$mentionedRoles[1]!=;:x: | **Bir rol etiketlemelisin**]
  $onlyIf[$authorID==$ownerID;:x: | **Bunun komut için __SUNUCU SAHİBİ__ olmalısın.**]`
  }
//._.
//dur hehe zewka ikşasdkşlaskdlşaskdşaskd şuan müzik kodlarını yazdım eğlence kullanıcı ve bot kaldı ha bide premium
