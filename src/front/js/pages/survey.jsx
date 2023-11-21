import React, {useState} from 'react'

const Survey = () => {
    const [enjoyment, setEnjoyment] = useState("")
    const companionsArray = ["Arcade", "Boone", "Lily", "Raul", "Cass", "Veroxica", "ED-E", "Rex"]
    return (
      <div className='mx-auto w-75 bg-success p-3'>
          <div className='d-flex flex-column justify-content-center align-items-start mb-2'>
              <h4 className='text-start'>Name of your character</h4>
              <input type='text' className='form-control' />
          </div>
          <div className='d-flex flex-column justify-content-center align-items-start mb-2'>
              <h4 className='text-start'>Did you enjoy your experience with Fallout: New Vegas?</h4>
              <div className="form-check">
                  <input className='form-check-input' type='radio' value={"Definately!"} checked={enjoyment === "Definately!"} onChange={e => setEnjoyment(e.target.value)} />
                  <h5 className='form-check-label'>Definately!</h5>
              </div>
              <div className="form-check">
                  <input className='form-check-input' type='radio' value={"It was alright..."} checked={enjoyment === "It was alright..."} onChange={e => setEnjoyment(e.target.value)} />
                  <h5 className='form-check-label'>It was alright...</h5>
              </div>
              <div className="form-check">
                  <input className='form-check-input' type='radio' value={"Not a chance!"} checked={enjoyment === "Not a chance!"} onChange={e => setEnjoyment(e.target.value)} />
                  <h5 className='form-check-label'>Not a chance!</h5>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-start mb-2'>
                  <h4 className='text-start'>Which faction did you ultimately join for the Second Battle of the Hoover Dam?</h4>
                  <select className='form-select' name="hooverDam" id="">
                      <option value="">Select Faction</option>
                      <option value="The New California Republic">The New California Republic</option>
                      <option value="Caesar's Legion">Caesar's Legion</option>
                      <option value="Mr. House">Mr. House</option>
                      <option value="Myself... alongside the Yes Men">Myself... alongside the Yes Men</option>
                      <option value="I didn't do it.">I didn't do it.</option>
                  </select>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-start mb-2'>
                  <h4 className='text-start'>What was your favorite DLC Campaign to play?</h4>
                  <select className='form-select' name="dlc" id="">
                      <option value="">Select DLC</option>
                      <option value="Dead Money">Dead Money</option>
                      <option value="Honest Hearts">Honest Hearts</option>
                      <option value="Old World Blues">Old World Blues</option>
                      <option value="Lonesome Road">Lonesome Road</option>
                      <option value="Wait... what dlc?">Wait... what dlc?</option>
                  </select>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-start mb-2'>
                <h4 className='text-start'>Who were your favorite companions? (Base Game. Check all that apply)</h4>
                {companionsArray.map((comp, idx) => {
                    return (
                        <div className='form-check' key={idx}>
                            <input className="form-check-input" type="checkbox" />
                            <h5 className='form-check-label'>{comp}</h5>
                        </div>
                    )
                })}
              </div>
              <div className='d-flex flex-column justify-content-center align-items-start mb-2'>
                <h4 className="text-start">Who was your favorite character in the entire game? (DLC included)</h4>
                <textarea className='form-control' rows="3" placeholder='My favorite character was...'></textarea>
              </div>
              <button type='submit' className='btn btn-dark btn-lg'>Submit</button>
          </div>
      </div>
    )
}

export default Survey