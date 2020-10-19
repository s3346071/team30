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


      <p >Student Number: S3346071 </p>
      <p>Yury is interested in IT due to its disruptive nature and how it has significantly altered many aspects of our lives. He has witnessed how the way we work, study, commute and socialize, to name a few, are becoming increasingly convenient and efficient.

      He has spent a year working in the sales department for a cloud backup company and got to know different aspects of the IT profession.

      In his spare time, he is teaching himself web development and Object-oriented programming. He has completed a couple of courses on HTML and CSS. He is currently undertaking an online JavaScript course. He finds it fascinating adding interactivity to his websites, giving its visitors a complete new experience and feel. He still has a long journey ahead of him as he continues to hone his web development skills.

      His goal is to complete a Bachelor of Information Technology and get a job in the field of web-development after graduating. He looks forward to sharing his existing knowledge on web development with Team 30.</p>
      <p>Personality Test | 16Personalities: ISTP - Explorer </p>

      <a href="https://s3346071.github.io/assignment1/">My Website</a>

      `
    }

      else if (e.target.classList.contains('andrew_info')) {
        infobox.innerHTML =
        `
        <p>Student Number: S3865809</p>
        <p>He is an aviation enthusiast and loves flying and travelling. He speaks English as his native language and now also speaks German having lived in Germany for the past eight years. Andrew is also now currently learning Spanish. Becoming an IT Project Coordinator is a dream role of his. In 2018 he was fortunate enough to be part of a team that was responsible for the implementation of a new financial reporting system for the airline he worked for. It was through this positive experience that he realized how important it is for companies to move forward with information technology advancements, and how much he enjoyed learning about this topic while working more closely on the project. He is able to draw on these past experiences to bring value to Team 30 in Intro to IT at RMIT. </p>
        <p>The results of an online Myers-Briggs test.</p>
        <p>After completing the 16 Personalities test online (16personalities.com), Andrew is classified as an ‘Adventurer' (ISFP). This type of person is depicted as being “known for their kindness and artistic skills” (16personalities – conclusion).  These people use their thoughts, wishes and emotions to make important decisions.

        According to the website educationplanner.org, and also how-to-study.com, Andrew is a visual learner. He needs to see something in order to learn or retain the information he is being presented with. There are supposedly three types of ques that people learn best from. These are visual, auditory, and tactile. </p>
        <p>After completing the competency test on 123test.com, Andrew discovered some abilities where he is up to the average and some abilities that are below average. This test was carried out by asking 155 questions about topics ranging from how a person perceives emotions to if someone believes they have good time management skills. The results are then shown as to how you stand in relation to the amount of people that answered similarly or the same to you. So rather than focussing on what your strengths or weaknesses may be, it shows your results simply in comparison to the percentage of people that answered the same. The results show that Andrew is in a minority when it comes to  ‘persevering’ compared with the majority of other people. On the other hand, he seems to be part of the majority when it comes to ‘planning and organizing’, and also ‘checking’.

        His personality type just needs a push to get going sometimes. After completing these tests, Andrew is definitely more aware of these character traits. However, in a team environment he would still feel more comfortable being a follower and not a leader, unless he is certain that he knows the topic and content extremely well that he is working on. </p>

        <a href="https://andocd.github.io/MyProfile/">My Website</a>

        `
    }

    else if (e.target.classList.contains('georgia_info')) {
      infobox.innerHTML =
      `
      <p>Student Number: S3873175</p>
      <p> From the start of my education right through to the end, I moved schools five times, and I was introduced to multiple people and new surroundings. After completing my VCE studies, I had planned to start a Creative Industries course at Victoria University. However, I decided against that by deferring from the classes as I had no idea what I could truly picture myself doing in life.

      Since then I have found my real passion lies within the creative arts and technology. I have worked in hospitality and retail, and I have been a musician in a band as a lead guitarist for the past six years. From working in busy environments full of people, I have been able to improve my ability to work within a team, and my customer service skills. Upon looking for jobs to move up from my current position, I saw many IT roles were searching for candidates. Since I have always had an interest in technology I decided it could be time for a career change, thus leading me to enrol in the Bachelor of IT at RMIT and become a member of Team 30.

      I have no real prior expertise within the field, and I hope to gain the relevant experience throughout this course and further self-growth in the outside world, that will lead me to some development roles. Front-end development has caught my eye specifically as it still incorporates creative elements of design etc.
      </p>

      <ul>
      <li>Myers-Brigg 16 Personality Test</li>
      <li>Personality type: Defender </li>
      <li>Strengths:  loyal and hard-working, good practical skills, supportive, reliable and patient. </li>
      <li>Weaknesses: Humble and shy, Overload themselves, repress their feelings, too altruistic. </li>
      <li>Learning Style Test:</li>
      <li>Auditory: 35%</li>
      <li>Visual: 50% </li>
      <li>Tactile: 15% </li>
      </ul>

      <h3>Creativity Style Test:  </h3>
      <h3>Creativity enriches you</h3>
      <p>“Creativity is separate from the real world for you. But it’s a magical world in which you like to immerse yourself. When you’re involved in it, you get the wonderful sensation that there are no limits, that anything is possible. What you are really looking for is harmony — you want to feel you are a part of what you create.” (Psychologies UK – 2020) </p>

      <p>The results from these tests will give my teammates a better indication of what my personality could be like in a group setting. As someone who can be equally introverted and extroverted, I can show great listening skills while also being able to come forward and suggest ideas in areas that I am comfortable with. Being mainly a visual learner, I get the most out of watching people or going through the task myself in front of me to get a better understanding. </p>


      <a href="https://s3873175.github.io/Assignment-One/">My Website</a>
      `
  }

  else if (e.target.classList.contains('leigh_info')) {
    infobox.innerHTML =
    `
    <p>Student No: S3875525</p>
    <p>This transport technology is also providing insights to fleet managers through the use of big data. Having worked in relationship and project management roles previously, he is studying now to boost his technical knowledge and keep up with the changes in technology. Interested in systems integration and how different technologies can talk to each other, Leigh is hoping to reduce his dependency on colleagues in technical discussions.

      When not chasing his young daughters around, Leigh tries to keep fit, plays guitar, works in his garden, and brews beer in his spare time. He has recently purchased a Raspberry Pi and is eager to try some programming and complete some IoT projects at home. In Leighs current course at RMIT, he is a member of Team 30.</p>
      <h3>Test results</h3>
      <table class="ideal_jobs_table">
        <thead>
          <tr>
            <th>Myer-Briggs -  16Personalities  </th>
            <th>Big Five Personality Test</th>
            <th>Learning Styles Test </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Campaigner</td>

            <td>
            <table class="ideal_jobs_table">

              <tbody>
              <thead>
                <tr>
                  <th>Factor Label</th>
                  <th>Score Percentile</th>
                </tr>
              </thead>
                <tr>
                  <td>Extroversion </td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>Emotional Stability </td>
                  <td>87</td>
                </tr>
                <tr>
                  <td>Agreeableness</td>
                  <td>71</td>
                </tr>
                <tr>
                  <td>Conscientiousness </td>
                  <td>84</td>
                </tr>
                <tr>
                  <td>Intellect/Imagination</td>
                  <td>70</td>
                </tr>


                </tbody>
                </table>

            </td>

            <td>Reflector </td>
          </tr>


          </tbody>
          </table>

          <p>As a “Campaigner” Leigh is enthusiastic and positive with a genuine interest in people. While having good energy, Campaigners need to focus and not overthink which will be important in this group task.

          Whilst the Finally, the Big Five Personality Test results point to relatively stable character, the Myer-Briggs result is partly supported by the result in the Learning Styles Test. This suggests that reflection – standing back to observe, collecting data and thinking about what happened – is his learning method, it will be key to get involved and not be an onlooker. </p>

          <a href="https://leigh-crypto.github.io/">My Website</a>

    `
}

else if (e.target.classList.contains('jake_info')) {
  infobox.innerHTML =
  `
  <p>Student No: S3879428</p>
  <p>Following school, he undertook and completed a Cert III in Heavy Automotive Diesel Mechanics which led him to employment on the outer suburbs of Sydney. As a full time mechanic, he is passionate about the future of the industry. By broadening his knowledge in IT, he hopes to increase workplace efficiency and make it a safer and more fulfilling practice to be a part of.  Whilst not working, he enjoys challenging himself outdoors by rock climbing and trail running. He enjoys reading contemporary tech articles and developing new skill in computing through the likes of LinkedIn Learning and FreeCodeCamp. Jake’s interest in IT does not have a long history. He grew up using electronic devices for schoolwork and entertainment. However, it took a global health pandemic for him to realise the diverse, proliferating, and intensifying nature of technology. His passion for personal development has led him to RMIT and into Team 30. </p>

  <h3>Test results</h3>
  <table class="ideal_jobs_table">
    <thead>
      <tr>
        <th>Personality Test | 16Personalities </th>
        <th>Social Persona | ProProfs  Test</th>
        <th>Learning styles | PersonalityMax </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Protagonist </td>

        <td>Amiable </td>
        <td>
        <ul>
        <li>Auditory – 38% </li>
        <li>Kinaesthetic – 33% </li>
        <li>Tertiary – 29% </li>
        </ul>
        </td>
      </tr>


      </tbody>
      </table>

      <p>As a result of completing these tests, my team will have a greater awareness of who I am. The better our understanding of each other, the better we can utilise each other’s strengths to the teams advantage. As a ‘Protagonist’ I hope to encourage open communication and be aware of sensitivities within the team. I can be relied upon to follow through on commitments. However, I must be very aware of my altruistic trait and not to allow other people’s problems to become my own. My ‘Amiable Social Persona’ is a reminder that I can be very supportive when necessary and so I should be aware of other team members losing motivation or becoming overwhelmed. Knowing that I am predominantly an Auditory Learner, the team should be aware that I may miss visual details. However, of benefit, I will likely remember and recall spoken information well. </p>


      <a href="https://mrtorquey.github.io/hello-world/">My Website</a>
  `
}
else if (e.target.classList.contains('emma_info')) {
  infobox.innerHTML =
  `
  <p>Student Number: S3852481</p>
  <p>I had done 2 years and wasn’t finding it very interesting so I started doing computer science units to change degrees. It was a little bit of impulsiveness and a little bit my love of video games. I learnt math, physics, problem solving, and some C++ programming while at UOW. In my own time I have also learnt 3D modelling in Blender and how to make a small game in Unity. I have many hobbies including art and music. Recently I began learning to play the bass after my grandmother bought me one, I think creative hobbies go hand in hand with IT work. I am excited to be a part of Team 30 in Intro to IT.</p>

  <p>Myers-Briggs Test: INFP-T/Mediator </p>
  <p>Mediators are introverted, intuitive, feeling, and prospecting. Strengths include being: thoughtful, generous, open-minded, creative, passionate, and loyal to their values. Weaknesses include being: overly idealistic, self-critical, impractical, emotionally-driven, conflict-averse, and difficult to get to know.</p>

  <p>Learning Style Test: Tactile Learner </p>
  <p>Tactile learners learn by touching and doing. They learn best when they are moving, building, touching, or drawing what they learn. This also applies to learning through doing the exercises or questions in a book rather than reading the chapter.</p>

  <p>Four Temperaments Test: Sanguine </p>
  <p>The sanguine temperament is spontaneous, sociable, and creative. They can also be sensitive and thoughtful. They have a weakness for following through all the way, being late, and forgetful.</p>

  <p>What does this mean? </p>
  <p>In a team setting knowing the meaning behind personality test results can be useful for spotting potential clashes between team members and may prove helpful in resolving conflicts. Knowing who is likely to take charge and who may need a push to interact with in a team is important, especially online teams where it can be hard to get a read on someone. My results show that in a team I am able to be creative and open-minded, but that I may have trouble with setting realistic goals and completing them. I have to be considerate to my team about completing my work on time. </p>

  <a href="https://else-emma.github.io/Assignment1/">My Website</a>
  `
}

  })
})

textbox.addEventListener('click', e=> {
  if(e.target !== e.currentTarget) return
  textbox.classList.remove('active')
})




function animateOnScroll(){
  let target = document.querySelectorAll(".fade-in");
  target.forEach(i=>{
    let targetTop = i.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (targetTop <= windowHeight * 0.40) {
      i.classList.add("appear");
    }
     else if (targetTop >= windowHeight*0.10) {
       i.classList.remove("appear");
     }
  })
}

window.addEventListener('scroll', animateOnScroll)
