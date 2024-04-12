import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const useClickCom = () => {
  const sayHello = () => console.log("Say Hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h2 ref={title}>Hi</h2>
      <input placeholder="la" />
    </div>
  );
};

export default useClickCom;
