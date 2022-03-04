import "./Skills.css"

const Skills = () => {
    return (
        <>
            <div class="skillcard">
                <h1 class="MySkills">My Skills</h1>


                <div class="pyskill animate__heartBeat">
                    <div class="skills html"><p>HTML</p><span>90%</span></div>
                </div>


                <div class="pyskill animate__heartBeat">
                    <div class="skills css"><p>CSS</p><span>80%</span></div>
                </div>

                <div class="pyskill animate__heartBeat">
                    <div class="skills bootstrap"><p>Bootstrap</p><span>70%</span></div>
                </div>


                <div class="pyskill animate__heartBeat">
                    <div class="skills js"><p>JavaScript</p><span>65%</span></div>
                </div>

                <div class="pyskill animate__heartBeat">
                    <div class="skills python"><p>Python</p><span>55%</span></div>
                </div>

                <div class="pyskill animate__heartBeat">
                    <div class="skills django"><p>Django</p><span>50%</span></div>
                </div>

                <div class="pyskill animate__heartBeat">
                    <div class="skills psql"><p>PostgreSQL</p><span>40%</span></div>
                </div>


                <div class="pyskill animate__heartBeat">
                    <div class="skills react"><p>React</p><span>25%</span></div>
                </div>

                <div class="dev"></div>
            </div>
        </>
    )
}

export default Skills