import React from 'react'
import onChain from './../static/on_chain.png'
import { AiFillCheckCircle } from 'react-icons/ai'

const Hero = () => {
    return (
        <div>
            <div className="w-[650px] h-[488px] left-[155px] top-[192px] absolute justify-start items-center gap-[114px] inline-flex">
                <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-8 flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="text-neutral-700 text-5xl font-bold font-['Poppins'] leading-[61.92px]">Your all-in-one solution<br />to create, build, and grow <br />your DeFi investment.</div>
                            <div className="w-[638px] text-neutral-500 text-2xl font-normal font-['Poppins']">Use our safety yield protocols, insurance and investment models to manage your digital assets. we are a decentralized community-based system that builds your portfolio for you!</div>
                        </div>
                        <div className="justify-start items-start gap-12 inline-flex">
                            <div className="self-stretch justify-start items-center gap-3 flex">
                                <AiFillCheckCircle className='text-blue-500' />
                                <div className="text-neutral-700 text-xl font-medium font-['Poppins'] capitalize">whitepaper</div>
                            </div>
                            <div className="justify-start items-center gap-3 flex">
                                <AiFillCheckCircle className='text-blue-500' />
                                <div className="text-neutral-700 text-xl font-medium font-['Poppins'] capitalize">Deck</div>
                            </div>
                            <div className="justify-start items-center gap-3 flex">
                                <AiFillCheckCircle className='text-blue-500' />
                                <div className="text-neutral-700 text-xl font-medium font-['Poppins'] capitalize">Live Event</div>
                            </div>
                        </div>
                        <a href="#_" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-gradient-to-l from-blue-600 to-sky-500 rounded-xl shadow-sm cursor-pointer">
                            <span class="relative px-8">Get Started</span>
                        </a>
                    </div>
                    <div className="self-stretch justify-start items-center gap-10 inline-flex">
                        <div className="w-60 h-[60px] relative">
                            <div className="left-[63px] top-[15px] absolute text-white text-xl font-medium font-['Poppins']">Get Started</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="w-[928px] h-[928px] left-[633px] top-[40px] absolute" alt="onchain" src={onChain} />
            <div>
                <div className="w-96 h-28 justify-start items-start gap-9 inline-flex">
                    <div className="w-96 self-stretch justify-start items-start gap-8 flex">
                        <div className="w-80 h-28 relative">
                            <div className="w-80 h-28 left-0 top-0 absolute bg-gradient-to-l from-slate-600 to-slate-500 rounded-3xl border border-blue-400 backdrop-blur-sm" />
                            <div className="w-64 h-20 left-[20px] top-[16px] absolute justify-start items-center gap-6 inline-flex">
                                <div className="w-24 h-20 relative">
                                    <div className="w-24 h-20 left-0 top-0 absolute bg-white rounded-3xl" />
                                    <img className="w-16 h-16 left-[13px] top-[10px] absolute rounded-3xl" src="https://via.placeholder.com/64x66" />
                                </div>
                                <div className="text-zinc-700 text-2xl font-semibold font-['Poppins'] leading-loose">Bianance <br />smart chain</div>
                            </div>
                        </div>
                        <div className="w-80 h-28 relative">
                            <div className="w-80 h-28 left-0 top-0 absolute bg-gradient-to-l from-slate-600 to-slate-500 rounded-3xl border border-blue-400 backdrop-blur-sm" />
                            <div className="w-64 h-20 left-[20px] top-[16px] absolute justify-start items-center gap-6 inline-flex">
                                <div className="w-24 h-20 relative">
                                    <div className="w-24 h-20 left-0 top-0 absolute bg-white rounded-3xl" />
                                    <img className="w-16 h-16 left-[13px] top-[11.91px] absolute" src="https://via.placeholder.com/65x62" />
                                </div>
                                <div className="text-zinc-700 text-2xl font-semibold font-['Poppins'] leading-loose">Solana</div>
                            </div>
                        </div>
                        <div className="w-80 h-28 relative">
                            <div className="w-80 h-28 left-0 top-0 absolute bg-gradient-to-l from-slate-600 to-slate-500 rounded-3xl border border-blue-400 backdrop-blur-sm" />
                            <div className="w-64 h-20 left-[20px] top-[16px] absolute justify-start items-center gap-6 inline-flex">
                                <div className="w-24 h-20 relative">
                                    <div className="w-24 h-20 left-0 top-0 absolute bg-white rounded-3xl" />
                                    <img className="w-16 h-16 left-[13px] top-[10px] absolute rounded-3xl" src="https://via.placeholder.com/64x66" />
                                    <img className="w-16 h-16 left-[12px] top-[10px] absolute" src="https://via.placeholder.com/66x66" />
                                </div>
                                <div className="text-zinc-700 text-2xl font-semibold font-['Poppins'] leading-loose">Avalanche</div>
                            </div>
                        </div>
                        <div className="w-80 h-28 relative">
                            <div className="w-80 h-28 left-0 top-0 absolute bg-gradient-to-l from-slate-600 to-slate-500 rounded-3xl border border-blue-400 backdrop-blur-sm" />
                            <div className="w-64 h-20 left-[20px] top-[16px] absolute justify-start items-center gap-6 inline-flex">
                                <div className="w-24 h-20 relative">
                                    <div className="w-24 h-20 left-0 top-0 absolute bg-white rounded-3xl" />
                                    <img className="w-16 h-16 left-[14px] top-[12px] absolute" src="https://via.placeholder.com/62x62" />
                                </div>
                                <div className="text-zinc-700 text-2xl font-semibold font-['Poppins'] leading-loose">Polygon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero