# Grupo Rocha – Soluções Empresariais
> **Site Institucional Corporativo de Alta Performance**  
> Desenvolvido com HTML5 semântico, CSS3 moderno (Mobile First) e JavaScript puro.  
> 100% estático, sem dependências externas pagas, pronto para publicação no GitHub Pages.

---

## 📋 Sumário
1. [Visão Geral](#-visão-geral)
2. [Estrutura do Projeto](#-estrutura-do-projeto)
3. [Como Visualizar o Site Localmente](#-como-visualizar-o-site-localmente)
4. [Identidade Visual e Cores](#-identidade-visual-e-cores)
5. [Como Alterar Telefones e Mensagens do WhatsApp](#-como-alterar-telefones-e-mensagens-do-whatsapp)
6. [Como Substituir Fotografias e Logotipo](#-como-substituir-fotografias-e-logotipo)
7. [Como Adicionar ou Alterar Serviços](#-como-adicionar-ou-alterar-serviços)
8. [Como Publicar no GitHub Pages](#-como-publicar-no-github-pages)
9. [Acessibilidade e Desempenho](#-acessibilidade-e-desempenho)

---

## 🌟 Visão Geral

O site do **Grupo Rocha – Soluções Empresariais** foi desenvolvido para transmitir sofisticação, credibilidade, proximidade humana e excelência em gestão. O projeto utiliza uma arquitetura **One Page** orientada a conversão via WhatsApp, com navegação fluida, tipografia executiva e experiência pensada prioritariamente para smartphones (**Mobile First**).

---

## 📁 Estrutura do Projeto

```text
Grupo Rocha/
├── index.html          # Estrutura HTML5 semântica e acessível
├── style.css           # Folha de estilos CSS3 moderna (Mobile-First, variáveis, grid/flex)
├── script.js           # Lógica JavaScript pura (WhatsApp centralizado, menu mobile, scrollspy)
├── README.md           # Documentação completa de uso e manutenção
├── assets/             # Arquivos de imagem e mídia do projeto
│   ├── Logo.jpg        # Logotipo oficial do Grupo Rocha
│   ├── Jessica.png     # Fotografia executiva de Jéssica Tatiane Rocha
│   ├── Robison.png     # Fotografia executiva de Robison Rogério Rocha
│   └── favicon.png     # Ícone do site derivado do logotipo oficial
├── Jessica.png         # Fotografia original preservada na raiz
├── Robison.png         # Fotografia original preservada na raiz
└── Logo.jpg            # Logotipo original preservado na raiz
```

> **Nota:** As fotografias e o logotipo originais foram preservados intactos. Os caminhos utilizados no código são todos relativos (`assets/...`), garantindo total compatibilidade tanto no ambiente local quanto no GitHub Pages.

---

## 💻 Como Visualizar o Site Localmente

Por ser um projeto puramente estático, não é necessário instalar Node.js, compilar arquivos ou rodar bancos de dados:

### Método 1: Direto pelo Navegador (Mais Rápido)
1. Dê um duplo clique no arquivo `index.html` ou clique com o botão direito e selecione **Abrir com** (Google Chrome, Microsoft Edge, Firefox, Safari, etc.).
2. O site abrirá imediatamente com todas as funcionalidades ativas.

### Método 2: Servidor Local via Python (Opcional)
Se desejar testar com um servidor HTTP local simulando a nuvem:
```bash
# Na pasta do projeto, execute no terminal:
python -m http.server 8000
```
Em seguida, acesse no navegador: `http://localhost:8000`

### Método 3: Extensão Live Server (VS Code)
Se utilizar o Visual Studio Code, instale a extensão **Live Server**, abra a pasta e clique em **"Go Live"** no rodapé.

---

## 🎨 Identidade Visual e Cores

As cores corporativas oficiais estão centralizadas no arquivo [`style.css`](style.css) na seção `:root`:

| Nome | Hexadecimal | Aplicação Principal |
| :--- | :--- | :--- |
| **Preto Corporativo** | `#111111` | Fundo do Hero, Pilares, Metodologia, CTA e Rodapé |
| **Dourado Principal** | `#C6922C` | Botões principais, ícones de destaque e divisores |
| **Dourado Claro** | `#E6C574` | Gradientes de botão, bordas luminosas e ênfases |
| **Creme** | `#FAF7F0` | Fundo institucional de Quem Somos e Nossa Equipe |
| **Branco Puro** | `#FFFFFF` | Fundo de cartões de serviços e contrastes |
| **Bronze** | `#95652A` | Subtítulos e tags de categoria |

Para ajustar qualquer tom de cor no futuro, basta alterar a variável correspondente no início do arquivo `style.css`.

---

## 📲 Como Alterar Telefones e Mensagens do WhatsApp

Toda a integração com o WhatsApp está centralizada no arquivo [`script.js`](script.js), dentro do objeto `WHATSAPP_CONFIG`:

```javascript
const WHATSAPP_CONFIG = {
  phones: {
    jessica: '5516996150980',  // 55 (Brasil) + DDD + Telefone sem traços
    robison: '5516997962030',
    default: '5516996150980'   // Contato padrão para o site
  },
  messages: {
    headerCta: 'Olá! Conheci o Grupo Rocha pelo site...',
    // Altere aqui os textos das mensagens...
  }
};
```

1. **Alterar um número:** Modifique o valor numérico em `phones` (mantenha o código do país `55` e o DDD `16`).
2. **Alterar uma mensagem:** Modifique o texto entre aspas em `messages`. O JavaScript aplicará automaticamente a codificação de URL (`encodeURIComponent()`).

---

## 📷 Como Substituir Fotografias e Logotipo

As imagens utilizadas pelo site estão na pasta `assets/`:

1. **Fotografia da Jéssica:** Substitua o arquivo `assets/Jessica.png`. Recomenda-se manter o formato retrato (proporção 4:5 ou similar) com boa resolução.
2. **Fotografia do Robison:** Substitua o arquivo `assets/Robison.png`.
3. **Logotipo Oficial:** Substitua o arquivo `assets/Logo.jpg`. O logotipo está envolvido por contêineres com fundo branco refinado que preservam seu contraste tanto em áreas claras quanto escuras.

---

## 🛠️ Como Adicionar ou Alterar Serviços

Os 7 serviços do Grupo Rocha estão definidos no arquivo [`index.html`](index.html) dentro da seção `<section id="servicos">`.

Cada serviço possui o seguinte modelo:

```html
<article class="service-card" data-service="identificador">
  <div class="service-icon-wrap">...</div>
  <h3 class="service-name">Nome do Serviço</h3>
  <p class="service-desc">Descrição concisa do serviço.</p>
  <div class="service-areas">
    <span class="areas-title">Áreas de atuação:</span>
    <ul class="areas-list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
  <div class="service-footer">
    <a href="#" class="btn btn-gold btn-block js-whatsapp-service" data-service-id="identificador">
      Saiba mais
    </a>
  </div>
</article>
```

Para conectar um novo serviço à sua mensagem personalizada no WhatsApp, basta adicionar a mensagem correspondente em `WHATSAPP_CONFIG.messages.services` dentro de [`script.js`](script.js) com a mesma chave `data-service-id`.

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

Quando você aprovar a publicação, siga estes passos simples para colocar o site no ar gratuitamente:

1. **Crie um repositório no GitHub:**
   - Acesse [github.com](https://github.com) e crie um novo repositório público (ex: `grupo-rocha-site`).
2. **Envie os arquivos para o repositório:**
   ```bash
   git init
   git add .
   git commit -m "Site institucional Grupo Rocha"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/grupo-rocha-site.git
   git push -u origin main
   ```
3. **Ative o GitHub Pages:**
   - No GitHub, acesse seu repositório e clique na aba **Settings** (Configurações).
   - No menu lateral esquerdo, clique em **Pages**.
   - Na opção **Build and deployment > Source**, selecione **Deploy from a branch**.
   - Em **Branch**, selecione `main` e a pasta `/ (root)`.
   - Clique em **Save**.
4. **Pronto!**
   - Em cerca de 1 a 2 minutos, o GitHub fornecerá a URL pública gratuita (ex: `https://seu-usuario.github.io/grupo-rocha-site/`).

---

## ♿ Acessibilidade e Desempenho

- **Mobile First:** Desenvolvido prioritariamente para dispositivos móveis, com áreas de toque mínimas de 48px, tipografia adaptável (`clamp()`) e zero rolagem horizontal.
- **Acessibilidade (WCAG):** Foco visível (`:focus-visible`), link para pular ao conteúdo (`skip-to-content`), suporte completo ao fechamento de menu por teclado (`Esc`) e estados `aria-expanded`.
- **Preferência de Movimento Reduzido:** Suporte nativo à diretiva `@media (prefers-reduced-motion: reduce)` para usuários sensíveis a animações.
- **Zero Dependências Pesadas:** Ícones desenhados com SVGs limpos embutidos, sem carregar bibliotecas externas que possam causar lentidão ou quebras.

---

**Grupo Rocha – Soluções Empresariais**  
*Desenvolvendo pessoas, estruturando processos e transformando resultados.*
