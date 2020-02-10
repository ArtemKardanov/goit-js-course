const spinner = document.querySelector('#spinner');

export default {
  show() {
    spinner.classList.remove('lds-roller');
  },

  hide() {
    spinner.classList.add('lds-roller');
  },
};
