# TASK-01 — Instrucoes de Implementacao (TypeScript Migration)

## Sequencia de Execucao

1. **Instalar dependencias** (sem quebrar build atual)
2. **Criar tsconfig.json** (strict mode)
3. **Atualizar eslint.config.js** para TypeScript
4. **Migrar data layer** (projects.js → projects.ts) — menos risco
5. **Migrar contextos** — ThemeContext, i18nContext
6. **Migrar entrypoint** — main.jsx, App.jsx
7. **Migrar layout components** — Navbar, Footer, LanguageToggle, ThemeToggle
8. **Migrar ErrorBoundary** (Class Component — atencao especial)
9. **Migrar sections** — Hero, About, Skills
10. **Migrar pages** — Home, Projects
11. **Build final** — zero erros

## Checklist por Componente

Para cada arquivo `.jsx` → `.tsx`:
- [ ] Renomear arquivo
- [ ] Adicionar `interface NomeProps { ... }` para props
- [ ] Tipar hooks: `useState<Tipo>(valor)`
- [ ] Tipar retorno de funcoes quando necessario
- [ ] Verificar imports (sem `.js` explicit — TypeScript resolve automaticamente)
- [ ] `npm run build` — validar sem erros

## Padrao de Tipagem de Props

```tsx
interface NomeComponenteProps {
  prop: string;
  opcional?: number;
  children?: React.ReactNode;
  onAction: () => void;
}
```

## Padrao para Contextos

```tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
```

## Atencao: ErrorBoundary (Class Component)

```tsx
interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // ...
}
```

## Packages a instalar

```bash
npm install -D typescript @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Verificar se existem `@types` para:
- `aos` → `@types/aos` (ou `declare module 'aos'` manual)
- `focus-trap-react` → ja tem tipos proprios
- `react-intl` → ja tem tipos proprios
- `react-bootstrap` → ja tem tipos proprios
