const codes = document.querySelectorAll('.otp')
codes[0].focus()
codes.forEach((otp, idx) => {
   otp.addEventListener('keydown', (e) => {
       if(e.key >= 0 && e.key <=9) {
           codes[idx].value = ''
           setTimeout(() => codes[idx + 1].focus(), 10)
       } else if(e.key === 'Backspace') {
           setTimeout(() => codes[idx - 1].focus(), 10)
       }
   })
})
