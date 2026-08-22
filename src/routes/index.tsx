import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calaamada Sixirka Iyo Sixiroolaha" },
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
        <p className="mt-4 text-lg font-semibold text-muted-foreground">
          Magic in the West: My Experiences with Foreign But Mainly Somali
          Practitioners
        </p>

        <h3 className="section-heading">Introduction: A Lesson I Learned in 2010</h3>
        <div className="prose-body">
          <p>
            In 2010, I went through an experience that deeply affected my trust
            in people. During a brief visit to Ethiopia, I was introduced to a
            woman by people I already knew and trusted. Because the introduction
            came from them, I believed the situation was genuine. If she had
            been a complete stranger, I would never have trusted her, especially
            in a place where I was only visiting for a short time.
          </p>
          <p>
            I entered the marriage honestly, believing it was real. However, as
            time passed, I began to realize that something was wrong. The
            behavior of both the woman and the people who introduced her to me
            did not add up. Eventually, I understood that I had been
            deliberately deceived and that the marriage itself was part of a
            plot.
          </p>
          <p>
            What made the situation even more disturbing was the realization
            that the woman was not entirely unfamiliar to me. I later remembered
            seeing her twice before in the United Kingdom — once in Hackney in
            2007 and again at Clapham Junction in 2008. This made me believe
            that the entire situation had been planned long before my visit to
            Ethiopia.
          </p>
          <p>
            As soon as I became certain of the truth, I immediately cut off all
            contact. Although the experience was painful, I chose to protect my
            dignity and move on. This event taught me a lasting lesson about
            trust, caution, and the importance of relying on clear evidence
            rather than assumptions.
          </p>
          <p>
            The same people who wanted to inject delusion into my life did not
            get the end result they expected, as I am someone who only believes
            logic. After that they descended on spells of magic, which I believe
            started with the fake marriage actress — by the way, her name was
            Amina or Samiira.
          </p>
          <p>
            Living in Britain for over twenty years since 2006, I have
            encountered several individuals who practice magic — some have even
            used it on me. My story reveals surprising encounters and
            observations about the forms of magic practiced by foreigners living
            in the West.
          </p>
        </div>

        <h3 className="section-heading">
          I. Common Forms of Magic Among Foreign Born Individuals in the West
        </h3>
        <div className="prose-body">
          <p>
            <strong>
              Personal Encounters: <em>Birmingham Man</em>, let us name him{" "}
              <em>Alle Kood</em>
            </strong>
            <br />
            From my arrival in Britain, I met people who openly admitted to
            knowing magic. Notably, the Birmingham man claimed to have learned
            magic in Egypt in 1980. He advised me to cast a spell on any woman I
            like to get her married, otherwise he insisted I will never have a
            family — and I vehemently rejected it.
          </p>
          <p>
            <strong>Usage of Magic:</strong> The primary reason these
            individuals approached me appeared to be to cast spells. Magic, in
            my experience, often involved subtle, mysterious acts rather than
            public displays.
          </p>
          <p>
            <strong>Magic and Smell:</strong> In 2018, I discovered a type of
            magic associated with smell, where a distinct scent would vanish
            within seven seconds — suspected to be a magical practice.
          </p>
        </div>

        <h3 className="section-heading">II. Specific Incidents</h3>
        <div className="prose-body">
          <p className="font-bold">1. The Birmingham Man aka Alle Kood (2015)</p>
          <ul>
            <li>Origin: Buqdda Hiiraan, a region in Somalia</li>
            <li>Circumstances: Searching for work and shelter</li>
            <li>
              Magic signs: strange habits — waking up at odd times and finger
              twitching; unexplained odors lingering for days
            </li>
            <li>
              Revelations: Later research linked these smells to certain types
              of magic.
            </li>
          </ul>

          <p className="font-bold">2. The Second Man (2018)</p>
          <p>
            Background: From Haradhere, a small village in the central Somalia
            region of Mudug — let us call him <em>TiiTiin</em>, a cab driver and
            coworker at the cab office where I was the operator.
          </p>
          <p>
            Every other driver went home at about 3am as there were no customers
            coming in. Because of the request of this specific driver we stayed
            overnight at the cab office; he kept me there saying he would wait
            one more hour, and then one more hour. At about 7 he said he would
            work for Uber instead, so I closed the cab office and went home
            around 7:30 and slept. I had no idea where he went then, but now I
            know he was meeting a magician.
          </p>
          <p>
            He arrived home at around 9:15. I heard every movement from his
            first step on the stairs, to the keys he put in the door lock, up
            until he stood above me. While I heard everything, he called in the
            name of my mother and touched me while I was screaming. I felt a
            physical and verbal struggle but was unable to breathe. The man
            muttered "maybe your magic has failed you today," indicating an
            unsuccessful spell. Eventually I could breathe, and I reported the
            event to my brother.
          </p>

          <p className="font-bold">3. The Third Man (2023–Present)</p>
          <p>
            Origin: From Adan Yabaal, sent from Mogadishu — let us call him{" "}
            <em>Subagle</em> — with the sole purpose of displacing and replacing
            me with a second sorcerer. He came under the pretext of working for
            a year and a half, but stayed longer.
          </p>
          <p>
            He is suspected of using magic to force me out of my brother's
            house. His wife in Somalia questioned him on the phone about his
            prolonged stay and why he is not coming back, and he responded:
            "will I just come back without dispossessing?" I don't think he is
            going to achieve his too-ambitious target, because I am not going
            anywhere until the sum of money that has been claimed on my behalf
            is paid to me.
          </p>
          <p>
            He speaks only the Somali language with no formal education. He
            doesn't seem to know the Quran, has no Mus'haf and doesn't read
            Quran either; his sole skill seemed to be magic and sorcery, and
            something called <em>duraan</em> which his specific tribe practises.
            His unusual behavior includes staying awake four nights a week while
            I sleep — but that is coming to an end now, as I too am going to be
            awake, catching him off guard. He frequently speaks to a woman
            living alone in the countryside, a remote area of a city called
            Mahaday in the Middle Shabelle region of Somalia. She lives alone;
            no doubt he calls her for instructions on how he has to cast the
            spell of magic.
          </p>
        </div>

        <h3 className="section-heading">III. Reflections</h3>
        <div className="prose-body">
          <p>
            Throughout these experiences, I have noticed a pattern of foreign
            men practicing magic — often for manipulation or personal gain. My
            research and observations suggest that magic based on scent, calling
            out the name of the victim's mother, and personal rituals may be
            prevalent among these mainly Somali sorcerers.
          </p>
          <p className="font-bold">Conclusion</p>
          <p>
            The mystery of why these practitioners remain close and continue
            their practices is ongoing. I am left wondering: "Why does a witch
            always sleep next to me?" The story continues…
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <Video id="vXu_-LhEqLE" title="How to Perform Ruqyah Over Yourself & Family, Part 1/2" />
          <Video id="liz1MrkFFq0" title="How to Perform Ruqyah Over Yourself & Family, Part 2/2" />
        </div>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © Calaamada Sixirka. All rights reserved. Design:{" "}
        <a className="underline underline-offset-4" href="https://html5up.net/">
          HTML5 UP
        </a>
        .
      </footer>
    </div>
  );
}
