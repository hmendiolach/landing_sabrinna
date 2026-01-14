export interface Dictionary {
  navbar: {
    bookNow: string;
  };
  hero: {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    cta: string;
    badges: string;
  };
  services: {
    heading: string;
    subheading: string;
    tantricTitle: string;
    tantricDesc: string;
    relaxationTitle: string;
    relaxationDesc: string;
    energyTitle: string;
    energyDesc: string;
  };
  booking: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    cityLabel: string;
    dateLabel: string;
    submitButton: string;
    helperText: string;
    smsTemplate: string; // "Hi Sabrina, my name is {name}. I would like to book a massage session for {date} at {time} in {city}."
  };
  footer: {
    description: string;
    rights: string;
  };
  smsFloat: {
    message: string;
    hoverText: string;
  };
  thankYou: {
    title: string;
    messagePart1: string;
    messagePart2: string;
    subMessage: string;
    backHome: string;
  };
}
