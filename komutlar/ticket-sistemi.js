module.exports = {
  name:"ticket-sistemi",
  code:`
  $author[TİCKET SİSTEMİ;$authorAvatar]
        $description[
        **Ticket kanalı ayarlamak için:** \`$getServerVar[prefix]ticket-kanal ayarla #kanal\`
        **Ticket kanalını sıfırlamak için:** \`$getServerVar[prefix]ticket-kanal sıfırla\`
        -=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        **Ticket kategorisini ayarlamak için:** \`$getServerVar[prefix]ticket-kategori KATEGORİ_ID\`
        **Ticket kategorisini sıfırlamak için:** \`$getServerVar[prefix]ticket-kategori sıfırla\`
        -=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-=0=-
        **Ticket açmak için** \`Ayarlanan ticket kanalına mesaj yazın\`
        **Ticket kapatmak için:** \`$getServerVar[prefix]ticket kapat\`
        ]
        $color[$getServerVar[hex]]
        $thumbnail[$serverIcon]  

  `
  }
