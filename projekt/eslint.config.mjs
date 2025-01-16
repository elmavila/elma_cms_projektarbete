import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Skapa en instans av FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// Flat config använder inte "extends" som en array
const eslintConfig = [
  compat.extends('next/core-web-vitals'), // Använd "extends" korrekt här
  {
    files: ['*.ts', '*.js'], // Ställ in de filer denna konfiguration gäller för
    parserOptions: {
      ecmaVersion: 2021, // Ange den ECMAScript-version du använder
    },
    rules: {
      // Lägg till egna regler här om du behöver
    },
  },
]

export default eslintConfig
