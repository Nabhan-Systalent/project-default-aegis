// auto-generated — do not edit

const BASE = '/api';

/** Get LLM usage and cost */
export async function getTokenUsage(): Promise<unknown> {
  const res = await fetch(`${BASE}/metrics/costs`, { method: 'GET' });
  if (!res.ok) throw new Error(`getTokenUsage failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}

/** List active agent workflows */
export async function getWorkflowStatus(): Promise<unknown> {
  const res = await fetch(`${BASE}/workflows`, { method: 'GET' });
  if (!res.ok) throw new Error(`getWorkflowStatus failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}

/** Ingest BRD files */
export async function ingestDocument(): Promise<void> {
  const res = await fetch(`${BASE}/documents`, { method: 'POST' });
  if (!res.ok) throw new Error(`ingestDocument failed: ${res.status}`);
}
