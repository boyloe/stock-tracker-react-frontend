import { iex } from '../config/iex'

export const stock = {

    latestPrice: (ticker, callback) => {
        fetch(stock.LatestPriceURL(ticker))
            .then(response => response.json())
            .then(data => callback(stock.formatPriceData(data)))
    },

    LatestPriceURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.public_token}`
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 1]
        const formattedData = {}
        formattedData.price = stockData.close
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        return formattedData        
    },

    getYesterdaysClose: (ticker, date, callback) => {
        fetch(stock.yesterdaysCloseURL(ticker, date))
        .then(response => response.json())
        .then(data => callback(stock.formatPriceData(data)))
    },

    yesterdaysCloseURL: (ticker) => {
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20201016&token=${iex.public_token}`
    },
}