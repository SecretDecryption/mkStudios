import { notFound } from "next/navigation";

export default function RsvpPreview() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <main className="rsvp-preview">
      <a className="text-link" href="/#grand-opening">
        ← Back to the website preview
      </a>
      <p className="eyebrow">Private preview · No responses are saved</p>
      <h1>MK Studio Grand Opening RSVP</h1>
      <p>
        Sunday, November 29, 2026 · 1:00–4:00 PM<br />
        18 Ainslie Street South, Cambridge, ON
      </p>
      <p>Please submit one RSVP per party.</p>
      <div className="rsvp-preview-fields">
        <label>
          Will you be joining us?
          <select defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Yes, I’ll be there</option>
            <option>No, I’m unable to attend</option>
          </select>
        </label>
        <label>
          Your full name (and the names of any guests)
          <textarea rows={2} />
        </label>
        <label>
          Number of guests attending, including you
          <select defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>1</option><option>2</option><option>3</option>
            <option>4+</option><option>0 — unable to attend</option>
          </select>
        </label>
        <label>Email address<input type="email" /></label>
        <button className="button button-dark" type="button" disabled>
          Submit RSVP (disabled in preview)
        </button>
      </div>
    </main>
  );
}
