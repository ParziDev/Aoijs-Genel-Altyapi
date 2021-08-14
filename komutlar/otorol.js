module.exports = {
        name: "otorol",
        code: `$if[$message[1]==aç]
        $author[Otorol Sistemi Aktif Edildi.;$authorAvatar]
        $description[Otorol sistemi açıldı. Ayarlanan kanal <#$mentionedChannels[1]> olarak ayarlandı. Üye rolü <@&$mentionedRoles[1]>, <@&$mentionedRoles[2]> bot rolü olarak ayarlandı.]
        $color[$getServerVar[hex]] 
        $setServerVar[otorolk;$mentionedChannels[1]]
        $setServerVar[otorol;$mentionedRoles[1]]
        $setServerVar[otorolb;$mentionedRoles[2]]
        $onlyIf[$mentionedChannels[1]!=; :x: | **Bir kanal etiketlemelisin.**]
        $onlyIf[$mentionedRoles[2]!=; :x: | **Bir bot rolü etiketlemelisin.**]
        $onlyIf[$mentionedRoles[1]!=; :x: | **Bir üye rolü etiketlemelisin.**]
        $endif
        $if[$message[1]==kapat]
        $author[Otorol Sistemi Deaktif Edildi.;$authorAvatar]
         $description[Otorol sistemi kapatıldı.]
        $color[$getServerVar[hex]] 
        $setServerVar[otorol;]
        $setServerVar[otorolk;]
        $setServerVar[otorolb;]
$endif
        $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
        `
}
