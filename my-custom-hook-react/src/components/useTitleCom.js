import { useEffect, useState } from "react"

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector('title')
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title])
    
    return setTitle
}


const useTitleCom = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater(("Home"), 5000));
    return(
        <div>
            <h2>Hi</h2>
        </div>
    )
}

export default useTitleCom