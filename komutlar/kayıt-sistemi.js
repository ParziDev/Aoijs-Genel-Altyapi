module.exports = {
  name:"kayıt-sistemi",
  code:`
  $author[KAYIT SİSTEMİ;$authorAvatar]
        $description[-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        
         **Erkek rolü ayarlamak için:** \`$getServerVar[prefix]ks-ayarla erkekrol @rol\`
         **Erkek rolünü sıfırlamak için:** \`$getServerVar[prefix]ks-sıfırlarol erkek\`
          **Kız rolü ayarlamak için:** \`$getServerVar[prefix]ks-ayarla kızrol @rol\`
         **Kız rolünü sıfırlamak için:** \`$getServerVar[prefix]ks-sıfırla kızrol\`
          **Kayıtsız rolü ayarlamak için:** \`$getServerVar[prefix]ks-ayarla kayıtsız @rol\`
         **Kayıtsız rolünü sıfırlamak için:** \`$getServerVar[prefix]ks-sıfırla kayıtsız\`
          **Yetkili rolü ayarlamak için:** \`$getServerVar[prefix]ks-ayarla Yetkili @rol\`
         **Yetkili rolünü sıfırlamak için:** \`$getServerVar[prefix]ks-sıfırla Yetkili\`
          **Kayıt kanal ayarlamak için:** \`$getServerVar[prefix]ks-ayarla kayıtkanal #kanal\`
         **Kayıt kanalını sıfırlamak için:** \`$getServerVar[prefix]ks-sıfırla kayıtkanal\` 
          **Kayıt log ayarlamak için:** \`$getServerVar[prefix]ks-ayarla kayıtlog #kanal\`
         **Kayıt logunu sıfırlamak için:** \`$getServerVar[prefix]ks-sıfırla kayıtlog\` 
        -=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        
**Erkek üye kayıt etmek için:** \`$getServerVar[prefix]erkek <isim> <yaş>\`
**Kız üye kayıt etmek için:** \`$getServerVar[prefix]kız <isim> <yaş>\`

        -=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        ]
        $color[$getServerVar[hex]]
        $thumbnail[$serverIcon]
  `
}
