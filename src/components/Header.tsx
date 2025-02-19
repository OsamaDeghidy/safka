import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ShoppingCart, Search, Menu, User, ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";

interface HeaderProps {
  logo?: string;
  cartItemCount?: number;
  onSearchSubmit?: (searchTerm: string) => void;
  categories?: Array<{
    name: string;
    subcategories: Array<{ name: string; href: string }>;
  }>;
}

const Header = ({
  logo = "TechStore",
  cartItemCount = 3,
  onSearchSubmit = () => console.log("Search submitted"),
  categories = [
    {
      name: "Laptops",
      subcategories: [
        { name: "Business Laptops", href: "#" },
        { name: "Gaming Laptops", href: "#" },
        { name: "Ultrabooks", href: "#" },
      ],
    },
    {
      name: "Accessories",
      subcategories: [
        { name: "Keyboards", href: "#" },
        { name: "Mice", href: "#" },
        { name: "Monitors", href: "#" },
      ],
    },
    {
      name: "Cloud Services",
      subcategories: [
        { name: "Storage Solutions", href: "#" },
        { name: "Hosting Services", href: "#" },
        { name: "Security Services", href: "#" },
      ],
    },
  ],
}: HeaderProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">{logo}</h1>
        </div>

        {/* Category Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuTrigger className="text-gray-700">
                  {category.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.name}>
                        <NavigationMenuLink
                          href={subcategory.href}
                          className="block p-2 hover:bg-gray-100 rounded-md"
                        >
                          {subcategory.name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center flex-1 max-w-md mx-4"
        >
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Button type="submit" className="ml-2">
            Search
          </Button>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 bg-blue-600"
                  variant="secondary"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
