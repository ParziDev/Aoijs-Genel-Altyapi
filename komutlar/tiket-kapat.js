module.exports = ({
  name:"ticket",
  code:`
  $if[$message[1]==kapat]
  $closeTicket
  $wait[5s]
  $channelSendMessage[$channelID;{description:5 saniye sonra ticket kapanıyor.}{color:RANDOM}]
  $else
  $description[\`$getServerVar[prefix]ticket kapat\`]
  $color[RANDOM]
  $endif
  $onlyIf[$isTicket[$channelID]!=false;:x: | Burası ticket değil.]
`
  
})
