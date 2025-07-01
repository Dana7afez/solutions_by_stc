// Utility function to get the correct asset path for both development and production
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production (GitHub Pages), add the base path
  if (process.env.NODE_ENV === 'production') {
    return `/solutions_by_stc/${cleanPath}`
  }
  
  // In development, use the original path
  return `/${cleanPath}`
}
