module.exports = {
name:"link-engel",
code:`
$if[$message[1]==aç]
✔️ Link Engel Açıldı
$setServerVar[lengel;açık]
$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[lengel]!=açık;Bu Zaten Açık]
$endif
$if[$message[1]==kapat]
✔️Link Engel Kapatıldı
$setServerVar[lengel;kapalı]
$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[lengel]!=kapalı;Bu Zaten Kapalı]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]!=false;Lütfen **aç** veya **kapat** yaz]
`} 
