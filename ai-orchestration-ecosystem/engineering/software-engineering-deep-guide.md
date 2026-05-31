# Software Engineering Deep Guide

## Objetivo

Definir o padrao tecnico do Sagaz para criar, revisar, testar, refatorar e entregar software confiavel.

## Filosofia

Software bom e aquele que resolve o problema certo, continua compreensivel depois da entrega, falha de modo previsivel, pode ser testado, pode ser operado e pode evoluir sem medo desnecessario.

## Regras De Ouro

1. Entender antes de alterar.
2. Especificar antes de construir quando houver risco.
3. Preferir simplicidade verificavel.
4. Preservar contratos existentes.
5. Validar entradas nas fronteiras.
6. Isolar efeitos colaterais.
7. Testar comportamento, nao implementacao acidental.
8. Documentar decisoes duradouras.
9. Medir antes de otimizar.
10. Entregar com evidencias.

## Planejamento Tecnico

Antes de implementar, responder:

- Qual problema o software resolve?
- Quem usa?
- Qual e o fluxo principal?
- Quais dados entram e saem?
- Quais erros sao esperados?
- O que nao pode quebrar?
- Como provar que funciona?
- Como sera feito deploy?
- Como diagnosticar falhas?

## Arquitetura

### Preferencias

- Modulos pequenos e coesos.
- Dependencias apontando para dentro do dominio, nao para detalhes acidentais.
- Interfaces explicitas nos limites instaveis.
- Configuracao separada de codigo.
- Camadas apenas quando reduzem complexidade.
- ADRs para decisoes dificeis de reverter.

### Antipadroes

- Abstracao criada para um unico uso sem beneficio claro.
- Feature e refatoracao estrutural no mesmo pacote de mudanca.
- Dependencia pesada para utilidade trivial.
- Logica de negocio espalhada por UI, controllers e scripts.
- Estados impossiveis representaveis sem validacao.
- Erros silenciosos.

## Codigo

### Nomes

- Usar nomes do dominio.
- Evitar abreviacoes obscuras.
- Nomear booleanos como perguntas ou estados claros.
- Nomear funcoes por efeito observavel.

### Funcoes E Modulos

- Uma funcao deve ter um motivo claro para mudar.
- Modulos devem esconder detalhes internos.
- Preferir dados imutaveis quando viavel.
- Separar calculo puro de I/O.
- Reduzir parametros longos com objetos nomeados quando melhorar clareza.

### Tratamento De Erros

- Falhas esperadas devem ter caminho explicito.
- Mensagens devem ser acionaveis.
- Logs devem ajudar diagnostico sem vazar segredos.
- Retentativas devem ter limite e backoff quando aplicavel.

## Testabilidade

Projetar para testar:

- Injetar dependencias instaveis.
- Isolar tempo, rede, banco, filesystem e aleatoriedade.
- Criar fixtures pequenas e legiveis.
- Testar bordas: vazio, nulo, grande, invalido, permissao, timeout, duplicado.
- Garantir que testes falham pelo motivo certo.

## Estrategia De Testes

### Baixo Risco

- Smoke test.
- Verificacao manual objetiva.

### Medio Risco

- Build/typecheck/lint quando existirem.
- Testes unitarios ou integracao relevantes.
- Fluxo principal.
- Uma borda critica.

### Alto Risco

- Suite completa.
- Testes de regressao.
- Validacao visual ou e2e quando houver UI.
- Revisao de seguranca.
- Plano de rollback.

## Frontend

- UI deve refletir o dominio, nao parecer template generico.
- Layout precisa suportar conteudo real.
- Estados obrigatorios: loading, empty, error, success.
- Componentes interativos devem ter feedback claro.
- Formularios devem validar e preservar dados quando possivel.
- Responsividade deve ser verificada.
- Acessibilidade basica: labels, foco, contraste, teclado.

## Backend E APIs

- Contratos devem ser explicitos.
- Validar payloads externos.
- Respostas de erro devem ser consistentes.
- Operacoes criticas devem considerar idempotencia.
- Auth e autorizacao devem ser separadas.
- Dados sensiveis nao devem aparecer em logs.

## Dados

- Modelar invariantes importantes.
- Planejar migracoes.
- Evitar perda silenciosa de dados.
- Considerar concorrencia e duplicidade.
- Criar backups ou rollback quando houver alteracao destrutiva.

## Segurança

- Segredos somente em variaveis de ambiente ou secret manager.
- Validar entrada de usuario.
- Sanitizar saida quando houver HTML, SQL, shell ou templates.
- Aplicar principio do menor privilegio.
- Revisar uploads, links externos, webhooks e callbacks.
- Nao executar comandos destrutivos sem aprovacao explicita.

## Performance E Escala

- Definir requisito antes de otimizar.
- Identificar caminhos quentes.
- Evitar N+1 obvio.
- Usar cache apenas com invalidacao compreendida.
- Monitorar tamanho de bundle e assets em frontend.
- Paginar listas grandes.

## Deploy

- Build reproduzivel.
- Variaveis de ambiente documentadas.
- Comandos de instalacao, teste, build e start.
- Smoke test local antes de deploy.
- Smoke test pos-deploy quando possivel.
- Rollback ou mitigacao para mudancas criticas.

## Revisao Final

Antes de entregar, confirmar:

- O requisito principal funciona.
- O codigo segue padroes locais.
- A arquitetura esta proporcional ao problema.
- Testes e verificacoes foram executados.
- Falhas conhecidas foram corrigidas ou registradas.
- Riscos residuais estao claros.
- O usuario sabe como usar e evoluir.
