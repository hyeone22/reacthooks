const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault()
      event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
  }
  
  const usePreventLeaveCom = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
      <div>
        <h2>Hi</h2>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>UnProtect</button>
      </div>
    )
  }
  
  export default usePreventLeaveCom