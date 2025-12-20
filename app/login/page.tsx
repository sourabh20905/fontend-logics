"use client";

import { login } from "@/src/lib/mockAuth";
import { ROLE_ROUTES } from "@/src/lib/roleRoutes";
import { Role } from "@/src/lib/roles";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (role: Role) => {
    login(role);

    const redirectPath = ROLE_ROUTES[role];
    router.push(redirectPath);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Mock Login</h2>

      <button onClick={() => handleLogin("admin")}>Login as Admin</button>

      <br />
      <br />

      <button onClick={() => handleLogin("doctor")}>Login as Doctor</button>

      <br />
      <br />

      <button onClick={() => handleLogin("user")}>Login as User</button>
    </div>
  );
}
