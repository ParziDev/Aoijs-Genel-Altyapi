module.exports = ({
  name:"$alwaysExecute",
  code:`
  $newTicket[$username・$sum[$getServerVar[ticket];1];<@$authorID>{description:\`$usertag\` birazdan bir yetkili gelip senle ilgilenecek.
  Ticketı kapatmak için \`$getServerVar[prefix]ticket kapat\` yazman yeterlidir.}{color:RANDOM};$getServerVar[ticketk2];no;kodu bozdun amk]
  $setServerVar[ticket;$sum[$getServerVar[ticket];1]]
  $wait[1s]
    $deletecommand
     
$onlyForChannels[$getServerVar[ticketk];]
`
})
