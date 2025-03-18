"use client";

import React, { useState } from 'react'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from './ui/input';
import { accountSchema } from '@/app/lib/schema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';


const CreateAccountDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);

    const {register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset,}=useForm({
        resolver: zodResolver(accountSchema),
        defaultValues: {
          name: "",
          type: "CURRENT",
          balance: "",
          isDefault: false,
        },
      });

  return (
    <Drawer open={open} onOpenChange={setOpen}>
    <DrawerTrigger asChild>{children}</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      </DrawerHeader>

<div className="px-4 pb-4">
    <form className="space-y-4">
        <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Account Name</label>
            <Input id="name"
                placeholder="e.g., Main Checking"
                {...register("name")}
              />
            
            {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
        </div>
        <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Account Type</label>
            <Select
                onValueChange={(value) => setValue("type", value)}
                defaultValue={watch("type")} 
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CURRENT">Current</SelectItem>
                  <SelectItem value="SAVINGS">Savings</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && (
                <p className="text-sm text-red-500">{errors.type.message}</p>
              )}
            
        </div>
    </form>
</div>

    </DrawerContent>
  </Drawer>
  
  )
}

export default CreateAccountDrawer