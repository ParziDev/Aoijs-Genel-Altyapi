module.exports = {
name:"ks-sıfırla",
code:`
$if[$message[1]==kızrol]
✅ Kız rolü kapatıldı
$setServerVar[krol;]
$endif
$if[$message[1]==erkekrol]
✅ Erkek rolü kapatıldı
$setServerVar[erol;]
$endif
$if[$message[1]==yetkili]
✅ Yetkili rolü kapatıldı
$setServerVar[yetkili;]
$endif
$if[$message[1]==kayıtsız]
✅ Kayıtsız rolü kapatıldı
$setServerVar[kayıtsız;]
$endif
$if[$message[1]==kayıtkanal]
✅ Kayıt kanalı kapatıldı
$setServerVar[kkanal;]
$if[$message[1]==kayıtlog]
✅ Kayıt logu kapatıldı
$setServerVar[klog;]
$onlyIf[$checkContains[$toLowercase[$message[1]];kızrol;erkekrol;kayıtsız;yetkili;kayıtkanal;kayıtlog]==true;⚠️ Bir arguman girmelisin argumanlar: **erkekrol , kızrol , kayıtsız , yetkili , kayıtkanal , kayıtlog** \`Örn:\` **!ks-sıfırla kızrol**] 
$onlyPerms[admin;⚠️ Bunun için **Yönetici** iznin olmalı]
`}     
