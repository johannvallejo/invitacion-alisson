import { useEffect, useRef, useState } from "react";
import { CalendarDays, Mail, MapPin, Music, Pause, Play, Shirt, Sparkles } from "lucide-react";
import { invitation, getWhatsAppUrl } from "./data/invitationData";
import Reveal from "./components/Reveal";
import mainPhoto from "./assets/alisson-main.jpg";
import alisson2Photo from "./assets/alisson2.jpg";
import alisson3Photo from "./assets/alisson3.jpg";
import alisson4Photo from "./assets/alisson4.jpg";
import audioFile from "./assets/alisson-song.mp3";
import "./index.css";

const translations = {
  es: {
    languageSpanish: "Español",
    languageEnglish: "English",

    invited: "Estás invitado/a",
    playTitle: "¡Dale Play y desliza!",
    playText: "Escucha mi canción favorita.",

    specialDayTitle: "Un día especial",
    specialDayText:
      "Hay momentos inolvidables que se conservan en el corazón para siempre, por esta razón con la bendición de Dios y de mis padres quiero que compartas conmigo este día tan especial.",

    countdownTitle: "Falta poco",
    countdownText: "Para celebrar este día tan especial",
    days: "Días",
    hours: "Horas",
    minutes: "Min",
    seconds: "Seg",

    whenWhereTitle: "Cuándo y dónde",
    date: "Fecha",
    time: "Hora",
    place: "Lugar",
    address: "Dirección",
    viewLocation: "Ver ubicación",

    dressCodeTitle: "Código de vestimenta",
    dressCodeNote:
      "Por favor evitar usar tonos rosa, blanco y dorado, ya que son parte especial de mi vestimenta.",

    confirmTitle: "Confirma tu asistencia",
    confirmText:
      "¡Quiero compartir este momento tan esperado contigo! Por favor ayúdanos confirmando tu asistencia.",
    confirmWith: "Confirmar con",

    giftsTitle: "Regalos",
    giftsText: "¡Gracias por formar parte de este gran día!",
    giftsHighlight: "Lluvia de sobres",

    finalThanks: "Gracias por acompañarme",
    finalText: "Te espero para celebrar un día inolvidable.",

    accessPrivate: "Invitación privada",
    accessTitle: "Acceso a la invitación",
    accessText:
      "Introduce el código de acceso para ver todos los detalles del evento.",
    accessPlaceholder: "Código de acceso",
    accessButton: "Entrar",
    accessError: "Código incorrecto. Inténtalo de nuevo.",
  },

  en: {
    languageSpanish: "Español",
    languageEnglish: "English",

    invited: "You are invited",
    playTitle: "Press play and scroll!",
    playText: "Listen to my favourite song.",

    specialDayTitle: "A special day",
    specialDayText:
      "There are unforgettable moments that stay in our hearts forever. For this reason, with God’s blessing and my parents’ love, I would be honoured to share this very special day with you.",

    countdownTitle: "Not long to go",
    countdownText: "To celebrate this very special day",
    days: "Days",
    hours: "Hours",
    minutes: "Min",
    seconds: "Sec",

    whenWhereTitle: "When and where",
    date: "Date",
    time: "Time",
    place: "Venue",
    address: "Address",
    viewLocation: "View location",

    dressCodeTitle: "Dress code",
    dressCodeNote:
      "Please avoid wearing pink, white and gold tones, as they are a special part of my outfit.",

    confirmTitle: "Confirm your attendance",
    confirmText:
      "I would love to share this long-awaited moment with you! Please help us by confirming your attendance.",
    confirmWith: "Confirm with",

    giftsTitle: "Gifts",
    giftsText: "Thank you for being part of this special day!",
    giftsHighlight: "Envelope gifts",

    finalThanks: "Thank you for joining me",
    finalText: "I look forward to celebrating an unforgettable day with you.",

    accessPrivate: "Private invitation",
    accessTitle: "Invitation access",
    accessText: "Enter the access code to view all the event details.",
    accessPlaceholder: "Access code",
    accessButton: "Enter",
    accessError: "Incorrect code. Please try again.",
  },
};
function Section({ children, className = "" }) {
  return (
    <section
      className={`min-h-screen px-5 py-16 flex items-center justify-center ${className}`}
    >
      <div className="w-full max-w-md mx-auto">{children}</div>
    </section>
  );
}

function SoftTransition({ from, via, to, height = 160 }) {
  return (
    <div
      aria-hidden="true"
      className="-mt-px -mb-px pointer-events-none"
      style={{
        height,
        background: `linear-gradient(180deg, ${from} 0%, ${via} 52%, ${to} 100%)`,
      }}
    />
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[2rem] bg-[#FFF9F6]/95 shadow-xl p-7 border border-white/60 ${className}`}
    >
      {children}
    </div>
  );
}

function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date(invitation.date).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0 || Number.isNaN(difference)) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-[#6E1F2D] px-3 py-5 text-center text-white shadow-lg"
        >
          <p className="text-3xl font-bold leading-none">{item.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-80">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
    const [language, setLanguage] = useState("es");
  const t = translations[language];

    const ACCESS_CODE = "ALISSON15";
  const [accessCode, setAccessCode] = useState("");
  const [hasAccess, setHasAccess] = useState(
  sessionStorage.getItem("invitationAccess") === "true"
);
  const [accessError, setAccessError] = useState("");

  const handleAccessSubmit = (event) => {
    event.preventDefault();

    if (accessCode.trim().toUpperCase() === ACCESS_CODE) {
      sessionStorage.setItem("invitationAccess", "true");
      setHasAccess(true);
      setAccessError("");
    } else {
      setAccessError(t.accessError);
    }
  };

  const handleToggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);
    }
  };

    if (!hasAccess) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#6E1F2D] via-[#7D2636] to-[#2B1A1E] px-5 py-10 flex items-center justify-center text-white">
        <div className="w-full max-w-md rounded-[2rem] bg-[#FFF9F6]/95 p-8 text-center text-[#2B1A1E] shadow-2xl border border-white/50">
          <p className="uppercase tracking-[0.35em] text-xs mb-4 text-[#6E1F2D]">
            Invitación privada
          </p>

          <h1 className="text-4xl font-serif mb-4">
            Acceso a la invitación
          </h1>

          <p className="text-sm leading-relaxed opacity-75 mb-7">
            Introduce el código de acceso para ver todos los detalles del evento.
          </p>

          <form onSubmit={handleAccessSubmit} className="space-y-4">
            <input
              type="text"
              value={accessCode}
              onChange={(event) => setAccessCode(event.target.value)}
              placeholder="Código de acceso"
              className="w-full rounded-full border border-[#EAD7D2] bg-white px-5 py-3 text-center text-sm outline-none focus:border-[#6E1F2D]"
            />

            {accessError && (
              <p className="text-sm text-[#6E1F2D]">
                {accessError}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-[#6E1F2D] px-6 py-3 text-sm font-medium text-white shadow-lg transition active:scale-95"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F8F1ED] text-[#2B1A1E] overflow-hidden">
            <audio ref={audioRef} src={audioFile} loop preload="auto" />
      <Section className="relative min-h-screen overflow-hidden px-5 py-16 flex items-center justify-center text-white">
              <div className="absolute top-5 left-1/2 z-40 flex -translate-x-1/2 rounded-full border border-white/30 bg-white/15 p-1 text-xs backdrop-blur">
        <button
          type="button"
          onClick={() => setLanguage("es")}
          className={`rounded-full px-4 py-2 transition ${
            language === "es" ? "bg-white text-[#6E1F2D]" : "text-white"
          }`}
        >
          Español
        </button>

        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-full px-4 py-2 transition ${
            language === "en" ? "bg-white text-[#6E1F2D]" : "text-white"
          }`}
        >
          English
        </button>
      </div>
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${mainPhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#6E1F2D]/60 to-[#2B1A1E]/80" />

        <div className="relative z-10 w-full max-w-md mx-auto text-center">
          <Reveal>
            <p className="uppercase tracking-[0.35em] text-xs mb-5 opacity-90">
              {t.invited}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="text-5xl font-serif leading-tight mb-4">
              {invitation.mainName}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-xl mb-8">{invitation.eventName}</p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-5 py-3 border border-white/30">
              <CalendarDays size={18} />
              <span>{invitation.displayDate}</span>
            </div>
          </Reveal>
        </div>

            <div className="absolute bottom-0 left-0 right-0 h-[32rem] bg-gradient-to-b from-transparent via-[#EAD7D2]/55 to-[#F8F1ED] pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#F8F1ED] pointer-events-none z-30" />
      </Section>

      <Section>
        <Reveal>
          <Card className="text-center">
            <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-[#6E1F2D] text-white flex items-center justify-center">
              <Music size={24} />
            </div>
            <h2 className="text-2xl font-serif mb-3">{t.playTitle}</h2>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              {t.playText}
            </p>
            <button
              type="button"
              onClick={handleToggleMusic}
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6E1F2D] text-white shadow-xl transition active:scale-95"
              >
              {isPlaying ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
            </button>
          </Card>
        </Reveal>
      </Section>

      <SoftTransition
        from="#F8F1ED"
        via="#EAD7D2"
        to="#6E1F2D"
        height={120}
      />

      <Section className="bg-[#6E1F2D] text-white">
        <Reveal>
          <div className="text-center">
            <Sparkles className="mx-auto mb-5 text-[#D8B36A]" size={34} />
            <h2 className="text-3xl font-serif mb-6">{t.specialDayTitle}</h2>
            <p className="text-base leading-8 opacity-90">
              {t.specialDayText}
            </p>
          </div>
        </Reveal>
      </Section>

      <SoftTransition
        from="#6E1F2D"
        via="#EAD7D2"
        to="#F8F1ED"
        height={120}
      />

      <section className="relative min-h-screen overflow-hidden px-5 py-16 flex items-center justify-center text-[#2B1A1E]">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${alisson2Photo})` }}
          />
          <div className="absolute inset-0 bg-[#6E1F2D]/65" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#F8F1ED] via-[#F8F1ED]/70 to-transparent pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-[24rem] bg-gradient-to-b from-transparent via-[#EAD7D2]/45 to-[#F8F1ED] pointer-events-none z-20" />
          <div className="relative z-30 w-full max-w-md mx-auto">
            <Reveal>
              <Card className="text-center">
                <h2 className="text-3xl font-serif mb-3">{t.countdownTitle}</h2>
                <p className="text-sm opacity-70 mb-6">
                  {t.countdownText}
                </p>
                <Countdown />
              </Card>
            </Reveal>
          </div>
        </section>

      <SoftTransition
        from="#F8F1ED"
        via="#6E1F2D"
        to="#2B1A1E"
        height={120}
      />

      <Section className="bg-[#2B1A1E] text-white">
        <Reveal>
          <Card className="text-center text-[#2B1A1E]">
            <MapPin className="mx-auto mb-4 text-[#6E1F2D]" size={34} />
            <h2 className="text-3xl font-serif mb-4">{t.whenWhereTitle}</h2>

            <div className="space-y-3 text-sm leading-relaxed mb-7">
              <p>
                <strong>{t.date}:</strong> {invitation.displayDate}
              </p>
              <p>
                <strong>{t.time}:</strong> {invitation.time}
              </p>
              <p>
                <strong>{t.place}:</strong> {invitation.locationName}
              </p>
              <p>
                <strong>{t.address}:</strong> {invitation.address}
              </p>
            </div>

            <a
              href={invitation.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-[#6E1F2D] text-white px-7 py-3 text-sm"
            >
              {t.viewLocation}
            </a>
          </Card>
        </Reveal>
      </Section>

      <SoftTransition
        from="#2B1A1E"
        via="#EAD7D2"
        to="#F8F1ED"
        height={120}
      />
     <Section className="relative min-h-screen overflow-hidden px-5 py-16 flex items-center justify-center text-[#2B1A1E]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${alisson3Photo})` }}
        />
        <div className="absolute inset-0 bg-[#6E1F2D]/65" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#F8F1ED] via-[#F8F1ED]/70 to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[24rem] bg-gradient-to-b from-transparent via-[#EAD7D2]/45 to-[#F8F1ED] pointer-events-none z-20" />
        <div className="relative z-30 w-full max-w-md mx-auto">
          <Reveal>
            <Card className="text-center">
              <Shirt className="mx-auto mb-4 text-[#6E1F2D]" size={34} />
              <h2 className="text-3xl font-serif mb-4">{t.dressCodeTitle}</h2>
              <p className="text-xl text-[#6E1F2D] font-semibold">
                {invitation.dressCode}
              </p>
              <p className="mt-4 text-sm opacity-70 leading-relaxed">
                {t.dressCodeNote}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <SoftTransition
        from="#F8F1ED"
        via="#EAD7D2"
        to="#6E1F2D"
        height={120}
      />

      <Section className="relative min-h-screen overflow-hidden px-5 py-16 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${mainPhoto})` }}
        />
        <div className="absolute inset-0 bg-[#6E1F2D]/80" />

        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#6E1F2D] via-[#6E1F2D]/60 to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[24rem] bg-gradient-to-b from-transparent via-[#EAD7D2]/45 to-[#F8F1ED] pointer-events-none z-20" />

        <div className="relative z-30 w-full max-w-md mx-auto">
          <Reveal>
            <Card className="text-center text-[#2B1A1E]">
              <h2 className="text-3xl font-serif mb-4">
                {t.confirmTitle}
              </h2>
              <p className="text-sm opacity-75 leading-relaxed mb-7">
                {t.confirmText}
              </p>

              <div className="flex flex-col gap-3">
                {invitation.whatsappContacts.map((contact) => (
                  <a
                    key={contact.number}
                    href={getWhatsAppUrl(contact.number)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-[#6E1F2D] text-white px-7 py-3 text-sm"
                  >
                    {t.confirmWith} {contact.name}
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <Card className="text-center">
            <Mail className="mx-auto mb-4 text-[#6E1F2D]" size={34} />
            <h2 className="text-3xl font-serif mb-4">{t.giftsTitle}</h2>
              <p className="text-sm opacity-75 leading-7 mb-3">
                {t.giftsText}
              </p>
              <p className="text-xl text-[#6E1F2D] font-semibold">
                {t.giftsHighlight}
              </p>
          </Card>
        </Reveal>
      </Section>

      <SoftTransition
        from="#F8F1ED"
        via="#EAD7D2"
        to="#6E1F2D"
        height={120}
      />

      <section className="relative min-h-screen overflow-hidden px-5 py-16 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${alisson4Photo})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1A1E]/70 via-[#6E1F2D]/70 to-[#2B1A1E]/85" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#6E1F2D] via-[#6E1F2D]/50 to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#2B1A1E]/70 to-[#2B1A1E] pointer-events-none z-20" />
        <div className="relative z-30 w-full max-w-md mx-auto text-center">
          <Reveal>
            <div>
              <p className="uppercase tracking-[0.35em] text-xs mb-5 opacity-80">
                {t.finalThanks}
              </p>
              <h2 className="text-5xl font-serif mb-5">
                {invitation.mainName}
              </h2>
              <p className="text-sm opacity-80">
                {t.finalText}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}