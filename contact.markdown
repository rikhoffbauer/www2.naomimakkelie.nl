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

  .page-content h1 {
    text-align: center;
    top: 50%;
    transform: translate(-50%);
    position: fixed;
    left: 50%;
  }
</style>
<h1 style="display: none">Email sent successfully</h1>
<form action="/api/contact" method="POST" onsubmit="javascript:sendEmail(event)">
  <input id="name" type="text" placeholder="Name" autofocus/>
  <input id="email" type="email" placeholder="Email address"/>
  <textarea id="message" placeholder="Message"></textarea>
  <button type="submit">send</button>
</form>
<script>
async function sendEmail(event) {
  event.preventDefault();
  const form = event.target;
  const h1 = event.target.parentElement.querySelector(`h1`);
  const fields = Array.from(form.querySelectorAll(`input:not([type="button"])[id], textarea[id]`));
  const url = form.action;

  const body = fields.reduce((body, el) => ({...body, [el.id]: el.value}), {});
  console.log(body);

  let res, error;

  try {
    res = await fetch(url, {
      method: "POST", 
      headers: {
        "content-type": "application/json"
      }, 
      body: JSON.stringify(body),
    });
  } catch (err) {
    error = err;
  } finally {
    if (!res?.ok || error) {
      //return alert(`ERROR sending email`);
    }

    form.style.display = "none";
    h1.style.display = "block";
  }
}
</script>
