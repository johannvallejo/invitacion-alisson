export const invitation = {
  eventName: "Mis XV años",
  eventType: "Fiesta elegante de XV años",
  mainName: "Alisson",

  date: "2026-07-04T17:00:00+01:00",
  displayDate: "04.07.2026",
  time: "17:00",

  locationName: "Palm Tree Banqueting",
  address: "329 Romford Rd, London E7 9HA",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=329%20Romford%20Rd%2C%20London%20E7%209HA",

  whatsappContacts: [
    {
      name: "Verónica",
      number: "447727013331",
    },
    {
      name: "Víctor",
      number: "447480171772",
    },
  ],

  whatsappText:
    "Hola, confirmo mi asistencia a los XV años de Alisson. Mi nombre es: ",

  dressCode: "Formal",
  dressCodeNote:
    "Por favor evitar usar tonos rosa, blanco y dorado, ya que son parte especial de mi vestimenta.",

  welcomeText:
    "Hay momentos inolvidables que se conservan en el corazón para siempre, por esta razón con la bendición de Dios y de mis padres quiero que compartas conmigo este día tan especial.",

  attendanceText:
    "¡Quiero compartir este momento tan esperado contigo! Por favor ayúdanos confirmando tu asistencia.",

  giftsText:
    "¡Gracias por formar parte de este gran día!",

  giftsHighlight: "Lluvia de sobres",

  songUrl: "",
  songTitle: "Canción especial",

  colors: {
    primary: "#6E1F2D",
    secondary: "#8A2D3C",
    accent: "#D8B36A",
    background: "#F8F1ED",
    card: "#FFF9F6",
    text: "#2B1A1E",
  },
};

export function getWhatsAppUrl(number) {
  return `https://wa.me/${number}?text=${encodeURIComponent(
    invitation.whatsappText
  )}`;
}