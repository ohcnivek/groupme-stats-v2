import { NavItem } from "./NavItem";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();

  return (
    <div className="flex space-x-6 justify-center">
      <NavItem href="/info" active={router.asPath === "/info"}>
        1
      </NavItem>
      <NavItem href="/results" active={router.asPath === "/results"}>
        2
      </NavItem>
    </div>
  );
};
