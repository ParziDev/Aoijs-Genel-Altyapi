module.exports = {
name:"kız",
aliases:["kadın","k"],
code:`
$channelSendMessage[$channelID;{author:$userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]}{description:<@$mentioned[1]> Adlı üye kayıt edildi

Kayıt eden yetkili: <@$authorID>

Kayıt türü: **Kız**

Yeni ismi: $noMentionMessage[1] | $noMentionMessage[2]}{footer:Tokyo Development:$userAvatar[$mentioned[1]]}{thumbnail:$authorAvatar}{color:RANDOM}]

$channelSendMessage[$getServerVar[klog];{author:$userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]}{description:**$nickname[$mentioned[1]]** Aramıza katıldı ona hoşgeldin deyin biliyormuydun konuşabiliceğin toplam **$roleMembersCount[$getServerVar[krol]]** kız var ^^}{footer:Tokyo Development:$userAvatar[$mentioned[1]]}{thumbnail:$serverIcon}{color:RANDOM}]

$giveRoles[$mentioned[1];$getServerVar[krol]]
$takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
$changeNickname[$mentioned[1];$noMentionMessage[1] | $noMentionMessage[2]]

$onlyIf[$noMentionMessage[2]!=;⚠️ Üyenin yaşını yazmayı unuttun]
$onlyIf[$noMentionMessage[1]!=;⚠️ Üyenin ismini yazmayı unuttun]
$onlyIf[$mentioned[1]!=⚠️ Bir üye etiketlemelisin]
$onlyIf[$hasRole[$authorID;$getServerVar[yetkili]]==true;⚠️ Bunun için **$roleName[$getServerVar[yetkili]]** olmalısın]

$onlyIf[$getServerVar[yetkili]!=;⚠️ Kayıt yetkilisi ayarlanmamış ayarlamak için **!ks-ayarla** yazın]
$onlyIf[$getServerVar[krol]!=;⚠️ Kız üye rolü ayarlanmamış ayarlamak için **!ks-ayarla** yazın]
$onlyIf[$getServerVar[kayıtsız]!=;⚠️ Kayıtsız rolü ayarlanmamış ayarlamak için **!ks-ayarla** yazın]
$onlyIf[$getServerVar[kkanal]!=;⚠️ Kayıt kanalı ayarlanmamış ayarlamak için **!ks-ayarla** yazın]
$onlyIf[$getServerVar[klog]!=;⚠️ Kayıt logu ayarlanmamış ayarlamak için **!ks-ayarla** yazın]
`
}   
