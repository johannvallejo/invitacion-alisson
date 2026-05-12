import { useRef, useState } from "react";
import { CalendarDays, Gift, MapPin, Music, Pause, Play, Shirt, Sparkles } from "lucide-react";
import { invitation, getWhatsAppUrl } from "./data/invitationData";
import Reveal from "./components/Reveal";
import mainPhoto from "./assets/alisson-main.jpg";
import audioFile from "./assets/alisson-song.mp3";
import "./index.css";

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
  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      {["Días", "Horas", "Min", "Seg"].map((label) => (
        <div key={label} className="rounded-2xl bg-[#6E1F2D] text-white py-4">
          <div className="text-2xl font-semibold">00</div>
          <div className="text-[11px] uppercase tracking-widest opacity-80">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
  return (
    <main className="bg-[#F8F1ED] text-[#2B1A1E] overflow-hidden">
            <audio ref={audioRef} src={audioFile} loop preload="auto" />
      <Section className="relative min-h-screen overflow-hidden px-5 py-16 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${mainPhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#6E1F2D]/60 to-[#2B1A1E]/80" />

        <div className="relative z-10 w-full max-w-md mx-auto text-center">
          <Reveal>
            <p className="uppercase tracking-[0.35em] text-xs mb-5 opacity-90">
              Estás invitado/a
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
            <h2 className="text-2xl font-serif mb-3">¡Dale Play y desliza!</h2>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              Escucha mi canción favorita.
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
            <h2 className="text-3xl font-serif mb-6">Una noche especial</h2>
            <p className="text-base leading-8 opacity-90">
              {invitation.welcomeText}
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

      <Section>
        <Reveal>
          <Card className="text-center">
            <h2 className="text-3xl font-serif mb-3">Falta poco</h2>
            <p className="text-sm opacity-70 mb-6">
              Para celebrar este día tan especial
            </p>
            <Countdown />
          </Card>
        </Reveal>
      </Section>

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
            <h2 className="text-3xl font-serif mb-4">Cuándo y dónde</h2>

            <div className="space-y-3 text-sm leading-relaxed mb-7">
              <p>
                <strong>Fecha:</strong> {invitation.displayDate}
              </p>
              <p>
                <strong>Hora:</strong> {invitation.time}
              </p>
              <p>
                <strong>Lugar:</strong> {invitation.locationName}
              </p>
              <p>
                <strong>Dirección:</strong> {invitation.address}
              </p>
            </div>

            <a
              href={invitation.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-[#6E1F2D] text-white px-7 py-3 text-sm"
            >
              Ver ubicación
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
      <Section>
        <Reveal>
          <Card className="text-center">
            <Shirt className="mx-auto mb-4 text-[#6E1F2D]" size={34} />
            <h2 className="text-3xl font-serif mb-4">Código de vestimenta</h2>
            <p className="text-xl text-[#6E1F2D] font-semibold">
              {invitation.dressCode}
            </p>
            <p className="mt-4 text-sm opacity-70 leading-relaxed">
              Te invitamos a vestir de forma elegante para acompañar la temática
              de la celebración.
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
                Confirma tu asistencia
              </h2>
              <p className="text-sm opacity-75 leading-relaxed mb-7">
                Será un honor contar contigo en esta celebración. Confirma tu
                asistencia por WhatsApp.
              </p>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-[#6E1F2D] text-white px-7 py-3 text-sm"
              >
                Confirmar por WhatsApp
              </a>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <Card className="text-center">
            <Gift className="mx-auto mb-4 text-[#6E1F2D]" size={34} />
            <h2 className="text-3xl font-serif mb-4">Regalos</h2>
            <p className="text-sm opacity-75 leading-7">
              {invitation.giftsText}
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

      <Section className="bg-gradient-to-b from-[#6E1F2D] via-[#7D2636] to-[#2B1A1E] text-white">
        <Reveal>
          <div className="text-center">
            <p className="uppercase tracking-[0.35em] text-xs mb-5 opacity-80">
              Gracias por acompañarme
            </p>
            <h2 className="text-5xl font-serif mb-5">{invitation.mainName}</h2>
            <p className="text-sm opacity-80">
              Te espero para celebrar una noche inolvidable.
            </p>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}