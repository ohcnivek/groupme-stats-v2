import clsx from "clsx";
import Link from "next/link";

interface NavItemProps {
  href: string;
  active?: boolean;
  children: string;
}

export const NavItem = ({ href, active, children }: NavItemProps) => {
  return (
    <Link href={href}>
      <div className={clsx(active && "rounded-md bg-blue-500 px-2")}>
        <p
          className={clsx(
            "font-semibold hover:text-blue-500",
            active && "text-white"
          )}
        >
          {children}
        </p>
      </div>
    </Link>
  );
};
