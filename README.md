# SPA: Rick and Morty

[Rick and Morty](https://luisariza-rick-and-morty.netlify.app/) es una Single Page Application desarrollada con <ins>JavaScript Vanilla</ins> empleando la [**Rick and Morty API**](https://rickandmortyapi.com/documentation). Gracias a esta **API** puedo obtener la informacion de cada personaje para mostrarla al usuario.

La pagina se adapa a los diferentes tamaños de pantallas e Integré [**Webpack**](https://webpack.js.org/) para automatizar y optimizar el codigo.

## Runnning

Para iniciar el proyecto primero ejecuta:

```sh
npm install
```

Una vez instaladas las dependencias, inicia el proyecto:

```sh
npm start
```

Ahora ingresa en tu navegador http://localhost:8080/. Ya puedes hacer cambios al proyecto y verlos en tiempo real.

## Building

Si quieres enviar tu proyecto a producción ejecuta:

```sh
npm run build
```

Se creará automaticamaente una carpeta llamada "dist" donde estará el codigo **minificado** (_con menor peso_).
