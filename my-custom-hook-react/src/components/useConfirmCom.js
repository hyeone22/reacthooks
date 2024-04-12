const useConfirm = (message = "", onConfirm, onCancel) => {
    if (onConfirm && typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
      }
    const confirmAction = () => {
      if (confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    }
    return confirmAction;
  }
  
  const useConfirmCom = () => {
    const deleteWorld = () => console.log("Delete World")
    const above = () => console.log("OK")
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, above);
    return (
      <div>
        <h2>Hi</h2>
        <button onClick={confirmDelete}>Delete World!</button>
      </div>
    )
  }
  
  export default useConfirmCom