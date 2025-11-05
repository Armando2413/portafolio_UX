# Portfolio UX/UI - Armando Quezada

Portfolio personal que muestra mis proyectos y habilidades en UX/UI Design.

## Requisitos

- Node.js 16.x o superior
- npm 7.x o superior

## Instalación y ejecución local

1. Clona el repositorio:
```bash
git clone https://github.com/armandoquezada/portafolio-ux
cd portafolio-ux/portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. (Opcional) Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto para EmailJS (ver sección EmailJS más abajo)
   - Añade tu ID de Google Analytics en el mismo archivo si deseas tracking

4. Inicia el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Configuración de variables de entorno

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Edita `.env` y añade tus credenciales:
- `REACT_APP_GA_TRACKING_ID`: Tu ID de Google Analytics 4
- `REACT_APP_EMAILJS_SERVICE_ID`: ID del servicio de EmailJS
- `REACT_APP_EMAILJS_TEMPLATE_ID`: ID de la plantilla de EmailJS
- `REACT_APP_EMAILJS_USER_ID`: Tu clave pública de EmailJS

## Deployment

Para desplegar en GitHub Pages:

1. Crea un repositorio en GitHub

2. Inicializa git y añade el remote:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

3. Despliega a GitHub Pages:
```bash
npm run deploy
```

El sitio estará disponible en: https://tu-usuario.github.io/tu-repo

## Scripts disponibles

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Integración de EmailJS (envío de formulario)

El proyecto incluye una integración opcional con EmailJS para enviar mensajes directamente desde el formulario de contacto. Si no configuras EmailJS, el formulario seguirá funcionando con un `mailto:` como fallback (abre el cliente de correo del usuario).

Pasos para activar EmailJS:

1. Instala la dependencia (si no lo hiciste después del último cambio en package.json):

```powershell
npm install
```

2. Regístrate en https://www.emailjs.com, crea un servicio (por ejemplo Gmail, SMTP o tu proveedor), y crea una plantilla (template) para los mensajes.

3. En la plantilla de EmailJS usa variables que coincidan con las que envía el formulario: `from_name`, `from_email`, `subject`, `message`.

4. Añade las credenciales públicas a las variables de entorno. Crea un archivo `.env` en la raíz del proyecto (no lo subas a git) con estas líneas:

```
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
REACT_APP_EMAILJS_USER_ID=tu_user_id_o_public_key
```

Notas importantes:
- Las variables que comienzan con `REACT_APP_` se inyectan en el bundle del cliente. EmailJS está diseñado para usarse desde el cliente con una clave pública (public key / user id). Evita almacenar credenciales privadas en el cliente.
- Añade `.env` a `.gitignore` para evitar subirlo por error.

5. Reinicia la app (si está corriendo):

```powershell
npm start
```

6. Prueba el formulario de contacto:
- Si EmailJS está correctamente configurado y las credenciales son válidas, el formulario enviará el correo usando EmailJS y verás la tarjeta de agradecimiento en la UI.
- Si las variables no están configuradas o el envío por EmailJS falla, el formulario hará un fallback a `mailto:` y abrirá el cliente de correo del usuario.

Si quieres, puedo añadir un ejemplo de contenido para la plantilla de EmailJS o agregar manejo más explícito de errores (por ejemplo mostrar un mensaje de error en pantalla si EmailJS responde con fallo). Dime qué prefieres.
