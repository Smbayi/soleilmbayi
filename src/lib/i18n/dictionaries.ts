export type Locale = "fr" | "en";

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      vision: "Vision",
      philosophy: "Philosophie",
      contact: "Contact",
      universe: "Découvrir mon univers",
      cv: "Télécharger mon CV",
    },
    hero: {
      brand: "Soleil Mbayi",
      nickname: "Le Tout Puissant Soleil",
      title:
        "Construire l'Afrique de demain grâce à la technologie, à la culture et à l'innovation.",
      subtitle:
        "Ingénieur en Intelligence Artificielle • Roboticien • Entrepreneur • Défenseur de l'héritage africain",
      ctaUniverse: "Découvrir mon univers",
      ctaProjects: "Mes projets",
      ctaCv: "Télécharger mon CV",
      ctaContact: "Contact",
      location: "Kinshasa · Mbuji-Mayi · RDC",
    },
    quote: {
      text: "Un peuple qui oublie son héritage construit son avenir sur du sable. Je veux bâtir une Afrique où la technologie protège notre identité au lieu de la remplacer.",
      author: "Soleil Mbayi",
    },
    about: {
      label: "01 — À propos",
      title: "Une histoire au service de l'humain",
      p1: "Je suis Soleil Mbayi, dit Le Tout Puissant Soleil — ingénieur en Intelligence Artificielle, roboticien, entrepreneur et humaniste. Ma trajectoire s'écrit à l'intersection de la science et de la culture.",
      p2: "Passionné par l'Intelligence Artificielle, la robotique, les objets connectés, les systèmes intelligents, l'innovation et la recherche, je mets ces technologies au service du développement humain.",
      p3: "Ma plus grande motivation : la dignité, l'identité, la transmission, la jeunesse africaine, la souveraineté technologique et l'entrepreneuriat. Construire des solutions utiles pour l'Afrique, sans jamais effacer ce qui nous définit.",
      passions: [
        "Intelligence Artificielle",
        "Robotique",
        "Objets connectés",
        "Systèmes intelligents",
        "Innovation",
        "Recherche",
      ],
      pillars: [
        "Dignité",
        "Identité",
        "Transmission",
        "Jeunesse africaine",
        "Souveraineté technologique",
        "Entrepreneuriat",
      ],
    },
    values: {
      label: "02 — Valeurs",
      title: "Ce qui guide chaque décision",
      items: [
        {
          title: "Innovation",
          desc: "Créer des solutions nouvelles ancrées dans les réalités africaines.",
        },
        {
          title: "Excellence",
          desc: "Viser le plus haut niveau technique et humain dans chaque projet.",
        },
        {
          title: "Discipline",
          desc: "La constance comme fondation de toute ambition durable.",
        },
        {
          title: "Leadership",
          desc: "Inspirer, rassembler et ouvrir la voie aux prochaines générations.",
        },
        {
          title: "Transmission",
          desc: "Partager le savoir pour multiplier l'impact.",
        },
        {
          title: "Humanisme",
          desc: "Placer la dignité humaine au centre de la technologie.",
        },
        {
          title: "Culture africaine",
          desc: "Protéger et faire rayonner notre héritage dans le numérique.",
        },
        {
          title: "Responsabilité",
          desc: "Assumer l'impact de chaque ligne de code et de chaque décision.",
        },
      ],
    },
    journey: {
      label: "03 — Parcours",
      title: "Une trajectoire construite avec intention",
      items: [
        {
          title: "Études en Intelligence Artificielle",
          desc: "Formation fondamentale aux systèmes intelligents et à la science des données.",
        },
        {
          title: "Spécialisation Robotique",
          desc: "Conception et contrôle de systèmes robotiques embarqués.",
        },
        {
          title: "Développement Web",
          desc: "Architectures modernes, expériences digitales et plateformes scalables.",
        },
        {
          title: "IoT",
          desc: "Objets connectés, capteurs et automatisation au service du terrain.",
        },
        {
          title: "Machine Learning",
          desc: "Modèles prédictifs et vision par ordinateur pour des cas d'usage concrets.",
        },
        {
          title: "Vision entrepreneuriale",
          desc: "Création de structures capables de transformer la recherche en impact.",
        },
        {
          title: "Recherche & Innovation",
          desc: "Explorer, prototyper et publier des solutions pour l'Afrique.",
        },
      ],
    },
    skills: {
      label: "04 — Compétences",
      title: "Un arsenal technique au service d'une vision",
      categories: [
        {
          name: "Intelligence Artificielle",
          items: [
            "Machine Learning",
            "Computer Vision",
            "Deep Learning",
            "Python",
            "TensorFlow",
            "Scikit-Learn",
            "OpenCV",
          ],
        },
        {
          name: "Robotique & IoT",
          items: [
            "ESP32",
            "Arduino",
            "MPU6050",
            "IoT",
            "Capteurs",
            "Automatisation",
          ],
        },
        {
          name: "Développement",
          items: [
            "React",
            "Next.js",
            "Django",
            "Flask",
            "Node",
            "MongoDB",
            "Firebase",
            "Flutter",
            "API REST",
            "Git",
            "Docker",
          ],
        },
        {
          name: "Design",
          items: ["Figma", "UI", "UX", "Branding"],
        },
      ],
    },
    projects: {
      label: "05 — Réalisations",
      title: "Des solutions utiles, ancrées dans le réel",
      seeMore: "Voir plus",
      items: [
        {
          id: "iot-biomechanics",
          title: "Suivi biomécanique intelligent",
          tag: "IoT · Santé",
          description:
            "Dispositif intelligent IoT pour le suivi biomécanique des personnes âgées avec détection préventive des chutes et transmission sécurisée des alertes.",
          tech: ["ESP32", "MPU6050", "IoT", "Python", "Alertes"],
          results:
            "Détection précoce des risques de chute et transmission sécurisée des alertes aux proches et soignants.",
        },
        {
          id: "durithi",
          title: "DURITHI",
          tag: "Culture · Numérique",
          description:
            "Plateforme dédiée à la transmission numérique de l'héritage culturel africain.",
          tech: ["Next.js", "Firebase", "Design System", "Contenu"],
          results:
            "Espace vivant pour documenter, transmettre et faire rayonner la mémoire culturelle.",
        },
        {
          id: "myuom",
          title: "MyUOM",
          tag: "EdTech · Plateforme",
          description: "Plateforme numérique de gestion universitaire.",
          tech: ["React", "Django", "API REST", "MongoDB"],
          results:
            "Digitalisation des parcours administratifs et académiques pour une expérience fluide.",
        },
        {
          id: "iot-embedded",
          title: "Solutions IoT embarquées",
          tag: "Embarqué · Automation",
          description:
            "Systèmes embarqués connectés pour l'automatisation, la mesure et le pilotage intelligent.",
          tech: ["Arduino", "ESP32", "Capteurs", "C/C++"],
          results:
            "Prototypes opérationnels adaptés aux contraintes locales d'énergie et de connectivité.",
        },
        {
          id: "ai-apps",
          title: "Applications d'Intelligence Artificielle",
          tag: "IA · Vision",
          description:
            "Applications d'IA pour la vision, la prédiction et l'aide à la décision.",
          tech: ["Python", "TensorFlow", "OpenCV", "ML"],
          results:
            "Outils concrets pour la santé, l'analyse d'images et l'automatisation intelligente.",
        },
        {
          id: "web-apps",
          title: "Applications Web modernes",
          tag: "Web · Produit",
          description:
            "Expériences web modernes, performantes et pensées pour l'impact.",
          tech: ["Next.js", "Node", "UI/UX", "Docker"],
          results:
            "Interfaces élégantes, SEO soigné et architectures prêtes à évoluer.",
        },
      ],
    },
    vision: {
      label: "06 — Vision",
      title: "Ma vision pour l'Afrique",
      lead: "Je rêve d'une Afrique créatrice de technologies — non simple consommatrice.",
      body: "Je souhaite former, transmettre, innover, créer des entreprises, développer des laboratoires et des centres de recherche. Protéger le patrimoine culturel grâce au numérique. Faire de la souveraineté technologique un projet collectif, digne et ambitieux.",
      points: [
        "Former",
        "Transmettre",
        "Innover",
        "Créer des entreprises",
        "Développer des laboratoires",
        "Créer des centres de recherche",
        "Protéger le patrimoine culturel",
      ],
    },
    conferences: {
      label: "07 — Conférences",
      title: "Porter la parole, allumer les esprits",
      items: [
        {
          title: "Conférencier",
          desc: "Interventions sur l'IA, la robotique et l'avenir technologique africain.",
        },
        {
          title: "Sensibilisation de la jeunesse",
          desc: "Éveiller les vocations et montrer que l'excellence est accessible.",
        },
        {
          title: "Innovation",
          desc: "Partager des méthodes pour transformer les idées en solutions utiles.",
        },
        {
          title: "Culture",
          desc: "Relier patrimoine, identité et création numérique.",
        },
        {
          title: "Entrepreneuriat",
          desc: "Accompagner l'esprit d'entreprise ancré dans l'impact social.",
        },
        {
          title: "Leadership",
          desc: "Former des leaders capables de servir et de bâtir.",
        },
      ],
    },
    ambitions: {
      label: "08 — Ambitions",
      title: "Une feuille de route pour le continent",
      short: {
        label: "Court terme",
        title: "Créer plusieurs startups",
        desc: "Lancer des entreprises technologiques capables de résoudre des problèmes concrets.",
      },
      medium: {
        label: "Moyen terme",
        title: "Laboratoire africain d'IA",
        desc: "Construire un laboratoire africain d'Intelligence Artificielle.",
      },
      long: {
        label: "Long terme",
        title: "Écosystème panafricain",
        desc: "Créer un écosystème technologique panafricain. Former plusieurs milliers de jeunes. Développer des solutions africaines pour des problèmes africains. Faire rayonner la culture africaine dans le numérique.",
      },
    },
    stats: {
      label: "09 — Impact",
      title: "Des chiffres qui racontent une trajectoire",
      items: [
        { label: "Projets", value: 24 },
        { label: "Technologies", value: 30 },
        { label: "Années d'expérience", value: 5 },
        { label: "Domaines étudiés", value: 8 },
        { label: "Solutions développées", value: 18 },
      ],
    },
    gallery: {
      label: "10 — Galerie",
      title: "Atmosphères d'un univers",
      items: [
        "Technologie",
        "Robotique",
        "Afrique",
        "Innovation",
        "Culture",
        "Conférences",
      ],
    },
    contact: {
      label: "11 — Contact",
      title: "Construisons ensemble",
      subtitle:
        "Un projet, une conférence, une collaboration ou une vision à partager — je suis à l'écoute.",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi…",
      success: "Message reçu. Je vous répondrai bientôt.",
      location: "Kinshasa · Mbuji-Mayi · République Démocratique du Congo",
      phone: "+243 XXX XXX XXX",
      emailValue: "mbayisoleil10@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    footer: {
      phrase:
        "L'innovation n'a de sens que lorsqu'elle sert l'humain et protège son héritage.",
      rights: "© 2026 Soleil Mbayi — Le Tout Puissant Soleil",
    },
    assistant: {
      title: "Assistant Soleil",
      subtitle: "Découvrez mon parcours",
      placeholder: "Posez une question…",
      greet:
        "Bonjour. Je suis l'assistant de Soleil Mbayi. Je peux vous présenter son parcours, sa vision et ses projets. Par où commencer ?",
      suggestions: [
        "Qui es-tu ?",
        "Quelle est ta vision ?",
        "Quels sont tes projets ?",
        "Parle-moi de ta philosophie",
      ],
      responses: {
        who: "Soleil Mbayi — Le Tout Puissant Soleil — est ingénieur en IA, roboticien, entrepreneur et défenseur de la culture africaine. Il construit des solutions utiles pour l'Afrique, ancrées dans l'identité et la dignité.",
        vision:
          "Sa vision : une Afrique créatrice de technologies, souveraine, qui forme sa jeunesse et protège son patrimoine grâce au numérique.",
        projects:
          "Parmi ses réalisations : un dispositif IoT de suivi biomécanique, DURITHI pour l'héritage culturel, MyUOM pour la gestion universitaire, et des applications d'IA et web modernes.",
        philosophy:
          "Sa philosophie — Le Code, la Culture et l'Humanité — affirme que la technologie n'est pas une fin, mais un moyen d'élever les peuples et de préserver les cultures.",
        default:
          "Explorez les sections du site ou demandez-moi : parcours, vision, projets, valeurs, ambitions.",
      },
    },
    loading: {
      line: "Le soleil se lève sur l'Afrique…",
    },
    philosophy: {
      title: "Le Code, la Culture et l'Humanité",
      subtitle: "Une philosophie pour bâtir sans s'oublier",
      sections: [
        {
          title: "Le Code",
          body: "Le code est un langage de création. Il structure, automatise et amplifie. Mais sans intention, il n'est qu'un outil froid. Chez Soleil Mbayi, chaque ligne écrite doit servir une utilité réelle — santé, éducation, culture, souveraineté.",
        },
        {
          title: "La Culture",
          body: "La culture est notre boussole. Un peuple qui oublie son héritage construit son avenir sur du sable. Le numérique doit documenter, transmettre et magnifier les savoirs africains — jamais les remplacer.",
        },
        {
          title: "L'Humanité",
          body: "La technologie n'a de valeur que si elle élève les peuples. Dignité, transmission, jeunesse et responsabilité : voilà le socle. Innover pour l'Afrique, c'est innover avec et pour les humains qui la portent.",
        },
      ],
      closing:
        "La technologie n'est pas une fin en soi, mais un moyen de préserver les cultures, d'élever les peuples et de construire un avenir souverain pour l'Afrique.",
    },
    universe: {
      title: "Mon univers",
      subtitle: "Une immersion dans la vision de Soleil Mbayi",
      chapters: [
        {
          title: "Origine",
          body: "Une identité ancrée en RDC, portée par l'ambition de servir le continent.",
        },
        {
          title: "Science",
          body: "IA, robotique, IoT — des disciplines mises au service de problèmes concrets.",
        },
        {
          title: "Culture",
          body: "L'héritage africain comme fondation, non comme décor.",
        },
        {
          title: "Horizon",
          body: "Startups, laboratoire d'IA, écosystème panafricain — une trajectoire longue.",
        },
      ],
      cta: "Revenir au portfolio",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      vision: "Vision",
      philosophy: "Philosophy",
      contact: "Contact",
      universe: "Discover my universe",
      cv: "Download CV",
    },
    hero: {
      brand: "Soleil Mbayi",
      nickname: "The Almighty Soleil",
      title:
        "Building Africa's tomorrow through technology, culture and innovation.",
      subtitle:
        "AI Engineer • Roboticist • Entrepreneur • Defender of African heritage",
      ctaUniverse: "Discover my universe",
      ctaProjects: "My projects",
      ctaCv: "Download CV",
      ctaContact: "Contact",
      location: "Kinshasa · Mbuji-Mayi · DRC",
    },
    quote: {
      text: "A people that forgets its heritage builds its future on sand. I want to build an Africa where technology protects our identity instead of replacing it.",
      author: "Soleil Mbayi",
    },
    about: {
      label: "01 — About",
      title: "A story in service of humanity",
      p1: "I am Soleil Mbayi — The Almighty Soleil — AI engineer, roboticist, entrepreneur and humanist. My path is written at the intersection of science and culture.",
      p2: "Passionate about Artificial Intelligence, robotics, connected objects, intelligent systems, innovation and research, I put these technologies at the service of human development.",
      p3: "My deepest drive: dignity, identity, transmission, African youth, technological sovereignty and entrepreneurship. Building useful solutions for Africa without erasing what defines us.",
      passions: [
        "Artificial Intelligence",
        "Robotics",
        "IoT",
        "Intelligent systems",
        "Innovation",
        "Research",
      ],
      pillars: [
        "Dignity",
        "Identity",
        "Transmission",
        "African youth",
        "Tech sovereignty",
        "Entrepreneurship",
      ],
    },
    values: {
      label: "02 — Values",
      title: "What guides every decision",
      items: [
        {
          title: "Innovation",
          desc: "Create new solutions rooted in African realities.",
        },
        {
          title: "Excellence",
          desc: "Aim for the highest technical and human standard in every project.",
        },
        {
          title: "Discipline",
          desc: "Consistency as the foundation of lasting ambition.",
        },
        {
          title: "Leadership",
          desc: "Inspire, unite and open the path for the next generations.",
        },
        {
          title: "Transmission",
          desc: "Share knowledge to multiply impact.",
        },
        {
          title: "Humanism",
          desc: "Place human dignity at the center of technology.",
        },
        {
          title: "African culture",
          desc: "Protect and radiate our heritage in the digital age.",
        },
        {
          title: "Responsibility",
          desc: "Own the impact of every line of code and every decision.",
        },
      ],
    },
    journey: {
      label: "03 — Journey",
      title: "A trajectory built with intention",
      items: [
        {
          title: "AI Studies",
          desc: "Foundational training in intelligent systems and data science.",
        },
        {
          title: "Robotics specialization",
          desc: "Design and control of embedded robotic systems.",
        },
        {
          title: "Web development",
          desc: "Modern architectures, digital experiences and scalable platforms.",
        },
        {
          title: "IoT",
          desc: "Connected devices, sensors and automation for real-world contexts.",
        },
        {
          title: "Machine Learning",
          desc: "Predictive models and computer vision for concrete use cases.",
        },
        {
          title: "Entrepreneurial vision",
          desc: "Building structures that turn research into impact.",
        },
        {
          title: "Research & Innovation",
          desc: "Explore, prototype and ship solutions for Africa.",
        },
      ],
    },
    skills: {
      label: "04 — Skills",
      title: "A technical arsenal serving a vision",
      categories: [
        {
          name: "Artificial Intelligence",
          items: [
            "Machine Learning",
            "Computer Vision",
            "Deep Learning",
            "Python",
            "TensorFlow",
            "Scikit-Learn",
            "OpenCV",
          ],
        },
        {
          name: "Robotics & IoT",
          items: [
            "ESP32",
            "Arduino",
            "MPU6050",
            "IoT",
            "Sensors",
            "Automation",
          ],
        },
        {
          name: "Development",
          items: [
            "React",
            "Next.js",
            "Django",
            "Flask",
            "Node",
            "MongoDB",
            "Firebase",
            "Flutter",
            "REST API",
            "Git",
            "Docker",
          ],
        },
        {
          name: "Design",
          items: ["Figma", "UI", "UX", "Branding"],
        },
      ],
    },
    projects: {
      label: "05 — Work",
      title: "Useful solutions, rooted in reality",
      seeMore: "See more",
      items: [
        {
          id: "iot-biomechanics",
          title: "Intelligent biomechanical monitoring",
          tag: "IoT · Health",
          description:
            "Smart IoT device for biomechanical monitoring of elderly people with preventive fall detection and secure alert transmission.",
          tech: ["ESP32", "MPU6050", "IoT", "Python", "Alerts"],
          results:
            "Early fall-risk detection with secure alerts to caregivers and relatives.",
        },
        {
          id: "durithi",
          title: "DURITHI",
          tag: "Culture · Digital",
          description:
            "Platform dedicated to the digital transmission of African cultural heritage.",
          tech: ["Next.js", "Firebase", "Design System", "Content"],
          results:
            "A living space to document, transmit and radiate cultural memory.",
        },
        {
          id: "myuom",
          title: "MyUOM",
          tag: "EdTech · Platform",
          description: "Digital university management platform.",
          tech: ["React", "Django", "REST API", "MongoDB"],
          results:
            "Digitized administrative and academic journeys for a fluid experience.",
        },
        {
          id: "iot-embedded",
          title: "Embedded IoT solutions",
          tag: "Embedded · Automation",
          description:
            "Connected embedded systems for automation, measurement and intelligent control.",
          tech: ["Arduino", "ESP32", "Sensors", "C/C++"],
          results:
            "Operational prototypes adapted to local energy and connectivity constraints.",
        },
        {
          id: "ai-apps",
          title: "Artificial Intelligence applications",
          tag: "AI · Vision",
          description:
            "AI applications for vision, prediction and decision support.",
          tech: ["Python", "TensorFlow", "OpenCV", "ML"],
          results:
            "Concrete tools for health, image analysis and intelligent automation.",
        },
        {
          id: "web-apps",
          title: "Modern web applications",
          tag: "Web · Product",
          description:
            "Modern, performant web experiences designed for impact.",
          tech: ["Next.js", "Node", "UI/UX", "Docker"],
          results:
            "Elegant interfaces, strong SEO and architectures ready to scale.",
        },
      ],
    },
    vision: {
      label: "06 — Vision",
      title: "My vision for Africa",
      lead: "I dream of an Africa that creates technology — not merely consumes it.",
      body: "I want to train, transmit, innovate, build companies, develop laboratories and research centers. Protect cultural heritage through digital means. Make technological sovereignty a collective, dignified and ambitious project.",
      points: [
        "Train",
        "Transmit",
        "Innovate",
        "Build companies",
        "Develop laboratories",
        "Create research centers",
        "Protect cultural heritage",
      ],
    },
    conferences: {
      label: "07 — Speaking",
      title: "Carry the word, spark minds",
      items: [
        {
          title: "Speaker",
          desc: "Talks on AI, robotics and Africa's technological future.",
        },
        {
          title: "Youth awareness",
          desc: "Awaken vocations and show that excellence is within reach.",
        },
        {
          title: "Innovation",
          desc: "Share methods to turn ideas into useful solutions.",
        },
        {
          title: "Culture",
          desc: "Connect heritage, identity and digital creation.",
        },
        {
          title: "Entrepreneurship",
          desc: "Foster enterprise rooted in social impact.",
        },
        {
          title: "Leadership",
          desc: "Shape leaders able to serve and build.",
        },
      ],
    },
    ambitions: {
      label: "08 — Ambitions",
      title: "A roadmap for the continent",
      short: {
        label: "Short term",
        title: "Create multiple startups",
        desc: "Launch tech companies able to solve concrete problems.",
      },
      medium: {
        label: "Medium term",
        title: "African AI laboratory",
        desc: "Build an African Artificial Intelligence laboratory.",
      },
      long: {
        label: "Long term",
        title: "Pan-African ecosystem",
        desc: "Create a pan-African tech ecosystem. Train thousands of young people. Develop African solutions for African problems. Make African culture shine in the digital world.",
      },
    },
    stats: {
      label: "09 — Impact",
      title: "Numbers that tell a trajectory",
      items: [
        { label: "Projects", value: 24 },
        { label: "Technologies", value: 30 },
        { label: "Years of experience", value: 5 },
        { label: "Fields studied", value: 8 },
        { label: "Solutions built", value: 18 },
      ],
    },
    gallery: {
      label: "10 — Gallery",
      title: "Atmospheres of a universe",
      items: [
        "Technology",
        "Robotics",
        "Africa",
        "Innovation",
        "Culture",
        "Conferences",
      ],
    },
    contact: {
      label: "11 — Contact",
      title: "Let's build together",
      subtitle:
        "A project, a talk, a collaboration or a vision to share — I'm listening.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending…",
      success: "Message received. I'll get back to you soon.",
      location: "Kinshasa · Mbuji-Mayi · Democratic Republic of the Congo",
      phone: "+243 XXX XXX XXX",
      emailValue: "mbayisoleil10@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
    footer: {
      phrase:
        "Innovation only makes sense when it serves humanity and protects its heritage.",
      rights: "© 2026 Soleil Mbayi — The Almighty Soleil",
    },
    assistant: {
      title: "Soleil Assistant",
      subtitle: "Discover my journey",
      placeholder: "Ask a question…",
      greet:
        "Hello. I am Soleil Mbayi's assistant. I can present his journey, vision and projects. Where shall we start?",
      suggestions: [
        "Who are you?",
        "What is your vision?",
        "What are your projects?",
        "Tell me about your philosophy",
      ],
      responses: {
        who: "Soleil Mbayi — The Almighty Soleil — is an AI engineer, roboticist, entrepreneur and defender of African culture. He builds useful solutions for Africa, rooted in identity and dignity.",
        vision:
          "His vision: an Africa that creates technology, sovereign, that trains its youth and protects its heritage through digital means.",
        projects:
          "Among his work: an IoT biomechanical monitoring device, DURITHI for cultural heritage, MyUOM for university management, and modern AI and web applications.",
        philosophy:
          "His philosophy — Code, Culture and Humanity — states that technology is not an end, but a means to elevate peoples and preserve cultures.",
        default:
          "Explore the site sections or ask me about: journey, vision, projects, values, ambitions.",
      },
    },
    loading: {
      line: "The sun rises over Africa…",
    },
    philosophy: {
      title: "Code, Culture and Humanity",
      subtitle: "A philosophy to build without forgetting",
      sections: [
        {
          title: "Code",
          body: "Code is a language of creation. It structures, automates and amplifies. But without intention, it is only a cold tool. For Soleil Mbayi, every line written must serve a real purpose — health, education, culture, sovereignty.",
        },
        {
          title: "Culture",
          body: "Culture is our compass. A people that forgets its heritage builds its future on sand. Digital must document, transmit and magnify African knowledge — never replace it.",
        },
        {
          title: "Humanity",
          body: "Technology only has value if it elevates peoples. Dignity, transmission, youth and responsibility: that is the foundation. Innovating for Africa means innovating with and for the humans who carry it.",
        },
      ],
      closing:
        "Technology is not an end in itself, but a means to preserve cultures, elevate peoples and build a sovereign future for Africa.",
    },
    universe: {
      title: "My universe",
      subtitle: "An immersion into Soleil Mbayi's vision",
      chapters: [
        {
          title: "Origin",
          body: "An identity rooted in the DRC, driven by the ambition to serve the continent.",
        },
        {
          title: "Science",
          body: "AI, robotics, IoT — disciplines put at the service of concrete problems.",
        },
        {
          title: "Culture",
          body: "African heritage as foundation, not as decoration.",
        },
        {
          title: "Horizon",
          body: "Startups, AI lab, pan-African ecosystem — a long trajectory.",
        },
      ],
      cta: "Back to portfolio",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["fr"];
