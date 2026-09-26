import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calaamadaha Sixirka Iyo Sixiroolaha" },
      {
        name: "description",
        content:
          "Signs and symptoms of magic, jinn possession and the evil eye — personal accounts of sorcery practised by foreigners in the West.",
      },
      { property: "og:title", content: "Calaamada Sixirka Iyo Sixiroolaha" },
      {
        property: "og:description",
        content:
          "Signs and symptoms of magic, jinn possession and the evil eye — personal accounts of sorcery practised in the West.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-sm bg-foreground/5">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero: split panel */}
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="hero-panel flex flex-col items-center justify-center px-8 py-20 text-center lg:items-end lg:px-16 lg:text-right">
          <h1 className="max-w-xl text-5xl font-extrabold leading-[0.95] tracking-tight text-accent-foreground sm:text-6xl lg:text-7xl">
            Calaamadaha Sixirka Iyo Sixiroolaha
          </h1>
          <p className="mt-10 max-w-md text-xs uppercase tracking-[0.25em] text-accent-foreground/80 sm:text-sm">
            Halkan ka daawo casharo faahfaahinaya calaamadaha lagu garto sixirka
            iyo sixiroolaha
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-accent-foreground/70">
            <a className="underline underline-offset-4" href="#story">
              @ajlkn
            </a>{" "}
            /{" "}
            <a
              className="underline underline-offset-4"
              href="https://html5up.net/"
            >
              HTML5 UP
            </a>
          </p>
          <a
            href="#story"
            aria-label="Scroll to story"
            className="mt-14 text-4xl text-accent-foreground"
          >
            ↓
          </a>
        </div>
        <div className="flex flex-col gap-1 bg-foreground/95 p-1">
          <Video id="OAPaNOwOBy4" title="Sign & Symptoms of Magic | Jinn Possession | Eye Evil" />
          <Video
            id="970hdVVcrCk"
            title="How to Identify a Magician And / Or Someone Working With a Jinn?"
          />
        </div>
      </section>

      {/* Story */}
      <main id="story" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          The Magic of the West: My Experience Dealing with Foreign People Who
          Practice Sorcery
        </h2>
        <p className="mt-4 text-lg font-semibold text-muted-foreground">Algabeyre</p>

        <h3 className="section-heading">Dedication</h3>
        <div className="prose-body">
          <p>To those who refuse to let the fog of superstition obscure the clarity of reason.</p>
          <p>And to my brother.</p>
        </div>

        <h3 className="section-heading">Table of Contents</h3>
        <div className="prose-body">
          <ol className="list-decimal pl-6">
            <li><a className="underline underline-offset-4" href="#author-biography">Author Biography</a></li>
            <li><a className="underline underline-offset-4" href="#introduction">Introduction: A Lesson I Learned in 2010</a></li>
            <li><a className="underline underline-offset-4" href="#chapter-1">Chapter 1: The Birmingham Man — Fragments of an Egyptian Lineage</a></li>
            <li><a className="underline underline-offset-4" href="#chapter-2">Chapter 2: The Cab Office — An Exercise in Social Engineering</a></li>
            <li><a className="underline underline-offset-4" href="#chapter-3">Chapter 3: The Siege of Subagle — The Mechanics of Dispossession</a></li>
            <li><a className="underline underline-offset-4" href="#chapter-4">Chapter 4: Reflections — The Rationalist's Defense</a></li>
          </ol>
        </div>

        <h3 id="author-biography" className="section-heading">Author Biography</h3>
        <div className="prose-body">
          <p>
            Algabeyre is an investigative writer and committed rationalist who has lived in the West for over two decades. For much of that time, the author moved through the world with a standard, perhaps naive, secular confidence — until 2010. During a visit to Ethiopia that year, a calculated betrayal by those within a trusted social circle served as a brutal intellectual awakening. This "turning point" stripped away the comfort of unexamined trust and replaced it with a rigorous, evidence-based methodology for navigating the world. Today, Algabeyre focuses on documenting and deconstructing the psychological machinery of sorcery and superstition, treating these "mystical" practices not as supernatural phenomena, but as sophisticated systems of social and psychological manipulation.
          </p>
        </div>

        <h3 id="introduction" className="section-heading">Introduction: A Lesson I Learned in 2010</h3>
        <div className="prose-body">
          <h4 className="font-bold">The Ethiopia Betrayal</h4>
          <p>
            In 2010, my intellectual armor was breached, not by a stranger, but by the very social structures I believed were my safeguard. While visiting Ethiopia, I was introduced to a woman through a network of intermediaries — individuals I had known for years and trusted implicitly. Because the introduction was "vetted" by these familiar faces, I bypassed my usual skepticism. I proceeded as if the situation were genuine, granting this woman access to my confidence that a stranger in a foreign land would never have received.
          </p>
          <p>
            It was a textbook failure of logic. I had outsourced my judgment to my peers, a cognitive shortcut that nearly cost me everything. This was not a "spiritual" attack; it was an exploitation of social proximity.
          </p>
          <h4 className="font-bold">The Impact of Trust</h4>
          <p>
            The internal friction that followed the realization of this betrayal was transformative. I had to reckon with the fact that my own brain had been used against me. This wasn't magic — it was a vulnerability in the human hardware. When we trust the source of an introduction, we stop looking for the "tell." This incident forced a permanent psychological shift: I realized that the most dangerous deceptions are those that wear the mask of familiarity.
          </p>
          <h4 className="font-bold">London Sightings</h4>
          <p>
            The patterns I identified in Ethiopia did not stay in East Africa. Upon returning to London, I began to see the same markers, the same ritualized behaviors, and the same predatory social structures within the Somali diaspora. These were not isolated incidents of "culture"; they were a mobile, exported technology of control. The "sightings" in London confirmed that the theater of sorcery is global, but its script remains predictably consistent.
          </p>
        </div>

        <h3 id="chapter-1" className="section-heading">Chapter 1: The Birmingham Man (Alle Kood)</h3>
        <div className="prose-body">
          <h4 className="font-bold">Origins and Influences</h4>
          <p>
            The subject I refer to as the <strong>Birmingham Man</strong>, or <strong>Alle Kood</strong>, represents a specific, historical branch of this craft. His methodology is not ancient or "tribal" in the vague sense; it is a clinical application of magical traditions that proliferated in Egypt during the 1980s. By tracing his pedigree, we see that his "power" is merely a set of learned techniques passed down through a regional school of thought — a syllabus of superstition.
          </p>
          <h4 className="font-bold">Sensory Indicators</h4>
          <p>
            When I sat in the same room as this man, the air was heavy with what I call the <strong>"Magic of Smell."</strong> It wasn't just a scent; it was an olfactory invasion. He utilized specific, pungent resins and synthetic musks designed to create a sensory "anchor" — a way to overwhelm the subject's environment and command their attention before a single word was spoken.
          </p>
          <p>
            Equally telling was his <strong>finger twitching</strong>. During our interaction, his hand maintained a rhythmic, ritualized tremor. To the believer, this is a sign of "connection" to the unseen; to the rationalist, it is a clear diagnostic marker. It is a pacing signal, a hypnotic tool used to keep the practitioner "on script" and to project an image of being a conduit for forces beyond his control. It is a performance of the nervous system.
          </p>
          <h4 className="font-bold">Categorization</h4>
          <ul>
            <li><strong>Historical Anchoring:</strong> Adherence to the 1980s Egyptian school of occultism.</li>
            <li><strong>Diagnostic Markers:</strong> The use of ritualized finger tremors as a signal of activity.</li>
            <li><strong>Sensory Dominance:</strong> A reliance on heavy, colonizing scents to facilitate psychological compliance.</li>
          </ul>
        </div>

        <h3 id="chapter-2" className="section-heading">Chapter 2: The Cab Office: An Exercise in Social Engineering</h3>
        <div className="prose-body">
          <h4 className="font-bold">The 2018 Incident</h4>
          <p>
            In 2018, I witnessed the practical application of sorcery as a weapon of intimidation in the most mundane of settings: a London cab office. The subject, <strong>TiiTiin</strong>, didn't use a wand or a circle; he used information. He moved through the space with the practiced ease of a man who knows he can bypass the social barriers of others.
          </p>
          <h4 className="font-bold">Background and Heritage</h4>
          <p>
            <strong>TiiTiin</strong> hails from <strong>Haradhere</strong>. This is a critical piece of data. Different regions produce different "brands" of sorcery. The Haradhere methodology is particularly focused on social leverage and the extraction of personal data to build a narrative of supernatural omniscience.
          </p>
          <h4 className="font-bold">The Name Ritual</h4>
          <p>
            The core of <strong>TiiTiin's</strong> methodology is the ritualized acquisition of the <strong>mother's name</strong>. From a rationalist perspective, this is a masterstroke of psychological anchoring. In the cultures he preys upon, the mother's name is an intimate, private piece of data. By demanding it, the practitioner creates a "data bridge." If a victim believes that knowing their mother's name gives a stranger power over their soul, the practitioner no longer needs actual power — the victim's own fear will do the work for them. It is identity theft rebranded as mysticism.
          </p>
        </div>

        <h3 id="chapter-3" className="section-heading">Chapter 3: The Siege of Subagle</h3>
        <div className="prose-body">
          <h4 className="font-bold">Subject Origins</h4>
          <p>
            The practitioners involved in the events at Subagle trace their roots to <strong>Adan Yabaal</strong>. This regional school is far more visceral than the Egyptian or Haradhere models. It relies on blood and theater to enforce its will.
          </p>
          <h4 className="font-bold">The Ritual of Sacrifice</h4>
          <p>
            The centerpiece of their practice is the <strong>saac/duraan</strong>, the ritual sacrifice of a cow. I observed the mechanics of this act with a cold eye. It is not an "offering" to a deity; it is a psychological spectacle. The shedding of blood in a communal setting serves to bind the participants in a shared trauma. It creates a "sunk cost" fallacy — once you have sacrificed an animal of value, you are psychologically committed to the delusion. You <em>must</em> believe it worked, or you have simply wasted a cow.
          </p>
          <h4 className="font-bold">Nocturnal Activity</h4>
          <p>
            The "Siege" was maintained through <strong>nocturnal vigils</strong>. These are not mere prayers; they are sleep-deprivation exercises. By remaining active through the night, the practitioners create a state of heightened suggestibility and "magical" intensity. It is a siege of the target's peace of mind, conducted under the cover of darkness to amplify the fear of the unknown.
          </p>
          <h4 className="font-bold">Objectives and Collaboration</h4>
          <p>
            The endgame is always <strong>dispossession</strong>. The goal is to strip the target of their assets, their social standing, and their mental autonomy. This is a coordinated effort. I identified a clear communicative link — likely via standard telecommunications disguised as "spiritual" connection — between the subject and a <strong>woman in Mahaday</strong>. They are partners in a predatory business, using the language of sorcery to facilitate what is essentially a long-con extortion racket.
          </p>
        </div>

        <h3 id="chapter-4" className="section-heading">Chapter 4: Reflections</h3>
        <div className="prose-body">
          <h4 className="font-bold">Analysis of Weaponized Proximity</h4>
          <p>
            The thread that connects Ethiopia 2010 to London 2018 is what I define as <strong>Weaponized Proximity</strong>. These practitioners do not attack from the shadows; they attack from the dinner table. They use our cultural emphasis on hospitality and shared heritage as a crowbar to pry open our lives. By knowing your mother's name, your village, or your friends, they create a false sense of "divine knowledge." This is not magic — it is <strong>Information Asymmetry</strong>. They know more about you than you know about their true motives, and they use that gap to manufacture "miracles."
          </p>
          <h4 className="font-bold">Logic vs. Delusion</h4>
          <p>
            As an investigative memoirist, my conclusion is that sorcery is a psychological parasite. It requires a host who believes in it to survive. The only defense is a total commitment to evidence-based reasoning. I offer these final arguments as the ultimate shield:
          </p>
          <ul>
            <li><strong>The Law of Mundane Causality:</strong> Every "ritual" marker — the smell, the twitch, the sacrifice — has a biological or sociological explanation. If you find the explanation, you kill the magic.</li>
            <li><strong>Deconstruction of the Data Bridge:</strong> Knowing a mother's name is not a spiritual link; it is a piece of data acquired through social engineering. Treat it as a security breach, not a curse.</li>
            <li><strong>The Spectacle of Cost:</strong> Rituals like the <em>saac/duraan</em> are designed to create emotional debt. Recognizing the theater of the sacrifice allows you to walk away from the "siege" without guilt.</li>
            <li><strong>Systematic Skepticism:</strong> Trust is a vulnerability. In environments where sorcery is practiced, skepticism is not a character flaw — it is a survival mechanism.</li>
          </ul>
          <p>
            Logic is the only light that does not cast a shadow. When we look at these "sorcerers" through the lens of reason, they cease to be powerful. They become what they have always been: desperate men playing with old tricks in a modern world.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <Video id="vXu_-LhEqLE" title="How to Perform Ruqyah Over Yourself & Family, Part 1/2" />
          <Video id="liz1MrkFFq0" title="How to Perform Ruqyah Over Yourself & Family, Part 2/2" />
          <Video id="-Yp6YUX-3GU" title="Additional video" />
        </div>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © Calaamadaha Sixirka. All rights reserved. Design:{" "}
        <a className="underline underline-offset-4" href="https://html5up.net/">
          HTML5 UP
        </a>
        .
      </footer>
    </div>
  );
}
