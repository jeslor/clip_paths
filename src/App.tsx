import SplitType from 'split-type'
import { useEffect } from 'react'
import './App.css'

function App() {


  useEffect(() => {
    const texts:any = document.querySelectorAll('h2.split')
    texts.forEach((eachText:HTMLElement) => {
      const singleText:any = SplitType.create(eachText,)
      singleText.chars.forEach((char:any, i:number) => {
        char.style.transitionDelay = `${i * 0.1}s`
      });

      const transSplint = document.querySelectorAll('h2.transSplint')
      transSplint.forEach((eachText:any) => {
        const singleText:any = SplitType.create(eachText)
        singleText.chars.forEach((word:any, i:number) => {
          word.style.transitionDelay = `${i * 0.05}s`
        });
      });

   
  })
    // return () => {
    //   text.r()
    // }
  },[])


  

  return (
    <main className='w-screen h-screen flex overflow-hidden'>
      <section className='flex w-full pt-8'>
      <div className={`h-full overflow-hidden w-1/2 relative animateClip`} > 
        <div className="absolute h-full w-full flex flex-col justify-between bg-[rgba(0,0,0,0.4)] text-slate-200 z-[2]">
          <p className="flex items-center absolute left-6 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium text-[0.75rem] text-[#928b92d9] cursor-pointer hover:text-slate-200">share project</p>
          <p className="flex items-center absolute right-6 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium text-[0.75rem] text-[#928b92d9] cursor-pointer hover:text-slate-200">view project</p>
          <h2 className='split exo2 font-bold text-[4rem] w-fit mx-auto flex justify-around '>Design</h2>
          <h2 className='transSplint exo2  bottom-8 text-[4rem] w-fit ml-auto mr-4 pr-8'>#987</h2>
        </div>
        <img className=" h-full w-full object-cover absolute z-[1]" src="/jeslor.webp" alt="" />
      </div>
      <div className={`h-full overflow-hidden w-1/2 relative animateClip`}>
      <div className="absolute h-full w-full flex flex-col justify-between bg-[rgba(0,0,0,0.4)] text-slate-200 z-[2]">
          <p className="flex items-center absolute left-8 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium text-[0.75rem] text-[#928b92d9] cursor-pointer hover:text-slate-200">share project</p>
          <p className="flex items-center absolute right-8 top-[50%] [writing-mode:vertical-lr] translate-y-[-50%] uppercase font-medium text-[0.75rem] text-[#928b92d9] cursor-pointer hover:text-slate-200]">view project</p>
          <h2 className='split exo2 font-bold text-[4rem]  w-fit mx-auto'>Design</h2>
          <h2 className='transSplint exo2  bottom-8 text-[4rem] tracking-widest w-fit ml-auto mr-4 pr-8'>#640</h2>
        </div>
      <img className="object-cover h-full w-full" src="/landScape.webp" alt="" />
      </div>
    </section>
    </main>
  )
}

export default App
