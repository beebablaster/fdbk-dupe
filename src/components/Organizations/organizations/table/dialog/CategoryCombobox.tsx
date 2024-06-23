import React from 'react';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UseQueryResult } from '@tanstack/react-query';
import { TCategoriesResponse, TCategory } from '@/models/Organization';

type Props = {
  query: UseQueryResult<TCategoriesResponse, Error>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedCategory: TCategory;
  setSelectedCategory: (category: TCategory) => void;
}

export const CategoryCombobox: React.FC<Props> = ({ 
  query, 
  open, 
  setOpen, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const { data: categories } = query;
  const data = categories?.data;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outlineAccent"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedCategory
            ? 
              selectedCategory.name
            : 
              "Выберите категорию"
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Поиск категорий" />
          <CommandEmpty>Категории не найдены</CommandEmpty>
          {[data?.localCategories, data?.generalCategories].map((categories, index, arr) => {
            if (!categories || categories?.length === 0) return null

            return (
              <>
                <CommandGroup key={index}>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.ID}
                      onSelect={() => {
                        setSelectedCategory(category)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedCategory && selectedCategory.name === category.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {category.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
                {arr[index + 1] && <CommandSeparator />}
              </>
            )
          })}
        </Command>
      </PopoverContent>
    </Popover>
  )
}
