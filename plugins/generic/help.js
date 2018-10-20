const dictionary = require('../')

module.exports = (client, message, data, translate) => {
  let form = {
    color: data.application.embed.color,
    author: {
      name: translate.help.title[0]
    },
    description: `${translate.help.thanks}[Terms of Service](https://b2.seia.io/terms) | [Invite](${data.application.client.invite})`,
    fields: [
      {
        name: 'Game',
        value: '``arcaea``'
      },
      {
        name: 'Generic',
        value: '``help``, ``ping``'
      },
      {
        name: 'Util',
        value: '``serverinfo``'
      }
    ],
    footer: {
      text: translate.help.detailed[0]
    }
  }

  const selection = data.message.index.raw[1]
  if (selection in dictionary) {
    form = {
      color: data.application.embed.color,
      author: {
        name: `${translate.help.title[1]}; ${selection}`
      },
      description: translate.generic.descriptions[selection],
      fields: [
        {
          name: translate.help.usage,
          value: `b;${dictionary[selection].usage}`
        }
      ],
      footer: {
        text: translate.help.detailed[1]
      }
    }
  }

  message.channel.send({embed: form})
}