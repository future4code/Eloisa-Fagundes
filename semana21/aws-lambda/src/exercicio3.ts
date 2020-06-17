
export const handler = async(event: any) => {
   const numero = event.numero
   const numero2 = event.numero2

   return event.numero + event.numero2
}
