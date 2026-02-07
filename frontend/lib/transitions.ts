// Smooth page transitions and loading utilities

export const prefetchPage = async (href: string) => {
  try {
    // Prefetch the page to make navigation instant
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    link.as = 'document'
    document.head.appendChild(link)
  } catch (e) {
    // Prefetch failed, navigation will still work
  }
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const withLoadingState = async (callback: () => void, duration: number = 100) => {
  try {
    callback()
    await sleep(duration)
  } catch (error) {
    console.error('Navigation error:', error)
  }
}

// Add smooth fade-in animation to page content
export const pageTransitionClass = 'animate-in fade-in duration-300'
