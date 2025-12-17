#!/usr/bin/env bash
set -euo pipefail

echo "Building web assets (Vite)..."
npm run build

echo "Building Electron installers (electron-builder)..."
npx electron-builder --win --x64 --arm64

echo "Done. Artifacts are in the configured output directory (dist_electron or as configured)."
