import Logo from "@/components/common/logo"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div>
        <div className="flex  justify-between items-start sm:items-baseline gap-4">
            <Logo />
            <Button className="lg:text-sm text-[10px] lg:py-6 lg:px-8 rounded-full cursor-pointer hover:bg-[#07C75F] bg-[#07C75F] text-white">Contact Us</Button>
        </div>
    </div>
  )
}

export default Header