import { FC, useState } from "react"
import Home from "./pages/Home"
import Modal from "./components/Modal"

const App: FC = () => {
  const [modalToggle, setModalToggle] = useState<boolean>(false)

  return (<>
        <Home setModalToggle={setModalToggle}/>
        {modalToggle && <Modal setModalToggle={setModalToggle}/>}
  </>
  )
}

export default App
