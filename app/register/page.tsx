import { authOptions } from "@/auth";
import CheckoutButton from "@/components/CheckoutButton";
import { getServerSession } from "next-auth";

async function Register() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <p>Lets handle your Membership {session?.user?.name?.split(" ")[0]}</p>
      <CheckoutButton />
    </div>
  );
}

export default Register;
