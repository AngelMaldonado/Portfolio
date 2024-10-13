# Creación de un Analizador de GitHub con IA usando Vercel AI SDK y Next.js

## Introducción

En este tutorial, aprenderemos a construir un analizador de GitHub utilizando la **Vercel AI SDK** y **Next.js**. Esta aplicación web te permitirá analizar repositorios de GitHub y extraer información útil sobre los mismos, utilizando la inteligencia artificial para mejorar la experiencia de usuario.

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente:

- Conocimientos básicos de JavaScript y React.
- Node.js y npm instalados en tu máquina.
- Una cuenta de GitHub.
- Una cuenta en Vercel para desplegar tu aplicación.

## Paso 1: Configuración del Proyecto

Primero, crearemos un nuevo proyecto de Next.js. Abre tu terminal y ejecuta los siguientes comandos:

```bash
npx create-next-app@latest github-analyzer
cd github-analyzer
```

Una vez creado el proyecto, instalaremos la Vercel AI SDK:

```bash
npm install @vercel/ai
```

## Paso 2: Configuración de la API de GitHub

Para acceder a la API de GitHub, necesitamos un token de acceso personal. 

1. Ve a [GitHub Settings](https://github.com/settings/tokens).
2. Haz clic en "Generate new token".
3. Selecciona los permisos que necesites (para este proyecto, `repo` es suficiente).
4. Guarda el token en un lugar seguro.

### Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz de tu proyecto y agrega tu token de GitHub:

```
GITHUB_TOKEN=tu_token_de_github
```

## Paso 3: Configuración de la Vercel AI SDK

A continuación, configuraremos la Vercel AI SDK. Crea un archivo `lib/ai.js` en la raíz de tu proyecto y agrega lo siguiente:

```javascript
import { createAI } from "@vercel/ai";

const ai = createAI({
  apiKey: process.env.VERCEL_AI_KEY, // Asegúrate de haber configurado tu clave API de Vercel AI
});

export default ai;
```

## Paso 4: Creación de la Interfaz de Usuario

Ahora vamos a crear una interfaz de usuario simple. Abre `pages/index.js` y modifica el archivo como sigue:

```javascript
import { useState } from 'react';
import ai from '../lib/ai';

export default function Home() {
  const [repoUrl, setRepoUrl] = useState('');
  const [analysis, setAnalysis] = useState('');

  const handleAnalyze = async () => {
    const response = await ai.chat([
      {
        role: 'user',
        content: `Analiza el repositorio en este enlace: ${repoUrl}`
      },
    ]);

    setAnalysis(response.message.content);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Analizador de GitHub con IA</h1>
      <input
        type="text"
        placeholder="Ingresa la URL del repositorio de GitHub"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleAnalyze} style={{ padding: '10px 20px' }}>
        Analizar
      </button>
      {analysis && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
          <h2>Análisis:</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}
```

### Explicación del Código

- Importamos los hooks `useState` de React para manejar el estado de la URL del repositorio y el análisis.
- Creamos un campo de entrada para que el usuario ingrese la URL del repositorio.
- Cuando el usuario hace clic en el botón "Analizar", llamamos a la función `handleAnalyze`, que utiliza la Vercel AI SDK para enviar la URL y recibir un análisis del repositorio.

## Paso 5: Despliegue en Vercel

Una vez que tu aplicación está lista, es hora de desplegarla en Vercel:

1. Ve a [Vercel](https://vercel.com/) y crea una cuenta si no tienes una.
2. Haz clic en "Importar Proyecto" y selecciona tu repositorio de GitHub.
3. Durante el proceso de despliegue, asegúrate de configurar las variables de entorno:
   - `GITHUB_TOKEN`: tu token de acceso de GitHub.
   - `VERCEL_AI_KEY`: tu clave API de Vercel AI.

4. Completa el proceso de despliegue y tu aplicación estará en línea.

## Conclusión

¡Felicidades! Has creado un analizador de GitHub utilizando la Vercel AI SDK y Next.js. Este proyecto puede ser una base para muchas otras aplicaciones que deseen integrar análisis inteligentes y mejorar la experiencia de desarrollo.

### Siguientes Pasos

- Mejora el diseño de la interfaz de usuario.
- Agrega más funcionalidades, como análisis de código, estadísticas de contribución, etc.
- Explora otras características de la Vercel AI SDK.

¡No dudes en compartir tus proyectos y comentarios!
