# Taller Angular con NodeJs

## Requisitos para realizar la aplicación
* Repositorio en GitHub
* Acceso a la terminal del equipo de desarrollo
* Git instalado en el equipo de desarrollo
* npm y NodeJs
<br><br>

## Pasos para la creación
##### Reemplazar [USUARIO] por su usuario en GitHub y [REPOSITORIO] por el nombre de su repositorio. Reemplazar [NOMBRE-PROYECTO] por el nombre de su proyecto en angular<br><br>

#### Clonar el repositorio
* git clone https://github.com/[USUARIO]/[REPOSITORIO].git

#### Moverse a la carpeta del repositorio
* cd [REPOSITORIO]

#### Instalar angular en dado caso no lo tenga instalado
* npm install -g @angular/cli

#### Crear un nuevo proyecto de angular
* ng new [NOMBRE-PROYECTO]

#### Moverse a la carpeta del proyecto de angular
* cd [NOMBRE-PROYECTO]

#### Instalar el paquete angular-cli-ghpages
* npm install angular-cli-ghpages
<br><br>

## Pasos para la publcación

* ng buil  --prod --base-href "https://[USUARIO].github.io/[REPOSITORIO]

* npx ngh --dir=dist/[NOMBRE-PROYECTO]