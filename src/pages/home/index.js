import React from 'react'
import Navgiation from '../../components/Navigation'
import Image from 'react-image-resizer';
import './home.css'

const Home = (props) => {

    const arr = [1, 2, 2, 2, 2, 2, 2, 2]
    let data = []
    for (let i = 0; i < 0; i++) {
        data.push(i)
    }

    return (
        <>
            <Navgiation />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card p-2">
                            <input type="text" className="form-control form-control-sm" placeholder="Pencarian barang berdasarkan nama atau barcode..." />
                            <hr />
                            <div className="row">
                                {arr.map((el, i) =>
                                    <div className="col-md-3" key={i} style={style.cardPadding}>
                                        <div className="card">
                                            <Image src="https://cf.shopee.co.id/file/922c1e58b8903be09a36deb063253003" width={100} height={100} style={style.image} />
                                            <div className="card-body text-center">
                                                <p className="card-title">Minuman</p>
                                                <hr style={style.hrPadding} />
                                                <p className="card-text">Stok: 10</p>
                                                <p className="card-text text-success font-weight-bold" style={style.hrPadding}>10.000</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-2" style={{height: '60%'}}>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="bg-info text-white">
                                        <tr>
                                            <th>Barang</th>
                                            <th>Qty</th>
                                            <th>Harga</th>
                                            <th>#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((el, i) =>
                                            <tr key={i}>
                                                <td>Minuman</td>
                                                <td>
                                                    <input type="number" min="1" style={{width: '60px'}} />
                                                </td>
                                                <td>1.000.000</td>
                                                <td><span className="text-danger fa fa-trash" style={{ cursor: 'pointer' }} ></span></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card p-2 align-items-end mt-2">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <tbody className="">
                                        <tr className="font-weight-bold">
                                            <td>Total Qty</td>
                                            <td>:</td>
                                            <td>12</td>
                                        </tr>
                                        <tr className="font-weight-bold">
                                            <td>Total Diskon</td>
                                            <td>:</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="bg-danger text-white font-weight-bold">
                                            <td>Grand Total</td>
                                            <td>:</td>
                                            <td>Rp. 2.000.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row">
                                    <div class="col">
                                        <button className="btn btn-warning text-white btn-lg btn-block"><span className="fa fa-hand-paper-o"></span> Tahan</button>
                                    </div>
                                    <div class="col">
                                        <button className="btn btn-success btn-lg btn-block"><span className="fa fa-money"></span> Bayar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Home

const style = {
    image: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    hrPadding: {
        marginTop: '-10px',
        marginBottom: '5px'
    },
    cardPadding: {
        marginBottom: '30px',
    }
}