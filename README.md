# aSAFEBOX® — Landing (Next.js static)

## Requisitos
- Node 18+ (opcional si usas GitHub Actions)
- Cuenta Formspree (o Beehiiv/Mailchimp/Brevo) para el formulario

## Variables
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = https://formspree.io/f/XXXXXX
- `NEXT_PUBLIC_BASE_PATH` = "/REPO" si publicas en `user.github.io/REPO`. Vacío si es `user.github.io`.

## Desarrollo
```bash
npm i
export NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/XXXXXX"
# export NEXT_PUBLIC_BASE_PATH="/REPO" # si usas páginas de proyecto
npm run dev
```

## Build estático
```bash
npm run build
# genera out/
```

## Deploy con GitHub Actions
1) Subí el repo y en **Settings → Pages** elegí **GitHub Actions**.
2) En **Settings → Secrets → Actions** agregá `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
3) Hacé push a `main`.

## SEO
- Metadata en `app/layout.tsx`.
- `sitemap.ts` y `robots.ts` listos.
- Actualiza `public/og.png`.

## Accesibilidad & UX
- Focus visible, labels, validación en cliente, redirección a `/thanks`.
- Honeypot `_gotcha` simple para bots.

## Proveedor de email
- Reemplazá el endpoint de Formspree en `EmailCapture.tsx`.
- Para Mailchimp/Beehiiv/Brevo podés usar sus endpoints públicos o forms embebidos compatibles con sitios estáticos.

## Copy base
**Propuesta**: Capa de integridad digital que convierte cada operación en evidencia técnica. Lo esencial nunca se expone; la integridad se prueba con ZK/Blind-Reveal. Auditorías en minutos. Preparado para la década post-cuántica.

**CTA**: "Quiero saber más" → capta email y redirige a `/thanks`.

**Secciones futuras**: Casos por vertical (Fintech, Bancos, Real Estate, DeFi), FAQs, Contacto.
