import { RecoilRoot } from 'recoil'
import './App.css'
import Chats from './components/Chats/Chats'
import Bloodpressure from './components/Diagnosis/Bloodpressure'
import Header from './components/Header'

function App() {

  return (
    <div className=' px-3 py-6 bg-slate-200 h-fit w-full m-auto'>  
      <Header />
      <div className=' flex justify-between gap-20'>
        <RecoilRoot>
          <Chats/>
        </RecoilRoot>
      </div>
      
    </div>
  )
}

export default App
