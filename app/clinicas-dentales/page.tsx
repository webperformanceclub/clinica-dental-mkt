import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webs para clínicas dentales | WebPC",
  description:
    "Creamos webs profesionales para clínicas dentales, adaptadas a móvil y pensadas para conseguir más citas mediante WhatsApp, llamada, formulario y SEO local.",
  keywords: [
    "webs para clínicas dentales",
    "página web clínica dental",
    "diseño web dentistas",
    "web dental profesional",
    "marketing digital clínicas dentales",
    "SEO local dentistas",
  ],
};

const navLinks = [
  { href: "#incluye", label: "Qué incluye" },
  { href: "#demo", label: "Demo" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

const problemCards = [
  {
    title: "Web antigua o poco profesional",
    text: "Una imagen descuidada puede transmitir menos confianza, aunque la clínica trabaje bien.",
  },
  {
    title: "Difícil pedir cita desde el móvil",
    text: "Si el teléfono, WhatsApp o formulario no están claros, se pierden contactos.",
  },
  {
    title: "Servicios poco explicados",
    text: "Tratamientos como implantes, ortodoncia o estética dental necesitan presentarse con claridad.",
  },
  {
    title: "Poca conexión con Google",
    text: "Una buena web debe reforzar la visibilidad local y complementar la ficha de Google Business.",
  },
];

const benefits = [
  "Diseño profesional adaptado a tu clínica",
  "Botón de WhatsApp visible",
  "Llamada directa desde móvil",
  "Formulario de contacto",
  "Servicios dentales destacados",
  "Opiniones de pacientes (zona preparada para reseñas reales)",
  "Ubicación con Google Maps",
  "Horarios y datos de contacto claros",
  "Preparada para SEO local",
  "Lista para campañas de Google Ads o redes sociales",
];

const processSteps = [
  {
    title: "Revisamos tu clínica",
    text: "Analizamos tu situación actual: web, Google, servicios, ubicación y forma de contacto.",
  },
  {
    title: "Preparamos una propuesta",
    text: "Creamos una estructura adaptada a tu clínica y a los tratamientos que más te interesa destacar.",
  },
  {
    title: "Diseñamos y publicamos",
    text: "Desarrollamos la web, revisamos contigo los contenidos y la dejamos publicada.",
  },
  {
    title: "Medimos y mejoramos",
    text: "Podemos ayudarte a revisar contactos, clics y oportunidades de mejora para captar más pacientes.",
  },
];

const faqs = [
  {
    q: "¿Cuánto tarda en estar lista la web?",
    a: "Depende del contenido y del tipo de proyecto, pero una landing sencilla puede estar lista en pocos días una vez tengamos la información principal de la clínica.",
  },
  {
    q: "¿Necesito tener fotos profesionales?",
    a: "No es imprescindible para empezar, aunque siempre ayuda. Podemos crear una primera versión limpia y más adelante sustituir imágenes por fotos reales de la clínica y el equipo.",
  },
  {
    q: "¿Podéis conectar la web con WhatsApp?",
    a: "Sí. Podemos añadir botones de WhatsApp, llamada directa, formulario de contacto y enlaces a la agenda online si la clínica ya utiliza una.",
  },
  {
    q: "¿La web será mía?",
    a: "Sí. La web se crea para tu clínica. También podemos ofrecer mantenimiento si prefieres que nos encarguemos de los cambios técnicos y actualizaciones.",
  },
  {
    q: "¿Esto sustituye a Google Business?",
    a: "No. La web complementa y refuerza tu ficha de Google. Lo ideal es que ambas trabajen juntas: Google ayuda a encontrarte y la web ayuda a convertir esa visita en contacto.",
  },
  {
    q: "¿Puedo empezar con algo sencillo?",
    a: "Sí. De hecho, recomendamos empezar con una versión clara y útil, medir resultados y mejorar después si tiene sentido.",
  },
];

function SectionTitle({ title, text }: { title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-relaxed text-slate-600">{text}</p> : null}
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href="#contacto"
        className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        Solicitar demo
      </a>
      <a
        href="https://clinica-dental-six-psi.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
      >
        Ver ejemplo dental
      </a>
    </div>
  );
}

export default function ClinicasDentalesPage() {
  const whatsappLink = "https://wa.me/34600367217?text=Hola%20WebPC,%20quiero%20informaci%C3%B3n%20sobre%20una%20web%20para%20mi%20cl%C3%ADnica.";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 [--brand:#1d4ed8] [--accent:#f97316]">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900">
            Web<span className="text-[var(--brand)]">PC</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Solicitar demo
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20 lg:pl-8 lg:pr-10">
        <div>
          <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            Soluciones WebPC para clínicas dentales
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Webs para clínicas dentales pensadas para conseguir más citas
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Creamos páginas rápidas, profesionales y adaptadas a móvil para que tus pacientes puedan encontrarte, confiar en tu clínica y pedir cita fácilmente por WhatsApp, llamada o formulario.
          </p>

          <div className="mt-8">
            <CTAButtons />
            <p className="mt-3 text-sm text-slate-500">Sin compromiso · Adaptado a tu clínica · Diseño listo para móvil</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-6 h-40 w-40 rounded-full bg-blue-200/40 blur-2xl" />
          <div className="absolute -bottom-8 right-0 h-44 w-44 rounded-full bg-orange-200/50 blur-2xl" />
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
              <p className="font-semibold text-slate-900">Clínica dental</p>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">Vista previa</span>
            </div>
            <ul className="grid gap-3 text-sm text-slate-700">
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Reserva online</li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">WhatsApp visible</li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Opiniones de pacientes</li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Ubicación y horarios</li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Servicios principales</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="Muchas clínicas dentales pierden pacientes antes de que llamen"
          text="Hoy, cuando alguien busca un dentista, normalmente mira primero en Google desde el móvil. Si la web es lenta, antigua, poco clara o no facilita pedir cita, ese posible paciente acaba contactando con otra clínica."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {problemCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Una web preparada para convertir visitas en primeras citas"
            text="En WebPC diseñamos páginas específicas para clínicas dentales con una estructura clara, rápida y orientada a que el paciente dé el siguiente paso."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-8">
          <SectionTitle
            title="Mira una demo real orientada a clínicas dentales"
            text="Hemos preparado una web demo para que puedas ver cómo podría presentarse una clínica dental de forma clara, moderna y enfocada a captar pacientes."
          />
          <a
            href="https://clinica-dental-six-psi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Ver demo dental
          </a>
          <p className="mt-4 text-sm text-slate-600">
            La demo es solo un ejemplo. La web final se adapta a los colores, servicios, equipo, fotografías, ubicación y necesidades reales de cada clínica.
          </p>
        </div>
      </section>

      <section id="incluye" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Qué incluye tu web dental" />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Diseño y estructura</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Página profesional adaptada a móvil</li>
                <li>Diseño personalizado con la identidad de tu clínica</li>
                <li>Textos orientados a conversión</li>
                <li>Secciones claras para generar confianza</li>
                <li>Carga rápida y navegación sencilla</li>
              </ul>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Captación de pacientes</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Botón de WhatsApp</li>
                <li>Botón de llamada</li>
                <li>Formulario de contacto</li>
                <li>Integración con agenda online si la clínica ya la usa</li>
                <li>Ubicación y cómo llegar</li>
                <li>Reseñas destacadas (espacio para reseñas reales)</li>
              </ul>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Visibilidad local</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Estructura preparada para SEO local</li>
                <li>Optimización básica de títulos y descripciones</li>
                <li>Integración con Google Maps</li>
                <li>Refuerzo de la ficha de Google Business</li>
                <li>Preparada para campañas de publicidad</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle title="Un proceso sencillo para que no tengas que complicarte" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Paso {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="precios" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Planes sencillos para empezar"
            text="Cada clínica tiene necesidades diferentes, pero estos planes sirven como punto de partida. Podemos adaptar la propuesta según el tamaño de la clínica, servicios y objetivos."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">Pack Presencia</h3>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">Desde 490 €</p>
              <p className="mt-3 text-sm text-slate-600">Ideal para clínicas que necesitan una web profesional sencilla y clara.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Landing page profesional</li>
                <li>Diseño adaptado a móvil</li>
                <li>Servicios principales</li>
                <li>Botón de llamada</li>
                <li>Botón de WhatsApp</li>
                <li>Formulario de contacto</li>
                <li>Ubicación con Google Maps</li>
                <li>Publicación online</li>
              </ul>
              <a href="#contacto" className="mt-6 inline-flex rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
                Consultar este plan
              </a>
            </article>

            <article className="relative rounded-2xl border-2 border-[var(--brand)] bg-blue-50 p-6 shadow-lg">
              <span className="absolute -top-3 left-5 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">Recomendado</span>
              <h3 className="text-xl font-bold text-slate-900">Pack Captación</h3>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">Desde 890 €</p>
              <p className="mt-3 text-sm text-slate-600">Pensado para clínicas que quieren una web más orientada a conseguir primeras visitas.</p>
              <p className="mt-3 text-sm font-semibold text-slate-700">Incluye todo lo del Pack Presencia más:</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Textos orientados a conversión</li>
                <li>Secciones de confianza</li>
                <li>Opiniones destacadas (ejemplo hasta cargar reseñas reales)</li>
                <li>Optimización SEO local básica</li>
                <li>Preparación para campañas</li>
                <li>Medición de clics en WhatsApp, llamada y formulario</li>
                <li>1 mes de soporte inicial</li>
              </ul>
              <a href="#contacto" className="mt-6 inline-flex rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Solicitar demo
              </a>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">Pack Crecimiento</h3>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">Desde 1.500 €</p>
              <p className="mt-3 text-sm text-slate-600">Para clínicas que quieren trabajar mejor su presencia online y destacar varios tratamientos.</p>
              <p className="mt-3 text-sm font-semibold text-slate-700">Incluye todo lo anterior más:</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Web con varias páginas</li>
                <li>Página específica por tratamiento</li>
                <li>Mayor trabajo de SEO local</li>
                <li>Blog o sección de consejos</li>
                <li>Mejor estructura para campañas</li>
                <li>Acompañamiento mensual opcional</li>
              </ul>
              <a href="#contacto" className="mt-6 inline-flex rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
                Pedir valoración
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle
          title="También podemos ayudarte después de publicar la web"
          text="Una web no debería quedarse parada. Podemos ayudarte a mantenerla actualizada, revisar mejoras y reforzar tu presencia online mes a mes."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Mantenimiento web</h3>
            <p className="mt-2 text-2xl font-bold text-slate-900">Desde 49 €/mes</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Cambios pequeños de contenido</li>
              <li>Actualización de horarios o servicios</li>
              <li>Revisión técnica básica</li>
              <li>Soporte mensual</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Captación local</h3>
            <p className="mt-2 text-2xl font-bold text-slate-900">Desde 199 €/mes</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Revisión de métricas</li>
              <li>Mejoras de conversión</li>
              <li>Optimización de Google Business</li>
              <li>Publicaciones o contenidos básicos</li>
              <li>Informe mensual sencillo</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="WebPC: soluciones digitales sencillas para negocios locales"
            text="Ayudamos a pymes y negocios locales a mejorar su presencia online con webs rápidas, claras y pensadas para vender mejor sus servicios. No buscamos complicarte con tecnología innecesaria. Creamos una solución útil, visual y fácil de mantener."
          />
          <ul className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-5">
            <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Especializados en negocios locales</li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Diseño adaptado a móvil</li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Enfoque práctico y comercial</li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Soluciones escalables</li>
            <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">Trato cercano y directo</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle title="Preguntas frecuentes" />
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none pr-7 font-semibold text-slate-900 marker:hidden">{faq.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contacto" className="bg-gradient-to-r from-blue-700 to-blue-800 py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">¿Quieres ver cómo quedaría una web así para tu clínica?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-blue-100">
            Podemos prepararte una primera valoración sin compromiso y explicarte qué tendría sentido mejorar en tu presencia online actual.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:hola@webpc.es" className="inline-flex min-w-64 items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95">
              Solicitar valoración gratuita
            </a>
            <a href={whatsappLink} className="inline-flex min-w-64 items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50">
              Contactar por WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-blue-100">Sin compromiso · Respuesta personalizada · Especializado en negocios locales</p>
        </div>
      </section>

      <a
        href={whatsappLink}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-600 md:hidden"
      >
        WhatsApp
      </a>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-600 sm:px-6 lg:px-8">
          <p className="font-semibold text-slate-900">WebPC</p>
          <p>Servicios digitales para pymes y negocios locales</p>
          <p>
            Web: <a href="https://webpc.es" className="text-blue-700 hover:underline">webpc.es</a>
          </p>
          <p>Email: hola@webpc.es</p>
          <p>WhatsApp: +34 600 36 72 17</p>
          <p>Aviso legal / privacidad</p>
        </div>
      </footer>
    </main>
  );
}
