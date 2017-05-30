import React , { Component } from 'react'

export default class AppContainer extends Component{
    render(){
        return (
            <div>
                AppContainer
                <div>
                    <a href="#/home">首页</a>
                    <a href="#/movie">电影列表</a>
                    <a href="#/call">联系我们</a>
                </div>
                <div>
                    {/*子组件渲染处*/}
                    {this.props.children}
                </div>
            </div>
        )
    }
}