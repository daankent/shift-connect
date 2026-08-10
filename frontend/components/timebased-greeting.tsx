export function TimebasedGreeting({name}: {name?: string}){
  return (
    `Goedeavond ${name || ""},`
  )
}