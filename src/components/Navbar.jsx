"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="w-auto text-xl font-bold md:w-55">
          <a href="/">KadangKoding</a>
        </div>

        {/* Navigation - Desktop */}
        <NavigationMenu className="hidden flex-1 md:flex">
          <NavigationMenuList className="justify-center gap-4">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className="text-[15px] font-medium"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Kanan - Desktop */}
        <div className="hidden w-55 items-center justify-end gap-4 md:flex">
          <Button variant="outline" className="cursor-pointer">
            Sign Up
          </Button>

          <Button className="cursor-pointer">Login</Button>
        </div>

        {/* Hamburger - Mobile */}
        <div className="flex items-center md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-left">KadangKoding</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-4 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[15px] font-medium"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="mt-4 flex flex-col gap-2">
                  <Button variant="outline" className="cursor-pointer">
                    Sign Up
                  </Button>

                  <Button className="cursor-pointer">Login</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
