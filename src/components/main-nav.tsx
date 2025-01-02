import { MainNavItem } from "@/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items, children }: MainNavProps) {
  return <nav>Main nav</nav>;
}
