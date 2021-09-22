import Link from "next/link";
import Header2 from "./header-after-login";
import Header1 from "./header-befor-login";
import { useDispatch, useSelector } from "react-redux";
import { useState ,useEffect} from "react";
export default function Header() {
  
  const authToken = useSelector((state) => state.auth.token);
  console.log("token", authToken);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  // console.log(authToken);
  return (
  <div>
      {authToken !== 'undefined' && authToken !== ''? <Header2/>:<Header1 />}
    </div>
  );
}
