---
description: Padroes para testes unitarios e de integracao do frontend React/Vite do portfolio.
applyTo: 'portfolio-v2/**/*.{test,spec}.{ts,tsx}'
---

# Padroes de Testes Frontend (Vitest + Testing Library)

## Setup necessario

Instalar antes de usar:
```bash
npm install -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

Adicionar em `vite.config.js`:
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
```

`src/test/setup.js`:
```js
import '@testing-library/jest-dom';
```

## Abordagem Test-First (obrigatorio para features e fixes criticos)

Antes de implementar o componente, escrever stub de teste que falha intencionalmente:

```jsx
import { render, screen } from '@testing-library/react';

describe('NomeComponente', () => {
  it('deve [comportamento do CA-XXX]', () => {
    // given
    // [render e setup]

    // when
    // [interacao]

    // then
    throw new Error('Stub — implementar junto com o componente');
  });
});
```

Converte o stub em teste real quando o componente existir.

---

## Testes Unitarios de Componente

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { NomeComponente } from './NomeComponente';

describe('NomeComponente', () => {
  it('deve renderizar com dados corretos', () => {
    // given
    render(<NomeComponente titulo="valor esperado" />);

    // then
    expect(screen.getByText('valor esperado')).toBeInTheDocument();
  });

  it('deve chamar callback ao submeter formulario', async () => {
    // given
    const onSubmit = vi.fn();
    render(<NomeForm onSubmit={onSubmit} />);

    // when
    await userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    // then
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it('deve exibir mensagem de erro quando campo invalido', async () => {
    // given
    render(<NomeForm onSubmit={vi.fn()} />);

    // when
    await userEvent.click(screen.getByRole('button', { name: /salvar/i }));

    // then
    expect(screen.getByRole('alert')).toHaveTextContent(/campo obrigatorio/i);
  });
});
```

## Testes de Hook

```jsx
import { renderHook, act } from '@testing-library/react';
import { useNomeHook } from './useNomeHook';

describe('useNomeHook', () => {
  it('deve retornar estado inicial correto', () => {
    // given
    const { result } = renderHook(() => useNomeHook());

    // then
    expect(result.current.valor).toBe(null);
    expect(result.current.carregando).toBe(false);
  });

  it('deve atualizar estado apos acao', async () => {
    // given
    const { result } = renderHook(() => useNomeHook());

    // when
    await act(async () => {
      await result.current.executar();
    });

    // then
    expect(result.current.valor).not.toBe(null);
  });
});
```

## Testes de Integracao (mocks de API via vi.mock/axios)

```jsx
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import { NomePagina } from './NomePagina';

vi.mock('axios');

describe('NomePagina — integracao', () => {
  it('deve carregar e exibir dados da API', async () => {
    // given
    axios.get.mockResolvedValue({ data: [{ id: 1, nome: 'Item A' }] });
    render(<NomePagina />);

    // then
    expect(await screen.findByText('Item A')).toBeInTheDocument();
  });

  it('deve exibir feedback de erro quando API falha', async () => {
    // given
    axios.get.mockRejectedValue(new Error('Erro interno'));
    render(<NomePagina />);

    // then
    expect(await screen.findByRole('alert')).toBeInTheDocument();
  });
});
```

## Convencoes

- Nome do teste: `deve{Comportamento}` em portugues
- Estrutura: `// given / // when / // then` (omitir bloco vazio)
- Preferir queries semanticas: `getByRole`, `getByLabelText`, `getByText`
- Evitar `getByTestId` exceto para elementos sem semantica adequada
- Sempre testar: renderizacao correta, interacoes do usuario, estados de erro
- Sem snapshots para componentes com logica de negocio — testar comportamento
- Mocks de modulos com `vi.mock`; mocks de funcoes com `vi.fn()`
- `vi.spyOn` para verificar chamadas em modulos reais
- Sem `it.skip` / `it.todo` sem justificativa documentada
- Componentes com contexto (ThemeProvider, LanguageProvider) devem usar wrapper no `render`:

```jsx
// src/test/helpers.jsx
import { render } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/i18nContext';

export function renderComContexto(ui) {
  return render(
    <ThemeProvider>
      <LanguageProvider>{ui}</LanguageProvider>
    </ThemeProvider>
  );
}
```
 no render:
