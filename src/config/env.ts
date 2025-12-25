/**
 * Environment variable validation and configuration
 */

const requiredEnvVars = {
  // Add required environment variables here
  // NODE_ENV: process.env.NODE_ENV,
} as const;

const optionalEnvVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://longhuei.netlify.app',
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
} as const;

// Validate required environment variables
Object.entries(requiredEnvVars).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export const env = {
  ...requiredEnvVars,
  ...optionalEnvVars,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;


