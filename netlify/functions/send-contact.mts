declare const Netlify: {
  env: {
    get(key: string): string | undefined;
  };
};

interface ContactPayload {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  botField?: string;
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = (await req.json()) as ContactPayload;

    if (body.botField) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const topic = (body.topic || 'Contacto pelo Site').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resendApiKey = Netlify.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY is not configured in Netlify environment variables' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const toEmail = Netlify.env.get('CONTACT_TO_EMAIL') || 'the.fabulous.healing@gmail.com';
    const fromEmail =
      Netlify.env.get('CONTACT_FROM_EMAIL') || 'Fabíola Piovesan | Inuá <onboarding@resend.dev>';

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #fdfcfe; border: 1px solid #e9d5ff; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #3b1566, #7f009e); padding: 24px 28px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 22px; font-weight: 600;">Fabíola Piovesan <span style="color: #eb85a0;">| Inuá</span></h2>
          <p style="margin: 6px 0 0; font-family: Arial, sans-serif; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85;">Nova mensagem pelo site</p>
        </div>
        <div style="padding: 28px; font-family: Arial, sans-serif; color: #3b1566; line-height: 1.6;">
          <p style="margin: 0 0 12px;"><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 0 0 12px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #7f009e;">${escapeHtml(email)}</a></p>
          <p style="margin: 0 0 18px;"><strong>Assunto:</strong> ${escapeHtml(topic)}</p>
          <div style="background: #faf5ff; border-left: 4px solid #eb85a0; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Fabíola Piovesan | Inuá] ${topic} — ${name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      return new Response(JSON.stringify({ error: 'Email provider error', details: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : 'Unexpected error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export const config = {
  path: '/api/contact',
  method: ['POST'],
};