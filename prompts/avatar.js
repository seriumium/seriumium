module.exports.options = {
  permissions: 0
}

module.exports.execute = async (client, message, presets) => {
  if (presets.arguments[0]) {
    let user = await message.mentions.users.first()
    message.channel.send(user.avatarURL)
      .catch(error => message.reply(error))
  } else {
    message.channel.send(message.author.avatarURL)
  }
}
