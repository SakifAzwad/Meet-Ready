import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login = async () => {



  return (
        <>
        
<LoginForm/>
        
        </>
        
    );
};

export default Login;