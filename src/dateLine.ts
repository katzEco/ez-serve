const date = new Date()

const Month = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
]

export const DateLine = `${
  Month[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()} | ${
  (date.getHours() % 12).toString().length < 2
    ? `0${date.getHours() % 12}`
    : date.getHours() % 12
}:${
  date.getMinutes().toString().length < 2
    ? `0${date.getMinutes()}`
    : date.getMinutes()
}:${
  String(date.getSeconds()).length < 2
    ? `0${date.getSeconds()}`
    : date.getSeconds()
} ${date.getHours() >= 12 ? 'PM' : 'AM'}`
