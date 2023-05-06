import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');

const saveFeedbackState = throttle(() => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500);

emailInput.addEventListener('input', saveFeedbackState);
messageInput.addEventListener('input', saveFeedbackState);

const feedbackStateJSON = localStorage.getItem('feedback-form-state');
if (feedbackStateJSON) {
  const feedbackState = JSON.parse(feedbackStateJSON);
  emailInput.value = feedbackState.email;
  messageInput.value = feedbackState.message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };

console.log(feedbackState);
    
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});