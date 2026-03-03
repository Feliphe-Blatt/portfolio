---
name: Testes Backend — Beevent
description: Padroes para testes unitarios e de integracao do backend Spring Boot do Beevent.
applyTo: '**/*Test.java'
---

# Padroes de Testes Backend (JUnit 5 + Mockito)

## Abordagem Test-First (obrigatorio para features e fixes criticos)

Antes de implementar, escrever stub de teste compilavel que falha intencionalmente:

```java
@Test
@DisplayName("Deve [comportamento do CA-XXX]")
void deve_comportamento_CA_XXX() {
    // given
    // [arranjo do estado inicial]

    // when
    // [chamada ao metodo ainda nao implementado]

    // then
    fail("Stub — implementar junto com a feature");
}
```

Apenas converter o stub em teste real quando a implementacao existir. Nunca apagar o stub sem substituir pela implementacao.

---

## Testes Unitarios

```java
@ExtendWith(MockitoExtension.class)
class NomeServiceTest {

    @Mock
    private NomeRepository repository;

    @InjectMocks
    private NomeService service;

    @Test
    @DisplayName("Deve retornar entidade quando encontrada")
    void deveBuscarPorId() {
        // given
        UUID id = UUID.randomUUID();
        Entidade entidade = new Entidade();
        when(repository.findById(id)).thenReturn(Optional.of(entidade));

        // when
        Entidade resultado = service.buscar(id);

        // then
        assertNotNull(resultado);
        verify(repository).findById(id);
    }

    @Test
    @DisplayName("Deve lancar excecao quando nao encontrado")
    void deveLancarExcecaoQuandoNaoEncontrado() {
        UUID id = UUID.randomUUID();
        when(repository.findById(id)).thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () -> service.buscar(id));
    }
}
```

## Testes de Integracao

```java
@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class NomeControllerIT {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void deveBuscarRecurso() throws Exception {
        mockMvc.perform(get("/api/v1/recurso/{id}", id)
                .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.nome").value("esperado"));
    }
}
```

## Convencoes

- Nome do metodo: `deve{Comportamento}Quando{Condicao}` em portugues
- Estrutura: `// given / // when / // then`
- `@DisplayName` descrevendo o comportamento esperado em portugues
- Sempre testar o caminho feliz E os casos de erro/borda
- Sem `@Disabled` sem justificativa documentada
- Mocks apenas para dependencias externas (repositorios, servicos externos)
