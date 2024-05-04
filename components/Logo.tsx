import { PiggyBank } from "lucide-react";
import Image from "next/image";
import React from "react";

function Logo() {
    return (
        <a href="/" className="flex items-center gap-2">
            <Image src={"/logo.png"} width={250} height={100} alt="Logo" />
            {/* <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
            <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
                BudgetTracker
            </p> */}
        </a>
    );
}

export function LogoMobile() {
    return (
        <a href="/" className="flex items-center gap-2">
            <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
                BudgetTracker
            </p>
        </a>
    );
}

export default Logo;
