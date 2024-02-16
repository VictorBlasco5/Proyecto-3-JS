export const fn = (a, b, c) => {

   //ERRORES
   if ((a + b + c) % 3 !== 0) { // compruebo que el número total sea múltiplo de 3
      throwError;
   }
   if (a < 0 || b < 0 || c < 0) { // compruebo que ningún valor sea negativo
      throwError;
   }
   if ((a + b + c) >= 40) { // compruebo que no haya más de 39 empanadas
      throwError;
   }

   let polloCarne = 0;
   let polloVeg = 0;
   let carneVeg = 0;
   let pollo = 0;
   let carne = 0;
   let veg = 0;
   let precio = 0;

   // POLLO, CARNE Y VEGETARIANA 
   while (a > 0 && b > 0 && c > 0) {
      if (a === 1 && b === 1 && c === 1) { // caso solo una de cada tipo
         a--
         c--
         b--
         polloVeg += 2 * 14 / 3
         carne += 1 * 14 / 3
      }
      if (a > 0 && b > 0 && c > 0) { //primero saco las de pollo y vegetarianas
         a--
         c--
         polloVeg += 2 * 14 / 3 //multiplico por el precio de la empanada y divido entre 3 al ser 3x1.
         if (a > 0 && b > 0 && c === 0) { // si se me acabas las vegetarianas, entra aquí
            while (a > 0 && b > 0 && c === 0) {
               a--
               b--
               polloCarne += 2 * 13 / 3
               if (a === 0 && b > 0 && c === 0) { // si solo me quedan de carne
                  while (a === 0 && b > 0 && c === 0) {
                     b--
                     carne += 1 * 14 / 3
                  }
               } else if (a > 0 && b === 0 && c === 0) { // si solo me quedan de pollo
                  while (a > 0 && b === 0 && c === 0) {
                     a--
                     pollo += 1 * 12 / 3
                  }
               }
            }
         } else if (a === 0 && b > 0 && c > 0) { // si se me acaban las de pollo entra aquí
            while (a === 0 && b > 0 && c > 0) {
               b--
               c--
               carneVeg += 2 * 15 / 3
               if (a === 0 && b > 0 && c === 0) { // si solo me quedan de carne
                  while (a === 0 && b > 0 && c === 0) {
                     b--
                     carne += 1 * 14 / 3
                  }
               } else if (a === 0 && b === 0 && c > 0) { // si solo me quedan vegetarianas
                  while (a === 0 && b === 0 && c > 0) {
                     c--
                     veg += 1 * 16 / 3
                  }
               }
            }
         }
      }
      precio = polloVeg + polloCarne + carneVeg + carne + pollo + veg
   };
   //SOLO POLLO Y VEGETARIANA
   while (a > 0 && b === 0 && c > 0) { // bucle para sacar todas las empanadas de pollo y vegetarianas
      if (a > 0 && b === 0 && c > 0) {
         a--
         c--
         polloVeg += 2 * 14 / 3 //multiplico por el precio de la empanada y divido entre 3 al ser 3x1.
         if (a > 0 && b === 0 && c === 0) { // si solo quedan de pollo entra aquí
            while (a > 0 && b === 0 && c === 0) { // saco todas las de pollo
               a--
               pollo += 1 * 12 / 3
            }
         } else {// si solo quedan vegetarianas entra aquí
            while (a === 0 && b === 0 && c > 0) { // saco todas las vegetarianas
               c--
               veg += 1 * 16 / 3
            }
         }
      }
      precio = polloVeg + pollo + veg;
   }
   //SOLO POLLO Y CARNE
   while (a > 0 && b > 0 && c === 0) { // bucle para sacar todas las empanadas de pollo y carne
      if (a > 0 && b > 0 && c === 0) {
         a--
         b--
         polloCarne += 2 * 13 / 3 ////multiplico por el precio de la empanada y divido entre 3 al ser 3x1.
         if (a > 0 && b === 0 && c === 0) { // si solo quedan de pollo entra aquí
            while (a > 0 && b === 0 && c === 0) { // saco todas las de pollo
               a--
               pollo += 1 * 12 / 3
            }
         } else { // si solo quedan de carne entra aquí
            while (a === 0 && b > 0 && c === 0) { // saco todas las de carne
               b--
               carne += 1 * 14 / 3
            }
         }
      }
      precio = polloCarne + pollo + carne;
   }
   // SOLO CARNE Y VEGETARIANA
   while (a === 0 && b > 0 && c > 0) { // bucle para sacar todas las empanadas de carne y vegetarianas
      if (a === 0 && b > 0 && c > 0) {
         b--
         c--
         carneVeg += 2 * 15 / 3 //multiplico por el precio de la empanada y divido entre 3 al ser 3x1.
         if (a === 0 && b > 0 && c === 0) { // si solo quedan de carne entra aquí
            while (a === 0 && b > 0 && c === 0) { // saco todas las de carne
               b--
               carne += 1 * 14 / 3
            }
         } else { // si solo quedan vegetarianas entra aquí
            while (a === 0 && b === 0 && c > 0) { // saco todas las vegetarianas
               c--
               veg += 1 * 16 / 3
            }
         }
      }
      precio = carneVeg + carne + veg;
   }
   //SOLO POLLO
   while (a > 0 && b === 0 && c === 0) {
      a--
      pollo += 1 * 12 / 3 //multiplico por el precio de la empanada y divido entre 3 al ser 3x1.
      precio = pollo
   }
   //SOLO CARNE
   while (a === 0 && b > 0 && c === 0) {
      b--
      carne += 1 * 14 / 3
      precio = carne
   }
   //SOLO VEGETARIANA
   while (a === 0 && b === 0 && c > 0) {
      c--
      veg += 1 * 16 / 3
      precio = veg
   }

   let precioFinal = Math.ceil(precio);
   return precioFinal;
}
fn(2, 0, 1)