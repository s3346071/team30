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
      <p>Yury is interested in IT due to its disruptive nature and how it has significantly altered many aspects of our lives. He has witnessed how the way we work, study, commute and socialize, to name a few, are becoming increasingly convenient and efficient.

He has spent a year working in the sales department for a cloud backup company and got to know different aspects of the IT profession.

In his spare time, he is teaching himself web development and Object-oriented programming. He has completed a couple of courses on HTML and CSS. He is currently undertaking an online JavaScript course.

His goal is to complete a Bachelor of Information Technology and get a job in the field of web-development after graduating. </p>

      `
    }

      else if (e.target.classList.contains('andrew_info')) {
        infobox.innerHTML =
        `
        <p>He is an aviation enthusiast and loves flying and travelling. He speaks English as his native language and now also speaks German having lived in Germany for the past eight years. Andrew is also now currently learning Spanish. Becoming an IT Project Coordinator is a dream role of his. In 2018 he was fortunate enough to be part of a team that was responsible for the implementation of a new financial reporting system for the airline he worked for. It was through this positive experience that he realized how important it is for companies to move forward with information technology advancements, and how much he enjoyed learning about this topic while working more closely on the project. </p>

        `
    }

    else if (e.target.classList.contains('georgia_info')) {
      infobox.innerHTML =
      `
      <p> From the start of my education right through to the end, I moved schools five times, and I was introduced to multiple people and new surroundings. After completing my VCE studies, I had planned to start a Creative Industries course at Victoria University. However, I decided against that by deferring from the classes as I had no idea what I could truly picture myself doing in life.

      Since then I have found my real passion lies within the creative arts and technology. I have worked in hospitality and retail, and I have been a musician in a band as a lead guitarist for the past six years. From working in busy environments full of people, I have been able to improve my ability to work within a team, and my customer service skills. Upon looking for jobs to move up from my current position, I saw many IT roles were searching for candidates. Since I have always had an interest in technology I decided it could be time for a career change, thus leading me to enrol in the Bachelor of IT at RMIT.

      I have no real prior expertise within the field, and I hope to gain the relevant experience throughout this course and further self-growth in the outside world, that will lead me to some development roles. Front-end development has caught my eye specifically as it still incorporates creative elements of design etc.
      </p>

      `
  }

  else if (e.target.classList.contains('leigh_info')) {
    infobox.innerHTML =
    `
    <p>This transport tecnology is also providing insights to fleet managers through the use of big data. Having worked in relationship and project management roles previously, he is studying now to boost his technical knowledge and keep up with the changes in technology. Interested in systems integration and how different technologies can talk to each other, Leigh is hoping to reduce his dependency on colleagues in technical discussions.

      When not chasing his young daughters around, Leigh tries to keep fit, plays guitar, works in his garden, and brews beer in his spare time. He has recently purchased a Raspberry Pi and is eager to try some programming and complete some IoT projects at home.</p>

    `
}

else if (e.target.classList.contains('jake_info')) {
  infobox.innerHTML =
  `
  <p>Following school, he undertook and completed a Cert III in Heavy Automotive Diesel Mechanics which led him to employment on the outer suburbs of Sydney. As a full time mechanic, he is passionate about the future of the industry. By broadening his knowledge in IT, he hopes to increase workplace efficiency and make it a safer and more fulfilling practice to be a part of.  Whilst not working, he enjoys challenging himself outdoors by rock climbing and trail running. He enjoys reading contemporary tech articles and developing new skill in computing through the likes of LinkedIn Learning and FreeCodeCamp. Jake’s interest in IT does not have a long history. He grew up using electronic devices for schoolwork and entertainment. However, it took a global health pandemic for him to realise the diverse, proliferating, and intensifying nature of technology. His passion for personal development has led him to RMIT and into Team 30. </p>

  `
}
else if (e.target.classList.contains('emma_info')) {
  infobox.innerHTML =
  `
  <p>I had done 2 years and wasn’t finding it very interesting so I started doing computer science units to change degrees. It was a little bit of impulsiveness and a little bit my love of video games. I learnt math, physics, problem solving, and some C++ programming while at UOW. In my own time I have also learnt 3D modelling in Blender and how to make a small game in Unity. I have many hobbies including art and music. Recently I began learning to play the bass after my grandmother bought me one, I think creative hobbies go hand in hand with IT work.</p>

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
