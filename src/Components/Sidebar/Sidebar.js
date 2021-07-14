import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import 'Assets/Css/style.css'

export default class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state={
            showSidebar : false
        }
    }
    handleBtnShow=()=>{
        this.setState({
            showSidebar : true
        })
        document.getElementById("sidebar").style.marginLeft='290px'
    }
    handleBtnClose=()=>{
        this.setState({
            showSidebar : false
        })
        document.getElementById("sidebar").style.marginLeft='0'
    }
    render() {
        const showbtn = this.state.showSidebar
        const btnShow = <button onClick={this.handleBtnShow}>show</button>
        const btnClose = <button onClick={this.handleBtnClose}>close</button>
        const visibleBtn = !showbtn ? btnShow : btnClose
        window.addEventListener("resize",function(){
            if (this.document.body.clientWidth > 768 && showbtn) {
                document.getElementById("sidebar").style.marginLeft='0'
            }
        })
        const dataHeader=[
            {
                id : 1,
                text : "ALL PRODUCT",
                path : "/allproduct",
            },
            {
                id: 2,
                text : "ADD PRODUCT",
                path : "/addproduct",
            },
            {
                id:3,
                text : "TRANSACTIONS",
                path : "/transaction",
            },
            {
                id:4,
                text : "SETTINGS",
                path : "/setting",
            },
        ]
        return (
            <>
            <header>
                <div className="container-fluid">
                    <div className="flex justify-content-between">
                        <div>
                            <h3>Caryta Management</h3>
                        </div>
                        <div className="btn-close">
                            {visibleBtn}
                        </div>
                    </div>
                </div>
            </header>
            <div className="sidebar" id="sidebar">
                {
                    dataHeader.map((x,y)=>{
                        return(
                            <Link key={y} to={x.path}><span className="p-4 fw-600">{x.text}</span></Link>
                        )
                    })
                }
            </div>
            </>
        )
    }
}
