
import { assertContactId } from './invariants';
import { IngestEvent } from './types';

export function ingest(event: IngestEvent) {
  assertContactId(event.contact_id);
  return { ok: true };
}
