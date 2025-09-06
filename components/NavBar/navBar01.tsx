// "use client";

// import * as React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Bell, Search, Handbag, Menu } from "lucide-react";

// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuTrigger,
//   NavigationMenuContent,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// export default function Navbar01() {
//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white shadow-sm ">
//       <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3">
//         {/* Left: Mobile Menu + Logo + Desktop Icons */}
//         <div className="flex items-center gap-2 sm:gap-3">
//           {/* Mobile: Hamburger Menu */}
//           <div className="md:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <button className="p-1">
//                   <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </button>
//               </SheetTrigger>
//               <SheetContent side="left" className="w-72 sm:w-80">
//                 <SheetHeader className="pb-4">
//                   <SheetTitle className="text-left">Navigation</SheetTitle>
//                 </SheetHeader>
//                 <div className="flex flex-col space-y-4">
//                   {/* Mobile Navigation Links */}
//                   <div className="space-y-3">
//                     <h3 className="font-semibold text-gray-900 border-b pb-2">Categories</h3>
//                     <Link href="/categories/men" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
//                       Men
//                     </Link>
//                     <Link href="/categories/women" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
//                       Women
//                     </Link>
//                     <Link href="/categories/kids" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
//                       Kids
//                     </Link>
//                   </div>
                  
//                   <div className="space-y-3 border-t pt-4">
//                     <Link href="/products" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
//                       Products
//                     </Link>
//                     <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
//                       About Us
//                     </Link>
//                   </div>

//                   {/* Mobile Action Items */}
//                   <div className="border-t pt-4 space-y-3">
//                     <div className="flex items-center gap-3 py-2">
//                       <Bell className="w-5 h-5" />
//                       {/* <img src="/images/bell.png" alt="Notification Bell" className="w-5 h-5" /> */}
//                       <span>Notifications</span>
//                       <span className="ml-auto bg-red-600 text-white text-xs rounded-full px-2 py-0.5">2</span>
//                     </div>
//                     <div className="flex items-center gap-3 py-2">
//                       <Search className="w-5 h-5" />
//                       <span>Search</span>
//                     </div>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>

//           {/* Logo - Responsive sizing */}
//           <div className="relative w-10 h-8 sm:w-24 sm:h-9 md:w-28 md:h-10 lg:w-32 lg:h-12">
//             <Image
//               src="/images/logo2.png"
//               alt="Logo"
//               fill
//               className="object-contain"
//             />
//           </div>

//           {/* Desktop: Divider + Notifications */}
//           <div className="hidden md:flex items-center ml-3 lg:ml-4 gap-4 lg:gap-6">
//             <div className="h-8 lg:h-10 w-[1px] bg-gray-900" />
//             <div className="flex gap-4 lg:gap-6">
//               <div className="relative cursor-pointer">
//                 {/* <Bell className="w-5 h-5 lg:w-6 lg:h-6 hover:text-gray-600 transition-colors" /> */}
//                 <Image src="/images/bell.png" alt="Notification Bell" width={32} height={32} className="w-7 h-7 lg:w-8 lg:h-8 hover:text-gray-600 transition-colors" />
//                 <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
//                   2
//                 </span>
//               </div>
//               <Search className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-600 transition-colors mt-1" />
//                 {/* --- UPDATED SEARCH TRIGGER --- */}
//                 {/* <button onClick={() => setIsSearchOpen(true)} className="p-1">
//                   <Search className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-600 transition-colors" />
//                 </button> */}
//                 {/* --- END OF SECTION --- */}
//             </div>
//           </div>
//         </div>

//         {/* Center: Desktop Navigation - Only visible on larger screens */}
//         <div className="flex justify-between">
//         <div className="hidden lg:flex flex-1 justify-center max-w-md mr-10">
//           <NavigationMenu>
//             <NavigationMenuList className="gap-6">
//               {/* Categories Dropdown */}
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-sm font-medium">
//                   Categories
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="grid gap-1 p-4 w-30">
//                     <NavigationMenuLink asChild>
//                       <Link 
//                         href="/categories/men" 
//                         className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
//                       >
//                         Men
//                       </Link>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink asChild>
//                       <Link 
//                         href="/categories/women"
//                         className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
//                       >
//                         Women
//                       </Link>
//                     </NavigationMenuLink>
//                     <NavigationMenuLink asChild>
//                       <Link 
//                         href="/categories/kids"
//                         className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
//                       >
//                         Kids
//                       </Link>
//                     </NavigationMenuLink>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               {/* Products Link */}
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link 
//                     href="/products"
//                     className="text-sm font-medium hover:text-blue-600 transition-colors px-3 py-2"
//                   >
//                     Products
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               {/* About Link */}
//               <NavigationMenuItem>
//                 <NavigationMenuLink asChild>
//                   <Link 
//                     href="/about"
//                     className="text-sm font-medium hover:text-blue-600 transition-colors px-3 py-2"
//                   >
//                     About us
//                   </Link>
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* Right: User Avatar + Cart - Always visible */}
//         <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
//           {/* Avatar - Responsive sizing */}
//           <Avatar className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9">
//             <AvatarImage src="/images/user.jpeg" alt="User" />
//           </Avatar>

//           {/* Cart Button - Responsive */}
//          <Link
//             href="/cart"
//             className={cn(
//               "flex items-center gap-1 rounded-full bg-[#EDFF66] hover:bg-yellow-400 transition-colors",
//               "px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2",
//               "text-xs sm:text-sm md:text-base font-medium",
//               "transform transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
//             )}
//           >
//             <Handbag className="w-5 h-5" />
//             <span className="font-medium">Cart</span>
//           </Link>
//         </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Search, Handbag, Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar01() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  // Close search on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white shadow-sm ">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3">
          {/* Left: Mobile Menu + Logo + Desktop Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile: Hamburger Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-1">
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72 sm:w-80">
                  <SheetHeader className="pb-4">
                    <SheetTitle className="text-left">Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4">
                    {/* Mobile Navigation Links */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 border-b pb-2">Categories</h3>
                      <Link href="/categories/men" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Men
                      </Link>
                      <Link href="/categories/women" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Women
                      </Link>
                      <Link href="/categories/kids" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Kids
                      </Link>
                    </div>
                    
                    <div className="space-y-3 border-t pt-4">
                      <Link href="/products" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        Products
                      </Link>
                      <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        About Us
                      </Link>
                    </div>

                    {/* Mobile Action Items */}
                    <div className="border-t pt-4 space-y-3">
                      <div className="flex items-center gap-3 py-2">
                        <Bell className="w-5 h-5" />
                        <span>Notifications</span>
                        <span className="ml-auto bg-red-600 text-white text-xs rounded-full px-2 py-0.5">2</span>
                      </div>
                      <button 
                        onClick={() => setIsSearchOpen(true)}
                        className="flex items-center gap-3 py-2 w-full text-left"
                      >
                        <Search className="w-5 h-5" />
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo - Responsive sizing */}
            <div className="relative w-10 h-8 sm:w-24 sm:h-9 md:w-28 md:h-10 lg:w-32 lg:h-12">
              <Image
                src="/images/logo2.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Desktop: Divider + Notifications */}
            <div className="hidden md:flex items-center ml-3 lg:ml-4 gap-4 lg:gap-6">
              <div className="h-8 lg:h-10 w-[1px] bg-gray-900" />
              <div className="flex gap-4 lg:gap-6">
                <div className="relative cursor-pointer">
                  <Image src="/images/bell.png" alt="Notification Bell" width={32} height={32} className="w-7 h-7 lg:w-8 lg:h-8 hover:text-gray-600 transition-colors" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    2
                  </span>
                </div>
                {/* Desktop Search Trigger */}
                <button onClick={() => setIsSearchOpen(true)} className="p-1">
                  <Search className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-gray-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Center: Desktop Navigation - Only visible on larger screens */}
          <div className="flex justify-between">
          <div className="hidden lg:flex flex-1 justify-center max-w-md mr-10">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {/* Categories Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-4 w-30">
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/categories/men" 
                          className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                        >
                          Men
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/categories/women"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                        >
                          Women
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link 
                          href="/categories/kids"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                        >
                          Kids
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Products Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/products"
                      className="text-sm font-medium hover:text-blue-600 transition-colors px-3 py-2"
                    >
                      Products
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/about"
                      className="text-sm font-medium hover:text-blue-600 transition-colors px-3 py-2"
                    >
                      About us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: User Avatar + Cart - Always visible */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Avatar - Responsive sizing */}
            <Avatar className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9">
              <AvatarImage src="/images/user.jpeg" alt="User" />
            </Avatar>

            {/* Cart Button - Responsive */}
           <Link
              href="/cart"
              className={cn(
                "flex items-center gap-1 rounded-full bg-[#EDFF66] hover:bg-yellow-400 transition-colors",
                "px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2",
                "text-xs sm:text-sm md:text-base font-medium",
                "transform transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
              )}
            >
              <Handbag className="w-5 h-5" />
              <span className="font-medium">Cart</span>
            </Link>
          </div>
          </div>
        </div>
      </nav>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[999] bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center pt-8 px-4 gap-4">
            {/* Search Box - Separate Container */}
            <div className="w-full max-w-2xl bg-white rounded-full shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="flex items-center gap-4 px-6 py-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="flex-1 text-lg outline-none placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Search Results - Separate Container */}
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300 delay-100">
              <div className="max-h-96 overflow-y-auto">
                {/* Popular Searches */}
                <div className="px-6 py-6">
                  <div className="space-y-3">
                    <button className="flex items-center gap-4 w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Image src="/api/placeholder/56/56" alt="Running shoes" width={56} height={56} className="w-10 h-10 object-contain" />
                      </div>
                      <span className="text-gray-700 text-lg">Running shoes</span>
                    </button>
                    <button className="flex items-center gap-4 w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Image src="/api/placeholder/56/56" alt="Winter jacket" width={56} height={56} className="w-10 h-10 object-contain" />
                      </div>
                      <span className="text-gray-700 text-lg">Winter jacket</span>
                    </button>
                    <button className="flex items-center gap-4 w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Image src="/api/placeholder/56/56" alt="Denim jeans" width={56} height={56} className="w-10 h-10 object-contain" />
                      </div>
                      <span className="text-gray-700 text-lg">Denim jeans</span>
                    </button>
                    <button className="flex items-center gap-4 w-full text-left p-4 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Image src="/api/placeholder/56/56" alt="Sneakers" width={56} height={56} className="w-10 h-10 object-contain" />
                      </div>
                      <span className="text-gray-700 text-lg">Sneakers</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}