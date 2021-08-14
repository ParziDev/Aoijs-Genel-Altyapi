module.exports = ({
    name: "nuke",
    code: `
$channelSendMessage[$channelID[$get[kanalID]];{description:<@$authorID> Kanal nukelenmiştir.}{image:https://tenor.com/view/explosion-action-bird-run-running-gif-4877919}{color:$getServerVar[hex]};no]
$wait[1s]
$deleteChannels[$channelID]
$wait[1s]
$let[kanalID;$channelName[$channelID]]
$wait[1s]
$cloneChannel[$channelID]
$onlyPerms[admin;managemessages;managechannels;:x: | **Bu komut için __Mesajları Yönet, Kanllarları Yönet ve Yönetici__ yetkin olması lazım.**]
$onlyBotPerms[admin;managemessages;managechannels;:x: | **Bu komut için __Mesajları Yönet, Kanllarları Yönet ve Yönetici__ yetkimin olması lazım.**]
`
})
