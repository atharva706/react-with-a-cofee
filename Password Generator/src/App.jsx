import { useState, useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [char, setCharAllowed] = useState(false)
  const [num, setNumAllowed] = useState(false)
  const [password, setPassword] = useState("");

  const reffpass = useRef(null);

  const passGenerator = useCallback(() => {

    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*(){}`~[]";

    for(let i = 0 ; i < length ; i++){
      let ch = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(ch)
    }

    setPassword(pass)

  }, [length, num, char , setPassword])

  const copyToClipboard =  useCallback (()=> {
    reffpass.current?.select()
    reffpass.current?.setSelectionRange(0,333)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passGenerator()} , [length,num,char,passGenerator])

  return (
    <div className='bg-gray-800 w-full max-w-md mx-auto shadow-md
                    rounded-lg px-3 py-3 my-8'>
      <h1 className='text-white text-center ' >Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          ref={reffpass}

          readOnly
        />
        <button onClick={copyToClipboard}  className="bg-orange-400 px-4 py-2 text-black shrink-0 cursor-pointer
             hover:bg-orange-500 hover:text-white" >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className='text-white' htmlFor="">Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input type="checkbox"
            checked={num}
            id='numberInput'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
          />
          <label className='text-white' htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1' >
          <input type="checkbox"
            checked={char}
            id='characterinput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label className='text-white' htmlFor="characterinput">Characters</label>
        </div>


      </div>
    </div>
  )
}

export default App
