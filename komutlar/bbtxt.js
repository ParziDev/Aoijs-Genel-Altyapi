module.exports = {
        name: "bbtxt",
        code: `$if[$message[1]==düzenle]
        $description[BB mesajı başarılı bir şekilde değiştirildi.
**Yeni BB Mesajı:** $messageSlice[1]
]
         $color[$getServerVar[hex]] 
        $setServervar[bbtxt;$messageSlice[1]]
        $onlyIf[$messageSlice[1]!=;:x: | **Bir şeyler yazmalısın.**]
        $endif
        $if[$message[1]==sıfırla]
        $description[BB mesajı başarılı bir şekilde sıfırlandı.**]
        $resetServerVar[bbtxt]
        $color[$getServerVar[hex]] 
        $endif
        $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | **Bu komut için __YÖNETİCİ__ yetkin olması lazım.**]
        `
}
