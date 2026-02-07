'use client'

import { Button } from '@/components/ui/button'
import { ReactNode, useState } from 'react'

interface FastButtonProps {
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  isLoading?: boolean
}

export function FastButton({
  onClick,
  children,
  disabled = false,
  variant = 'default',
  size = 'md',
  className = '',
  type = 'button',
  isLoading = false,
}: FastButtonProps) {
  const [isClicking, setIsClicking] = useState(false)

  const handleClick = () => {
    if (onClick && !isClicking && !disabled && !isLoading) {
      setIsClicking(true)
      onClick()
      setTimeout(() => setIsClicking(false), 300)
    }
  }

  return (
    <Button
      type={type}
      onClick={handleClick}
      disabled={disabled || isClicking || isLoading}
      variant={variant}
      size={size}
      className={`transition-all ${isClicking ? 'scale-95' : ''} ${className}`}
    >
      {isClicking || isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 border-current/20" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-current animate-spin" />
            </div>
          </div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  )
}
