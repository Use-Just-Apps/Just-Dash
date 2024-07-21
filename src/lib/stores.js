import { writable } from "svelte/store";

const format = localStorage.timeFormat;
export const timeFormat = writable(format || "twentyfour");
timeFormat.subscribe((value) => (localStorage.timeFormat = value));

const userName = localStorage.userName;
export const name = writable(userName || null);
name.subscribe((value) => (localStorage.userName = value));
