import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="w-55 text-xl font-bold"><a href="/">KadangKoding</a></div>

        {/* Navigation */}
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="justify-center gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Home</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/products">Products</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/testimonials">
                Testimonials
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Kanan */}
        <div className="flex w-55 items-center justify-end gap-4">
          <Button variant="outline" className="cursor-pointer">Sign Up</Button>
          <Button className="cursor-pointer">Login</Button>
        </div>
      </div>
    </nav>
  );
}
