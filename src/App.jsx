import React from 'react'

const App = () => {
  return (
  <> 
  <div className='h-screen w-full items-center bg-slate-200 rounded-lg flex flex-col justify-between '>

    <div className='mt-5 ml-{50%} p-3 flex flex-col space-y-5'>
     <h1 className='text-bold text-xl text-blue-500 font-bold content-center '> Write a prompt for getting suggestion!</h1>

     <div class=" flex items-center w-full">
          <input type="text" className="w-[80%] rounded-lg border-2 border-blue-300 hover:border-blue-500 p-2 placeholder:font-bold placeholder:text-slate-700 bg-slate-100 shadow-xl active:border-blue-600" placeholder="Search ..." />
          <button class="ml-2 rounded-lg p-2 text-white hover:bg-blue-400 w-[20%] font-bold bg-blue-500 shadow-lg shadow-blue-400 ">Search</button>
     </div>

    </div>

    <div className='items-center flex flex-col p-3 w-full h-[50%] '>
      
        <textarea className='font-serif w-full h-full appearance-none bg-blue-100 p-3 text-slate-900 border-2 border-blue-500 hover:border-blue-600 active:border-blue-700 rounded-lg' wrap='hard' > sfsagfadgadgadgadfadfasfasfasgvgava svavasdgvadgadfa dgagadgvavddvamdv dabdavadvadbabadbadbad dbbadavbda </textarea>
       
    </div> 

  </div>
  </>
)
}

export default App

