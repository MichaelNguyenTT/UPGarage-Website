const toastTrigger = document.getElementById('cartToast')
const toastCart = document.getElementById('liveToast')

if (toastTrigger) {
  const toastAlert = bootstrap.Toast.getOrCreateInstance(toastCart)
  toastTrigger.addEventListener('click', () => {
    toastAlert.show()
  })
}