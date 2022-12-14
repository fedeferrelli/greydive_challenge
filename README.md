# Fede Mazza - Greydive Challenge


Para este challenge realicé una app en React.js que lea un archivo JSON suministrado y genere por cada ítem, una nueva url que contenga todos los datos de un test:

- Cliente
- Url del video
- Tareas
- Transcripción

* El desafío fue resuelto en React.js,
* Se creó el proyecto con Vite,
* El JSON se lee a través de fetch API,
* La data se manejó con context API,
* Las rutas dinámicas se crearon utilizando react-router-dom
* El código se alojó en un repositorio público de GitHub,
* Se puede ver la progresión del desarrollo en el historial de commits de este repositorio,
* Se dio un estilo simple, incluido responsive, tomando como base el suministrado en el ejemplo del challenge.
* La aplicación está alojada en Vercel.

## :hammer: Tools

* React
* Vite
* Tailwind

## :airplane: Como levantar el proyecto

Se puede clonar el repositorio, instalar las dependecias y correrlo

```
git clone git@github.com:fedeferrelli/greydive_challenge.git 
cd greydive_challenge 
npm install && npm run dev
```

Alternativamente se puede acceder al demo en siguiente [link](https://challenge-greydive-phi.vercel.app/)

## :milky_way: Desarrollo

### 1. Creación de la función para hacer fetch del .JSON 

Se generó una función cuyo método hace el llamado (vía fetch) y gestiona la data recibida para procesarla y retornar la información lista para usar en el resto de la aplicación.

[ver commit](https://github.com/fedeferrelli/greydive_challenge/commit/db5a53a7c3d58da7b9c41a8a0443fd5e6046f20f#diff-38ca87c0c521c4c2ea822fa1af3cd8a6a033529d0dad2a4d8e38f7765bdf1f2a) 

### 2. Creación del Context para manejar la data

Se utilizó context para manejar los datos de la aplicación. Si bien esta aplicación es sencilla y la solución vía prop-drilling es mas adecuada, elegí utilizar context porque me parece más "elegante".

[ver commit](https://github.com/fedeferrelli/greydive_challenge/commit/c13845c260ca60795b88e2a95249645eb1fa427e)

### 3. Rutas dinámicas en el componente Links.jsx

Se instaló react-router-dom para crear una ruta por cada item del .JSON suministrado. A través del comoponente Links.jsx se generan rutas dinámicas teniendo en cuenta el index de cada elemento del array. Se utilizó el index a falta de una key única y distintiva en cada elemnto (e.g id).

[ver commit](https://github.com/fedeferrelli/greydive_challenge/commit/3375d5f644217e92e48a65c29b2a5c598d93edf6#diff-e8779784a72a1acf181b4167dff4fb2120665c2917fa838daffe922b6cc79737)

### 4.Componente ShowTestDetail para mostrar el detalle de cada tarea

Este componente recupera vía useParams la data de la tarea correspondiente y la pasa a componentes hijos para mostrar los detalles.

[ver commit inicial](https://github.com/fedeferrelli/greydive_challenge/commit/430ae598b79a803190ea2f72fc48b08aa92453b6#diff-12b5071a62e3888de8dd76ed3856d5f1db296687d03720143a04b14424985400)

[ver commit del componente final (sin estilos)](https://github.com/fedeferrelli/greydive_challenge/commit/69ae321daa83cc9f3891f9f333f8531f61db9a7d)


### 5.Creación de los componentes Client.jsx, TesterNumebr.jsx, Video.jsx, Transcription.jsx y Tasks.jsx 

Para mejorar la legibilidad del código cada uno de los detalles de cada tarea se muestra a través de un componente individual.

[commit Cliente](https://github.com/fedeferrelli/greydive_challenge/commit/8becf7ed2173e500c0ea4b575e254a59a0f22ded)
[commit TesterNumber](https://github.com/fedeferrelli/greydive_challenge/commit/69ae321daa83cc9f3891f9f333f8531f61db9a7d)
[commit Video](https://github.com/fedeferrelli/greydive_challenge/commit/cb7d9e449c23884e4fb205497ede9a58b17267af)
[commit Transcription](https://github.com/fedeferrelli/greydive_challenge/commit/f9cbd0cd87c4ccee41fb5356f1971b7091589c2e)
[commit Tasks](https://github.com/fedeferrelli/greydive_challenge/commit/6e290cfff49bcacb40dac65f21d86f097a79941d)


Para los compoenentes Transcripcion.jsx y Tasks.jsx se creó una función para tratar los <br> y/o \n

[commit Transcription](https://github.com/fedeferrelli/greydive_challenge/commit/1501a1c5ddc7d13ff109e4d48e871498c7d65e8f)
[commit Tasks](https://github.com/fedeferrelli/greydive_challenge/commit/8a903d94385a4aed70bbd782ad1c6e1ff812ffbe)



## :rainbow: Estilos

Para los estilos se utilizó Tailwind bajo la lógica de mobile-first. El diseño se basó fuertemente en el suministrado en el ejemplo.
