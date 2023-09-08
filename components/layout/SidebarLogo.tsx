import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        p-4 
        flex 
        text-sky-500
        items-center 
        justify-start
        space-x-3 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <BsTwitter size={28}/>
      <div className="text-xl text-sky-500 hidden lg:block">
        Twitter
      </div>
    </div>
  );
};

export default SidebarLogo;
