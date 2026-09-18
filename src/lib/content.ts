import boxers from "../../content/boxers.json";
import coaches from "../../content/coaches.json";
import clubs from "../../content/clubs.json";
import organizations from "../../content/organizations.json";
import fights from "../../content/fights.json";
import championsData from "../../content/champions.json";
import cotesData from "../../content/cotes.json";

export type Boxer = (typeof boxers)[number];
export type Coach = (typeof coaches)[number];
export type Club = (typeof clubs)[number];
export type Organization = (typeof organizations)[number];

export function getBoxers() {
  return boxers;
}

export function getBoxer(slug: string) {
  return boxers.find((b) => b.slug === slug) ?? null;
}

export function getCoaches() {
  return coaches;
}

export function getCoach(slug: string) {
  return coaches.find((c) => c.slug === slug) ?? null;
}

export function getClubs() {
  return clubs;
}

export function getClub(slug: string) {
  return clubs.find((c) => c.slug === slug) ?? null;
}

export function getOrganizations() {
  return organizations;
}

export function getOrganization(slug: string) {
  return organizations.find((o) => o.slug === slug) ?? null;
}

export function getFights() {
  return fights;
}

export function getChampions() {
  return championsData;
}

export function getCotes() {
  return cotesData;
}
