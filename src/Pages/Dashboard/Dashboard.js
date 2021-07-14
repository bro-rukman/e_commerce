import React, { Component } from 'react'
import Sidebar from 'Components/Sidebar/Sidebar'
import 'Components/Sidebar/sidebar.css'
import 'Assets/Css/style.css'
import axios from 'axios'
import { RootDevelopmentApi } from 'Configs/API'
import Swal from 'sweetalert2'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            code : '',
            errcode : '',
            name : '',
            errname : '',
            desc : '',
            errdesc : '',
            price : null,
            errprice : '',
            stock : null,
            errstock : '',
            loading : false,
            errors : {}
        }
    }
    componentDidMount(){
        axios.get(`${RootDevelopmentApi}/api/v1/vegetable/all`).then((res)=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    handleValidation=()=>{
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let code = document.forms["addProduct"]["code"].value
        let name = document.forms["addProduct"]["name"].value
        let desc = document.forms["addProduct"]["desc"].value
        let price = document.forms["addProduct"]["price"].value
        let stock = document.forms["addProduct"]["stock"].value
        if (code === "" || name === "" || desc === "" || price === "" || stock === "") {
            Swal.fire({
                icon : 'error',
                text : 'Mohon lengkapi data anda !'
            })
        }else{
            const data ={
                code : this.code,
                name : this.name,
                description : this.desc,
                price : this.price,
                stock : this.stock
            }
            console.log(data);
            this.postProduct(data)
        }
    }
    postProduct(data){
        console.log(data);
        axios.post(`${RootDevelopmentApi}/api/v1/vegetable/add`,data).then((res)=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <>
                <Sidebar/>
                <div className="content-sidebar">
                    <h2 className="text-center">Caryta Creative</h2>
                    <p className="text-center">Durti Indah Residence no.14B, Duren Tiga, Pancoran, Jakarta Selatan, 12760</p>
                    <hr />
                    <h3>ADD PRODUCT</h3>
                    <form action="add" name="addProduct" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="code">Kode Produk</label>
                            <br />
                            <input type="text" name="code" id="code" placeholder="type here..." className="w-50 py-1 px-3 my-2" onChange={e=>this.code = e.target.value} />
                            <span>{this.state.errcode}</span>
                        </div>
                        <div>
                            <label htmlFor="code">Nama Produk</label>
                            <br />
                            <input type="text" name="name" id="name" placeholder="type here..." className="w-50 py-1 px-3 my-2" onChange={e=>this.name = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="desc">Deskripsi Produk</label>
                            <br />
                            <textarea name="desc" id="desc" className="w-50 py-1 px-3 my-2" rows="10" placeholder="type here..." onChange={e=>this.desc = e.target.value}/>
                        </div>
                        <div>
                            <label htmlFor="code">Harga Produk</label>
                            <br />
                            <input type="text" name="price" id="price" placeholder="type here..." className="w-50 py-1 px-3 my-2" onChange={e=>this.price = e.target.value} />
                        </div>
                        <div>
                            <label htmlFor="code">Stok Produk</label>
                            <br />
                            <input type="text" name="stock" id="stock" placeholder="type here..." className="w-50 py-1 px-3 my-2" onChange={e=>this.stock = e.target.value} />
                        </div>
                        <div className="d-flex mt-4 gap-3">
                            <button className="btn-primary px-4 py-2" onClick={this.handleSubmit}>Process</button>
                            <button className="btn-link px-4 py-2">Cancel</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
