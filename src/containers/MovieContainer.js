import React , { Component } from 'react'
import { Link } from 'react-router'

export default class MovieContainer extends Component{
    render(){
        return (
            <div>
                 <h1><Link to="/movie/detail">电影详情</Link></h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}