# Problema de lógica con JavaScript
Tercer proyecto desarrollado en GeeksHubs Academy en el cual he desarrollado un codigo para encontrar la forma más barata de comprar unas empanadas según unos parámetros determinados.

## Tabla de contenido
- [Tecnologías.](#tecnologías)
- [Premisas del problema.](#premisas-del-problema)
- [Descripción del código.](#descripción-del-código)
- [Autor.](#autor)
- [Agradecimientos.](#agradecimientos)

### Tecnologías
<img src="https://img.shields.io/badge/JAVASCRIPT-000000?style=for-the-badge&logo=javascript&logoColor=yelow" alt="JS" />

### Premisas del problema

- Tenemos 3 tipos de empanadas: **pollo a 12€**, **carne a 14€** y **vegetariana a 16€**.
- Las emapanadas **pueden partirse en dos** y juntarse. Ejemplo: Media de pollo (6€) y media vegetariana (8€), tendríamos una empanada por valor de 14€.
- Hay **oferta de 3x1**, pagando la más cara de las 3.
- La **cantidad** de empanadas tiene que ser **múltiplo de 3** y **no puede ser negativa ni superior a 39**.

### Descripción del código
- El código cuenta con distintos bucles en los que entrará dependiendo de los tipos de empanadas que el cliente quiera comprar.
- Si el cliente quiere de los **tres tipos**, entrará en el primer bucle while el cual irá recorriendo en función de la cantidad que quiera de cada una para lo cual tenemos los distintos condicionales if y else if, los cuales a su vez también tendrán un bucle dentro de ellos hasta que lleguemos al total de las empanadas.
- Si el cliente quiere **solo de dos tipos**, tenemos las 3 posibilidades que serían: pollo y vegatariana, pollo y carne y carne y vegetariana, plasmadas en el código en este orden.
- Por último, tambien tenemos la posibilidad de que el cliente tan **solo** quiera de **un tipo** de empanadas para lo cual contemplamos las 3 posibles opciones.
- Incluye las **3 premisas** que siempre se deben cumplir para asegurarnos de que la cantidad de empanadas sea múltiplo de 3 y en ningún caso sea negativa ni superior a 39.

### Autor
- **Víctor Blasco** - Project Developer.
   - [GitHub](https://github.com/VictorBlasco5)

### Agradecimientos
- Agradecimiento a GeeksHubs Academy por su implicación en mi aprendizaje.