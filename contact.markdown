---
layout: page
title: Contact
permalink: /contact
order: 5
---
<style>
  .page-content {
  
  }

  .page-content form {
    margin: auto;
    max-width: 414px;
    display: grid;
    grid-gap: 2rem;
    font-size: 1.1rem;
  }

  .page-content form input, .page-content form textarea {
    font-size: inherit;
    padding: 1rem;
  }

  .page-content form textarea {
    resize: vertical;
    min-height: 6rem;
  }

   .page-content form button {
    justify-self: flex-end;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    background: transparent;
    color: black;
    border: 1px solid black;
    opacity: 0.5;
    cursor: pointer;
    font-size: inherit;
  }

  .page-content form button:hover {
    opacity: 1;
  }

  .page-content form button:active {
    opacity: 1;
    background: black;
    color: white;
  }
</style>

<form action="/api/contact" method="POST" onsubmit="javascript:sendEmail(event)">
  <input id="name" type="text" placeholder="Name"/>
  <input id="email" type="email" placeholder="Email address"/>
  <textarea id="message" placeholder="Message"></textarea>
  <button type="submit">send</button>
</form>
<script>
async function sendEmail(event) {
  event.preventDefault();
  const form = event.target;
  const fields = Array.from(form.querySelectorAll(`input:not([type="button"])[id], textarea[id]`));
  const url = form.action;

  const body = fields.reduce((body, el) => ({...body, [el.id]: el.value}), {});
  console.log(body);

  let res;

  try {
    res = await fetch(url, {
      method: "POST", 
      headers: {
        "content-type": "application/json"
      }, 
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error(err);
  } finally {
    if (!res?.ok) {
      return alert(`ERROR sending email`);
    }

    return alert(`Email sent successfully!`);
  }
}
</script>
