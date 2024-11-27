"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Tabs } from './ui/tabs';
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { MoonIcon, SunIcon, TvMinimal } from 'lucide-react';
// import { SunIcon } from 'lucide-react';

function ThemeSwicher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
      <TabsList className='border dark:border-neutral-800 dark:bg-[#030303]'>
        <TabsTrigger value='light'>
          <SunIcon onClick={(e) => setTheme('light')} className='h-[1-2rem] w-[1.2rem]' />
        </TabsTrigger>
        <TabsTrigger value='dark'>
          <MoonIcon onClick={(e) => setTheme('dark')} className='h-[1-2rem] w-[1.2rem]' />

        </TabsTrigger>
        <TabsTrigger value='system'>
          <TvMinimal onClick={(e) => setTheme('system')} className='h-[1-2rem] w-[1.2rem]' />
        </TabsTrigger>



      </TabsList>
    </Tabs>

  )
}

export default ThemeSwicher
