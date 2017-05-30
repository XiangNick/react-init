import React , { Component } from 'react'
import { Link } from 'react-router'

export default class AppContainer extends Component{
    render(){
        return (
            <div>
                AppContainer
                <div>
                    <Link to="/home">首页</Link>
                    <Link to="/movie">电影列表</Link>
                    <Link to="/call">联系我们</Link>
                </div>
                <div>
                    {/*子组件渲染处*/}
                    {this.props.children}
                </div>
            </div>
        )
    }
}