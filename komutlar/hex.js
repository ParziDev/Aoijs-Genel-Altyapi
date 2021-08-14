module.exports = {
  name:"hex",
  code:`$if[$message[1]==ayarla]
$description[Yeni hex kodu: $message[2]]
  $color[$getServerVar[hex]]
  $setServerVar[hex;$message[2]]
  $onlyIf[$message!=;:x: | Hex kodu yazmalısın.]
  $onlyPerms[admin;:x: | Buna yetkin yok.]
  $endif
  $if[$message[1]==sıfırla]
  $description[Hex kodu sıfırlandı.]
  $color[$getServerVar[hex]]
  $setServerVar[hex;RANDOM]
  $onlyPerms[admin;:x: | Buna yetkin yok.]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];ayarla;sıfırla]==true;⚠️ Bir arguman girmelisin argumanlar: \`$getServerVar[prefix]hex ayarla <hex-kodu> | $getServerVar[prefix]hex sıfırla\`
 __**ÖRNEK:**__ \`\`\`fix
  $getServerVar[prefix]hex ayarla $randomText[ffdbfe;ffccff;303136;313131]
  \`\`\`
  
  ] 
  `
}
