export default async (request, context) => {
  const country = context.geo?.country?.code;
  const region = context.geo?.subdivision?.code;

  const isArizona = country === 'US' && region === 'AZ';

  if (isArizona) {
    return context.next();
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Island Pantry — Arizona Pickup Only</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500&family=Work+Sans:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/style.css">
</head>
<body>
  <div class="blocked">
    <div class="box">
      <div class="eyebrow">Arizona Pickup Only</div>
      <h1>Not quite in range</h1>
      <p>Island Pantry is a small cottage kitchen offering local pickup in Arizona only — we're not able to take orders from outside the state right now.</p>
      <p style="margin-top:20px;"><a href="/" class="btn btn-ghost">Back to Island Pantry</a></p>
    </div>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 403,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
};

export const config = { path: '/shop.html' };
