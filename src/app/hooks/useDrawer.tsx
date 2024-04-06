import React from "react"

type Anchor = "right"

const useDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }
  }

  const closeDrawer = () => {
    setState({ ...state, right: false })
  }

  return {
    toggleDrawer,
    closeDrawer,
    open: state.right,
  }
}

export default useDrawer
