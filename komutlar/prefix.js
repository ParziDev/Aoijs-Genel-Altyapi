module.exports = {
  name:"prefix",
  code:`
  $description[Prefix değişti yeni prefix: $message]
  $color[$getServerVar[hex]]
  $setServerVar[prefix;$message]
  $onlyIf[$message!=;:x: | Prefixi yazmalısın.]
  $onlyPerms[admin;:x: | Buna yetkin yok.]
  
  `
}
