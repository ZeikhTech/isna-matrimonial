import Link from "next/link";
import Header2 from "./header-after-login";
import Header1 from "./header-befor-login";
export default function HeaderBeforLogin() {
  return (
    <div>
      <Header1 />
      {/* <Header2 /> */}
    </div>
  );
}
