import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Homepage = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Home", active: true },
    { name: "Tenders", active: false },
    { name: "Profile", active: false },
    { name: "Reputation", active: false },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative min-h-screen">
        <header className="flex items-center justify-between w-full max-w-[1200px] p-8 mx-auto border-b border-[#d9d9d9]">
          <div className="flex items-center gap-6" />

          <NavigationMenu className="flex-1">
            <NavigationMenuList className="flex flex-wrap items-start justify-end gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <div
                    className={`inline-flex items-center justify-center p-2 rounded-lg cursor-pointer ${
                      item.active ? "bg-neutral-100" : ""
                    }`}
                  >
                    <div className="font-heading text-[#1e1e1e] font-[number:var(--heading-font-weight)] text-[length:var(--heading-font-size)] leading-[var(--heading-line-height)] tracking-[var(--heading-letter-spacing)] [font-style:var(--heading-font-style)]">
                      {item.name}
                    </div>
                  </div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3 w-[178px]">
            <Button
              variant="outline"
              className="flex-1 bg-[#e3e3e3] border-[#767676] rounded-lg"
            >
              <span className="font-button font-[number:var(--button-font-weight)] text-[#1e1e1e] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                LOG IN
              </span>
            </Button>

            <Button className="flex-1 bg-[#2c2c2c] text-neutral-100 rounded-lg">
              <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
                Register
              </span>
            </Button>
          </div>
        </header>

        <div className="flex justify-center items-center h-[calc(100vh-150px)]">
          <h1 className="text-[142px] font-bold text-black [font-family:'Outfit',Helvetica] [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] tracking-[0] leading-[normal]">
            Tenderly
          </h1>
        </div>
      </div>
    </div>
  );
};
