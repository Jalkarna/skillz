'use client'

import React from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'
import { useLoading } from '@/lib/loading-context'

interface NavLinkProps {
  href: string
  children: ReactNode
  icon?: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'default' | 'ghost'
}

export function NavLink({ href, children, icon, onClick, className = '', variant = 'ghost' }: NavLinkProps) {
  const pathname = usePathname()
  const { startLoading } = useLoading()
  const isActive = pathname.startsWith(href)

  const handleClick = () => {
    if (onClick) {
      onClick()
      return
    }
    
    // Trigger loading immediately on click
    startLoading()
  }

  return (
    <Link href={href} onClick={handleClick}>
      <Button
        variant={isActive ? 'default' : variant}
        className={`w-full justify-start gap-3 ${className}`}
      >
        {icon}
        {children}
      </Button>
    </Link>
  )
}
