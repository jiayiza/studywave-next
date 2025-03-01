"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Video, Grid, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { signOut } from "@/auth/helpers";

// import { User as UserType } from "@/auth";

export function Navbar() {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const user = session?.user;

  const location = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  const navItems = [
    { path: "/", label: "Home", icon: BookOpen },
    { path: "/upload", label: "Upload", icon: Video },
    { path: "/mindmap", label: "Mind Maps", icon: Grid },
    { path: "/dashboard", label: "Dashboard", icon: User },
  ];

  const getInitials = (name: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 px-6 transition-all duration-300 ${
        scrolled ? "glass-panel border-b py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight">
            StudyWave
          </span>
        </Link>

        <nav className="hidden space-x-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Skip dashboard link if not authenticated
            if (item.path === "/dashboard" && !isAuthenticated) {
              return null;
            }
            // Skip mindmap link if not authenticated
            if (item.path === "/mindmap" && !isAuthenticated) {
              return null;
            }
            return (
              <Link className="" key={item.path} href={item.path}>
                <Button
                  variant={isActive(item.path) ? "secondary" : "ghost"}
                  className={`rounded-full px-4 py-2 transition-all ${
                    isActive(item.path)
                      ? "bg-secondary"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 rounded-full p-0">
                  <Avatar>
                    <AvatarImage src={user?.avatar} alt={user.username} />
                    <AvatarFallback>
                      {getInitials(user?.username || "")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-4 py-2 text-sm">
                  <p className="font-medium">{user?.username}</p>
                  <p className="text-muted-foreground text-xs">{user?.email}</p>
                </div>
                <DropdownMenuSeparator />
                <Link className="cursor-pointer" href="/dashboard">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link className="cursor-pointer" href="/login">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link className="cursor-pointer" href="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
          <Link className="cursor-pointer" href="/upload">
            <Button className="rounded-full">
              <Video className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
