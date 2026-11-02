# Vitorino Saúde & Vitorino Odontologia — Website Oficial

Website institucional da **Vitorino Saúde** e de sua frente assistencial atual, a **Vitorino Odontologia**, conduzida pela fundadora e CEO **Dra. Danielly Vitorino — Dra HospitalLAR (CRO-DF 14.465)**.

---

## Como publicar no GitHub Pages

Este projeto já está 100% configurado para o **GitHub Pages** (com caminhos relativos compatíveis tanto com subpastas `usuario.github.io/repositorio/` quanto com domínio próprio `vitorinosaude.com.br`, arquivo `.nojekyll`, página `404.html`, `sitemap.xml`, `robots.txt` e workflow do GitHub Actions).

### Passo 1: Enviar os arquivos para um repositório no GitHub
No terminal (PowerShell ou Git Bash), dentro desta pasta:

```bash
git init
git add .
git commit -m "Versão 2.2 - Website Vitorino Saúde e Vitorino Odontologia"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

### Passo 2: Ativar o GitHub Pages no repositório
1. Acesse o repositório no GitHub e clique em **Settings** (Configurações) → **Pages** (no menu lateral esquerdo).
2. Em **Build and deployment** → **Source**, escolha uma das duas opções:
   - **Opção A (Mais simples):** selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/ (root)`, e clique em **Save**.
   - **Opção B (Automática via GitHub Actions):** selecione **GitHub Actions** (o arquivo `.github/workflows/deploy-pages.yml` já está pronto e fará a publicação automaticamente a cada `git push`).

### Passo 3 (Opcional): Configurar o domínio oficial (`vitorinosaude.com.br`)
Quando a versão prévia no GitHub Pages for aprovada para ir ao domínio oficial:
1. Em **Settings** → **Pages** → **Custom domain**, digite `vitorinosaude.com.br` e clique em **Save**.
2. Marque a opção **Enforce HTTPS**.
