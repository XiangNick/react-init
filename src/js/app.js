// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Hello from '../components/Hello.js'

let msg={
    name:"XiangNick",
    age:21
}


ReactDOM.render(
   <Hello {...msg}/>,
    document.getElementById('app')
)