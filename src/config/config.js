const params = {
  appid: 'wx850776eebc3e2139',
  secret: '107a0021da055c8128782d1f8a0af375',
  touser: 'otQAW6VETpTq3JMnEH-pIUv_ZO1c',
  template_id: 'dpAI6eT4WEgHlrPUn3vs1R0rDB-O_oLoU92003712ao',
}

const listConfig = {
  data: {
    nowDate: {
      value: '今天是 2022/08/20 周天 ',
      color: '#57E6E2',
    },
    city: {
      value: '北京',
      color: '#9CA2A0',
    },
    low: {
      value: '29℃',
      color: '#7CD47D',
    },
    high: {
      value: '37℃',
      color: '#CBA476',
    },
    loveDate: {
      value: '999',
      color: '#AEC5C8',
    },

    txt: {
      value: '我习惯在包里藏一瓶百无聊赖，打发人间的白云和苍狗设计睡着的未来',
      color: '#3C4244',
    },
  },
}

/* 上述代码是需要自定义的配置项 */
function verifyEmpty() {
  var flag = ''
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      if (!params[key]) {
        flag = key
        break
      }
    }
  }
  return flag
}

// 校验为空
if (verifyEmpty()) {
  console.error(
    '警告：请完善 “/src/config/config.js中的配置项: ' +
      verifyEmpty() +
      '”的内容,再执行代码！'
  )
  process.exit(0)
}

module.exports = {
  params,
  listConfig,
}
