module.exports = ({
    name:"$alwaysExecute",
    code:`
	$deleteIn[20s]
	$setGlobalUserVar[afkaa;$userTag[$authorID];$mentioned[1]]
    $setGlobalUserVar[afkmm;$sum[$getGlobalUserVar[afkmm;$mentioned[1]];1];$mentioned[1]]
    $description[ AFK bir kişiyi etiketlediniz.
     Etiketlediğiniz kişinin AFK sebebi: \`$getGlobalUserVar[afks;$mentioned[1]]\`
     Etiketlediğiniz Kişi \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$math[$dateStamp-$getglobaluservar[afkss;$mentioned[1]]];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1]\` süredir afk.]
    $color[BDAAF9]
    $onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==evet;]
    $suppressErrors`
    })
