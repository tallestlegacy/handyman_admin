import { handymen, services } from "./store";


export async function updateData () {
    const hRes =  await fetch("/api/handyman");
    const _handymen = await  hRes.json()
    const sRes =  await fetch("/api/service");
    const _services = await  sRes.json();

    handymen.set(_handymen);
    services.set(_services);
}