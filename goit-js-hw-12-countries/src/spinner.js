const spinner = document.querySelector('#spinner');

export default {
  hide() {
    spinner.classList.remove('lds-roller');
  },

  show() {
    spinner.classList.add('lds-roller');
  },
};
