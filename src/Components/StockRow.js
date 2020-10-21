import React,{Component} from 'react'
import {stock} from '../resources/stock'
import {Container, Table, Row, Col, Card, ListGroup} from 'react-bootstrap'




export default class StockRow extends Component {
    
    state = {
        price: null, 
        date: null,
        time: null,
        dollar_change: 0,
        percent_change: 0
    }

    changeStyle = () => {
        return {
            color: (this.state.dollar_change > 0) ? "#4caf50" : "#e53935",
            fontSize: '0.8rem',
            marginLeft: 10
        }
    }
    
    applyData(data) {
        this.setState({
            price: data.price.toFixed(2), 
            date: data.date,
            time: data.time,            
        })
        stock.getYesterdaysClose(this.props.ticker, data.date, (yesterday) => {
            const dollar_change = (data.price - yesterday.price).toFixed(2)
            const percent_change = ((dollar_change/ yesterday.price)*100).toFixed(2)
            this.setState({
                dollar_change: `$ ${dollar_change}`,
                percent_change: `% (${percent_change}%)`
            })
        } )
    }

    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }
    render() {
        return (
            <ListGroup.Item>
                <b>{this.props.ticker}</b> {this.state.price}
                <span className='change' style={this.changeStyle()}> 
                    {this.state.dollar_change}
                    {this.state.percent_change}
                </span>
            </ListGroup.Item>   
        )
    }
}

