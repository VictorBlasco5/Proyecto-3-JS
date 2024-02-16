export const fn = (a, b, c) => {

   //ERRORES

   if ((a + b + c) % 3 !== 0) { // compruebo que el número total sea múltiplo de 3
      // console.log("El número de empanadas no es multiplo de 3.")
      throwError;
   }
   if (a < 0 || b < 0 || c < 0) { // compruebo que ningún valor sea negativo
      // console.log("No puede ser negativo")
      throwError;
   }
   if ((a + b + c) >= 40) { // compruebo que no haya más de 39 empanadas
      // console.log("El número de empanadas es 40 o superior")
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
         // console.log(polloVeg + " euros.")

         if (a > 0 && b > 0 && c === 0) { // si se me acabas las vegetarianas, entra aquí
            while (a > 0 && b > 0 && c === 0) {
               a--
               b--

               polloCarne += 2 * 13 / 3
               // console.log(polloCarne + " euros.")


               if (a === 0 && b > 0 && c === 0) { // si solo me quedan de carne
                  while (a === 0 && b > 0 && c === 0) {
                     b--

                     carne += 1 * 14 / 3
                     // console.log(carne + " euros.")
                  }
               } else if (a > 0 && b === 0 && c === 0) { // si solo me quedan de pollo
                  while (a > 0 && b === 0 && c === 0) {
                     a--

                     pollo += 1 * 12 / 3
                     // console.log(pollo + " euros.")
                  }
               }
            }
         } else if (a === 0 && b > 0 && c > 0) { // si se me acaban las de pollo entra aquí
            while (a === 0 && b > 0 && c > 0) {
               b--
               c--

               carneVeg += 2 * 15 / 3
               // console.log(carneVeg + " euros.")

               if (a === 0 && b > 0 && c === 0) { // si solo me quedan de carne
                  while (a === 0 && b > 0 && c === 0) {
                     b--

                     carne += 1 * 14 / 3
                     // console.log(carne + " euros.")
                  }
               } else if (a === 0 && b === 0 && c > 0) { // si solo me quedan vegetarianas
                  while (a === 0 && b === 0 && c > 0) {
                     c--

                     veg += 1 * 16 / 3
                     // console.log(veg + " euros.")
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
         // console.log(polloVeg + " euros.")

         if (a > 0 && b === 0 && c === 0) { // si solo quedan de pollo entra aquí

            while (a > 0 && b === 0 && c === 0) { // saco todas las de pollo
               a--

               pollo += 1 * 12 / 3
               // console.log(pollo + " euros.")
            }
         } else {// si solo quedan vegetarianas entra aquí
            // a === 0 && b === 0 && c > 0

            while (a === 0 && b === 0 && c > 0) { // saco todas las vegetarianas
               c--

               veg += 1 * 16 / 3
               // console.log(veg + " euros.")
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
         // console.log(polloCarne + " empanadas de pollo y carne")

         if (a > 0 && b === 0 && c === 0) { // si solo quedan de pollo entra aquí

            while (a > 0 && b === 0 && c === 0) { // saco todas las de pollo
               a--

               pollo += 1 * 12 / 3
               // console.log(pollo + " empanadas de pollo.")
            }
         } else { // si solo quedan de carne entra aquí
            // a === 0 && b > 0 && c === 0

            while (a === 0 && b > 0 && c === 0) { // saco todas las de carne
               b--

               carne += 1 * 14 / 3
               // console.log(carne + " empanadas carne.")
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
         // console.log(carneVeg + " euros.")

         if (a === 0 && b > 0 && c === 0) { // si solo quedan de carne entra aquí

            while (a === 0 && b > 0 && c === 0) { // saco todas las de carne
               b--

               carne += 1 * 14 / 3
               // console.log(carne + " euros.")
            }
         } else { // si solo quedan vegetarianas entra aquí
            // a === 0 && b === 0 && c > 0

            while (a === 0 && b === 0 && c > 0) { // saco todas las vegetarianas
               c--

               veg += 1 * 16 / 3
               // console.log(veg + " euros.")
            }
         }
      }
      precio = carneVeg + carne + veg;
   }


   //SOLO POLLO
   while (a > 0 && b === 0 && c === 0) {
      a--

      pollo += 1 * 12 / 3 //multiplico por el precio de la empanada y divido entre 3 al ser 3x1.
      // console.log(pollo + " euros.")
      precio = pollo
   }

   //SOLO CARNE
   while (a === 0 && b > 0 && c === 0) {
      b--

      carne += 1 * 14 / 3
      // console.log(carne + " euros.")
      precio = carne
   }

   //SOLO VEGETARIANA
   while (a === 0 && b === 0 && c > 0) {
      c--

      veg += 1 * 16 / 3
      // console.log(veg + " euros.")
      precio = veg
   }




   let precioFinal = Math.ceil(precio);

   // console.log(precioFinal)
   return precioFinal;

   // return a + b + c;

}

fn(0, 3, 3)