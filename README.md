# QR Layout | Spaceboy

Layout de Spaceboy para montar sobre páginas QR usando aframe y mindar.

## Dependencias
Instala dependencias con 
`npm install`

## Archivos

Guarda tus archivos en 

    ./public/assets/*

La librería que ocupan *mindar & aframe.js* lee los archivos desde ese directorio *./assets*.

### Nombres de archivo

Al ser un directorio que podría llegar a alojar cientos de archivos compartidos, tener un buen naming simplifica las tareas de orden, reemplazo, sustitución y/o eliminación.

- Utiliza en minúsculas
- Sin caracteres especiales
- Usa guiones medios en lugar de espacios
- Comienza con el nombre del proyecto
- Titulo corto y descriptivo de imagen

## Styling

En el archivo de estilos utiliza las variables para ajustar tamaños y colores que sobreescriban los estilos de scripting. La clase *qr-scene* se usa en *body.qr-scene* para poder priorizar el estilo evitando uso de *!important*.

    :root {
	    --stroke:  3px; <!-- Stroke Width of scan lines -->
		--bg-overlay:  #101010; <!-- Background color -->
	   }

## Desarrollo
Inicializa el servidor de vite con
`yarn dev`  Abre el puerto que te muestra la terminal. 
Revisa el archivo de configuración de vite para agregar o modificar, en el archivo *vite.config.js* tiene una declarativa de un *mimeType* para poder leer en browser correctamente los archivos con extensión *.mind*.

	`
	import  { defineConfig }  from  'vite';
	export  default  defineConfig({
	server:  {
		mimeTypes:  {
			'application/octet-stream':  ['mind']
		}
	}
	})
	`


## OpenGraph | Favicons | Metadata

Los metadatos de cada página se comparten con el sitio de spaceboy.mx
