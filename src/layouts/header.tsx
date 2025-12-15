import Logo from "@/components/common/logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div>
      <div className="flex  justify-between items-start sm:items-baseline gap-4">
        <Link to={"https://myrtleng.com/"}>
          <Logo />
        </Link>
        <Link to={"https://myrtleng.com/contact-us"}>
          <Button className="lg:text-sm text-[10px] lg:py-6 lg:px-8 rounded-full cursor-pointer hover:bg-[#07C75F] bg-[#07C75F] text-white">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
