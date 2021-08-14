module.exports = {
        name: "hgbb-sistemi",
        code: `$author[HGBB SİSTEMİ;$authorAvatar]
        $description[-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        
        **HGBB Sistemini açmak için:** \`$getServerVar[prefix]hgbb aç #kanal\`
        **HGBB Sistemini kapatmak için:** \`$getServerVar[prefix]hgbb kapat\`
        **HGBB Yazılarına resim eklemek için:** \`$getServerVar[prefix]hgbb resim <resim-url>\`
         
        -=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        
        **HG Mesajını değiştirmek için:** \`$getServerVar[prefix]hgtxt düzenle <yeni-hg-mesajı>\`
        **HG Mesajını sıfırlamak için:** \`$getServerVar[prefix]hgtxt sıfırla\`
        
        **BB Mesajını değiştirmek için:** \`$getServerVar[prefix]bbtxt düzenle <yeni-bb-mesajı>\`
        **BB Mesajını sıfırlamak için:** \`$getServerVar[prefix]bbtxt sıfırla\`
        
        -=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        
        **-etiket- -> <@$authorID>**
        **-isim- -> $username**
        **-isimt- -> $usertag**
        
        -=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        ]
        $color[$getServerVar[hex]]
        $thumbnail[$serverIcon]
        `
}
