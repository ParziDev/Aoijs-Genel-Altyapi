module.exports = ({
    name:"$alwaysExecute",
    code:`
	$deleteIn[30s]
	$setGlobalUserVar[afkaa;Kimse Etiketlememiş]
	$setVar[afkkk;$sub[$getVar[afkkk];1]]
	$setGlobalUserVar[afk;hayır]
    $setGlobalUserVar[afkmm;0]
    $setGlobalUserVar[afks;]
    $setGlobalUserVar[afkss;]
    $color[BDAAF9]
    $description[Başarıyla AFK durumundan çıkıldı.
    Tam \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$math[$dateStamp-$getglobaluservar[afkss]];time];and;ve;1];seconds;Saniye;1];minutes;Dakika;1];hours;Saat;1];days;Gün;1];weeks;Hafta;1];months;Ay;1];years;Yıl;1];second;Saniye;1];minute;Dakika;1];hour;Saat;1];day;Gün;1];week;Hafta;1];month;Ay;1];year;Yıl;1]\` Süredir AFK'ydınız.
    Eski afk Sebebiniz \`$getGlobalUserVar[afks]\` idi.
    AFK iken toplam \`$getGlobalUserVar[afkmm]\` kez etiketlendiniz.
	  Sizi en son etiketleyen: \`$getGlobalUserVar[afkaa]\`]
    $onlyIf[$getGlobalUserVar[afkc]==2;]
    $setGlobalUserVar[afkc;$sum[$getGlobalUserVar[afkc];1]]
    $onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]
	$suppressErrors
    `
    })
