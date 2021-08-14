const rodzen = require("aoi.js")
var fs = require('fs')
const bot = new rodzen.Bot({
    token:process.env.token,
    prefix:"$getServerVar[prefix]"
})

bot.onEmojiDelete()
bot.onEmojiCreate()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onBanRemove()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageDelete()
bot.onMessageUpdate() 
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
   bot.command({
        name: command.name,
        code: command.code,
     aliases: command.aliases
     })
               
  }
  
bot.command({
name:"saas-aç",
code:`
✅ Saas Sistemi Açıldı Sa Yazıldığında Cevap Vereceğim
$setServerVar[saas;açık]
$onlyPerms[admin;❌ Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[saas]!=açık;⚠ Bu Sistem Zaten Açık]
`
})

bot.command({
name:"saas-kapat",
code:`
✔ Saas Sistemi Kapatıldı  Sa Dendiğinde Cevap Vermiycem
$setServerVar[saas;kapalı]
$onlyPerms[admin;❌ Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[saas]!=kapalı;⚠ Bu Sistem Zaten Kapalı]
`
})
bot.command({
name:"sa",
aliases: ["sea","selamun aleyküm"],
code:`
$reply[$messageID;Aleyküm Selam Hoşgeldin **$nickname**;yes]
$onlyIf[$getServerVar[saas]!=kapalı;]
`,
nonPrefixed: true
})   

bot.command({
name:"$alwaysExecute",
code:`
$title[No No No]
$description[<@$authorID> Link Atmamalısın]
$deletecommand
$onlyIf[$checkContains[$toLowercase[$message];https;http;discord.gg]==true;]
$onlyIf[$isAdmin[$authorID]!=true;]
$onlyIf[$getServerVar[lengel]!=kapalı;]
`
})    

bot.joinCommand({
channel:"$getServerVar[kkanal]",
code:`
<@$authorID>,<@&$getServerVar[yetkili]>
$author[$userTag Hoşgeldin;$authorAvatar]
$description[<@$authorID> Sunucuya katıldı 

Şuan **$membersCount** kişiyiz

Hesabının kurulum tarihi **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];years;Yıl;-1];months;Ay;-1];weeks; Hafta;-1];day;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye;-1] ** önce

Kayıt olmak için <#$getServerVar[kkanal]> kanalına ismini ve yaşını yazabilirsin

Yetkililer seninle ilgilenicektir iyi günler dilerim...]
$footer[Tokyo Development;$authorAvatar]
$thumbnail[$authorAvatar]
$color[RANDOM]
$changeNickname[$authorID;Kayıtsız]
$giveRoles[$authorID;$getServerVar[kayıtsız]]
`
})   


bot.emojiDeleteCommand({
channel:"$getServerVar[eklog]",
code:`
$author[Ohayoo;$serverIcon]
$description[$customEmoji[$oldEmoji[name]] emojisi isilinmişti geri ekledim

Emoji linki için [tıkla işte amk]($oldEmoji[url])]
$footer[Tokyo Development;$serverIcon]
$color[RED]
$thumbnail[$serverIcon]
$addEmoji[$oldEmoji[url];$oldEmoji[name]]
$onlyIf[$getServerVar[eklog]!=;]`
})
bot.awaitedCommand({
  name:"onay",
  code:` $author[Sa;$authorAvatar]
  $addField[Koruma;emoji-koruma, link-engel]
$addField[Eğlence;howgay, 25miles, palyaço, biden, rte, trump, kaçcm, ]
$addField[Ayarlamalı;hgbb-sistemi, mute-sistemi, ticket-sistemi, kayıt-sistemi, otorol, modlog, saas-aç, saas-kapat, tavsiye-log]
$addField[Moderasyon;ban, unban, kick, mute, unmute, banlist, herkese-rol-ver, herkesten-rol-al, herkesin-adını-değiştir, nuke, sil, snipe, prefix, hex]
$addField[Genel;qr, avatar, sunucu-bilgi, afk, tavsiye]
$addField[Prefixim;\`\`\`fix
$getServerVar[prefix]\`\`\`]
  $color[$getServerVar[hex]]
  $thumbnail[$authorAvatar]`
})
bot.awaitedCommand({
  name:"parzi",
  code:`
  $giveRoles[$authorID;$mentionedRoles[1]]
  $suppressErrors
  `
  })

bot.awaitedCommand({
  name:"zuzia",
  code:`
  $takeRoles[$authorID;$mentionedRoles[1]]
 
  `
  })

bot.awaitedCommand({
  name:"annen",
  code:`
  $changeNickname[$authorID;$message]
  $suppressErrors
  `
  })
//yea boi .d
bot.readyCommand({
  channel:"yarra",
  code:`
  $log[MERABALAR AQ TEKRARDAN AKTİFİM -$userTag[$clientID]]
   $log[Hello madıfakı -$userTag[$clientID]]
   $joinVC[856229332468891658]
  `
  })
bot.joinCommand({
channel:"$getServerVar[hgbb]",
code:`$if[$isBot[$authorID]==false]
$description[$replaceText[$replaceText[$replaceText[$getServerVar[hgtxt];-etiket-;<@$authorID>;-1];-isim-;$username;-1];-isimt-;$usertag;-1]
]
$image[$getServerVar[hgbbimage]]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
$else
**\`$usertag\` adlı bot sunucuya alındı**
$endif
`
} )
bot.leaveCommand({
channel:"$getServerVar[hgbb]",
code:`$if[$isBot[$authorID]==false]
$description[$replaceText[$replaceText[$replaceText[$getServerVar[bbtxt];-etiket-;<@$authorID>;-1];-isim-;$username;-1];-isimt-;$usertag;-1]]
$image[$getServerVar[hgbbimage]]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
$else
>>> \`$usertag\` adlı bot sunucudan atıldı.
$endif
`
} )
bot.joinCommand({
channel:"$randomChannelID",
code:`
$channelSendMessage[$getServerVar[skanal];{title:Zero Two Sayaç Sistemi!}{description:\`$usertag\` adlı kullanıcı sunucuya girdi ve \`$membersCount\` kişi olduk. \`$getServerVar[sayaç]\` kişi olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.}{color:RANDOM}]
    $onlyIf[$getServerVar[skanal]!=;]
    $onlyIf[$getServerVar[s]==açık;]
`
} )

bot.leaveCommand({
  channel: "$randomChannelID",
  code: `   $channelSendMessage[$getServerVar[skanal];{title:Zero Two Sayaç Sistemi!}{description:\`$usertag\` adlı kullanıcı sunucudan çıktı ve \`$membersCount\` kişi kaldık. \`$getServerVar[sayaç]\` kişi olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.}{color:RANDOM}]
  
  
  $onlyIf[$getServerVar[skanal]!=;]
    $onlyIf[$getServerVar[s]==açık;]`
})
bot.joinCommand({
channel:"$randomChannelID",
code:`
$giveRole[$authorID;$getServerVar[otorolb]]
$channelSendMessage[$getServerVar[otorolk];{description:>>> \`$usertag\` adlı bot sunucuya girdi ve <@&$getServerVar[otorolb]> rolü verildi.}{color:$getServerVar[hex]}]
$suppressErrors
$onlyIf[$isBot[$authorID]!=false;]
$onlyIf[$getServerVar[otorolb]!=;]
$onlyIf[$getServerVar[otorolk]!=;]
`
} )
bot.joinCommand({
channel:"$randomChannelID",
code:`
$giveRole[$authorID;$getServerVar[otorol]]
$channelSendMessage[$getServerVar[otorolk];{description:>>> \`$usertag\` sunucuya girdi ve <@&$getServerVar[otoroll]> rolü verildi.}{color:$getServerVar[hex]}]
$suppressErrors
$onlyIf[$isBot[$authorID]!=false;]
$onlyIf[$getServerVar[otoroll]!=;]
$onlyIf[$getServerVar[otorolk]!=;]
`
} )
bot.joinCommand({
channel:"$getServerVar[otorolk]",
code:`
$channelSendMessage[$getServerVar[otorolk];{title:Zero Two Sayaç Sistemi!}{description:\`$usertag\` adlı kullanıcı sunucuya girdi ve \`$membersCount\` kişi olduk. \`$getServerVar[sayaç]\` kişi olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.}{color:RANDOM}]
    $onlyIf[$getServerVar[otorolk]!=;]
    $onlyIf[$getServerVar[s]==açık;]
`
} )
bot.deletedCommand({
  channel:"$channelID",
  code:`
  $setServerVar[zerotwok;$channelUsed]
  $setServerVar[zerotwo;$message]
  $setServerVar[zerotwokk;$authorID] $setServerVar[zerotwos;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$hours;01s;4;-1];02s;5;-1];03s;6;-1];04s;7;-1];05s;8;-1];06s;9;-1];07s;10;-1];08s;11;-1];09s;12;-1];10s;13;-1];11s;14;-1];12s;15;-1];13s;16;-1];14s;17;-1];15s;18;-1];16s;19;-1];17s;20;-1];18s;21;-1];19s;22;-1];20s;23;-1];21s;00;-1];22s;01;-1];23s;02;-1];00s;03;-1]:$replaceText[$minutes;s;;-1]:$replaceText[$seconds;s;;-1]]
  $suppressErrors`
  })
bot.leaveCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir kullanıcı ayrıldı

> Ayrılan kullanıcı:** <@$authorID> • $userTag • $authorID**]
$footer[Tokyo Development;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})
bot.joinCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir kullanıcı katıldı

> Katılan kullanıcı:** <@$authorID> • $userTag • $authorID**]
$footer[Tokyo Development;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})
bot.emojiCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$newEmoji[name];$newEmoji[url]]
$description[Bir emoji eklendi

> Eklenen emoji: $newEmoji[emoji]

> Emoji id'si: **$newEmoji[id]**

> Emoji linki:** [tıkla]($newEmoji[url]) **]
$footer[Tokyo Development;$newEmoji[url]]
$color[$getServerVar[hex]]
$thumbnail[$newEmoji[url]]
`
})

bot.emojiDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$oldEmoji[name];$oldEmoji[url]]
$description[Bir emoji silindi

> Emoji ismi: **$oldEmoji[name]**

> Emoji id'si: **$oldEmoji[id]**

> Emoji linki: ** [Tıkla]($oldEmoji[url]) **]
$footer[Tokyo Development;$oldEmoji[url]]
$color[$getServerVar[hex]]
$thumbnail[$oldEmoji[url]]
`
})
bot.inviteCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$inviteUserID];$userAvatar[$inviteUserID]]
$description[Bir davet oluşturuldu

> Oluşturan kişi: <@$inviteUserID>

> Davet kodu: **$inviteCode • $inviteURL **]
$footer[Tokyo Development;$userAvatar[$inviteUserID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$inviteUserID]]
`
})

bot.inviteDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$inviteUserID];$userAvatar[$inviteUserID]]
$description[Bir davet silindi

> Davet sahibi: <@$inviteUserID>

> Davet kodu: **$inviteCode**]
$footer[Tokyo Development;$userAvatar[$inviteUserID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$inviteUserID]]
`
})
bot.banAddCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[Bir kişi banlandı

> Banlanan kişi: **$userTag[$authorID] • $authorID**

> Banlanma sebebi: **$getBanReason[$authorID]**]
$footer[Tokyo Development;$userAvatar[$authorID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$authorID]]
`
})

bot.banRemoveCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[Bir kişinin banı açıldı

> Banı kaldırılan kişi: **$userTag[$authorID] • $authorID**]
$footer[Tokyo Development;$userAvatar[$authorID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$authorID]]
`
})
bot.roleCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$newRole[name];$serverIcon]
$description[Bir rol oluşturuldu

> Oluşturulan rol: <@&$newRole[id]> • $newRole[name]

> Rol etiketlenebilirmi: **$replaceText[$replaceText[$newRole[mentionable];true;Evet;-1];false;Hayır;-1]**

> Rol rengi: **$newRole[color]**

> Rol izinleri: **$newRole[permissions]**]
$footer[Tokyo Development;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})

bot.roleDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$oldRole[name];$serverIcon]
$description[Bir rol silindi

> Silinen rol: **$oldRole[name]**

> Rol rengi: **$oldRole[color]**

> Rol izinleri: **$oldRole[permissions]**]
$footer[Tokyo Development;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})
bot.channelCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$newChannel[name];$serverIcon]
$description[Bir kanal oluşturuldu

> Oluşturulan kanal: <#$newChannel[id]> • $newChannel[name]
]
$footer[Tokyo Development;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})

bot.channelDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$oldChannel[name];$serverIcon]
$description[Bir kanal silindi

> Silinen kanal: **$oldChannel[name]**]
$footer[Tokyo Development;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})
bot.updateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir mesaj düzenlendi

> Düzenlenen mesaj: **$oldmessage**

> Yeni mesaj: **$message**

> Mesaj sahibi: <@$authorID>]
$footer[Tokyo Development;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})


bot.deletedCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir mesaj silindi

> Silinen mesaj: **$message**

> Mesaj sahibi: <@$authorID>]
$footer[Tokyo Development;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})

bot.command({
  name:"ping",
  code:`
  Gecikmem : $ping | Bot gecikmesi : $botPing
  `
})

bot.status({
    text: `Zuzia RodzeN | Neden sadece rodzen amk -Parzi`,
    type: "PLAYING",
    status: "dnd",
    time: 12
})

bot.variables({
  prefix:"!",
  hgbb:"",
  bbtxt:"-isimt- Tekrar görüşmek üzere bb. ^^",
  hgtxt:"-isimt- Hoş geldin umarım iyi vakit geçirsin. ^^",
  hgbbimage:"",
  hex:"RANDOM",
  mrol:"boş",
  myetkili:"",
  ticket:"0",
  ticketk:"",
  ticketk2:"",
  zerotwok:"",
  zerotwo:"",
  zerotwokk:"",
  zerotwos:"",
  modlog:"",
  skanal:"",
  sayaç:"0",
  s:"kapalı",
  otorolk:"",
  otorolb:"",
  otorol:"",
  eklog:"",
  erol:"",
  krol:"",
  kayıtsız:"",
  yetkili:"",
  kkanal:"",
  klog:"",
  lengel:"kapalı",
  afks: "", 
  afk: "hayır", 
  afkss:"", 
  afkmm:"0", 
  afkc: "0", 
  afkkk:"0", 
  afkaa:"Kimse Etiketlememiş",
  saas:"kapalı",
  tlog:""
  })
