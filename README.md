# CertGenerator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

Run "npm install" inside this project folder to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Base de datos 
En firebase

## Falta
Full!!! 
0. cargar un archivo csv con los datos de los participantes (nombre, email). Pero un workaround es generar el archivo json con otra aplicación e importar ese archivo a firebase.

1. Generar el certificado en PDF con los datos del participante. 
  a. Una opción es hacer el certificado en Html y exportar a Pdf
  b. Otra es el archivo pdf que están en la carpeta /assets es un form, se podría ingresar el valor correspondiente (nombre)
  
2. Enviar el certificado a la direccíon de correo

3. Modificar el status del participante para indicar que ya se le envió un certificado (el campo status todavía no está creado en la base)
