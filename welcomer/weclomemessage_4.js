
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("[ ** Cтандартные Роли ** ]", `<@&389721419271110657> - типичные работяги на заводе. А вы что не хотите помочь коммунизму?!\n <@&503566901234892800> - олды сервера на месте (*Выдается после 5 месяцем пребывания на нашем сервере*)\n <@&448924119887511552> - выдаем всем девушкам нашего сервера (*<@&538671229326852109> - писать для выдачи роли*)\n <@&471194313091448835> - наши маленькие КГБшники ути-пути\n <@&377333156904304650> - глава всех <@&545983497622388745>\n <@&545983497622388745> - ребята которые помогают всем подряд! \n <@&484771352134287380> - глава ПРОФСОЮЗА СССР! Защищает права работяг и обычных людей на наших землях!\n <@&377332841434054668> - гребаный революционер! Управляет всеми бунтующими во время бунта!\n <@&545990375400013824> - работает на Главу НКВД и выполняет его поручения`)
      .addField("[ ** Особенные Роли **]", `<@&377873250987802625> - особенная роль для самого сына Ленина!\n <@&475371125891792897> - НКВД сервера СССР. Они против бунтув и преступности на сервер!\n <@&419508485601099776> - тут говорить нечего, он просто вас найдет везде и накажет по всем законам!\n <@&377152436340785153> - управляющий всем сервером. Короче он здесь и есть закон`)
      .addField("[ ** Игровые Роли **]", `<@&543392473821741066> - если часто играете в Arma 3\n <@&377154072379392010> - если часто играете в Dota 2\n <@&506168508892184586> - если часто играете в Escape From Tarkov (*EST*)`)
      .addField("[ ** Администация Сервера  **]", `<@&538671229326852109> - Главная Адмнистрация сервера\n <@&545999607088283668> - Адмнистрация на пробном периоде`);

      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"rolesinfo"
}
