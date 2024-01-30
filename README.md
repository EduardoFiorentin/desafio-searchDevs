# Desafio SearchDevs  
Esta é uma aplicação web que desenvolvi para aprimorar minhas habilidades com as principais tecnologias do mercado, tais como React JS, TypeScript, Recoil, CSS, Axios, Lucide e React Router.
-- *Projeto em desenvolvimento* --

## Visão geral 
Este projeto permite aos usuários pesquisar o perfil de desenvolvedores no GitHub de maneira limpa e concisa, exibindo as principais informações sobre o desenvolvedor e seus repositórios públicos. 

## Instruções de Instalação

### Iniciar em servidor local
1. Clone este repositório: `git clone https://github.com/EduardoFiorentin/desafio-searchDevs.git`
2. Instale as dependências: `npm install`
3. Acesse o diretório 'src' e inicie a aplicação localmente: `npm run dev`

### Acessar deploy 
Acesse o link: [desafio-searchDevs](https://EduardoFiorentin.github.io/desafio-searchDevs)

## Tecnologias Utilizadas

- React JS - 18.2.0
- React Router Dom - 6.21.3
- Axios - 1.6.7
- Lucide React - 0.316.0
- Vite - 5.0.8
- TypeScript - 5.2.2

## Arquitetura do Projeto

- `src/assets/css`: Componentes de estilo.
- `src/atoms/`: Componentes de estado global (Recoil)
- `src/pages/`: Componentes de página da SPA.
- `src/pages/Home`: Componentes de renderização da página de busca. 
- `src/pages/Profile`: Componentes de renderização da página de renderização dos perfis.
- `src/types/`: Interfaces com a tipagem de dados recebidos da API.
- `src/utils/`: Funções utilitárias.

## UI/UX

- Protótipo da página Home: [link para protótipos](https://marvelapp.com/prototype/9b662g7/screen/76185933/handoff)
- Protótipo da página Profile: [link para protótipos](https://marvelapp.com/prototype/9b662g7/screen/76186368/handoff)

## Roteamento e Navegação

- Rotas definidas em `src/main.tsx`.

## Gestão de Estado

- Estado local gerenciado com hooks.
- Estado global gerenciado com Recoil ([documentação oficial](https://recoiljs.org/))

## Referências e Recursos

- [Criador do desafio](https://github.com/devmozao)
- [Repositório original do desafio](https://github.com/devmozao/desafio-reactjs)
- [Documentação do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Recoil](https://recoiljs.org/)
- [Documentação do React Router](https://reactrouter.com/en/main)
- [Documentação do Axios](https://axios-http.com/docs/intro)
- [Documentação do Lucide](https://lucide.dev/guide/packages/lucide-react)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)
