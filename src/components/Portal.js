import { useEffect } from "react"
import ReactDOM from "react-dom"

function Portal({ children }) {
  const portalRoot =
    typeof document !== `undefined` ? document.getElementById("portal") : null
  const El =
    typeof document !== `undefined` ? document.createElement("div") : null

  useEffect(() => {
    portalRoot.appendChild(El)
    return () => {
      portalRoot.removeChild(El)
    }
  }, [])

  if (El) {
    return ReactDOM.createPortal(children, portalRoot)
  } else {
    return null
  }
}

export default Portal
