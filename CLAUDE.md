# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A VitePress documentation site providing marketing guidance for Sound 79 (a custom audio cable business). The site is deployed to GitHub Pages and intentionally blocks search engine indexing.

## Commands

- `npm run docs:dev` - Start local development server
- `npm run docs:build` - Build for production (outputs to `.vitepress/dist`)
- `npm run docs:preview` - Preview production build locally

## Architecture

- **VitePress 2.x** static site generator
- **Content**: Markdown files in `/content/` directory
  - `solo-founder-priority.md` - Quick-start guide
  - `complete-guide-strategies.md` - Comprehensive strategy reference
- **Config**: `.vitepress/config.mjs` - Site configuration, navigation, and sidebar
- **Deployment**: GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys to GitHub Pages on push to `main`

## Key Configuration Details

- `base` path is dynamically set: `/` locally, `/<repo-name>/` on GitHub Pages
- `cleanUrls: true` - No `.html` extensions in URLs
- `noindex, nofollow` meta tag prevents search engine indexing
- Local search enabled via VitePress built-in provider
