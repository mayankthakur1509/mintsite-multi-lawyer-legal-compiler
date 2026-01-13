
export function assertContactId(contact_id?: string) {
  if (!contact_id) throw new Error("contact_id invariant violated");
}
