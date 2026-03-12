# TASK-07 — Instrucoes de Implementacao

## Sequencia de Execucao

1. Atualizar `projects.ts` com textos localizados por idioma e links de repositorio
2. Refatorar `Projects.tsx` para:
   - suporte a locale nos dados
   - modal com imagem desktop + mobile em molduras separadas
   - secoes de estudo (problema, solucao, aprendizados)
   - melhorias de acessibilidade (teclado/foco/aria)
   - melhorias de performance de imagem
3. Atualizar `Projects.css` para novos wrappers com `aspect-ratio`
4. Atualizar `i18nContext.tsx` com novas chaves
5. Remover hardcodes em `About.tsx` e `Footer.tsx`
6. Validar build

## Checklist

- [x] Modal com dupla visualizacao (desktop/mobile)
- [x] Aspect-ratio desktop e mobile aplicados
- [x] Botao "Ver Codigo" com URL correta
- [x] Descricao do modal em PT/EN
- [x] Texto do "sobre mim" em PT/EN
- [x] Nota do rodape em PT/EN
- [x] Cards acessiveis por teclado
- [x] Build final sem erros
