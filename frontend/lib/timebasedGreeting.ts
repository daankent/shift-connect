export default function getTimebasedGreeting(name?: string): string {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Goedemorgen";
  }
  else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Goedemiddag";
  }
  else {
    greeting = "Goedeavond";
  }

  return `${greeting} ${name || ""},`;
}