module.exports = {
        name: "sayaç",
        code: `$if[$message[1]==aç]
        $setServerVar[s;açık]
        $setServerVar[skanal;$mentionedChannels[1]]
        $setServerVar[sayaç;$message[3]]
        $description[Sayaç sistemi açıldı, sayaç kanalı <#$mentionedChannels[1]> olarak ayarlandı ve sayaç __$message[3]__ olarak ayarlandı.]
        $color[$getServerVar[hex]]
        $onlyIf[$mentionedChannels[1]!=;Bir kanal etiketle.]
        $onlyIf[$isNumber[$message[3]]!=false;\`$message[3]\` bir sayı değil.]
        $argsCheck[>3;Sayacı belirlemek için bir sayı girin.]
        $endif
        $if[$message[1]==kapat]
        $setServerVar[s;kapalı]
        $setServerVar[skanal;]
        $setServerVar[sayaç;0]
         $description[Sayaç sistemi kapatıldı.]
         $color[$getServerVar[hex]]
         $endif
         $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;:x: | **\`getServerVar[prefix]sayaç aç #kanal $random[50;111] | getServerVar[prefix]sayaç kapat\`**]
         $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
        `
}
