
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
export default function Joinn(){
    return (
        <main>
            <section className="my-20">
                <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
                <Image
                    src={"/logo2.png"}
                    alt="Nike Logo"
                    width={65} height={35}
                    />
                    <div className=" items-center justify-center  flex flex-col">
                        <h1 className="font-bold text-xl ">BECOME A NIKE MEMBER</h1>
                        
                    </div>
                    <div className="mt-10 mb-5 max-w-[280px] mx-auto">
                    <p className="text-gray-600 text-[12px] "   >Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mt-3">
                        <Input type="Email" placeholder="Email" className="w-80" />
                        <Input type="password" placeholder="password" className="w-80" />
                        <Input type="name" placeholder="First Name" className="w-80" />
                        <Input type="name" placeholder="Last Name" className="w-80" />
                        <Input type="dob" placeholder="Date of Birth" className="w-80" />
                        <p className="text-gray-600 text-[12px]"   >Get a Nike Member Reward every year on your Birthday.</p>
                    </div>
                        
                    <div className="flex flex-col justify-center items-center mt-4">
                        <p className="text-blue-500 text-[12px]">By creating an account, you agree to Nike&apos;s <u>Privacy Policy</u></p>
                        <p className="text-blue-500 text-[12px]">and <u>Terms of Use</u></p>
                    </div>
                    <Link href={"/joinus"} ><Button className="w-80 ronded-sm my-6 hover:bg-gray-400">JOIN US</Button></Link>
                    <p className="text-blue-500 text-[12px]">Already a Member <Link href={"/login"}><u className="text-black">Sign In?</u></Link></p>
                </div>
            </section>
        </main>
    )
}