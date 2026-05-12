export const invitation = {
  eventName: "15 Años de Alisson",
  eventType: "Fiesta elegante de 15 años",
  mainName: "Alisson",

  date: "2026-07-04T18:00:00",
  displayDate: "4 de julio",
  time: "Pendiente de confirmar",

  locationName: "Pendiente de confirmar",
  address: "Pendiente de confirmar",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=London%2C%20United%20Kingdom",

  whatsappNumber: "447727013331",
  whatsappText:
    "Hola, confirmo mi asistencia a los 15 Años de Alisson. Mi nombre es: ",

  dressCode: "Elegante",

  welcomeText:
    "Hay momentos que se viven una sola vez y se guardan para siempre en el corazón. Me encantaría compartir contigo una noche muy especial, llena de ilusión, alegría y recuerdos inolvidables. Te espero para celebrar mis 15 años.",

  giftsText:
    "Tu presencia es el mejor regalo. Si deseas tener un detalle conmigo, podrás hacerlo el día del evento con mucho cariño.",

  songUrl: "",
  songTitle: "Canción pendiente por elegir",

  colors: {
    primary: "#6E1F2D",
    secondary: "#8A2D3C",
    accent: "#D8B36A",
    background: "#F8F1ED",
    card: "#FFF9F6",
    text: "#2B1A1E",
  },
};

export function getWhatsAppUrl() {
  return `https://wa.me/${invitation.whatsappNumber}?text=${encodeURIComponent(
    invitation.whatsappText
  )}`;
}