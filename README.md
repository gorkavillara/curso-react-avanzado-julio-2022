# Tema 04 - Performance en Nuestras Aplicaciones
- ¿Qué es la performance de una aplicación?
- ¿Por qué es necesario controlarla?
- React Memo
- Hook useMemo
- Hook useCallback
- Hook useEffect dentro de la performance
- Introducción a los ServiceWorkers y las PWAs
- Creando una PWA en React JS

### Nota acerca del final de la sesión
Se ha tratado de reproducir el comportamiento de una PWA (Progressive Web App) en la sesión, pero de forma insatisfactoria.
El problema es simple, el service-worker.js debe estar en la raíz (carpeta public).
- Al estar (erróneamente) dentro de la carpeta /worker, su scope está únicamente dentro de dicha carpeta
- Para que el scope del service-worker esté en toda la app, este debe estar ubicado en la raíz de la app
- Por tanto, esto es fácilmente solucionable replicando el archivo service-worker.js en la carpeta raíz de la app (carpeta /public), tal y como ya se encuentra en el repositorio

Un saludo,
Gorka ;)