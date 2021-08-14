module.exports = {
        name: "hgbb",//Buraya Kod İsmi Yazılır
        code: `$if[$message[1]==aç]
                $setServerVar[hgbb;$mentionedChannels[1]]
                $description[<:zt_onay:852916444181954593> HGBB Sistemi aktif edildi ve <#$mentionedChannels[1]> olarak ayarlandı.]
                $color[ffdbfe]
                $onlyIf[$mentionedChannels[1]!=;<:zt_red:852916499584122920> Bir kanal etiketle.]
$endif
      $if[$message[1]==kapat]
      $setServerVar[hgbb;]
                $description[<:zt_onay:852916444181954593> HGBB Sistemi kapatıldı.]
                $color[ffdbfe]
        $endif
         $if[$message[1]==resim]
        $description[<:zt_onay:852916444181954593> HGBB sistemi ne resim eklendi.]
        $image[$message[2]]
        $color[ffdbfe] 
        $setServerVar[hgbbimage;$message[2]]
        $onlyIf[$checkContains[$toLowercase[$message[2]];https://]==false;<:zt_red:852916499584122920> \`$message[2]\` diye bir link bulamadım.] 
      
        $onlyIf[$message[2]!=;<:zt_red:852916499584122920> Bir resim linki girmelisin.]
        $endif
         $onlyIf[$checkContains[$toLowercase[$message];aç;kapat;resim]==true;<:zt_red:852916499584122920> \`$getServerVar[prefix]hgbb aç #kanal | $getServerVar[prefix]hgbb kapat | $getServerVar[prefix]hgbb resim <resim_url>\`]
         $onlyPerms[admin;<:zt_red:852916499584122920> Bunun için yetkin yetersiz.]
        `//Buraya Kodunuzu Yazınız
}
