import { useEffect } from "react"
import ReactDOM from "react-dom"

function Portal({ children }) {
  const portalRoot = document.getElementById("portal")
  let El = document.createElement("div")

  // useEffect(() => {
  //   portalRoot.appendChild(El)
  //   // return () => {
  //   // portalRoot.removeChild(El)
  //   // }
  // }, [])

  return ReactDOM.createPortal(children, portalRoot)
}

export default Portal
