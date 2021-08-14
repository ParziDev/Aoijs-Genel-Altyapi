module.exports = {
name:"ks-ayarla",
code:`
$if[$message[1]==kızrol]
✅ Kız rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı
$setServerVar[krol;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketle]
$endif
$if[$message[1]==erkekrol]
✅ Erkek rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı
$setServerVar[erol;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketle]
$endif
$if[$message[1]==yetkili]
✅ Yetkili rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı
$setServerVar[yetkili;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketle]
$endif
$if[$message[1]==kayıtsız]
✅ Kayıtsız rolü **$roleName[$mentionedRoles[1]]** olarak ayarlandı
$setServerVar[kayıtsız;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;⚠️ Bir rol etiketle]
$endif
$if[$message[1]==kayıtkanal]
✅ Kayıt kanalı <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[kkanal;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;⚠️ Bir kanal etiketle]
$if[$message[1]==kayıtlog]
✅ Kayıt logu <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[klog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;⚠️ Bir kanal etiketle]
$onlyIf[$checkContains[$toLowercase[$message[1]];kızrol;erkekrol;kayıtsız;yetkili;kayıtkanal;kayıtlog]==true;⚠️ Bir arguman girmelisin argumanlar: **erkekrol , kızrol , kayıtsız , yetkili , kayıtkanal , kayıtlog** \`Örn:\` **!ks-ayarla kızrol @kızrolü**] 
$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]
`
}   
