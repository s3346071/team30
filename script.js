const textbox = document.createElement('div')

textbox.id = 'textbox'
document.body.appendChild(textbox)
const teamMembers = document.querySelectorAll('.text_box')
teamMembers.forEach(e => {
  e.addEventListener('click', e =>{
    textbox.classList.add('active')

    const infobox = document.createElement('div')
    infobox.id = 'infobox'
    while (textbox.firstChild) {
      textbox.removeChild(textbox.firstChild)
    }

    textbox.appendChild(infobox)
    if(e.target.classList.contains('yury_info')) {
      infobox.innerHTML =
      `
      <p>Here is Yury's profile</p>

      `
    }

      else if (e.target.classList.contains('andrew_info')) {
        infobox.innerHTML =
        `
        <p>Here is Andrews's profile</p>

        `
    }

    else if (e.target.classList.contains('georgia_info')) {
      infobox.innerHTML =
      `
      <p>Here is Georgia's profile</p>

      `
  }

  else if (e.target.classList.contains('leigh_info')) {
    infobox.innerHTML =
    `
    <p>Here is Leigh's profile</p>

    `
}

else if (e.target.classList.contains('jake_info')) {
  infobox.innerHTML =
  `
  <p>Here is Jake's profile</p>

  `
}
else if (e.target.classList.contains('emma_info')) {
  infobox.innerHTML =
  `
  <p>Here is Emma's profile</p>

  `
}

  })
})

textbox.addEventListener('click', e=> {
  if(e.target !== e.currentTarget) return
  textbox.classList.remove('active')
})

var yuryinfo = document.getElementByClassName("yury_info")

// yuryinfo.addEventListener("click",
//   function() {
//     infobox.innerHTML =
//     `
//     <p>Here is Yury's profile</p>
//
//     `
//   }
// )
