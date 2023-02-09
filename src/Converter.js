import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Converter() {

    const [currency, setCurrency] = useState([])
    // console.log(currency);

    const [from, setFrom] = useState('USD')
    // console.log(from);

    const [to, setTo] = useState('INR')
    // console.log(to);
    const [amount, setAmount] = useState(0)

    const [result, setResult] = useState()
    // console.log(result);

    const [code, setCode] = useState({})
    // console.log(code);



    const chart = async () => {
        try {
            let dollar = await axios.get("https://cdn.moneyconvert.net/api/latest.json");
            let coins = dollar.data.rates

            setCode(coins)
            // console.log(coins);


            let coinsData = Object.keys(coins)
            // console.log(coinsData);
            setCurrency(coinsData)


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        chart();
    }, []);


    let convert = () => {
        let formula = code[to] / code[from] * amount
        // let answer = `value of ${amount}${from}=${formula}${to}`
        setResult(formula)
        // alert(answer)
    }


    return (<div className='col-lg-10 mt-5'>
        <div class="card ">
            <div class="card-body fw-bold">
                <div className='mb-5'>
                    <div className='row mt-5'>
                        <div className='col-lg-1'></div>


                        {/* first box */}
                        <div className='col-lg-4'>
                            <label for="exampleInputEmail1" class="form-label">From :</label>
                            <select class="form-select " value={from} onChange={(e) => setFrom(e.target.value)}
                                aria-label="Default select example">
                                {
                                    currency.map((e) => <option value={e}>{e}</option>)
                                }
                            </select>
                        </div>
                        <div className='col-lg-2'></div>

                        {/* Second box */}

                        <div className='col-lg-4'>
                            <label for="exampleInputEmail1" class="form-label">To :</label>

                            <select class="form-select  bg-body rounded" value={to} onChange={(e) => setTo(e.target.value)} >

                                {
                                    currency.map((e) => <option value={e}>{e}</option>)
                                }

                            </select>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-1'></div>


                        {/* first box */}
                        <div className='col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Amount :</label>
                                <input type="number" class="form-control " value={amount} onChange={(e) => setAmount(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                        </div>
                        <div className='col-lg-2'></div>

                        {/* Second box */}

                        <div className='col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Value :</label>
                                <input type="number" class="form-control shadow-lg" value={result} />

                            </div>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                    <div className='row mt-5 text-center'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4'>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-info" onClick={convert} >Convert</button>
                            </div>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Converter;

