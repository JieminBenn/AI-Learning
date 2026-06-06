import Link from "next/link";
import { BrainCircuit, FolderKanban, Home, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/models", label: "Models", icon: Sparkles },
];

export function Navigation() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <BrainCircuit aria-hidden="true" size={24} />
        <span>AI Engineering Mastery</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.href} key={item.href}>
              <Icon aria-hidden="true" size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
