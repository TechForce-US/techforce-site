---
title: "Contact"
date: 2024-01-01
draft: false
language: en
description: "Get in touch with Tech Force LLC. We offer Fractional CTO services, custom software development, AI consulting, and more for startups and SMBs."
---

<div class="not-prose max-w-xl mx-auto">

<p class="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
  Whether you need a Fractional CTO, custom software, help rescuing a broken codebase, or an AI strategy —
  tell us what you're working on and we'll respond within one business day.
</p>

<form id="contact" name="contact" class="space-y-6">
  <div>
    <label for="name" class="block mb-2 font-semibold text-gray-900 dark:text-gray-200 text-sm">Your Name</label>
    <input type="text" name="name" id="name"
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="Jane Smith" required>
  </div>
  <div>
    <label for="email" class="block mb-2 font-semibold text-gray-900 dark:text-gray-200 text-sm">Your Email</label>
    <input type="email" name="email" id="email"
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="jane@company.com" required>
  </div>
  <div>
    <label for="subject" class="block mb-2 font-semibold text-gray-900 dark:text-gray-200 text-sm">What brings you here?</label>
    <select name="subject" id="subject"
      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <option value="">Select a service...</option>
      <option value="Fractional CTO">Fractional CTO</option>
      <option value="Application Development">Application Development</option>
      <option value="AI Agent Orchestration">AI Agent Orchestration &amp; Strategy</option>
      <option value="Vibe Code Rescue">Vibe Code Rescue</option>
      <option value="Architecture Consulting">Architecture Consulting</option>
      <option value="SIS Product">Student Information System (SIS)</option>
      <option value="Sound Security">Sound Security</option>
      <option value="Other">Other / Not Sure</option>
    </select>
  </div>
  <div>
    <label for="message" class="block mb-2 font-semibold text-gray-900 dark:text-gray-200 text-sm">Tell us about your situation</label>
    <textarea id="message" name="message" rows="6"
      class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder="What are you trying to build or solve? What's broken? What does success look like?"></textarea>
  </div>
  <div class="h-0 overflow-hidden m-0 absolute">
    <input type="text" id="first-name" name="first_name" class="h-0">
  </div>
  <div class="flex items-center gap-4">
    <button type="submit"
      class="px-8 py-3 font-bold text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 transition-colors">
      Send Message
    </button>
    <div id="spinner" class="hidden animate-spin rounded-full h-8 w-8 border-primary-500 border-4 border-dotted"></div>
  </div>
  <p id="form-submitted" class="hidden text-green-600 dark:text-green-400 font-semibold">
    Message sent — we'll be in touch within one business day.
  </p>
  <p id="form-error" class="hidden text-red-600 dark:text-red-400">
    Something went wrong. Please email us directly at jmstewart1127@gmail.com.
  </p>
</form>

</div>

<script>
  const form = document.querySelector('#contact');
  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    document.querySelector('#form-error').classList.add('hidden');
    document.querySelector('#spinner').classList.remove('hidden');

    const formInputs = this.elements;
    if (formInputs['first_name'].value.length) return;

    const formData = new FormData();
    formData.append('name', formInputs['name'].value);
    formData.append('email', formInputs['email'].value);
    formData.append('subject', formInputs['subject'].value);
    formData.append('message', formInputs['message'].value);

    const response = await fetch('https://formsubmit.co/jmstewart1127@gmail.com', {
      method: 'POST',
      body: formData
    });

    submitButton.disabled = false;
    document.querySelector('#spinner').classList.add('hidden');

    if (!response.ok) {
      document.querySelector('#form-error').classList.remove('hidden');
      return;
    }

    document.querySelector('#form-submitted').classList.remove('hidden');
    form.reset();
  });
</script>
