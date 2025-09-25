#!/bin/bash

# Kill any existing Next.js processes
echo "Stopping existing development server..."
pkill -f "next dev" || true

# Clear Next.js cache
echo "Clearing Next.js cache..."
rm -rf .next

# Clear node modules cache (optional)
# rm -rf node_modules/.cache

# Start development server
echo "Starting development server..."
npm run dev
