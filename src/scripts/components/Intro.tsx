import { VscLinkExternal } from "react-icons/vsc";

export default function Intro() {
    return(
        <>
            <div className='intro-container'>
                <div className='intro-div'>
                    <div>
                        <div className='text-2xl md:text-4xl 2xl:text-7xl'>
                            I'm Edmund.
                        </div>
                        <div className='text-lg md:text-2xl 2xl:text-3xl'>
                            I mostly think. Sometimes, I explore and create.
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-x-10 gap-y-2 md:text-lg 2xl:text-xl'>
                        <div className='text-right font-bold'>Contact</div>
                        <div className='col-span-3'>
                        <a href='https://www.linkedin.com/in/edmund-wu-551b60230/' target='_blank'> Linkedin <div className='icon'><VscLinkExternal /></div></a>
                        </div>

                        <div className='text-right font-bold'>Research</div>
                        <div className='col-span-3 text-stone-500'>
                            My study is centered around theoretical statistics, on 
                            convergence rates in Hidden Markov Models that of which have an unknown number of states.
                        </div>

                        <div className='text-right font-bold'>Projects</div>
                        <div className='col-span-3 text-stone-500'>
                            I do some projects with machine learning. I have previously done some fun stuff related
                            to web3 and data analysis, with an ongoing interest in semi-algorithmic trading.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}