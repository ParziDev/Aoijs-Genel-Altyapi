module.exports = {
        name: "hgbb",
        code: `$if[$message[1]==aç]
        $author[HGBB Sistemi Aktif Edildi.;$authorAvatar]
        $description[HGBB sistemi açıldı. Ayarlanan kanal <#$mentionedChannels[1]> olarak ayarlandı.]
        $color[$getServerVar[hex]] 
        $setServerVar[hgbb;$mentionedChannels[1]]
        $onlyIf[$mentionedChannels[1]!=; :x: | **Bir kanal etiketlemelisin.**]
        $endif
        $if[$message[1]==kapat]
        $author[HGBB Sistemi Deaktif Edildi.;$authorAvatar]
         $description[HGBB sistemi kapatıldı.]
        $color[$getServerVar[hex]] 
        $setServerVar[hgbb;]
        $endif
        $if[$message[1]==resim]
        $description[HGBB sistemi ne resim eklendi.]
        $image[$message[2]]
        $color[$getServerVar[hex]] 
        $setServerVar[hgbbimage;$message[2]]
        $onlyIf[$checkContains[$toLowercase[$message[2]];https://]==false;:x: | **Bu linkmi orosbu çocu düzgün kullan şu komutu**] 
     
        $onlyIf[$message[2]!=; :x: | **Bir bir resim linki girmen gerekli.**]
        $endif
        $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
        `
}
