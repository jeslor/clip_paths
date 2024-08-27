import SplitType from 'split-type'
import { useEffect } from 'react'
import './App.css'

function App() {



    // const text:any = SplitType.create('h2.split', )
    // text.chars.forEach((char:any, i:number) => {
    //   char.style.transitionDelay = `${i * 0.05}s`
    //   char.style.transform = `translateY(${Math.random() > 0.5 ? 100 : -100}%)`
    // })


  

  return (
    <main className='w-screen h-screen flex overflow-hidden'>
      <div className=" h-full overflow-hidden w-1/2 relative" > 
        <div className="absolute h-full w-full flex flex-col justify-between bg-[rgba(0,0,0,0.4)] text-slate-200 z-[2]">
          <p className="flex items-center absolute left-6 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium">share project</p>
          <p className="flex items-center absolute right-6 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium">view project</p>
          <h2 className='split exo2 font-bold text-[4rem] tracking-widest w-fit mx-auto'>Design</h2>
          <h2 className='split exo2  bottom-8 text-[4rem] tracking-widest w-fit ml-auto mr-4'>#987</h2>
        </div>
        <img className=" h-full w-full object-cover absolute z-[1]" src="/jeslor.webp" alt="" />
      </div>
      <div className=" h-full overflow-hidden w-1/2 relative">
      <div className="absolute h-full w-full flex flex-col justify-between bg-[rgba(0,0,0,0.4)] text-slate-200 z-[2]">
          <p className="flex items-center absolute left-8 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium">share project</p>
          <p className="flex items-center absolute right-8 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium">view project</p>
          <h2 className='split exo2 font-bold text-[4rem] tracking-widest w-fit mx-auto'>Design</h2>
          <h2 className='split exo2  bottom-8 text-[4rem] tracking-widest w-fit ml-auto mr-4'>#987</h2>
        </div>
      <img className="object-cover h-full w-full" src="/landScape.webp" alt="" />
      </div>
    </main>
  )
}

export default App
