const utility = {
  updateDate: (day) => {
    return day
      .split('-')
      .splice(1, 2)
      .map((date, index) => {
        if (index === 0) {
          date = date
            .replace('01', 'Jan').replace('02', 'Feb').replace('03', 'Mar')
            .replace('04', 'Apr').replace('05', 'May').replace('06', 'Jun')
            .replace('07', 'Jul').replace('08', 'Aug').replace('09', 'Sep')
            .replace('10', 'Oct').replace('11', 'Nov').replace('12', 'Dec')
        }
        return date
      })
      .join(',')
  },

  updateTodayData: (data) => {
    return {
      desc: data.weather[0].main.toLowerCase(),
      temp: parseInt(data.main.temp * 9/5 - 459.67),
      wind: parseInt(data.wind.speed*2.237),
      humidity: data.main.humidity,
      visibility: parseInt(data.visibility/1609.344)
    }
  },

  updateDaysData: (data) => {
    return data.list.reduce((average, info, idx) => {
        const date = utility.updateDate(info['dt_txt'].split(' ')[0])
        const keys = Object.keys(average)
        if (!keys.includes(date) && info['dt_txt'].includes('15:00') && keys.length < 5) {
          average[date] = `${(info.main.temp * 9/5 - 459.67).toFixed(2)}-${info.weather[0].main.toLowerCase()}`
        }
        return average
      }, {})
  }
}

export default utility
