import I18n from "i18n-js";

I18n.translations.nl = {
  routes: {
    backpack: "Backpack",
    "badge-requests": "Badge verzoeken",
    collections: "Collecties",
    profile: "Profiel",
  },
  header: {
    logout: "Logout",
    nav: {
      badgeclasses: "Badges",
      manage: "Manage",
    },
  },
  login: {
    title: "Leven lang ontwikkelen",
    description:
      "Edubadges zijn digitale certificaten die aantonen dat de eigenaar bepaalde vaardigheden of kennis bezit. Edubadges kunnen worden uitgereikt voor zowel extracurriculaire activiteiten als geaccrediteerd onderwijs.",
    student: {
      title: "Mijn Backpack",
      subtitle: "ontvang en deel badges",
      action: "Open je Backpack",
      button: "Log in met je eduID",
      accountCreation: {
        askAccountNo: "Nog <strong>geen</strong> Backpack?",
        startAccount: "Klik hier",
      },
    },
    teacher: {
      title: "Uitgeversportaal",
      subtitle: "ken badges toe aan studenten",
      action: "Ga naar het uitgeversportaal",
      button: "Log in via SURFconext",
      accountCreation: {
        askAccount: "Nog <strong>geen</strong> toegang?",
        startAccount: "Neem contact op met de instellingsbeheerder",
      },
    },
    createEduId: {
      askAccountYes: "Al <strong>wel</strong> een Backpack?",
      logInAccount: "Log in",
      createAccountButton: "Maak een eduID aan",
      back: "Terug",
      title: "Maak een Backpack aan",
      subtitle: "je hebt een eduID nodig",
      step1: "Stap 1: Maak een eduID aan",
      step2: "Stap 2: verifieer uw identiteit",
      welcome: "Welkom bij je rugzak",
      awarded: "We hebben u uw eerste badge toegekend😀",
      infoStep2:
        "Om eduBadges verder te kunnen ontvangen, moet u <strong> uw identiteit verifiëren </strong> bij uw onderwijsinstellingen. U kunt dit bewijzen door op de knop te klikken en u aan te melden bij uw instelling met uw instellingsaccount.",
      verification: "Verificatie geslaagd!",
      infoStep3: "Je kunt nu edubadges in je rugzak ontvangen.",
      require:
        "Om een edubadges Backpack aan te maken heb je een eduID nodig. Na het aanmaken van een eduID kan je je onderwijsinstelling verifiëren.",
      steps: {
        step1: "Maak een eduID aan",
        step2: "Verifieer je instelling",
        step3: "Ontvang & deel badges",
      },
    },
  },
  profile: {
    profile: "Profile",
    name: "Name",
    primary: "Primary e-mail",
    emails: "E-mails",
    email: "E-mail",
    makePrimary: "Make primary",
    addEmail: "Add e-mail",
    submit: "Submit",
    deleteAccount: "Delete my account",
    deleteAccountConfirmation:
      "Are you sure you want to delete your eduBadges account?",
  },
  modal: {
    cancel: "Cancel",
    confirm: "Confirm",
  },
  backpack: {
    title: "Behaalde badges",
  },
  notFound: {
    main: "404 - Not Found",
  },
  teacher: {
    sidebar: {
      search: "Zoeken",
      filters: {
        faculties: "Issuer groepen",
        issuers: "Issuers",
        show_all: "Toon meer",
        show_less: "Toon minder",
      },
    },
    breadcrumb: {
      back: "terug",
    },
    name: "Naam",
    badgeclasses: {
      title: "Badgeclasses",
      created: "Date created",
      recipients: "Recipients",
      ects: "ECTS",
    },
    issuers: {
      title: "Issuers",
    },
    faculties: {
      title: "Groepen",
    },
    badgeRequests: {
      award: "Ken badge toe",
    },
    badgeRevoked: {
      revoke: "Verwijder badge",
    },
  },
  student: {
    enroll: "Aanvragen",
    enrolled: "Aangevraagd",
  },
  manage: {
    tabs: {
      issuers: "Issuers",
      faculties: "Groepen",
      badgeclasses: "Badgeclasses",
      badgeclassOverview: "Overview",
      userManagement: "User management",
      enrollments: "Ingeschreven",
      assertions: "Toegekend",
    },
    edit: {
      edit: "edit",
      institution: "Wijzig instituut",
      faculty: "Wijzig groep",
      issuer: "Wijzig issuer",
      badgeclass: "Wijzig badgeclass",
      save: "Opslaan",
      cancel: "Annuleren",
    },
    new: {
      create: "new",
      faculty: "Nieuwe groep maken",
      issuer: "Nieuwe issuer maken",
      badgeclass: "Nieuwe badgeclass maken",
      save: "Opslaan",
      cancel: "Annuleren",
    },
    award: {
      title: "Award badges directly",
      description:
        "Fill in the email address of the person you'd like to award the badge to. Your request will be sent, and you will be notified when it's accepted or denied",
      submit: "Award badge",
      addAnother: "+ Add another",
      addBulk: "Add many at once",
    },
    bulkAward: {
      title: "Add many recipients at once",
      description: "Copy and paste email addresses in the form below",
      submit: "Add recipients",
    },
  },
  footer: {
    tip: "Tip of info nodig?",
    help: "Help & FAQ",
    poweredBy: "Trots aangeboden door",
    surf: "SURF",
  },
  error: {
    101: "Kan emailadres niet registreren. Het adres is al in gebruik",
    102: "Je hebt dit emailadres al toegevoegd. Je moet nog verifieren",
    103: "Kan niet het primaire emailadres verwijderen",
    104: "Kan niet het enige emailadres verwijderen",
    105: "Verifieer het emailadres voordat je het adres primair maakt",
    201: "Kan niet enrollen: je bent al enrolled",
    202: "Kan niet enrollen: je hebt deze badge al",
    203: "Kan niet enrollen: je hebt geen studentenaccount",
    204: "Ongeldige enrollment id",
    205: "Enrollment niet gevonden",
    206: "Awarded enrollments kunnen niet teruggetrokken worden",
    207: "Gebruikers kunnen alleen eigen enrollments terugtrekken",
    208: "Missende badgeclass id",
    209: "Kan niet enrollen",
    210: "Geen toegang. Check je assigned role in de Badgeclass die hoort bij deze enrollment",
    211: "Enrollment is al afgewezen",
    212: "Awarded enrollments kunnen niet afgewezen worden",
    601: "Geen toegang. Check je assigned role in de Issuer",
    701: "Ongespecifieerde share provider",
    702: "Ongeldige share provider",
    801: "Cannot change grading table, assertions have already been issued",
    802: "Cannot change brin, assertions have already been issued",
  },
  models: {
    institution: {
      created: "Vanaf",
      admin: "Admin",
      brin: "BRIN code",
      description: "Beschrijving",
      grading_table: "Grading table",
      image: "Logo",
      name: "Name",
    },
    faculty: {
      created: "Aangemaakt",
      admin: "Admin",
      description: "Beschrijving",
      name: "Naam",
    },
    issuer: {
      description: "Beschrijving",
      email: "Contact emailadres",
      created: "Aangemaakt",
      admin: "Admin",
      email_header: "Contact",
      url_header: "Website",
      image: "Logo",
      name: "Naam",
      url: "Website URL",
      faculty: "Groep",
    },
    badgeclass: {
      issuer: "Issuer",
      image: "Badge foto",
      created: "Aangemaakt",
      admin: "Admin",
      name: "Naam",
      description: "Beschrijving",
      criteria_text: "Wat is benodigd om deze badge te verdienen?",
      criteria_url_value: "Link to the earning criteria:",
      criteria_url: "Criteria URL",
      directAward: "Direct award",
      expiresAfter: "Expires after",
      expiresAfterNever: "Never",
      expiresAfterValue: "{{nbr}} weeks",
      expireSettings: "Default expiration settings",
      language: "Language of instruction",
      learningOutcome: "Learning outcome",
      ects: "Credit points",
      ectsLong: "European Credit Transfer and Accumulation System",
      eqf: "NLQF niveau",
      educationProgramIdentifier: "ISAT",
      educationProgramIdentifierLong: "Education Program Identifier",
      notSet: "Geen waarde opgegeven",
      expirationPeriods: {
        days: "Days",
        weeks: "Weeks",
        months: "Months",
        years: "Years",
      },
      headers: {
        basicInformation: "Basic information",
        earningCriteria: "Earning criteria",
        creditPoints: "Credit Points",
      },
      info: {
        educationProgramIdentifier:
          "Consult <a target='_blank' rel='noreferrer' href='https://duo.nl/zakelijk/images/studiecodes.pdf'>DUO_CROHO</a> or <a target='_blank' rel='noreferrer' href='https://kwalificaties.s-bb.nl/Lijsten/Groep/14'>SBB_CREDO</a> if you don’t know the code.",
        eqf:
          "Check <a target='_blank' rel='noreferrer' href='https://www.nlqf.nl/nlqf-niveaus'>https://www.nlqf.nl/nlqf-niveaus</a> for help",
        ects:
          "Whole and half points only. <br/>A minimum of 0.5 points is required.",
      },
      publicUrl: "Public URL",
    },
    badge: {
      emailAddress: "Email address",
      emailAddresses: "Paste email addresses",
      details: "Details",
    },
  },
  file: {
    noFileSelected: "No file selected",
    upload: "Upload image",
    remove: "Remove image",
    disclaimer:
      "Image must be png, at least 90x90 pixels and smaller than 256KB.",
  },
};
