module.exports = {
        name: "hgtxt",
        code: `$if[$message[1]==düzenle]
        $description[HG mesajı başarılı bir şekilde değiştirildi.
**Yeni HG Mesajı:** $messageSlice[1]
]
         $color[$getServerVar[hex]] 
        $setServervar[hgtxt;$messageSlice[1]]
        $onlyIf[$messageSlice[1]!=;:x: | **Bir şeyler yazmalısın.**]
        $endif
        $if[$message[1]==sıfırla]
        $description[HG mesajı başarılı bir şekilde sıfırlandı.**]
        $resetServerVar[hgtxt]
        $color[$getServerVar[hex]] 
        $endif
        $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
        
        `
}
