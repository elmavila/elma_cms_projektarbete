import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { ESLint } from 'eslint'

// Hämta nuvarande filens och katalogens path
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Skapa en instans av FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// Skapa ESLint-konfigurationen
const eslintConfig = [
  // Använd FlatCompat för att inkludera konfigurationer
  compat.extends('next/core-web-vitals'),
  // Om du har andra inställningar kan du lägga till dem här
  {
    files: ['*.js', '*.ts'], // Ställ in filer där denna konfiguration ska gälla
    parserOptions: {
      ecmaVersion: 2021, // Sätt till den ECMAScript-version du använder
    },
  },
]

export default eslintConfig
