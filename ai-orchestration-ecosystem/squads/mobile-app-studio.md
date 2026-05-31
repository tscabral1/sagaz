# Squad: Mobile App Studio

## Uso

Apps Android/iOS, PWA mobile-first, prototipos mobile, apps com camera, notificacoes, offline, mapas, pagamentos ou publicacao em lojas.

## Agentes

- Orchestrator
- Product Strategist
- Technology Strategist
- UX Architect
- UI Systems Designer
- Software Architect
- Implementation Engineer
- QA Verifier
- Visual QA
- Security Governance
- GitHub Ops quando houver versionamento/release

## Fluxo

1. Definir plataformas: Android, iOS, ambas ou PWA.
2. Mapear recursos nativos: camera, storage, notificacoes, biometria, mapas, pagamentos.
3. Recomendar stack: Expo/React Native, Flutter, nativo ou PWA.
4. Definir UX mobile e design system.
5. Implementar app.
6. Testar em emulador/dispositivo quando possivel.
7. Preparar build, signing, store metadata e release notes.
8. Recomendar GitHub Ops e CI/CD.

## Gates Obrigatorios

- Stack mobile justificada.
- Permissoes justificadas.
- Navegacao mobile definida.
- Estados offline/loading/error considerados.
- Build/test documentado.
- Plano de publicacao quando aplicavel.

## Bloqueadores

- Permissao nativa sem justificativa.
- Fluxo principal nao testado.
- Store/release sem checklist.
- Dados sensiveis sem seguranca.
