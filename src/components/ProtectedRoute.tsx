import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { ReactNode } from "react";

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }): ReactNode => {
    const {data:session,status}=useSession();
    const router=useRouter();

    useEffect(()=>{
        if(status==="unauthenticated"){
            router.push("/auth/signin");
        }
    }   
    ,[status,router]);

    if(status==="loading"){
        return <p>Loading...</p>
    }
    if(status==="authenticated"){
        return <>{children}</>
    }

}

export default ProtectedRoute;