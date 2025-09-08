# 🌍 Idioma App (MVP com IA)

Projeto completo com **Backend (Node + Express + Gemini)**, **Mobile (Expo React Native)** e **Web (Next.js + Tailwind)**.

---

## 📦 Como rodar no GitHub Codespaces

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/idioma.git
cd idioma
```

### 2. Backend
```bash
cd backend
npm install
npm run dev
```
👉 O servidor rodará em `http://localhost:8000`.

### 3. Mobile (Expo)
```bash
cd mobile
npx create-expo-app . --template expo-template-blank-typescript
npm install axios @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
npm start
```
👉 No emulador Android use `http://10.0.2.2:8000/api/chat`.  
👉 Em dispositivo físico troque `10.0.2.2` pelo IP da sua máquina.

### 4. Web (Next.js + Tailwind)
```bash
cd web
npx create-next-app@latest .
npm install
npm run dev
```
👉 Acesse `http://localhost:3000`.

---

## 🔑 Configuração da IA (Gemini)

1. Vá até [Google AI Studio](https://ai.google.dev/).  
2. Gere sua chave de API.  
3. Coloque no arquivo `backend/.env`:
```
GEMINI_API_KEY=SUA_CHAVE_AQUI
PORT=8000
```

---

## ✅ Estrutura
```
idioma/
 ├── backend/   # API Express + Gemini
 ├── mobile/    # App React Native (Expo)
 ├── web/       # Painel Web (Next.js)
 └── README.md
```

Pronto 🎉 seu app de idiomas com IA já está no ar!
