---
name: Frontend TypeScript — Portfolio
description: Padroes e convencoes para codigo frontend React/Vite do portfolio.
applyTo: 'portfolio-v2/**/*.{ts,tsx}'
---

# Padroes Frontend (React 19+ / Vite / TypeScript TSX / Bootstrap 5)

## Stack obrigatoria

- React 19+, Vite 7+, TypeScript, Bootstrap 5, react-bootstrap, react-intl, react-router-dom v7, axios, AOS

## Politica de TypeScript

- Todo codigo novo em `.ts` ou `.tsx` — sem arquivos `.js`/`.jsx` em `src/`
- `strict: true` no tsconfig — sem excecoes
- Evitar `any` — usar tipos explicitamente; preferir `unknown` quando necessario
- Props sempre tipadas com `interface NomeProps`
- Exportar interfaces reutilizaveis de `src/types/` quando compartilhadas entre 2+ arquivos

## Componentes

```tsx
interface NomeComponenteProps {
  titulo: string;
  opcional?: number;
  children?: React.ReactNode;
  onAcao: () => void;
}

export function NomeComponente({ titulo, opcional, children, onAcao }: NomeComponenteProps) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
```

- Componentes funcionais com `function` nomeada (nao arrow function em export default)
- Um componente por arquivo; arquivo com mesmo nome do componente
- CSS isolado em `NomeComponente.css` na mesma pasta
- Classes Bootstrap 5 diretamente no TSX; customizacoes no `.css`

## Internacionalizacao (react-intl)

```tsx
import { useIntl } from 'react-intl';

export function NomeComponente() {
  const intl = useIntl();
  return (
    <h1>{intl.formatMessage({ id: 'secao.titulo' })}</h1>
  );
}
```

- Todos os textos visiveis ao usuario via `useIntl` / `<FormattedMessage>`
- Chaves de mensagem: `secao.elemento` (snake_case com ponto)
- Nunca hardcodar strings em portugues ou ingles no TSX

## Custom Hooks

```ts
// hooks/useNomeHook.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface UseNomeHookResult {
  data: Tipo | null;
  loading: boolean;
  error: Error | null;
}

export function useNomeHook(id: string): UseNomeHookResult {
  const [data, setData] = useState<Tipo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get<Tipo>(`/api/recurso/${id}`)
      .then(res => setData(res.data))
      .catch(err => setError(err as Error))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error };
}
```

- Sempre tipar o retorno do hook com `interface`
- Sempre expor `loading` e `error` junto com `data`
- Hooks ficam em `src/hooks/` ou na pasta do contexto de uso

## Contextos

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

- Contextos tipados com `interface`
- Custom hook de acesso protegido com throw caso usado fora do provider

## Tratamento de estados

- Todo componente que carrega dados deve tratar: loading, erro e vazio
- Spinner: `<Spinner animation="border" />` do react-bootstrap
- Acoes com resultado: `Alert` ou `Toast` do react-bootstrap
- Estado vazio: mensagem amigavel (internacionalizada)

## Roteamento (react-router-dom v7)

```tsx
import { Link, useNavigate, useParams } from 'react-router-dom';

const navigate = useNavigate();
navigate('/projects');

const { slug } = useParams<{ slug: string }>();
```

- Paginas em `src/pages/`; rotas em `App.tsx`
- Sempre tipar `useParams` com generics

## Evitar

- `any` — usar tipo preciso ou `unknown`
- `as Tipo` desnecessario — preferir type guards
- Logica de negocio dentro de TSX
- Inline styles
- `localStorage` para dados que nao precisam persistir

## Design Patterns e Centralizacao

### Regra de Ouro
Se um comportamento precisar mudar, quantos arquivos serao afetados? Se mais de 1, centralizar.

### Tipos e Interfaces centralizados
- Interfaces compartilhadas entre 2+ componentes/paginas → `src/types/`
- Nunca redefinir a mesma interface em 2 arquivos
- DTOs de API: tipar o retorno do axios com generics (`axios.get<MinhaInterface>(...)`)

### Quando criar um Custom Hook
- Logica de estado ou efeito usada em 2+ componentes → `src/hooks/`
- Nunca copiar a mesma logica de fetch/estado entre componentes

### Quando criar um Componente Generico
- O mesmo elemento visual em 2+ lugares → componentizar com props tipadas
- Componente maior que ~80 linhas com partes independentes → dividir

## Componentes

```jsx
// NomeComponente.jsx
export function NomeComponente({ prop, opcional }) {
  return (
    <div className="container">
      {/* conteudo */}
    </div>
  );
}
```

- Componentes funcionais com arrow function exportada como named export
- Um componente por arquivo; arquivo com mesmo nome do componente
- CSS isolado em `NomeComponente.css` na mesma pasta
- Classes Bootstrap 5 diretamente no JSX; customizacoes em `.css`

## Internacionalizacao (react-intl)

```jsx
import { useIntl } from 'react-intl';

export function NomeComponente() {
  const intl = useIntl();
  return (
    <h1>{intl.formatMessage({ id: 'secao.titulo' })}</h1>
  );
}
```

- Todos os textos visiveis ao usuario devem usar `useIntl` / `<FormattedMessage>`
- Chaves de mensagem seguem padrao `secao.elemento` (snake_case com ponto)
- Nunca hardcodar strings em portugues ou ingles dentro de JSX — sempre via intl

## Custom Hooks

```js
// hooks/useNomeHook.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useNomeHook(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/recurso/${id}`)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading, error };
}
```

- Sempre expor `loading` e `error` junto com `data`
- Hooks ficam em `src/hooks/` ou na pasta do contexto de uso
- Usar `axios` para todas as chamadas HTTP — nunca `fetch` direto

## Tratamento de estados

- Todo componente que carrega dados deve tratar: loading, erro e vazio
- Feedback visual obrigatorio:
  - Carregamentos → Spinner do react-bootstrap (`<Spinner animation="border" />`)
  - Acoes com resultado → Toast ou Alert do react-bootstrap
  - Estado vazio → mensagem amigavel (internacionalizada)
- Nunca expor detalhes tecnicos de erro ao usuario final

## Roteamento (react-router-dom v7)

```jsx
// Usar Link e useNavigate — nunca <a href> para rotas internas
import { Link, useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/projects');
```

- Paginas ficam em `src/pages/`
- Rotas definidas em `App.jsx`
- Params de URL via `useParams`, query string via `useSearchParams`

## Evitar

- Logica de negocio dentro de JSX (extrair para hooks ou funcoes utilitarias)
- Inline styles — usar Bootstrap ou `.css` do componente
- `localStorage` para dados que nao precisam persistir entre sessoes
- `useEffect` desnecessario — verificar se useState/useMemo resolve
- `console.log` em codigo de producao

## Design Patterns e Centralizacao

### Regra de Ouro
Se um comportamento precisar mudar, quantos arquivos serao alterados? Se mais de 1, a logica nao esta centralizada.

### Quando criar um Custom Hook
- Logica de estado ou efeito usada em 2+ componentes → extrair para hook em `src/hooks/`
- Logica complexa dentro de componente que dificulta leitura → extrair para hook
- Nunca copiar a mesma logica de fetch/estado entre componentes

### Quando criar um Componente Generico
- O mesmo elemento visual aparece com pequenas variacoes em 2+ lugares → componentizar com props
- Componente maior que ~80 linhas com partes independentes → dividir
- Nunca duplicar JSX estruturalmente identico

### Dados e Contratos centralizados
- Dados estaticos e de configuracao ficam em `src/data/`
- URLs de API ficam em constante centralizada (ex: `src/config/api.js`) — nunca hardcodar em componentes
- Se o endpoint mudar amanha, deve alterar 1 arquivo apenas

### Composicao sobre duplicacao
- Preferir compor componentes e hooks pequenos e especializados
- Evitar componente "deus" que sabe de tudo e faz tudo
- Prop drilling alem de 2 niveis: considerar Context ou estado externo

### Rule of Three
- 1a ocorrencia: implementar inline no componente
- 2a ocorrencia: avaliar se vale abstrair (depende do contexto)
- 3a ocorrencia: abstrair obrigatoriamente — hook, componente ou tipo centralizado
