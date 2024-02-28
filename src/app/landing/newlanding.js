import './landing.css';
import React, { useRef } from 'react';

const NewLanding = ({ section1Ref, section2Ref, section3Ref, section4Ref })  => {
   
    return (
        <>
            <div className='flex my-6 lg:my-10 w-full flex-col justify-center items-center'>
                <div className='w-full flex justify-center items-center'>
                    <p className='font-medium text-black text-3xl'>Squidward</p>

                </div>
                <div className='lg:flex'>
                    <div className='bg-[#A9EFE2] lg:pt-10 mt-16 flex items-start justify-between py-8 px-8 lg:py-8 max-h-[405px] lg:px-16 flex-col'>
                        <div>
                            <p className='text-[#EEB633] font-medium lg:text-8xl text-4xl'>$SQUID</p>
                            <p className=' text-4xl font-medium text-black lg:text-8xl'>Token</p>

                        </div>

                        <div className='w-full'>
                            <p className='text-white font-bold lg:text-xl text-base pridi'>0x0000000000000000000000000</p>
                        </div>

                        <div className='flex gap-6 mt-3 lg:mt-0'>
                            <div className="bg-[#EEB633] text-black hover:scale-110 transition-transform duration-500 ease-in-out rounded-[15px] lg:text-base text-xs font-medium py-2 px-4 lg:px-8">
                                Buy Now
                            </div>
                            <div className="bg-[#EEB633] text-black hover:scale-110 transition-transform duration-500 ease-in-out rounded-[15px] lg:text-base text-xs font-medium py-2 px-4 lg:px-8">
                                Chart
                            </div>
                        </div>
                    </div>

                    <div className='lg:ml-6 ml-0 mt-4 lg:mt-0'>
                        <img src='/Images/heroimg.png' className='w-[300px] lg:max-w-[370px]'></img>
                    </div>

                </div>
            </div>
            <div className='w-full bg-[#EFA013] flex justify-center items-center lg:py-10 py-8'>
                <div className='flex justify-center items-center gap-4 lg:gap-8'>
                    <div className='flex justify-center items-center'>
                        <img src='/Images/telegram.png' className='hover:scale-110 transition-transform duration-500 ease-in-out max-w-[45px] lg:max-w-[84px]' ></img>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src='/Images/twitter.png' className='hover:scale-110 transition-transform duration-500 ease-in-out max-w-[45px] lg:max-w-[84px]' ></img>
                    </div>
                    {/* <div className='flex justify-center items-center'>
                        <img src='/Images/twitter2.png' className='hover:scale-110 transition-transform duration-500 ease-in-out max-w-[45px] lg:max-w-[84px]' ></img>
                    </div> */}
                </div>
                <div className='flex h-full ml-4 lg:ml-16 justify-center items-center pt-4 lg:pt-6'>
                    <p className='text-3xl font-medium text-black lg:text-7xl'>Community</p>
                </div>
            </div>
            <div ref={section1Ref} className='lg:flex lg:mt-28 mt-20'>

                <div className='flex justify-center items-center resp-margin'>
                    <img className='lg:max-w-[500px] max-w-[300px]' src='/Images/howtobuyhero.png'></img>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='w-full flex flex-row items-center justify-center gap-6'>
                        <div className='flex flex-col resp-coin justify-center items-center'>
                            <img src='/Images/squidcoin.png' className='max-w-[100px]'></img>
                        </div>
                        <div className='flex flex-col pt-8 justify-center items-center'>
                            <p className='font-medium text-3xl lg:text-6xl text-black'>How To Buy $SQUID</p>
                        </div>

                    </div>
                    <div className='lg:px-20 px-10'>
                        <div className='lg:flex bg-[#EEB633] lg:min-h-[277px] resp-height  mt-16 px-10 lg:px-12 py-8 lg:py-10 '>
                            <div className='h-full flex justify-center items-center lg:pt-4'>
                                <img className='lg:max-w-[147px] max-w-[100px]' src='/Images/Wallet.png'></img>
                            </div>

                            <div className='flex flex-col justify-center items-center lg:w-[70%] mt-6 lg:mt-0 ml-0 lg:ml-16'>
                                <p className='font-medium text-4xl text-white'>Make Wallet</p>
                                <ul className='list-disc mt-6 pridi'>
                                    <li className='font-semibold text-lg text-white'>Download a wallet (Metamask, Coinbase Wallet or WalletConnect compatible) and follow the steps to set it up. Don't ever share your 12-word seed, we will never ask you for it, ever!</li>
                                </ul>

                            </div>

                        </div>

                        <div className='lg:flex bg-[#EEB633] lg:min-h-[277px] resp-height mt-16 px-10 lg:px-12 py-8 lg:py-10 '>
                            <div className='h-full flex justify-center items-center '>
                                <img className='lg:max-w-[147px] max-w-[100px]' src='/Images/eth.png'></img>
                            </div>

                            <div className='flex flex-col justify-center items-center lg:w-[70%] mt-6 lg:mt-0 ml-0 lg:ml-16'>
                                <p className='font-medium text-4xl text-white'>Get Eth</p>
                                <ul className='list-disc mt-6'>
                                    <li className='font-semibold pridi text-lg text-white'>Enter your wallet and buy as much ETH as you need, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.</li>
                                </ul>

                            </div>

                        </div>

                        <div className='lg:flex bg-[#EEB633] lg:min-h-[277px] resp-height mt-16 px-10 lg:px-12 py-8 lg:py-10 '>
                            <div className='h-full flex justify-center items-center '>
                                <img className='lg:max-w-[147px] max-w-[100px]' src='/Images/uniswap.png'></img>
                            </div>

                            <div className='flex flex-col justify-center items-center lg:w-[70%] mt-6 lg:mt-0 ml-0 lg:ml-16'>
                                <p className='font-medium text-4xl text-white'>Go to Uniswap</p>
                                <ul className='list-disc mt-6'>
                                    <li className='font-semibold pridi text-lg text-white'>Once you have enough ETH, connect to app.uniswap.org in Chrome or directly from the browser inside your Metamask app. Paste the $SQUID token address into Uniswap, select Squidward, and confirm. When Metamask prompts you for a wallet signature, sign.</li>
                                </ul>

                            </div>

                        </div>

                        <div className='lg:flex bg-[#EEB633] lg:min-h-[277px] resp-height mt-16 px-10 lg:px-12 py-8 lg:py-10 '>
                            <div className='h-full flex justify-center items-center '>
                                <img className='lg:max-w-[147px] max-w-[100px] lg:mt-6' src='/Images/squidcoin.png'></img>
                            </div>

                            <div className='flex flex-col justify-center items-center lg:w-[70%] mt-6 lg:mt-0 ml-0 lg:ml-16'>
                                <p className='font-medium text-4xl text-white'>Swap</p>
                                <ul className='list-disc mt-6'>
                                    <li className='font-semibold pridi text-lg text-white'>Swap your ETH for $SQUID. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</li>
                                </ul>

                            </div>

                        </div>
                    </div>


                </div>

            </div>
            <div  ref={section2Ref} className='bg-white w-full mt-10 py-6 lg:mt-16 lg:py-10 flex lg:flex-row flex-col justify-center items-center'>
                <div className='lg:flex justify-center relative z-20 items-center mr-0 lg:-mr-[50px]'>
                    <img src='/Images/tokenomics.png' className='lg:max-h-[580px] max-h-[300px]'></img>
                </div>

                <div>
                    <div className='w-full flex justify-center lg:justify-start  items-center'>
                        <p className='font-medium text-3xl lg:text-6xl '>Tokenomics</p>
                    </div>


                    <div className='bg-[#EEB633] relative z-10 mx-3 lg:mx-0 lg:max-w-[700px] mt-10 px-8 py-6 lg:px-16 lg:py-16'>
                        <p className='font-medium text-white lg:text-4xl text-2xl'>Total Supply 69,000,000,000</p>
                        <div className='flex gap-6 mt-4'>
                            <p className='text-white font-medium text-2xl lg:text-4xl'>100% </p>

                            <div>
                                <p className='font-semibold text-base text-white lg:text-xl pridi'>tokens into LP. ERC20 token with 5% small buy/sell taxes. Fill your bags and join the squidward community to meet Mr. Squidward on the other side of the moon!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div  ref={section3Ref} className='lg:mt-40 w-full mt-10 flex flex-col justify-center items-center '>
                <div className='w-full flex justify-center items-center'>
                    <p className='font-medium text-3xl lg:text-6xl text-black'>Squidward Map</p>
                </div>
                <div className='mt-6 mx-8 lg:mx-0 max-w-[590px] bg-[#EEB633] text-white flex flex-col justify-center items-start py-10 lg:py-16 pb-10 px-16 lg:px-28'>
                    <p className='font-medium lg:text-4xl text-2xl'>Pase 1 : Launch </p>
                    <p className='font-medium lg:text-4xl text-2xl my-6'>Pase 2 : Hold </p>
                    <p className='font-medium lg:text-4xl text-2xl'>Pase 3 : To the Moon </p>
                </div>
            </div>
            <div  ref={section4Ref} className='lg:mt-40 w-full mt-10 flex flex-col justify-center items-center '>
                <div className='w-full flex justify-center items-center'>
                    <p className='font-medium text-3xl lg:text-6xl text-black'>About</p>
                </div>
                <div className='mt-10 mx-8 lg:mx-0 bg-[white] max-w-[590px] text-black flex flex-col justify-center text-center items-start py-10 lg:py-20 pb-10 px-16 lg:px-24'>
                    <p className='font-semibold lg:text-xl text-lg pridi'>Launched stealth with no presale or private sale, no influencers, contract renounced, LP locked/burnt on the orders of Mr. Squidward. $SQUID is designed and destined to be in the top 7 memecoins of all time.</p>
                </div>
                <div className='flex mt-36 w-full justify-center items-center'>
                    <img src='/Images/finalimg.png' className="lg:max-w-[676px] max-w-[300px]"></img>
                </div>
            </div>
            <div className="mt-32 mb-20 flex justify-center items-center gap-6 w-full">
                <img className=" w-[40px] lg:w-[80px] hover:scale-110 transition-transform duration-500 ease-in-out" src="/Images/telegram.png"></img>
                <img className=" w-[40px] lg:w-[80px] hover:scale-110 transition-transform duration-500 ease-in-out" src="/Images/twitter.png"></img>
                {/* <img className=" w-[40px] lg:w-[80px] hover:scale-110 transition-transform duration-500 ease-in-out" src="/Images/twitter.png"></img> */}

            </div>
        </>
    )
}

export default NewLanding